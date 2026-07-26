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

// Rebuild completely for extreme cases
function rebuildForTarget(population, targetBalance = 750) {
  // Work backwards: if targetBalance = production - consumption
  // and consumption = production * 0.7 + population / 50000
  // then: targetBalance = production - (production * 0.7 + population / 50000)
  // targetBalance = 0.3 * production - population / 50000
  // production = (targetBalance + population / 50000) / 0.3
  
  const populationDemand = population / 50000;
  const requiredProduction = (targetBalance + populationDemand) / 0.3;
  
  // Now distribute among plants - prefer medium-sized plants for stability
  // Use UAPLTU for coal/steam, PLTG for gas to get reliable balance
  const listrik = {
    pembangkit_listrik_tenaga_nuklir: 0,
    pembangkit_listrik_tenaga_air: 0,
    pembangkit_listrik_tenaga_surya: 0,
    pembangkit_listrik_tenaga_uap: 0,
    pembangkit_listrik_tenaga_gas: 0,
    pembangkit_listrik_tenaga_angin: 0,
  };
  
  // Start with coal/steam as primary
  if (requiredProduction > 0) {
    listrik.pembangkit_listrik_tenaga_uap = Math.max(1, Math.ceil(requiredProduction * 0.5 / UNIT_PRODUCTION.pembangkit_listrik_tenaga_uap));
    
    const afterCoal = listrik.pembangkit_listrik_tenaga_uap * UNIT_PRODUCTION.pembangkit_listrik_tenaga_uap;
    if (afterCoal < requiredProduction) {
      const remaining = requiredProduction - afterCoal;
      listrik.pembangkit_listrik_tenaga_gas = Math.max(1, Math.ceil(remaining / UNIT_PRODUCTION.pembangkit_listrik_tenaga_gas));
    }
  }
  
  return listrik;
}

// Read report to find failed countries
const reportPath = 'c:\\utama\\project\\project-sendiri\\EM\\final_electricity_balance_report.json';
let failedCountries = [];

if (fs.existsSync(reportPath)) {
  const report = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
  failedCountries = report.failed_countries || [];
}

console.log(`Extreme fix: Processing ${failedCountries.length} countries that need complete rebuild...\n`);

let fixed = 0;
const stillFailing = [];

failedCountries.forEach(item => {
  try {
    const listrikPath = path.join(LISTRIK_BASE, item.region, item.file);
    
    if (!fs.existsSync(listrikPath)) {
      console.log(`Skip ${item.file} - not found`);
      return;
    }
    
    // Read file
    const listrikContent = fs.readFileSync(listrikPath, 'utf-8');
    
    // Get population from profile
    const profilePath = path.join(PROFILE_BASE, item.region, item.file);
    let population = 50000000;
    if (fs.existsSync(profilePath)) {
      const profileContent = fs.readFileSync(profilePath, 'utf-8');
      const populationMatch = profileContent.match(/"jumlah_penduduk":\s*(\d+)/);
      if (populationMatch) {
        population = parseInt(populationMatch[1]);
      }
    }
    
    // Rebuild for target
    const rebuilt = rebuildForTarget(population, 750);
    const current = calculateBalance(population, rebuilt);
    
    // Check if now in range
    const isBalanced = current.balance >= 500 && current.balance <= 1000 && current.balance > 0;
    
    if (isBalanced) {
      // Write file
      let newContent = listrikContent;
      const keys = Object.keys(UNIT_PRODUCTION);
      keys.forEach(key => {
        const regex = new RegExp(`${key}:\\s*\\d+`, 'i');
        newContent = newContent.replace(regex, `${key}: ${rebuilt[key]}`);
      });
      
      fs.writeFileSync(listrikPath, newContent, 'utf-8');
      console.log(`✓ Rebuilt ${item.file}: balance = ${Math.round(current.balance)} MW (production: ${Math.round(current.production)} MW)`);
      fixed++;
    } else {
      stillFailing.push({
        ...item,
        newBalance: Math.round(current.balance),
        production: Math.round(current.production)
      });
      console.log(`✗ ${item.file}: Rebuilt balance = ${Math.round(current.balance)} MW (still outside range)`);
    }
  } catch (err) {
    console.log(`Error with ${item.file}: ${err.message}`);
  }
});

console.log('\n========================================');
console.log('EXTREME FIX SUMMARY');
console.log('========================================');
console.log(`Fixed by rebuild: ${fixed} countries`);
console.log(`Still failing: ${stillFailing.length} countries`);

if (stillFailing.length > 0) {
  console.log('\nCountries still outside 500-1000 MW range:');
  stillFailing.forEach(item => {
    console.log(`  - ${item.file}: balance = ${item.newBalance} MW`);
  });
}

// Save report
fs.writeFileSync('c:\\utama\\project\\project-sendiri\\EM\\extreme_fix_report.json', JSON.stringify({
  fixed,
  still_failing: stillFailing.length,
  problems: stillFailing
}, null, 2), 'utf-8');

console.log('\nReport saved to: extreme_fix_report.json');
