const fs = require('fs');
const path = require('path');

const goldData = [
  { country: "Afganistan", emas: 17 },
  { country: "Arab Saudi", emas: 24 },
  { country: "Armenia", emas: 22 },
  { country: "Azerbaijan", emas: 24 },
  { country: "Bahrain", emas: 25 },
  { country: "Bangladesh", emas: 21 },
  { country: "Bhutan", emas: 22 },
  { country: "Brunei", emas: 21 },
  { country: "China", emas: 19 },
  { country: "Filipina", emas: 20 },
  { country: "Georgia", emas: 20 },
  { country: "Hong kong", emas: 30 },
  { country: "India", emas: 20 },
  { country: "Indonesia", emas: 20 },
  { country: "Irak", emas: 21 },
  { country: "Iran", emas: 22 },
  { country: "Israel", emas: 24 },
  { country: "Jepang", emas: 29 },
  { country: "Kamboja", emas: 21 },
  { country: "Kazakhstan", emas: 22 },
  { country: "Kirgizstan", emas: 19 },
  { country: "Korea Selatan", emas: 23 },
  { country: "Korea Utara", emas: 21 },
  { country: "Kuwait", emas: 25 },
  { country: "Laos", emas: 18 },
  { country: "Lebanon", emas: 22 },
  { country: "Makau", emas: 26 },
  { country: "Malaysia", emas: 20 },
  { country: "Maldives", emas: 22 },
  { country: "Mongolia", emas: 20 },
  { country: "Myanmar", emas: 20 },
  { country: "Nepal", emas: 20 },
  { country: "Oman", emas: 24 },
  { country: "Pakistan", emas: 20 },
  { country: "Palestina", emas: 20 },
  { country: "Qatar", emas: 31 },
  { country: "Republik timor-leste", emas: 18 },
  { country: "Singapura", emas: 29 },
  { country: "Sri lanka", emas: 21 },
  { country: "Suriah", emas: 22 },
  { country: "Taiwan", emas: 23 },
  { country: "Tajikistan", emas: 20 },
  { country: "Thailand", emas: 20 },
  { country: "Turkmenistan", emas: 23 },
  { country: "Uni emirat arab", emas: 25 },
  { country: "Uzbekistan", emas: 21 },
  { country: "Vietnam", emas: 21 },
  { country: "Yaman", emas: 22 },
  { country: "Yordania", emas: 21 },
  { country: "Afrika Selatan", emas: 18 },
  { country: "Aljazair", emas: 17 },
  { country: "Angola", emas: 18 },
  { country: "Benin", emas: 21 },
  { country: "Botswana", emas: 17 },
  { country: "Burkina faso", emas: 15 },
  { country: "Burundi", emas: 16 },
  { country: "Chad", emas: 7 },
  { country: "Djibouti", emas: 16 },
  { country: "Eritrea", emas: 8 },
  { country: "Eswatini", emas: 18 },
  { country: "Ethiopia", emas: 13 },
  { country: "Gabon", emas: 22 },
  { country: "Gambia", emas: 11 },
  { country: "Ghana", emas: 19 },
  { country: "Guinea", emas: 11 },
  { country: "Guinea-bissau", emas: 8 },
  { country: "Kamerun", emas: 16 },
  { country: "Kenya", emas: 17 },
  { country: "Komoro", emas: 22 },
  { country: "Kongo", emas: 15 },
  { country: "Lesotho", emas: 12 },
  { country: "Liberia", emas: 9 },
  { country: "Libya", emas: 20 },
  { country: "Madagaskar", emas: 18 },
  { country: "Malawi", emas: 10 },
  { country: "Mali", emas: 8 },
  { country: "Maroko", emas: 21 },
  { country: "Mauritania", emas: 15 },
  { country: "Mauritius", emas: 28 },
  { country: "Mesir", emas: 16 },
  { country: "Mozambik", emas: 11 },
  { country: "Namibia", emas: 19 },
  { country: "Niger", emas: 7 },
  { country: "Nigeria", emas: 24 },
  { country: "Pantai gading", emas: 17 },
  { country: "Republik afrika tengah", emas: 10 },
  { country: "Republik demokratik kongo", emas: 19 },
  { country: "Republik sudan", emas: 19 },
  { country: "Republik tanzania", emas: 16 },
  { country: "Republik uganda", emas: 19 },
  { country: "Republik zambia", emas: 17 },
  { country: "Republik zimbabwe", emas: 19 },
  { country: "Rwanda", emas: 14 },
  { country: "Sao tome dan principe", emas: 14 },
  { country: "Senegal", emas: 15 },
  { country: "Seychelles", emas: 25 },
  { country: "Sierra leone", emas: 18 },
  { country: "Somalia", emas: 16 },
  { country: "Sudan selatan", emas: 16 },
  { country: "Tanjung verde", emas: 19 },
  { country: "Albania", emas: 27 },
  { country: "Andorra", emas: 26 },
  { country: "Austria", emas: 25 },
  { country: "Belanda", emas: 32 },
  { country: "Belarus", emas: 25 },
  { country: "Belgia", emas: 22 },
  { country: "Bosnia dan hercegovina", emas: 24 },
  { country: "Bulgaria", emas: 26 },
  { country: "Ceko", emas: 27 },
  { country: "Denmark", emas: 24 },
  { country: "Estonia", emas: 25 },
  { country: "Finlandia", emas: 29 },
  { country: "Gibraltar", emas: 26 },
  { country: "Hungaria", emas: 24 },
  { country: "Inggris", emas: 25 },
  { country: "Irlandia", emas: 29 },
  { country: "Islandia", emas: 24 },
  { country: "Italia", emas: 23 },
  { country: "Jerman", emas: 27 },
  { country: "Kepulauan faroe", emas: 28 },
  { country: "Kosovo", emas: 27 },
  { country: "Kroasia", emas: 25 },
  { country: "Latvia", emas: 22 },
  { country: "Liechtenstein", emas: 23 },
  { country: "Lithuania", emas: 27 },
  { country: "Luksemburg", emas: 25 },
  { country: "Makedonia utara", emas: 24 },
  { country: "Malta", emas: 23 },
  { country: "Moldova", emas: 23 },
  { country: "Monako", emas: 26 },
  { country: "Montenegro", emas: 22 },
  { country: "Norwegia", emas: 29 },
  { country: "Polandia", emas: 25 },
  { country: "Portugal", emas: 26 },
  { country: "Prancis", emas: 27 },
  { country: "Republik rumania", emas: 23 },
  { country: "Republik serbia", emas: 25 },
  { country: "Rusia", emas: 22 },
  { country: "San marino", emas: 26 },
  { country: "Siprus", emas: 26 },
  { country: "Slovenia", emas: 24 },
  { country: "Slowakia", emas: 23 },
  { country: "Spanyol", emas: 23 },
  { country: "Swedia", emas: 29 },
  { country: "Swiss", emas: 30 },
  { country: "Turki", emas: 26 },
  { country: "Ukraina", emas: 28 },
  { country: "Vatikan", emas: 22 },
  { country: "Yunani", emas: 28 },
  { country: "Amerika Serikat", emas: 32 },
  { country: "Antigua dan Barbuda", emas: 27 },
  { country: "Bahama", emas: 28 },
  { country: "Barbados", emas: 24 },
  { country: "Belize", emas: 26 },
  { country: "Bermuda", emas: 31 },
  { country: "Costa rica", emas: 27 },
  { country: "Curacao", emas: 30 },
  { country: "Dominika", emas: 24 },
  { country: "El salvador", emas: 27 },
  { country: "Greenland", emas: 22 },
  { country: "Grenada", emas: 24 },
  { country: "Guatemala", emas: 25 },
  { country: "Haiti", emas: 27 },
  { country: "Honduras", emas: 26 },
  { country: "Jamaika", emas: 24 },
  { country: "Kanada", emas: 30 },
  { country: "Kuba", emas: 24 },
  { country: "Meksiko", emas: 25 },
  { country: "Nikaragua", emas: 27 },
  { country: "Panama", emas: 25 },
  { country: "Puerto rico", emas: 30 },
  { country: "Republik dominika", emas: 25 },
  { country: "Saint kitts dan nevis", emas: 27 },
  { country: "Saint lucia", emas: 25 },
  { country: "Saint vincent dan grenadine", emas: 24 },
  { country: "Trinidad dan tobago", emas: 25 },
  { country: "Argentina", emas: 22 },
  { country: "Bolivia", emas: 20 },
  { country: "Brazil", emas: 21 },
  { country: "Chile", emas: 21 },
  { country: "Ekuador", emas: 19 },
  { country: "Guiana prancis", emas: 17 },
  { country: "Guyana", emas: 23 },
  { country: "Kolombia", emas: 18 },
  { country: "Paraguay", emas: 20 },
  { country: "Peru", emas: 18 },
  { country: "Suriname", emas: 20 },
  { country: "Uruguay", emas: 19 },
  { country: "Venezuela", emas: 15 },
  { country: "Australia", emas: 26 },
  { country: "Fiji", emas: 21 },
  { country: "Guam", emas: 21 },
  { country: "Kiribati", emas: 19 },
  { country: "Marshall", emas: 23 },
  { country: "Mikronesia", emas: 23 },
  { country: "Nauru", emas: 23 },
  { country: "Palau", emas: 21 },
  { country: "Papua nugini", emas: 21 },
  { country: "Samoa", emas: 25 },
  { country: "Samoa amerika", emas: 22 },
  { country: "Selandia baru", emas: 26 },
  { country: "Tahiti", emas: 21 },
  { country: "Tuvalu", emas: 24 },
  { country: "Tonga", emas: 20 },
  { country: "Vanuatu", emas: 23 },
  { country: "Togo", emas: 17 },
  { country: "Tunisia", emas: 18 },
];

function normalizeCountryName(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/à|á|ä|â/g, 'a')
    .replace(/é|è|ê|ë/g, 'e')
    .replace(/í|ì|î|ï/g, 'i')
    .replace(/ó|ò|ô|ö/g, 'o')
    .replace(/ú|ù|û|ü/g, 'u');
}

function findCountryFile(countryName, baseDir) {
  const normalized = normalizeCountryName(countryName);
  
  const files = fs.readdirSync(baseDir);
  for (const file of files) {
    if (file.endsWith('.ts')) {
      const fileNormalized = normalizeCountryName(file.replace(/^\d+_/, '').replace(/\.ts$/, ''));
      if (fileNormalized === normalized) {
        return path.join(baseDir, file);
      }
    }
  }
  return null;
}

function updateGoldValue(filePath, newValue) {
  let content = fs.readFileSync(filePath, 'utf8');
  const oldContent = content;
  
  // Replace emas value with new value
  content = content.replace(
    /(\s+emas:\s*)\d+(,)/,
    `$1${newValue}$2`
  );
  
  if (content !== oldContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

const regions = ['asia', 'eropa', 'afrika', 'na', 'oceania', 'sa'];
const basePath = 'json/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis';

const updateLog = {
  totalUpdated: 0,
  updateLog: [],
  notFound: [],
  timestamp: new Date().toISOString(),
};

for (const goldItem of goldData) {
  let found = false;
  
  for (const region of regions) {
    const regionPath = path.join(basePath, region);
    if (!fs.existsSync(regionPath)) continue;
    
    const filePath = findCountryFile(goldItem.country, regionPath);
    
    if (filePath) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const oldValueMatch = fileContent.match(/emas:\s*(\d+)/);
      const oldValue = oldValueMatch ? parseInt(oldValueMatch[1]) : null;
      
      if (updateGoldValue(filePath, goldItem.emas)) {
        updateLog.updateLog.push({
          country: goldItem.country,
          file: filePath.replace(/\\/g, '/'),
          oldValue,
          newValue: goldItem.emas,
        });
        updateLog.totalUpdated++;
      }
      
      found = true;
      break;
    }
  }
  
  if (!found) {
    updateLog.notFound.push(goldItem.country);
  }
}

// Save log
fs.writeFileSync(
  'tools/emas_new_update_log.json',
  JSON.stringify(updateLog, null, 2),
  'utf8'
);

// Print summary
console.log(`\n✅ Update Emas Baru Selesai!`);
console.log(`Total updated: ${updateLog.totalUpdated}`);
console.log(`Not found: ${updateLog.notFound.length}`);
if (updateLog.notFound.length > 0) {
  console.log(`\nNot found countries:`);
  updateLog.notFound.forEach(c => console.log(`  - ${c}`));
}

// Print sample changes
console.log(`\nSample changes (first 10):`);
updateLog.updateLog.slice(0, 10).forEach((log, idx) => {
  console.log(`${idx + 1}. ${log.country}: ${log.oldValue} → ${log.newValue}`);
});

console.log(`\nLog saved to: tools/emas_new_update_log.json`);
