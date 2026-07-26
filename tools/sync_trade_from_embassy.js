const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const kedutaanDir = path.resolve(__dirname, '..', 'json', 'database_kedutaan_besar');
const meTraDir = path.resolve(__dirname, '..', 'json', 'database_mitra_perdagangan');

const excludeFiles = new Set(['index.ts', 'embassyRegistry.ts', 'tradeAgreementRegistry.ts', 'agreementsRegistry.ts', 'types.ts']);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    if (entry.isFile() && entry.name.endsWith('.ts') && !excludeFiles.has(entry.name)) return [fullPath];
    return [];
  });
}

// Fisher-Yates shuffle
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const tradeFiles = walk(meTraDir).sort();
let updatedCount = 0;
let missingEmbassyFiles = 0;

tradeFiles.forEach((tradeFilePath) => {
  const relativePath = path.relative(meTraDir, tradeFilePath);
  const embassyFilePath = path.join(kedutaanDir, relativePath);

  if (!fs.existsSync(embassyFilePath)) {
    console.warn(`[WARNING] Embassy file not found for: ${relativePath}`);
    missingEmbassyFiles++;
    return;
  }

  const embassyContent = fs.readFileSync(embassyFilePath, 'utf8');
  
  // Extract all "mitra": "CountryName" using regex
  const mitraMatches = [];
  const regex = /"mitra":\s*"([^"]+)"/g;
  let match;
  while ((match = regex.exec(embassyContent)) !== null) {
    if (match[1] && !mitraMatches.includes(match[1])) {
      mitraMatches.push(match[1]);
    }
  }

  if (mitraMatches.length === 0) {
    console.warn(`[WARNING] No mitra found in embassy file: ${relativePath}`);
    return;
  }

  // Random count between 6 and 10
  const randomCount = Math.floor(Math.random() * 5) + 6; // [6, 7, 8, 9, 10]
  const countToPick = Math.min(randomCount, mitraMatches.length);

  const selectedMitra = shuffle(mitraMatches).slice(0, countToPick);

  const fileName = path.basename(tradeFilePath, '.ts');
  const slugMatch = fileName.match(/^\d+_(.+)$/);
  const slug = slugMatch ? slugMatch[1] : fileName;
  const exportName = `${slug}Agreements`;

  const tradeItems = selectedMitra.map((mitraName, index) => {
    return `  { "no": ${index + 1}, "mitra": "${mitraName}", "type": "Perdagangan", "status": "Aktif" }`;
  });

  const fileContent = `// @ts-nocheck
export const ${exportName} = [
${tradeItems.join(',\n')}
];
`;

  fs.writeFileSync(tradeFilePath, fileContent, 'utf8');
  updatedCount++;
});

console.log(`Successfully updated ${updatedCount} trade agreement files.`);
if (missingEmbassyFiles > 0) {
  console.warn(`Missing embassy files: ${missingEmbassyFiles}`);
}

// Now run automate_trade_exports.js to update tradeAgreementRegistry.ts
const scriptPath = path.join(__dirname, 'automate_trade_exports.js');
console.log('Running automate_trade_exports.js to update registry...');
execSync(`node "${scriptPath}"`, { stdio: 'inherit' });
