const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'apps/src/app/page/map_system/map-data.ts');
const text = fs.readFileSync(file, 'utf8');
const dataMatch = text.match(/export const COUNTRIES_DATA = \[([\s\S]*?)\];/);
const capsMatch = text.match(/export const CAPITALS_DATA = \[([\s\S]*?)\];/);
const geoMatch = text.match(/export const WORLD_GEOJSON = `([\s\S]*?)`;/);
if (!dataMatch || !capsMatch || !geoMatch) {
  console.error('Missing data blocks in map-data.ts');
  process.exit(1);
}
const countries = JSON.parse('[' + dataMatch[1] + ']');
const capitals = JSON.parse('[' + capsMatch[1] + ']');
const geo = JSON.parse(geoMatch[1]);
const features = geo.features || [];
const countryIso = new Set(countries.map(c => c.iso.toLowerCase()));
const capitalIso = new Set(capitals.map(c => c.iso.toLowerCase()));
const geoIso = new Set(features.map(f => (f.properties && f.properties.ISO_A2 || '').toLowerCase()).filter(Boolean));
const missingCountries = [...geoIso].filter(x => !countryIso.has(x)).sort();
const missingCapitals = [...geoIso].filter(x => !capitalIso.has(x)).sort();
console.log('COUNTRIES_DATA length', countries.length);
console.log('CAPITALS_DATA length', capitals.length);
console.log('WORLD_GEOJSON features', features.length);
console.log('geoISO count', geoIso.size, 'countryISO count', countryIso.size, 'capitalISO count', capitalIso.size);
console.log('missing in COUNTRIES_DATA', missingCountries.length, missingCountries.join(', '));
console.log('missing in CAPITALS_DATA', missingCapitals.length, missingCapitals.join(', '));
const test = ['ae','cv','us','ca','br','mx','ar','co','ve','pe','cl','ng','eg','za','ke','ci','gh','ma','dz','tz','ug','sd','sn','cm','zw','mz','mw','bf','gn','lr','sl','na','tn','et'];
for (const iso of test) {
  console.log(iso, 'country', countryIso.has(iso), 'capital', capitalIso.has(iso), 'geo', geoIso.has(iso));
}
