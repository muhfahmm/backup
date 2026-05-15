import * as allEmbassiesImports from "./index";

// Combine all kedutaan into a single registry from the central index
const allEmbassies: Record<string, any> = allEmbassiesImports;

/**
 * Normalizes a country name to snake_case for registry lookup.
 * Handles common special cases where simple replacement isn't enough.
 */
const normalizeCountryName = (name: string): string => {
  if (!name) return "";
  
  // Custom mappings for inconsistently named countries
  const specialCases: Record<string, string> = {
    "Saudi Arabia": "arab_saudi",
    "Arab Saudi": "arab_saudi",
    "South Africa": "afrika_selatan",
    "Afrika Selatan": "afrika_selatan",
    "United Arab Emirates": "uni_emirat_arab",
    "Uni Emirat Arab": "uni_emirat_arab",
    "United States": "amerika_serikat",
    "Amerika Serikat": "amerika_serikat",
    "United Kingdom": "inggris",
    "Great Britain": "inggris",
    "South Korea": "korea_selatan",
    "Korea Selatan": "korea_selatan",
    "North Korea": "korea_utara",
    "Korea Utara": "korea_utara",
    "Dominican Republic": "republik_dominika",
    "Papua New Guinea": "papua_nugini"
  };

  if (specialCases[name]) return specialCases[name];

  return name.toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/-/g, '_')
    .replace(/[()]/g, '');
};

export const getInitialEmbassy = (countryNameEn: string, countryNameId: string, playerCountry: string = "Indonesia"): any => {
  const keyEn = `${normalizeCountryName(countryNameEn)}EmbassyConfig`;
  const keyId = `${normalizeCountryName(countryNameId)}EmbassyConfig`;

  // Try lookup with ID name first, then EN name
  const config = allEmbassies[keyId] || allEmbassies[keyEn];

  // If the config is a function (new dynamic format), call it with playerCountry
  if (typeof config === 'function') {
    return config(playerCountry);
  }

  // Fallback for static objects or missing configs
  return config || {
    level: 0,
    staffSlots: [
      { id: 1, type: "Atase Militer", active: false },
      { id: 2, type: "Atase Ekonomi", active: false },
      { id: 3, type: "Atase Budaya", active: false }
    ],
    facilities: [
      { name: "Sistem Komunikasi", level: 1 },
      { name: "Ruang Intelijen", level: 0 },
      { name: "Sektor Ekonomi", level: 0 }
    ],
    maintenanceCost: 0,
    relationshipBonus: 0
  };
};
