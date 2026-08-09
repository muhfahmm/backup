const fs = require('fs');
const path = require('path');

const MULTIPLIER = 10000;
const armadaRoot = path.join(__dirname, '..', 'json', 'semua_fitur_negara', '2_pertahanan', '3_armada_militer');
const manajemenRoot = path.join(__dirname, '..', 'json', 'semua_fitur_negara', '2_pertahanan', '5_manajemen_pertahanan');

function walk(dir) {
  const files = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) files.push(...walk(full));
    else files.push(full);
  });
  return files;
}

function extractBarakFromManajemen(content) {
  // look for "barak": <number>
  const m = content.match(/\"barak\"\s*:\s*(\d+)/);
  if (!m) return null;
  return Number(m[1]);
}

function updateArmadaFile(armadaFile, barakCount) {
  const content = fs.readFileSync(armadaFile, 'utf8');
  const infantryCount = (barakCount || 0) * MULTIPLIER;

  // Find the darat block
  const daratRegex = /("darat"\s*:\s*\{)([\s\S]*?)(\n\s*\})/m;
  const match = content.match(daratRegex);
  if (!match) {
    console.warn('No darat block in', armadaFile);
    return false;
  }

  const daratBody = match[2];
  // Check if pasukan_infanteri exists
  if (/pasukan_infanteri\s*:\s*\d+/.test(daratBody)) {
    // replace existing value
    const newDaratBody = daratBody.replace(/(pasukan_infanteri\s*:\s*)(\d+)/, `$1${infantryCount}`);
    const newContent = content.replace(daratBody, newDaratBody);
    fs.writeFileSync(armadaFile, newContent, 'utf8');
    return true;
  } else {
    // insert pasukan_infanteri before the closing of the darat object
    // find last non-empty line in daratBody
    const lines = daratBody.split('\n');
    // determine indentation from first darat property line
    const indentMatch = lines.find(l => /\S/.test(l)) && lines.find(l => /\S/.test(l)).match(/^(\s*)/);
    const indent = indentMatch ? indentMatch[1] : '    ';
    // ensure trailing comma on previous last property
    let lastLineIndex = lines.length - 1;
    while (lastLineIndex >= 0 && lines[lastLineIndex].trim() === '') lastLineIndex--;
    if (lastLineIndex >= 0 && !lines[lastLineIndex].trim().endsWith(',')) {
      lines[lastLineIndex] = lines[lastLineIndex] + ',';
    }
    const insertLine = `${indent}"pasukan_infanteri": ${infantryCount}`;
    // place before the closing brace line
    lines.splice(lastLineIndex + 1, 0, insertLine);
    const newDaratBody = lines.join('\n');
    const newContent = content.replace(daratBody, newDaratBody);
    fs.writeFileSync(armadaFile, newContent, 'utf8');
    return true;
  }
}

function relativePath(base, full) {
  return path.relative(base, full).split(path.sep).join('/');
}

const armadaFiles = walk(armadaRoot).filter(f => f.endsWith('.ts'));
console.log('Found armada files:', armadaFiles.length);

let updatedCount = 0;
let skipped = 0;

armadaFiles.forEach(armadaFile => {
  const rel = relativePath(armadaRoot, armadaFile);
  // compute corresponding manajemen file path
  const manajemenFile = path.join(manajemenRoot, rel);
  if (!fs.existsSync(manajemenFile)) {
    console.warn('Manajemen file not found for', rel);
    skipped++;
    return;
  }
  const manajemenContent = fs.readFileSync(manajemenFile, 'utf8');
  const barak = extractBarakFromManajemen(manajemenContent);
  if (barak === null) {
    console.warn('barak not found in', manajemenFile);
    skipped++;
    return;
  }

  const ok = updateArmadaFile(armadaFile, barak);
  if (ok) updatedCount++;
});

console.log(`Done. Updated: ${updatedCount}, Skipped: ${skipped}`);
