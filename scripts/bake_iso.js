const fs = require('fs');
const path = require('path');

// Target file
const sqlPath = path.join(__dirname, '../apps/database/init_nations.sql');
const worldPath = path.join(__dirname, '../apps/frontend/public/data/world.json');

// Read data
const sqlContent = fs.readFileSync(sqlPath, 'utf8');
const worldData = JSON.parse(fs.readFileSync(worldPath, 'utf8'));

// Create Name -> ISO map from GeoJSON
// We check NAME (EN), NAME_LONG, and NAME_ID (Indonesian if available)
const isoMap = {};
worldData.features.forEach(f => {
    const iso = f.properties.ISO_A3;
    if (!iso || iso === '-99') return;

    const names = [
        f.properties.NAME,
        f.properties.NAME_LONG,
        f.properties.FORMAL_EN,
        f.properties.NAME_ID, // Use NAME_ID for Indonesian mapping
        f.properties.NAME_EN,
        f.properties.NAME_ES,
        f.properties.NAME_FR
    ].filter(n => n);

    names.forEach(n => {
        isoMap[n.toLowerCase()] = iso;
    });
});

// Manual Fixes for Indonesian names that might not be in NAME_ID
const manualMapping = {
    'amerika serikat': 'USA',
    'inggris': 'GBR',
    'jepang': 'JPN',
    'rusia': 'RUS',
    'arab saudi': 'SAU',
    'korea selatan': 'KOR',
    'korea utara': 'PRK',
    'uni emirat arab': 'ARE',
    'filipina': 'PHL',
    'italia': 'ITA',
    'jerman': 'DEU',
    'spanyol': 'ESP',
    'perancis': 'FRA',
    'prancis': 'FRA',
    'belanda': 'NLD',
    'swiss': 'CHE',
    'turki': 'TUR',
    'tanzania': 'TZA',
    'afrika selatan': 'ZAF',
    'republik afrika tengah': 'CAF',
    'republik demokratik kongo': 'COD',
    'kongo': 'COG',
    'pantai gading': 'CIV',
    'timor leste': 'TLS',
    'republik rumania': 'ROU',
    'republik serbia': 'SRB',
    'republik sudan': 'SDN',
    'republik tanzania': 'TZA',
    'republik timor leste': 'TLS',
    'republik uganda': 'UGA',
    'republik zambia': 'ZMB',
    'republik zimbabwe': 'ZWE',
    'sintra lanka': 'LKA',
    'bahama': 'BHS',
    'ceko': 'CZE',
    'ekuador': 'ECU',
    'hungaria': 'HUN',
    'islandia': 'ISL',
    'kamboja': 'KHM',
    'kirgizstan': 'KGZ',
    'meksiko': 'MEX',
    'mesir': 'EGY',
    'moldova': 'MDA',
    'nikaragua': 'NIC',
    'polandia': 'POL',
    'selandia baru': 'NZL',
    'suriah': 'SYR',
    'tajikistan': 'TJK',
    'ukraina': 'UKR',
    'uni emirat arab': 'ARE',
    'uzbekistan': 'UZB',
    'yaman': 'YEM',
    'yordania': 'JOR',
    'yunani': 'GRC'
};

// Process SQL
const lines = sqlContent.split('\n');
let updatedLines = lines.map(line => {
    // Detect INSERT rows: ('name', 'city', pop, budget, lat, lng)
    // We update it to: ('name', 'city', pop, budget, lat, lng, 'iso')
    const trimmmed = line.trim();
    if (trimmmed.startsWith("('") && (trimmmed.endsWith("),") || trimmmed.endsWith(");"))) {
        const partsMatch = trimmmed.match(/\('((?:''|[^'])*)',\s*'((?:''|[^'])*)',\s*(\d+),\s*(\d+),\s*([-.\d]+),\s*([-.\d]+)\)/);
        if (partsMatch) {
            const name = partsMatch[1].replace(/''/g, "'");
            const iso = manualMapping[name.toLowerCase()] || isoMap[name.toLowerCase()] || 'UNK';
            const suffix = trimmmed.endsWith(");") ? ");" : "),";
            
            // Reconstruct with ISO Code
            return `('${partsMatch[1]}', '${partsMatch[2]}', ${partsMatch[3]}, ${partsMatch[4]}, ${partsMatch[5]}, ${partsMatch[6]}, '${iso}')${suffix === ');' ? ';' : ','}`;
        }
    }
    
    // Update CREATE TABLE
    if (line.includes('longitude NUMERIC')) {
        return line + ',\n    kode_negara VARCHAR(3)';
    }

    // Update INSERT INTO header
    if (line.startsWith('INSERT INTO "1_nama_negara"')) {
        return line.replace('longitude)', 'longitude, kode_negara)');
    }

    return line;
});

fs.writeFileSync(sqlPath, updatedLines.join('\n'));
console.log('Successfully baked ISO codes into SQL!');
