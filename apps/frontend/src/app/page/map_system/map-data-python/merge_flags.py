import json
import os
import re

def merge_flags():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    world_path = os.path.join(script_dir, "../../../../../public/data/world.json")
    capitals_path = os.path.join(script_dir, "../../../../../public/data/capitals.json")
    output_path = os.path.join(script_dir, "../../../../../public/data/countries_with_flags.json")

    if not os.path.exists(world_path) or not os.path.exists(capitals_path):
        print("Required files missing")
        return

    with open(world_path, "r", encoding="utf-8") as f:
        world_data = json.load(f)

    # Create mapping of name (lower) to ISO_A2
    iso_map = {}
    for feature in world_data['features']:
        props = feature['properties']
        iso = props.get('ISO_A2')
        if iso and iso != '-99':
            # Check multiple name fields
            names = [
                props.get('NAME', '').lower(),
                props.get('NAME_ID', '').lower(),
                props.get('NAME_EN', '').lower(),
                props.get('NAME_LONG', '').lower(),
                props.get('ADMIN', '').lower()
            ]
            for n in names:
                if n:
                    iso_map[n] = iso.lower()

    with open(capitals_path, "r", encoding="utf-8") as f:
        capitals = json.load(f)

    # Manual overrides for common Indonesian names not in world.json
    overrides = {
        "afganistan": "af",
        "afrika selatan": "za",
        "aljazair": "dz",
        "amerika serikat": "us",
        "arab saudi": "sa",
        "argentina": "ar",
        "australia": "au",
        "austria": "at",
        "belanda": "nl",
        "belgia": "be",
        "belarus": "by",
        "bosnia dan herzegovina": "ba",
        "brasil": "br",
        "brazil": "br",
        "britania raya": "gb",
        "bulgaria": "bg",
        "ceko": "cz",
        "chili": "cl",
        "denmark": "dk",
        "emiriah arab bersatu": "ae",
        "uni emirat arab": "ae",
        "estonia": "ee",
        "ethiopia": "et",
        "filipina": "ph",
        "finlandia": "fi",
        "hungaria": "hu",
        "india": "in",
        "indonesia": "id",
        "inggris": "gb",
        "irak": "iq",
        "iran": "ir",
        "islandia": "is",
        "israel": "il",
        "italia": "it",
        "jerman": "de",
        "jepang": "jp",
        "kamboja": "kh",
        "kanada": "ca",
        "kazakhstan": "kz",
        "kenya": "ke",
        "kolombia": "co",
        "korea selatan": "kr",
        "korea utara": "kp",
        "kroasia": "hr",
        "kuwait": "kw",
        "latvia": "lv",
        "lebanon": "lb",
        "libya": "ly",
        "lituania": "lt",
        "luksemburg": "lu",
        "madagaskar": "mg",
        "malaysia": "my",
        "maroko": "ma",
        "meksiko": "mx",
        "mesir": "eg",
        "moldova": "md",
        "monako": "mc",
        "mongolia": "mn",
        "myanmar": "mm",
        "namibia": "na",
        "nepal": "np",
        "nigeria": "ng",
        "norwegia": "no",
        "oman": "om",
        "pakistan": "pk",
        "palestina": "ps",
        "panama": "pa",
        "pantai gading": "ci",
        "papua nugini": "pg",
        "perancis": "fr",
        "prancis": "fr",
        "peru": "pe",
        "polandia": "pl",
        "portugal": "pt",
        "portugis": "pt",
        "qatar": "qa",
        "rumania": "ro",
        "rusia": "ru",
        "selandia baru": "nz",
        "senegal": "sn",
        "serbia": "rs",
        "singapura": "sg",
        "slovakia": "sk",
        "slovenia": "si",
        "spanyol": "es",
        "sri lanka": "lk",
        "sudan": "sd",
        "suriah": "sy",
        "swedia": "se",
        "swis": "ch",
        "swiss": "ch",
        "taiwan": "tw",
        "tajikistan": "tj",
        "tanjung verde": "cv",
        "tanzania": "tz",
        "thailand": "th",
        "timor leste": "tl",
        "tiongkok": "cn",
        "tunisia": "tn",
        "turki": "tr",
        "turkmenistan": "tm",
        "uganda": "ug",
        "ukraina": "ua",
        "uruguay": "uy",
        "uzbekistan": "uz",
        "venezuela": "ve",
        "vietnam": "vn",
        "yaman": "ye",
        "yordania": "jo",
        "yunani": "gr",
        "zambia": "zm",
        "zimbabwe": "zw"
    }

    enriched_countries = []
    for item in capitals:
        name = item['country'].lower()
        iso = iso_map.get(name) or overrides.get(name) or "un"
        
        enriched_countries.append({
            "country": item['country'],
            "capital": item['capital'],
            "lat": item['lat'],
            "lng": item['lng'],
            "iso": iso
        })

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(enriched_countries, f, indent=2)

    print(f"Successfully generated {len(enriched_countries)} countries with flags to {output_path}")

if __name__ == "__main__":
    merge_flags()
