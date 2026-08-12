const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const productionBaseDir = path.join(rootDir, 'json/semua_fitur_negara/1_pembangunan/1_produksi');
const geographyFile = path.join(rootDir, 'apps/src/app/logic/fisheries_production_logic/countryGeographyDatabase.ts');

const sectors = [
  '4_sektor_peternakan',
  '5_sektor_agrikultur',
  '6_sektor_perikanan',
  '7_sektor_olahan_pangan',
];

function normalizeCountryLabel(value) {
  return value
    .toLowerCase()
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseLandlockedSet(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = [...content.matchAll(/'([a-zA-Z ]+)'\s*:\s*\{\s*hasSeaAccess:\s*false/gm)];
  return new Set(matches.map(([, key]) => normalizeCountryLabel(key)));
}

function extractNumbers(content) {
  return [...content.matchAll(/:\s*(\d+(?:\.\d+)?)/g)].map((match) => Number(match[1]));
}

function getCountrySlugFromFile(fileName) {
  const slug = fileName
    .replace(/\.ts$/, '')
    .replace(/^\d+_/, '')
    .replace(/_(peternakan|agrikultur|perikanan|olahan_pangan)$/, '');

  return normalizeCountryLabel(slug);
}

function collectCountryFiles(dirPath) {
  const files = [];

  function walk(currentDir) {
    for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.ts') && !entry.name.startsWith('db_')) {
        files.push(fullPath);
      }
    }
  }

  walk(dirPath);
  return files.sort();
}

function getMedian(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

function remapValue(value, minValue, maxValue, mode) {
  if (maxValue === minValue) {
    return mode === 'poor' ? 0 : 100;
  }

  const ratio = (value - minValue) / (maxValue - minValue);
  const scaled = ratio * 100;
  const mappedValue = mode === 'poor' ? Math.round(scaled) : 100 + Math.round(scaled);
  return Math.max(0, Math.min(200, mappedValue));
}

function updateFile(filePath, sectorName, landlockedSet, mode) {
  const countrySlug = getCountrySlugFromFile(path.basename(filePath));
  const isLandlocked = landlockedSet.has(countrySlug);
  let content = fs.readFileSync(filePath, 'utf8');

  if (sectorName === '6_sektor_perikanan' && isLandlocked) {
    const zeroedContent = content.replace(/(\s*:\s*)(\d+(?:\.\d+)?)(\s*,?\s*$)/gm, (match, prefix, oldNumber, suffix) => `${prefix}0${suffix}`);
    if (zeroedContent !== content) {
      fs.writeFileSync(filePath, zeroedContent, 'utf8');
      return { changed: true, reason: 'landlocked fisheries preserved at 0' };
    }

    return { changed: false, reason: 'landlocked fisheries preserved at 0' };
  }

  const numbers = extractNumbers(content);
  if (!numbers.length) {
    return { changed: false, reason: 'no numeric values' };
  }

  const minValue = Math.min(...numbers);
  const maxValue = Math.max(...numbers);
  const transformed = content.replace(/(\s*:\s*)(\d+(?:\.\d+)?)(\s*,?\s*$)/gm, (match, prefix, oldNumber, suffix) => {
    const nextValue = remapValue(Number(oldNumber), minValue, maxValue, mode);
    return `${prefix}${nextValue}${suffix}`;
  });

  if (transformed !== content) {
    fs.writeFileSync(filePath, transformed, 'utf8');
    return { changed: true, reason: `scaled to ${mode}` };
  }

  return { changed: false, reason: 'no transform drift' };
}

function main() {
  const landlockedSet = parseLandlockedSet(geographyFile);
  let processedFiles = 0;
  let changedFiles = 0;

  for (const sectorName of sectors) {
    const sectorDir = path.join(productionBaseDir, sectorName);
    const files = collectCountryFiles(sectorDir);
    const fileStats = files.map((filePath) => {
      const content = fs.readFileSync(filePath, 'utf8');
      const numbers = extractNumbers(content);
      return { filePath, total: numbers.reduce((sum, value) => sum + value, 0), numbers };
    }).filter((item) => item.numbers.length > 0);

    const thresholds = getMedian(fileStats.map((item) => item.total));

    for (const item of fileStats) {
      processedFiles += 1;
      const mode = item.total <= thresholds ? 'poor' : 'rich';
      const result = updateFile(item.filePath, sectorName, landlockedSet, mode);
      if (result.changed) {
        changedFiles += 1;
      }
    }
  }

  console.log(`Processed files: ${processedFiles}`);
  console.log(`Modified files: ${changedFiles}`);
}

main();
