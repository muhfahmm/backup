const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'json', 'semua_fitur_negara', '1_pembangunan', '1_produksi', '2_sektor_mineral_kritis');
// Prefer user-provided logic file in apps if it exists
const altLogic = path.join(__dirname, '..', 'apps', 'src', 'app', 'logic', 'uranium_logic', 'uranium_logic.ts');
const logicFile = fs.existsSync(altLogic) ? altLogic : path.join(root, 'uranium_logic.ts');

function readList() {
  const txt = fs.readFileSync(logicFile, 'utf8');
  const lines = txt.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  // Normalize: lowercase and replace spaces with underscore to match filenames like 'amerika_serikat'
  return new Set(lines.map(l => l.toLowerCase().replace(/\s+/g, '_')));
}

function processDir(dir, allowedSet) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      processDir(p, allowedSet);
      continue;
    }
    if (!ent.name.endsWith('.ts')) continue;
    const base = path.basename(ent.name, '.ts');
    // filename like '81_malaysia' or 'malaysia'
    const parts = base.split('_');
    const nameParts = parts.slice(parts.findIndex(part => isNaN(Number(part)) ? true : false));
    // better: if first part is number, country is rest; else full base
    let countryName = base;
    if (/^\d+_/.test(base)) {
      countryName = base.replace(/^\d+_/, '');
    }
    countryName = countryName.toLowerCase();

    const content = fs.readFileSync(p, 'utf8');
    const match = content.match(/(uranium\s*:\s*)(\d+)/i);
    const currentVal = match ? Number(match[2]) : 0;
    let newVal;
    if (allowedSet.has(countryName)) {
      // preserve current positive value if exists, otherwise set minimal 1
      newVal = currentVal > 0 ? currentVal : 1;
    } else {
      newVal = 0;
    }
    const updated = content.replace(/(uranium\s*:\s*)\d+/i, `$1${newVal}`);
    if (updated !== content) {
      fs.writeFileSync(p, updated, 'utf8');
      console.log('Updated', p, '-> uranium:', newVal);
    }
  }
}

const allowed = readList();
processDir(root, allowed);
console.log('Done');
