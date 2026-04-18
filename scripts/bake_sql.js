const fs = require('fs');
const path = require('path');

// Paths
const worldPath = path.join(__dirname, '../apps/frontend/public/data/world.json');
const sqlPath = path.join(__dirname, '../apps/database/init_nations.sql');

try {
    const worldData = JSON.parse(fs.readFileSync(worldPath, 'utf8'));
    const sqlContent = fs.readFileSync(sqlPath, 'utf8');

    // Mappings for tricky names
    const manualMapping = {
        'afrika selatan': 'South Africa',
        'amerika serikat': 'United States of America',
        'arab saudi': 'Saudi Arabia',
        'bahama': 'Bahamas',
        'belanda': 'Netherlands',
        'belgia': 'Belgium',
        'bosnia dan hercegovina': 'Bosnia and Herz.',
        'brazil': 'Brazil',
        'ceko': 'Czechia',
        'china': 'China',
        'filipina': 'Philippines',
        'finlandia': 'Finland',
        'inggris': 'United Kingdom',
        'irak': 'Iraq',
        'italia': 'Italy',
        'jepang': 'Japan',
        'jerman': 'Germany',
        'kamboja': 'Cambodia',
        'kamerun': 'Cameroon',
        'kanada': 'Canada',
        'korea selatan': 'South Korea',
        'korea utara': 'North Korea',
        'kroasia': 'Croatia',
        'meksiko': 'Mexico',
        'mesir': 'Egypt',
        'pantai gading': 'Côte d\'Ivoire',
        'peru': 'Peru',
        'polandia': 'Poland',
        'prancis': 'France',
        'rusia': 'Russia',
        'singapura': 'Singapore',
        'spanyol': 'Spain',
        'swiss': 'Switzerland',
        'turki': 'Turkey',
        'ukraina': 'Ukraine',
        'vatikan': 'Vatican',
        'yunani': 'Greece'
    };

    const lines = sqlContent.split('\n');
    const updatedLines = lines.map(line => {
        const trimmmed = line.trim();
        // Check if it's a data line: starting with (' and ending with ), or );
        if (trimmmed.startsWith("('") && (trimmmed.endsWith("),") || trimmmed.endsWith(");"))) {
            // Kita ambil nama dengan mencari penutup kutip pertama yang diikuti koma
            // Mengingat ada kemungkinan '' (escaped quote)
            try {
                // Regex standar SQL untuk menangkap string literal dengan escaped quotes ('')
                const partsMatch = trimmmed.match(/\('((?:''|[^'])*)',\s*'((?:''|[^'])*)',\s*(\d+),\s*(\d+)\)/);
                
                if (partsMatch) {
                    const name = partsMatch[1].replace(/''/g, "'");
                    const ibukota = partsMatch[2];
                    const pop = partsMatch[3];
                    const anggaran = partsMatch[4];
                    const suffix = trimmmed.endsWith(");") ? ");" : "),";

                    const engName = manualMapping[name.toLowerCase()] || name;
                    
                    const feature = worldData.features.find(f => 
                        f.properties.NAME.toLowerCase() === engName.toLowerCase() ||
                        f.properties.NAME_LONG.toLowerCase() === engName.toLowerCase() ||
                        f.properties.FORMAL_EN?.toLowerCase() === engName.toLowerCase()
                    );

                    let lat = 0;
                    let lng = 0;

                    if (feature) {
                        lat = feature.properties.LABEL_Y !== undefined ? feature.properties.LABEL_Y : feature.geometry.type === 'Point' ? feature.geometry.coordinates[1] : 0;
                        lng = feature.properties.LABEL_X !== undefined ? feature.properties.LABEL_X : feature.geometry.type === 'Point' ? feature.geometry.coordinates[0] : 0;
                    }

                    return `('${partsMatch[1]}', '${ibukota}', ${pop}, ${anggaran}, ${lat}, ${lng})${suffix === ');' ? ';' : ','}`;
                }
            } catch (e) {
                console.error('Error processing line:', trimmmed);
            }
        }
        return line;
    });

    fs.writeFileSync(sqlPath, updatedLines.join('\n'));
    console.log('Successfully baked coordinates into SQL!');
} catch (error) {
    console.error('Error baking SQL:', error.message);
}
