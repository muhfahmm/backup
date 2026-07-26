const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..', 'json', 'database_organisasi_internasional');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.ts')) {
      console.log(path.relative(baseDir, fullPath));
    }
  });
}

walk(baseDir);
