from pathlib import Path
import re

root = Path(r'c:\utama\project\project-sendiri\EM')
price_keys_to_remove = {'"harga_bbm"', '"harga_obat"', '"harga_pendidikan"'}
price_pattern = re.compile(r'("harga_[a-z_]+")\s*:\s*([-+]?[0-9]*\.?[0-9]+)(,?)')
price_buckets = [10000, 25000, 50000, 75000, 100000]

fixed_files = 0
for path in root.glob('json/database_harga_barang/**/*.ts'):
    text = path.read_text(encoding='utf-8')
    changed = False
    new_lines = []
    for line in text.splitlines():
        match = price_pattern.search(line)
        if match:
            key = match.group(1)
            if key in price_keys_to_remove:
                changed = True
                continue
            raw_value = float(match.group(2))
            nearest = min(price_buckets, key=lambda x: abs(x - raw_value))
            new_line = price_pattern.sub(f'{key}: {nearest}\3', line)
            if new_line != line:
                changed = True
            new_lines.append(new_line)
        else:
            new_lines.append(line)

    if changed:
        path.write_text('\n'.join(new_lines) + '\n', encoding='utf-8')
        fixed_files += 1

print(f'Updated {fixed_files} files')
