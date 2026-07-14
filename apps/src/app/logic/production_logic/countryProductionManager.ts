/**
 * Country Production Manager
 * Manages production state for a country including:
 * - Tracking production accumulation per building type
 * - Updating production when game date changes
 * - Persisting production data
 */

import {
  calculateProductionIncrement,
  calculateBulkProduction,
  formatDate,
  getDaysElapsed,
  isProductionUpdateNeeded
} from './productionCalculatorUser';

/**
 * Country production state
 */
export interface CountryProductionState {
  country: string;
  lastProducationUpdateDate: string; // YYYY-MM-DD
  production: Record<string, number>; // resourceKey -> accumulated production
  buildingCounts: Record<string, number>; // resourceKey -> number of buildings
  productionRates: Record<string, { produksi: number; satuan: string }>; // resourceKey -> production config
}

/**
 * Initialize production state for a country
 * @param country - Country name
 * @param currentDate - Current game date
 * @returns Initialized production state
 */
export function initializeCountryProduction(
  country: string,
  currentDate: string
): CountryProductionState {
  return {
    country,
    lastProducationUpdateDate: currentDate,
    production: {},
    buildingCounts: {},
    productionRates: {}
  };
}

/**
 * Register a production building for a country
 * @param state - Current production state
 * @param resourceKey - Resource key (e.g., 'emas', 'uranium')
 * @param productionPerDay - Daily production amount
 * @param unit - Unit of measurement (e.g., 'KG', 'TON')
 * @returns Updated state
 */
export function registerProductionBuilding(
  state: CountryProductionState,
  resourceKey: string,
  productionPerDay: number,
  unit: string
): CountryProductionState {
  const updated = { ...state };
  
  // Initialize if not exists
  if (!updated.production[resourceKey]) {
    updated.production[resourceKey] = 0;
  }
  if (!updated.buildingCounts[resourceKey]) {
    updated.buildingCounts[resourceKey] = 0;
  }
  
  // Increment building count
  updated.buildingCounts[resourceKey]++;
  
  // Store production rate
  updated.productionRates[resourceKey] = {
    produksi: productionPerDay,
    satuan: unit
  };
  
  console.log(
    `[Production] Registered ${resourceKey}: +1 building (now ${updated.buildingCounts[resourceKey]} total), ` +
    `production rate: ${productionPerDay} ${unit}/day`
  );
  
  return updated;
}

/**
 * Update production based on game date change
 * @param state - Current production state
 * @param newDate - New game date (YYYY-MM-DD)
 * @returns Updated state with accumulated production
 */
export function updateProductionForDateChange(
  state: CountryProductionState,
  newDate: string
): CountryProductionState {
  const lastDate = state.lastProducationUpdateDate;
  
  // Check if update is needed
  if (!isProductionUpdateNeeded(lastDate, newDate)) {
    console.log(`[Production] No update needed: date hasn't changed (${lastDate})`);
    return state;
  }
  
  const daysElapsed = getDaysElapsed(lastDate, newDate);
  console.log(`[Production] Updating production: ${daysElapsed} days elapsed since ${lastDate}`);
  
  const updated = { ...state };
  updated.production = { ...state.production };
  
  // Calculate production for each resource
  for (const [resourceKey, buildingCount] of Object.entries(state.buildingCounts)) {
    if (buildingCount > 0 && state.productionRates[resourceKey]) {
      const rate = state.productionRates[resourceKey];
      const increment = calculateProductionIncrement(
        rate.produksi,
        buildingCount,
        lastDate,
        newDate
      );
      
      updated.production[resourceKey] = (state.production[resourceKey] || 0) + increment;
      
      console.log(
        `[Production] ${resourceKey}: +${increment} ${rate.satuan} ` +
        `(total: ${updated.production[resourceKey]})`
      );
    }
  }
  
  // Update last calculation date
  updated.lastProducationUpdateDate = newDate;
  
  return updated;
}

/**
 * Get production amount for a resource
 * @param state - Production state
 * @param resourceKey - Resource key
 * @returns Production amount
 */
export function getProduction(
  state: CountryProductionState,
  resourceKey: string
): number {
  return state.production[resourceKey] || 0;
}

/**
 * Get all production amounts
 * @param state - Production state
 * @returns Object with all production amounts
 */
export function getAllProduction(state: CountryProductionState): Record<string, number> {
  return { ...state.production };
}

/**
 * Reset production for a country (on game restart)
 * @param state - Current production state
 * @param currentDate - Current game date
 * @returns Reset production state
 */
export function resetCountryProduction(
  state: CountryProductionState,
  currentDate: string
): CountryProductionState {
  const reset = { ...state };
  reset.production = {}; // Clear all production
  reset.lastProducationUpdateDate = currentDate;
  
  console.log(`[Production] Reset production for ${state.country}`);
  
  return reset;
}

/**
 * Merge country data with production tracking
 * Used to persist production to country detail
 * @param countryDetail - Current country detail object
 * @param productionState - Production state
 * @returns Updated country detail with production data
 */
export function mergeProductionWithCountryDetail(
  countryDetail: any,
  productionState: CountryProductionState
): any {
  const updated = { ...countryDetail };
  
  // Add production amounts to country detail
  for (const [resourceKey, amount] of Object.entries(productionState.production)) {
    updated[`production_${resourceKey}`] = amount;
  }
  
  // Add metadata
  updated.lastProducationUpdateDate = productionState.lastProducationUpdateDate;
  
  return updated;
}

/**
 * Restore production state from country detail
 * @param countryDetail - Country detail object
 * @param country - Country name
 * @returns Production state restored from country detail
 */
export function restoreProductionFromCountryDetail(
  countryDetail: any,
  country: string
): CountryProductionState {
  const state = initializeCountryProduction(
    country,
    countryDetail.lastProducationUpdateDate || formatDate(new Date())
  );
  
  // Restore production values
  for (const [key, value] of Object.entries(countryDetail)) {
    if (key.startsWith('production_')) {
      const resourceKey = key.replace('production_', '');
      state.production[resourceKey] = value as number;
    }
  }
  
  return state;
}
