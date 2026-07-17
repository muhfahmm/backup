const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'json', 'semua_fitur_negara', '1_pembangunan', '1_produksi', '2_sektor_mineral_kritis');
const productionPerBuilding = 600;

const rows = [
  { country: 'Afganistan', continent: 'Asia', tax: 600, expense: 10600, className: 'miskin' },
  { country: 'Arab Saudi', continent: 'Asia', tax: 400, expense: 14100, className: 'miskin' },
  { country: 'Armenia', continent: 'Asia', tax: 660, expense: 13500, className: 'berkembang' },
  { country: 'Azerbaijan', continent: 'Asia', tax: 750, expense: 14800, className: 'berkembang' },
  { country: 'Bahrain', continent: 'Asia', tax: 150, expense: 14700, className: 'maju' },
  { country: 'Bangladesh', continent: 'Asia', tax: 785, expense: 12600, className: 'berkembang' },
  { country: 'Bhutan', continent: 'Asia', tax: 670, expense: 13100, className: 'berkembang' },
  { country: 'Brunei', continent: 'Asia', tax: 300, expense: 12900, className: 'maju' },
  { country: 'China', continent: 'Asia', tax: 900, expense: 11000, className: 'maju' },
  { country: 'Filipina', continent: 'Asia', tax: 830, expense: 12200, className: 'maju' },
  { country: 'Georgia', continent: 'Asia', tax: 580, expense: 11500, className: 'berkembang' },
  { country: 'Hong kong', continent: 'Asia', tax: 315, expense: 18300, className: 'maju' },
  { country: 'India', continent: 'Asia', tax: 935, expense: 12500, className: 'maju' },
  { country: 'Indonesia', continent: 'Asia', tax: 680, expense: 12000, className: 'berkembang' },
  { country: 'Irak', continent: 'Asia', tax: 650, expense: 13500, className: 'berkembang' },
  { country: 'Iran', continent: 'Asia', tax: 740, expense: 13700, className: 'berkembang' },
  { country: 'Israel', continent: 'Asia', tax: 980, expense: 15000, className: 'maju' },
  { country: 'Jepang', continent: 'Asia', tax: 896.2, expense: 17500, className: 'maju' },
  { country: 'Kamboja', continent: 'Asia', tax: 550, expense: 12600, className: 'berkembang' },
  { country: 'Kazakhstan', continent: 'Asia', tax: 470, expense: 13300, className: 'berkembang' },
  { country: 'Kirgizstan', continent: 'Asia', tax: 370, expense: 11500, className: 'berkembang' },
  { country: 'Korea Selatan', continent: 'Asia', tax: 850, expense: 14100, className: 'maju' },
  { country: 'Korea Utara', continent: 'Asia', tax: 1150, expense: 13000, className: 'maju' },
  { country: 'Kuwait', continent: 'Asia', tax: 190, expense: 15600, className: 'maju' },
  { country: 'Laos', continent: 'Asia', tax: 590, expense: 10600, className: 'berkembang' },
  { country: 'Lebanon', continent: 'Asia', tax: 545, expense: 13400, className: 'berkembang' },
  { country: 'Makau', continent: 'Asia', tax: 240, expense: 16100, className: 'maju' },
  { country: 'Malaysia', continent: 'Asia', tax: 615, expense: 12500, className: 'berkembang' },
  { country: 'Maldives', continent: 'Asia', tax: 140, expense: 13600, className: 'miskin' },
  { country: 'Mongolia', continent: 'Asia', tax: 350, expense: 11800, className: 'berkembang' },
  { country: 'Myanmar', continent: 'Asia', tax: 600, expense: 12500, className: 'miskin' },
  { country: 'Nepal', continent: 'Asia', tax: 730, expense: 12000, className: 'berkembang' },
  { country: 'Oman', continent: 'Asia', tax: 300, expense: 15000, className: 'maju' },
  { country: 'Pakistan', continent: 'Asia', tax: 860, expense: 11900, className: 'maju' },
  { country: 'Palestina', continent: 'Asia', tax: 660, expense: 12700, className: 'berkembang' },
  { country: 'Qatar', continent: 'Asia', tax: 150, expense: 17500, className: 'maju' },
  { country: 'Republik timor-leste', continent: 'Asia', tax: 320, expense: 10600, className: 'miskin' },
  { country: 'Singapura', continent: 'Asia', tax: 470, expense: 16700, className: 'maju' },
  { country: 'Sri lanka', continent: 'Asia', tax: 840, expense: 12300, className: 'maju' },
  { country: 'Suriah', continent: 'Asia', tax: 595, expense: 13500, className: 'berkembang' },
  { country: 'Taiwan', continent: 'Asia', tax: 710, expense: 14200, className: 'maju' },
  { country: 'Tajikistan', continent: 'Asia', tax: 630, expense: 11800, className: 'berkembang' },
  { country: 'Thailand', continent: 'Asia', tax: 670, expense: 12000, className: 'berkembang' },
  { country: 'Turkmenistan', continent: 'Asia', tax: 530, expense: 13700, className: 'berkembang' },
  { country: 'Uni emirat arab', continent: 'Asia', tax: 100, expense: 15100, className: 'maju' },
  { country: 'Uzbekistan', continent: 'Asia', tax: 580, expense: 12800, className: 'berkembang' },
  { country: 'Vietnam', continent: 'Asia', tax: 700, expense: 12400, className: 'berkembang' },
  { country: 'Yaman', continent: 'Asia', tax: 500, expense: 13400, className: 'berkembang' },
  { country: 'Yordania', continent: 'Asia', tax: 685, expense: 12300, className: 'berkembang' },
  { country: 'Afrika Selatan', continent: 'Africa', tax: 760, expense: 10700, className: 'berkembang' },
  { country: 'Aljazair', continent: 'Africa', tax: 950, expense: 10700, className: 'maju' },
  { country: 'Angola', continent: 'Africa', tax: 730, expense: 10800, className: 'berkembang' },
  { country: 'Benin', continent: 'Africa', tax: 880, expense: 12600, className: 'maju' },
  { country: 'Botswana', continent: 'Africa', tax: 680, expense: 9900, className: 'berkembang' },
  { country: 'Burkina faso', continent: 'Africa', tax: 905, expense: 9100, className: 'maju' },
  { country: 'Burundi', continent: 'Africa', tax: 960, expense: 9400, className: 'maju' },
  { country: 'Chad', continent: 'Africa', tax: 960, expense: 4300, className: 'maju' },
  { country: 'Djibouti', continent: 'Africa', tax: 730, expense: 9700, className: 'berkembang' },
  { country: 'Eritrea', continent: 'Africa', tax: 800, expense: 4900, className: 'maju' },
  { country: 'Eswatini', continent: 'Africa', tax: 790, expense: 10600, className: 'berkembang' },
  { country: 'Ethiopia', continent: 'Africa', tax: 870, expense: 8000, className: 'maju' },
  { country: 'Gabon', continent: 'Africa', tax: 1030, expense: 13100, className: 'maju' },
  { country: 'Gambia', continent: 'Africa', tax: 800, expense: 6400, className: 'maju' },
  { country: 'Ghana', continent: 'Africa', tax: 810, expense: 11400, className: 'maju' },
  { country: 'Guinea', continent: 'Africa', tax: 950, expense: 6400, className: 'maju' },
  { country: 'Guinea-bissau', continent: 'Africa', tax: 800, expense: 4800, className: 'maju' },
  { country: 'Kamerun', continent: 'Africa', tax: 927.5, expense: 9500, className: 'maju' },
  { country: 'Kenya', continent: 'Africa', tax: 845, expense: 10300, className: 'maju' },
  { country: 'Komoro', continent: 'Africa', tax: 750, expense: 13000, className: 'berkembang' },
  { country: 'Kongo', continent: 'Africa', tax: 1020, expense: 9000, className: 'maju' },
  { country: 'Lesotho', continent: 'Africa', tax: 790, expense: 7400, className: 'maju' },
  { country: 'Liberia', continent: 'Africa', tax: 695, expense: 5500, className: 'berkembang' },
  { country: 'Libya', continent: 'Africa', tax: 500, expense: 12000, className: 'berkembang' },
  { country: 'Madagaskar', continent: 'Africa', tax: 800, expense: 10700, className: 'maju' },
  { country: 'Malawi', continent: 'Africa', tax: 890, expense: 5900, className: 'maju' },
  { country: 'Mali', continent: 'Africa', tax: 930, expense: 4800, className: 'maju' },
  { country: 'Maroko', continent: 'Africa', tax: 990, expense: 12500, className: 'maju' },
  { country: 'Mauritania', continent: 'Africa', tax: 840, expense: 8900, className: 'maju' },
  { country: 'Mauritius', continent: 'Africa', tax: 710, expense: 16900, className: 'berkembang' },
  { country: 'Mesir', continent: 'Africa', tax: 815, expense: 9700, className: 'maju' },
  { country: 'Mozambik', continent: 'Africa', tax: 940, expense: 6800, className: 'maju' },
  { country: 'Namibia', continent: 'Africa', tax: 960, expense: 11600, className: 'maju' },
  { country: 'Niger', continent: 'Africa', tax: 915, expense: 4400, className: 'maju' },
  { country: 'Nigeria', continent: 'Africa', tax: 755, expense: 14300, className: 'berkembang' },
  { country: 'Pantai gading', continent: 'Africa', tax: 945, expense: 10300, className: 'maju' },
  { country: 'Republik afrika tengah', continent: 'Africa', tax: 1130, expense: 6100, className: 'maju' },
  { country: 'Republik demokratik kongo', continent: 'Africa', tax: 1030, expense: 11600, className: 'maju' },
  { country: 'Republik sudan', continent: 'Africa', tax: 840, expense: 11700, className: 'maju' },
  { country: 'Republik tanzania', continent: 'Africa', tax: 890, expense: 9400, className: 'maju' },
  { country: 'Republik uganda', continent: 'Africa', tax: 890, expense: 11300, className: 'maju' },
  { country: 'Republik zambia', continent: 'Africa', tax: 945, expense: 10200, className: 'maju' },
  { country: 'Republik zimbabwe', continent: 'Africa', tax: 907.5, expense: 11600, className: 'maju' },
  { country: 'Rwanda', continent: 'Africa', tax: 880, expense: 8300, className: 'maju' },
  { country: 'Sao tome dan principe', continent: 'Africa', tax: 770, expense: 8600, className: 'berkembang' },
  { country: 'Senegal', continent: 'Africa', tax: 930, expense: 9100, className: 'maju' },
  { country: 'Seychelles', continent: 'Africa', tax: 350, expense: 14800, className: 'berkembang' },
  { country: 'Sierra leone', continent: 'Africa', tax: 900, expense: 10800, className: 'maju' },
  { country: 'Somalia', continent: 'Africa', tax: 760, expense: 9900, className: 'berkembang' },
  { country: 'Sudan selatan', continent: 'Africa', tax: 680, expense: 9900, className: 'berkembang' },
  { country: 'Tanjung verde', continent: 'Africa', tax: 750, expense: 11300, className: 'berkembang' },
  { country: 'Albania', continent: 'Europe', tax: 630, expense: 16000, className: 'berkembang' },
  { country: 'Andorra', continent: 'Europe', tax: 385, expense: 15700, className: 'miskin' },
  { country: 'Austria', continent: 'Europe', tax: 1010, expense: 15000, className: 'maju' },
  { country: 'Belanda', continent: 'Europe', tax: 905, expense: 18900, className: 'maju' },
  { country: 'Belarus', continent: 'Europe', tax: 730, expense: 15000, className: 'berkembang' },
  { country: 'Belgia', continent: 'Europe', tax: 970, expense: 13400, className: 'maju' },
  { country: 'Bosnia dan hercegovina', continent: 'Europe', tax: 800, expense: 14600, className: 'maju' },
  { country: 'Bulgaria', continent: 'Europe', tax: 670, expense: 15300, className: 'berkembang' },
  { country: 'Ceko', continent: 'Europe', tax: 725, expense: 16400, className: 'berkembang' },
  { country: 'Denmark', continent: 'Europe', tax: 1050, expense: 14100, className: 'maju' },
  { country: 'Estonia', continent: 'Europe', tax: 820, expense: 14900, className: 'maju' },
  { country: 'Finlandia', continent: 'Europe', tax: 975.6, expense: 17400, className: 'maju' },
  { country: 'Gibraltar', continent: 'Europe', tax: 500, expense: 15800, className: 'berkembang' },
  { country: 'Hungaria', continent: 'Europe', tax: 610, expense: 14100, className: 'berkembang' },
  { country: 'Inggris', continent: 'Europe', tax: 900, expense: 14900, className: 'maju' },
  { country: 'Irlandia', continent: 'Europe', tax: 860, expense: 17300, className: 'maju' },
  { country: 'Islandia', continent: 'Europe', tax: 920, expense: 14300, className: 'maju' },
  { country: 'Italia', continent: 'Europe', tax: 900, expense: 13800, className: 'maju' },
  { country: 'Jerman', continent: 'Europe', tax: 920, expense: 16400, className: 'maju' },
  { country: 'Kepulauan faroe', continent: 'Europe', tax: 579.2, expense: 16600, className: 'berkembang' },
  { country: 'Kosovo', continent: 'Europe', tax: 530, expense: 16000, className: 'berkembang' },
  { country: 'Kroasia', continent: 'Europe', tax: 800, expense: 14900, className: 'maju' },
  { country: 'Latvia', continent: 'Europe', tax: 830, expense: 13400, className: 'maju' },
  { country: 'Liechtenstein', continent: 'Europe', tax: 402, expense: 13900, className: 'miskin' },
  { country: 'Lithuania', continent: 'Europe', tax: 730, expense: 16300, className: 'berkembang' },
  { country: 'Luksemburg', continent: 'Europe', tax: 790, expense: 15100, className: 'berkembang' },
  { country: 'Makedonia utara', continent: 'Europe', tax: 510, expense: 14400, className: 'berkembang' },
  { country: 'Malta', continent: 'Europe', tax: 880, expense: 14000, className: 'maju' },
  { country: 'Moldova', continent: 'Europe', tax: 550, expense: 13800, className: 'berkembang' },
  { country: 'Monako', continent: 'Europe', tax: 533.3, expense: 15600, className: 'berkembang' },
  { country: 'Montenegro', continent: 'Europe', tax: 590, expense: 13500, className: 'berkembang' },
  { country: 'Norwegia', continent: 'Europe', tax: 989, expense: 17500, className: 'maju' },
  { country: 'Polandia', continent: 'Europe', tax: 740, expense: 14800, className: 'berkembang' },
  { country: 'Portugal', continent: 'Europe', tax: 935, expense: 15800, className: 'maju' },
  { country: 'Prancis', continent: 'Europe', tax: 910, expense: 15900, className: 'maju' },
  { country: 'Republik rumania', continent: 'Europe', tax: 725, expense: 13600, className: 'berkembang' },
  { country: 'Republik serbia', continent: 'Europe', tax: 570, expense: 14900, className: 'berkembang' },
  { country: 'Rusia', continent: 'Europe', tax: 600, expense: 13500, className: 'berkembang' },
  { country: 'San marino', continent: 'Europe', tax: 770, expense: 15800, className: 'berkembang' },
  { country: 'Siprus', continent: 'Europe', tax: 635, expense: 15600, className: 'berkembang' },
  { country: 'Slovenia', continent: 'Europe', tax: 920, expense: 14700, className: 'maju' },
  { country: 'Slowakia', continent: 'Europe', tax: 730, expense: 13900, className: 'berkembang' },
  { country: 'Spanyol', continent: 'Europe', tax: 920, expense: 13700, className: 'maju' },
  { country: 'Swedia', continent: 'Europe', tax: 1046, expense: 17500, className: 'maju' },
  { country: 'Swiss', continent: 'Europe', tax: 669, expense: 18200, className: 'berkembang' },
  { country: 'Turki', continent: 'Europe', tax: 830, expense: 15400, className: 'maju' },
  { country: 'Ukraina', continent: 'Europe', tax: 610, expense: 16800, className: 'berkembang' },
  { country: 'Vatikan', continent: 'Europe', tax: 990, expense: 13000, className: 'maju' },
  { country: 'Yunani', continent: 'Europe', tax: 910, expense: 16800, className: 'maju' },
  { country: 'Amerika Serikat', continent: 'North America', tax: 605, expense: 18700, className: 'berkembang' },
  { country: 'Antigua dan Barbuda', continent: 'North America', tax: 450, expense: 16200, className: 'miskin' },
  { country: 'Bahama', continent: 'North America', tax: 175, expense: 16300, className: 'miskin' },
  { country: 'Barbados', continent: 'North America', tax: 800, expense: 14400, className: 'maju' },
  { country: 'Belize', continent: 'North America', tax: 675, expense: 15400, className: 'berkembang' },
  { country: 'Bermuda', continent: 'North America', tax: 210, expense: 18500, className: 'miskin' },
  { country: 'Costa rica', continent: 'North America', tax: 740, expense: 16200, className: 'berkembang' },
  { country: 'Curacao', continent: 'North America', tax: 930, expense: 18100, className: 'maju' },
  { country: 'Dominika', continent: 'North America', tax: 770, expense: 14400, className: 'berkembang' },
  { country: 'El salvador', continent: 'North America', tax: 780, expense: 16100, className: 'berkembang' },
  { country: 'Greenland', continent: 'North America', tax: 598, expense: 13000, className: 'berkembang' },
  { country: 'Grenada', continent: 'North America', tax: 775, expense: 14600, className: 'berkembang' },
  { country: 'Guatemala', continent: 'North America', tax: 790, expense: 15200, className: 'berkembang' },
  { country: 'Haiti', continent: 'North America', tax: 750, expense: 16200, className: 'berkembang' },
  { country: 'Honduras', continent: 'North America', tax: 770, expense: 15700, className: 'berkembang' },
  { country: 'Jamaika', continent: 'North America', tax: 775, expense: 14300, className: 'berkembang' },
  { country: 'Kanada', continent: 'North America', tax: 860.3, expense: 17800, className: 'maju' },
  { country: 'Kuba', continent: 'North America', tax: 1250, expense: 14700, className: 'maju' },
  { country: 'Meksiko', continent: 'North America', tax: 870, expense: 15300, className: 'maju' },
  { country: 'Nikaragua', continent: 'North America', tax: 800, expense: 16300, className: 'maju' },
  { country: 'Panama', continent: 'North America', tax: 370, expense: 14600, className: 'miskin' },
  { country: 'Puerto rico', continent: 'North America', tax: 745, expense: 18300, className: 'berkembang' },
  { country: 'Republik dominika', continent: 'North America', tax: 825, expense: 15100, className: 'maju' },
  { country: 'Saint kitts dan nevis', continent: 'North America', tax: 470, expense: 16200, className: 'miskin' },
  { country: 'Saint lucia', continent: 'North America', tax: 775, expense: 15000, className: 'berkembang' },
  { country: 'Saint vincent dan grenadine', continent: 'North America', tax: 775, expense: 14500, className: 'berkembang' },
  { country: 'Trinidad dan tobago', continent: 'North America', tax: 775, expense: 15000, className: 'berkembang' },
  { country: 'Argentina', continent: 'South America', tax: 1060, expense: 13300, className: 'maju' },
  { country: 'Bolivia', continent: 'South America', tax: 830, expense: 12200, className: 'maju' },
  { country: 'Brazil', continent: 'South America', tax: 845, expense: 12600, className: 'maju' },
  { country: 'Chile', continent: 'South America', tax: 930, expense: 12700, className: 'maju' },
  { country: 'Ekuador', continent: 'South America', tax: 820, expense: 11500, className: 'maju' },
  { country: 'Guiana prancis', continent: 'South America', tax: 910, expense: 10100, className: 'maju' },
  { country: 'Guyana', continent: 'South America', tax: 775, expense: 13700, className: 'berkembang' },
  { country: 'Kolombia', continent: 'South America', tax: 960, expense: 10900, className: 'maju' },
  { country: 'Paraguay', continent: 'South America', tax: 650, expense: 12300, className: 'berkembang' },
  { country: 'Peru', continent: 'South America', tax: 830, expense: 10900, className: 'maju' },
  { country: 'Suriname', continent: 'South America', tax: 760, expense: 12300, className: 'berkembang' },
  { country: 'Uruguay', continent: 'South America', tax: 830, expense: 11500, className: 'maju' },
  { country: 'Venezuela', continent: 'South America', tax: 920, expense: 9300, className: 'maju' },
  { country: 'Australia', continent: 'Oceania', tax: 880, expense: 15700, className: 'maju' },
  { country: 'Fiji', continent: 'Oceania', tax: 660, expense: 12700, className: 'berkembang' },
  { country: 'Guam', continent: 'Oceania', tax: 780, expense: 12700, className: 'berkembang' },
  { country: 'Kiribati', continent: 'Oceania', tax: 600, expense: 11300, className: 'berkembang' },
  { country: 'Marshall', continent: 'Oceania', tax: 750, expense: 13900, className: 'berkembang' },
  { country: 'Mikronesia', continent: 'Oceania', tax: 800, expense: 14100, className: 'maju' },
  { country: 'Nauru', continent: 'Oceania', tax: 50, expense: 13200, className: 'miskin' },
  { country: 'Palau', continent: 'Oceania', tax: 700, expense: 12700, className: 'berkembang' },
  { country: 'Papua nugini', continent: 'Oceania', tax: 870, expense: 12400, className: 'maju' },
  { country: 'Samoa', continent: 'Oceania', tax: 770, expense: 14900, className: 'berkembang' },
  { country: 'Samoa amerika', continent: 'Oceania', tax: 780, expense: 13400, className: 'berkembang' },
  { country: 'Selandia baru', continent: 'Oceania', tax: 900, expense: 15500, className: 'maju' },
  { country: 'Tahiti', continent: 'Oceania', tax: 775, expense: 12800, className: 'berkembang' },
  { country: 'Tuvalu', continent: 'Oceania', tax: 600, expense: 14100, className: 'berkembang' },
  { country: 'Tonga', continent: 'Oceania', tax: 750, expense: 12100, className: 'berkembang' },
  { country: 'Vanuatu', continent: 'Oceania', tax: 300, expense: 13400, className: 'miskin' },
  { country: 'Togo', continent: 'Lainnya', tax: 885, expense: 10200, className: 'maju' },
  { country: 'Tunisia', continent: 'Lainnya', tax: 850, expense: 11000, className: 'maju' },
];

function normalizeName(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function getRange(className) {
  if (className === 'miskin') return { min: 100, max: 500 };
  if (className === 'berkembang') return { min: 500, max: 800 };
  return { min: 800, max: 1500 };
}

function determineBuildingCount(tax, expense, className) {
  const { min, max } = getRange(className);
  for (let count = 0; count <= 5000; count += 1) {
    const net = tax + count * productionPerBuilding - expense;
    if (net >= min && net <= max) return count;
  }
  return 0;
}

function findSourceFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...findSourceFiles(full));
    else if (entry.isFile() && entry.name.endsWith('.ts')) files.push(full);
  }
  return files;
}

const files = findSourceFiles(root);
const bySlug = new Map();
for (const file of files) {
  const base = path.basename(file, '.ts');
  const slug = normalizeName(base.replace(/^\d+_/, ''));
  bySlug.set(slug, file);
}

let updated = 0;
let missing = 0;
for (const row of rows) {
  const slug = normalizeName(row.country);
  const filePath = bySlug.get(slug);
  if (!filePath) {
    missing += 1;
    console.log(`Missing file for ${row.country}`);
    continue;
  }

  const buildingCount = determineBuildingCount(row.tax, row.expense, row.className);
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/(\bemas\s*:\s*)(\d+)/);
  if (!match) continue;

  const newContent = content.replace(match[0], `${match[1]}${buildingCount}`);
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    updated += 1;
  }
}

console.log(`Updated ${updated} files. Missing ${missing} files.`);
