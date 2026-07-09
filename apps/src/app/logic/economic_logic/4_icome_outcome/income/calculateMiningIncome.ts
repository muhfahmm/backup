/**
 * Mining Income Calculator
 * 
 * Calculates income from all mining operations using Rust WASM backend.
 */

import { IncomeResult, MiningIncomeSource } from '../types/incomeOutcomeTypes';
import { getWasmModule } from '../wasm/wasmLoader';

/**
 * Calculate income from gold mining
 * 
 * @param source - Mining source configuration
 * @returns Income calculation result with gross, tax, and net
 */
export async function calculateMiningIncome(
  source: MiningIncomeSource
): Promise<IncomeResult> {
  try {
    const wasm = await getWasmModule();

    // Call Rust WASM function
    const result = wasm.calculate_gold_mining_income(
      source.count,
      source.productionPerDay,
      source.daysElapsed,
      source.taxRateBps
    );

    return {
      gross: result.gross,
      tax: result.tax,
      net: result.net,
    };
  } catch (error) {
    console.error('Failed to calculate mining income:', error);
    throw new Error(`Mining income calculation failed: ${error}`);
  }
}

/**
 * Calculate total mining income from all sources
 * 
 * @param sources - Array of mining sources
 * @returns Total income result
 */
export async function calculateTotalMiningIncome(
  sources: MiningIncomeSource[]
): Promise<IncomeResult> {
  if (sources.length === 0) {
    return { gross: 0, tax: 0, net: 0 };
  }

  let totalGross = 0;
  let totalTax = 0;
  let totalNet = 0;

  for (const source of sources) {
    const result = await calculateMiningIncome(source);
    totalGross += result.gross;
    totalTax += result.tax;
    totalNet += result.net;
  }

  return {
    gross: totalGross,
    tax: totalTax,
    net: totalNet,
  };
}

/**
 * Calculate gold mining income specifically
 * 
 * Convenience function for the most common mining operation.
 * 
 * @param goldMines - Number of gold mines
 * @param production - Production per mine per day (in 100kg units)
 * @param daysElapsed - Days since construction
 * @param taxRateBps - Tax rate in basis points
 * @returns Income result
 */
export async function calculateGoldIncomeQuick(
  goldMines: number,
  production: number,
  daysElapsed: number,
  taxRateBps: number
): Promise<IncomeResult> {
  return calculateMiningIncome({
    type: 'gold',
    count: goldMines,
    productionPerDay: production,
    daysElapsed,
    taxRateBps,
  });
}
