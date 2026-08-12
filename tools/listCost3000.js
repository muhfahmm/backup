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
      if (dataKeyMatch) {
        const dataKey = dataKeyMatch[1];
        if (biayaMatch && Number(biayaMatch[1])===3000) {
          console.log(dataKey);
        }
      }
    }
  }
})();