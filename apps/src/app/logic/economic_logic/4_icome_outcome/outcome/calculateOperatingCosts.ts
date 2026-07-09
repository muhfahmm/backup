/**
 * Operating Costs Calculator
 * 
 * Calculates maintenance and operational costs for all buildings.
 */

import { OutcomeResult, MaintenanceCost, OperatingCost } from '../types/incomeOutcomeTypes';
import { getWasmModule } from '../wasm/wasmLoader';

/**
 * Calculate daily maintenance costs for all buildings
 * 
 * @param maintenance - Maintenance configuration
 * @returns Maintenance cost for the day
 */
export async function calculateMaintenanceCosts(
  maintenance: MaintenanceCost
): Promise<number> {
  try {
    const wasm = await getWasmModule();

    const cost = wasm.calculate_maintenance_costs(
      maintenance.totalBuildings,
      maintenance.costPerBuilding
    );

    return cost;
  } catch (error) {
    console.error('Failed to calculate maintenance costs:', error);
    throw new Error(`Maintenance cost calculation failed: ${error}`);
  }
}

/**
 * Calculate daily operating costs (salaries, etc.)
 * 
 * @param operations - Operating configuration
 * @returns Operating cost for the day
 */
export async function calculateOperatingCosts(
  operations: OperatingCost
): Promise<number> {
  try {
    const wasm = await getWasmModule();

    const cost = wasm.calculate_operating_costs(
      operations.totalEmployees,
      operations.salaryPerEmployee
    );

    return cost;
  } catch (error) {
    console.error('Failed to calculate operating costs:', error);
    throw new Error(`Operating cost calculation failed: ${error}`);
  }
}

/**
 * Calculate total daily outcome (all costs combined)
 * 
 * @param maintenance - Daily maintenance cost
 * @param operations - Daily operations cost
 * @param other - Other miscellaneous costs
 * @returns Total outcome breakdown
 */
export async function calculateTotalOutcome(
  maintenance: number,
  operations: number,
  other: number = 0
): Promise<OutcomeResult> {
  try {
    const wasm = await getWasmModule();

    const result = wasm.calculate_total_outcome(
      maintenance,
      operations,
      other
    );

    return {
      maintenance: result.maintenance,
      operations: result.operations,
      total: result.total,
    };
  } catch (error) {
    console.error('Failed to calculate total outcome:', error);
    throw new Error(`Total outcome calculation failed: ${error}`);
  }
}

/**
 * Quick calculation combining maintenance and operations
 * 
 * @param totalBuildings - Number of buildings
 * @param maintenancePerBuilding - Daily maintenance per building
 * @param totalEmployees - Total employees
 * @param salaryPerEmployee - Daily salary per employee
 * @param other - Other costs
 * @returns Total outcome result
 */
export async function calculateQuickOutcome(
  totalBuildings: number,
  maintenancePerBuilding: number,
  totalEmployees: number,
  salaryPerEmployee: number,
  other: number = 0
): Promise<OutcomeResult> {
  const maintenance = await calculateMaintenanceCosts({
    totalBuildings,
    costPerBuilding: maintenancePerBuilding,
  });

  const operations = await calculateOperatingCosts({
    totalEmployees,
    salaryPerEmployee,
  });

  return calculateTotalOutcome(maintenance, operations, other);
}
