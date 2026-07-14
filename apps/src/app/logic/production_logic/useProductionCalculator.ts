/**
 * React Hook for Production Calculation
 * Provides production management within React components
 * Handles state updates and date-based calculations
 */

import { useState, useCallback } from 'react';
import {
  calculateProductionIncrement,
  calculateBulkProduction,
  formatDate,
  getDaysElapsed,
  isProductionUpdateNeeded
} from './productionCalculatorUser';
import {
  initializeCountryProduction,
  registerProductionBuilding,
  updateProductionForDateChange,
  getProduction,
  getAllProduction,
  resetCountryProduction,
  mergeProductionWithCountryDetail,
  restoreProductionFromCountryDetail,
  CountryProductionState
} from './countryProductionManager';

/**
 * Hook to manage production for a country
 * @param country - Country name
 * @param initialDate - Initial game date
 * @param countryDetail - Country detail object with production data
 * @returns Production state and management functions
 */
export function useCountryProduction(
  country: string,
  initialDate: string,
  countryDetail?: any
) {
  const [productionState, setProductionState] = useState<CountryProductionState>(() => {
    if (countryDetail?.lastProducationUpdateDate) {
      return restoreProductionFromCountryDetail(countryDetail, country);
    }
    return initializeCountryProduction(country, initialDate);
  });

  // Register a production building
  const addProductionBuilding = useCallback((
    resourceKey: string,
    productionPerDay: number,
    unit: string
  ) => {
    setProductionState(prev =>
      registerProductionBuilding(prev, resourceKey, productionPerDay, unit)
    );
  }, []);

  // Update production when game date changes
  const updateForDateChange = useCallback((newDate: string) => {
    setProductionState(prev => updateProductionForDateChange(prev, newDate));
  }, []);

  // Get production for a specific resource
  const getResourceProduction = useCallback((resourceKey: string) => {
    return getProduction(productionState, resourceKey);
  }, [productionState]);

  // Get all production amounts
  const getAllResourceProduction = useCallback(() => {
    return getAllProduction(productionState);
  }, [productionState]);

  // Reset production (on game restart)
  const resetProduction = useCallback((currentDate: string) => {
    setProductionState(prev => resetCountryProduction(prev, currentDate));
  }, []);

  // Export to country detail format
  const exportToCountryDetail = useCallback((countryDetail: any) => {
    return mergeProductionWithCountryDetail(countryDetail, productionState);
  }, [productionState]);

  return {
    productionState,
    addProductionBuilding,
    updateForDateChange,
    getResourceProduction,
    getAllResourceProduction,
    resetProduction,
    exportToCountryDetail
  };
}
