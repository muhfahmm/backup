const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..', 'json', 'database_mitra_perdagangan');
const excludeFiles = new Set(['index.ts', 'agreementsRegistry.ts', 'types.ts']);

function normalizeName(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    if (entry.isFile() && entry.name.endsWith('.ts') && !excludeFiles.has(entry.name)) return [fullPath];
    return [];
  });
}

const files = walk(rootDir).sort();
const registryImports = [];
const registryEntries = [];

files.forEach((filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  const updated = content.replace(/^\s*const\s+([A-Za-z0-9_]+)\s*=/gm, 'export const $1 =');

  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf8');
  }

  const relativePath = path.relative(rootDir, filePath).replace(/\\/g, '/');
  const fileName = path.basename(filePath, '.ts');
  const match = fileName.match(/^\d+_(.+)$/);
  const slug = match ? match[1] : fileName;
  const exportName = `${slug}Agreements`;
  const regionPrefix = path.dirname(relativePath).replace(/\//g, '_');
  const importAlias = `${regionPrefix ? `${regionPrefix}_` : ''}${exportName}`;
  const importPath = `./${relativePath}`;

  registryImports.push(`import { ${exportName} as ${importAlias} } from '${importPath}';`);
  registryEntries.push(`  '${normalizeName(slug)}': ${importAlias},`);
});

const registryContent = `// @ts-nocheck
export interface TradeAgreement {
  no: number;
  mitra: string;
  type: string;
  status: string;
}

${registryImports.join('\n')}

const normalizeTradeCountryName = (value: string | null | undefined): string => {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
};

const countryAgreementMap: Record<string, TradeAgreement[]> = {
${registryEntries.join('\n')}
};

export const getTradeAgreementsForCountry = (countryName: string | null | undefined): TradeAgreement[] => {
  const normalized = normalizeTradeCountryName(countryName);
  return countryAgreementMap[normalized] ?? [];
};

export default getTradeAgreementsForCountry;
`;

fs.writeFileSync(path.join(rootDir, 'tradeAgreementRegistry.ts'), registryContent, 'utf8');
console.log(`Updated ${files.length} files and generated tradeAgreementRegistry.ts`);
