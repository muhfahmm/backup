import re
from pathlib import Path

root = Path(r'c:/utama/project/project-sendiri/EM/json/database_harga_barang')

for path in root.rglob('*.ts'):
    text = path.read_text(encoding='utf-8')
    if '"harga"' not in text:
        continue

    # Keep only the inner object body that represents the price data
    m = re.search(r'const\s+[A-Za-z0-9_]+_harga\s*=\s*\{\s*\n\s*"harga"\s*:\s*\{(.*?)\n\s*\}\s*\n\};', text, re.S)
    if not m:
        continue

    body = m.group(1)
    cleaned = "// @ts-nocheck\nconst " + path.stem.replace('-', '_') + "_harga = {\n\n"
    cleaned += '  "harga": {\n'
    for line in body.splitlines():
        line = line.rstrip()
        if line.strip():
            if line.strip().startswith('//'):
                continue
            if 'geopolitik' in line or 'kementerian' in line:
                continue
            cleaned += '    ' + line.strip() + '\n'
    cleaned += '  }\n};\n'
    path.write_text(cleaned, encoding='utf-8')

print('Cleaned harga files to contain only price data')
