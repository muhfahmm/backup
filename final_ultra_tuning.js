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

function calculateBalance(population, coal, gas) {
  const production = (coal * 5000) + (gas * 3000);
  const consumption = (production * 0.7) + (population / 50000);
  const balance = production - consumption;
  return balance;
}

function generateListrikContent(countryName, coal, gas) {
  const varName = countryName.toLowerCase().replace(/\s+/g, '_').replace(/-/g, '_');
  
  let content = '// @ts-nocheck\n';
  content += `const ${varName}_listrik = {\n`;
  content += `  pembangkit_listrik_tenaga_nuklir: 0,\n`;
  content += `  pembangkit_listrik_tenaga_air: 0,\n`;
  content += `  pembangkit_listrik_tenaga_surya: 0,\n`;
  content += `  pembangkit_listrik_tenaga_uap: ${coal},\n`;
  content += `  pembangkit_listrik_tenaga_gas: ${gas},\n`;
  content += `  pembangkit_listrik_tenaga_angin: 0,\n`;
  content += '};\n';
  
  return content;
}

function getCountryInfo(profilePath) {
  const content = fs.readFileSync(profilePath, 'utf-8');
  
  const populationMatch = content.match(/"jumlah_penduduk":\s*(\d+)/);
  const population = populationMatch ? parseInt(populationMatch[1]) : 50000000;
  
  const nameMatch = content.match(/"name_id":\s*"([^"]+)"/);
  const name = nameMatch ? nameMatch[1] : 'Unknown';
  
  return { population, name };
}

const PROFILE_BASE = 'c:\\utama\\project\\project-sendiri\\EM\\json\\semua_fitur_negara\\0_profiles';
const LISTRIK_BASE = 'c:\\utama\\project\\project-sendiri\\EM\\json\\semua_fitur_negara\\1_pembangunan\\1_produksi\\1_sektor_listrik_nasional';

// The 8 out-of-range countries from verification
const problems = [
  { file: '26_malawi.ts', region: 'afrika', current: { coal: 0, gas: 1 } },
  { file: '40_republik_tanzania.ts', region: 'afrika', current: { coal: 0, gas: 2 } },
  { file: '73_kazakhstan.ts', region: 'asia', current: { coal: 0, gas: 1 } },
  { file: '93_suriah.ts', region: 'asia', current: { coal: 0, gas: 1 } },
  { file: '96_thailand.ts', region: 'asia', current: { coal: 1, gas: 1 } },
  { file: '117_inggris.ts', region: 'eropa', current: { coal: 0, gas: 2 } },
  { file: '137_prancis.ts', region: 'eropa', current: { coal: 1, gas: 1 } },
  { file: '198_chile.ts', region: 'sa', current: { coal: 0, gas: 1 } }
];

console.log(`Ultra-fine tuning for ${problems.length} out-of-range countries...\n`);

let fixed = 0;
let stillFailed = [];

problems.forEach(item => {
  try {
    const profilePath = path.join(PROFILE_BASE, item.region, item.file);
    const listrikPath = path.join(LISTRIK_BASE, item.region, item.file);
    
    if (!fs.existsSync(profilePath) || !fs.existsSync(listrikPath)) {
      return;
    }
    
    const { population, name } = getCountryInfo(profilePath);
    const current = calculateBalance(population, item.current.coal, item.current.gas);
    
    // Try different plant combinations
    let best = {
      coal: item.current.coal,
      gas: item.current.gas,
      balance: current,
      distance: Math.abs(current - 750)
    };
    
    // Try ±1 gas plant
    const attempts = [
      { coal: item.current.coal, gas: item.current.gas + 1 },
      { coal: item.current.coal, gas: Math.max(0, item.current.gas - 1) },
      { coal: item.current.coal + 1, gas: item.current.gas },
      { coal: Math.max(0, item.current.coal - 1), gas: item.current.gas },
    ];
    
    attempts.forEach(attempt => {
      const balance = calculateBalance(population, attempt.coal, attempt.gas);
      const distance = Math.abs(balance - 750);
      
      if (balance >= 500 && balance <= 1000) {
        if (distance < best.distance) {
          best = {
            coal: attempt.coal,
            gas: attempt.gas,
            balance: balance,
            distance: distance
          };
        }
      } else if (distance < best.distance) {
        best = {
          coal: attempt.coal,
          gas: attempt.gas,
          balance: balance,
          distance: distance
        };
      }
    });
    
    // Write if improved or in range
    if (best.balance >= 500 && best.balance <= 1000) {
      const newContent = generateListrikContent(name, best.coal, best.gas);
      fs.writeFileSync(listrikPath, newContent, 'utf-8');
      console.log(`✓ Fixed ${item.file}: ${Math.round(current)}MW → ${Math.round(best.balance)}MW (${best.coal} coal + ${best.gas} gas)`);
      fixed++;
    } else if (best.distance < Math.abs(current - 750)) {
      const newContent = generateListrikContent(name, best.coal, best.gas);
      fs.writeFileSync(listrikPath, newContent, 'utf-8');
      console.log(`~ Improved ${item.file}: ${Math.round(current)}MW → ${Math.round(best.balance)}MW`);
      fixed++;
    } else {
      stillFailed.push({
        file: item.file,
        balance: Math.round(current),
        attempted: best
      });
      console.log(`✗ ${item.file}: Remains at ${Math.round(current)}MW`);
    }
    
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
});

console.log(`\n✅ Fixed / Improved: ${fixed} countries`);
console.log(`Still problematic: ${stillFailed.length} countries`);
