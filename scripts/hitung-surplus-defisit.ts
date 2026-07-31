import fs from 'fs';
import path from 'path';
import { Project, SyntaxKind } from 'ts-morph';

// Hardcoded food consumption per capita per 1,000 people per day
// from apps/src/app/page/navigasi_menu/2_navigasi_bawah/3_produksi_konsumsi/2_industri_pangan/logic/produksiKonsumsiLogic.ts
const FOOD_CONSUMPTION_PER_CAPITA: Record<string, number> = {
  // Peternakan
  ayam_unggas: 0.15,
  sapi_potong: 0.08,
  sapi_perah: 0.12,
  domba_kambing: 0.05,
  // Agrikultur
  padi: 0.35,
  gandum: 0.24,
  jagung: 0.18,
  sayur: 0.30,
  umbi: 0.20,
  kedelai: 0.15,
  kelapa_sawit: 0.10,
  kopi: 0.05,
  teh: 0.06,
  kakao: 0.04,
  tebu: 0.15,
  karet: 0.02,
  // Perikanan
  udang: 0.08,
  ikan: 0.25,
  mutiara: 0.01,
  // Olahan Pangan
  air_mineral: 0.35,
  gula: 0.20,
  roti: 0.18,
  pengolahan_daging: 0.10,
  mie_instan: 0.25,
  minyak_goreng: 0.10,
  susu: 0.15,
};

// Multipliers (prodPerUnit) defined in FOOD_SECTORS in IndustriPanganModal.tsx
const MULTIPLIERS: Record<string, number> = {
  // Peternakan
  ayam_unggas: 15,
  sapi_potong: 5,
  sapi_perah: 10,
  domba_kambing: 7,
  // Agrikultur
  padi: 20,
  gandum: 18,
  jagung: 22,
  sayur: 30,
  umbi: 25,
  kedelai: 15,
  kelapa_sawit: 40,
  kopi: 10,
  teh: 12,
  kakao: 8,
  tebu: 35,
  karet: 15,
  // Perikanan
  udang: 12,
  ikan: 25,
  mutiara: 2,
  // Olahan Pangan
  air_mineral: 25,
  gula: 20,
  roti: 15,
  pengolahan_daging: 12,
  mie_instan: 30,
  minyak_goreng: 10,
  susu: 18,
};

const SECTORS = [
  { id: 'peternakan', dir: '4_sektor_peternakan' },
  { id: 'agrikultur', dir: '5_sektor_agrikultur' },
  { id: 'perikanan', dir: '6_sektor_perikanan' },
  { id: 'olahan_pangan', dir: '7_sektor_olahan_pangan' },
];

const ROOT_DIR = path.resolve(__dirname, '..');
const PROFILES_DIR = path.join(ROOT_DIR, 'json', 'semua_fitur_negara', '0_profiles');
const PRODUCTION_ROOT = path.join(ROOT_DIR, 'json', 'semua_fitur_negara', '1_pembangunan', '1_produksi');
const REPORT_PATH = path.join(ROOT_DIR, 'laporan_surplus_defisit.json');

// Helper to generate a random integer in a range [min, max] inclusive
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Search for the optimal building count to satisfy the surplus/deficit range in the UI
function findOptimalCount(totalKonsumsi: number, status: 'surplus' | 'deficit', multiplier: number): number {
  const lowerBound = status === 'surplus' ? 500 : -2000;
  const upperBound = status === 'surplus' ? 5000 : -100;

  // Let's generate a list of possible count values that meet the balance constraint
  const validCounts: number[] = [];
  const startCount = Math.round(totalKonsumsi / multiplier);
  
  // Search within offset of 1000 buildings
  for (let offset = 0; offset <= 1000; offset++) {
    for (const sign of [1, -1]) {
      const count = Math.max(0, startCount + offset * sign);
      const balance = (count * multiplier) - totalKonsumsi;
      if (balance >= lowerBound && balance <= upperBound) {
        if (!validCounts.includes(count)) {
          validCounts.push(count);
        }
      }
    }
  }

  if (validCounts.length > 0) {
    // Return a random choice from the valid counts to keep variety
    return validCounts[Math.floor(Math.random() * validCounts.length)];
  }

  // Fallback to startCount if no valid count is found
  return Math.max(0, startCount);
}

interface Laporan {
  decisions: Record<string, 'surplus' | 'deficit'>;
  results: Record<string, {
    population: number;
    commodities: Record<string, {
      consumption: number;
      oldBuildingCount: number;
      newBuildingCount: number;
      multiplier: number;
      actualOldProduction: number;
      actualNewProduction: number;
      balance: number;
      status: 'surplus' | 'deficit';
    }>;
  }>;
}

function getRelativePath(absolutePath: string): string {
  return path.relative(ROOT_DIR, absolutePath).replace(/\\/g, '/');
}

async function run() {
  console.log('=== MEMULAI AUTOMATION SURPLUS & DEFISIT PANGAN ===');

  let existingLaporan: Laporan = { decisions: {}, results: {} };
  if (fs.existsSync(REPORT_PATH)) {
    try {
      existingLaporan = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf-8'));
      console.log('Laporan sebelumnya ditemukan, keputusan status akan dipertahankan (idempotent).');
    } catch (e) {
      console.warn('Laporan sebelumnya rusak/tidak bisa dibaca. Membuat yang baru.');
    }
  }

  const project = new Project();
  const skippedCommodities = new Set<string>();
  const modifiedFilesBySector: Record<string, number> = {
    peternakan: 0,
    agrikultur: 0,
    perikanan: 0,
    olahan_pangan: 0,
  };

  const newLaporan: Laporan = {
    decisions: { ...existingLaporan.decisions },
    results: {},
  };

  // 1. Scan all country profile files
  const continents = fs.readdirSync(PROFILES_DIR).filter(f => fs.statSync(path.join(PROFILES_DIR, f)).isDirectory());
  
  for (const continent of continents) {
    const continentDir = path.join(PROFILES_DIR, continent);
    const files = fs.readdirSync(continentDir).filter(f => f.endsWith('.ts'));

    for (const file of files) {
      const profilePath = path.join(continentDir, file);
      
      // Parse profile file
      const sourceFile = project.addSourceFileAtPath(profilePath);
      const countryKey = file.replace(/^\d+_/, '').replace(/\.ts$/, '');
      const profileVarName = `${countryKey}_profile`;
      
      const profileVar = sourceFile.getVariableDeclaration(profileVarName);
      if (!profileVar) {
        console.warn(`Profile variable ${profileVarName} not found in ${getRelativePath(profilePath)}`);
        project.removeSourceFile(sourceFile);
        continue;
      }

      const init = profileVar.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
      if (!init) {
        console.warn(`Profile initializer is not an object literal in ${getRelativePath(profilePath)}`);
        project.removeSourceFile(sourceFile);
        continue;
      }

      const jumlahPendudukProp = init.getProperty(p => {
        const name = p.getName().replace(/['"]/g, '');
        return name === 'jumlah_penduduk';
      });

      if (!jumlahPendudukProp || !jumlahPendudukProp.isKind(SyntaxKind.PropertyAssignment)) {
        console.warn(`Property 'jumlah_penduduk' not found in ${getRelativePath(profilePath)}`);
        project.removeSourceFile(sourceFile);
        continue;
      }

      const valNode = jumlahPendudukProp.getInitializer();
      if (!valNode) {
        console.warn(`Property 'jumlah_penduduk' has no value in ${getRelativePath(profilePath)}`);
        project.removeSourceFile(sourceFile);
        continue;
      }

      const population = parseInt(valNode.getText().replace(/_/g, ''), 10);
      project.removeSourceFile(sourceFile);

      newLaporan.results[countryKey] = {
        population,
        commodities: {},
      };

      // 2. Process all 4 production sectors for this country
      for (const sector of SECTORS) {
        const sectorFilePath = path.join(PRODUCTION_ROOT, sector.dir, continent, file);
        if (!fs.existsSync(sectorFilePath)) {
          continue;
        }

        const sectorFile = project.addSourceFileAtPath(sectorFilePath);
        const sectorVarName = `${countryKey}_${sector.id}`;
        const sectorVar = sectorFile.getVariableDeclaration(sectorVarName);

        if (!sectorVar) {
          console.warn(`Sector variable ${sectorVarName} not found in ${getRelativePath(sectorFilePath)}`);
          project.removeSourceFile(sectorFile);
          continue;
        }

        const sectorInit = sectorVar.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
        if (!sectorInit) {
          console.warn(`Sector initializer is not an object literal in ${getRelativePath(sectorFilePath)}`);
          project.removeSourceFile(sectorFile);
          continue;
        }

        let isFileModified = false;
        const properties = sectorInit.getProperties();

        for (const prop of properties) {
          if (!prop.isKind(SyntaxKind.PropertyAssignment)) continue;

          const dataKey = prop.getName().replace(/['"]/g, '');
          const consumptionPerCapita = FOOD_CONSUMPTION_PER_CAPITA[dataKey];

          if (consumptionPerCapita === undefined) {
            skippedCommodities.add(dataKey);
            continue;
          }

          const multiplier = MULTIPLIERS[dataKey] || 1;

          // Read current building count from file
          const oldBuildingCount = parseInt(prop.getInitializer()?.getText().replace(/_/g, '') || '0', 10);
          const actualOldProduction = oldBuildingCount * multiplier;

          // Calculate total consumption
          const totalKonsumsi = Math.round((population / 1000) * consumptionPerCapita);

          // Determine surplus or deficit status
          const decisionKey = `${countryKey}:${dataKey}`;
          let status = newLaporan.decisions[decisionKey];

          // If total consumption is very small, force surplus to avoid invalid range issues
          if (totalKonsumsi < 100) {
            status = 'surplus';
            newLaporan.decisions[decisionKey] = status;
          }

          if (!status) {
            status = Math.random() < 0.5 ? 'surplus' : 'deficit';
            newLaporan.decisions[decisionKey] = status;
          }

          // Calculate optimal building count using findOptimalCount
          const newBuildingCount = findOptimalCount(totalKonsumsi, status, multiplier);
          const actualNewProduction = newBuildingCount * multiplier;

          // Update AST initializer value to the new building count
          prop.setInitializer(String(newBuildingCount));
          isFileModified = true;

          // Record results
          newLaporan.results[countryKey].commodities[dataKey] = {
            consumption: totalKonsumsi,
            oldBuildingCount,
            newBuildingCount,
            multiplier,
            actualOldProduction,
            actualNewProduction,
            balance: actualNewProduction - totalKonsumsi,
            status,
          };
        }

        if (isFileModified) {
          sectorFile.saveSync();
          modifiedFilesBySector[sector.id]++;
        }
        project.removeSourceFile(sectorFile);
      }
    }
  }

  // 3. Validation Phase
  console.log('\n=== VALIDASI PASCA PENULISAN ===');
  let totalValidations = 0;
  let validationErrors = 0;

  for (const [countryKey, info] of Object.entries(newLaporan.results)) {
    for (const [commodity, details] of Object.entries(info.commodities)) {
      totalValidations++;
      const balance = details.actualNewProduction - details.consumption;
      if (details.status === 'surplus') {
        if (balance < 500 || balance > 5000) {
          console.error(`ERROR: ${countryKey} - ${commodity} status is surplus but balance is ${balance} (expected [500, 5000])`);
          validationErrors++;
        }
      } else {
        if (balance > -100 || balance < -2000) {
          // Allow exception only if building count is 0 and population is too small to reach -100
          if (details.newBuildingCount === 0 && balance > -100) {
            // This is expected and handled
          } else {
            console.error(`ERROR: ${countryKey} - ${commodity} status is deficit but balance is ${balance} (expected [-2000, -100])`);
            validationErrors++;
          }
        }
      }
    }
  }

  if (validationErrors > 0) {
    console.error(`\nValidasi gagal dengan ${validationErrors} error dari ${totalValidations} total pengecekan.`);
    process.exit(1);
  } else {
    console.log(`\nSemua ${totalValidations} pengecekan validasi BERHASIL.`);
  }

  // Save the report file
  fs.writeFileSync(REPORT_PATH, JSON.stringify(newLaporan, null, 2), 'utf-8');
  console.log(`Laporan surplus & defisit berhasil disimpan ke: ${REPORT_PATH}`);

  // Summary output
  console.log('\n=== RINGKASAN MODIFIKASI FILE ===');
  for (const [sector, count] of Object.entries(modifiedFilesBySector)) {
    console.log(`- Sektor ${sector}: ${count} file berhasil diperbarui.`);
  }
  
  if (skippedCommodities.size > 0) {
    console.log(`\nKomoditas yang dilewati karena tidak ada data konsumsi: ${Array.from(skippedCommodities).join(', ')}`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
