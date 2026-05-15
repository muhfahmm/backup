import json
import os
import re

def extract_countries():
    # Adjust path to root db_negara.txt
    # This script is at: apps/frontend/src/app/page/map_system/map-data-python/extract_countries.py
    # Root is 6 levels up? No, let's use relative path from root if running from root, 
    # or find it relative to this script.
    
    script_dir = os.path.dirname(os.path.abspath(__file__))
    # Path to db_negara.txt from this script: 
    # apps/frontend/src/app/page/map_system/map-data-python/ -> 6 levels up -> root
    db_path = os.path.join(script_dir, "../../../../../../../db_negara.txt")
    output_path = os.path.join(script_dir, "../../../../../public/data/countries_db.json")
    
    if not os.path.exists(db_path):
        print(f"Error: {db_path} not found")
        return

    countries = []
    with open(db_path, "r", encoding="utf-8") as f:
        for line in f:
            # Match format: 1. [ ] afganistan
            match = re.search(r"^\d+\.\s*\[\s*\]\s*(.*)$", line.strip())
            if match:
                name = match.group(1).strip()
                countries.append({
                    "id": len(countries) + 1,
                    "name": name.title(),
                    "slug": name.lower().replace(" ", "-")
                })

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(countries, f, indent=2)
    
    print(f"Successfully extracted {len(countries)} countries to {output_path}")

if __name__ == "__main__":
    extract_countries()
