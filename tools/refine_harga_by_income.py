import json
from pathlib import Path
import re

ROOT = Path(r'c:\utama\project\project-sendiri\EM')
MAPDATA = ROOT / 'apps' / 'src' / 'app' / 'page' / 'map_system' / 'map-data.ts'
FILES_GLOB = 'json/database_harga_barang/**/*.ts'

# Read map-data.ts and extract WORLD_GEOJSON and COUNTRIES_DATA
text = MAPDATA.read_text(encoding='utf-8')

wg_match = re.search(r'export const WORLD_GEOJSON\s*=\s*`(.*?)`;', text, re.S)
cd_match = re.search(r'export const COUNTRIES_DATA\s*=\s*(\[.*?\]);', text, re.S)

if not wg_match or not cd_match:
    print('Could not find WORLD_GEOJSON or COUNTRIES_DATA in map-data.ts')
    raise SystemExit(1)

world_json_text = wg_match.group(1)
countries_json_text = cd_match.group(1)

world = json.loads(world_json_text)
countries = json.loads(countries_json_text)

# build iso->income mapping
iso_to_income = {}
for feat in world.get('features', []):
    props = feat.get('properties', {})
    iso = props.get('ISO_A2') or props.get('ISO_A2')
    inc = props.get('INCOME_GRP')
    if iso and inc:
        m = re.match(r"(\d)", str(inc))
        if m:
            iso_to_income[iso.lower()] = int(m.group(1))

# build country name -> iso from COUNTRIES_DATA
name_to_iso = {}
for c in countries:
    name = c.get('country','').strip().lower()
    iso = c.get('iso','').strip().lower()
    if name and iso:
        name_to_iso[name] = iso

# helper to normalize keys like 'repubik_afrika_tengah' -> 'republik afrika tengah'

def normalize_key(key):
    return key.replace('_', ' ').strip().lower()

# income group to bucket mapping (1 highest -> 100000; 5 lowest -> 10000)
income_to_bucket = {1:100000, 2:75000, 3:50000, 4:25000, 5:10000}

# process files
count=0
for path in ROOT.glob(FILES_GLOB):
    text = path.read_text(encoding='utf-8')
    # extract const name, like const chad_harga
    m = re.search(r'const\s+([a-z0-9_]+)_harga', text, re.I)
    country_key = None
    if m:
        country_key = m.group(1)
    else:
        # fallback to filename without prefix
        country_key = path.stem
        # remove leading digits and underscore
        country_key = re.sub(r'^[0-9]+_', '', country_key)

    country_name = normalize_key(country_key)

    # try direct lookup in name_to_iso
    iso = name_to_iso.get(country_name)
    if not iso:
        # try replacing 'republik ' 'repubik' etc
        alt = country_name.replace('repubik','republik')
        iso = name_to_iso.get(alt)
    if not iso:
        # try more heuristics: remove 'republic', 'republik', parts after spaces
        short = country_name.split()[-1]
        iso = name_to_iso.get(short)

    income = None
    if iso:
        income = iso_to_income.get(iso.lower())

    if not income:
        # fallback: assign by continent folder
        continent = path.parent.name.lower()
        if continent == 'afrika':
            income = 5
        elif continent == 'asia':
            income = 4
        elif continent == 'eropa' or continent=='na' or continent=='oceania':
            income = 1
        elif continent == 'sa':
            income = 3
        else:
            income = 3

    bucket = income_to_bucket.get(income, 25000)

    # replace values inside "harga" block for keys except removed ones
    def repl_block(m):
        inner = m.group(2)
        # find keys
        def repl_kv(km):
            key = km.group(1)
            if key in ('harga_bbm','harga_obat','harga_pendidikan'):
                return ''
            return f'"{key}": {bucket},'
        new_inner = re.sub(r'"(harga_[a-z_]+)"\s*:\s*[-+]?[0-9]*\.?[0-9]+', repl_kv, inner)
        # cleanup trailing commas and blank lines
        lines = [ln.rstrip() for ln in new_inner.splitlines() if ln.strip()!='']
        if lines and lines[-1].endswith(','):
            lines[-1] = lines[-1].rstrip(',')
        return m.group(1) + '\n' + '\n'.join('    '+ln for ln in lines) + '\n' + m.group(3)

    new_text, nsubs = re.subn(r'("harga"\s*:\s*\{)(.*?)(\n\s*\})', repl_block, text, flags=re.S)
    if nsubs>0:
        path.write_text(new_text, encoding='utf-8')
        count+=1

print(f'Processed {count} files')
