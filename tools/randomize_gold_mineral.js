const fs = require('fs');
const path = require('path');

/**
 * Randomize gold (emas) values in mineral critical sector
 * Rules:
 * - If emas > 100: randomize to 10-50
 * - If emas = 10: randomize to 10-50 (but not exactly 10)
 * - If emas < 10: randomize to 15-20 (for poor countries)
 */

function getRandomGold(value) {
  if (value > 100) {
    // Random 10-50, but if we get 10, reroll to get something else
    let result = Math.floor(Math.random() * 41) + 10; // 10-50
    if (result === 10) {
      result = Math.floor(Math.random() * 40) + 11; // 11-50
    }
    return result;
  } else if (value < 10) {
    // For poor countries: 15-20
    return Math.floor(Math.random() * 6) + 15; // 15-20
  } else if (value === 10) {
    // Already 10: randomize to 11-50
    return Math.floor(Math.random() * 40) + 11; // 11-50
  }
  return value;
}

const root = path.join(process.cwd(), 'json', 'semua_fitur_negara', '1_pembangunan', '1_produksi', '2_sektor_mineral_kritis');

const files = [];
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.isFile() && entry.name.endsWith('.ts') && entry.name !== '2_db_ekstraksi.ts') {
      files.push(full);
    }
  }
}

walk(root);
files.sort();

console.log(`Found ${files.length} files to process...`);

let updatedCount = 0;
const changes = [];

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  
  // Match pattern: emas: <number>,
  const emasMatch = text.match(/(\s+emas:\s*)(\d+)(,)/);
  
  if (emasMatch) {
    const originalValue = parseInt(emasMatch[2], 10);
    
    // Apply rules
    let shouldUpdate = false;
    if (originalValue > 100 || originalValue === 10 || originalValue < 10) {
      shouldUpdate = true;
    }
    
    if (shouldUpdate) {
      const newValue = getRandomGold(originalValue);
      const newText = text.replace(
        /(\s+emas:\s*)\d+(,)/,
        `$1${newValue}$2`
      );
      
      fs.writeFileSync(file, newText, 'utf8');
      
      updatedCount++;
      changes.push({
        file: path.relative(process.cwd(), file),
        old: originalValue,
        new: newValue
      });
    }
  }
}

console.log(`\nUpdated ${updatedCount} files`);
console.log('\nChanges made:');
changes.forEach((change, idx) => {
  console.log(`${idx + 1}. ${change.file}: ${change.old} → ${change.new}`);
});

fs.writeFileSync(
  path.join(process.cwd(), 'tools', 'gold_changes.json'),
  JSON.stringify(changes, null, 2)
);

console.log(`\nDetailed log saved to: tools/gold_changes.json`);
