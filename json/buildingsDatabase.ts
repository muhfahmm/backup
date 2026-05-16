// @ts-nocheck
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// BUILDINGS DATABASE - SINGLE SOURCE OF TRUTH
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// NOTE: JSON file temporarily removed. Re-add buildings.json to
// src/app/server/go/ folder to re-enable building database.
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

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


// Flatten all buildings for easy lookup

// Interface matching JSON structure
  key: string;
  name: string;
  biaya: number;
  waktu: number;
  sector: string;
}

// Helper function to lookup building by name
}

// Helper function to lookup building by key
}

// Helper function to format currency like Go server
  } else if (amount >= 1_000_000) {
  } else if (amount >= 1_000) {
  }
}

// Helper function to get sector description
    // Produksi
    "Manufaktur": "industri manufaktur",
    "Peternakan": "sektor peternakan",
    "Agrikultur": "sektor pertanian",
    "Perikanan": "sektor perikanan",
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
    "Surveillance": "keamanan internal",
    
    // Armada Militer
  };
  
}

// NOTE: Building database is currently empty.
// To re-enable, restore buildings.json to src/app/server/go/ folder
// and update this file to
