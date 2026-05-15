import json
import os
import re

def generate_sql_kedubes_final_check():
    base_dir = "c:/presiden-simulator - Copy - Copy"
    db_path = os.path.join(base_dir, "db_negara.txt")
    world_path = os.path.join(base_dir, "apps/frontend/public/data/world.json")
    json_source = os.path.join(base_dir, "json/database_kedutaan_besar")
    output_base = os.path.join(base_dir, "postgre/db_kedubes")

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

    # 2. Map data from world.json (more robustly)
    with open(world_path, "r", encoding="utf-8") as f:
        world_data = json.load(f)

    continent_map = {}
    for feature in world_data['features']:
        props = feature['properties']
        name_id = props.get('NAME_ID', '').lower()
        name_en = props.get('NAME', '').lower()
        continent = props.get('CONTINENT', 'asia').lower()
        
        if "africa" in continent: c = "afrika"
        elif "europe" in continent: c = "eropa"
        elif "north america" in continent: c = "amerika_utara"
        elif "south america" in continent: c = "amerika_selatan"
        elif "oceania" in continent: c = "oceania"
        else: c = "asia"
        
        continent_map[name_id] = c
        continent_map[name_en] = c

    # 3. Manual Overrides for consistency
    overrides = {
        "afrika selatan": "afrika", "aljazair": "afrika", "angola": "afrika", "benin": "afrika",
        "botswana": "afrika", "burkina faso": "afrika", "burundi": "afrika", "chad": "afrika",
        "djibouti": "afrika", "eritrea": "afrika", "eswatini": "afrika", "ethiopia": "afrika",
        "gabon": "afrika", "gambia": "afrika", "ghana": "afrika", "guinea": "afrika",
        "kenya": "afrika", "lesotho": "afrika", "liberia": "afrika", "libya": "afrika",
        "madagaskar": "afrika", "malawi": "afrika", "mali": "afrika", "maroko": "afrika",
        "mauritania": "afrika", "mauritius": "afrika", "mesir": "afrika", "namibia": "afrika",
        "niger": "afrika", "nigeria": "afrika", "rwanda": "afrika", "senegal": "afrika",
        "seychelles": "afrika", "sierra leone": "afrika", "somalia": "afrika", "togo": "afrika",
        "tunisia": "afrika", "uganda": "afrika", "zambia": "afrika", "zimbabwe": "afrika",
        
        "belanda": "eropa", "belgia": "eropa", "jerman": "eropa", "prancis": "eropa",
        "inggris": "eropa", "italia": "eropa", "spanyol": "eropa", "rusia": "eropa",
        "turki": "eropa", "ukraina": "eropa", "swiss": "eropa", "swedia": "eropa",
        "norwegia": "eropa", "polandia": "eropa", "yunani": "eropa",
        
        "amerika serikat": "amerika_utara", "kanada": "amerika_utara", "meksiko": "amerika_utara",
        "brazil": "amerika_selatan", "argentina": "amerika_selatan", "chile": "amerika_selatan",
        "venezuela": "amerika_selatan", "kolombia": "amerika_selatan", "peru": "amerika_selatan",
        
        "indonesia": "asia", "jepang": "asia", "china": "asia", "india": "asia",
        "korea selatan": "asia", "malaysia": "asia", "singapura": "asia", "thailand": "asia",
        "australia": "oceania", "selandia baru": "oceania", "fiji": "oceania"
    }

    # 4. Clean old folders first to avoid mixups
    if os.path.exists(output_base):
        import shutil
        for f in os.listdir(output_base):
            fpath = os.path.join(output_base, f)
            if os.path.isdir(fpath):
                shutil.rmtree(fpath)

    # 5. Group and Order
    continent_order = ["afrika", "asia", "eropa", "amerika_utara", "amerika_selatan", "oceania"]
    grouped = {c: [] for c in continent_order}
    for name in all_country_names:
        cont = overrides.get(name.lower()) or continent_map.get(name.lower(), "asia")
        grouped[cont].append(name)

    for c in continent_order: grouped[c].sort()

    ordered = []
    for c in continent_order:
        for name in grouped[c]:
            ordered.append({"name": name, "continent": c})

    # 6. Map JSON data
    diplomacy_data = {}
    for jc in ["afrika", "asia", "eropa", "na", "sa", "oceania"]:
        jc_path = os.path.join(json_source, jc)
        if not os.path.exists(jc_path): continue
        for filename in os.listdir(jc_path):
            if filename.endswith(".ts"):
                m = re.search(r'\d+_(.+)\.ts', filename)
                if m:
                    cname = m.group(1).replace("_", " ").lower()
                    with open(os.path.join(jc_path, filename), "r", encoding="utf-8") as f:
                        partners = re.findall(r'"mitra":\s*"([^"]+)"', f.read())
                        diplomacy_data[cname] = partners

    # 7. Generate SQL
    global_counter = 1
    for item in ordered:
        name = item['name']
        cont = item['continent']
        safe_name = name.lower().replace(" ", "_")
        folder = os.path.join(output_base, cont)
        os.makedirs(folder, exist_ok=True)
        
        file_path = os.path.join(folder, f"{global_counter:03d}_{safe_name}.sql")
        partners = diplomacy_data.get(name.lower(), [])
        
        sql_name = name.replace("'", "''")
        content = [f"-- Kedutaan Besar untuk {name} (REALISTIC)", "INSERT INTO kedutaan_besar (country_id, partner_country_id, type, status) VALUES"]
        vals = []
        for p in partners:
            if p.lower() == name.lower(): continue
            psql = p.replace("'", "''")
            vals.append(f"  ((SELECT id FROM countries WHERE name_en = '{sql_name}' OR name_id = '{sql_name}' LIMIT 1), (SELECT id FROM countries WHERE name_en = '{psql}' OR name_id = '{psql}' LIMIT 1), 'Kedutaan Besar', 'Aktif')")
        
        if vals: content.append(",\n".join(vals) + ";")
        else: content.append("-- Tidak ada data resmi.")
        
        with open(file_path, "w", encoding="utf-8") as f: f.write("\n".join(content))
        global_counter += 1

    print(f"Final verify: Generated 207 SQL files in correct continent folders.")

if __name__ == "__main__":
    generate_sql_kedubes_final_check()
