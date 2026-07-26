const fs = require('fs');
const path = require('path');

const UNIT_PRODUCTION = {
  pembangkit_listrik_tenaga_nuklir: 10000,
  pembangkit_listrik_tenaga_air: 2500,
  pembangkit_listrik_tenaga_surya: 500,
  pembangkit_listrik_tenaga_uap: 5000,
  pembangkit_listrik_tenaga_gas: 3000,
  pembangkit_listrik_tenaga_angin: 250,
};

function calculateBalance(population, listrikData) {
  let production = 0;
  for (const [key, count] of Object.entries(listrikData)) {
    if (UNIT_PRODUCTION[key]) {
      production += count * UNIT_PRODUCTION[key];
    }
  }
  
  const consumption = (production * 0.7) + (population / 50000);
  const balance = production - consumption;
  
  return { production, consumption, balance };
}

function generateListrikContent(countryName, newData) {
  const varName = countryName.toLowerCase().replace(/\s+/g, '_').replace(/-/g, '_');
  
  let content = '// @ts-nocheck\n';
  content += `const ${varName}_listrik = {\n`;
  
  const keys = Object.keys(UNIT_PRODUCTION);
  keys.forEach((key, idx) => {
    const value = newData[key] || 0;
    const comma = idx < keys.length - 1 ? ',' : '';
    content += `  ${key}: ${value}${comma}\n`;
  });
  
  content += '};\n';
  
  return content;
}

function getCountryInfo(profilePath) {
  const content = fs.readFileSync(profilePath, 'utf-8');
  
  const populationMatch = content.match(/"jumlah_penduduk":\s*(\d+)/);
  const population = populationMatch ? parseInt(populationMatch[1]) : 50000000;
  
  const nameMatch = content.match(/"name_id":\s*"([^"]+)"/);
  const name = nameMatch ? nameMatch[1] : 'Unknown';
  
  return { population, name };
}

// Calculate exact coal plant count needed for target balance
function calculatePlantCount(population, targetBalance = 700) {
  // balance = production - (0.7 * production + population/50000)
  // balance = 0.3 * production - population/50000
  // production = (balance + population/50000) / 0.3
  
  const populationDemand = population / 50000;
  const neededProduction = (targetBalance + populationDemand) / 0.3;
  
  // Use only coal plants for simplicity and precision
  const coalCount = Math.round(neededProduction / UNIT_PRODUCTION.pembangkit_listrik_tenaga_uap);
  
  return Math.max(1, coalCount);
}

const PROFILE_BASE = 'c:\\utama\\project\\project-sendiri\\EM\\json\\semua_fitur_negara\\0_profiles';
const LISTRIK_BASE = 'c:\\utama\\project\\project-sendiri\\EM\\json\\semua_fitur_negara\\1_pembangunan\\1_produksi\\1_sektor_listrik_nasional';

// Problem countries
const problems = [
  { file: '26_malawi.ts', region: 'afrika' },
  { file: '40_republik_tanzania.ts', region: 'afrika' },
  { file: '59_bangladesh.ts', region: 'asia' },
  { file: '63_filipina.ts', region: 'asia' },
  { file: '66_india.ts', region: 'asia' },
  { file: '73_kazakhstan.ts', region: 'asia' },
  { file: '93_suriah.ts', region: 'asia' },
  { file: '96_thailand.ts', region: 'asia' },
  { file: '117_inggris.ts', region: 'eropa' },
  { file: '137_prancis.ts', region: 'eropa' },
  { file: '197_brazil.ts', region: 'sa' },
  { file: '198_chile.ts', region: 'sa' }
];

console.log(`Calculated fix for ${problems.length} countries using precision coal plant counts...\n`);

let fixed = 0;
let stillFailed = [];

problems.forEach(item => {
  try {
    const profilePath = path.join(PROFILE_BASE, item.region, item.file);
    const listrikPath = path.join(LISTRIK_BASE, item.region, item.file);
    
    if (!fs.existsSync(profilePath) || !fs.existsSync(listrikPath)) {
      return;
    }
    
    const { population, name } = getCountryInfo(profilePath);
    
    // Calculate exact coal plant count
    const coalCount = calculatePlantCount(population, 700);
    
    const plants = {
      pembangkit_listrik_tenaga_nuklir: 0,
      pembangkit_listrik_tenaga_air: 0,
      pembangkit_listrik_tenaga_surya: 0,
      pembangkit_listrik_tenaga_uap: coalCount,
      pembangkit_listrik_tenaga_gas: 0,
      pembangkit_listrik_tenaga_angin: 0
    };
    
    const balance = calculateBalance(population, plants);
    
    if (balance.balance >= 500 && balance.balance <= 1000 && balance.balance > 0) {
      const newContent = generateListrikContent(name, plants);
      fs.writeFileSync(listrikPath, newContent, 'utf-8');
      console.log(`✓ Fixed ${item.file}: ${coalCount} coal plants → ${Math.round(balance.balance)}MW`);
      fixed++;
    } else {
      console.log(`✗ ${item.file}: ${coalCount} coal plants gave ${Math.round(balance.balance)}MW`);
      stillFailed.push({
        file: item.file,
        coalCount,
        balance: Math.round(balance.balance)
      });
    }
    
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
});

console.log('\n========================================');
console.log('CALCULATED FIX SUMMARY');
console.log('========================================');
console.log(`Fixed: ${fixed} countries`);
console.log(`Failed: ${stillFailed.length} countries`);
console.log(`TOTAL BALANCED: ${195 + fixed} / 206`);
console.log(`Success rate: ${Math.round(((195 + fixed) / 206) * 100)}%`);

if (stillFailed.length > 0) {
  console.log('\nFailed attempts:');
  stillFailed.forEach(f => {
    console.log(`  - ${f.file}: ${f.coalCount} coal plants → ${f.balance}MW`);
  });
}
