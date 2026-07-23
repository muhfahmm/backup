from pathlib import Path
import re
ROOT = Path(r'c:\utama\project\project-sendiri\EM')
FILES_GLOB = 'json/database_harga_barang/**/*.ts'
count=0
for path in ROOT.glob(FILES_GLOB):
    text = path.read_text(encoding='utf-8')
    new_text = text
    # repeatedly remove a blank line immediately before a closing brace line
    while True:
        replaced = re.sub(r'\n\s*\n(\s*\n*\s*\})', r'\n\1', new_text)
        if replaced == new_text:
            break
        new_text = replaced
    if new_text != text:
        path.write_text(new_text, encoding='utf-8')
        count += 1
print(f'Fixed trailing blanks in {count} files')
