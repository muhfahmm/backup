import os
import re

# Base directory for country profiles
PROFILES_ROOT = r"c:\fhm\em\app\frontend\src\app\pilih_negara\data\semua_fitur_negara\0_profiles"

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Fix anggaran (multiply by 1000 if it doesn't end in 000 and is small)
    # We use a heuristic: if it's less than 1,000,000 and doesn't end in 000
    def fix_anggaran(match):
        val_str = match.group(2)
        val = int(val_str)
        if val < 1000000 and not val_str.endswith("000"):
            return f'{match.group(1)}{val * 1000}'
        return match.group(0)

    new_content = re.sub(r'("anggaran":\s*)(\d+)', fix_anggaran, content)
    
    # 2. Fix pajak pendapatan (multiply by 1000)
    def fix_pendapatan(match):
        val_str = match.group(2)
        val = int(val_str)
        if val < 100000 and not val_str.endswith("000"):
            return f'{match.group(1)}{val * 1000}'
        return match.group(0)

    new_content = re.sub(r'("pendapatan":\s*)(\d+)', fix_pendapatan, new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
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
    print(f"Processed {count} files. Fixed {fixed} files.")

if __name__ == "__main__":
    main()
