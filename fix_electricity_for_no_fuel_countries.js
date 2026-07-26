// Script untuk mengubah electricity generation untuk negara tanpa bahan bakar fosil
const fs = require('fs');
const path = require('path');

const resourcesDir = path.join(__dirname, 'json/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis');
const electricityDir = path.join(__dirname, 'json/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional');
const continents = ['afrika', 'asia', 'eropa', 'oceania'];

// Data negara tanpa bahan bakar - mapping dari file names
const noFuelCountries = new Set([
  // AFRIKA
  '10_eritrea', '11_eswatini', '12_ethiopia', '14_gambia', '16_guinea', '17_guinea_bissau', 
  '19_kenya', '20_komoro', '21_lesotho', '22_liberia', '23_madagaskar', '24_malawi', '25_mali',
  '26_maroko', '27_mauritania', '28_mauritius', '29_namibia', '30_republik_afrika_tengah',
  '31_republik_uganda', '32_republik_zambia', '33_rwanda', '34_sao_tome_dan_principe', '35_senegal',
  '36_seychelles', '37_sierra_leone', '38_somalia', '2_benin', '3_tanjung_verde', '4_togo', '8_burkina_faso',
  '9_burundi', '7_djibouti',
  // ASIA
  '32_yordania', '1_afganistan', '12_armenia', '13_bhutan', '14_georgia', '16_kamboja', '22_lebanon',
  '26_maldives', '27_nepal', '30_palestina', '92_sri_lanka', '43_taiwan',
  // EROPA
  '5_belgia', '8_estonia', '9_finlandia', '11_islandia', '12_kepulauan_faroe', '14_latvia', '15_lithuania',
  '21_moldova', '26_portugal', '34_slovenia', '36_swedia',
  // OCEANIA
  '1_fiji', '2_guam', '3_kiribati', '4_marshall', '5_mikronesia', '6_nauru', '7_palau', 
  '8_samoa', '9_samoa_amerika', '10_tahiti', '11_tonga', '12_tuvalu', '13_vanuatu'
]);

const results = {
  updated: [],
  failed: [],
  skipped: []
};

// Pembangkit yang menggunakan bahan bakar fosil
const fossilFuelPowerPlants = [
  'pembangkit_listrik_tenaga_gas',
  'pembangkit_listrik_tenaga_uap',
  'pembangkit_listrik_tenaga_nuklir'
];

// Pembangkit terbarukan (ramping up)
const renewablePowerPlants = [
  'pembangkit_listrik_tenaga_air',
  'pembangkit_listrik_tenaga_surya',
  'pembangkit_listrik_tenaga_angin'
];

continents.forEach(continent => {
  const continentPath = path.join(electricityDir, continent);
  
  if (!fs.existsSync(continentPath)) {
    console.log(`⚠️  Continent folder tidak ditemukan: ${continent}`);
    return;
  }
  
  const files = fs.readdirSync(continentPath).filter(f => f.endsWith('.ts'));
  
  files.forEach(filename => {
    try {
      const fileKey = filename.replace('.ts', '');
      
      // Check if this country has no fuel resources
      if (!noFuelCountries.has(fileKey)) {
        results.skipped.push(filename);
        return;
      }
      
      const filePath = path.join(continentPath, filename);
      let content = fs.readFileSync(filePath, 'utf-8');
      
      // Parse the content
      const countryName = filename.replace(/^\d+_/, '').replace(/\.ts$/, '');
      
      // Create new electricity configuration
      // Set fossil fuel plants to 0, increase renewables
      const newElectricityConfig = {
        pembangkit_listrik_tenaga_gas: 0,
        pembangkit_listrik_tenaga_air: 50,        // Hydroelectric
        pembangkit_listrik_tenaga_nuklir: 0,
        pembangkit_listrik_tenaga_surya: 30,      // Solar
        pembangkit_listrik_tenaga_uap: 0,
        pembangkit_listrik_tenaga_angin: 20       // Wind
      };
      
      // Replace the entire electricity config
      // Pattern: const {country}_listrik = { ... };
      const pattern = /const\s+\w+_listrik\s*=\s*\{[^}]+\};/s;
      
      let newContent = content;
      let replaced = false;
      
      // Find the electricity section
      const match = content.match(pattern);
      if (match) {
        // Generate new config string
        const configLines = [
          '// @ts-nocheck',
          `const ${fileKey.substring(fileKey.indexOf('_') + 1)}_listrik = {`,
          `  pembangkit_listrik_tenaga_gas: ${newElectricityConfig.pembangkit_listrik_tenaga_gas},`,
          `  pembangkit_listrik_tenaga_air: ${newElectricityConfig.pembangkit_listrik_tenaga_air},`,
          `  pembangkit_listrik_tenaga_nuklir: ${newElectricityConfig.pembangkit_listrik_tenaga_nuklir},`,
          `  pembangkit_listrik_tenaga_surya: ${newElectricityConfig.pembangkit_listrik_tenaga_surya},`,
          `  pembangkit_listrik_tenaga_uap: ${newElectricityConfig.pembangkit_listrik_tenaga_uap},`,
          `  pembangkit_listrik_tenaga_angin: ${newElectricityConfig.pembangkit_listrik_tenaga_angin},`,
          '};'
        ];
        
        const newConfig = configLines.join('\n');
        newContent = content.replace(match[0], newConfig);
        replaced = true;
      }
      
      if (replaced) {
        fs.writeFileSync(filePath, newContent);
        results.updated.push({
          file: filename,
          continent: continent,
          changes: {
            fossil_fuel_plants: 'set to 0',
            hydroelectric: 50,
            solar: 30,
            wind: 20
          }
        });
        console.log(`✅ Updated: ${filename} (${continent})`);
      } else {
        results.failed.push(filename);
        console.log(`❌ Failed to update: ${filename}`);
      }
    } catch (error) {
      results.failed.push(filename);
      console.error(`❌ Error processing ${filename}: ${error.message}`);
    }
  });
});

// Print summary
console.log('\n' + '='.repeat(80));
console.log('📊 SUMMARY ELECTRICITY CONFIGURATION UPDATE');
console.log('='.repeat(80));
console.log(`✅ Updated: ${results.updated.length} countries`);
console.log(`❌ Failed: ${results.failed.length} countries`);
console.log(`⏭️  Skipped: ${results.skipped.length} countries (has fuel resources)`);

if (results.failed.length > 0) {
  console.log('\n🔴 Failed updates:');
  results.failed.forEach(f => console.log(`  • ${f}`));
}

// Save detailed report
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    updated: results.updated.length,
    failed: results.failed.length,
    skipped: results.skipped.length
  },
  updated_countries: results.updated.map(u => ({
    country: u.file,
    continent: u.continent,
    configuration: u.changes
  })),
  configuration_applied: {
    pembangkit_listrik_tenaga_gas: 0,
    pembangkit_listrik_tenaga_air: 50,
    pembangkit_listrik_tenaga_nuklir: 0,
    pembangkit_listrik_tenaga_surya: 30,
    pembangkit_listrik_tenaga_uap: 0,
    pembangkit_listrik_tenaga_angin: 20
  }
};

fs.writeFileSync('electricity_update_report.json', JSON.stringify(report, null, 2));
console.log('\n✅ Detailed report saved to: electricity_update_report.json');
console.log('='.repeat(80));
