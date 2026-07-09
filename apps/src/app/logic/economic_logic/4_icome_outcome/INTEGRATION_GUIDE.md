# Integration Guide: Income/Outcome WASM Module

## ✅ Build Status

- ✅ Rust compilation: **SUCCESS** (all tests passed)
- ✅ WASM generation: **SUCCESS**
- ✅ TypeScript bindings: **AUTO-GENERATED**

## 📦 Next Steps

### 1. Copy WASM to Next.js Project

```bash
# From workspace root
cp -r income_outcome_wasm/pkg apps/src/app/logic/economic_logic/4_icome_outcome/wasm/
```

Or manually copy:
- `income_outcome_wasm/pkg/income_outcome_wasm.js`
- `income_outcome_wasm/pkg/income_outcome_wasm_bg.wasm`
- `income_outcome_wasm/pkg/income_outcome_wasm.d.ts`
- `income_outcome_wasm/pkg/income_outcome_wasm_bg.wasm.d.ts`

### 2. Update Next.js Configuration

In `apps/next.config.ts`, add webpack configuration:

```typescript
import type { NextConfig } from "next";

const config: NextConfig = {
  webpack: (config, { isServer }) => {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
      layers: true,
    };

    config.output.webassemblyModuleFilename =
      isServer ? "../static/wasm/[modulehash].wasm" : "static/wasm/[modulehash].wasm";

    config.module.rules.push({
      test: /\.wasm$/,
      type: "webassembly/async",
    });

    return config;
  },
};

export default config;
```

### 3. Install Dependencies

```bash
cd apps
npm install
# WASM module is already built, no additional packages needed
```

### 4. Test Integration

Create a test file `apps/src/app/logic/economic_logic/4_icome_outcome/__tests__/integration.test.ts`:

```typescript
import { calculateGoldIncomeQuick } from '../income/calculateMiningIncome';
import { calculateQuickOutcome } from '../outcome/calculateOperatingCosts';
import { getWasmStatus, getWasmModule } from '../wasm/wasmLoader';

describe('Income/Outcome WASM Integration', () => {
  it('should load WASM module', async () => {
    const wasm = await getWasmModule();
    expect(wasm).toBeDefined();
    expect(getWasmStatus()).toBe('ready');
  });

  it('should calculate gold mining income', async () => {
    const result = await calculateGoldIncomeQuick(
      5,    // gold mines
      150,  // production per day
      30,   // days elapsed
      1500  // tax rate (15%)
    );

    expect(result.gross).toBe(22500);
    expect(result.tax).toBe(3375);
    expect(result.net).toBe(19125);
  });

  it('should calculate outcome costs', async () => {
    const result = await calculateQuickOutcome(
      100,   // buildings
      50,    // maintenance per building
      1000,  // employees
      100,   // salary per employee
      5000   // other costs
    );

    expect(result.total).toBe(110000);
  });
});
```

Run tests:
```bash
npm run test -- income_outcome_wasm
```

### 5. Usage in Components

Example: ProduksiModal or Dashboard:

```typescript
import { executeDailySettlement, formatSettlementReport } from '@/logic/economic_logic/4_icome_outcome';

// In your component or API route:
async function handleDailySettlement(countryState: any, currentDate: Date) {
  try {
    const report = await executeDailySettlement(countryState, currentDate);
    
    console.log('Daily Settlement Report:');
    console.log(formatSettlementReport(report));
    
    // Update country state
    setCountryDetail(prev => ({
      ...prev,
      kas_negara: report.treasuryBalance,
      last_settlement_date: formatDate(currentDate),
    }));
  } catch (error) {
    console.error('Settlement failed:', error);
  }
}
```

### 6. Create UI Component (Income/Outcome Tabs)

Create `apps/src/app/page/navigasi_menu/2_navigasi_bawah/6_ekonomi/IncomeOutcomeModal.tsx`:

```typescript
"use client"
import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  BarChart3 
} from "lucide-react";
import { executeDailySettlement } from '@/logic/economic_logic/4_icome_outcome';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  currentDate: Date;
}

export default function IncomeOutcomeModal({
  isOpen,
  onClose,
  countryDetail,
  currentDate,
}: Props) {
  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      loadSettlement();
    }
  }, [isOpen, countryDetail, currentDate]);

  const loadSettlement = async () => {
    setLoading(true);
    try {
      const data = await executeDailySettlement(countryDetail, currentDate);
      setReport(data);
    } catch (error) {
      console.error('Failed to load settlement:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-slate-900 rounded-lg p-6 w-96 max-h-96 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Pendapatan & Pengeluaran</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ×
          </button>
        </div>

        <Tab.Group>
          <Tab.List className="flex gap-2 mb-4">
            <Tab className={({ selected }) =>
              `flex items-center gap-2 px-4 py-2 rounded ${
                selected ? 'bg-green-600' : 'bg-slate-800'
              }`
            }>
              <TrendingUp size={16} />
              Pendapatan
            </Tab>
            <Tab className={({ selected }) =>
              `flex items-center gap-2 px-4 py-2 rounded ${
                selected ? 'bg-red-600' : 'bg-slate-800'
              }`
            }>
              <TrendingDown size={16} />
              Pengeluaran
            </Tab>
          </Tab.List>

          <Tab.Panels>
            {/* Income Tab */}
            <Tab.Panel className="text-white">
              {report?.income ? (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Pendapatan Kotor:</span>
                    <span className="font-mono">
                      Rp {report.income.totalGross.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pajak:</span>
                    <span className="font-mono text-red-400">
                      -Rp {report.income.totalTax.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Pendapatan Bersih:</span>
                    <span className="font-mono text-green-400">
                      +Rp {report.income.totalNet.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-gray-400">Memuat...</div>
              )}
            </Tab.Panel>

            {/* Outcome Tab */}
            <Tab.Panel className="text-white">
              {report?.outcome ? (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Pemeliharaan:</span>
                    <span className="font-mono">
                      Rp {report.outcome.totalMaintenance.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Operasional:</span>
                    <span className="font-mono">
                      Rp {report.outcome.totalOperations.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Total Pengeluaran:</span>
                    <span className="font-mono text-red-400">
                      -Rp {report.outcome.totalOutcome.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-gray-400">Memuat...</div>
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>

        {report && (
          <div className="mt-6 p-3 bg-slate-800 rounded">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Aliran Kas:</span>
              <span className={`font-bold ${
                report.cashFlow >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {report.cashFlow >= 0 ? '+' : ''}
                Rp {report.cashFlow.toLocaleString('id-ID')}
              </span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-300">Kas Negara:</span>
              <span className="font-mono font-bold text-blue-400">
                Rp {report.treasuryBalance.toLocaleString('id-ID')}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
```

## 🧪 Testing Checklist

- [x] Rust tests pass (5/5)
- [x] WASM compilation successful
- [x] TypeScript bindings generated
- [ ] Copy WASM to Next.js
- [ ] Next.js build passes
- [ ] Integration tests pass
- [ ] UI Component renders
- [ ] Daily settlement calculates correctly

## 📊 File Structure (Final)

```
c:\EM\
├── income_outcome_wasm/          # Rust project
│   ├── Cargo.toml
│   ├── src/lib.rs
│   ├── pkg/                      # Generated WASM
│   │   ├── income_outcome_wasm.js
│   │   ├── income_outcome_wasm_bg.wasm
│   │   └── income_outcome_wasm.d.ts
│   ├── build.sh
│   └── build.bat

apps/src/app/logic/economic_logic/4_icome_outcome/
├── types/
│   └── incomeOutcomeTypes.ts
├── income/
│   └── calculateMiningIncome.ts
├── outcome/
│   └── calculateOperatingCosts.ts
├── tax/
│   └── calculateTax.ts
├── wasm/
│   ├── wasmLoader.ts
│   └── pkg/                      # Copy of generated WASM
│       ├── income_outcome_wasm.js
│       ├── income_outcome_wasm_bg.wasm
│       └── income_outcome_wasm.d.ts
├── dailySettlement.ts
├── index.ts
└── INTEGRATION_GUIDE.md
```

## 🚀 Quick Start

1. Copy WASM: `cp -r income_outcome_wasm/pkg apps/src/app/logic/economic_logic/4_icome_outcome/wasm/`
2. Build Next.js: `cd apps && npm run build`
3. Start: `npm run dev`
4. Test API: http://localhost:3000/api/building-metadata (should include income/outcome routes)

## 📚 API Endpoints (To Be Created)

- `POST /api/income-outcome/settle` - Execute daily settlement
- `GET /api/income-outcome/report/:date` - Get historical report
- `GET /api/income-outcome/current` - Get current status

## 🎯 Next Phase

- [ ] Create API routes for settlement
- [ ] Integrate with game state (kas_negara update)
- [ ] Add daily settlement trigger
- [ ] Create income/outcome UI modal with charts
- [ ] Add budget planning tools
