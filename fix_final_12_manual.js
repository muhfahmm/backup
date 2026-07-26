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

// Get population and name from profile
function getCountryInfo(profilePath) {
  const content = fs.readFileSync(profilePath, 'utf-8');
  
  const populationMatch = content.match(/"jumlah_penduduk":\s*(\d+)/);
  const population = populationMatch ? parseInt(populationMatch[1]) : 50000000;
  
  const nameMatch = content.match(/"name_id":\s*"([^"]+)"/);
  const name = nameMatch ? nameMatch[1] : 'Unknown';
  
  return { population, name };
}

// Remaining problem countries with manual solutions
const fixes = [
  {
    file: '26_malawi.ts',
    region: 'afrika',
    plants: { pembangkit_listrik_tenaga_nuklir: 0, pembangkit_listrik_tenaga_air: 0, pembangkit_listrik_tenaga_surya: 0, pembangkit_listrik_tenaga_uap: 1, pembangkit_listrik_tenaga_gas: 0, pembangkit_listrik_tenaga_angin: 0 }
  },
  {
    file: '40_republik_tanzania.ts',
    region: 'afrika',
    plants: { pembangkit_listrik_tenaga_nuklir: 0, pembangkit_listrik_tenaga_air: 0, pembangkit_listrik_tenaga_surya: 0, pembangkit_listrik_tenaga_uap: 2, pembangkit_listrik_tenaga_gas: 0, pembangkit_listrik_tenaga_angin: 0 }
  },
  {
    file: '59_bangladesh.ts',
    region: 'asia',
    plants: { pembangkit_listrik_tenaga_nuklir: 0, pembangkit_listrik_tenaga_air: 0, pembangkit_listrik_tenaga_surya: 0, pembangkit_listrik_tenaga_uap: 4, pembangkit_listrik_tenaga_gas: 2, pembangkit_listrik_tenaga_angin: 0 }
  },
  {
    file: '63_filipina.ts',
    region: 'asia',
    plants: { pembangkit_listrik_tenaga_nuklir: 0, pembangkit_listrik_tenaga_air: 0, pembangkit_listrik_tenaga_surya: 0, pembangkit_listrik_tenaga_uap: 3, pembangkit_listrik_tenaga_gas: 2, pembangkit_listrik_tenaga_angin: 0 }
  },
  {
    file: '66_india.ts',
    region: 'asia',
    plants: { pembangkit_listrik_tenaga_nuklir: 0, pembangkit_listrik_tenaga_air: 0, pembangkit_listrik_tenaga_surya: 0, pembangkit_listrik_tenaga_uap: 6, pembangkit_listrik_tenaga_gas: 3, pembangkit_listrik_tenaga_angin: 0 }
  },
  {
    file: '73_kazakhstan.ts',
    region: 'asia',
    plants: { pembangkit_listrik_tenaga_nuklir: 0, pembangkit_listrik_tenaga_air: 0, pembangkit_listrik_tenaga_surya: 0, pembangkit_listrik_tenaga_uap: 2, pembangkit_listrik_tenaga_gas: 1, pembangkit_listrik_tenaga_angin: 0 }
  },
  {
    file: '93_suriah.ts',
    region: 'asia',
    plants: { pembangkit_listrik_tenaga_nuklir: 0, pembangkit_listrik_tenaga_air: 0, pembangkit_listrik_tenaga_surya: 0, pembangkit_listrik_tenaga_uap: 1, pembangkit_listrik_tenaga_gas: 1, pembangkit_listrik_tenaga_angin: 0 }
  },
  {
    file: '96_thailand.ts',
    region: 'asia',
    plants: { pembangkit_listrik_tenaga_nuklir: 0, pembangkit_listrik_tenaga_air: 0, pembangkit_listrik_tenaga_surya: 0, pembangkit_listrik_tenaga_uap: 3, pembangkit_listrik_tenaga_gas: 1, pembangkit_listrik_tenaga_angin: 0 }
  },
  {
    file: '117_inggris.ts',
    region: 'eropa',
    plants: { pembangkit_listrik_tenaga_nuklir: 0, pembangkit_listrik_tenaga_air: 0, pembangkit_listrik_tenaga_surya: 0, pembangkit_listrik_tenaga_uap: 4, pembangkit_listrik_tenaga_gas: 1, pembangkit_listrik_tenaga_angin: 0 }
  },
  {
    file: '137_prancis.ts',
    region: 'eropa',
    plants: { pembangkit_listrik_tenaga_nuklir: 0, pembangkit_listrik_tenaga_air: 0, pembangkit_listrik_tenaga_surya: 0, pembangkit_listrik_tenaga_uap: 5, pembangkit_listrik_tenaga_gas: 1, pembangkit_listrik_tenaga_angin: 0 }
  },
  {
    file: '197_brazil.ts',
    region: 'sa',
    plants: { pembangkit_listrik_tenaga_nuklir: 0, pembangkit_listrik_tenaga_air: 0, pembangkit_listrik_tenaga_surya: 0, pembangkit_listrik_tenaga_uap: 5, pembangkit_listrik_tenaga_gas: 2, pembangkit_listrik_tenaga_angin: 0 }
  },
  {
    file: '198_chile.ts',
    region: 'sa',
    plants: { pembangkit_listrik_tenaga_nuklir: 0, pembangkit_listrik_tenaga_air: 0, pembangkit_listrik_tenaga_surya: 0, pembangkit_listrik_tenaga_uap: 2, pembangkit_listrik_tenaga_gas: 1, pembangkit_listrik_tenaga_angin: 0 }
  }
];

const PROFILE_BASE = 'c:\\utama\\project\\project-sendiri\\EM\\json\\semua_fitur_negara\\0_profiles';
const LISTRIK_BASE = 'c:\\utama\\project\\project-sendiri\\EM\\json\\semua_fitur_negara\\1_pembangunan\\1_produksi\\1_sektor_listrik_nasional';

console.log(`Manually fixing ${fixes.length} remaining countries...\n`);

let fixed = 0;
let stillFailed = [];

fixes.forEach(item => {
  try {
    const profilePath = path.join(PROFILE_BASE, item.region, item.file);
    const listrikPath = path.join(LISTRIK_BASE, item.region, item.file);
    
    if (!fs.existsSync(profilePath) || !fs.existsSync(listrikPath)) {
      console.log(`Skip ${item.file} - not found`);
      return;
    }
    
    // Get population and name
    const { population, name } = getCountryInfo(profilePath);
    
    // Calculate balance with new plants
    const balance = calculateBalance(population, item.plants);
    
    // Check if in range
    if (balance.balance >= 500 && balance.balance <= 1000 && balance.balance > 0) {
      // Write file
      const newContent = generateListrikContent(name, item.plants);
      fs.writeFileSync(listrikPath, newContent, 'utf-8');
      console.log(`✓ Fixed ${item.file}: balance = ${Math.round(balance.balance)}MW (production: ${Math.round(balance.production)}MW)`);
      fixed++;
    } else {
      console.log(`✗ ${item.file}: Failed - balance ${Math.round(balance.balance)}MW`);
      stillFailed.push({
        file: item.file,
        balance: Math.round(balance.balance),
        production: Math.round(balance.production)
      });
    }
    
  } catch (err) {
    console.log(`Error with ${item.file}: ${err.message}`);
  }
});

console.log('\n========================================');
console.log('MANUAL FIX SUMMARY');
console.log('========================================');
console.log(`Fixed: ${fixed} countries`);
console.log(`Still failed: ${stillFailed.length} countries`);
console.log(`TOTAL BALANCED: ${195 + fixed} / 206`);
console.log(`Success rate: ${Math.round(((195 + fixed) / 206) * 100)}%`);

if (stillFailed.length > 0) {
  console.log('\nRemaining failures:');
  stillFailed.forEach(f => {
    console.log(`  - ${f.file}: ${f.balance}MW`);
  });
}
