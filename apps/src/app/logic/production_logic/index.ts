/**
 * Production Logic Module
 * Handles daily production calculations for all building types
 * Tracks accumulation from 0 to calculated amounts based on game date progression
 */

export {
  calculateProductionIncrement,
  calculateBulkProduction,
  getDaysElapsed,
  formatDate,
  updateProduction,
  isProductionUpdateNeeded,
  type ProductionTracker
} from './productionCalculatorUser';

export {
  initializeCountryProduction,
  registerProductionBuilding,
  updateProductionForDateChange,
  getProduction,
  getAllProduction,
  resetCountryProduction,
  mergeProductionWithCountryDetail,
  restoreProductionFromCountryDetail,
  type CountryProductionState
} from './countryProductionManager';

export {
  useCountryProduction
} from './useProductionCalculator';

export {
  calculateStockpile,
  formatStockDisplay,
  isStockSufficientForExport
} from './stockpileCalculator';

export {
  calculatePartnerProductionAI,
  normalizePartnerBuildDates
} from './productionCalculatorAI';
