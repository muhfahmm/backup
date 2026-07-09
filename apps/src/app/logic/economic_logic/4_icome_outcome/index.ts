/**
 * Income/Outcome Module
 * 
 * Main entry point for financial calculations using Rust WASM backend.
 * Export all public functions and types for use throughout the application.
 */

// ============================================================================
// TYPES
// ============================================================================

export type {
  IncomeResult,
  MiningIncomeSource,
  IncomeSource,
  TotalIncomeCalculation,
  OutcomeResult,
  MaintenanceCost,
  OperatingCost,
  OutcomeBreakdown,
  TotalOutcomeCalculation,
  DailySettlementResult,
  DailyFinancialReport,
  FinancialState,
  TaxBracket,
  TaxConfiguration,
  TaxCalculation,
  CountryFinancialState,
  IncomeCalculationParams,
  OutcomeCalculationParams,
  SettlementCalculationParams,
  FinancialCalculationResponse,
  DailySettlementResponse,
} from './types/incomeOutcomeTypes';

// ============================================================================
// INCOME CALCULATIONS
// ============================================================================

export {
  calculateMiningIncome,
  calculateTotalMiningIncome,
  calculateGoldIncomeQuick,
} from './income/calculateMiningIncome';

// ============================================================================
// OUTCOME CALCULATIONS
// ============================================================================

export {
  calculateMaintenanceCosts,
  calculateOperatingCosts,
  calculateTotalOutcome,
  calculateQuickOutcome,
} from './outcome/calculateOperatingCosts';

// ============================================================================
// TAX CALCULATIONS
// ============================================================================

export {
  FLAT_TAX_CONFIG,
  PROGRESSIVE_TAX_CONFIG,
  calculateFlatTax,
  calculateProgressiveTax,
  calculateTaxWithDeductions,
  getEffectiveTaxRate,
  estimateTax,
} from './tax/calculateTax';

// ============================================================================
// SETTLEMENT
// ============================================================================

export {
  executeDailySettlement,
  executeWasmSettlement,
  formatSettlementReport,
} from './dailySettlement';

// ============================================================================
// WASM LOADER
// ============================================================================

export {
  getWasmModule,
  reloadWasmModule,
  isWasmAvailable,
  getWasmStatus,
} from './wasm/wasmLoader';
