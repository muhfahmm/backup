const fs = require('fs');
const path = require('path');

const root = process.cwd();
const profilesDir = path.join(root, 'json', 'semua_fitur_negara', '0_profiles');
const outputFile = path.join(root, 'apps', 'src', 'app', 'page', 'navigasi_menu', '2_navigasi_bawah', '7_geopolitik', '1_PBB', '3_suara_negara_PBB', 'staticVoteData.ts');

function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full));
    } else if (entry.isFile() && entry.name.endsWith('.ts')) {
      files.push(full);
    }
  }
  return files;
}

function extractObject(text, startIndex) {
  const start = text.indexOf('{', startIndex);
  if (start < 0) return null;

  let depth = 0;
  let inString = null;
  let escaped = false;

  for (let i = start; i < text.length; i += 1) {
    const char = text[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === inString) {
        inString = null;
      }
      continue;
    }

    if (char === '"' || char === "'") {
      inString = char;
    } else if (char === '{') {
      depth += 1;
    } else if (char === '}') {
      depth -= 1;
      if (depth === 0) {
        return text.slice(start, i + 1);
      }
    }
  }

  return null;
}

function findNameId(text) {
  const match = text.match(/"name_id"\s*:\s*"([^"]+)"/);
  return match ? match[1] : null;
}

function findUnVote(text) {
  const match = text.match(/"un_vote"\s*:\s*(\d+)/);
  return match ? Number(match[1]) : null;
}

const files = walk(profilesDir);
const entries = [];

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const profileMatch = text.match(/export\s+const\s+([A-Za-z0-9_$]+)_profile\s*=\s*/);
  const geopolitikMatch = text.match(/const\s+([A-Za-z0-9_$]+)_geopolitik\s*=\s*/);

  if (!profileMatch || !geopolitikMatch) continue;

  const profileObject = extractObject(text, profileMatch.index + profileMatch[0].length);
  const geopolitikObject = extractObject(text, geopolitikMatch.index + geopolitikMatch[0].length);

  if (!profileObject || !geopolitikObject) continue;

  const nameId = findNameId(profileObject);
  const unVote = findUnVote(geopolitikObject);
  if (!nameId || unVote == null) continue;

  entries.push({ name_id: nameId, un_vote: unVote });
}

entries.sort((a, b) => a.name_id.localeCompare(b.name_id));

const content = [
  'export interface StaticPbbVoteEntry {',
  '  name_id: string;',
  '  un_vote: number;',
  '}',
  '',
  'export const STATIC_PBB_VOTES: StaticPbbVoteEntry[] = [',
  ...entries.map((entry) => `  { name_id: "${entry.name_id}", un_vote: ${entry.un_vote} },`),
  '];',
  ''
].join('\n');

fs.writeFileSync(outputFile, content, 'utf8');
console.log(`Wrote ${entries.length} entries to ${outputFile}`);
