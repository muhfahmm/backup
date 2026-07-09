/**
 * Income/Outcome Types
 * 
 * Type definitions for financial calculations, integrating with Rust WASM backend.
 * All monetary values are stored as u64 (unsigned 64-bit integers) to prevent precision loss.
 */

// ============================================================================
// INCOME TYPES
// ============================================================================

export interface IncomeResult {
  /** Gross income before tax */
  gross: number;
  /** Tax amount deducted */
  tax: number;
  /** Net income after tax */
  net: number;
}

export interface MiningIncomeSource {
  /** Type of mine (e.g., "gold", "silver", "copper") */
  type: "gold" | "silver" | "copper" | "uranium" | "iron";
  /** Number of mining facilities */
  count: number;
  /** Production amount per facility per day */
  productionPerDay: number;
  /** Number of days passed */
  daysElapsed: number;
  /** Tax rate in basis points (100 = 1%) */
  taxRateBps: number;
}

export interface IncomeSource {
  mining: IncomeResult;
  agriculture?: IncomeResult;
  commerce?: IncomeResult;
  other?: IncomeResult;
}

export interface TotalIncomeCalculation {
  sources: IncomeSource;
  totalGross: number;
  totalTax: number;
  totalNet: number;
  timestamp: Date;
}

// ============================================================================
// OUTCOME TYPES
// ============================================================================

export interface OutcomeResult {
  /** Daily maintenance costs */
  maintenance: number;
  /** Daily operational costs (salaries, etc.) */
  operations: number;
  /** Total daily outcome */
  total: number;
}

export interface MaintenanceCost {
  /** Total number of buildings */
  totalBuildings: number;
  /** Maintenance cost per building per day */
  costPerBuilding: number;
}

export interface OperatingCost {
  /** Total employees across all buildings */
  totalEmployees: number;
  /** Daily salary per employee */
  salaryPerEmployee: number;
}

export interface OutcomeBreakdown {
  maintenance: OutcomeResult;
  operations: OutcomeResult;
  other: number; // Other miscellaneous costs
}

export interface TotalOutcomeCalculation {
  breakdown: OutcomeBreakdown;
  totalMaintenance: number;
  totalOperations: number;
  totalOther: number;
  totalOutcome: number;
  timestamp: Date;
}

// ============================================================================
// SETTLEMENT TYPES
// ============================================================================

export interface DailySettlementResult {
  /** Total net income for the day */
  totalIncome: number;
  /** Total outcome for the day */
  totalOutcome: number;
  /** Net settlement (income - outcome, can be negative) */
  netSettlement: number;
  /** Settlement timestamp in milliseconds */
  timestamp: number;
}

export interface DailyFinancialReport {
  date: Date;
  income: TotalIncomeCalculation;
  outcome: TotalOutcomeCalculation;
  settlement: DailySettlementResult;
  /** Current national treasury balance */
  treasuryBalance: number;
  /** Surplus (positive) or deficit (negative) */
  cashFlow: number;
}

export interface FinancialState {
  /** Current treasury balance */
  treasuryBalance: number;
  /** Accumulated income this period */
  accumulatedIncome: number;
  /** Accumulated outcome this period */
  accumulatedOutcome: number;
  /** Last settlement date */
  lastSettlementDate: Date;
  /** Daily reports history */
  reportsHistory: DailyFinancialReport[];
}

// ============================================================================
// TAX TYPES
// ============================================================================

export interface TaxBracket {
  /** Minimum income for this bracket (inclusive) */
  minIncome: number;
  /** Maximum income for this bracket (exclusive), or Infinity for last bracket */
  maxIncome: number;
  /** Tax rate in basis points (100 = 1%) */
  taxRateBps: number;
}

export interface TaxConfiguration {
  /** Name of tax system (e.g., "Progressive", "Flat") */
  name: string;
  /** Tax brackets for progressive taxation */
  brackets: TaxBracket[];
  /** Base tax rate in BPS for flat taxation */
  baseTaxRateBps: number;
  /** Optional tax deductions (fixed amount) */
  deductionsAllowed: number;
}

export interface TaxCalculation {
  grossIncome: number;
  deductions: number;
  taxableIncome: number;
  taxAmount: number;
  netIncome: number;
}

// ============================================================================
// COUNTRY STATE TYPES
// ============================================================================

/**
 * Minimal country state needed for income/outcome calculations.
 * Maps to countryDetail object structure.
 */
export interface CountryFinancialState {
  // Mining facilities
  emas?: number; // Gold mines (tambang emas)
  uranium?: number;
  batu_bara?: number;
  minyak_bumi?: number;
  
  // Building counts
  total_buildings?: number;
  total_employees?: number;
  
  // Financial state
  kas_negara?: number; // National treasury
  last_settlement_date?: string;
  
  // Dates
  build_date_emas?: string; // Build date for gold mines
}

// ============================================================================
// CALCULATION PARAMETERS
// ============================================================================

export interface IncomeCalculationParams {
  goldMines: number;
  goldProduction: number;
  goldDaysElapsed: number;
  incomeTaxBps: number;
  // More can be added for other income sources
}

export interface OutcomeCalculationParams {
  totalBuildings: number;
  maintenancePerBuilding: number;
  totalEmployees: number;
  salaryPerEmployee: number;
  otherCosts: number;
}

export interface SettlementCalculationParams {
  income: IncomeCalculationParams;
  outcome: OutcomeCalculationParams;
  timestampMs: number;
}

// ============================================================================
// RESPONSE TYPES
// ============================================================================

export interface FinancialCalculationResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: number;
}

export interface DailySettlementResponse {
  success: boolean;
  settlement?: DailySettlementResult;
  report?: DailyFinancialReport;
  error?: string;
  timestamp: number;
}
