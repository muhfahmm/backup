from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent
PROFILES_DIR = ROOT / 'json' / 'semua_fitur_negara' / '0_profiles'
OUTPUT_FILE = ROOT / 'apps' / 'src' / 'app' / 'page' / 'navigasi_menu' / '2_navigasi_bawah' / '7_geopolitik' / '1_PBB' / '3_suara_negara_PBB' / 'staticVoteData.ts'


def extract_object(text: str, start_index: int) -> str | None:
    if start_index < 0 or start_index >= len(text):
        return None
    if text[start_index] != '{':
        start_index = text.find('{', start_index)
        if start_index < 0:
            return None
    depth = 0
    in_string = None
    escaped = False
    for idx in range(start_index, len(text)):
        char = text[idx]
        if in_string:
            if escaped:
                escaped = False
            elif char == '\\':
                escaped = True
            elif char == in_string:
                in_string = None
            continue
        if char in {'"', "'", '`'}:
            in_string = char
            continue
        if char == '{':
            depth += 1
        elif char == '}':
            depth -= 1
            if depth == 0:
                return text[start_index:idx + 1]
    return None


def find_name_id(text: str) -> str | None:
    for pattern in [r'name_id\s*:\s*["\']([^"\']+)["\']', r'"name_id"\s*:\s*"([^"]+)"']:
        match = re.search(pattern, text)
        if match:
            return match.group(1)
    return None


def find_un_vote(text: str) -> int | None:
    match = re.search(r'un_vote\s*:\s*(\d+)', text)
    if not match:
        return None
    return int(match.group(1))


entries = []
for path in sorted(PROFILES_DIR.rglob('*.ts')):
    text = path.read_text(encoding='utf-8')
    profile_match = re.search(r'export\s+const\s+[A-Za-z0-9_$]+_profile\s*=\s*', text)
    if not profile_match:
        continue
    start = text.find('{', profile_match.end())
    profile_object = extract_object(text, start)
    if not profile_object:
        continue
    name_id = find_name_id(profile_object)
    if not name_id:
        continue
    un_vote = find_un_vote(text)
    if un_vote is None:
        continue
    entries.append((name_id, un_vote))

entries.sort(key=lambda item: (item[0].lower(), -item[1]))

lines = [
    'export interface StaticPbbVoteEntry {',
    '  name_id: string;',
    '  un_vote: number;',
    '}',
    '',
    'export const STATIC_PBB_VOTES: StaticPbbVoteEntry[] = [',
]
for name_id, un_vote in entries:
    lines.append(f'  {{ name_id: "{name_id}", un_vote: {un_vote} }},')
lines.append('];')
OUTPUT_FILE.write_text('\n'.join(lines) + '\n', encoding='utf-8')
print(f'Wrote {len(entries)} entries to {OUTPUT_FILE}')
