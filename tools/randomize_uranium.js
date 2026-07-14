const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'json', 'semua_fitur_negara', '1_pembangunan', '1_produksi', '2_sektor_mineral_kritis');
const altLogic = path.join(__dirname, '..', 'apps', 'src', 'app', 'logic', 'uranium_logic', 'uranium_logic.ts');
const logicFile = fs.existsSync(altLogic) ? altLogic : path.join(root, 'uranium_logic.ts');

const allowed = new Set(fs.readFileSync(logicFile,'utf8').split(/\r?\n/).map(l=>l.trim()).filter(Boolean).map(l=>l.toLowerCase().replace(/\s+/g,'_')));

function listFiles(dir){
  let res = [];
  const entries = fs.readdirSync(dir,{withFileTypes:true});
  for(const ent of entries){
    const p = path.join(dir, ent.name);
    if(ent.isDirectory()) res = res.concat(listFiles(p));
    else if(ent.name.endsWith('.ts')) res.push(p);
  }
  return res;
}

const files = listFiles(root);

// collect totals for allowed countries only
const data = [];
for(const f of files){
  const base = path.basename(f,'.ts');
  let countryName = base;
  if(/^\d+_/.test(base)) countryName = base.replace(/^\d+_/, '');
  countryName = countryName.toLowerCase();
  if(!allowed.has(countryName)) continue;
  const content = fs.readFileSync(f,'utf8');
  // sum all numeric values in the object literal
  const matches = content.match(/:\s*(\d+)/g) || [];
  const nums = matches.map(m=>Number(m.replace(/[^0-9]/g,'')));
  const total = nums.reduce((a,b)=>a+b,0);
  data.push({file:f, country: countryName, total, content});
}

if(data.length===0){
  console.log('No allowed countries found in folder.');
  process.exit(0);
}

// compute quantiles
const totals = data.map(d=>d.total).sort((a,b)=>a-b);
const q1 = totals[Math.floor(totals.length/3)];
const q2 = totals[Math.floor((totals.length*2)/3)];

console.log('Quantiles:', {q1,q2});

function randInt(min,max){ return Math.floor(Math.random()*(max-min+1))+min; }

const changes = [];
for(const d of data){
  const tier = d.total <= q1 ? 'poor' : (d.total <= q2 ? 'middle' : 'rich');
  let newVal;
  if(tier==='poor') newVal = randInt(1,10);
  else if(tier==='middle') newVal = randInt(10,15);
  else newVal = randInt(15,25);

  const updated = d.content.replace(/(uranium\s*:\s*)\d+/i, `$1${newVal}`);
  if(updated !== d.content){
    fs.writeFileSync(d.file, updated, 'utf8');
    changes.push({file:d.file, country:d.country, old:d.content.match(/uranium\s*:\s*(\d+)/i)?.[1]||0, new:newVal, tier, total:d.total});
  }
}

console.log('Changed', changes.length, 'files');
for(const c of changes) console.log(c);

