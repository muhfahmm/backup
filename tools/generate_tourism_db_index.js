const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(process.cwd(), 'json', 'database_tempat_wisata');
const outFile = path.join(process.cwd(), 'apps', 'src', 'app', 'lib', 'tourismDatabaseData.ts');

const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.isFile() && entry.name.endsWith('.ts')) {
      files.push(full);
    }
  }
}
walk(root);
files.sort();

const entries = [];
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const match = text.match(/const\s+[A-Za-z0-9_]+\s*=\s*(\{[\s\S]*\});/);
  if (!match) continue;

  try {
    const value = vm.runInNewContext(`(${match[1]})`);
    const base = path.basename(file, '.ts');
    const slug = base
      .replace(/^\d+_/, '')
      .replace(/[^a-z0-9]+/gi, '_')
      .replace(/^_+|_+$/g, '')
      .toLowerCase();
    const name = slug.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    const idMatch = base.match(/^([0-9]+)/);

    entries.push({ slug, name, id: idMatch ? Number(idMatch[1]) : null, value });
  } catch (error) {
    console.error('Failed to parse', file, error.message);
  }
}

const lines = [];
lines.push('// @ts-nocheck');
lines.push('');
lines.push('export const tourismDatabaseBySlug = {');
for (const entry of entries) {
  const serialized = JSON.stringify(entry.value, null, 2).replace(/\n/g, '\n  ');
  lines.push(`  "${entry.slug}": ${serialized},`);
}
lines.push('};');
lines.push('');
lines.push('export const tourismDatabaseById = {');
for (const entry of entries) {
  if (entry.id !== null) {
    lines.push(`  ${entry.id}: "${entry.slug}",`);
  }
}
lines.push('};');
lines.push('');
lines.push('export const tourismDatabaseByCountryName = {');
for (const entry of entries) {
  lines.push(`  "${entry.name}": tourismDatabaseBySlug["${entry.slug}"],`);
}
lines.push('};');
lines.push('');
lines.push('export function normalizeTourismCountryKey(value: string | undefined | null) {');
lines.push('  if (!value) return "";');
lines.push('  return value');
lines.push('    .toLowerCase()');
lines.push('    .trim()');
lines.push('    .replace(/\\s+/g, "_")');
lines.push('    .replace(/[^a-z0-9]+/g, "_")');
lines.push('    .replace(/^_+|_+$/g, "");');
lines.push('}');
lines.push('');
lines.push('export function getTourismAttractions(countryName?: string | null, countryId?: number | null) {');
lines.push('  const direct = countryId != null ? tourismDatabaseById[countryId] : undefined;');
lines.push('  const slug = direct || normalizeTourismCountryKey(countryName);');
lines.push('  const data = tourismDatabaseBySlug[slug];');
lines.push('  if (!data?.tempat_wisata) {');
lines.push('    return [];');
lines.push('  }');
lines.push('  return data.tempat_wisata;');
lines.push('}');
lines.push('');
lines.push('export default tourismDatabaseBySlug;');

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, lines.join('\n'));
console.log(`Generated ${outFile} with ${entries.length} entries.`);
