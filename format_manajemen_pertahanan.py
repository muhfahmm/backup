from pathlib import Path
import re

root = Path(r'c:\utama\project\project-sendiri\em2\json\semua_fitur_negara\2_pertahanan\5_manajemen_pertahanan')

pattern = re.compile(r'(?s)//\s*@ts-nocheck\s*\nconst\s+(\w+)\s*=\s*\{\s*(.*?)\s*\};')

for path in root.rglob('*.ts'):
    if path.name == 'index.ts':
        continue

    text = path.read_text(encoding='utf-8')
    match = pattern.search(text)
    if not match:
        continue

    const_name = match.group(1)
    body = match.group(2)

    entries = []
    for item in re.finditer(r'"([^"]+)"\s*:\s*([^,]+),?', body):
        key = item.group(1)
        value = item.group(2).strip()
        entries.append(f'    "{key}": {value},')

    if not entries:
        continue

    formatted = "// @ts-nocheck\nconst {const_name} = {{\n".format(const_name=const_name)
    formatted += "\n".join(entries) + "\n};\n"
    path.write_text(formatted, encoding='utf-8')

print('formatted')
