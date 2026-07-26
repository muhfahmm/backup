const fs = require('fs');
const path = require('path');

// Power plant unit production in MW
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

// Calculate balance
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

// Aggressive adjustment - reduce dramatically or rebuild
function adjustProductionAggressive(listrikData, population, targetMin = 500, targetMax = 1000) {
  const adjusted = { ...listrikData };
  let current = calculateBalance(population, adjusted);
  
  // If way too high, reduce everything significantly
  if (current.balance > targetMax * 1.2) {
    // Reduce all plants by 60%
    for (const key of Object.keys(adjusted)) {
      if (adjusted[key] > 0) {
        adjusted[key] = Math.max(0, Math.ceil(adjusted[key] * 0.4));
      }
    }
    current = calculateBalance(population, adjusted);
  }
  
  // Fine-tune with iterations
  let iterations = 0;
  const maxIterations = 50;
  
  while ((current.balance < targetMin || current.balance > targetMax) && iterations < maxIterations) {
    iterations++;
    
    if (current.balance > targetMax) {
      // Too high - reduce
      const targetReduction = (current.balance - targetMax) / current.balance;
      
      // Reduce largest plants most aggressively
      if (adjusted.pembangkit_listrik_tenaga_nuklir > 0) {
        adjusted.pembangkit_listrik_tenaga_nuklir = Math.max(0, Math.ceil(adjusted.pembangkit_listrik_tenaga_nuklir * (1 - targetReduction * 1.5)));
      } else if (adjusted.pembangkit_listrik_tenaga_uap > 0) {
        adjusted.pembangkit_listrik_tenaga_uap = Math.max(0, Math.ceil(adjusted.pembangkit_listrik_tenaga_uap * (1 - targetReduction * 1.5)));
      } else if (adjusted.pembangkit_listrik_tenaga_gas > 0) {
        adjusted.pembangkit_listrik_tenaga_gas = Math.max(0, Math.ceil(adjusted.pembangkit_listrik_tenaga_gas * (1 - targetReduction * 1.5)));
      }
    } else {
      // Too low - increase
      if (adjusted.pembangkit_listrik_tenaga_uap > 0) {
        adjusted.pembangkit_listrik_tenaga_uap = Math.ceil(adjusted.pembangkit_listrik_tenaga_uap * 1.2);
      } else if (adjusted.pembangkit_listrik_tenaga_gas > 0) {
        adjusted.pembangkit_listrik_tenaga_gas = Math.ceil(adjusted.pembangkit_listrik_tenaga_gas * 1.2);
      } else {
        adjusted.pembangkit_listrik_tenaga_gas = 1;
      }
    }
    
    current = calculateBalance(population, adjusted);
  }
  
  return { adjusted, current, iterations };
}

// Read report to find countries needing fixes
const reportPath = 'c:\\utama\\project\\project-sendiri\\EM\\electricity_balance_adjustment_report.json';
const report = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));

console.log('Fixing remaining countries with balance > 1000 MW...\n');

let fixed = 0;
let stillNeedsReview = [];

report.needsManualReview.forEach((item, idx) => {
  try {
    const listrikPath = path.join(LISTRIK_BASE, item.region, item.file);
    
    if (!fs.existsSync(listrikPath)) {
      console.log(`Skip ${item.file} - file not found`);
      return;
    }
    
    // Read current file
    const listrikContent = fs.readFileSync(listrikPath, 'utf-8');
    
    // Parse electricity data
    const listrikObj = {};
    const keys = Object.keys(UNIT_PRODUCTION);
    keys.forEach(key => {
      const regex = new RegExp(`${key}:\\s*(\\d+)`, 'i');
      const match = listrikContent.match(regex);
      listrikObj[key] = match ? parseInt(match[1]) : 0;
    });
    
    // Adjust aggressively
    const { adjusted, current, iterations } = adjustProductionAggressive(listrikObj, item.population);
    
    // Check result
    const isBalanced = current.balance >= 500 && current.balance <= 1000 && current.balance > 0;
    
    if (isBalanced) {
      // Update file
      let newContent = listrikContent;
      keys.forEach(key => {
        const regex = new RegExp(`${key}:\\s*\\d+`, 'i');
        newContent = newContent.replace(regex, `${key}: ${adjusted[key]}`);
      });
      
      fs.writeFileSync(listrikPath, newContent, 'utf-8');
      console.log(`✓ Fixed ${item.file}: ${Math.round(item.afterAdjustment)} → ${Math.round(current.balance)} MW`);
      fixed++;
    } else {
      stillNeedsReview.push({
        ...item,
        newBalance: Math.round(current.balance),
        adjustedCounts: adjusted,
        iterations
      });
      console.log(`✗ ${item.file}: Still ${Math.round(current.balance)} MW (needs special handling)`);
    }
  } catch (err) {
    console.log(`Error with ${item.file}: ${err.message}`);
  }
});

console.log('\n========================================');
console.log('AGGRESSIVE FIX SUMMARY');
console.log('========================================');
console.log(`Fixed: ${fixed} countries`);
console.log(`Still needs review: ${stillNeedsReview.length} countries`);

if (stillNeedsReview.length > 0) {
  console.log('\nCountries still needing review:');
  stillNeedsReview.forEach(item => {
    console.log(`  - ${item.file}: balance = ${item.newBalance} MW`);
  });
}

// Save updated report
const updatedReport = {
  processedAggressive: report.needsManualReview.length,
  fixed,
  stillNeedsReview,
  timestamp: new Date().toISOString()
};

fs.writeFileSync('c:\\utama\\project\\project-sendiri\\EM\\aggressive_fix_report.json', JSON.stringify(updatedReport, null, 2), 'utf-8');
console.log('\nReport saved to: aggressive_fix_report.json');
