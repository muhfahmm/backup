from pathlib import Path
import re

ROOT = Path(r'c:\utama\project\project-sendiri\EM')
FILES_GLOB = 'json/database_harga_barang/**/*.ts'
count = 0
for path in ROOT.glob(FILES_GLOB):
    text = path.read_text(encoding='utf-8')
    m = re.search(r'("harga"\s*:\s*\{)(.*?)(\n\s*\})', text, re.S)
    if not m:
        continue
    inner = m.group(2)
    # remove consecutive blank lines and trim leading/trailing whitespace inside block
    cleaned = re.sub(r'\n\s*\n+', '\n', inner)
    cleaned = cleaned.strip()
    # re-indent lines with 4 spaces and remove empty lines
    cleaned_lines = [ '    ' + ln.strip() for ln in cleaned.splitlines() if ln.strip() ]
    new_block = m.group(1) + '\n' + '\n'.join(cleaned_lines) + m.group(3)
    # collapse multiple blank lines in the whole text to at most one empty line
    new_text = text[:m.start()] + new_block + text[m.end():]
    new_text = re.sub(r'\n\s*\n+', '\n\n', new_text)
    if new_text != text:
        path.write_text(new_text, encoding='utf-8')
        count += 1
print(f'Cleaned blank lines in {count} files')
