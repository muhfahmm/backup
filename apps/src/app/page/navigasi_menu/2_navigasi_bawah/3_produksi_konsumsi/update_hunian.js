const fs = require('fs');
const path = require('path');

const hunianRoot = 'c:/utama/project/project-sendiri/EM/json/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman';
const profilesRoot = 'c:/utama/project/project-sendiri/EM/json/semua_fitur_negara/0_profiles';

function getTsFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getTsFiles(fullPath));
    } else if (file.endsWith('.ts') && file !== 'index.ts') {
      results.push(fullPath);
    }
  });
  return results;
}

// Deterministic Pseudo-Random Generator with Seed based on filepath
function getSeededRandom(seedString) {
  let hash = 0;
  for (let i = 0; i < seedString.length; i++) {
    hash = (hash << 5) - hash + seedString.charCodeAt(i);
    hash |= 0;
  }
  const x = Math.sin(hash++) * 10000;
  return x - Math.floor(x);
}

function getRandomInRange(min, max, seedString, salt) {
  const rand = getSeededRandom(seedString + salt);
  return Math.floor(rand * (max - min + 1)) + min;
}

const files = getTsFiles(hunianRoot);
console.log(`Found ${files.length} ts files in hunian_permukiman.`);

let updatedCount = 0;

files.forEach((filePath) => {
  const relPath = path.relative(hunianRoot, filePath);
  const profilePath = path.join(profilesRoot, relPath);

  let anggaran = 0;
  let pendapatanNasional = 0;

  if (fs.existsSync(profilePath)) {
    const pContent = fs.readFileSync(profilePath, 'utf8');
    const angMatch = pContent.match(/"anggaran":\s*(\d+)/);
    if (angMatch) anggaran = parseInt(angMatch[1], 10);
    const pendMatch = pContent.match(/"pendapatan_nasional":\s*"?(\d+)"?/);
    if (pendMatch) pendapatanNasional = parseInt(pendMatch[1], 10);
  }

  // Determine if country is poor
  const isPoor = anggaran < 1000 || pendapatanNasional < 2500;

  // Generate range values
  // rumah_subsidi: 100,000 - 250,000
  const rumahSubsidi = getRandomInRange(100000, 250000, relPath, 'subsidi');

  // apartemen: 50,000 - 100,000
  const apartemen = getRandomInRange(50000, 100000, relPath, 'apartemen');

  // mansion: 10,000 - 50,000 (poor countries: 1,000 - 5,000)
  const mansionMin = isPoor ? 1000 : 10000;
  const mansionMax = isPoor ? 5000 : 50000;
  const mansion = getRandomInRange(mansionMin, mansionMax, relPath, 'mansion');

  let fileContent = fs.readFileSync(filePath, 'utf8');

  fileContent = fileContent.replace(/rumah_subsidi:\s*\d+/, `rumah_subsidi: ${rumahSubsidi}`);
  fileContent = fileContent.replace(/apartemen:\s*\d+/, `apartemen: ${apartemen}`);
  fileContent = fileContent.replace(/mansion:\s*\d+/, `mansion: ${mansion}`);

  fs.writeFileSync(filePath, fileContent, 'utf8');
  updatedCount++;
});

console.log(`Successfully updated ${updatedCount} hunian permukiman TS files.`);
