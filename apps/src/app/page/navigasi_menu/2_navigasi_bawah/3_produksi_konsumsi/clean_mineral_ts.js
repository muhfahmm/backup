const fs = require('fs');
const path = require('path');

const dir = 'c:/utama/project/project-sendiri/EM/json/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis';

function getFiles(d) {
  let results = [];
  const list = fs.readdirSync(d);
  list.forEach(file => {
    const fullPath = path.join(d, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (file.endsWith('.ts') && file !== '2_db_ekstraksi.ts') {
      results.push(fullPath);
    }
  });
  return results;
}

const files = getFiles(dir);
let cleanCount = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  
  // Format lines cleanly with proper indentation
  const lines = content.split(/\r?\n/).filter(line => line.trim() !== '');
  const formatted = lines.map(line => {
    if (line.startsWith('//') || line.endsWith('{') || line.endsWith('};')) {
      return line;
    }
    return '  ' + line.trim();
  }).join('\n') + '\n';

  fs.writeFileSync(f, formatted, 'utf8');
  cleanCount++;
});

console.log(`Cleaned formatting for ${cleanCount} mineral TS files.`);
