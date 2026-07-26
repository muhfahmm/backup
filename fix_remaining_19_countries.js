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

const PROFILE_BASE = 'c:\\utama\\project\\project-sendiri\\EM\\json\\semua_fitur_negara\\0_profiles';
const LISTRIK_BASE = 'c:\\utama\\project\\project-sendiri\\EM\\json\\semua_fitur_negara\\1_pembangunan\\1_produksi\\1_sektor_listrik_nasional';

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

function parseListrikFile(content) {
  const keys = Object.keys(UNIT_PRODUCTION);
  const result = {};
  
  keys.forEach(key => {
    const regex = new RegExp(`${key}\\s*:\\s*(\\d+)`, 'i');
    const match = content.match(regex);
    result[key] = match ? parseInt(match[1]) : 0;
  });
  
  return result;
}

function writeListrikFile(content, newData) {
  let updated = content;
  const keys = Object.keys(UNIT_PRODUCTION);
  
  keys.forEach(key => {
    const regex = new RegExp(`(${key}\\s*:\\s*)\\d+`, 'i');
    updated = updated.replace(regex, `$1${newData[key]}`);
  });
  
  return updated;
}

// Problem countries and their regions
const problemCountries = [
  { file: '26_malawi.ts', region: 'afrika' },
  { file: '27_mali.ts', region: 'afrika' },
  { file: '3_angola.ts', region: 'afrika' },
  { file: '40_republik_tanzania.ts', region: 'afrika' },
  { file: '6_burkina_faso.ts', region: 'afrika' },
  { file: '59_bangladesh.ts', region: 'asia' },
  { file: '62_china.ts', region: 'asia' },
  { file: '63_filipina.ts', region: 'asia' },
  { file: '66_india.ts', region: 'asia' },
  { file: '73_kazakhstan.ts', region: 'asia' },
  { file: '92_sri_lanka.ts', region: 'asia' },
  { file: '93_suriah.ts', region: 'asia' },
  { file: '96_thailand.ts', region: 'asia' },
  { file: '99_uzbekistan.ts', region: 'asia' },
  { file: '117_inggris.ts', region: 'eropa' },
  { file: '121_jerman.ts', region: 'eropa' },
  { file: '137_prancis.ts', region: 'eropa' },
  { file: '197_brazil.ts', region: 'sa' },
  { file: '198_chile.ts', region: 'sa' }
];

console.log(`Fine-tuning ${problemCountries.length} countries that are just over 1000MW limit...\n`);

let fixed = 0;
let stillOver = [];

problemCountries.forEach(item => {
  try {
    const profilePath = path.join(PROFILE_BASE, item.region, item.file);
    const listrikPath = path.join(LISTRIK_BASE, item.region, item.file);
    
    if (!fs.existsSync(profilePath) || !fs.existsSync(listrikPath)) {
      console.log(`Skip ${item.file} - not found`);
      return;
    }
    
    // Get population
    const profileContent = fs.readFileSync(profilePath, 'utf-8');
    const populationMatch = profileContent.match(/"jumlah_penduduk":\s*(\d+)/);
    const population = populationMatch ? parseInt(populationMatch[1]) : 50000000;
    
    // Get current listrik data
    const listrikContent = fs.readFileSync(listrikPath, 'utf-8');
    const current = parseListrikFile(listrikContent);
    
    // Reduce consumption target incrementally
    // Try reducing the largest producer by 1
    let best = { data: current, balance: calculateBalance(population, current).balance };
    
    const plants = [
      'pembangkit_listrik_tenaga_uap',
      'pembangkit_listrik_tenaga_gas',
      'pembangkit_listrik_tenaga_air',
      'pembangkit_listrik_tenaga_nuklir',
      'pembangkit_listrik_tenaga_surya',
      'pembangkit_listrik_tenaga_angin'
    ];
    
    // Try reducing each plant one at a time to find the optimal reduction
    for (const plant of plants) {
      if (current[plant] > 0) {
        const tested = { ...current };
        tested[plant] = tested[plant] - 1;
        const testBalance = calculateBalance(population, tested).balance;
        
        if (testBalance <= 1000 && testBalance >= 500) {
          // Perfect! Write this
          const newContent = writeListrikFile(listrikContent, tested);
          fs.writeFileSync(listrikPath, newContent, 'utf-8');
          console.log(`✓ Fixed ${item.file}: ${Math.round(best.balance)}MW → ${Math.round(testBalance)}MW`);
          fixed++;
          return;
        }
        
        // Track best attempt
        if (testBalance < best.balance && testBalance > 500) {
          best = { data: tested, balance: testBalance };
        }
      }
    }
    
    // If no perfect solution, try multiple reductions
    let current2 = { ...current };
    for (let attempt = 0; attempt < 5; attempt++) {
      for (const plant of plants) {
        if (current2[plant] > 0) {
          current2[plant] = current2[plant] - 1;
          const testBalance = calculateBalance(population, current2).balance;
          
          if (testBalance <= 1000 && testBalance >= 500) {
            const newContent = writeListrikFile(listrikContent, current2);
            fs.writeFileSync(listrikPath, newContent, 'utf-8');
            console.log(`✓ Fixed ${item.file}: ${Math.round(best.balance)}MW → ${Math.round(testBalance)}MW (${attempt + 1} reductions)`);
            fixed++;
            return;
          }
          
          if (testBalance < 500) {
            // Too low, restore
            current2[plant] = current2[plant] + 1;
            break;
          }
        }
      }
    }
    
    // Still not fixed
    const finalBalance = calculateBalance(population, current2).balance;
    console.log(`✗ ${item.file}: Still over at ${Math.round(finalBalance)}MW`);
    stillOver.push({
      file: item.file,
      balance: Math.round(finalBalance)
    });
    
  } catch (err) {
    console.log(`Error with ${item.file}: ${err.message}`);
  }
});

console.log('\n========================================');
console.log('FINE-TUNING SUMMARY');
console.log('========================================');
console.log(`Fixed: ${fixed} countries`);
console.log(`Still over: ${stillOver.length} countries`);

if (stillOver.length > 0) {
  console.log('\nCountries still over 1000MW:');
  stillOver.forEach(c => {
    console.log(`  - ${c.file}: ${c.balance}MW`);
  });
}

console.log(`\nTOTAL BALANCED: ${188 + fixed} / 206 countries`);
