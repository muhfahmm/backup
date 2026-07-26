// Script untuk update electricity untuk semua negara tanpa bahan bakar fosil
const fs = require('fs');
const path = require('path');

const electricityDir = path.join(__dirname, 'json/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional');
const extractionDir = path.join(__dirname, 'json/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis');

// Data negara tanpa bahan bakar (nama file tanpa nomor prefix)
const noFuelCountries = new Set([
  'eritrea', 'eswatini', 'ethiopia', 'gambia', 'guinea', 'guinea_bissau', 
  'kenya', 'komoro', 'lesotho', 'liberia', 'madagaskar', 'malawi', 'mali',
  'maroko', 'mauritania', 'mauritius', 'namibia', 'republik_afrika_tengah',
  'republik_uganda', 'republik_zambia', 'rwanda', 'sao_tome_dan_principe', 'senegal',
  'seychelles', 'sierra_leone', 'somalia', 'benin', 'tanjung_verde', 'togo', 'burkina_faso',
  'burundi', 'djibouti', 'yordania', 'afganistan', 'armenia', 'bhutan', 'georgia', 'kamboja', 
  'lebanon', 'maldives', 'nepal', 'palestina', 'sri_lanka', 'taiwan', 'belgia', 'estonia', 
  'finlandia', 'islandia', 'kepulauan_faroe', 'latvia', 'lithuania', 'moldova', 'portugal', 
  'slovenia', 'swedia', 'fiji', 'guam', 'kiribati', 'marshall', 'mikronesia', 'nauru', 'palau', 
  'samoa', 'samoa_amerika', 'tahiti', 'tonga', 'tuvalu', 'vanuatu'
]);

const results = {
  updated: [],
  failed: [],
  skipped: []
};

// Configuration untuk negara tanpa bahan bakar fosil
// Set fossil fuels to 0, increase renewables
const renewableConfig = {
  pembangkit_listrik_tenaga_gas: 0,
  pembangkit_listrik_tenaga_air: 50,      // Hydroelectric (ramped up)
  pembangkit_listrik_tenaga_nuklir: 0,
  pembangkit_listrik_tenaga_surya: 30,    // Solar (ramped up)
  pembangkit_listrik_tenaga_uap: 0,
  pembangkit_listrik_tenaga_angin: 20     // Wind (ramped up)
};

// Helper function untuk extract country name dari file
function getCountryNameFromFile(filename) {
  return filename.replace(/^\d+_/, '').replace(/\.ts$/, '');
}

// Walk through all electricity files
function walkElectricityDir(dir) {
  const results = [];
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      results.push(...walkElectricityDir(fullPath));
    } else if (file.endsWith('.ts')) {
      results.push(fullPath);
    }
  });
  
  return results;
}

const allFiles = walkElectricityDir(electricityDir);
console.log(`Found ${allFiles.length} electricity files`);

allFiles.forEach(filePath => {
  try {
    const filename = path.basename(filePath);
    const countryName = getCountryNameFromFile(filename);
    const continent = filePath.match(/1_sektor_listrik_nasional[\\\/](\w+)[\\\/]/)?.[1] || 'unknown';
    
    // Check if this is a no-fuel country
    if (!noFuelCountries.has(countryName)) {
      results.skipped.push(filename);
      return;
    }
    
    // Read file
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Find the const variable name (e.g., ethiopia_listrik, indonesia_listrik)
    const varNameMatch = content.match(/const\s+(\w+_listrik)\s*=/);
    if (!varNameMatch) {
      results.failed.push(filename);
      return;
    }
    
    const varName = varNameMatch[1];
    
    // Generate new config
    const newConfig = `// @ts-nocheck
const ${varName} = {
  pembangkit_listrik_tenaga_gas: ${renewableConfig.pembangkit_listrik_tenaga_gas},
  pembangkit_listrik_tenaga_air: ${renewableConfig.pembangkit_listrik_tenaga_air},
  pembangkit_listrik_tenaga_nuklir: ${renewableConfig.pembangkit_listrik_tenaga_nuklir},
  pembangkit_listrik_tenaga_surya: ${renewableConfig.pembangkit_listrik_tenaga_surya},
  pembangkit_listrik_tenaga_uap: ${renewableConfig.pembangkit_listrik_tenaga_uap},
  pembangkit_listrik_tenaga_angin: ${renewableConfig.pembangkit_listrik_tenaga_angin},
};
`;
    
    // Write new config
    fs.writeFileSync(filePath, newConfig);
    
    results.updated.push({
      file: filename,
      country: countryName,
      continent: continent,
      config: renewableConfig
    });
    
    console.log(`✅ Updated: ${countryName} (${continent})`);
  } catch (error) {
    results.failed.push(filename);
    console.error(`❌ Error ${filename}: ${error.message}`);
  }
});

// Print summary
console.log('\n' + '='.repeat(80));
console.log('📊 ELECTRICITY CONFIGURATION UPDATE - SUMMARY');
console.log('='.repeat(80));
console.log(`\n✅ Updated: ${results.updated.length} countries`);
console.log(`❌ Failed: ${results.failed.length} countries`);
console.log(`⏭️  Skipped: ${results.skipped.length} countries (has fuel resources)`);

console.log('\n' + '-'.repeat(80));
console.log('CONFIGURATION APPLIED FOR NO-FUEL COUNTRIES:');
console.log('-'.repeat(80));
console.log(`Gas (Fossil): ${renewableConfig.pembangkit_listrik_tenaga_gas}`);
console.log(`Coal/Steam (Fossil): ${renewableConfig.pembangkit_listrik_tenaga_uap}`);
console.log(`Nuclear (Fossil+): ${renewableConfig.pembangkit_listrik_tenaga_nuklir}`);
console.log(`\n↻ RENEWABLE ENERGY:↻`);
console.log(`Hydroelectric (Water): ${renewableConfig.pembangkit_listrik_tenaga_air}`);
console.log(`Solar: ${renewableConfig.pembangkit_listrik_tenaga_surya}`);
console.log(`Wind: ${renewableConfig.pembangkit_listrik_tenaga_angin}`);
console.log(`TOTAL: ${renewableConfig.pembangkit_listrik_tenaga_air + renewableConfig.pembangkit_listrik_tenaga_surya + renewableConfig.pembangkit_listrik_tenaga_angin}`);

if (results.failed.length > 0 && results.failed.length < 10) {
  console.log('\n❌ Failed updates:');
  results.failed.forEach(f => console.log(`  • ${f}`));
}

// Save report
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    total_updated: results.updated.length,
    total_failed: results.failed.length,
    total_skipped: results.skipped.length,
    total_processed: allFiles.length
  },
  configuration: {
    fossil_fuels_set_to: 0,
    renewables_configuration: renewableConfig
  },
  updated_countries: results.updated.map(u => ({
    country: u.country,
    continent: u.continent,
    file: u.file
  }))
};

fs.writeFileSync('electricity_no_fuel_update_report.json', JSON.stringify(report, null, 2));

console.log('\n✅ Report saved to: electricity_no_fuel_update_report.json');
console.log('='.repeat(80));
