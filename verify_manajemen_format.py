from pathlib import Path
import re
root = Path(r'c:\utama\project\project-sendiri\em2\json\semua_fitur_negara\2_pertahanan\5_manajemen_pertahanan')
compact = 0
pattern = re.compile(r'const\s+\w+\s*=\s*\{\s*"[^"]+"\s*:\s*\d+\s*,\s*"[^"]+"\s*:\s*\d+\s*,\s*"[^"]+"\s*:\s*\d+\s*,\s*"[^"]+"\s*:\s*\d+\s*\};', re.S)
for p in root.rglob('*.ts'):
    if p.name == 'index.ts':
        continue
    text = p.read_text(encoding='utf-8')
    if pattern.search(text):
        compact += 1
print(f'compact_files={compact}')
