import json
import os

def generate_all_relations():
    base_dir = "c:/presiden-simulator - Copy - Copy"
    db_path = os.path.join(base_dir, "db_negara.txt")
    world_path = os.path.join(base_dir, "apps/frontend/public/data/world.json")
    output_base = os.path.join(base_dir, "json/database_hubungan_antar_negara")

    if not os.path.exists(db_path):
        print(f"Error: {db_path} not found")
        return

    # Read 207 countries from db_negara.txt
    countries = []
    with open(db_path, "r", encoding="utf-8") as f:
        for line in f:
            # Format: "1. [ ] afganistan"
            parts = line.split("] ")
            if len(parts) > 1:
                name = parts[1].strip()
                if name:
                    countries.append(name)

    print(f"Read {len(countries)} countries from db_negara.txt")

    with open(world_path, "r", encoding="utf-8") as f:
        world_data = json.load(f)

    # Continent mapping from world.json
    continent_map = {}
    for feature in world_data['features']:
        props = feature['properties']
        name_id = props.get('NAME_ID', '').lower()
        name_en = props.get('NAME', '').lower()
        continent = props.get('CONTINENT', 'asia').lower()
        
        if continent == "north america": continent = "na"
        elif continent == "south america": continent = "sa"
        elif continent == "europe": continent = "eropa"
        elif continent == "africa": continent = "afrika"
        
        continent_map[name_id] = continent
        continent_map[name_en] = continent

    # Ensure folders exist
    folders = ["afrika", "asia", "eropa", "na", "oceania", "sa"]
    for folder in folders:
        os.makedirs(os.path.join(output_base, folder), exist_ok=True)

    # Generate files for each country
    for i, name in enumerate(countries):
        cid = i + 1
        safe_name = name.lower().replace(" ", "_")
        
        # Determine continent
        continent = continent_map.get(name.lower(), "asia")
        if continent not in folders: continent = "asia"

        file_path = os.path.join(output_base, continent, f"{cid}_{safe_name}.ts")
        var_name = safe_name + "_relations"
        
        content = f"export const {var_name} = [\n"
        for j, target_name in enumerate(countries):
            target_id = j + 1
            relation = 50
            if target_name.lower() == name.lower(): relation = 100
            
            content += f'  {{ id: {target_id}, name: "{target_name.lower()}", relation: {relation} }},\n'
        
        content = content.rstrip(",\n") + "\n];\n"

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)

    print(f"Successfully generated {len(countries)} relationship files in {output_base}")

if __name__ == "__main__":
    generate_all_relations()
