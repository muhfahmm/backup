import os
import re

PROFILES_ROOT = r"c:\fhm\em\app\frontend\src\app\pilih_negara\data\semua_fitur_negara\0_profiles"

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False

    # 1. Fix anggaran (multiply by 1000)
    # Match "anggaran": 123
    def fix_anggaran(match):
        nonlocal modified
        prefix, val_str = match.groups()
        val = int(val_str)
        # Only multiply if it doesn't already look like it's in the millions/billions scale
        # Most budgets are < 1,000,000 currently.
        if val < 1000000:
            modified = True
            return f'{prefix}{val * 1000}'
        return match.group(0)

    content = re.sub(r'("anggaran":\s*)(\d+)', fix_anggaran, content)

    # 2. Fix pendapatan_nasional (multiply by 1000)
    # Match "pendapatan_nasional": "123" or "pendapatan_nasional": 123
    def fix_gdp(match):
        nonlocal modified
        prefix, quote, val_str, suffix = match.groups()
        val = int(val_str)
        if val < 10000000: # Scale check
            modified = True
            return f'{prefix}{quote}{val * 1000}{suffix}'
        return match.group(0)

    content = re.sub(r'("pendapatan_nasional":\s*)(["\']?)(\d+)(["\']?)', fix_gdp, content)

    # 3. Fix pajak pendapatan (multiply by 1000)
    def fix_pendapatan(match):
        nonlocal modified
        prefix, val_str = match.groups()
        val = int(val_str)
        if val < 100000:
            modified = True
            return f'{prefix}{val * 1000}'
        return match.group(0)

    content = re.sub(r'("pendapatan":\s*)(\d+)', fix_pendapatan, content)

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
    print(f"Processed {count} files. Synchronized {fixed} files.")

if __name__ == "__main__":
    main()
