const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..', 'json', 'database_hubungan_antar_negara');

const customRelationsMap = new Map(); // key: "countryA->countryB", value: number

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    if (entry.isFile() && entry.name.endsWith('.ts') && entry.name !== 'index.ts' && entry.name !== 'relationsRegistry.ts') return [fullPath];
    return [];
  });
}

const files = walk(baseDir);
let nonStandardCount = 0;

files.forEach((filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  // Match objects like { id: 1, name: "afganistan", relation: 50 }
  const regex = /name:\s*"([^"]+)",\s*relation:\s*(\d+)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const nameB = match[1].toLowerCase().trim();
    const relVal = Number(match[2]);
    if (relVal !== 50 && relVal !== 100) {
      nonStandardCount++;
      const fileName = path.basename(filePath, '.ts');
      const slugMatch = fileName.match(/^\d+_(.+)$/);
      const slugA = (slugMatch ? slugMatch[1] : fileName).replace(/_/g, ' ');
      customRelationsMap.set(`${slugA}->${nameB}`, relVal);
    }
  }
});

console.log(`Found ${nonStandardCount} custom relations (different from 50 and 100).`);
console.log('Sample custom relations:', Array.from(customRelationsMap.entries()).slice(0, 10));
