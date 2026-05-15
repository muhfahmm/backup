import json
import os
import re

def generate_sql_kendaraan():
    base_dir = "c:/presiden-simulator - Copy - Copy"
    db_path = os.path.join(base_dir, "db_negara.txt")
    world_path = os.path.join(base_dir, "apps/frontend/public/data/world.json")
    json_source = os.path.join(base_dir, "json/database_kendaraan_bermotor")
    output_base = os.path.join(base_dir, "postgre/db_kendaraan")

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

    # 4. Map existing JSON/TS data
    vehicle_data_map = {}
    json_continents = ["afrika", "asia", "eropa", "na", "sa", "oceania"]
    for jc in json_continents:
        jc_path = os.path.join(json_source, jc)
        if not os.path.exists(jc_path): continue
        for filename in os.listdir(jc_path):
            if filename.endswith(".ts"):
                # Extract country name from "XX_country.ts"
                match = re.search(r'\d+_(.+)\.ts', filename)
                if match:
                    cname = match.group(1).replace("_", " ").lower()
                    file_full_path = os.path.join(jc_path, filename)
                    with open(file_full_path, "r", encoding="utf-8") as f:
                        content = f.read()
                        # Simple regex to extract vehicle counts
                        data = {}
                        for vtype in ["sepeda_motor", "mobil", "bus", "truk"]:
                            vmatch = re.search(rf'{vtype}:\s*(\d+)', content)
                            if vmatch:
                                data[vtype] = int(vmatch.group(1))
                        vehicle_data_map[cname] = data

    # 5. Generate SQL files
    global_counter = 1
    for item in ordered_countries:
        name = item['name']
        cont = item['continent']
        safe_name = name.lower().replace(" ", "_")
        
        folder_path = os.path.join(output_base, cont)
        os.makedirs(folder_path, exist_ok=True)
        
        file_path = os.path.join(folder_path, f"{global_counter:03d}_{safe_name}.sql")
        
        # Get data or defaults
        vdata = vehicle_data_map.get(name.lower(), {
            "sepeda_motor": 1000000,
            "mobil": 500000,
            "bus": 5000,
            "truk": 20000
        })

        sql_name = name.replace("'", "''")
        content = [
            f"-- Data Kendaraan untuk {name}",
            "INSERT INTO kendaraan_bermotor (country_id, jenis_kendaraan, jumlah) VALUES"
        ]
        
        values = []
        for vtype, count in vdata.items():
            readable_type = vtype.replace("_", " ").title()
            values.append(f"  ((SELECT id FROM countries WHERE name_en = '{sql_name}'), '{readable_type}', {count})")
            
        content.append(",\n".join(values) + ";")

        with open(file_path, "w", encoding="utf-8") as f:
            f.write("\n".join(content))
            
        global_counter += 1

    print(f"Successfully generated 207 ordered SQL files for db_kendaraan.")

if __name__ == "__main__":
    generate_sql_kendaraan()
