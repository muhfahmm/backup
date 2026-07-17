const fs = require('fs');
const path = require('path');

// Data emas dari goldAmounts
const goldAmounts = [
  { country: "Afganistan", emas: 17 },
  { country: "Arab Saudi", emas: 27 },
  { country: "Armenia", emas: 23 },
  { country: "Azerbaijan", emas: 26 },
  { country: "Bahrain", emas: 73 },
  { country: "Bangladesh", emas: 22 },
  { country: "Bhutan", emas: 23 },
  { country: "Brunei", emas: 22 },
  { country: "China", emas: 21 },
  { country: "Filipina", emas: 21 },
  { country: "Georgia", emas: 20 },
  { country: "Hong kong", emas: 32 },
  { country: "India", emas: 21 },
  { country: "Indonesia", emas: 21 },
  { country: "Irak", emas: 23 },
  { country: "Iran", emas: 23 },
  { country: "Israel", emas: 25 },
  { country: "Jepang", emas: 30 },
  { country: "Kamboja", emas: 22 },
  { country: "Kazakhstan", emas: 22 },
  { country: "Kirgizstan", emas: 19 },
  { country: "Korea Selatan", emas: 24 },
  { country: "Korea Utara", emas: 23 },
  { country: "Kuwait", emas: 26 },
  { country: "Laos", emas: 18 },
  { country: "Lebanon", emas: 22 },
  { country: "Makau", emas: 27 },
  { country: "Malaysia", emas: 21 },
  { country: "Maldives", emas: 23 },
  { country: "Mongolia", emas: 19 },
  { country: "Myanmar", emas: 21 },
  { country: "Nepal", emas: 20 },
  { country: "Oman", emas: 25 },
  { country: "Pakistan", emas: 20 },
  { country: "Palestina", emas: 21 },
  { country: "Qatar", emas: 29 },
  { country: "Republik timor-leste", emas: 18 },
  { country: "Singapura", emas: 28 },
  { country: "Sri lanka", emas: 21 },
  { country: "Suriah", emas: 23 },
  { country: "Taiwan", emas: 24 },
  { country: "Tajikistan", emas: 20 },
  { country: "Thailand", emas: 20 },
  { country: "Turkmenistan", emas: 23 },
  { country: "Uni emirat arab", emas: 26 },
  { country: "Uzbekistan", emas: 21 },
  { country: "Vietnam", emas: 21 },
  { country: "Yaman", emas: 22 },
  { country: "Yordania", emas: 21 },
  { country: "Afrika Selatan", emas: 18 },
  { country: "Aljazair", emas: 18 },
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
  { country: "Amerika Serikat", emas: 31 },
  { country: "Antigua dan Barbuda", emas: 27 },
  { country: "Bahama", emas: 27 },
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
  { country: "Panama", emas: 24 },
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
  { country: "Nauru", emas: 22 },
  { country: "Palau", emas: 21 },
  { country: "Papua nugini", emas: 21 },
  { country: "Samoa", emas: 25 },
  { country: "Samoa amerika", emas: 22 },
  { country: "Selandia baru", emas: 26 },
  { country: "Tahiti", emas: 21 },
  { country: "Tuvalu", emas: 24 },
  { country: "Tonga", emas: 20 },
  { country: "Vanuatu", emas: 22 },
  { country: "Togo", emas: 17 },
  { country: "Tunisia", emas: 18 }
];

// Normalize country name untuk matching
function normalizeCountryName(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u');
}

// Create mapping dari country name ke emas value
const emasMap = {};
goldAmounts.forEach(item => {
  const normalized = normalizeCountryName(item.country);
  emasMap[normalized] = item.emas;
});

const root = path.join(process.cwd(), 'json', 'semua_fitur_negara', '1_pembangunan', '1_produksi', '2_sektor_mineral_kritis');

const regions = ['asia', 'eropa', 'afrika', 'na', 'oceania', 'sa'];
let totalUpdated = 0;
const updateLog = [];
const notFound = [];

// Process each region
regions.forEach(region => {
  const regionPath = path.join(root, region);
  
  if (!fs.existsSync(regionPath)) return;
  
  const files = fs.readdirSync(regionPath).filter(f => f.endsWith('.ts') && f !== '2_db_ekstraksi.ts');
  
  files.forEach(file => {
    const filePath = path.join(regionPath, file);
    
    // Extract country name from filename
    // Format: {number}_{country_name}.ts
    const match = file.match(/^\d+_(.+)\.ts$/);
    if (!match) return;
    
    const countryNameFromFile = match[1]; // e.g., arab_saudi
    const normalizedFileName = normalizeCountryName(countryNameFromFile);
    
    // Look for matching emas value
    let newEmasValue = null;
    
    // Try direct match first
    if (emasMap[normalizedFileName]) {
      newEmasValue = emasMap[normalizedFileName];
    } else {
      // Try to find close match
      for (const [key, value] of Object.entries(emasMap)) {
        if (key.includes(normalizedFileName) || normalizedFileName.includes(key)) {
          newEmasValue = value;
          break;
        }
      }
    }
    
    if (newEmasValue === null) {
      notFound.push(`${region}/${file} (${countryNameFromFile})`);
      return;
    }
    
    // Read file and replace emas value
    let content = fs.readFileSync(filePath, 'utf8');
    const oldMatch = content.match(/(\s+emas:\s*)(\d+)(,)/);
    
    if (oldMatch) {
      const oldValue = parseInt(oldMatch[2], 10);
      const newContent = content.replace(
        /(\s+emas:\s*)\d+(,)/,
        `$1${newEmasValue}$2`
      );
      
      fs.writeFileSync(filePath, newContent, 'utf8');
      totalUpdated++;
      
      updateLog.push({
        file: `${region}/${file}`,
        country: countryNameFromFile,
        oldValue,
        newValue: newEmasValue
      });
    }
  });
});

console.log('\n' + '='.repeat(80));
console.log('EMAS UPDATE REPORT');
console.log('='.repeat(80));
console.log(`\nTotal files updated: ${totalUpdated}`);

if (updateLog.length > 0) {
  console.log('\nDetailed changes:');
  updateLog.forEach((log, idx) => {
    console.log(`${String(idx + 1).padStart(3)}. [${log.file}] ${log.oldValue} → ${log.newValue}`);
  });
}

if (notFound.length > 0) {
  console.log(`\n⚠️  Not found in gold data (${notFound.length} files):`);
  notFound.forEach(n => console.log(`   - ${n}`));
}

// Save detailed log
fs.writeFileSync(
  path.join(process.cwd(), 'tools', 'emas_update_log.json'),
  JSON.stringify({ totalUpdated, updateLog, notFound }, null, 2)
);

console.log(`\nDetailed log saved to: tools/emas_update_log.json`);
console.log('='.repeat(80) + '\n');
