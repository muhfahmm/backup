import * as allAgreementsImports from "./index";

// Combine all perjanjian into a single registry from the central index
const allAgreements: Record<string, any[]> = allAgreementsImports;

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

export const getInitialAgreements = (countryNameEn: string, countryNameId: string): any[] => {
  const keyEn = `${normalizeCountryName(countryNameEn)}Agreements`;
  const keyId = `${normalizeCountryName(countryNameId)}Agreements`;

  // Try lookup with ID name first, then EN name
  return allAgreements[keyId] || allAgreements[keyEn] || [];
};
