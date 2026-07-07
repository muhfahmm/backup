/**
 * Country Landscape Logic
 * Determines whether a country has access to marine resources or not.
 * Uses the comprehensive country geography database for validation.
 */

import { hasMaritimeAccessFromDB, getCountryMaritimeStatus } from './countryGeographyDatabase';

/**
 * Check if a country has maritime access (can build fishing/pearl industries)
 * Uses database-driven approach for accuracy
 * @param countryName - Name of the country (Indonesian or English)
 * @returns true if country has sea access, false if landlocked
 */
export function hasMaritimeAccess(countryName: string): boolean {
  if (!countryName) {
    console.log(`[hasMaritimeAccess] Country name is empty`);
    return true; // Default to true for unknown
  }

  const normalizedName = countryName.toLowerCase().trim();
  
  console.log(`[hasMaritimeAccess] Checking: "${countryName}" (normalized: "${normalizedName}")`);
  
  // Check database first
  const dbResult = hasMaritimeAccessFromDB(countryName);
  
  if (dbResult !== undefined) {
    console.log(`[hasMaritimeAccess] Result: ${dbResult} (from database)`);
    return dbResult;
  }
  
  // Fallback: default to true for unknown countries
  console.log(`[hasMaritimeAccess] Result: TRUE (default - unknown country, not in database)`);
  return true;
}

/**
 * Check if a country is landlocked
 * @param countryName - Name of the country
 * @returns true if landlocked, false otherwise
 */
export function isLandlocked(countryName: string): boolean {
  return !hasMaritimeAccess(countryName);
}

/**
 * Get detailed maritime status for a country
 * @param countryName - Name of the country
 * @returns Object with maritime status details or null if not found
 */
export function getMaritimeStatusDetails(countryName: string) {
  const status = getCountryMaritimeStatus(countryName);
  
  if (!status) {
    return null;
  }
  
  return {
    countryName,
    hasSeaAccess: status.hasSeaAccess,
    englishName: status.englishName,
    isLandlocked: !status.hasSeaAccess
  };
}

/**
 * Get maritime sectors that should be enabled/disabled for a country
 * @param countryName - Name of the country
 * @returns Object with enabled/disabled status for each maritime sector
 */
export function getMaritimeSectorStatus(countryName: string) {
  const hasAccess = hasMaritimeAccess(countryName);
  
  return {
    perikanan: {
      enabled: hasAccess,
      reason: hasAccess ? 'Country has sea access' : 'Country is landlocked - no maritime access'
    },
    udang: {
      enabled: hasAccess,
      reason: hasAccess ? 'Shrimp farming available' : 'No coastal waters available'
    },
    mutiara: {
      enabled: hasAccess,
      reason: hasAccess ? 'Pearl farming available' : 'No pearl beds available'
    },
    ikan: {
      enabled: hasAccess,
      reason: hasAccess ? 'Fish farming available' : 'No fishing waters available'
    }
  };
}

/**
 * Filter maritime buildings that should be clickable for a country
 * @param countryName - Name of the country
 * @returns Set of building keys that should be disabled
 */
export function getDisabledBuildingsForCountry(countryName: string): Set<string> {
  const hasAccess = hasMaritimeAccess(countryName);
  
  if (hasAccess) {
    return new Set(); // All buildings enabled
  }
  
  // If landlocked, disable all maritime production
  return new Set([
    'udang',
    'mutiara',
    'ikan'
  ]);
}

/**
 * Check if a specific building is available for a country
 * @param buildingKey - Building identifier
 * @param countryName - Country name
 * @returns true if building can be built, false if disabled
 */
export function isBuildingAvailable(buildingKey: string, countryName: string): boolean {
  const disabledBuildings = getDisabledBuildingsForCountry(countryName);
  return !disabledBuildings.has(buildingKey);
}
