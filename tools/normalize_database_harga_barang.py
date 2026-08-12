import re
from pathlib import Path

root = Path(r'c:/utama/project/project-sendiri/EM/json/database_harga_barang')


def sanitize_name(stem: str) -> str:
    name = stem.split('.')[0]
    name = re.sub(r'^\d+_', '', name)
    name = name.replace('-', '_')
    name = re.sub(r'[^a-zA-Z0-9_]+', '_', name)
    name = re.sub(r'_+', '_', name).strip('_')
    return name.lower() if name else 'country'


for path in root.rglob('*.ts'):
    text = path.read_text(encoding='utf-8')
    if '"harga"' not in text:
        continue

    empty_obj_match = re.search(r'""\s*:\s*\{(.*?)\n\s*\}\s*(,|$)', text, re.S)
    if not empty_obj_match:
        continue

    inner_body = empty_obj_match.group(1)
    lines = []
    for raw in inner_body.splitlines():
        line = raw.rstrip()
        if not line.strip():
            continue
        if line.strip().startswith('//'):
            continue
        if 'geopolitik' in line or 'kementerian' in line:
            continue
        if re.match(r'^\s*"[^"]+"\s*:\s*.*', line):
            lines.append('    ' + line.strip())

    var_name = sanitize_name(path.stem)
    output = "// @ts-nocheck\n"
    output += f"const {var_name}_harga = {{\n\n"
    output += '  "harga": {\n'
    if lines:
        output += '\n'.join(lines) + '\n'
    output += '  }\n'
    output += '};\n'

    path.write_text(output, encoding='utf-8')

print('Normalized database_harga_barang files')
