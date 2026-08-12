from pathlib import Path
import re

ROOT = Path(r'c:\utama\project\project-sendiri\EM')
FILES_GLOB = 'json/database_harga_barang/**/*.ts'

count=0
for path in ROOT.glob(FILES_GLOB):
    text = path.read_text(encoding='utf-8')
    m = re.search(r'("harga"\s*:\s*\{)(.*?)(\n\s*\})', text, re.S)
    if not m:
        continue
    inner = m.group(2)
    # find all key/value
    kvs = re.findall(r'"(harga_[a-z_]+)"\s*:\s*([0-9]+)', inner)
    if not kvs:
        continue
    # build new inner block with proper commas
    lines = [f'    "{k}": {v}' for k,v in kvs]
    new_block = m.group(1) + '\n' + ',\n'.join(lines) + '\n' + m.group(3)
    new_text = text[:m.start()] + new_block + text[m.end():]
    path.write_text(new_text, encoding='utf-8')
    count+=1
print(f'Cleaned {count} files')
