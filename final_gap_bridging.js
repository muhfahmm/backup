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

function calculateBalance(population, plants) {
  let production = 0;
  for (const [key, count] of Object.entries(plants)) {
    if (UNIT_PRODUCTION[key]) {
      production += count * UNIT_PRODUCTION[key];
    }
  }
  
  const consumption = (production * 0.7) + (population / 50000);
  const balance = production - consumption;
  return balance;
}

function generateListrikContent(countryName, plants) {
  const varName = countryName.toLowerCase().replace(/\s+/g, '_').replace(/-/g, '_');
  
  let content = '// @ts-nocheck\n';
  content += `const ${varName}_listrik = {\n`;
  
  const keys = [
    'pembangkit_listrik_tenaga_nuklir',
    'pembangkit_listrik_tenaga_air',
    'pembangkit_listrik_tenaga_surya',
    'pembangkit_listrik_tenaga_uap',
    'pembangkit_listrik_tenaga_gas',
    'pembangkit_listrik_tenaga_angin'
  ];
  
  keys.forEach((key, idx) => {
    const value = plants[key] || 0;
    const comma = idx < keys.length - 1 ? ',' : '';
    content += `  ${key}: ${value}${comma}\n`;
  });
  
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

// Gap-bridging solutions using solar/wind
const solutions = [
  {
    file: '26_malawi.ts',
    region: 'afrika',
    plants: {
      pembangkit_listrik_tenaga_nuklir: 0,
      pembangkit_listrik_tenaga_air: 0,
      pembangkit_listrik_tenaga_surya: 1,
      pembangkit_listrik_tenaga_uap: 0,
      pembangkit_listrik_tenaga_gas: 1,
      pembangkit_listrik_tenaga_angin: 0
    }
  },
  {
    file: '40_republik_tanzania.ts',
    region: 'afrika',
    plants: {
      pembangkit_listrik_tenaga_nuklir: 0,
      pembangkit_listrik_tenaga_air: 0,
      pembangkit_listrik_tenaga_surya: 2,
      pembangkit_listrik_tenaga_uap: 0,
      pembangkit_listrik_tenaga_gas: 1,
      pembangkit_listrik_tenaga_angin: 0
    }
  },
  {
    file: '73_kazakhstan.ts',
    region: 'asia',
    plants: {
      pembangkit_listrik_tenaga_nuklir: 0,
      pembangkit_listrik_tenaga_air: 0,
      pembangkit_listrik_tenaga_surya: 1,
      pembangkit_listrik_tenaga_uap: 0,
      pembangkit_listrik_tenaga_gas: 1,
      pembangkit_listrik_tenaga_angin: 0
    }
  },
  {
    file: '93_suriah.ts',
    region: 'asia',
    plants: {
      pembangkit_listrik_tenaga_nuklir: 0,
      pembangkit_listrik_tenaga_air: 0,
      pembangkit_listrik_tenaga_surya: 1,
      pembangkit_listrik_tenaga_uap: 0,
      pembangkit_listrik_tenaga_gas: 1,
      pembangkit_listrik_tenaga_angin: 0
    }
  },
  {
    file: '96_thailand.ts',
    region: 'asia',
    plants: {
      pembangkit_listrik_tenaga_nuklir: 0,
      pembangkit_listrik_tenaga_air: 0,
      pembangkit_listrik_tenaga_surya: 0,
      pembangkit_listrik_tenaga_uap: 1,
      pembangkit_listrik_tenaga_gas: 0,
      pembangkit_listrik_tenaga_angin: 0
    }
  },
  {
    file: '117_inggris.ts',
    region: 'eropa',
    plants: {
      pembangkit_listrik_tenaga_nuklir: 0,
      pembangkit_listrik_tenaga_air: 0,
      pembangkit_listrik_tenaga_surya: 2,
      pembangkit_listrik_tenaga_uap: 0,
      pembangkit_listrik_tenaga_gas: 1,
      pembangkit_listrik_tenaga_angin: 1
    }
  },
  {
    file: '137_prancis.ts',
    region: 'eropa',
    plants: {
      pembangkit_listrik_tenaga_nuklir: 0,
      pembangkit_listrik_tenaga_air: 0,
      pembangkit_listrik_tenaga_surya: 0,
      pembangkit_listrik_tenaga_uap: 0,
      pembangkit_listrik_tenaga_gas: 1,
      pembangkit_listrik_tenaga_angin: 1
    }
  },
  {
    file: '198_chile.ts',
    region: 'sa',
    plants: {
      pembangkit_listrik_tenaga_nuklir: 0,
      pembangkit_listrik_tenaga_air: 0,
      pembangkit_listrik_tenaga_surya: 1,
      pembangkit_listrik_tenaga_uap: 0,
      pembangkit_listrik_tenaga_gas: 1,
      pembangkit_listrik_tenaga_angin: 0
    }
  }
];

console.log(`Gap bridging with solar/wind for ${solutions.length} countries...\n`);

let fixed = 0;
let stillFailed = [];

solutions.forEach(item => {
  try {
    const profilePath = path.join(PROFILE_BASE, item.region, item.file);
    const listrikPath = path.join(LISTRIK_BASE, item.region, item.file);
    
    if (!fs.existsSync(profilePath) || !fs.existsSync(listrikPath)) {
      return;
    }
    
    const { population, name } = getCountryInfo(profilePath);
    const balance = calculateBalance(population, item.plants);
    
    if (balance >= 500 && balance <= 1000 && balance > 0) {
      const newContent = generateListrikContent(name, item.plants);
      fs.writeFileSync(listrikPath, newContent, 'utf-8');
      console.log(`✓ Fixed ${item.file}: ${Math.round(balance)}MW`);
      fixed++;
    } else {
      stillFailed.push({
        file: item.file,
        balance: Math.round(balance)
      });
      console.log(`✗ ${item.file}: ${Math.round(balance)}MW (still out of range)`);
    }
    
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
});

console.log(`\n✅ Fixed: ${fixed} / ${solutions.length}`);
console.log(`FINAL TOTAL: ${199 + fixed} / 206`);
console.log(`Success rate: ${((199 + fixed) / 206 * 100).toFixed(1)}%`);
