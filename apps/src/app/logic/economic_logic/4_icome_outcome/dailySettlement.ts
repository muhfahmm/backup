/**
 * Daily Settlement Orchestrator
 * 
 * Main entry point for daily financial calculations.
 * Coordinates income, outcome, and settlement calculations.
 */

import {
  DailySettlementResult,
  DailyFinancialReport,
  SettlementCalculationParams,
  CountryFinancialState,
  IncomeCalculationParams,
  OutcomeCalculationParams,
} from './types/incomeOutcomeTypes';
import { getWasmModule } from './wasm/wasmLoader';
import { calculateMiningIncome } from './income/calculateMiningIncome';
import { calculateQuickOutcome } from './outcome/calculateOperatingCosts';
import { calculateTaxWithDeductions, PROGRESSIVE_TAX_CONFIG } from './tax/calculateTax';
import { formatDate } from '../production_logic';

/**
 * Execute daily settlement for a country
 * 
 * This is the main function called once per day to:
 * 1. Calculate all income sources
 * 2. Calculate all outcome sources
 * 3. Apply taxes
 * 4. Calculate net settlement
 * 5. Update treasury balance
 * 
 * @param countryState - Current country financial state
 * @param currentDate - Current simulation date
 * @returns Daily settlement report
 */
export async function executeDailySettlement(
  countryState: CountryFinancialState,
  currentDate: Date
): Promise<DailyFinancialReport> {
  try {
    const timestamp = currentDate.getTime();

    // ========================================================================
    // STEP 1: CALCULATE INCOME
    // ========================================================================

    let totalIncome = 0;

    // Mining income (primary source: gold)
    if ((countryState.emas ?? 0) > 0) {
      const goldBuildDate = countryState.build_date_emas || formatDate(currentDate);
      const daysElapsed = Math.ceil(
        (new Date(formatDate(currentDate)).getTime() - new Date(goldBuildDate).getTime()) /
          (1000 * 60 * 60 * 24)
      );

      const goldIncome = await calculateMiningIncome({
        type: 'gold',
        count: countryState.emas,
        productionPerDay: 150, // From metadata
        daysElapsed,
        taxRateBps: 1500, // 15% tax
      });

      totalIncome += goldIncome.net;
    }

    // ========================================================================
    // STEP 2: CALCULATE OUTCOME
    // ========================================================================

    let totalOutcome = 0;

    if ((countryState.total_buildings ?? 0) > 0) {
      const outcome = await calculateQuickOutcome(
        countryState.total_buildings ?? 0,
        50, // maintenance per building (configurable)
        countryState.total_employees ?? 0,
        100, // salary per employee (configurable)
        0 // other costs
      );

      totalOutcome = outcome.total;
    }

    // ========================================================================
    // STEP 3: CALCULATE NET SETTLEMENT
    // ========================================================================

    const netSettlement = totalIncome - totalOutcome;

    // ========================================================================
    // STEP 4: UPDATE TREASURY
    // ========================================================================

    const currentTreasury = countryState.kas_negara ?? 0;
    const newTreasury = Math.max(0, currentTreasury + netSettlement);

    // ========================================================================
    // STEP 5: BUILD REPORT
    // ========================================================================

    const report: DailyFinancialReport = {
      date: currentDate,
      income: {
        sources: {
          mining: {
            gross: totalIncome > 0 ? Math.round(totalIncome / 0.85) : 0, // Reverse tax
            tax: totalIncome > 0 ? Math.round((totalIncome / 0.85) * 0.15) : 0,
            net: totalIncome,
          },
        },
        totalGross: totalIncome > 0 ? Math.round(totalIncome / 0.85) : 0,
        totalTax: totalIncome > 0 ? Math.round((totalIncome / 0.85) * 0.15) : 0,
        totalNet: totalIncome,
        timestamp: currentDate,
      },
      outcome: {
        breakdown: {
          maintenance: {
            maintenance: Math.round(totalOutcome * 0.6), // Estimate 60% maintenance
            operations: 0,
            total: Math.round(totalOutcome * 0.6),
          },
          operations: {
            maintenance: 0,
            operations: Math.round(totalOutcome * 0.4), // Estimate 40% operations
            total: Math.round(totalOutcome * 0.4),
          },
          other: 0,
        },
        totalMaintenance: Math.round(totalOutcome * 0.6),
        totalOperations: Math.round(totalOutcome * 0.4),
        totalOther: 0,
        totalOutcome,
        timestamp: currentDate,
      },
      settlement: {
        totalIncome,
        totalOutcome,
        netSettlement,
        timestamp: Math.floor(timestamp / 1000), // Convert to seconds
      },
      treasuryBalance: newTreasury,
      cashFlow: netSettlement,
    };

    return report;
  } catch (error) {
    console.error('[Settlement] Daily settlement failed:', error);
    throw new Error(`Daily settlement calculation failed: ${error}`);
  }
}

/**
 * Execute settlement using Rust WASM directly
 * 
 * For advanced users who want to call Rust backend directly.
 * 
 * @param params - Settlement calculation parameters
 * @returns Raw WASM settlement result
 */
export async function executeWasmSettlement(
  params: SettlementCalculationParams
): Promise<DailySettlementResult> {
  try {
    const wasm = await getWasmModule();

    const result = wasm.daily_settlement(
      params.income.goldMines,
      params.income.goldProduction,
      params.income.goldDaysElapsed,
      params.income.incomeTaxBps,
      params.outcome.totalBuildings,
      params.outcome.maintenancePerBuilding,
      params.outcome.totalEmployees,
      params.outcome.salaryPerEmployee,
      params.outcome.otherCosts,
      params.timestampMs
    );

    return {
      totalIncome: result.total_income,
      totalOutcome: result.total_outcome,
      netSettlement: result.net_settlement,
      timestamp: result.timestamp,
    };
  } catch (error) {
    console.error('[Settlement] WASM settlement failed:', error);
    throw new Error(`WASM settlement calculation failed: ${error}`);
  }
}

/**
 * Format settlement report as readable text
 * 
 * @param report - Daily financial report
 * @returns Formatted text summary
 */
export function formatSettlementReport(report: DailyFinancialReport): string {
  const date = report.date.toLocaleDateString('id-ID');

  return `
┌─────────────────────────────────────────────────────┐
│ DAILY FINANCIAL REPORT - ${date}
├─────────────────────────────────────────────────────┤
│ INCOME
│  Total Gross:     Rp ${report.income.totalGross.toLocaleString('id-ID')}
│  Total Tax:       Rp ${report.income.totalTax.toLocaleString('id-ID')}
│  Total Net:       Rp ${report.income.totalNet.toLocaleString('id-ID')}
├─────────────────────────────────────────────────────┤
│ OUTCOME
│  Maintenance:     Rp ${report.outcome.totalMaintenance.toLocaleString('id-ID')}
│  Operations:      Rp ${report.outcome.totalOperations.toLocaleString('id-ID')}
│  Total Outcome:   Rp ${report.outcome.totalOutcome.toLocaleString('id-ID')}
├─────────────────────────────────────────────────────┤
│ SETTLEMENT
│  Cash Flow:       ${report.cashFlow >= 0 ? '+' : ''}Rp ${report.cashFlow.toLocaleString('id-ID')}
│  Treasury Before: Rp ${(report.treasuryBalance - report.cashFlow).toLocaleString('id-ID')}
│  Treasury After:  Rp ${report.treasuryBalance.toLocaleString('id-ID')}
└─────────────────────────────────────────────────────┘
`;
}
