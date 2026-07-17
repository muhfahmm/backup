const fs = require('fs');
const path = require('path');

const taxDbPath = 'json/database_pajak_negara';
const regions = ['asia', 'eropa', 'afrika', 'na', 'oceania', 'sa'];

let updateLog = {
  totalUpdated: 0,
  updates: [],
  timestamp: new Date().toISOString(),
};

regions.forEach(region => {
  const regionPath = path.join(taxDbPath, region);
  if (!fs.existsSync(regionPath)) return;
  
  const files = fs.readdirSync(regionPath).filter(f => f.endsWith('.ts'));
  
  files.forEach(file => {
    const filePath = path.join(regionPath, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Temukan semua desimal dan ganti dengan bilangan bulat
    // Menggunakan regex untuk menemukan pola: angka.angka, lalu bulatkan
    const replacements = [];
    const matches = content.matchAll(/(\d+\.\d+)/g);
    
    for (const match of matches) {
      const original = match[0];
      const rounded = Math.round(parseFloat(original)).toString();
      replacements.push({
        original: original,
        rounded: rounded
      });
    }
    
    // Ganti secara unik untuk menghindari penggantian ganda
    replacements.forEach(rep => {
      // Ganti dengan placeholder dulu untuk menghindari match ganda
      content = content.replace(new RegExp('\\b' + rep.original.replace(/\./g, '\\.') + '\\b'), rep.rounded);
    });
    
    // Jika ada perubahan, simpan file
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      
      updateLog.updates.push({
        file: file,
        region: region,
        changes: replacements.length,
        details: replacements
      });
      updateLog.totalUpdated++;
    }
  });
});

// Simpan log
fs.writeFileSync(
  'tools/remove_decimal_tax_log.json',
  JSON.stringify(updateLog, null, 2),
  'utf8'
);

// Print summary
console.log('\n✅ Penghapusan Desimal Pajak Selesai!');
console.log('Total file diupdate: ' + updateLog.totalUpdated);
console.log('Total perubahan nilai: ' + updateLog.updates.reduce((sum, u) => sum + u.changes, 0));

console.log('\nContoh perubahan (5 file pertama):');
updateLog.updates.slice(0, 5).forEach((update, idx) => {
  console.log(`\n${idx + 1}. ${update.file} (${update.region}):`);
  update.details.forEach(detail => {
    console.log(`   ${detail.original} → ${detail.rounded}`);
  });
});

console.log(`\nLog lengkap: tools/remove_decimal_tax_log.json`);
