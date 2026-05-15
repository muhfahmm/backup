import json
import os

def generate_sql_kedubes():
    base_dir = "c:/presiden-simulator - Copy - Copy"
    db_path = os.path.join(base_dir, "db_negara.txt")
    world_path = os.path.join(base_dir, "apps/frontend/public/data/world.json")
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

    # 2. Get continent mapping
    with open(world_path, "r", encoding="utf-8") as f:
        world_data = json.load(f)

    continent_map = {}
    for feature in world_data['features']:
        props = feature['properties']
        name_id = props.get('NAME_ID', '').lower()
        name_en = props.get('NAME', '').lower()
        continent = props.get('CONTINENT', 'asia').lower()
        
        if continent == "north america": continent = "amerika_utara"
        elif continent == "south america": continent = "amerika_selatan"
        elif continent == "europe": continent = "eropa"
        elif continent == "africa": continent = "afrika"
        elif continent == "oceania": continent = "oceania"
        
        continent_map[name_id] = continent
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

    # 4. Generate SQL files for kedutaan_besar
    global_counter = 1
    for item in ordered_countries:
        name = item['name']
        cont = item['continent']
        safe_name = name.lower().replace(" ", "_")
        
        folder_path = os.path.join(output_base, cont)
        os.makedirs(folder_path, exist_ok=True)
        
        file_path = os.path.join(folder_path, f"{global_counter:03d}_{safe_name}.sql")
        
        sql_name = name.replace("'", "''")
        content = [
            f"-- Kedutaan Besar untuk {name}",
            "INSERT INTO kedutaan_besar (country_id, partner_country_id, type, status) VALUES"
        ]
        
        values = []
        for target_name in all_country_names:
            if target_name.lower() == name.lower(): continue
            target_sql_name = target_name.replace("'", "''")
            
            val_str = f"  ((SELECT id FROM countries WHERE name_en = '{sql_name}'), (SELECT id FROM countries WHERE name_en = '{target_sql_name}'), 'Kedutaan Besar', 'Aktif')"
            values.append(val_str)
            
        content.append(",\n".join(values) + ";")

        with open(file_path, "w", encoding="utf-8") as f:
            f.write("\n".join(content))
            
        global_counter += 1

    print(f"Successfully generated 207 ordered SQL files for db_kedubes.")

if __name__ == "__main__":
    generate_sql_kedubes()
