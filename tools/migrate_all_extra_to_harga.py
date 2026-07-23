import re
from pathlib import Path

root = Path(r'c:/utama/project/project-sendiri/EM')
profiles_root = root / 'json' / 'semua_fitur_negara' / '0_profiles'
out_root = root / 'json' / 'database_harga_barang'
out_root.mkdir(parents=True, exist_ok=True)

for continent_dir in sorted(profiles_root.iterdir()):
    if not continent_dir.is_dir():
        continue
    out_cont_dir = out_root / continent_dir.name
    out_cont_dir.mkdir(parents=True, exist_ok=True)

    for profile_path in sorted(continent_dir.glob('*.ts')):
        text = profile_path.read_text(encoding='utf-8')
        pattern = re.compile(r'const\s+([A-Za-z0-9_]+)_extra\s*=\s*\{')
        match = pattern.search(text)
        if not match:
            continue

        start = match.start()
        open_brace_idx = text.find('{', match.end() - 1)
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
        var_name = match.group(1)
        output_path = out_cont_dir / profile_path.name
        output_text = "// @ts-nocheck\nconst " + var_name + "_harga = {\n\n"
        output_text += '  "harga": {\n'
        for raw in inner_body.splitlines():
            line = raw.rstrip()
            if line.strip():
                output_text += '    ' + line.strip() + '\n'
        output_text += '  }\n};\n'
        output_path.write_text(output_text, encoding='utf-8')

        new_text = text[:start] + text[end_idx + 1:]
        new_text = re.sub(r'\n{3,}', '\n\n', new_text)
        new_text = new_text.rstrip() + '\n'
        profile_path.write_text(new_text, encoding='utf-8')

print('Migrated all extra blocks to harga files')
