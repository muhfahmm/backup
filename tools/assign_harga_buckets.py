from pathlib import Path
import re

root = Path(r'c:\utama\project\project-sendiri\EM')
price_keys_to_remove = {'harga_bbm', 'harga_obat', 'harga_pendidikan'}
# regex to capture harga object content
harga_block_re = re.compile(r'("harga"\s*:\s*\{)(.*?)(\n\s*\})', re.S)
key_value_re = re.compile(r'"(harga_[a-z_]+)"\s*:\s*[-+]?[0-9]*\.?[0-9]+')

continent_bucket = {
    'afrika': 10000,
    'asia': 25000,
    'eropa': 100000,
    'na': 100000,
    'sa': 50000,
    'oceania': 100000
}

fixed = 0
for path in root.glob('json/database_harga_barang/**/*.ts'):
    text = path.read_text(encoding='utf-8')
    # remove control chars except newline, tab, carriage
    clean = ''.join(ch for ch in text if ch >= ' ' or ch in ['\n','\r','\t'])

    m = harga_block_re.search(clean)
    if not m:
        continue
    block_start, block_inner, block_end = m.group(1), m.group(2), m.group(3)

    # find all keys
    keys = key_value_re.findall(block_inner)
    # build new harga dict lines
    # determine continent from path parent folder name
    continent = path.parent.name.lower()
    bucket = continent_bucket.get(continent, 25000)

    new_lines = []
    for k in keys:
        if k in price_keys_to_remove:
            continue
        # assign bucket based on continent
        new_lines.append(f'    "{k}": {bucket},')

    if new_lines:
        # remove trailing comma from last
        new_lines[-1] = new_lines[-1].rstrip(',')
    new_block = block_start + '\n' + '\n'.join(new_lines) + '\n' + block_end

    new_text = clean[:m.start()] + new_block + clean[m.end():]

    # ensure const name still present; keep header and footer as original except harga block
    path.write_text(new_text, encoding='utf-8')
    fixed += 1

print(f'Assigned buckets in {fixed} files')
