import json
import os

def generate_master_countries():
    base_dir = "c:/presiden-simulator - Copy - Copy"
    db_path = os.path.join(base_dir, "db_negara.txt")
    world_path = os.path.join(base_dir, "apps/frontend/public/data/world.json")
    output_base = os.path.join(base_dir, "postgre/sql_negara")

    if not os.path.exists(db_path):
        print(f"Error: {db_path} not found")
        return

    # 1. Read all 207 countries from db_negara.txt
    all_country_names = []
    with open(db_path, "r", encoding="utf-8") as f:
        for line in f:
            parts = line.split("] ")
            if len(parts) > 1:
                name = parts[1].strip()
                if name:
                    all_country_names.append(name)

    # 2. Map data from world.json
    with open(world_path, "r", encoding="utf-8") as f:
        world_data = json.load(f)

    world_map = {}
    for feature in world_data['features']:
        props = feature['properties']
        name_id = props.get('NAME_ID', '').lower()
        name_en = props.get('NAME', '').lower()
        
        data = {
            "code": props.get('ISO_A3', props.get('GU_A3', 'UNK')),
            "name_en": props.get('NAME', 'Unknown'),
            "name_id": props.get('NAME_ID', props.get('NAME', 'Unknown')),
            "capital": props.get('CAPITAL', 'Unknown'),
            "continent": props.get('CONTINENT', 'Asia'),
            "pop": props.get('POP_EST', 1000000),
            "gdp": props.get('GDP_MD_EST', 10000),
            "lon": props.get('LABEL_X', 0),
            "lat": props.get('LABEL_Y', 0)
        }
        
        world_map[name_id] = data
        world_map[name_en] = data

    # 3. Organize by Continent for sequential IDs
    continent_order = ["afrika", "asia", "eropa", "amerika_utara", "amerika_selatan", "oceania"]
    
    def get_cont(name):
        cont = world_map.get(name.lower(), {}).get('continent', 'Asia').lower()
        if "africa" in cont: return "afrika"
        if "north america" in cont: return "amerika_utara"
        if "south america" in cont: return "amerika_selatan"
        if "europe" in cont: return "eropa"
        if "oceania" in cont: return "oceania"
        return "asia"

    grouped = {c: [] for c in continent_order}
    for name in all_country_names:
        c = get_cont(name)
        grouped[c].append(name)
    
    for c in continent_order:
        grouped[c].sort()

    ordered = []
    for c in continent_order:
        for name in grouped[c]:
            ordered.append({"name": name, "continent": c})

    # 4. Generate SQL files
    os.makedirs(output_base, exist_ok=True)
    global_counter = 1
    
    for item in ordered:
        name = item['name']
        cont = item['continent']
        safe_name = name.lower().replace(" ", "_")
        
        folder_path = os.path.join(output_base, cont)
        os.makedirs(folder_path, exist_ok=True)
        
        file_path = os.path.join(folder_path, f"{global_counter:03d}_{safe_name}.sql")
        
        # Get data or defaults
        d = world_map.get(name.lower(), {
            "code": safe_name[:3].upper(),
            "name_en": name,
            "name_id": name,
            "capital": "Unknown",
            "continent": cont.title(),
            "pop": 1000000,
            "gdp": 10000,
            "lon": 0,
            "lat": 0
        })

        sql_name_en = d['name_en'].replace("'", "''")
        sql_name_id = d['name_id'].replace("'", "''")
        sql_capital = d['capital'].replace("'", "''")
        
        # Budget estimate: 15% of GDP
        budget = d['gdp'] * 0.15 * 1000000 # Scaling for millions
        income = d['gdp'] * 1000000

        content = [
            f"-- Master Data Negara: {name}",
            "INSERT INTO countries (id, country_code, name_en, name_id, capital, continent, jumlah_penduduk, anggaran, pendapatan_nasional, lon, lat) VALUES",
            f"  ({global_counter}, '{d['code']}', '{sql_name_en}', '{sql_name_id}', '{sql_capital}', '{cont.title()}', {d['pop']}, {budget:.2f}, {income:.2f}, {d['lon']}, {d['lat']})",
            "ON CONFLICT (id) DO UPDATE SET",
            "  name_en = EXCLUDED.name_en, name_id = EXCLUDED.name_id, capital = EXCLUDED.capital, jumlah_penduduk = EXCLUDED.jumlah_penduduk;"
        ]

        with open(file_path, "w", encoding="utf-8") as f:
            f.write("\n".join(content))
            
        global_counter += 1

    print(f"Successfully generated 207 master country SQL files.")

if __name__ == "__main__":
    generate_master_countries()
