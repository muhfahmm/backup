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
  const base = path.join(process.cwd(), 'json', 'semua_fitur_negara');
  const files = await readAllTsFiles(base);
  const metadata = {};
  const entryRegex = /"[^\"]+"\s*:\s*\{([\s\S]*?)\}/g;
  for (const f of files) {
    const content = await fs.readFile(f,'utf8');
    let m;
    while ((m = entryRegex.exec(content)) !== null) {
      const body = m[1];
      const dataKeyMatch = /dataKey\s*:\s*"([^\"]+)"/.exec(body);
      const biayaMatch = /biaya_pembangunan\s*:\s*([0-9.]+)/.exec(body);
      const produksiMatch = /produksi\s*:\s*([0-9.]+)/.exec(body);
      const satuanMatch = /satuan\s*:\s*"([^\"]+)"/.exec(body);
      if (dataKeyMatch) {
        const dataKey = dataKeyMatch[1];
        metadata[dataKey] = metadata[dataKey] || {};
        if (biayaMatch) metadata[dataKey].biaya_pembangunan = Number(biayaMatch[1]);
        if (produksiMatch) metadata[dataKey].produksi = Number(produksiMatch[1]);
        if (satuanMatch) metadata[dataKey].satuan = satuanMatch[1];
      }
    }
  }
  console.log('gas_alam metadata:', metadata['gas_alam']);
})();