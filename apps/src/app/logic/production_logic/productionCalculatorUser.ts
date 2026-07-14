/**
 * Production Calculator Logic for User buildings
 * Calculates daily production increments based on:
 * - Building production rate (units per day)
 * - Number of buildings
 * - Days elapsed since last calculation
 * - Game date progression
 */

/**
 * Represents a production tracker for a single resource
 */
export interface ProductionTracker {
  resourceKey: string;
  totalProduction: number;
  lastCalculationDate: string; // YYYY-MM-DD format
  buildingCount: number;
  productionPerDay: number;
  unit: string;
}

/**
 * Calculate production increment based on days elapsed
 * @param productionPerDay - Production amount per day
 * @param buildingCount - Number of buildings producing
 * @param startDate - Start date (YYYY-MM-DD)
 * @param endDate - End date (YYYY-MM-DD)
 * @returns Total production accumulated
 */
export function calculateProductionIncrement(
  productionPerDay: number,
  buildingCount: number,
  startDate: string,
  endDate: string
): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  // Calculate days elapsed
  const timeMs = end.getTime() - start.getTime();
  const daysElapsed = Math.max(0, Math.ceil(timeMs / (1000 * 60 * 60 * 24)));
  
  // Total production = production per day × building count × days elapsed
  const totalProduction = productionPerDay * buildingCount * daysElapsed;
  
  console.log(`[Production] ${productionPerDay}/day × ${buildingCount} buildings × ${daysElapsed} days = ${totalProduction} total`);
  
  return totalProduction;
}

/**
 * Get days elapsed between two dates
 * @param startDate - Start date (YYYY-MM-DD)
 * @param endDate - End date (YYYY-MM-DD)
 * @returns Days elapsed
 */
export function getDaysElapsed(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  const timeMs = end.getTime() - start.getTime();
  return Math.max(0, Math.ceil(timeMs / (1000 * 60 * 60 * 24)));
}

/**
 * Format date to YYYY-MM-DD
 * @param date - JavaScript Date object
 * @returns Formatted date string
 */
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Calculate production for multiple resources
 * @param resources - Array of resource configs with production rates
 * @param buildingCounts - Map of resource key to building count
 * @param lastCalculationDate - Last date calculation was done
 * @param currentDate - Current game date
 * @returns Map of resource key to production amount
 */
export function calculateBulkProduction(
  resources: Array<{ key: string; produksi: number; satuan: string }>,
  buildingCounts: Record<string, number>,
  lastCalculationDate: string,
  currentDate: string
): Record<string, { production: number; newTotal: number; unit: string }> {
  const result: Record<string, { production: number; newTotal: number; unit: string }> = {};
  
  for (const resource of resources) {
    const buildingCount = buildingCounts[resource.key] || 0;
    
    if (buildingCount > 0) {
      const productionIncrement = calculateProductionIncrement(
        resource.produksi,
        buildingCount,
        lastCalculationDate,
        currentDate
      );
      
      result[resource.key] = {
        production: productionIncrement,
        newTotal: productionIncrement, // Will be added to existing total
        unit: resource.satuan
      };
    }
  }
  
  return result;
}

/**
 * Update production value with increment
 * @param currentProduction - Current production amount
 * @param increment - Amount to add
 * @returns Updated production amount
 */
export function updateProduction(
  currentProduction: number,
  increment: number
): number {
  return currentProduction + increment;
}

/**
 * Check if production calculation is needed
 * (i.e., if dates are different)
 * @param lastDate - Last calculation date
 * @param currentDate - Current date
 * @returns true if calculation should be done
 */
export function isProductionUpdateNeeded(
  lastDate: string,
  currentDate: string
): boolean {
  return lastDate !== currentDate && getDaysElapsed(lastDate, currentDate) > 0;
}
