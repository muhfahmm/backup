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
const REGIONS = ['afrika', 'asia', 'eropa', 'na', 'oceania', 'sa'];

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

// Parse TS file - extract the object literal from the const
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

// Generate TS file content with proper structure
function generateListrikContent(fileName, countryName, newData) {
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

// Get country variable name from file name
function getVarNameFromFile(fileName) {
  return fileName
    .replace(/^\d+_/, '')
    .replace(/\.ts$/, '')
    .replace(/_/g, '_')
    .toLowerCase();
}

// Calculate target production given constraints
function calculateTargetProduction(population, targetBalance = 700) {
  const populationDemand = population / 50000;
  // balance = production - (0.7 * production + populationDemand)
  // balance = 0.3 * production - populationDemand
  // production = (balance + populationDemand) / 0.3
  return (targetBalance + populationDemand) / 0.3;
}

// Build plant distribution to match target production
function buildPlantDistribution(production, population) {
  const result = {
    pembangkit_listrik_tenaga_nuklir: 0,
    pembangkit_listrik_tenaga_air: 0,
    pembangkit_listrik_tenaga_surya: 0,
    pembangkit_listrik_tenaga_uap: 0,
    pembangkit_listrik_tenaga_gas: 0,
    pembangkit_listrik_tenaga_angin: 0,
  };
  
  let remaining = production;
  
  // Use coal/steam as primary (50%)
  if (remaining > 0) {
    result.pembangkit_listrik_tenaga_uap = Math.max(1, Math.ceil(remaining * 0.5 / UNIT_PRODUCTION.pembangkit_listrik_tenaga_uap));
    remaining -= result.pembangkit_listrik_tenaga_uap * UNIT_PRODUCTION.pembangkit_listrik_tenaga_uap;
  }
  
  // Use gas for rest
  if (remaining > 0) {
    result.pembangkit_listrik_tenaga_gas = Math.max(1, Math.ceil(remaining / UNIT_PRODUCTION.pembangkit_listrik_tenaga_gas));
  }
  
  return result;
}

// Main process
console.log('ROBUST FIX: Processing all 206 countries...\n');

let balanced = 0;
let fixed = 0;
let failed = [];

REGIONS.forEach(region => {
  const profileDir = path.join(PROFILE_BASE, region);
  const listrikDir = path.join(LISTRIK_BASE, region);
  
  if (!fs.existsSync(profileDir) || !fs.existsSync(listrikDir)) {
    return;
  }
  
  const profileFiles = fs.readdirSync(profileDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
  
  profileFiles.forEach(profileFile => {
    try {
      const profilePath = path.join(profileDir, profileFile);
      const listrikPath = path.join(listrikDir, profileFile);
      
      if (!fs.existsSync(listrikPath)) {
        return;
      }
      
      // Read profile for population
      const profileContent = fs.readFileSync(profilePath, 'utf-8');
      const populationMatch = profileContent.match(/"jumlah_penduduk":\s*(\d+)/);
      const population = populationMatch ? parseInt(populationMatch[1]) : 50000000;
      
      // Get country name
      const nameMatch = profileContent.match(/"name_id":\s*"([^"]+)"/);
      const countryName = nameMatch ? nameMatch[1] : profileFile.replace(/^\d+_/, '').replace(/\.ts$/, '');
      
      // Parse current listrik
      const listrikContent = fs.readFileSync(listrikPath, 'utf-8');
      const current = parseListrikFile(listrikContent);
      const currentBalance = calculateBalance(population, current);
      
      // Check if already balanced
      if (currentBalance.balance >= 500 && currentBalance.balance <= 1000 && currentBalance.balance > 0) {
        balanced++;
        return;
      }
      
      // Calculate target production
      const targetProduction = calculateTargetProduction(population, 700);
      
      // Build distribution
      const newData = buildPlantDistribution(targetProduction, population);
      const newBalance = calculateBalance(population, newData);
      
      // Check if now in range
      if (newBalance.balance >= 500 && newBalance.balance <= 1000 && newBalance.balance > 0) {
        // Write updated file
        const newContent = generateListrikContent(profileFile, countryName, newData);
        fs.writeFileSync(listrikPath, newContent, 'utf-8');
        
        console.log(`✓ Fixed ${profileFile}: ${Math.round(currentBalance.balance)}MW → ${Math.round(newBalance.balance)}MW`);
        fixed++;
      } else {
        console.log(`✗ ${profileFile}: Failed (now ${Math.round(newBalance.balance)}MW)`);
        failed.push({
          file: profileFile,
          balance: Math.round(newBalance.balance),
          production: Math.round(newBalance.production)
        });
      }
      
    } catch (err) {
      console.log(`Error with ${profileFile}: ${err.message}`);
    }
  });
});

console.log('\n========================================');
console.log('ROBUST FIX SUMMARY');
console.log('========================================');
console.log(`Already balanced: ${balanced}`);
console.log(`Newly fixed: ${fixed}`);
console.log(`Failed: ${failed.length}`);
console.log(`TOTAL BALANCED: ${balanced + fixed} / 206`);
console.log(`Success rate: ${Math.round(((balanced + fixed) / 206) * 100)}%`);

if (failed.length > 0) {
  console.log('\nRemaining problems (first 10):');
  failed.slice(0, 10).forEach(f => {
    console.log(`  - ${f.file}: ${f.balance}MW`);
  });
  if (failed.length > 10) {
    console.log(`  ... and ${failed.length - 10} more`);
  }
}

// Save summary
fs.writeFileSync('c:\\utama\\project\\project-sendiri\\EM\\FINAL_BALANCE_SUMMARY.json', JSON.stringify({
  already_balanced: balanced,
  newly_fixed: fixed,
  total_balanced: balanced + fixed,
  failed: failed.length,
  success_rate: Math.round(((balanced + fixed) / 206) * 100),
  failed_countries: failed
}, null, 2), 'utf-8');

console.log('\nSummary saved to: FINAL_BALANCE_SUMMARY.json');
