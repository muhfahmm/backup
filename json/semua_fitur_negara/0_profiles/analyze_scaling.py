import os
import re
import json

PROFILES_ROOT = r"c:\fhm\em\app\frontend\src\app\pilih_negara\data\semua_fitur_negara\0_profiles"

def analyze_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract anggaran
    anggaran_match = re.search(r'"anggaran":\s*(\d+)', content)
    anggaran = int(anggaran_match.group(1)) if anggaran_match else None
    
    # Extract prices
    prices = re.findall(r'"harga_\w+":\s*(\d+)', content)
    prices = [int(p) for p in prices]
    
    # Extract tax revenues
    revenues = re.findall(r'"pendapatan":\s*(\d+)', content)
    revenues = [int(r) for r in revenues]
    
    return {
        "file": os.path.basename(filepath),
        "anggaran": anggaran,
        "avg_price": sum(prices)/len(prices) if prices else 0,
        "avg_revenue": sum(revenues)/len(revenues) if revenues else 0
    }

def main():
    results = []
    for root, dirs, files in os.walk(PROFILES_ROOT):
        for file in files:
            if file.endswith(".ts") and file != "index.ts":
                results.append(analyze_file(os.path.join(root, file)))
    
    # Sort by anggaran to see the range
    results.sort(key=lambda x: x['anggaran'] or 0)
    
    for r in results[:10]: # Smallest budgets
        print(f"{r['file']}: Budget={r['anggaran']}, AvgPrice={r['avg_price']:.0f}, AvgRev={r['avg_revenue']:.0f}")
    print("...")
    for r in results[-10:]: # Largest budgets
        print(f"{r['file']}: Budget={r['anggaran']}, AvgPrice={r['avg_price']:.0f}, AvgRev={r['avg_revenue']:.0f}")

if __name__ == "__main__":
    main()
