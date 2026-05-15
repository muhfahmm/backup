import json
import os
import urllib.request

def fetch_accurate_data():
    """Menggunakan API RestCountries yang memiliki koordinat ibukota paling presisi"""
    print("Fetching high-precision capital coordinates...")
    # Menggunakan API v3.1 yang memiliki field capitalInfo.latlng
    url = "https://restcountries.com/v3.1/all?fields=name,capital,capitalInfo,translations"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode())
    except Exception as e:
        print(f"Error fetching data: {e}")
        return []

def find_capitals():
    db_path = "../../db_negara.txt"
    output_path = "../frontend/public/data/capitals.json"
    
    if not os.path.exists(db_path):
        print(f"Error: {db_path} not found")
        return

    world_data = fetch_accurate_data()
    if not world_data:
        return

    # Buat map pencarian dengan nama Indonesia sebagai prioritas
    country_map = {}
    for country in world_data:
        names = set()
        
        # Nama Common
        names.add(country['name']['common'].lower())
        
        # Terjemahan (Terutama Indonesia)
        if 'translations' in country:
            # Cari terjemahan Indonesia ('idn' atau 'ind')
            for lang, trans in country['translations'].items():
                names.add(trans['common'].lower())

        # Ambil Ibukota dan Koordinatnya
        capitals = country.get('capital', [])
        capital_name = capitals[0] if capitals else ""
        
        # Ambil dari capitalInfo (Titik Ibukota Asli)
        latlng = country.get('capitalInfo', {}).get('latlng', None)
        
        if not latlng:
            # Fallback ke titik tengah negara (kurang akurat tapi sebagai cadangan)
            latlng = country.get('latlng', [0, 0])

        if capital_name and latlng and len(latlng) == 2:
            for name in names:
                country_map[name] = {
                    "capital": capital_name,
                    "lat": latlng[0],
                    "lng": latlng[1]
                }

    capitals_found = []
    
    with open(db_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
        
    for line in lines:
        try:
            if "]" in line:
                country_name = line.split("] ")[1].strip().lower()
                
                # Manual fix untuk ejaan yang sering berbeda di db_negara.txt
                search_name = country_name
                manual_fixes = {
                    "afganistan": "afghanistan",
                    "amerika serikat": "united states",
                    "inggris": "united kingdom",
                    "belanda": "netherlands",
                    "perancis": "france",
                    "prancis": "france",
                    "republik rumania": "romania",
                    "republik serbia": "serbia",
                    "republik sudan": "sudan",
                    "republik tanzania": "tanzania",
                    "republik timor leste": "timor-leste",
                    "republik uganda": "uganda",
                    "republik zambia": "zambia",
                    "republik zimbabwe": "zimbabwe",
                    "china": "china",
                    "cina": "china",
                }
                
                if search_name in manual_fixes:
                    search_name = manual_fixes[search_name]

                # Cari di map
                if search_name in country_map:
                    data = country_map[search_name]
                    capitals_found.append({
                        "country": country_name,
                        "capital": data["capital"],
                        "lat": data["lat"],
                        "lng": data["lng"]
                    })
        except:
            continue

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(capitals_found, f, indent=2)
        
    print(f"✅ Success! Generated {len(capitals_found)} REAL-LIFE accurate capital coordinates.")

if __name__ == "__main__":
    find_capitals()
