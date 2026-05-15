// ═══════════════════════════════════════════════════════════
// BUILDINGS DATABASE - SINGLE SOURCE OF TRUTH
// ═══════════════════════════════════════════════════════════
// NOTE: JSON file temporarily removed. Re-add buildings.json to
// src/app/server/go/ folder to re-enable building database.
// ═══════════════════════════════════════════════════════════

// Empty fallback when JSON is not available
const buildingsData = {
  metadata: {
    version: "0.0",
    description: "Database empty - buildings.json not found",
    totalBuildings: 0
  },
  sectors: {
    produksi: { name: "Produksi", count: 0, items: {} },
    tempat_umum: { name: "Tempat Umum", count: 0, items: {} },
    pertahanan: { name: "Pertahanan", count: 0, items: {} },
    armada_militer: { name: "Armada Militer", count: 0, items: {} }
  }
};

export { buildingsData };

// Flatten all buildings for easy lookup
export const allBuildings: BuildingInfo[] = [];

// Interface matching JSON structure
export interface BuildingInfo {
  key: string;
  name: string;
  biaya: number;
  waktu: number;
  sector: string;
  mainCategory?: string;
  subCategory?: string;
}

// Helper function to lookup building by name
export function findBuildingByName(name: string): BuildingInfo | undefined {
  return allBuildings.find(b => b.name === name);
}

// Helper function to lookup building by key
export function findBuildingByKey(key: string): BuildingInfo | undefined {
  return allBuildings.find(b => b.key === key);
}

// Helper function to format currency like Go server
export function formatCurrency(amount: number): string {
  if (amount >= 1_000_000_000) {
    return `${(amount / 1_000_000_000).toFixed(2)} Miliar`;
  } else if (amount >= 1_000_000) {
    return `${(amount / 1_000_000).toFixed(2)} Juta`;
  } else if (amount >= 1_000) {
    return `${(amount / 1_000).toFixed(2)} Ribu`;
  }
  return amount.toString();
}

// Helper function to get sector description
export function getSectorDescription(sector: string): string {
  const descriptions: Record<string, string> = {
    // Produksi
    "Listrik Nasional": "sektor energi nasional",
    "Mineral Kritis": "sektor pertambangan strategis",
    "Manufaktur": "industri manufaktur",
    "Peternakan": "sektor peternakan",
    "Agrikultur": "sektor pertanian",
    "Perikanan": "sektor perikanan",
    "Olahan Pangan": "industri pengolahan pangan",
    "Farmasi": "industri farmasi",
    
    // Tempat Umum
    "Infrastruktur": "infrastruktur dan transportasi",
    "Pendidikan": "sektor pendidikan",
    "Kesehatan": "sektor kesehatan",
    "Hukum": "sistem peradilan dan hukum",
    "Olahraga": "fasilitas olahraga",
    "Komersial": "sektor komersial",
    "Hiburan": "fasilitas rekreasi",
    
    // Pertahanan
    "Intelijen": "sistem intelijen nasional",
    "Produksi Militer": "industri pertahanan",
    "Komando Polisi": "keamanan internal",
    "Pendidikan Polisi": "keamanan internal",
    "Polisi Wilayah": "keamanan internal",
    "Armada Polisi": "keamanan internal",
    "Surveillance": "keamanan internal",
    "Manajemen Pertahanan": "sistem pertahanan nasional",
    
    // Armada Militer
    "Armada Darat": "kekuatan darat",
    "Armada Laut": "kekuatan maritim",
    "Armada Udara": "kekuatan udara",
  };
  
  return descriptions[sector] || "pembangunan nasional";
}

// NOTE: Building database is currently empty.
// To re-enable, restore buildings.json to src/app/server/go/ folder
// and update this file to import from JSON.

console.log("[DB] Building database is empty - buildings.json not found");
