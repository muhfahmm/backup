const fs = require('fs');
const path = require('path');

const removeComments = (input) =>
  input.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

const findObjectLiteral = (input, start) => {
  let depth = 0;
  let inString = null;
  let escaped = false;

  for (let i = start; i < input.length; i += 1) {
    const char = input[i];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (char === '\\') {
      escaped = true;
      continue;
    }
    if (inString) {
      if (char === inString) {
        inString = null;
      }
      continue;
    }
    if (char === '"' || char === "'" || char === '`') {
      inString = char;
      continue;
    }
    if (char === '{') {
      depth += 1;
      continue;
    }
    if (char === '}') {
      depth -= 1;
      if (depth === 0) {
        return input.slice(start, i + 1);
      }
    }
  }

  return null;
};

const parseObjectLiteral = (literal) => {
  try {
    return new Function(`"use strict"; return (${literal});`)();
  } catch (e) {
    console.error('parseObjectLiteral failed:', e.message);
    return null;
  }
};

const extractObjectsFromFile = (fileContent) => {
  const cleaned = removeComments(fileContent);
  const objects = [];

  const constRegex = /(?:const|let|var)\s+[A-Za-z_$][\w$]*\s*=\s*\{/g;
  let match;
  while ((match = constRegex.exec(cleaned))) {
    const start = match.index + match[0].length - 1;
    const objectLiteral = findObjectLiteral(cleaned, start);
    if (objectLiteral) {
      const parsed = parseObjectLiteral(objectLiteral);
      if (parsed && typeof parsed === 'object') {
        objects.push(parsed);
      }
    }
  }

  const exportRegex = /export\s+default\s*\{/g;
  const exportMatch = exportRegex.exec(cleaned);
  if (exportMatch) {
    const start = exportMatch.index + exportMatch[0].length - 1;
    const objectLiteral = findObjectLiteral(cleaned, start);
    if (objectLiteral) {
      const parsed = parseObjectLiteral(objectLiteral);
      if (parsed && typeof parsed === 'object') {
        objects.push(parsed);
      }
    }
  }

  return Object.assign({}, ...objects);
};

const getLevelSource = (source) => {
  const wrapperKey = Object.keys(source).find((key) => key.endsWith('_level_kabinet'));
  if (wrapperKey && typeof source[wrapperKey] === 'object' && source[wrapperKey] !== null) {
    return source[wrapperKey];
  }

  if (
    typeof source.kementerian === 'object' && source.kementerian !== null &&
    typeof source.keamanan === 'object' && source.keamanan !== null &&
    typeof source.layanan === 'object' && source.layanan !== null
  ) {
    return {
      kementerian: source.kementerian,
      keamanan: source.keamanan,
      layanan: source.layanan,
    };
  }

  return null;
};

const samplePath = 'afrika/25_madagaskar.ts';
const jsonRoot = path.join(__dirname, '..', '..', 'json', 'semua_fitur_negara');
const levelRoot = path.join(__dirname, '..', '..', 'json', 'database_level_kabinet');
const targetFilename = path.basename(samplePath);

const allFiles = [];
const findFiles = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findFiles(fullPath);
    } else if (file === targetFilename) {
      allFiles.push(fullPath);
    }
  }
};
findFiles(jsonRoot);

const levelCabinetPath = path.join(levelRoot, samplePath);
if (fs.existsSync(levelCabinetPath)) {
  allFiles.push(levelCabinetPath);
}

console.log('all matched files:');
console.log(allFiles);

let mergedData = {};
for (const filePath of allFiles) {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const parsed = extractObjectsFromFile(fileContents);
  const isLevelFile = path.relative(levelRoot, filePath).startsWith('..') === false;
  if (isLevelFile && parsed) {
    const levelData = getLevelSource(parsed);
    if (levelData) {
      const levelFields = {};
      ['kementerian', 'keamanan', 'layanan'].forEach((group) => {
        const groupData = levelData[group];
        if (groupData && typeof groupData === 'object') {
          Object.entries(groupData).forEach(([dept, level]) => {
            const parsedLevel = Number(level);
            if (!Number.isNaN(parsedLevel) && parsedLevel > 0) {
              levelFields[`level_${dept}`] = parsedLevel;
            }
          });
        }
      });
      mergedData = { ...mergedData, ...levelFields };
      if (parsed.nama_negara) {
        mergedData.nama_negara = parsed.nama_negara;
      }
      continue;
    }
  }
  mergedData = { ...mergedData, ...parsed };
}
console.log('final merged keys:', Object.keys(mergedData).slice(0, 40));
console.log('sample country, capital, and level fields:');
console.log({
  nama_negara: mergedData.nama_negara,
  country: mergedData.country,
  capital: mergedData.capital,
  level_infrastruktur: mergedData.level_infrastruktur,
  level_pendidikan: mergedData.level_pendidikan,
  level_pertahanan: mergedData.level_pertahanan,
  level_polisi: mergedData.level_polisi,
});
