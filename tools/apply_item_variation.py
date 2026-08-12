import json
import re
from pathlib import Path

ROOT = Path(r'c:\utama\project\project-sendiri\EM')
MAPDATA = ROOT / 'apps' / 'src' / 'app' / 'page' / 'map_system' / 'map-data.ts'
FILES_GLOB = 'json/database_harga_barang/**/*.ts'

# Buckets and order
buckets = [10000,25000,50000,75000,100000]
# Offsets per item (relative to base index)
offsets = {
    'harga_beras': -1,
    'harga_daging_sapi': 1,
    'harga_ayam': 0,
    'harga_minyak_goreng': -1,
    'harga_gula': -1,
    'harga_telur': 0,
    'harga_listrik': 1,
    'harga_air': -1
}

# Read map-data
text = MAPDATA.read_text(encoding='utf-8')
wg_match = re.search(r'export const WORLD_GEOJSON\s*=\s*`(.*?)`;', text, re.S)
cd_match = re.search(r'export const COUNTRIES_DATA\s*=\s*(\[.*?\]);', text, re.S)
if not wg_match or not cd_match:
    print('map-data not found')
    raise SystemExit(1)
world = json.loads(wg_match.group(1))
countries = json.loads(cd_match.group(1))

iso_to_income = {}
for feat in world.get('features', []):
    props = feat.get('properties', {})
    iso = (props.get('ISO_A2') or props.get('ISO_A2') or '').lower()
    inc = props.get('INCOME_GRP')
    if iso and inc:
        m = re.match(r"(\d)", str(inc))
        if m:
            iso_to_income[iso] = int(m.group(1))

name_to_iso = {c.get('country','').strip().lower(): c.get('iso','').strip().lower() for c in countries}

processed = 0
for path in ROOT.glob(FILES_GLOB):
    text = path.read_text(encoding='utf-8')
    # clean control chars
    text = ''.join(ch for ch in text if ch >= ' ' or ch in ['\n','\r','\t'])
    # find country key from const or filename
    m = re.search(r'const\s+([a-z0-9_]+)_harga', text, re.I)
    if m:
        country_key = m.group(1)
    else:
        country_key = path.stem
        country_key = re.sub(r'^[0-9]+_', '', country_key)
    country_name = country_key.replace('_',' ').strip().lower()
    iso = name_to_iso.get(country_name)
    income = None
    if iso:
        income = iso_to_income.get(iso)
    if not income:
        continent = path.parent.name.lower()
        income = 5 if continent=='afrika' else (4 if continent=='asia' else (1 if continent in ['eropa','na','oceania'] else 3))
    base_index = max(0, min(4, 5 - income))
    # build new harga block
    # collect keys present in existing block
    hb = re.search(r'("harga"\s*:\s*\{)(.*?)(\n\s*\})', text, re.S)
    if not hb:
        continue
    inner = hb.group(2)
    keys = re.findall(r'"(harga_[a-z_]+)"\s*:\s*[-+]?[0-9]*\.?[0-9]+', inner)
    lines = []
    for k in keys:
        if k in ('harga_bbm','harga_obat','harga_pendidikan'):
            continue
        offset = offsets.get(k,0)
        idx = base_index + offset
        idx = max(0, min(4, idx))
        val = buckets[idx]
        lines.append(f'    "{k}": {val}')
    # join with commas and replace block
    if lines:
        new_block = hb.group(1) + '\n' + ',\n'.join(lines) + '\n' + hb.group(3)
        new_text = text[:hb.start()] + new_block + text[hb.end():]
        # remove duplicate blank lines inside harga block
        new_text = new_text.replace('\n\n\n', '\n\n')
        path.write_text(new_text, encoding='utf-8')
        processed += 1

print(f'Applied item variation to {processed} files')
