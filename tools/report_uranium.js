const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..', 'json', 'semua_fitur_negara', '1_pembangunan', '1_produksi', '2_sektor_mineral_kritis');
const altLogic = path.join(__dirname, '..', 'apps', 'src', 'app', 'logic', 'uranium_logic', 'uranium_logic.ts');
const logicFile = fs.existsSync(altLogic) ? altLogic : path.join(root, 'uranium_logic.ts');
const allowed = new Set(fs.readFileSync(logicFile,'utf8').split(/\r?\n/).map(l=>l.trim()).filter(Boolean).map(l=>l.toLowerCase().replace(/\s+/g,'_')));

function reportDir(dir){
  const entries = fs.readdirSync(dir,{withFileTypes:true});
  for(const ent of entries){
    const p=path.join(dir,ent.name);
    if(ent.isDirectory()) { reportDir(p); continue; }
    if(!ent.name.endsWith('.ts')) continue;
    const base = path.basename(ent.name,'.ts');
    let countryName = base;
    if(/^\d+_/.test(base)) countryName = base.replace(/^\d+_/,'');
    countryName = countryName.toLowerCase();
    const content = fs.readFileSync(p,'utf8');
    const m = content.match(/uranium\s*:\s*(\d+)/i);
    const val = m ? Number(m[1]) : 0;
    if(val>0 && !allowed.has(countryName)){
      console.log('NON-LIST POSITIVE:', p, 'country=',countryName,'value=',val);
    }
    if(val===0 && allowed.has(countryName)){
      console.log('LIST ZERO:', p, 'country=',countryName,'value=0');
    }
  }
}
reportDir(root);
console.log('report done');
