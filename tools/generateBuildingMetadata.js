const fs = require('fs').promises;
const path = require('path');

async function readAllTsFiles(dir, files = []){
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await readAllTsFiles(full, files);
    else if (/\.ts$/.test(e.name)) files.push(full);
  }
  return files;
}

(async ()=>{
  const base = path.join(process.cwd(),'json','semua_fitur_negara');
  const files = await readAllTsFiles(base);
  const metadata = {};
  const dataKeyRegex = /dataKey\s*:\s*"([^\"]+)"/g;
  for (const f of files) {
    const content = await fs.readFile(f,'utf8');
    let m;
    while ((m = dataKeyRegex.exec(content)) !== null) {
      const dataKey = m[1];
      const idx = m.index;
      let start = content.lastIndexOf('{', idx);
      if (start === -1) continue;
      let depth = 0;
      let end = -1;
      for (let i = start; i < content.length; i++) {
        const ch = content[i];
        if (ch === '{') depth++;
        else if (ch === '}') {
          depth--;
          if (depth === 0) { end = i; break; }
        }
      }
      if (end === -1) continue;
      const objText = content.slice(start, end + 1);
      const biayaMatch = /biaya_pembangunan\s*:\s*([0-9.]+)/.exec(objText);
      const produksiMatch = /produksi\s*:\s*([0-9.]+)/.exec(objText);
      const satuanMatch = /satuan\s*:\s*"([^\"]+)"/.exec(objText);
      metadata[dataKey] = metadata[dataKey] || {};
      if (biayaMatch) metadata[dataKey].biaya_pembangunan = Number(biayaMatch[1]);
      if (produksiMatch) metadata[dataKey].produksi = Number(produksiMatch[1]);
      if (satuanMatch) metadata[dataKey].satuan = satuanMatch[1];
    }
  }
  const outPath = path.join(process.cwd(),'apps','src','lib','building-metadata.json');
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, JSON.stringify(metadata, null, 2), 'utf8');
  console.log('Wrote', outPath, 'keys:', Object.keys(metadata).length);
})();