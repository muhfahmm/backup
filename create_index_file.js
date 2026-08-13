const fs = require('fs');
const path = require('path');

// All countries data with their regions and IDs
const allCountries = [
  // Afrika (1-53)
  { id: 1, name: 'afrika_selatan', region: 'afrika' },
  { id: 2, name: 'aljazair', region: 'afrika' },
  { id: 3, name: 'angola', region: 'afrika' },
  { id: 4, name: 'benin', region: 'afrika' },
  { id: 5, name: 'botswana', region: 'afrika' },
  { id: 6, name: 'burkina_faso', region: 'afrika' },
  { id: 7, name: 'burundi', region: 'afrika' },
  { id: 8, name: 'chad', region: 'afrika' },
  { id: 9, name: 'djibouti', region: 'afrika' },
  { id: 10, name: 'eritrea', region: 'afrika' },
  { id: 11, name: 'eswatini', region: 'afrika' },
  { id: 12, name: 'ethiopia', region: 'afrika' },
  { id: 13, name: 'gabon', region: 'afrika' },
  { id: 14, name: 'gambia', region: 'afrika' },
  { id: 15, name: 'ghana', region: 'afrika' },
  { id: 16, name: 'guinea', region: 'afrika' },
  { id: 17, name: 'guinea_bissau', region: 'afrika' },
  { id: 18, name: 'kamerun', region: 'afrika' },
  { id: 19, name: 'kenya', region: 'afrika' },
  { id: 20, name: 'komoro', region: 'afrika' },
  { id: 21, name: 'kongo', region: 'afrika' },
  { id: 22, name: 'lesotho', region: 'afrika' },
  { id: 23, name: 'liberia', region: 'afrika' },
  { id: 24, name: 'libya', region: 'afrika' },
  { id: 25, name: 'madagaskar', region: 'afrika' },
  { id: 26, name: 'malawi', region: 'afrika' },
  { id: 27, name: 'mali', region: 'afrika' },
  { id: 28, name: 'maroko', region: 'afrika' },
  { id: 29, name: 'mauritania', region: 'afrika' },
  { id: 30, name: 'mauritius', region: 'afrika' },
  { id: 31, name: 'mesir', region: 'afrika' },
  { id: 32, name: 'mozambik', region: 'afrika' },
  { id: 33, name: 'namibia', region: 'afrika' },
  { id: 34, name: 'niger', region: 'afrika' },
  { id: 35, name: 'nigeria', region: 'afrika' },
  { id: 36, name: 'pantai_gading', region: 'afrika' },
  { id: 37, name: 'republik_afrika_tengah', region: 'afrika' },
  { id: 38, name: 'republik_demokratik_kongo', region: 'afrika' },
  { id: 39, name: 'republik_sudan', region: 'afrika' },
  { id: 40, name: 'republik_tanzania', region: 'afrika' },
  { id: 41, name: 'republik_uganda', region: 'afrika' },
  { id: 42, name: 'republik_zambia', region: 'afrika' },
  { id: 43, name: 'republik_zimbabwe', region: 'afrika' },
  { id: 44, name: 'rwanda', region: 'afrika' },
  { id: 45, name: 'sao_tome_dan_principe', region: 'afrika' },
  { id: 46, name: 'senegal', region: 'afrika' },
  { id: 47, name: 'seychelles', region: 'afrika' },
  { id: 48, name: 'sierra_leone', region: 'afrika' },
  { id: 49, name: 'somalia', region: 'afrika' },
  { id: 50, name: 'sudan_selatan', region: 'afrika' },
  { id: 51, name: 'tanjung_verde', region: 'afrika' },
  { id: 52, name: 'togo', region: 'afrika' },
  { id: 53, name: 'tunisia', region: 'afrika' },
  // Asia (54-102)
  { id: 54, name: 'afganistan', region: 'asia' },
  { id: 55, name: 'arab_saudi', region: 'asia' },
  { id: 56, name: 'armenia', region: 'asia' },
  { id: 57, name: 'azerbaijan', region: 'asia' },
  { id: 58, name: 'bahrain', region: 'asia' },
  { id: 59, name: 'bangladesh', region: 'asia' },
  { id: 60, name: 'bhutan', region: 'asia' },
  { id: 61, name: 'brunei', region: 'asia' },
  { id: 62, name: 'china', region: 'asia' },
  { id: 63, name: 'filipina', region: 'asia' },
  { id: 64, name: 'georgia', region: 'asia' },
  { id: 65, name: 'hong_kong', region: 'asia' },
  { id: 66, name: 'india', region: 'asia' },
  { id: 67, name: 'indonesia', region: 'asia' },
  { id: 68, name: 'irak', region: 'asia' },
  { id: 69, name: 'iran', region: 'asia' },
  { id: 70, name: 'israel', region: 'asia' },
  { id: 71, name: 'jepang', region: 'asia' },
  { id: 72, name: 'kamboja', region: 'asia' },
  { id: 73, name: 'kazakhstan', region: 'asia' },
  { id: 74, name: 'kirgizstan', region: 'asia' },
  { id: 75, name: 'korea_selatan', region: 'asia' },
  { id: 76, name: 'korea_utara', region: 'asia' },
  { id: 77, name: 'kuwait', region: 'asia' },
  { id: 78, name: 'laos', region: 'asia' },
  { id: 79, name: 'lebanon', region: 'asia' },
  { id: 80, name: 'makau', region: 'asia' },
  { id: 81, name: 'malaysia', region: 'asia' },
  { id: 82, name: 'maldives', region: 'asia' },
  { id: 83, name: 'mongolia', region: 'asia' },
  { id: 84, name: 'myanmar', region: 'asia' },
  { id: 85, name: 'nepal', region: 'asia' },
  { id: 86, name: 'oman', region: 'asia' },
  { id: 87, name: 'pakistan', region: 'asia' },
  { id: 88, name: 'palestina', region: 'asia' },
  { id: 89, name: 'qatar', region: 'asia' },
  { id: 90, name: 'republik_timor_leste', region: 'asia' },
  { id: 91, name: 'singapura', region: 'asia' },
  { id: 92, name: 'sri_lanka', region: 'asia' },
  { id: 93, name: 'suriah', region: 'asia' },
  { id: 94, name: 'taiwan', region: 'asia' },
  { id: 95, name: 'tajikistan', region: 'asia' },
  { id: 96, name: 'thailand', region: 'asia' },
  { id: 97, name: 'turkmenistan', region: 'asia' },
  { id: 98, name: 'uni_emirat_arab', region: 'asia' },
  { id: 99, name: 'uzbekistan', region: 'asia' },
  { id: 100, name: 'vietnam', region: 'asia' },
  { id: 101, name: 'yaman', region: 'asia' },
  { id: 102, name: 'yordania', region: 'asia' },
  // Eropa (103-151)
  { id: 103, name: 'albania', region: 'eropa' },
  { id: 104, name: 'andorra', region: 'eropa' },
  { id: 105, name: 'austria', region: 'eropa' },
  { id: 106, name: 'belanda', region: 'eropa' },
  { id: 107, name: 'belarus', region: 'eropa' },
  { id: 108, name: 'belgia', region: 'eropa' },
  { id: 109, name: 'bosnia_dan_hercegovina', region: 'eropa' },
  { id: 110, name: 'bulgaria', region: 'eropa' },
  { id: 111, name: 'ceko', region: 'eropa' },
  { id: 112, name: 'denmark', region: 'eropa' },
  { id: 113, name: 'estonia', region: 'eropa' },
  { id: 114, name: 'finlandia', region: 'eropa' },
  { id: 115, name: 'gibraltar', region: 'eropa' },
  { id: 116, name: 'hungaria', region: 'eropa' },
  { id: 117, name: 'inggris', region: 'eropa' },
  { id: 118, name: 'irlandia', region: 'eropa' },
  { id: 119, name: 'islandia', region: 'eropa' },
  { id: 120, name: 'italia', region: 'eropa' },
  { id: 121, name: 'jerman', region: 'eropa' },
  { id: 122, name: 'kepulauan_faroe', region: 'eropa' },
  { id: 123, name: 'kosovo', region: 'eropa' },
  { id: 124, name: 'kroasia', region: 'eropa' },
  { id: 125, name: 'latvia', region: 'eropa' },
  { id: 126, name: 'liechtenstein', region: 'eropa' },
  { id: 127, name: 'lithuania', region: 'eropa' },
  { id: 128, name: 'luksemburg', region: 'eropa' },
  { id: 129, name: 'makedonia_utara', region: 'eropa' },
  { id: 130, name: 'malta', region: 'eropa' },
  { id: 131, name: 'moldova', region: 'eropa' },
  { id: 132, name: 'monako', region: 'eropa' },
  { id: 133, name: 'montenegro', region: 'eropa' },
  { id: 134, name: 'norwegia', region: 'eropa' },
  { id: 135, name: 'polandia', region: 'eropa' },
  { id: 136, name: 'portugal', region: 'eropa' },
  { id: 137, name: 'prancis', region: 'eropa' },
  { id: 138, name: 'republik_rumania', region: 'eropa' },
  { id: 139, name: 'republik_serbia', region: 'eropa' },
  { id: 140, name: 'rusia', region: 'eropa' },
  { id: 141, name: 'san_marino', region: 'eropa' },
  { id: 142, name: 'siprus', region: 'eropa' },
  { id: 143, name: 'slovenia', region: 'eropa' },
  { id: 144, name: 'slowakia', region: 'eropa' },
  { id: 145, name: 'spanyol', region: 'eropa' },
  { id: 146, name: 'swedia', region: 'eropa' },
  { id: 147, name: 'swiss', region: 'eropa' },
  { id: 148, name: 'turki', region: 'eropa' },
  { id: 149, name: 'ukraina', region: 'eropa' },
  { id: 150, name: 'vatikan', region: 'eropa' },
  { id: 151, name: 'yunani', region: 'eropa' },
  // NA (152-178)
  { id: 152, name: 'amerika_serikat', region: 'na' },
  { id: 153, name: 'antigua_dan_barbuda', region: 'na' },
  { id: 154, name: 'bahama', region: 'na' },
  { id: 155, name: 'barbados', region: 'na' },
  { id: 156, name: 'belize', region: 'na' },
  { id: 157, name: 'bermuda', region: 'na' },
  { id: 158, name: 'costa_rica', region: 'na' },
  { id: 159, name: 'curacao', region: 'na' },
  { id: 160, name: 'dominika', region: 'na' },
  { id: 161, name: 'el_salvador', region: 'na' },
  { id: 162, name: 'greenland', region: 'na' },
  { id: 163, name: 'grenada', region: 'na' },
  { id: 164, name: 'guatemala', region: 'na' },
  { id: 165, name: 'haiti', region: 'na' },
  { id: 166, name: 'honduras', region: 'na' },
  { id: 167, name: 'jamaika', region: 'na' },
  { id: 168, name: 'kanada', region: 'na' },
  { id: 169, name: 'kuba', region: 'na' },
  { id: 170, name: 'meksiko', region: 'na' },
  { id: 171, name: 'nikaragua', region: 'na' },
  { id: 172, name: 'panama', region: 'na' },
  { id: 173, name: 'puerto_rico', region: 'na' },
  { id: 174, name: 'republik_dominika', region: 'na' },
  { id: 175, name: 'saint_kitts_dan_nevis', region: 'na' },
  { id: 176, name: 'saint_lucia', region: 'na' },
  { id: 177, name: 'saint_vincent_dan_grenadine', region: 'na' },
  { id: 178, name: 'trinidad_dan_tobago', region: 'na' },
  // Oceania (179-194)
  { id: 179, name: 'australia', region: 'oceania' },
  { id: 180, name: 'fiji', region: 'oceania' },
  { id: 181, name: 'guam', region: 'oceania' },
  { id: 182, name: 'kiribati', region: 'oceania' },
  { id: 183, name: 'marshall', region: 'oceania' },
  { id: 184, name: 'mikronesia', region: 'oceania' },
  { id: 185, name: 'nauru', region: 'oceania' },
  { id: 186, name: 'palau', region: 'oceania' },
  { id: 187, name: 'papua_nugini', region: 'oceania' },
  { id: 188, name: 'samoa', region: 'oceania' },
  { id: 189, name: 'samoa_amerika', region: 'oceania' },
  { id: 190, name: 'selandia_baru', region: 'oceania' },
  { id: 191, name: 'tahiti', region: 'oceania' },
  { id: 192, name: 'tonga', region: 'oceania' },
  { id: 193, name: 'tuvalu', region: 'oceania' },
  { id: 194, name: 'vanuatu', region: 'oceania' },
  // SA (195-207)
  { id: 195, name: 'argentina', region: 'sa' },
  { id: 196, name: 'bolivia', region: 'sa' },
  { id: 197, name: 'brazil', region: 'sa' },
  { id: 198, name: 'chile', region: 'sa' },
  { id: 199, name: 'ekuador', region: 'sa' },
  { id: 200, name: 'guiana_prancis', region: 'sa' },
  { id: 201, name: 'guyana', region: 'sa' },
  { id: 202, name: 'kolombia', region: 'sa' },
  { id: 203, name: 'paraguay', region: 'sa' },
  { id: 204, name: 'peru', region: 'sa' },
  { id: 205, name: 'suriname', region: 'sa' },
  { id: 206, name: 'uruguay', region: 'sa' },
  { id: 207, name: 'venezuela', region: 'sa' },
];

let indexContent = `// Database Index Kepuasan - Master Index
// Auto-generated file that imports all 207 country kepuasan data

`;

// Generate imports
indexContent += '// Import all countries\n';
allCountries.forEach(country => {
  const varName = `c${country.id}`;
  const importName = `${country.name}_kepuasan`;
  indexContent += `import { ${importName} as ${varName} } from './${country.region}/${country.id}_${country.name}';\n`;
});

// Generate export array
indexContent += '\n// Export all countries as array\n';
indexContent += 'export const ALL_COUNTRIES_KEPUASAN = [\n';
for (let i = 1; i <= 207; i++) {
  indexContent += `  c${i},\n`;
}
indexContent += '];\n';

// Generate export as Record
indexContent += `
// Export as Record keyed by country name for easy lookup
export const COUNTRY_KEPUASAN_BY_NAME = ALL_COUNTRIES_KEPUASAN.reduce(
  (acc, country) => {
    acc[country.name] = country;
    return acc;
  },
  {} as Record<string, any>
);

// Export as Record keyed by ID
export const COUNTRY_KEPUASAN_BY_ID = ALL_COUNTRIES_KEPUASAN.reduce(
  (acc, country) => {
    acc[country.id] = country;
    return acc;
  },
  {} as Record<number, any>
);

// Re-export individual countries for direct imports
export {
  c1 as c1, c2 as c2, c3 as c3, c4 as c4, c5 as c5, c6 as c6, c7 as c7, c8 as c8, c9 as c9, c10 as c10,
  c11, c12, c13, c14, c15, c16, c17, c18, c19, c20,
  c21, c22, c23, c24, c25, c26, c27, c28, c29, c30,
  c31, c32, c33, c34, c35, c36, c37, c38, c39, c40,
  c41, c42, c43, c44, c45, c46, c47, c48, c49, c50,
  c51, c52, c53, c54, c55, c56, c57, c58, c59, c60,
  c61, c62, c63, c64, c65, c66, c67, c68, c69, c70,
  c71, c72, c73, c74, c75, c76, c77, c78, c79, c80,
  c81, c82, c83, c84, c85, c86, c87, c88, c89, c90,
  c91, c92, c93, c94, c95, c96, c97, c98, c99, c100,
  c101, c102, c103, c104, c105, c106, c107, c108, c109, c110,
  c111, c112, c113, c114, c115, c116, c117, c118, c119, c120,
  c121, c122, c123, c124, c125, c126, c127, c128, c129, c130,
  c131, c132, c133, c134, c135, c136, c137, c138, c139, c140,
  c141, c142, c143, c144, c145, c146, c147, c148, c149, c150,
  c151, c152, c153, c154, c155, c156, c157, c158, c159, c160,
  c161, c162, c163, c164, c165, c166, c167, c168, c169, c170,
  c171, c172, c173, c174, c175, c176, c177, c178, c179, c180,
  c181, c182, c183, c184, c185, c186, c187, c188, c189, c190,
  c191, c192, c193, c194, c195, c196, c197, c198, c199, c200,
  c201, c202, c203, c204, c205, c206, c207,
};
`;

const indexPath = path.join(process.cwd(), 'json', 'database_index_kepuasan', 'index.ts');
fs.writeFileSync(indexPath, indexContent, 'utf-8');

console.log(`✅ Created index.ts with ${allCountries.length} country imports`);
console.log(`Path: ${indexPath}`);
