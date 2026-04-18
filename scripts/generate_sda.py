import re
import random

# Function to extract countries from the SQL file
def get_countries():
    countries = []
    try:
        with open('apps/database/1_nama_negara.sql', 'r', encoding='utf-8') as f:
            content = f.read()
            # Matching ('country_name', 'capital', ...)
            matches = re.findall(r"\('(.+?)', '(.+?)',", content)
            for country, capital in matches:
                countries.append(country)
    except Exception as e:
        print(f"Error reading countries: {e}")
    return countries

def generate_sda_sql(countries):
    sql_header = """-- Created At: 2026-04-18
DROP TABLE IF EXISTS "2_sda_negara" CASCADE;

CREATE TABLE IF NOT EXISTS "2_sda_negara" (
    id SERIAL PRIMARY KEY,
    nama_negara VARCHAR(255) UNIQUE NOT NULL, 
    emas INT DEFAULT 0,
    uranium INT DEFAULT 0,
    batu_bara INT DEFAULT 0,
    minyak_bumi INT DEFAULT 0,
    gas_alam INT DEFAULT 0,
    garam INT DEFAULT 0,
    nikel INT DEFAULT 0,
    litium INT DEFAULT 0,
    tembaga INT DEFAULT 0,
    aluminium INT DEFAULT 0,
    logam_tanah_jarang INT DEFAULT 0,
    bijih_besi INT DEFAULT 0
);

INSERT INTO "2_sda_negara" (nama_negara, emas, uranium, batu_bara, minyak_bumi, gas_alam, garam, nikel, litium, tembaga, aluminium, logam_tanah_jarang, bijih_besi) VALUES
"""
    
    rows = []
    for country in countries:
        # Default baseline
        res = {
            'emas': random.randint(0, 5),
            'uranium': random.randint(0, 2),
            'batu_bara': random.randint(0, 10),
            'minyak_bumi': random.randint(0, 5),
            'gas_alam': random.randint(0, 5),
            'garam': random.randint(10, 50),
            'nikel': random.randint(0, 5),
            'litium': random.randint(0, 2),
            'tembaga': random.randint(0, 10),
            'aluminium': random.randint(0, 5),
            'logam_tanah_jarang': random.randint(0, 2),
            'bijih_besi': random.randint(0, 15)
        }

        # Specific Logic for Major Resource Players (Realistic Heuristics)
        name = country.lower()
        
        if 'afrika selatan' in name:
            res.update({'emas': 400, 'uranium': 291, 'batu_bara': 450, 'minyak_bumi': 50, 'gas_alam': 400, 'garam': 200, 'nikel': 40, 'litium': 160, 'tembaga': 80, 'aluminium': 20, 'logam_tanah_jarang': 40, 'bijih_besi': 80})
        elif 'indonesia' in name:
            res.update({'nikel': 500, 'batu_bara': 480, 'emas': 180, 'tembaga': 120, 'minyak_bumi': 95, 'gas_alam': 140, 'bijih_besi': 60})
        elif 'australia' in name:
            res.update({'bijih_besi': 550, 'litium': 480, 'emas': 320, 'uranium': 350, 'batu_bara': 420, 'aluminium': 280})
        elif 'china' in name:
            res.update({'logam_tanah_jarang': 600, 'batu_bara': 580, 'emas': 420, 'bijih_besi': 450, 'aluminium': 400, 'garam': 350})
        elif 'rusia' in name:
            res.update({'gas_alam': 600, 'minyak_bumi': 550, 'batu_bara': 400, 'emas': 350, 'nikel': 280, 'bijih_besi': 250})
        elif 'saudi' in name:
            res.update({'minyak_bumi': 650, 'gas_alam': 350, 'garam': 150})
        elif 'amerika serikat' in name:
            res.update({'gas_alam': 520, 'minyak_bumi': 480, 'batu_bara': 450, 'emas': 250, 'tembaga': 220, 'uranium': 180})
        elif 'brazil' in name:
            res.update({'bijih_besi': 500, 'aluminium': 320, 'minyak_bumi': 280, 'emas': 150})
        elif 'chile' in name:
            res.update({'tembaga': 600, 'litium': 550})
        elif 'kongo' in name or 'demokratik kongo' in name:
            res.update({'tembaga': 450, 'logam_tanah_jarang': 420, 'emas': 180, 'litium': 150})
        elif 'iran' in name:
            res.update({'gas_alam': 580, 'minyak_bumi': 520})
        elif 'irak' in name:
            res.update({'minyak_bumi': 580})
        elif 'uea' in name or 'uni emirat arab' in name:
            res.update({'minyak_bumi': 450, 'gas_alam': 280})
        elif 'qatar' in name:
            res.update({'gas_alam': 550})
        elif 'kanada' in name:
            res.update({'uranium': 420, 'minyak_bumi': 350, 'gas_alam': 320, 'emas': 220})
        elif 'kazakhstan' in name:
            res.update({'uranium': 600, 'minyak_bumi': 180, 'batu_bara': 150})
        elif 'india' in name:
            res.update({'batu_bara': 450, 'bijih_besi': 380, 'garam': 300})
        
        # Format values
        v = (
            f"('{country}', {res['emas']}, {res['uranium']}, {res['batu_bara']}, "
            f"{res['minyak_bumi']}, {res['gas_alam']}, {res['garam']}, {res['nikel']}, "
            f"{res['litium']}, {res['tembaga']}, {res['aluminium']}, {res['logam_tanah_jarang']}, "
            f"{res['bijih_besi']})"
        )
        rows.append(v)
    
    sql_footer = ";\n"
    return sql_header + ",\n".join(rows) + sql_footer

if __name__ == "__main__":
    countries = get_countries()
    if not countries:
        print("No countries found!")
    else:
        print(f"Generated data for {len(countries)} countries.")
        sql_content = generate_sda_sql(countries)
        with open('apps/database/2_sda_negara.sql', 'w', encoding='utf-8') as f:
            f.write(sql_content)
        print("Saved to apps/database/2_sda_negara.sql")
