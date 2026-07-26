# Power Plant Balance Calculations

## Formula
```
Balance = 0.3 × Production - Population/50,000
```

## Plant Capacities
- **Coal (PLTU - Pembangkit Listrik Tenaga Uap)**: 5,000 MW per plant
- **Gas (PLTG - Pembangkit Listrik Tenaga Gas)**: 3,000 MW per plant

## Target Range
**500-1,000 MW balance**

---

## Results by Country

### 1. TANZANIA
**Population**: 59,734,218 (Pop/50k = 1,195)

**Current Configuration**: 0 coal + 2 gas
- Current Production: 6,000 MW
- Current Balance: 1,800 - 1,195 = **605 MW** ✓

**Status**: ✓ **VALID** - Already achieves 500-1,000 MW balance
- **Recommendation**: Keep current configuration [0 coal, 2 gas]
- This is the ONLY combination that achieves the target balance for Tanzania

---

### 2. THAILAND
**Population**: 65,826,149 (Pop/50k = 1,317)

**Current Configuration**: 1 coal + 1 gas
- Current Production: 8,000 MW
- Current Balance: 2,400 - 1,317 = **1,083 MW** ✗ (exceeds target)

**Tested Combinations**:
| Coal | Gas | Production | Balance | Status |
|------|-----|-----------|---------|--------|
| 0 | 2 | 6,000 MW | 483 MW | Too low |
| 1 | 1 | 8,000 MW | 1,083 MW | Too high |
| 1 | 0 | 5,000 MW | 183 MW | Too low |
| 0 | 3 | 9,000 MW | 1,383 MW | Too high |

**Status**: ✗ **NO EXACT SOLUTION** - Cannot achieve 500-1,000 MW balance
- **Closest option**: [0 coal, 2 gas] at 483 MW (17 MW below target)
- Would need to reduce to 0 coal to get closer, but that only gives 483 MW

**Recommendation**: Either:
1. Accept 483 MW balance with [0 coal, 2 gas], or
2. Accept 1,083 MW balance with current [1 coal, 1 gas]

---

### 3. ENGLAND (Inggris)
**Population**: 56,550,138 (Pop/50k = 1,131)

**Current Configuration**: 0 coal + 2 gas
- Current Production: 6,000 MW
- Current Balance: 1,800 - 1,131 = **669 MW** ✓

**Status**: ✓ **VALID** - Already achieves 500-1,000 MW balance
- **Recommendation**: Keep current configuration [0 coal, 2 gas]
- This is the ONLY combination that achieves the target balance for England

---

### 4. FRANCE (Prancis)
**Population**: 67,970,561 (Pop/50k = 1,359)

**Current Configuration**: 1 coal + 1 gas
- Current Production: 8,000 MW
- Current Balance: 2,400 - 1,359 = **1,041 MW** ✗ (exceeds target)

**Tested Combinations**:
| Coal | Gas | Production | Balance | Status |
|------|-----|-----------|---------|--------|
| 1 | 1 | 8,000 MW | 1,041 MW | Too high |
| 0 | 2 | 6,000 MW | 441 MW | Too low |
| 0 | 3 | 9,000 MW | 1,341 MW | Too high |
| 1 | 0 | 5,000 MW | 141 MW | Too low |

**Status**: ✗ **NO EXACT SOLUTION** - Cannot achieve 500-1,000 MW balance
- Gap exists between 441 MW (0 coal, 2 gas) and 1,041 MW (1 coal, 1 gas)
- Current configuration exceeds target by 41 MW

**Recommendation**: Either:
1. Accept 441 MW balance with [0 coal, 2 gas] (reduce 1 gas plant), or
2. Accept 1,041 MW balance with current [1 coal, 1 gas]

---

## Summary

| Country | Current Config | Current Balance | Target Range | Status | Recommended Config |
|---------|---|---|---|---|---|
| Tanzania | 0 coal, 2 gas | 605 MW | 500-1000 | ✓ VALID | 0 coal, 2 gas |
| Thailand | 1 coal, 1 gas | 1,083 MW | 500-1000 | ✗ NO SOLUTION | See analysis |
| England | 0 coal, 2 gas | 669 MW | 500-1000 | ✓ VALID | 0 coal, 2 gas |
| France | 1 coal, 1 gas | 1,041 MW | 500-1000 | ✗ NO SOLUTION | See analysis |

**Conclusion**: 
- **50% Success Rate**: Tanzania and England already have valid configurations
- **50% Problematic**: Thailand and France cannot reach 500-1000 MW target with any coal/gas combination due to granularity of plant sizes (5000 MW coal vs 3000 MW gas jumps)
