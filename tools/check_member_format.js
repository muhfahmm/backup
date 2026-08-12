const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..', 'json', 'database_organisasi_internasional');

function checkFormat(relPath) {
  const fullPath = path.join(baseDir, relPath);
  const content = fs.readFileSync(fullPath, 'utf8');
  console.log(`=== ${relPath} ===`);
  console.log(content.slice(0, 200));
}

checkFormat('1_organisasi_PBB/3_Interpol/memberInterpol.ts');
checkFormat('2_organisasi_regional/1_Perhimpunan_Bangsa-Bangsa_Asia_Tenggara_(ASEAN)/memberASEAN.ts');
checkFormat('2_organisasi_regional/2_Uni_Eropa_(EU)/memberEU.ts');
