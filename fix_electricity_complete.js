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

// Parse Typescript file to extract object
function parseListrikFile(content) {
  const keys = Object.keys(UNIT_PRODUCTION);
  const result = {};
  
  keys.forEach(key => {
    // Match: key: 123, or key:123
    const regex = new RegExp(`${key}\\s*:\\s*(\\d+)`, 'i');
    const match = content.match(regex);
    result[key] = match ? parseInt(match[1]) : 0;
  });
  
  return result;
}

// Write updated TS file preserving structure
function writeListrikFile(content, newData) {
  let updated = content;
  const keys = Object.keys(UNIT_PRODUCTION);
  
  keys.forEach(key => {
    const regex = new RegExp(`(${key}\\s*:\\s*)\\d+`, 'i');
    updated = updated.replace(regex, `$1${newData[key]}`);
  });
  
  return updated;
}

// Rebuild for target
function rebuildForTarget(population, targetBalance = 750) {
  const populationDemand = population / 50000;
  const requiredProduction = (targetBalance + populationDemand) / 0.3;
  
  const listrik = {
    pembangkit_listrik_tenaga_nuklir: 0,
    pembangkit_listrik_tenaga_air: 0,
    pembangkit_listrik_tenaga_surya: 0,
    pembangkit_listrik_tenaga_uap: 0,
    pembangkit_listrik_tenaga_gas: 0,
    pembangkit_listrik_tenaga_angin: 0,
  };
  
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

// Main process
function processAllCountries() {
  let balanced = 0;
  let fixed = 0;
  let failed = [];
  
  REGIONS.forEach(region => {
    const profileDir = path.join(PROFILE_BASE, region);
    const listrikDir = path.join(LISTRIK_BASE, region);
    
    if (!fs.existsSync(profileDir) || !fs.existsSync(listrikDir)) {
      return;
    }
    
    const profileFiles = fs.readdirSync(profileDir).filter(f => f.endsWith('.ts'));
    
    profileFiles.forEach(profileFile => {
      try {
        const profilePath = path.join(profileDir, profileFile);
        const listrikPath = path.join(listrikDir, profileFile);
        
        if (!fs.existsSync(listrikPath)) {
          return;
        }
        
        // Read files
        const profileContent = fs.readFileSync(profilePath, 'utf-8');
        const listrikContent = fs.readFileSync(listrikPath, 'utf-8');
        
        // Extract population
        const populationMatch = profileContent.match(/"jumlah_penduduk":\s*(\d+)/);
        const population = populationMatch ? parseInt(populationMatch[1]) : 50000000;
        
        // Parse electricity data
        const listrikObj = parseListrikFile(listrikContent);
        
        // Calculate balance
        const current = calculateBalance(population, listrikObj);
        
        // Check if already in range
        if (current.balance >= 500 && current.balance <= 1000 && current.balance > 0) {
          balanced++;
          return;
        }
        
        // Rebuild for target
        const rebuilt = rebuildForTarget(population, 750);
        const newBalance = calculateBalance(population, rebuilt);
        
        // Check if now balanced
        if (newBalance.balance >= 500 && newBalance.balance <= 1000 && newBalance.balance > 0) {
          // Write updated file
          const newContent = writeListrikFile(listrikContent, rebuilt);
          fs.writeFileSync(listrikPath, newContent, 'utf-8');
          
          console.log(`✓ Fixed ${profileFile}: ${Math.round(current.balance)}MW → ${Math.round(newBalance.balance)}MW`);
          fixed++;
        } else {
          console.log(`✗ ${profileFile}: Failed (now ${Math.round(newBalance.balance)}MW)`);
          failed.push({
            file: profileFile,
            balance: Math.round(newBalance.balance),
            population
          });
        }
        
      } catch (err) {
        console.log(`Error processing ${profileFile}: ${err.message}`);
      }
    });
  });
  
  return { balanced, fixed, failed };
}

console.log('Complete electricity balance fix for all 206 countries...\n');
const results = processAllCountries();

console.log('\n========================================');
console.log('COMPLETE FIX SUMMARY');
console.log('========================================');
console.log(`Already balanced: ${results.balanced}`);
console.log(`Fixed: ${results.fixed}`);
console.log(`Failed: ${results.failed.length}`);
console.log(`TOTAL BALANCED: ${results.balanced + results.fixed} / 206`);

if (results.failed.length > 0) {
  console.log('\nRemaining problems:');
  results.failed.slice(0, 10).forEach(f => {
    console.log(`  - ${f.file}: ${f.balance}MW`);
  });
  if (results.failed.length > 10) {
    console.log(`  ... and ${results.failed.length - 10} more`);
  }
}

// Save final report
fs.writeFileSync('c:\\utama\\project\\project-sendiri\\EM\\COMPLETE_FIX_REPORT.json', JSON.stringify({
  summary: {
    already_balanced: results.balanced,
    newly_fixed: results.fixed,
    total_balanced: results.balanced + results.fixed,
    total_countries: 206,
    failed: results.failed.length,
    success_rate: Math.round(((results.balanced + results.fixed) / 206) * 100)
  },
  failed_countries: results.failed
}, null, 2), 'utf-8');

console.log('\nFinal report saved to: COMPLETE_FIX_REPORT.json');
