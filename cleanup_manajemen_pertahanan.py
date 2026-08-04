from pathlib import Path
import re

root = Path(r'c:\utama\project\project-sendiri\em2\json\semua_fitur_negara\2_pertahanan\5_manajemen_pertahanan')
remove_keys = ['penjara', 'pusat_komando', 'program_luar_angkasa', 'pertahanan_siber']

for path in root.rglob('*.ts'):
    if path.name == 'index.ts':
        continue
    text = path.read_text(encoding='utf-8')
    new_text = text
    for key in remove_keys:
        new_text = re.sub(rf'\s*"{re.escape(key)}"\s*:\s*[^,\n]+,?\n?', '', new_text, flags=re.MULTILINE)
    if new_text != text:
        path.write_text(new_text, encoding='utf-8')

index_path = root / 'index.ts'
text = index_path.read_text(encoding='utf-8')
for block in [
    r'\s*"1_penjara"\s*:\s*\{.*?\},\n?',
    r'\s*"5_pusat_komando"\s*:\s*\{.*?\},\n?',
    r'\s*"8_program_luar_angkasa"\s*:\s*\{.*?\},\n?',
    r'\s*"9_pertahanan_siber"\s*:\s*\{.*?\},\n?',
]:
    text = re.sub(block, '', text, flags=re.DOTALL)
index_path.write_text(text, encoding='utf-8')

meta_path = root / 'metadata_manajemen.json'
text = meta_path.read_text(encoding='utf-8')
for key in remove_keys:
    text = re.sub(rf'\s*"{re.escape(key)}"\s*:\s*\{{.*?\}}\s*,?\n?', '', text, flags=re.DOTALL)
meta_path.write_text(text, encoding='utf-8')

print('done')
