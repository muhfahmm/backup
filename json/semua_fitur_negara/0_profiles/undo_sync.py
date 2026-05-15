import os
import re

PROFILES_ROOT = r"c:\fhm\em\app\frontend\src\app\pilih_negara\data\semua_fitur_negara\0_profiles"

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False

    # 1. Undo anggaran (divide by 1000 if it ends in 000)
    def undo_anggaran(match):
        nonlocal modified
        prefix, val_str = match.groups()
        if val_str.endswith("000"):
            modified = True
            val = int(val_str) // 1000
            return f'{prefix}{val}'
        return match.group(0)

    content = re.sub(r'("anggaran":\s*)(\d+)', undo_anggaran, content)

    # 2. Undo pendapatan_nasional (divide by 1000)
    def undo_gdp(match):
        nonlocal modified
        prefix, quote, val_str, suffix = match.groups()
        if val_str.endswith("000"):
            modified = True
            val = int(val_str) // 1000
            return f'{prefix}{quote}{val}{suffix}'
        return match.group(0)

    content = re.sub(r'("pendapatan_nasional":\s*)(["\']?)(\d+)(["\']?)', undo_gdp, content)

    # 3. Undo pajak pendapatan (divide by 1000)
    def undo_pendapatan(match):
        nonlocal modified
        prefix, val_str = match.groups()
        if val_str.endswith("000"):
            modified = True
            val = int(val_str) // 1000
            return f'{prefix}{val}'
        return match.group(0)

    content = re.sub(r'("pendapatan":\s*)(\d+)', undo_pendapatan, content)

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    count = 0
    fixed = 0
    for root, dirs, files in os.walk(PROFILES_ROOT):
        for file in files:
            if file.endswith(".ts") and file != "index.ts":
                count += 1
                if process_file(os.path.join(root, file)):
                    fixed += 1
    print(f"Processed {count} files. Undone scaling for {fixed} files.")

if __name__ == "__main__":
    main()
