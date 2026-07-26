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

const REGIONS = ['afrika', 'asia', 'eropa', 'na', 'oceania', 'sa'];
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

// Fine-tune by reducing smallest units first
function fineTune(listrikData, population, targetMax = 1000) {
  const adjusted = { ...listrikData };
  let current = calculateBalance(population, adjusted);
  
  // Only adjust if slightly over
  if (current.balance <= targetMax) {
    return { adjusted, current, tuned: false };
  }
  
  // If only slightly over, reduce smallest producer
  const overBy = current.balance - targetMax;
  
  // Try reducing plants in order of smallest impact
  const plants = [
    'pembangkit_listrik_tenaga_angin',
    'pembangkit_listrik_tenaga_surya',
    'pembangkit_listrik_tenaga_air',
    'pembangkit_listrik_tenaga_gas',
    'pembangkit_listrik_tenaga_uap',
    'pembangkit_listrik_tenaga_nuklir'
  ];
  
  for (const plant of plants) {
    if (adjusted[plant] > 0) {
      const originalCount = adjusted[plant];
      adjusted[plant] = Math.max(0, adjusted[plant] - 1);
      const newBalance = calculateBalance(population, adjusted).balance;
      
      if (newBalance <= targetMax) {
        current = calculateBalance(population, adjusted);
        return { adjusted, current, tuned: true };
      }
      
      adjusted[plant] = originalCount;
    }
  }
  
  return { adjusted, current, tuned: false };
}

// Read extreme fix report
const reportPath = 'c:\\utama\\project\\project-sendiri\\EM\\extreme_fix_report.json';
let problemCountries = [];

if (fs.existsSync(reportPath)) {
  const report = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
  problemCountries = report.problems || [];
}

console.log(`Fine-tuning ${problemCountries.length} countries that are just slightly over limit...\n`);

let tuned = 0;
const stillOver = [];

problemCountries.forEach(item => {
  try {
    const listrikPath = path.join(LISTRIK_BASE, item.region, item.file);
    
    if (!fs.existsSync(listrikPath)) {
      console.log(`Skip ${item.file} - not found`);
      return;
    }
    
    // Read current file
    const listrikContent = fs.readFileSync(listrikPath, 'utf-8');
    
    // Get population
    const profilePath = path.join(PROFILE_BASE, item.region, item.file);
    let population = 50000000;
    if (fs.existsSync(profilePath)) {
      const profileContent = fs.readFileSync(profilePath, 'utf-8');
      const populationMatch = profileContent.match(/"jumlah_penduduk":\s*(\d+)/);
      if (populationMatch) {
        population = parseInt(populationMatch[1]);
      }
    }
    
    // Parse current data
    const listrikObj = {};
    const keys = Object.keys(UNIT_PRODUCTION);
    keys.forEach(key => {
      const regex = new RegExp(`${key}:\\s*(\\d+)`, 'i');
      const match = listrikContent.match(regex);
      listrikObj[key] = match ? parseInt(match[1]) : 0;
    });
    
    // Fine-tune
    const { adjusted, current, tuned: wasTuned } = fineTune(listrikObj, population);
    
    // Check result
    const isBalanced = current.balance >= 500 && current.balance <= 1000 && current.balance > 0;
    
    if (isBalanced) {
      if (wasTuned) {
        // Write file
        let newContent = listrikContent;
        keys.forEach(key => {
          const regex = new RegExp(`${key}:\\s*\\d+`, 'i');
          newContent = newContent.replace(regex, `${key}: ${adjusted[key]}`);
        });
        
        fs.writeFileSync(listrikPath, newContent, 'utf-8');
        console.log(`✓ Tuned ${item.file}: ${item.newBalance}MW → ${Math.round(current.balance)}MW`);
        tuned++;
      } else {
        console.log(`= ${item.file}: Already in range at ${Math.round(current.balance)}MW`);
      }
    } else {
      stillOver.push({
        file: item.file,
        balance: Math.round(current.balance),
        overBy: Math.round(current.balance - 1000)
      });
      console.log(`✗ ${item.file}: Still over at ${Math.round(current.balance)}MW`);
    }
  } catch (err) {
    console.log(`Error with ${item.file}: ${err.message}`);
  }
});

console.log('\n========================================');
console.log('FINE-TUNING SUMMARY');
console.log('========================================');
console.log(`Fine-tuned: ${tuned} countries`);
console.log(`Still over limit: ${stillOver.length} countries`);

if (stillOver.length > 0) {
  console.log('\nCountries still over 1000 MW limit:');
  stillOver.forEach(item => {
    console.log(`  - ${item.file}: ${item.balance}MW (${item.overBy}MW over)`);
  });
}

// Final summary
fs.writeFileSync('c:\\utama\\project\\project-sendiri\\EM\\fine_tune_report.json', JSON.stringify({
  tuned,
  still_over: stillOver.length,
  problems: stillOver
}, null, 2), 'utf-8');

console.log('\nReport saved to: fine_tune_report.json');
