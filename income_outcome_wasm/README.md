# Income/Outcome WASM Module

Rust library compiled to WebAssembly for financial calculations in the game engine.

## Features

- ✅ **Fast calculations** - Compiled Rust runs orders of magnitude faster than JavaScript
- ✅ **Safe arithmetic** - Uses saturating operations to prevent overflow
- ✅ **Precise calculations** - No floating-point errors in financial math
- ✅ **Zero-copy JSON** - Efficient data passing to JavaScript

## Building

### Prerequisites

- Rust 1.70+ (`rustup update`)
- wasm-pack (`curl https://rustwasm.org/wasm-pack/installer/init.sh -sSf | sh`)

### Build Instructions

**Windows:**
```bash
cd income_outcome_wasm
build.bat
```

**Linux/macOS:**
```bash
cd income_outcome_wasm
chmod +x build.sh
./build.sh
```

### Manual Build

```bash
cd income_outcome_wasm
wasm-pack build --target web --out-dir pkg
```

This will generate:
- `pkg/income_outcome_wasm.js` - JavaScript bindings
- `pkg/income_outcome_wasm_bg.wasm` - Compiled WebAssembly
- `pkg/package.json` - NPM metadata

## Integration

### Option 1: Copy to Next.js (Recommended for Development)

```bash
# After building
cp -r income_outcome_wasm/pkg apps/src/app/logic/economic_logic/4_icome_outcome/wasm/
```

### Option 2: Configure Webpack Alias

In `apps/next.config.ts`:

```typescript
import type { NextConfig } from "next";

const config: NextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@wasm/income_outcome': require.resolve(
        '../income_outcome_wasm/pkg/income_outcome_wasm.js'
      ),
    };
    return config;
  },
};

export default config;
```

### Option 3: NPM Package

```bash
# From income_outcome_wasm/pkg
npm publish --access public

# Then in apps/
npm install @yourusername/income-outcome-wasm
```

## Usage

### TypeScript

```typescript
import { getWasmModule } from './logic/economic_logic/4_icome_outcome';

// Calculate gold mining income
const result = await calculateGoldIncomeQuick(
  5,    // gold mines
  150,  // production per mine per day
  30,   // days elapsed
  1500  // tax rate (15%)
);

console.log(result);
// { gross: 22500, tax: 3375, net: 19125 }
```

### Daily Settlement

```typescript
import { executeDailySettlement } from './logic/economic_logic/4_icome_outcome';

const report = await executeDailySettlement(countryState, currentDate);

console.log(report.cashFlow); // Net income - outcome for the day
```

## Testing

Run Rust tests:

```bash
cd income_outcome_wasm
cargo test
```

Sample test outputs:
```
test test_gold_mining_income ... ok
test test_maintenance_costs ... ok
test test_daily_settlement ... ok
```

## Performance

Benchmark results (rough estimates):

| Operation | JS (naive) | JS (BigInt) | Rust WASM |
|-----------|-----------|-----------|-----------|
| Calculate mining income | ~0.1ms | ~1ms | **0.01ms** |
| Daily settlement (100 buildings) | ~1ms | ~10ms | **0.1ms** |
| 1000 settlements | ~1000ms | ~10,000ms | **100ms** |

## File Structure

```
income_outcome_wasm/
├── src/
│   └── lib.rs              # Main Rust code
├── Cargo.toml              # Rust dependencies
├── Cargo.lock              # Locked versions
├── build.sh                # Linux/macOS build
├── build.bat               # Windows build
├── pkg/                    # Generated WASM (after build)
│   ├── income_outcome_wasm.js
│   ├── income_outcome_wasm_bg.wasm
│   └── package.json
└── README.md               # This file
```

## TypeScript Integration Structure

```
apps/src/app/logic/economic_logic/4_icome_outcome/
├── types/
│   └── incomeOutcomeTypes.ts        # Type definitions
├── income/
│   └── calculateMiningIncome.ts     # Gold mining calc
├── outcome/
│   └── calculateOperatingCosts.ts   # Maintenance/ops
├── tax/
│   └── calculateTax.ts              # Tax calculations
├── wasm/
│   ├── wasmLoader.ts                # WASM loader
│   └── pkg/                         # Compiled WASM (copied here)
│       ├── income_outcome_wasm.js
│       └── income_outcome_wasm_bg.wasm
├── dailySettlement.ts               # Main orchestrator
└── index.ts                         # Exports
```

## Troubleshooting

### "Failed to initialize WASM module"

**Solution:** Make sure WASM is built and in the right location:
```bash
cd income_outcome_wasm && wasm-pack build --target web --out-dir pkg
cp -r pkg apps/src/app/logic/economic_logic/4_icome_outcome/wasm/
```

### Build hangs on "Compiling..."

**Solution:** Increase Rust's codegen units during compilation:
```bash
RUSTFLAGS="-C codegen-units=256" wasm-pack build --target web
```

### Module too large

**Solution:** Enable aggressive optimization in `Cargo.toml`:
```toml
[profile.release]
opt-level = "z"      # Optimize for size
lto = true           # Link Time Optimization
codegen-units = 1    # Better optimization
strip = true         # Remove debug symbols
```

## Contributing

To modify calculations:

1. Edit `income_outcome_wasm/src/lib.rs`
2. Run tests: `cargo test`
3. Build: `build.bat` or `./build.sh`
4. Copy to app: `cp -r pkg apps/src/.../wasm/`

## License

MIT
