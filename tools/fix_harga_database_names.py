from pathlib import Path
import re

root = Path(r'c:\utama\project\project-sendiri\EM')
pattern = re.compile(r'const\s+([0-9]+)_([a-z0-9_]+_harga)\s*=')
count = 0

for path in root.glob('json/database_harga_barang/**/*.ts'):
    text = path.read_text(encoding='utf-8')
    new_text = pattern.sub(r'const \2 =', text)
    if new_text != text:
        path.write_text(new_text, encoding='utf-8')
        count += 1

print(f'Fixed {count} files')
