const fs = require('fs');
const { Client } = require('pg');

const ID_EN_MAP = {
    'afganistan': 'Afghanistan',
    'afrika selatan': 'South Africa',
    'amerika serikat': 'United States of America',
    'arab saudi': 'Saudi Arabia',
    'belanda': 'Netherlands',
    'belgia': 'Belgium',
    'ceko': 'Czechia',
    'filipina': 'Philippines',
    'finlandia': 'Finland',
    'inggris': 'United Kingdom',
    'irak': 'Iraq',
    'islandia': 'Iceland',
    'italia': 'Italy',
    'jepang': 'Japan',
    'jerman': 'Germany',
    'kamboja': 'Cambodia',
    'kanada': 'Canada',
    'korea selatan': 'South Korea',
    'korea utara': 'North Korea',
    'maroko': 'Morocco',
    'mesir': 'Egypt',
    'norwegia': 'Norway',
    'pantai gading': 'Ivory Coast',
    'polandia': 'Poland',
    'prancis': 'France',
    'rusia': 'Russia',
    'selandia baru': 'New Zealand',
    'spanyol': 'Spain',
    'swedia': 'Sweden',
    'turki': 'Turkey',
    'yunani': 'Greece',
    'papua nugini': 'Papua New Guinea',
    'republik demokratik kongo': 'Dem. Rep. Congo',
    'republik afrika tengah': 'Central African Rep.',
    'timor leste': 'Timor-Leste',
    'uni emirat arab': 'United Arab Emirates'
};

async function populate() {
    const client = new Client({
        user: 'postgres',
        password: 'fahiimsql123_',
        host: 'localhost',
        database: 'db_president_simulator',
        port: 5432
    });

    await client.connect();
    console.log('Connected to DB');

    const geoData = JSON.parse(fs.readFileSync('apps/frontend/public/data/world.json'));
    const nations = await client.query('SELECT id, nama_negara FROM "1_nama_negara"');

    for (const nation of nations.rows) {
        const idName = nation.nama_negara.toLowerCase().trim();
        const enName = ID_EN_MAP[idName] || idName.charAt(0).toUpperCase() + idName.slice(1);
        
        // Find matching feature
        const feature = geoData.features.find(f => 
            f.properties.NAME.toLowerCase() === enName.toLowerCase() ||
            f.properties.NAME_LONG?.toLowerCase() === enName.toLowerCase() ||
            f.properties.FORMAL_EN?.toLowerCase() === enName.toLowerCase()
        );

        if (feature) {
            const lat = feature.properties.LABEL_Y;
            const lng = feature.properties.LABEL_X;
            
            if (lat !== undefined && lng !== undefined) {
                await client.query(
                    'UPDATE "1_nama_negara" SET latitude = $1, longitude = $2 WHERE id = $3',
                    [lat, lng, nation.id]
                );
                console.log(`Updated ${nation.nama_negara} (${enName}): ${lat}, ${lng}`);
            } else {
                console.warn(`No LABEL coordinates for ${nation.nama_negara}`);
            }
        } else {
            console.warn(`No match found for ${nation.nama_negara} (tried ${enName})`);
        }
    }

    await client.end();
    console.log('Finished populating coordinates');
}

populate().catch(console.error);
