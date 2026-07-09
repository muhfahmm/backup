/**
 * Tax Calculator
 * 
 * Calculates income tax using various methods via Rust WASM backend.
 */

import { TaxConfiguration, TaxBracket, TaxCalculation } from '../types/incomeOutcomeTypes';
import { getWasmModule } from '../wasm/wasmLoader';

/**
 * Flat tax rate configuration
 * Single tax rate applied to all income
 */
export const FLAT_TAX_CONFIG: TaxConfiguration = {
  name: 'Flat Tax',
  baseTaxRateBps: 1500, // 15%
  brackets: [],
  deductionsAllowed: 0,
};

/**
 * Progressive tax rate configuration
 * 
 * Brackets:
 * - 0 - 10,000: 5%
 * - 10,001 - 50,000: 10%
 * - 50,001+: 15%
 */
export const PROGRESSIVE_TAX_CONFIG: TaxConfiguration = {
  name: 'Progressive Tax',
  baseTaxRateBps: 0,
  brackets: [
    { minIncome: 0, maxIncome: 10_000, taxRateBps: 500 }, // 5%
    { minIncome: 10_001, maxIncome: 50_000, taxRateBps: 1000 }, // 10%
    { minIncome: 50_001, maxIncome: Infinity, taxRateBps: 1500 }, // 15%
  ],
  deductionsAllowed: 0,
};

/**
 * Calculate income tax using flat rate
 * 
 * @param grossIncome - Income before tax
 * @param taxRateBps - Tax rate in basis points
 * @returns Tax amount
 */
export async function calculateFlatTax(
  grossIncome: number,
  taxRateBps: number
): Promise<number> {
  try {
    const wasm = await getWasmModule();

    const tax = wasm.calculate_income_tax(grossIncome, taxRateBps);

    return tax;
  } catch (error) {
    console.error('Failed to calculate flat tax:', error);
    throw new Error(`Flat tax calculation failed: ${error}`);
  }
}

/**
 * Calculate income tax using progressive brackets
 * 
 * @param grossIncome - Income before tax
 * @returns Tax amount
 */
export async function calculateProgressiveTax(
  grossIncome: number
): Promise<number> {
  try {
    const wasm = await getWasmModule();

    const tax = wasm.calculate_progressive_tax(grossIncome);

    return tax;
  } catch (error) {
    console.error('Failed to calculate progressive tax:', error);
    throw new Error(`Progressive tax calculation failed: ${error}`);
  }
}

/**
 * Calculate complete tax with deductions and net income
 * 
 * @param grossIncome - Income before tax
 * @param config - Tax configuration
 * @returns Complete tax calculation breakdown
 */
export async function calculateTaxWithDeductions(
  grossIncome: number,
  config: TaxConfiguration = PROGRESSIVE_TAX_CONFIG
): Promise<TaxCalculation> {
  // Calculate taxable income after deductions
  const taxableIncome = Math.max(0, grossIncome - config.deductionsAllowed);

  // Calculate tax based on configuration
  let taxAmount: number;

  if (config.brackets.length > 0) {
    // Progressive taxation
    taxAmount = await calculateProgressiveTax(taxableIncome);
  } else {
    // Flat taxation
    taxAmount = await calculateFlatTax(taxableIncome, config.baseTaxRateBps);
  }

  return {
    grossIncome,
    deductions: config.deductionsAllowed,
    taxableIncome,
    taxAmount,
    netIncome: grossIncome - taxAmount,
  };
}

/**
 * Get effective tax rate percentage
 * 
 * @param taxAmount - Tax amount paid
 * @param grossIncome - Gross income
 * @returns Effective tax rate as percentage (0-100)
 */
export function getEffectiveTaxRate(taxAmount: number, grossIncome: number): number {
  if (grossIncome === 0) return 0;
  return (taxAmount / grossIncome) * 100;
}

/**
 * Estimate tax for a given income without actual calculation
 * (useful for UI previews)
 * 
 * @param grossIncome - Income amount
 * @param estimatedTaxRatePercent - Estimated tax rate
 * @returns Estimated tax amount
 */
export function estimateTax(
  grossIncome: number,
  estimatedTaxRatePercent: number
): number {
  return Math.round(grossIncome * (estimatedTaxRatePercent / 100));
}
