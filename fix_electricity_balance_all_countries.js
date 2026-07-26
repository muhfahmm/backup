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

// Adjust pembangkit to reach target balance
function adjustProduction(listrikData, population, targetMin = 500, targetMax = 1000) {
  let current = calculateBalance(population, listrikData);
  
  // Make adjustments
  const adjusted = { ...listrikData };
  let iterations = 0;
  const maxIterations = 20;
  
  while ((current.balance < targetMin || current.balance > targetMax) && iterations < maxIterations) {
    iterations++;
    
    if (current.balance > targetMax) {
      // Too high - reduce production
      // Reduce largest plants first
      let reduced = false;
      
      // Try nuclear first (largest impact)
      if (adjusted.pembangkit_listrik_tenaga_nuklir > 0) {
        adjusted.pembangkit_listrik_tenaga_nuklir = Math.max(0, Math.ceil(adjusted.pembangkit_listrik_tenaga_nuklir * 0.85));
        reduced = true;
      }
      // Then coal/steam
      if (adjusted.pembangkit_listrik_tenaga_uap > 0 && !reduced) {
        adjusted.pembangkit_listrik_tenaga_uap = Math.max(0, Math.ceil(adjusted.pembangkit_listrik_tenaga_uap * 0.85));
        reduced = true;
      }
      // Then gas
      if (adjusted.pembangkit_listrik_tenaga_gas > 0 && !reduced) {
        adjusted.pembangkit_listrik_tenaga_gas = Math.max(0, Math.ceil(adjusted.pembangkit_listrik_tenaga_gas * 0.85));
        reduced = true;
      }
      // Then hydro
      if (adjusted.pembangkit_listrik_tenaga_air > 0 && !reduced) {
        adjusted.pembangkit_listrik_tenaga_air = Math.max(0, Math.ceil(adjusted.pembangkit_listrik_tenaga_air * 0.85));
        reduced = true;
      }
      
      if (!reduced) break;
    } else {
      // Too low - increase production
      // Increase plants by 1.5x
      if (adjusted.pembangkit_listrik_tenaga_uap > 0) {
        adjusted.pembangkit_listrik_tenaga_uap = Math.ceil(adjusted.pembangkit_listrik_tenaga_uap * 1.3);
      } else if (adjusted.pembangkit_listrik_tenaga_gas > 0) {
        adjusted.pembangkit_listrik_tenaga_gas = Math.ceil(adjusted.pembangkit_listrik_tenaga_gas * 1.3);
      } else if (adjusted.pembangkit_listrik_tenaga_nuklir > 0) {
        adjusted.pembangkit_listrik_tenaga_nuklir = Math.ceil(adjusted.pembangkit_listrik_tenaga_nuklir * 1.1);
      } else if (adjusted.pembangkit_listrik_tenaga_air > 0) {
        adjusted.pembangkit_listrik_tenaga_air = Math.ceil(adjusted.pembangkit_listrik_tenaga_air * 1.3);
      } else {
        // Create minimum production if nothing exists
        adjusted.pembangkit_listrik_tenaga_gas = 1;
      }
    }
    
    current = calculateBalance(population, adjusted);
  }
  
  return { adjusted, current, iterations };
}

// Main process
function processAllCountries() {
  const results = {
    processed: 0,
    balanced: 0,
    needsManualReview: [],
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
          console.log(`Skipping ${profileFile} - no electricity file`);
          return;
        }
        
        // Read files
        const profileContent = fs.readFileSync(profilePath, 'utf-8');
        const listrikContent = fs.readFileSync(listrikPath, 'utf-8');
        
        // Extract data using regex
        const populationMatch = profileContent.match(/"jumlah_penduduk":\s*(\d+)/);
        const population = populationMatch ? parseInt(populationMatch[1]) : 50000000;
        
        // Parse electricity data
        const listrikObj = {};
        const keys = Object.keys(UNIT_PRODUCTION);
        keys.forEach(key => {
          const regex = new RegExp(`${key}:\\s*(\d+)`, 'i');
          const match = listrikContent.match(regex);
          listrikObj[key] = match ? parseInt(match[1]) : 0;
        });
        
        // Calculate current balance
        const currentBalance = calculateBalance(population, listrikObj);
        
        // Adjust if needed
        const { adjusted, current, iterations } = adjustProduction(listrikObj, population);
        
        // Check if we reached target
        const isBalanced = current.balance >= 500 && current.balance <= 1000 && current.balance > 0;
        
        if (isBalanced) {
          results.balanced++;
          
          // Write updated file
          if (JSON.stringify(adjusted) !== JSON.stringify(listrikObj)) {
            let newContent = listrikContent;
            const keys = Object.keys(UNIT_PRODUCTION);
            keys.forEach(key => {
              const regex = new RegExp(`${key}:\\s*\\d+`, 'i');
              newContent = newContent.replace(regex, `${key}: ${adjusted[key]}`);
            });
            
            fs.writeFileSync(listrikPath, newContent, 'utf-8');
            console.log(`✓ ${profileFile}: Balanced (${Math.round(current.balance)} MW)`);
          } else {
            console.log(`= ${profileFile}: Already balanced (${Math.round(current.balance)} MW)`);
          }
        } else {
          results.needsManualReview.push({
            file: profileFile,
            region,
            population,
            currentBalance: Math.round(currentBalance.balance),
            afterAdjustment: Math.round(current.balance),
            production: Math.round(current.production),
            consumption: Math.round(current.consumption),
            iterations,
            status: 'Failed to balance'
          });
          
          console.log(`✗ ${profileFile}: Not balanced (${Math.round(current.balance)} MW) - needs review`);
        }
        
        results.processed++;
        
      } catch (err) {
        results.errors.push({ file: profileFile, error: err.message });
        console.log(`Error processing ${profileFile}:`, err.message);
      }
    });
  });
  
  return results;
}

// Run
console.log('Starting electricity balance adjustment for all 206 countries...\n');
const results = processAllCountries();

console.log('\n========================================');
console.log('SUMMARY');
console.log('========================================');
console.log(`Processed: ${results.processed} countries`);
console.log(`Successfully balanced: ${results.balanced} countries`);
console.log(`Needs manual review: ${results.needsManualReview.length} countries`);
console.log(`Errors: ${results.errors.length}`);

if (results.needsManualReview.length > 0) {
  console.log('\nCountries that need manual review:');
  results.needsManualReview.slice(0, 10).forEach(item => {
    console.log(`  - ${item.file}: ${item.currentBalance}MW → ${item.afterAdjustment}MW`);
  });
  if (results.needsManualReview.length > 10) {
    console.log(`  ... and ${results.needsManualReview.length - 10} more`);
  }
}

// Save detailed report
const reportPath = 'c:\\utama\\project\\project-sendiri\\EM\\electricity_balance_adjustment_report.json';
fs.writeFileSync(reportPath, JSON.stringify(results, null, 2), 'utf-8');
console.log(`\nDetailed report saved to: ${reportPath}`);
