import re
from pathlib import Path

root = Path(r'c:/utama/project/project-sendiri/EM')
folder = root / 'json' / 'database_harga_barang' / 'afrika'

for path in sorted(folder.glob('*.ts')):
    text = path.read_text(encoding='utf-8')

    match = re.search(r'const\s+([A-Za-z0-9_]+)_extra\s*=\s*\{', text)
    if not match:
        continue

    var_name = match.group(1)
    prop_match = re.search(r'""\s*:\s*\{', text)
    if not prop_match:
        continue

    open_brace_idx = text.find('{', prop_match.end() - 1)
    if open_brace_idx == -1:
        continue

    depth = 0
    in_string = False
    escaped = False
    end_idx = None
    for i in range(open_brace_idx, len(text)):
        ch = text[i]
        if in_string:
            if escaped:
                escaped = False
            elif ch == '\\':
                escaped = True
            elif ch == '"':
                in_string = False
            continue
        if ch == '"':
            in_string = True
        elif ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0:
                end_idx = i
                break

    if end_idx is None:
        continue

    inner_body = text[open_brace_idx + 1:end_idx]
    lines = []
    for raw in inner_body.splitlines():
        line = raw.rstrip()
        if line.strip():
            lines.append('    ' + line.strip())
    price_body = '\n'.join(lines)

    output = "// @ts-nocheck\n"
    output += f"const {var_name}_harga = {{\n\n"
    output += '  "harga": {\n'
    if price_body:
        output += price_body + '\n'
    output += '  }\n'
    output += '};\n'

    path.write_text(output, encoding='utf-8')

print('Normalized Afrika price files')
