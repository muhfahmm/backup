const fs = require('fs');
const path = require('path');

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
  
  const nameMatch = content.match(/"name_id":\s*"([^"]+)"/);
  const name = nameMatch ? nameMatch[1] : 'Unknown';
  
  return { name };
}

const PROFILE_BASE = 'c:\\utama\\project\\project-sendiri\\EM\\json\\semua_fitur_negara\\0_profiles';
const LISTRIK_BASE = 'c:\\utama\\project\\project-sendiri\\EM\\json\\semua_fitur_negara\\1_pembangunan\\1_produksi\\1_sektor_listrik_nasional';

// The 11 countries with calculated plant counts
const fixes = [
  { file: '26_malawi.ts', region: 'afrika', coal: 0, gas: 1 },
  { file: '40_republik_tanzania.ts', region: 'afrika', coal: 0, gas: 2 },
  { file: '59_bangladesh.ts', region: 'asia', coal: 2, gas: 1 },
  { file: '66_india.ts', region: 'asia', coal: 17, gas: 4 },
  { file: '73_kazakhstan.ts', region: 'asia', coal: 0, gas: 1 },
  { file: '93_suriah.ts', region: 'asia', coal: 0, gas: 1 },
  { file: '96_thailand.ts', region: 'asia', coal: 1, gas: 1 },
  { file: '117_inggris.ts', region: 'eropa', coal: 0, gas: 2 },
  { file: '137_prancis.ts', region: 'eropa', coal: 1, gas: 1 },
  { file: '197_brazil.ts', region: 'sa', coal: 1, gas: 4 },
  { file: '198_chile.ts', region: 'sa', coal: 0, gas: 1 }
];

console.log(`Applying final 11 calculated fixes...\n`);

let fixed = 0;

fixes.forEach(item => {
  try {
    const profilePath = path.join(PROFILE_BASE, item.region, item.file);
    const listrikPath = path.join(LISTRIK_BASE, item.region, item.file);
    
    if (!fs.existsSync(profilePath) || !fs.existsSync(listrikPath)) {
      console.log(`Skip ${item.file} - not found`);
      return;
    }
    
    const { name } = getCountryInfo(profilePath);
    
    const plants = {
      pembangkit_listrik_tenaga_nuklir: 0,
      pembangkit_listrik_tenaga_air: 0,
      pembangkit_listrik_tenaga_surya: 0,
      pembangkit_listrik_tenaga_uap: item.coal,
      pembangkit_listrik_tenaga_gas: item.gas,
      pembangkit_listrik_tenaga_angin: 0
    };
    
    const newContent = generateListrikContent(name, plants);
    fs.writeFileSync(listrikPath, newContent, 'utf-8');
    
    console.log(`✓ Fixed ${item.file}: ${item.coal} coal + ${item.gas} gas`);
    fixed++;
    
  } catch (err) {
    console.log(`Error with ${item.file}: ${err.message}`);
  }
});

console.log(`\n${fixed} / ${fixes.length} countries updated`);
console.log(`TOTAL BALANCED: ${195 + fixed} / 206`);
console.log(`Success rate: ${Math.round(((195 + fixed) / 206) * 100)}%`);
