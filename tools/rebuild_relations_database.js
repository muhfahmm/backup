const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const embassyDir = path.resolve(__dirname, '..', 'json', 'database_kedutaan_besar');
const relationsDir = path.resolve(__dirname, '..', 'json', 'database_hubungan_antar_negara');

const regions = ['afrika', 'asia', 'eropa', 'na', 'oceania', 'sa'];

function normalizeKey(str) {
  return String(str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

const customRelationsMap = new Map();

function scanExistingRelations(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanExistingRelations(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.ts') && entry.name !== 'index.ts' && entry.name !== 'relationsRegistry.ts') {
      const content = fs.readFileSync(fullPath, 'utf8');
      const fileName = path.basename(entry.name, '.ts');
      const matchSlug = fileName.match(/^\d+_(.+)$/);
      const fileSlug = normalizeKey(matchSlug ? matchSlug[1] : fileName);

      const regex = /name:\s*"([^"]+)",\s*relation:\s*(\d+)/g;
      let m;
      while ((m = regex.exec(content)) !== null) {
        const targetSlug = normalizeKey(m[1]);
        const relVal = Number(m[2]);
        if (relVal !== 50 || !customRelationsMap.has(`${fileSlug}->${targetSlug}`)) {
          customRelationsMap.set(`${fileSlug}->${targetSlug}`, relVal);
        }
      }
    }
  }
}

scanExistingRelations(relationsDir);
console.log(`Saved ${customRelationsMap.size} relation entries from existing database.`);

const masterCountryList = [];

regions.forEach((region) => {
  const regDir = path.join(embassyDir, region);
  if (!fs.existsSync(regDir)) return;

  const files = fs.readdirSync(regDir).filter(f => f.endsWith('.ts') && f !== 'index.ts').sort((a, b) => {
    const numA = parseInt(a.match(/^(\d+)_/)?.[1] || '0', 10);
    const numB = parseInt(b.match(/^(\d+)_/)?.[1] || '0', 10);
    return numA - numB;
  });

  files.forEach((fileName) => {
    const match = fileName.match(/^(\d+)_(.+)\.ts$/);
    if (match) {
      const num = parseInt(match[1], 10);
      const rawSlug = match[2];
      const countryName = rawSlug.replace(/_/g, ' ');
      masterCountryList.push({
        id: num,
        slug: rawSlug,
        normSlug: normalizeKey(rawSlug),
        countryName: countryName,
        region: region,
        fileName: fileName
      });
    }
  });
});

console.log(`Master country list built with ${masterCountryList.length} countries.`);

regions.forEach((region) => {
  const targetRegDir = path.join(relationsDir, region);
  if (!fs.existsSync(targetRegDir)) {
    fs.mkdirSync(targetRegDir, { recursive: true });
  } else {
    const existingFiles = fs.readdirSync(targetRegDir);
    existingFiles.forEach(f => {
      if (f.endsWith('.ts')) {
        fs.unlinkSync(path.join(targetRegDir, f));
      }
    });
  }
});

let generatedCount = 0;

masterCountryList.forEach((countryA) => {
  const exportName = `${countryA.slug}_relations`;

  const relationItems = masterCountryList.map((countryB, idx) => {
    let relValue = 50;
    if (countryA.normSlug === countryB.normSlug) {
      relValue = 100;
    } else {
      const pair1 = customRelationsMap.get(`${countryA.normSlug}->${countryB.normSlug}`);
      const pair2 = customRelationsMap.get(`${countryB.normSlug}->${countryA.normSlug}`);
      if (pair1 !== undefined) {
        relValue = pair1;
      } else if (pair2 !== undefined) {
        relValue = pair2;
      }
    }
    return `  { id: ${idx + 1}, name: "${countryB.countryName.toLowerCase()}", relation: ${relValue} }`;
  });

  const fileContent = `// @ts-nocheck
export const ${exportName} = [
${relationItems.join(',\n')}
];
`;

  const targetFilePath = path.join(relationsDir, countryA.region, countryA.fileName);
  fs.writeFileSync(targetFilePath, fileContent, 'utf8');
  generatedCount++;
});

console.log(`Successfully generated ${generatedCount} clean relation TS files matching database_kedutaan_besar!`);

const scriptPath = path.join(__dirname, 'automate_relations_exports.js');
console.log('Running automate_relations_exports.js to update registry...');
execSync(`node "${scriptPath}"`, { stdio: 'inherit' });
