const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..', 'json', 'database_kedutaan_besar');
const regions = ['afrika', 'asia', 'eropa', 'na', 'oceania', 'sa'];

regions.forEach((region) => {
  const dir = path.join(baseDir, region);
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
    console.log(`Region: ${region} (${files.length} files)`);
    files.forEach(f => console.log(`  ${f}`));
  }
});
