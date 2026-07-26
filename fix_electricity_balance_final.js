const fs = require('fs');
const path = require('path');

// Power plant unit production in MW (game units, not real MW)
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

// Smart adjustment - target 600-900 MW for easier adjustment
function smartAdjust(listrikData, population, targetMin = 600, targetMax = 900) {
  const adjusted = { ...listrikData };
  let current = calculateBalance(population, adjusted);
  
  // Strategy: Start with a scaling factor based on current balance
  let iterations = 0;
  const maxIterations = 30;
  
  while ((current.balance < targetMin || current.balance > targetMax) && iterations < maxIterations) {
    iterations++;
    
    if (current.balance > targetMax) {
      // Too high - need to reduce production significantly
      // Calculate scaling factor needed
      const scaleFactor = targetMax / (current.balance || 1);
      
      // Apply proportional reduction to largest plants
      const sortedKeys = [
        'pembangkit_listrik_tenaga_nuklir',
        'pembangkit_listrik_tenaga_uap',
        'pembangkit_listrik_tenaga_gas',
        'pembangkit_listrik_tenaga_air',
        'pembangkit_listrik_tenaga_surya',
        'pembangkit_listrik_tenaga_angin'
      ];
      
      for (const key of sortedKeys) {
        if (adjusted[key] > 0) {
          const newCount = Math.ceil(adjusted[key] * scaleFactor);
          adjusted[key] = Math.max(0, newCount);
          const testBalance = calculateBalance(population, adjusted).balance;
          if (testBalance <= targetMax) {
            break;
          }
        }
      }
    } else {
      // Too low - need to increase production
      const scaleFactor = 1.2; // Increase by 20%
      
      // Apply proportional increase to any available plants
      const sortedKeys = [
        'pembangkit_listrik_tenaga_uap',
        'pembangkit_listrik_tenaga_gas',
        'pembangkit_listrik_tenaga_air',
        'pembangkit_listrik_tenaga_nuklir',
        'pembangkit_listrik_tenaga_surya',
        'pembangkit_listrik_tenaga_angin'
      ];
      
      let increased = false;
      for (const key of sortedKeys) {
        if (adjusted[key] > 0) {
          adjusted[key] = Math.ceil(adjusted[key] * scaleFactor);
          increased = true;
          break;
        }
      }
      
      // If no plants, create one
      if (!increased) {
        adjusted.pembangkit_listrik_tenaga_gas = Math.ceil((targetMin + targetMax) / 2 / UNIT_PRODUCTION.pembangkit_listrik_tenaga_gas) || 1;
      }
    }
    
    current = calculateBalance(population, adjusted);
  }
  
  return { adjusted, current, iterations };
}

// Process all countries
function processAllCountries() {
  const results = {
    processed: 0,
    balanced: 0,
    fixes: [],
    errors: [],
    summary: []
  };
  
  REGIONS.forEach(region => {
    const profileDir = path.join(PROFILE_BASE, region);
    const listrikDir = path.join(LISTRIK_BASE, region);
    
    if (!fs.existsSync(profileDir) || !fs.existsSync(listrikDir)) {
      console.log(`Skipping region ${region} - directory not found`);
      return;
    }
    
    // Get profile files
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
        const listrikObj = {};
        const keys = Object.keys(UNIT_PRODUCTION);
        keys.forEach(key => {
          const regex = new RegExp(`${key}:\\s*(\\d+)`, 'i');
          const match = listrikContent.match(regex);
          listrikObj[key] = match ? parseInt(match[1]) : 0;
        });
        
        // Calculate current balance
        const currentBalance = calculateBalance(population, listrikObj);
        
        // Check if already balanced
        if (currentBalance.balance >= 500 && currentBalance.balance <= 1000) {
          results.balanced++;
          results.processed++;
          return;
        }
        
        // Adjust
        const { adjusted, current, iterations } = smartAdjust(listrikObj, population);
        
        // Check if reached target
        const isBalanced = current.balance >= 500 && current.balance <= 1000 && current.balance > 0;
        
        if (isBalanced) {
          // Update file
          let newContent = listrikContent;
          keys.forEach(key => {
            const regex = new RegExp(`${key}:\\s*\\d+`, 'i');
            newContent = newContent.replace(regex, `${key}: ${adjusted[key]}`);
          });
          
          fs.writeFileSync(listrikPath, newContent, 'utf-8');
          results.balanced++;
          results.fixes.push({
            file: profileFile,
            region,
            before: Math.round(currentBalance.balance),
            after: Math.round(current.balance),
            production: Math.round(current.production),
            population
          });
          console.log(`✓ ${profileFile}: ${Math.round(currentBalance.balance)}MW → ${Math.round(current.balance)}MW`);
        } else {
          results.fixes.push({
            file: profileFile,
            region,
            before: Math.round(currentBalance.balance),
            after: Math.round(current.balance),
            status: 'FAILED',
            production: Math.round(current.production),
            population
          });
          console.log(`✗ ${profileFile}: Failed to balance (now ${Math.round(current.balance)}MW)`);
        }
        
        results.processed++;
        
      } catch (err) {
        results.errors.push({ file: profileFile, error: err.message });
      }
    });
  });
  
  return results;
}

// Run
console.log('FINAL PASS: Balancing all countries to 500-1000 MW target range...\n');
const results = processAllCountries();

console.log('\n========================================');
console.log('FINAL BALANCE SUMMARY');
console.log('========================================');
console.log(`Total processed: ${results.processed} countries`);
console.log(`Successfully balanced: ${results.balanced} countries`);
console.log(`Failed to balance: ${results.fixes.filter(f => f.status === 'FAILED').length}`);
console.log(`Errors: ${results.errors.length}`);

const failed = results.fixes.filter(f => f.status === 'FAILED');
if (failed.length > 0) {
  console.log('\nStill problematic countries:');
  failed.slice(0, 10).forEach(item => {
    console.log(`  - ${item.file}: ${item.before}MW → ${item.after}MW`);
  });
}

// Save detailed report
const reportPath = 'c:\\utama\\project\\project-sendiri\\EM\\final_electricity_balance_report.json';
fs.writeFileSync(reportPath, JSON.stringify({
  summary: {
    total_processed: results.processed,
    balanced: results.balanced,
    failed: failed.length,
    balance_percentage: Math.round((results.balanced / results.processed) * 100)
  },
  fixes: results.fixes.slice(0, 50),
  failed_countries: failed
}, null, 2), 'utf-8');

console.log(`\nDetailed report saved to: ${reportPath}`);
