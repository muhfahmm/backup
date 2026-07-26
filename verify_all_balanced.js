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

console.log('FINAL VERIFICATION: Checking all 206 countries...\n');

let inRange = 0;
let outOfRange = [];
let stats = {
  min: Infinity,
  max: -Infinity,
  avg: 0,
  total: 0
};

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
      
      const profileContent = fs.readFileSync(profilePath, 'utf-8');
      const populationMatch = profileContent.match(/"jumlah_penduduk":\s*(\d+)/);
      const population = populationMatch ? parseInt(populationMatch[1]) : 50000000;
      
      const listrikContent = fs.readFileSync(listrikPath, 'utf-8');
      const current = parseListrikFile(listrikContent);
      const balance = calculateBalance(population, current);
      
      const isInRange = balance.balance >= 500 && balance.balance <= 1000 && balance.balance > 0;
      
      if (isInRange) {
        inRange++;
        stats.total += balance.balance;
        stats.min = Math.min(stats.min, balance.balance);
        stats.max = Math.max(stats.max, balance.balance);
      } else {
        outOfRange.push({
          file: profileFile,
          balance: Math.round(balance.balance),
          production: Math.round(balance.production),
          consumption: Math.round(balance.consumption)
        });
      }
      
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  });
});

stats.avg = inRange > 0 ? Math.round(stats.total / inRange) : 0;

console.log('========================================');
console.log('VERIFICATION SUMMARY');
console.log('========================================');
console.log(`Countries in range (500-1000 MW): ${inRange} / 206`);
console.log(`Countries out of range: ${outOfRange.length}`);
console.log(`Success rate: ${((inRange / 206) * 100).toFixed(2)}%`);

if (inRange === 206) {
  console.log('\n✅ ALL 206 COUNTRIES ARE BALANCED!');
}

console.log('\nBalance Statistics:');
console.log(`  Minimum: ${Math.round(stats.min)} MW`);
console.log(`  Maximum: ${Math.round(stats.max)} MW`);
console.log(`  Average: ${stats.avg} MW`);

if (outOfRange.length > 0) {
  console.log('\nOut of range countries:');
  outOfRange.forEach(c => {
    console.log(`  - ${c.file}: ${c.balance} MW`);
  });
}

// Save final summary
fs.writeFileSync('c:\\utama\\project\\project-sendiri\\EM\\FINAL_VERIFICATION_REPORT.json', JSON.stringify({
  total_countries: 206,
  in_range: inRange,
  out_of_range: outOfRange.length,
  success_rate: ((inRange / 206) * 100).toFixed(2) + '%',
  statistics: {
    min_balance_mw: Math.round(stats.min),
    max_balance_mw: Math.round(stats.max),
    avg_balance_mw: stats.avg,
    range: '500-1000 MW'
  },
  all_balanced: inRange === 206,
  problematic_countries: outOfRange
}, null, 2), 'utf-8');

console.log('\nFinal report saved: FINAL_VERIFICATION_REPORT.json');
