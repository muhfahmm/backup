use wasm_bindgen::prelude::*;

// ============================================================================
// TYPES & STRUCTURES
// ============================================================================

#[wasm_bindgen]
#[derive(Clone, Copy, Debug)]
pub struct IncomeResult {
    pub gross: u64,
    pub tax: u64,
    pub net: u64,
}

#[wasm_bindgen]
#[derive(Clone, Copy, Debug)]
pub struct OutcomeResult {
    pub maintenance: u64,
    pub operations: u64,
    pub total: u64,
}

#[wasm_bindgen]
#[derive(Clone, Copy, Debug)]
pub struct DailySettlementResult {
    pub total_income: u64,
    pub total_outcome: u64,
    pub net_settlement: i64,
    pub timestamp: u64,
}

// ============================================================================
// INCOME CALCULATIONS
// ============================================================================

/// Calculate income from gold mining
/// 
/// # Arguments
/// * `gold_mines` - Number of gold mining facilities
/// * `production_rate` - Production per mine per day (in 100kg units)
/// * `days_elapsed` - Number of days passed
/// * `tax_rate_bps` - Tax rate in basis points (100 = 1%)
#[wasm_bindgen]
pub fn calculate_gold_mining_income(
    gold_mines: u32,
    production_rate: u64,
    days_elapsed: u32,
    tax_rate_bps: u32,
) -> IncomeResult {
    if gold_mines == 0 || days_elapsed == 0 {
        return IncomeResult {
            gross: 0,
            tax: 0,
            net: 0,
        };
    }

    // Calculate gross: mines * production * days
    let gross = (gold_mines as u64)
        .saturating_mul(production_rate)
        .saturating_mul(days_elapsed as u64);

    // Calculate tax: gross * (tax_rate / 10000)
    // e.g., 1500 BPS = 15% tax
    let tax = gross
        .saturating_mul(tax_rate_bps as u64)
        .saturating_div(10000);

    let net = gross.saturating_sub(tax);

    IncomeResult { gross, tax, net }
}

/// Calculate income from all mining operations
/// 
/// Supports: Gold, Silver, Copper, etc.
#[wasm_bindgen]
pub fn calculate_total_mining_income(
    gold_mines: u32,
    gold_production: u64,
    gold_days: u32,
    gold_tax_bps: u32,
) -> IncomeResult {
    calculate_gold_mining_income(gold_mines, gold_production, gold_days, gold_tax_bps)
}

/// Calculate tax amount from gross income
#[wasm_bindgen]
pub fn calculate_income_tax(gross: u64, tax_rate_bps: u32) -> u64 {
    gross
        .saturating_mul(tax_rate_bps as u64)
        .saturating_div(10000)
}

// ============================================================================
// OUTCOME CALCULATIONS
// ============================================================================

/// Calculate daily maintenance cost for all buildings
/// 
/// # Arguments
/// * `total_buildings` - Total number of buildings
/// * `maintenance_cost_per_building` - Daily cost per building (in smallest unit)
#[wasm_bindgen]
pub fn calculate_maintenance_costs(
    total_buildings: u32,
    maintenance_cost_per_building: u64,
) -> u64 {
    (total_buildings as u64).saturating_mul(maintenance_cost_per_building)
}

/// Calculate operating costs (salaries, operations, etc.)
/// 
/// # Arguments
/// * `total_employees` - Total employees across all buildings
/// * `salary_per_employee` - Daily salary per employee
#[wasm_bindgen]
pub fn calculate_operating_costs(
    total_employees: u32,
    salary_per_employee: u64,
) -> u64 {
    (total_employees as u64).saturating_mul(salary_per_employee)
}

/// Calculate total daily outcome
#[wasm_bindgen]
pub fn calculate_total_outcome(
    maintenance: u64,
    operations: u64,
    other_costs: u64,
) -> OutcomeResult {
    let total = maintenance
        .saturating_add(operations)
        .saturating_add(other_costs);

    OutcomeResult {
        maintenance,
        operations,
        total,
    }
}

// ============================================================================
// SETTLEMENT CALCULATIONS
// ============================================================================

/// Main daily settlement function
/// 
/// Calculates total income, total outcome, and net result for the day
/// Returns can be negative if outcome > income
#[wasm_bindgen]
pub fn daily_settlement(
    // Income parameters
    gold_mines: u32,
    gold_production: u64,
    gold_days: u32,
    income_tax_bps: u32,
    
    // Outcome parameters
    total_buildings: u32,
    maintenance_per_building: u64,
    total_employees: u32,
    salary_per_employee: u64,
    other_costs: u64,
    
    // Timestamp
    timestamp_ms: u64,
) -> DailySettlementResult {
    // Calculate income (after tax)
    let income = calculate_gold_mining_income(
        gold_mines,
        gold_production,
        gold_days,
        income_tax_bps,
    );

    // Calculate outcome
    let maintenance = calculate_maintenance_costs(total_buildings, maintenance_per_building);
    let operations = calculate_operating_costs(total_employees, salary_per_employee);
    let total_outcome = maintenance
        .saturating_add(operations)
        .saturating_add(other_costs);

    // Calculate net settlement (can be negative!)
    let net = (income.net as i64).saturating_sub(total_outcome as i64);

    DailySettlementResult {
        total_income: income.net,
        total_outcome,
        net_settlement: net,
        timestamp: timestamp_ms,
    }
}

// ============================================================================
// TAX CALCULATIONS
// ============================================================================

/// Calculate progressive tax based on income bracket
/// 
/// Tax brackets (example):
/// 0 - 10,000: 5% (500 BPS)
/// 10,001 - 50,000: 10% (1000 BPS)
/// 50,001+: 15% (1500 BPS)
#[wasm_bindgen]
pub fn calculate_progressive_tax(gross_income: u64) -> u64 {
    if gross_income == 0 {
        return 0;
    }

    let tax = if gross_income <= 10_000 {
        gross_income.saturating_mul(500).saturating_div(10000)
    } else if gross_income <= 50_000 {
        let bracket1 = 10_000u64.saturating_mul(500).saturating_div(10000);
        let bracket2 = (gross_income - 10_000)
            .saturating_mul(1000)
            .saturating_div(10000);
        bracket1.saturating_add(bracket2)
    } else {
        let bracket1 = 10_000u64.saturating_mul(500).saturating_div(10000);
        let bracket2 = 40_000u64.saturating_mul(1000).saturating_div(10000);
        let bracket3 = (gross_income - 50_000)
            .saturating_mul(1500)
            .saturating_div(10000);
        bracket1.saturating_add(bracket2).saturating_add(bracket3)
    };

    tax
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/// Convert BPS (basis points) to percentage
/// e.g., 1500 BPS = 15%
#[wasm_bindgen]
pub fn bps_to_percentage(bps: u32) -> f64 {
    (bps as f64) / 100.0
}

/// Convert percentage to BPS
/// e.g., 15% = 1500 BPS
#[wasm_bindgen]
pub fn percentage_to_bps(percentage: f64) -> u32 {
    (percentage * 100.0) as u32
}

/// Get current unix timestamp
#[wasm_bindgen]
pub fn get_timestamp() -> u64 {
    std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .map(|d| d.as_millis() as u64)
        .unwrap_or(0)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_gold_mining_income() {
        let result = calculate_gold_mining_income(5, 150, 30, 1500);
        assert_eq!(result.gross, 22_500); // 5 * 150 * 30
        assert_eq!(result.tax, 3_375); // 22_500 * 15%
        assert_eq!(result.net, 19_125); // 22_500 - 3_375
    }

    #[test]
    fn test_maintenance_costs() {
        let cost = calculate_maintenance_costs(100, 50);
        assert_eq!(cost, 5_000); // 100 * 50
    }

    #[test]
    fn test_operating_costs() {
        let cost = calculate_operating_costs(1000, 100);
        assert_eq!(cost, 100_000); // 1000 * 100
    }

    #[test]
    fn test_daily_settlement() {
        let result = daily_settlement(
            5, 150, 30, 1500,  // income params
            100, 50, 1000, 100, 5000,  // outcome params
            1704067200000,  // timestamp
        );
        
        assert_eq!(result.total_income, 19_125);
        assert_eq!(result.total_outcome, 110_000);
        assert_eq!(result.net_settlement, 19_125 - 110_000);
    }

    #[test]
    fn test_progressive_tax() {
        let tax1 = calculate_progressive_tax(5_000);
        assert_eq!(tax1, 250); // 5_000 * 5%

        let tax2 = calculate_progressive_tax(30_000);
        // 10_000 * 5% + 20_000 * 10% = 500 + 2_000 = 2_500
        assert_eq!(tax2, 2_500);
    }
}
