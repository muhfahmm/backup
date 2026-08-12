#!/usr/bin/env node
/**
 * Build script to generate country data index
 * Runs before deployment to create fast lookup index for country file paths
 * Reduces API response time from ~1.5-2s to ~100ms
 */

const fs = require('fs');
const path = require('path');

function buildCountryIndex() {
  try {
    const projectRoot = __dirname.endsWith('scripts') ? path.join(__dirname, '..') : __dirname;
    const jsonRoot = path.join(projectRoot, 'json');
    
    // Load country-paths mapping
    const countryPathsFile = path.join(projectRoot, 'apps/src/app/page/map_system/country-paths.json');
    const countryPaths = JSON.parse(fs.readFileSync(countryPathsFile, 'utf8').replace(/^\uFEFF/, ''));
    
    const countryIndex = {};
    
    for (const [countryName, profileRelPath] of Object.entries(countryPaths)) {
      const countryKey = profileRelPath.replace(/\.ts$/, '').replace(/^0_profiles\//, '');
      const targetFilename = path.basename(profileRelPath);
      
      const files = {
        profile: [],
        level: null,
        tax: null,
        embassy: null,
        armada: [],
        extraction: [],
      };
      
      // 1. Find profile files matching targetFilename
      const profileRoot = path.join(jsonRoot, 'semua_fitur_negara/0_profiles');
      if (fs.existsSync(profileRoot)) {
        const findProfiles = (dir) => {
          const entries = fs.readdirSync(dir, { withFileTypes: true });
          for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
              findProfiles(fullPath);
            } else if (entry.name === targetFilename) {
              files.profile.push(path.relative(jsonRoot, fullPath));
            }
          }
        };
        findProfiles(profileRoot);
      }
      
      // 2. Check level cabinet file
      const levelPath = path.join(jsonRoot, `database_level_kabinet/${profileRelPath}`);
      if (fs.existsSync(levelPath)) {
        files.level = path.relative(jsonRoot, levelPath);
      }
      
      // 3. Check tax file
      const taxPath = path.join(jsonRoot, `database_pajak_negara/${profileRelPath}`);
      if (fs.existsSync(taxPath)) {
        files.tax = path.relative(jsonRoot, taxPath);
      }
      
      // 4. Check embassy file
      const embassyPath = path.join(jsonRoot, `database_kedutaan_besar/${profileRelPath}`);
      if (fs.existsSync(embassyPath)) {
        files.embassy = path.relative(jsonRoot, embassyPath);
      }
      
      // 5. Find armada files matching targetFilename
      const armadaRoot = path.join(jsonRoot, 'semua_fitur_negara/2_pertahanan/3_armada_militer');
      if (fs.existsSync(armadaRoot)) {
        const findArmada = (dir) => {
          const entries = fs.readdirSync(dir, { withFileTypes: true });
          for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
              findArmada(fullPath);
            } else if (entry.name === targetFilename) {
              files.armada.push(path.relative(jsonRoot, fullPath));
            }
          }
        };
        findArmada(armadaRoot);
      }
      
      // 6. Find extraction files matching targetFilename
      const ekstraksiRoot = path.join(jsonRoot, 'semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis');
      if (fs.existsSync(ekstraksiRoot)) {
        const findExtraction = (dir) => {
          const entries = fs.readdirSync(dir, { withFileTypes: true });
          for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
              findExtraction(fullPath);
            } else if (entry.name === targetFilename) {
              files.extraction.push(path.relative(jsonRoot, fullPath));
            }
          }
        };
        findExtraction(ekstraksiRoot);
      }
      
      countryIndex[countryKey] = {
        name: countryName,
        files: files
      };
    }
    
    // Write index file
    const indexPath = path.join(projectRoot, 'json/.country-index.json');
    fs.writeFileSync(indexPath, JSON.stringify(countryIndex, null, 2), 'utf8');
    
    console.log(`✓ Country index built: ${indexPath}`);
    console.log(`✓ Indexed ${Object.keys(countryIndex).length} countries`);
    
    // Count files
    let totalFiles = 0;
    for (const entry of Object.values(countryIndex)) {
      const files = entry.files;
      totalFiles += files.profile.length + (files.level ? 1 : 0) + (files.tax ? 1 : 0) + 
                    (files.embassy ? 1 : 0) + files.armada.length + files.extraction.length;
    }
    console.log(`✓ Total files indexed: ${totalFiles}`);
    
  } catch (err) {
    console.error('✗ Failed to build country index:', err);
    process.exit(1);
  }
}

buildCountryIndex();
