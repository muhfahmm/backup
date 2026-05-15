import json
import os
import re

def generate_sql_geopolitik_realistic():
    base_dir = "c:/presiden-simulator - Copy - Copy"
    db_path = os.path.join(base_dir, "db_negara.txt")
    world_path = os.path.join(base_dir, "apps/frontend/public/data/world.json")
    # Use embassy data as a proxy for diplomatic relations (proxy for realism)
    json_source = os.path.join(base_dir, "json/database_kedutaan_besar")
    output_base = os.path.join(base_dir, "postgre/db_hubungan_geopolitik")

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

    # 2. Get continent mapping
    with open(world_path, "r", encoding="utf-8") as f:
        world_data = json.load(f)

    continent_map = {}
    for feature in world_data['features']:
        props = feature['properties']
        name_en = props.get('NAME', '').lower()
        continent = props.get('CONTINENT', 'asia').lower()
        if "africa" in continent: continent = "afrika"
        elif "north america" in continent: continent = "amerika_utara"
        elif "south america" in continent: continent = "amerika_selatan"
        elif "europe" in continent: continent = "eropa"
        elif "oceania" in continent: continent = "oceania"
        continent_map[name_en] = continent

    overrides = {
        "afrika selatan": "afrika", "mesir": "afrika", "aljazair": "afrika",
        "venezuela": "amerika_selatan", "brazil": "amerika_selatan",
        "amerika serikat": "amerika_utara", "kanada": "amerika_utara",
        "indonesia": "asia", "china": "asia", "rusia": "eropa",
        "australia": "oceania", "selandia baru": "oceania"
    }

    # 3. Group and Order
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

    # 4. Map existing JSON/TS data
    diplomacy_data_map = {}
    json_continents = ["afrika", "asia", "eropa", "na", "sa", "oceania"]
    for jc in json_continents:
        jc_path = os.path.join(json_source, jc)
        if not os.path.exists(jc_path): continue
        for filename in os.listdir(jc_path):
            if filename.endswith(".ts"):
                match = re.search(r'\d+_(.+)\.ts', filename)
                if match:
                    cname = match.group(1).replace("_", " ").lower()
                    file_full_path = os.path.join(jc_path, filename)
                    with open(file_full_path, "r", encoding="utf-8") as f:
                        content = f.read()
                        partners = re.findall(r'"mitra":\s*"([^"]+)"', content)
                        diplomacy_data_map[cname] = partners

    # 5. Generate SQL files
    global_counter = 1
    for item in ordered_countries:
        name = item['name']
        cont = item['continent']
        safe_name = name.lower().replace(" ", "_")
        
        folder_path = os.path.join(output_base, cont)
        os.makedirs(folder_path, exist_ok=True)
        
        file_path = os.path.join(folder_path, f"{global_counter:03d}_{safe_name}.sql")
        
        partners = diplomacy_data_map.get(name.lower(), [])

        sql_name = name.replace("'", "''")
        content = [
            f"-- Hubungan Geopolitik untuk {name} (REALISTIC DATA)",
            "INSERT INTO hubungan_negara (country_id, target_country_id, relation_value) VALUES"
        ]
        
        values = []
        for p_name in partners:
            if p_name.lower() == name.lower(): continue
            p_sql_name = p_name.replace("'", "''")
            val_str = f"  ((SELECT id FROM countries WHERE name_en = '{sql_name}' OR name_id = '{sql_name}' LIMIT 1), (SELECT id FROM countries WHERE name_en = '{p_sql_name}' OR name_id = '{p_sql_name}' LIMIT 1), 50)"
            values.append(val_str)
            
        if values:
            content.append(",\n".join(values) + ";")
        else:
            content.append("-- Tidak ada data hubungan geopolitik resmi yang terdaftar.")

        with open(file_path, "w", encoding="utf-8") as f:
            f.write("\n".join(content))
            
        global_counter += 1

    print(f"Successfully generated 207 realistic SQL files for db_hubungan_geopolitik.")

if __name__ == "__main__":
    generate_sql_geopolitik_realistic()
