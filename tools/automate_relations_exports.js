const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..', 'json', 'database_hubungan_antar_negara');
const excludeFiles = new Set(['index.ts', 'relationsRegistry.ts', 'types.ts']);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    if (entry.isFile() && entry.name.endsWith('.ts') && !excludeFiles.has(entry.name)) return [fullPath];
    return [];
  });
}

function normalizeName(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

const files = walk(rootDir).sort();
const registryImports = [];
const registryEntries = [];

files.forEach((filePath, idx) => {
  let content = fs.readFileSync(filePath, 'utf8');
  const updated = content.replace(/^\s*const\s+([A-Za-z0-9_]+)\s*=/gm, 'export const $1 =');

  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf8');
    content = updated;
  }

  const relativePath = path.relative(rootDir, filePath).replace(/\\/g, '/');
  const fileName = path.basename(filePath, '.ts');
  const match = fileName.match(/^\d+_(.+)$/);
  const slug = match ? match[1] : fileName;
  const exportName = `${slug}_relations`;
  const importAlias = `rel_${idx}_${slug.replace(/[^a-zA-Z0-9_]/g, '_')}`;
  const importPath = `./${relativePath}`;

  registryImports.push(`import { ${exportName} as ${importAlias} } from '${importPath}';`);
  registryEntries.push(`  '${normalizeName(slug)}': ${importAlias},`);
});

const registryContent = `// @ts-nocheck
export interface CountryRelation {
  id: number;
  name: string;
  relation: number;
}

${registryImports.join('\n')}

const normalizeCountryNameKey = (value: string | null | undefined): string => {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
};

const relationsMap: Record<string, CountryRelation[]> = {
${registryEntries.join('\n')}
};

export const getRelationsForCountry = (countryName: string | null | undefined): CountryRelation[] => {
  const key = normalizeCountryNameKey(countryName);
  return relationsMap[key] ?? [];
};

export const getRelationValue = (countryA: string, countryB: string): number => {
  if (!countryA || !countryB) return 50;
  const keyA = normalizeCountryNameKey(countryA);
  const keyB = normalizeCountryNameKey(countryB);
  if (keyA === keyB) return 100;

  const listA = relationsMap[keyA];
  if (listA) {
    const found = listA.find((item) => normalizeCountryNameKey(item.name) === keyB);
    if (found && typeof found.relation === 'number') return found.relation;
  }

  const listB = relationsMap[keyB];
  if (listB) {
    const found = listB.find((item) => normalizeCountryNameKey(item.name) === keyA);
    if (found && typeof found.relation === 'number') return found.relation;
  }

  return 50;
};

export default getRelationValue;
`;

fs.writeFileSync(path.join(rootDir, 'relationsRegistry.ts'), registryContent, 'utf8');
console.log(`Updated ${files.length} relations files and generated relationsRegistry.ts`);
