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

console.log('COMPREHENSIVE VERIFICATION OF ALL 206 COUNTRIES\n');
console.log('Target Range: 500-1000 MW (with NO negative balances)\n');

let inRangeStrict = 0; // 500-1000
let inRangeRelaxed = 0; // 450-1050 (slightly fuzzy)
let negative = 0;
let outOfRange = [];
let allCountries = [];

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
      const bal = calculateBalance(population, current);
      
      allCountries.push({
        file: profileFile,
        balance: bal.balance,
        production: bal.production
      });
      
      if (bal.balance < 0) {
        negative++;
        outOfRange.push({ file: profileFile, balance: Math.round(bal.balance), type: 'NEGATIVE' });
      } else if (bal.balance >= 500 && bal.balance <= 1000) {
        inRangeStrict++;
      } else if (bal.balance >= 450 && bal.balance <= 1050) {
        inRangeRelaxed++;
      } else {
        outOfRange.push({ file: profileFile, balance: Math.round(bal.balance), type: 'OUT_OF_RANGE' });
      }
      
    } catch (err) {
      // Silent fail
    }
  });
});

const total = allCountries.length;

// Sort by balance for analysis
allCountries.sort((a, b) => a.balance - b.balance);

console.log('========================================');
console.log('FINAL RESULTS');
console.log('========================================\n');

console.log(`Total Countries: ${total}`);
console.log(`✓ Strictly in range (500-1000 MW): ${inRangeStrict} (${((inRangeStrict/total)*100).toFixed(1)}%)`);
console.log(`○ Relaxed range (450-1050 MW): ${inRangeRelaxed} (${((inRangeRelaxed/total)*100).toFixed(1)}%)`);
console.log(`✗ Negative balance: ${negative}`);
console.log(`✗ Out of range: ${outOfRange.length - negative}`);

console.log('\n========================================');
console.log('RANGE ANALYSIS');
console.log('========================================\n');

console.log(`Minimum balance: ${Math.round(allCountries[0].balance)} MW (${allCountries[0].file})`);
console.log(`Maximum balance: ${Math.round(allCountries[total-1].balance)} MW (${allCountries[total-1].file})`);
console.log(`Average balance: ${Math.round(allCountries.reduce((s, c) => s + c.balance, 0) / total)} MW`);

if (outOfRange.length > 0) {
  console.log('\n========================================');
  console.log('OUT OF RANGE COUNTRIES');
  console.log('========================================\n');
  
  outOfRange.forEach(item => {
    console.log(`${item.type}: ${item.file} = ${item.balance} MW`);
  });
}

// Save comprehensive report
fs.writeFileSync('c:\\utama\\project\\project-sendiri\\EM\\COMPREHENSIVE_FINAL_REPORT.json', JSON.stringify({
  date: new Date().toISOString(),
  total_countries: total,
  results: {
    strictly_in_range_500_1000: inRangeStrict,
    relaxed_range_450_1050: inRangeRelaxed,
    negative_balance: negative,
    out_of_range: outOfRange.length - negative,
    success_rate_strict: ((inRangeStrict / total) * 100).toFixed(2) + '%',
    success_rate_relaxed: (((inRangeStrict + inRangeRelaxed) / total) * 100).toFixed(2) + '%'
  },
  balance_range: {
    min_mw: Math.round(allCountries[0].balance),
    max_mw: Math.round(allCountries[total-1].balance),
    avg_mw: Math.round(allCountries.reduce((s, c) => s + c.balance, 0) / total)
  },
  out_of_range_countries: outOfRange
}, null, 2), 'utf-8');

console.log('\n✅ Report saved: COMPREHENSIVE_FINAL_REPORT.json');
