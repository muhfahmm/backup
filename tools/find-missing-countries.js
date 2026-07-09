const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dbPath = path.join(root, 'db_negara.txt');
const mapDataPath = path.join(root, 'apps', 'src', 'app', 'page', 'map_system', 'map-data.ts');

function normalize(s){
  return s.toLowerCase().trim().replace(/\s+/g,' ').replace(/[^a-z0-9 ]/g,'');
}

const db = fs.readFileSync(dbPath,'utf8').split(/\r?\n/).map(l=>{
  // remove numbering and optional checklist markers like "1. [ ] "
  let m = l.replace(/^\s*\d+\.\s*/,'');
  m = m.replace(/^\[?\s*\]?/,'');
  m = m.replace(/^\[\s*\]\s*/,'');
  m = m.trim();
  // some lines may be empty
  return m? normalize(m):null;
}).filter(Boolean);

const mapDataRaw = fs.readFileSync(mapDataPath,'utf8');

// extract COUNTRIES_DATA array
const countriesMatch = mapDataRaw.match(/export const COUNTRIES_DATA = \[([\s\S]*?)\];/m);
if(!countriesMatch){
  console.error('COUNTRIES_DATA not found'); process.exit(1);
}
const countriesJsonText = '['+countriesMatch[1]+']';
let countries;
try{ countries = JSON.parse(countriesJsonText); }catch(e){
  console.error('Failed parsing COUNTRIES_DATA', e); process.exit(1);
}
const existing = new Set(countries.map(c=>normalize(c.country)));

const missing = db.filter(n=>!existing.has(n));

// extract WORLD_GEOJSON
const geoMatch = mapDataRaw.match(/export const WORLD_GEOJSON = `([\s\S]*?)`;/m);
let isoMap = {};
if(geoMatch){
  try{
    const geo = JSON.parse(geoMatch[1]);
    for(const f of geo.features){
      const props = f.properties || {};
      const name_id = props.NAME_ID || props.NAME || props.NAME_LONG || props.ADMIN || '';
      const iso = (props.ISO_A2 || props.ISO_A2_EH || props.POSTAL || props.ISO_A3 || '').toLowerCase();
      if(name_id){
        isoMap[ normalize(String(name_id)) ] = (props.ISO_A2||props.POSTAL||'').toLowerCase();
      }
      // also map english admin
      if(props.ADMIN) isoMap[ normalize(String(props.ADMIN)) ] = (props.ISO_A2||props.POSTAL||'').toLowerCase();
    }
  }catch(e){
    console.error('Failed parsing WORLD_GEOJSON', e);
  }
}

const results = missing.map(name=>{
  const iso = isoMap[name] || isoMap[name.replace(/ dan /g,' & ')] || '';
  return {name, iso};
});

console.log('Total db entries:', db.length);
console.log('Existing COUNTRIES_DATA entries:', countries.length);
console.log('Missing count:', results.length);
for(const r of results) console.log(r.name + ' -> ' + (r.iso||'<no-iso-found>'));

// write results file
fs.writeFileSync(path.join(root,'tools','missing-countries.json'), JSON.stringify(results,null,2));
console.log('Wrote tools/missing-countries.json');
