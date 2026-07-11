const fs = require('fs');
const path = require('path');

const sourceRoot = path.join(process.cwd(), 'json', 'database_pajak_negara');
const targetRoot = path.join(process.cwd(), 'json', 'database_level_kabinet');
fs.mkdirSync(targetRoot, { recursive: true });

const regions = ['afrika', 'asia', 'eropa', 'na', 'oceania', 'sa'];

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

const regionalBase = {
  afrika: 4.4,
  asia: 5.2,
  eropa: 6.2,
  na: 6.7,
  oceania: 5.4,
  sa: 4.8,
};

const countryAdjustments = {
  singapura: 2.2,
  jepang: 2.1,
  korea_selatan: 1.3,
  taiwan: 1.2,
  hong_kong: 2.0,
  makau: 2.0,
  qatar: 2.0,
  arab_saudi: 1.8,
  uni_emirat_arab: 1.7,
  israel: 1.2,
  kuwait: 1.6,
  bahrain: 1.3,
  norwegia: 2.0,
  swedia: 1.8,
  swiss: 1.8,
  luxemburg: 2.1,
  irlandia: 1.5,
  belanda: 1.5,
  danmark: 1.6,
  finlandia: 1.5,
  australia: 1.4,
  selandia_baru: 1.2,
  amerika_serikat: 1.7,
  kanada: 1.4,
  bahama: 1.1,
  bermuda: 1.5,
  curacao: 1.1,
  puerto_rico: 1.0,
  brazil: 0.6,
  chile: 0.6,
  argentina: 0.5,
  uruguay: 0.6,
  kolombia: 0.2,
  peru: 0.2,
  ecuador: 0.1,
  bolivia: -0.2,
  paraguay: -0.1,
  guyana: 0.1,
  suriname: 0.2,
  venezuela: -0.8,
  nigeria: 0.2,
  ethiopia: -0.3,
  sudan: -0.8,
  somalia: -1.2,
  kenya: 0.2,
  tanzania: -0.1,
  uganda: -0.3,
  zambia: -0.4,
  malawi: -0.6,
  madagascar: -0.7,
  angola: -0.2,
  aljazair: 0.3,
  libya: 0.7,
  mesir: 0.4,
  maroko: 0.2,
  tunisia: 0.2,
  senegal: 0.1,
  ghana: 0.2,
};

function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function slugifyFileName(fileName) {
  return fileName
    .replace(/^\d+_/, '')
    .replace(/\.ts$/, '')
    .replace(/[^a-z0-9]+/gi, '_')
    .replace(/^_+|_+$/g, '');
}

function titleCaseSlug(slug) {
  return slug
    .split('_')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function calculateLevel(region, countrySlug, departmentId) {
  const base = regionalBase[region] ?? 4.5;
  const adjustment = countryAdjustments[countrySlug] ?? 0;
  const variation = ((hashString(`${region}:${countrySlug}:${departmentId}`) % 7) - 3);
  const weighted = base + adjustment + variation + (deptWeight[departmentId] ?? 1) * 0.35;
  return clamp(Math.round(weighted), 1, 10);
}

function buildContent(region, fileName, countryName) {
  const baseName = slugifyFileName(fileName);
  const varName = `${baseName}_level_kabinet`;

  const lines = [];
  lines.push('// @ts-nocheck');
  lines.push(`const ${varName} = {`);
  lines.push(`  "nama_negara": "${countryName}",`);
  lines.push('  "kementerian": {');
  for (const key of kementerian) {
    lines.push(`    "${key}": ${calculateLevel(region, baseName, key)},`);
  }
  lines.push('  },');
  lines.push('  "keamanan": {');
  for (const key of keamanan) {
    lines.push(`    "${key}": ${calculateLevel(region, baseName, key)},`);
  }
  lines.push('  },');
  lines.push('  "layanan": {');
  for (const key of layanan) {
    lines.push(`    "${key}": ${calculateLevel(region, baseName, key)},`);
  }
  lines.push('  }');
  lines.push('};');
  return lines.join('\n');
}

let generatedCount = 0;
for (const region of regions) {
  const sourceDir = path.join(sourceRoot, region);
  const targetDir = path.join(targetRoot, region);
  fs.mkdirSync(targetDir, { recursive: true });

  if (!fs.existsSync(sourceDir)) {
    continue;
  }

  const files = fs.readdirSync(sourceDir).filter((file) => file.endsWith('.ts'));
  for (const file of files) {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    const countrySlug = slugifyFileName(file);
    const countryName = titleCaseSlug(countrySlug);
    fs.writeFileSync(targetPath, buildContent(region, file, countryName));
    generatedCount += 1;
  }
}

console.log(`Generated ${generatedCount} cabinet-level files across ${regions.length} regions`);
