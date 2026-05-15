import json
import os
import re

def generate_sql_organisasi():
    base_dir = "c:/presiden-simulator - Copy - Copy"
    db_path = os.path.join(base_dir, "db_negara.txt")
    world_path = os.path.join(base_dir, "apps/frontend/public/data/world.json")
    json_source = os.path.join(base_dir, "json/database_organisasi_internasional")
    output_base = os.path.join(base_dir, "postgre/db_organisasi_intrernasional")

    if not os.path.exists(db_path):
        print(f"Error: {db_path} not found")
        return

    # 1. Read all 207 countries
    all_country_names = []
    with open(db_path, "r", encoding="utf-8") as f:
        for line in f:
            parts = line.split("] ")
            if len(parts) > 1:
                name = parts[1].strip()
                if name:
                    all_country_names.append(name)

    # 2. Get continent mapping (for folder structure)
    with open(world_path, "r", encoding="utf-8") as f:
        world_data = json.load(f)

    continent_map = {}
    for feature in world_data['features']:
        props = feature['properties']
        name_en = props.get('NAME', '').lower()
        continent = props.get('CONTINENT', 'asia').lower()
        if continent == "north america": continent = "amerika_utara"
        elif continent == "south america": continent = "amerika_selatan"
        elif continent == "europe": continent = "eropa"
        elif continent == "africa": continent = "afrika"
        elif continent == "oceania": continent = "oceania"
        continent_map[name_en] = continent

    overrides = {
        "afrika selatan": "afrika", "mesir": "afrika", "aljazair": "afrika",
        "venezuela": "amerika_selatan", "brazil": "amerika_selatan",
        "amerika serikat": "amerika_utara", "kanada": "amerika_utara",
        "indonesia": "asia", "china": "asia", "rusia": "eropa",
        "australia": "oceania", "selandia baru": "oceania"
    }

    # Order continents for global ID 1-207
    continent_order = ["afrika", "asia", "eropa", "amerika_utara", "amerika_selatan", "oceania"]
    grouped_countries = {c: [] for c in continent_order}
    for name in all_country_names:
        cont = overrides.get(name.lower()) or continent_map.get(name.lower(), "asia")
        if cont not in grouped_countries: cont = "asia"
        grouped_countries[cont].append(name)

    for cont in continent_order:
        grouped_countries[cont].sort()

    ordered_countries = []
    for cont in continent_order:
        for name in grouped_countries[cont]:
            ordered_countries.append({"name": name, "continent": cont})

    # 3. Scan Organizations
    orgs = []
    membership_map = {name.lower(): [] for name in all_country_names}
    
    org_types = {"1_organisasi_PBB": "PBB", "2_organisasi_Regional": "Regional"}
    
    for folder_type, type_label in org_types.items():
        type_path = os.path.join(json_source, folder_type)
        if not os.path.exists(type_path): continue
        
        for org_folder in os.listdir(type_path):
            org_path = os.path.join(type_path, org_folder)
            if not os.path.isdir(org_path): continue
            
            # Clean org name (remove "1_", etc.)
            clean_name = re.sub(r'^\d+_', '', org_folder).replace('_', ' ')
            org_code = re.search(r'\(([^)]+)\)', clean_name)
            code = org_code.group(1) if org_code else clean_name[:10].strip()
            
            orgs.append({"name": clean_name, "code": code, "type": type_label})
            
            # Find membership file
            for file in os.listdir(org_path):
                if file.endswith(".ts"):
                    with open(os.path.join(org_path, file), "r", encoding="utf-8") as f:
                        content = f.read()
                        # Extract list of members
                        members_match = re.search(r'export const members = \[(.*?)\];', content, re.DOTALL)
                        if members_match:
                            members_raw = members_match.group(1)
                            members_list = re.findall(r'"([^"]+)"', members_raw)
                            for m in members_list:
                                if m.lower() in membership_map:
                                    membership_map[m.lower()].append(clean_name)

    # 4. Generate Master SQL
    os.makedirs(output_base, exist_ok=True)
    with open(os.path.join(output_base, "00_master_organisasi.sql"), "w", encoding="utf-8") as f:
        f.write("-- Master Data Organisasi Internasional\n")
        f.write("INSERT INTO organisasi_internasional (code, name, type) VALUES\n")
        vals = []
        for o in orgs:
            safe_org_name = o['name'].replace("'", "''")
            vals.append("  ('{}', '{}', '{}')".format(o['code'], safe_org_name, o['type']))
        f.write(",\n".join(vals) + "\nON CONFLICT (code) DO NOTHING;")

    # 5. Generate 207 Country Membership Files
    global_counter = 1
    for item in ordered_countries:
        name = item['name']
        cont = item['continent']
        safe_name = name.lower().replace(" ", "_")
        
        folder_path = os.path.join(output_base, cont)
        os.makedirs(folder_path, exist_ok=True)
        
        file_path = os.path.join(folder_path, f"{global_counter:03d}_{safe_name}.sql")
        
        my_orgs = membership_map.get(name.lower(), [])
        
        sql_name = name.replace("'", "''")
        content = [
            f"-- Membership Organisasi untuk {name}",
            "INSERT INTO organisasi_membership (organisasi_id, country_id) VALUES"
        ]
        
        values = []
        for org_name in my_orgs:
            safe_org_name = org_name.replace("'", "''")
            val_str = f"  ((SELECT id FROM organisasi_internasional WHERE name = '{safe_org_name}' LIMIT 1), (SELECT id FROM countries WHERE name_en = '{sql_name}' LIMIT 1))"
            values.append(val_str)
            
        if values:
            content.append(",\n".join(values) + ";")
        else:
            content.append("-- Tidak ada data membership organisasi.")

        with open(file_path, "w", encoding="utf-8") as f:
            f.write("\n".join(content))
            
        global_counter += 1

    print(f"Successfully generated Master SQL and 207 Country SQLs for organizations.")

if __name__ == "__main__":
    generate_sql_organisasi()
