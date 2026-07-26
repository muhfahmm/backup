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

function generateListrikContent(countryName, newData) {
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

// Problem countries
const problems = [
  { file: '26_malawi.ts', region: 'afrika' },
  { file: '27_mali.ts', region: 'afrika' },
  { file: '40_republik_tanzania.ts', region: 'afrika' },
  { file: '6_burkina_faso.ts', region: 'afrika' },
  { file: '59_bangladesh.ts', region: 'asia' },
  { file: '63_filipina.ts', region: 'asia' },
  { file: '66_india.ts', region: 'asia' },
  { file: '73_kazakhstan.ts', region: 'asia' },
  { file: '92_sri_lanka.ts', region: 'asia' },
  { file: '93_suriah.ts', region: 'asia' },
  { file: '96_thailand.ts', region: 'asia' },
  { file: '117_inggris.ts', region: 'eropa' },
  { file: '137_prancis.ts', region: 'eropa' },
  { file: '197_brazil.ts', region: 'sa' },
  { file: '198_chile.ts', region: 'sa' }
];

console.log(`Aggressive scale down for ${problems.length} countries with excessive production...\n`);

let fixed = 0;
let stillFailed = [];

problems.forEach(item => {
  try {
    const profilePath = path.join(PROFILE_BASE, item.region, item.file);
    const listrikPath = path.join(LISTRIK_BASE, item.region, item.file);
    
    if (!fs.existsSync(profilePath) || !fs.existsSync(listrikPath)) {
      console.log(`Skip ${item.file} - not found`);
      return;
    }
    
    // Get population and name
    const profileContent = fs.readFileSync(profilePath, 'utf-8');
    const populationMatch = profileContent.match(/"jumlah_penduduk":\s*(\d+)/);
    const population = populationMatch ? parseInt(populationMatch[1]) : 50000000;
    
    const nameMatch = profileContent.match(/"name_id":\s*"([^"]+)"/);
    const countryName = nameMatch ? nameMatch[1] : item.file.replace(/^\d+_/, '').replace(/\.ts$/, '');
    
    // Parse current
    const listrikContent = fs.readFileSync(listrikPath, 'utf-8');
    const current = parseListrikFile(listrikContent);
    const currentBalance = calculateBalance(population, current);
    
    // If already in range, skip
    if (currentBalance.balance <= 1000 && currentBalance.balance >= 500) {
      console.log(`= ${item.file}: Already balanced at ${Math.round(currentBalance.balance)}MW`);
      return;
    }
    
    // Calculate needed production
    const populationDemand = population / 50000;
    const targetBalance = 750;
    const neededProduction = (targetBalance + populationDemand) / 0.3;
    
    // Scale all current plants down proportionally
    const scaleFactor = Math.max(0.001, neededProduction / (currentBalance.production || 1));
    const scaled = {};
    let hasProduction = false;
    
    Object.keys(current).forEach(key => {
      if (current[key] > 0) {
        scaled[key] = Math.max(1, Math.round(current[key] * scaleFactor));
        hasProduction = true;
      } else {
        scaled[key] = 0;
      }
    });
    
    // If scaling doesn't work, build minimal production
    if (!hasProduction || scaleFactor < 0.01) {
      scaled.pembangkit_listrik_tenaga_uap = 1;
      Object.keys(scaled).forEach(k => {
        if (k !== 'pembangkit_listrik_tenaga_uap') scaled[k] = 0;
      });
    }
    
    const scaledBalance = calculateBalance(population, scaled);
    
    // Check if now in range
    if (scaledBalance.balance <= 1000 && scaledBalance.balance >= 500 && scaledBalance.balance > 0) {
      const newContent = generateListrikContent(countryName, scaled);
      fs.writeFileSync(listrikPath, newContent, 'utf-8');
      console.log(`✓ Fixed ${item.file}: ${Math.round(currentBalance.balance)}MW → ${Math.round(scaledBalance.balance)}MW (scale: ${(scaleFactor * 100).toFixed(2)}%)`);
      fixed++;
    } else {
      console.log(`✗ ${item.file}: Still ${Math.round(scaledBalance.balance)}MW after scaling`);
      stillFailed.push({
        file: item.file,
        before: Math.round(currentBalance.balance),
        after: Math.round(scaledBalance.balance),
        scaleFactor: scaleFactor
      });
    }
    
  } catch (err) {
    console.log(`Error with ${item.file}: ${err.message}`);
  }
});

console.log('\n========================================');
console.log('AGGRESSIVE SCALE SUMMARY');
console.log('========================================');
console.log(`Fixed: ${fixed} countries`);
console.log(`Still failed: ${stillFailed.length} countries`);
console.log(`TOTAL BALANCED: ${192 + fixed} / 206`);
console.log(`Success rate: ${Math.round(((192 + fixed) / 206) * 100)}%`);

if (stillFailed.length > 0) {
  console.log('\nRemaining failures:');
  stillFailed.forEach(f => {
    console.log(`  - ${f.file}: ${f.before}MW → ${f.after}MW`);
  });
}
