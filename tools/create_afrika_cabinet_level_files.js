const fs = require('fs');
const path = require('path');

const root = path.join(process.cwd(), 'json', 'database_level_kabinet', 'afrika');
fs.mkdirSync(root, { recursive: true });

const countries = [
  ['1_afrika_selatan', 'Afrika Selatan'],
  ['2_aljazair', 'Aljazair'],
  ['3_angola', 'Angola'],
  ['4_benin', 'Benin'],
  ['5_botswana', 'Botswana'],
  ['6_burkina_faso', 'Burkina Faso'],
  ['7_burundi', 'Burundi'],
  ['8_cabo_verde', 'Cabo Verde'],
  ['9_chad', 'Chad'],
  ['10_komori', 'Komori'],
  ['11_congo', 'Congo'],
  ['12_demokratik_kongo', 'Demokratik Kongo'],
  ['13_pantai_gading', 'Pantai Gading'],
  ['14_djibouti', 'Djibouti'],
  ['15_mesir', 'Mesir'],
  ['16_eritrea', 'Eritrea'],
  ['17_eswatini', 'Eswatini'],
  ['18_ethiopia', 'Ethiopia'],
  ['19_gabon', 'Gabon'],
  ['20_gambia', 'Gambia'],
  ['21_ghana', 'Ghana'],
  ['22_guinea', 'Guinea'],
  ['23_guinea_bissau', 'Guinea Bissau'],
  ['24_kenya', 'Kenya'],
  ['25_lesotho', 'Lesotho'],
  ['26_liberia', 'Liberia'],
  ['27_libya', 'Libya'],
  ['28_madagascar', 'Madagascar'],
  ['29_malawi', 'Malawi'],
  ['30_mali', 'Mali'],
  ['31_maroko', 'Maroko'],
  ['32_mauritania', 'Mauritania'],
  ['33_mauritius', 'Mauritius'],
  ['34_mozambik', 'Mozambik'],
  ['35_namibia', 'Namibia'],
  ['36_niger', 'Niger'],
  ['37_nigeria', 'Nigeria'],
  ['38_republik_afrika_tengah', 'Republik Afrika Tengah'],
  ['39_senegal', 'Senegal'],
  ['40_sierra_leone', 'Sierra Leone'],
  ['41_somalia', 'Somalia'],
  ['42_sudan', 'Sudan'],
  ['43_sudan_selatan', 'Sudan Selatan'],
  ['44_tanzania', 'Tanzania'],
  ['45_togo', 'Togo'],
  ['46_tunisia', 'Tunisia'],
  ['47_uganda', 'Uganda'],
  ['48_zambia', 'Zambia'],
  ['49_zimbabwe', 'Zimbabwe'],
  ['50_tanjung_verde', 'Tanjung Verde'],
  ['51_sao_tome_dan_principe', 'Sao Tome dan Principe'],
  ['52_seychelles', 'Seychelles'],
  ['53_rwanda', 'Rwanda'],
];

const kementerian = [
  'infrastruktur',
  'pendidikan',
  'sains',
  'kesehatan',
  'olahraga',
  'kehakiman',
  'luar-negeri',
  'kebudayaan',
  'pariwisata',
  'lingkungan',
  'perumahan',
  'pembangunan',
  'perdagangan',
  'keuangan',
];

const keamanan = [
  'pertahanan',
  'dinas-keamanan',
  'polisi',
  'garda-nasional',
  'komandan-angkatan-darat',
  'komandan-armada',
];

const layanan = ['layanan-darurat', 'bank-sentral'];

const wealthScoreByCountry = {
  afrika_selatan: 8,
  aljazair: 7,
  angola: 6,
  benin: 3,
  botswana: 7,
  burkina_faso: 3,
  burundi: 2,
  cabo_verde: 5,
  chad: 2,
  komori: 4,
  congo: 4,
  demokratik_kongo: 3,
  pantai_gading: 5,
  djibouti: 4,
  mesir: 7,
  eritrea: 2,
  eswatini: 5,
  ethiopia: 4,
  gabon: 6,
  gambia: 3,
  ghana: 5,
  guinea: 3,
  guinea_bissau: 2,
  kenya: 5,
  lesotho: 4,
  liberia: 3,
  libya: 6,
  madagascar: 3,
  malawi: 3,
  mali: 3,
  maroko: 6,
  mauritania: 4,
  mauritius: 8,
  mozambik: 3,
  namibia: 6,
  niger: 2,
  nigeria: 7,
  republik_afrika_tengah: 3,
  senegal: 5,
  sierra_leone: 3,
  somalia: 2,
  sudan: 3,
  sudan_selatan: 2,
  tanzania: 4,
  togo: 3,
  tunisia: 6,
  uganda: 4,
  zambia: 4,
  zimbabwe: 4,
  tanjung_verde: 5,
  sao_tome_dan_principe: 4,
  seychelles: 7,
  rwanda: 4,
};

const deptWeight = {
  'infrastruktur': 1.2,
  'pendidikan': 1.05,
  'sains': 0.95,
  'kesehatan': 1.1,
  'olahraga': 0.75,
  'kehakiman': 0.9,
  'luar-negeri': 0.85,
  'kebudayaan': 0.72,
  'pariwisata': 0.8,
  'lingkungan': 0.9,
  'perumahan': 0.9,
  'pembangunan': 1.0,
  'perdagangan': 1.05,
  'keuangan': 1.1,
  'pertahanan': 0.95,
  'dinas-keamanan': 0.9,
  'polisi': 0.85,
  'garda-nasional': 0.88,
  'komandan-angkatan-darat': 0.92,
  'komandan-armada': 0.9,
  'layanan-darurat': 0.8,
  'bank-sentral': 0.95,
};

function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function calculateLevel(countrySlug, departmentId) {
  const base = wealthScoreByCountry[countrySlug] ?? 4;
  const variation = (hashString(`${countrySlug}:${departmentId}`) % 5) - 2;
  const weighted = base * (deptWeight[departmentId] ?? 1) + variation;
  return Math.max(1, Math.min(10, Math.round(weighted)));
}

function buildContent(fileName, countryName) {
  const baseName = fileName.replace(/^\d+_/, '').replace(/[^a-z0-9]+/gi, '_').replace(/^_+|_+$/g, '');
  const varName = `${baseName}_level_kabinet`;
  const countrySlug = baseName;

  const lines = [];
  lines.push('// @ts-nocheck');
  lines.push(`const ${varName} = {`);
  lines.push(`  "nama_negara": "${countryName}",`);
  lines.push('  "kementerian": {');
  for (const key of kementerian) {
    lines.push(`    "${key}": ${calculateLevel(countrySlug, key)},`);
  }
  lines.push('  },');
  lines.push('  "keamanan": {');
  for (const key of keamanan) {
    lines.push(`    "${key}": ${calculateLevel(countrySlug, key)},`);
  }
  lines.push('  },');
  lines.push('  "layanan": {');
  for (const key of layanan) {
    lines.push(`    "${key}": ${calculateLevel(countrySlug, key)},`);
  }
  lines.push('  }');
  lines.push('};');
  return lines.join('\n');
}

for (const [fileName, countryName] of countries) {
  const filePath = path.join(root, `${fileName}.ts`);
  fs.writeFileSync(filePath, buildContent(fileName, countryName));
}

console.log(`Created ${countries.length} files in ${root}`);
