# Analisis: Bagaimana Navbar Menampilkan +/- Kas Negara

## 📊 Overview
Navbar menampilkan status kas negara dengan dua komponen:
1. **Nilai absolut kas** (contoh: `38.309 EM`)
2. **Indikator perubahan harian** (contoh: `(+1040)` atau `(-500)`)

---

## 🏗️ Arsitektur Aliran Data

```
map-system.tsx (State Management Hub)
    ↓
    ├─ countryDetail: { anggaran, ... }
    ├─ playerNetBalanceAdjustment: number
    └─ onUpdateBudgetDaily() [setiap perubahan tanggal]
    
    ↓
Navbar.tsx (Display Component)
    ├─ Props: countryDetail, netBalanceAdjustment
    ├─ Compute: calculateCountryNetBalance()
    └─ Render: StatusItem dengan KAS NEGARA
```

---

## 🔧 Komponen Teknis

### 1. **Navbar.tsx** (Baris 35-44)
```typescript
const anggaran = Number(countryDetail?.anggaran) || 0;
const netBalance = calculateCountryNetBalance(countryDetail) + netBalanceAdjustment;
const netBalanceColor = netBalance >= 0 ? 'text-emerald-700' : 'text-rose-700';
const netBalanceLabel = `${netBalance >= 0 ? '+ ' : '- '}${Math.abs(netBalance).toLocaleString('id-ID')}`;
```

**Penjelasan:**
- `anggaran`: Nilai kas total dari `countryDetail.anggaran`
- `netBalance`: Kalkulasi perubahan harian PLUS adjustment
- `netBalanceColor`: Hijau untuk positif (+), merah untuk negatif (-)
- `netBalanceLabel`: Format label dengan simbol +/- dan pemisah ribuan

### 2. **StatusItem Component** (Baris 174-188)
```tsx
<StatusItem
    icon={<Landmark className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
    label="KAS NEGARA"
    value={countryDetail ? (
        <span className="flex items-center gap-1 sm:gap-2">
            <span>{formatCurrencyEM(anggaran)}</span>
            <span className={`${netBalanceColor} text-[8px] sm:text-[11px] font-black`}>
                ({netBalanceLabel})
            </span>
        </span>
    ) : (
        '-'
    )}
/>
```

**Layout:**
```
┌─────────────────────────────┐
│ 🏛️ KAS NEGARA              │
│    38.309 EM  (+1040)       │
│    └─ Nilai   └─ Perubahan  │
└─────────────────────────────┘
```

---

## 📐 Kalkulasi Net Balance

### **Lokasi:** `treasuryUpdater.ts`

#### Fungsi: `calculateCountryNetBalance(detail)`
```typescript
export const calculateCountryNetBalance = (detail: any) => {
  if (!detail || typeof detail !== 'object') return 0;
  
  const totalTaxIncome = calculateTotalTaxIncome(detail);      // Pajak
  const goldUnits = calculateGoldMiningDailyProduction(detail); // Emas
  const goldIncome = goldUnits;                                // Gold units (tidak dikalikan harga)
  const ministryCost = calculateTotalMinistryCostPerDay(detail); // Biaya kementerian
  
  return totalTaxIncome + goldIncome - ministryCost;
};
```

**Rumus:**
```
NET BALANCE = TAX INCOME + GOLD INCOME - MINISTRY COST

Contoh:
- Pendapatan Pajak:      + 5.000 EM
- Pendapatan Emas:       + 2.000 EM
- Biaya Kementerian:     - 6.000 EM
─────────────────────────────────
= +1.000 EM ✅
```

---

## 🔄 Update Harian

### **Lokasi:** `map-system.tsx` (Baris 379-445)

```typescript
useEffect(() => {
    // Trigger saat currentDate berubah (setiap hari simulasi)
    
    // 1. Hitung net balance
    const netBalance = calculateCountryNetBalance(countryDetail);
    
    // 2. Update state
    setCountryDetail((prev: any) => ({
        ...prev,
        anggaran: (Number(prev.anggaran) || 0) + netBalance, // Tambahkan ke kas
        // ... update material production, fuel consumption
    }));
}, [currentDate, countryDetail, metadata]);
```

**Alur:**
1. Tanggal simulasi berubah → `useEffect` triggered
2. Hitung net balance dari ekonomi terkini
3. Update `countryDetail.anggaran` dengan menambah net balance
4. Navbar re-render dengan nilai terbaru

---

## 🎨 Styling & Visual Indicators

### **Warna Indikator:**
- **Positif (+)**: `text-emerald-700` (hijau) 
- **Negatif (-)**: `text-rose-700` (merah)

### **Format Tampilan:**
- Ukuran: `text-[8px]` pada mobile, `text-[11px]` pada desktop
- Weight: `font-black` (bold)
- Format: `(+1.040)` atau `(-500)` dengan pemisah ribuan

### **Contoh Output Visual:**

```
┌──────────────────────────────────────────┐
│ 🏛️  KAS NEGARA                           │
│      38.309 EM         (+1040)           │
│      ↑ Normal          ↑ Hijau (positif) │
│                                          │
│      38.309 EM         (-500)            │
│      ↑ Normal          ↑ Merah (negatif) │
└──────────────────────────────────────────┘
```

---

## 🔌 Props Flow

### **Input ke Navbar:**
```typescript
interface NavbarProps {
    countryDetail: {
        anggaran: number;           // Kas saat ini
        jumlah_penduduk: number;    // Populasi
        kepuasan: number;           // Kepuasan
        // + 100+ field ekonomi lainnya (pajak, kementerian, dll)
    };
    netBalanceAdjustment?: number;  // Manual adjustment (default: 0)
    // ... props lainnya
}
```

### **Kebutuhan untuk menghitung +/-:**
- Tax levels dari semua jenis pajak
- Ministry levels dari semua departemen
- Gold production count
- Power plant counts (untuk fuel consumption)

---

## 📝 Komponen StatusItem

```typescript
function StatusItem({ 
    icon,           // React icon component
    label,          // Judul (misal: "KAS NEGARA")
    value,          // Nilai (bisa string atau JSX element)
    color = "text-[#3d362a]"  // Default color
}) {
    return (
        <div className="flex items-center gap-1.5 sm:gap-4 flex-shrink-0">
            {/* Icon Section */}
            <div className="p-1 sm:p-2 bg-[#dcc9a3]/60 rounded-lg sm:rounded-xl ...">
                {icon}
            </div>
            
            {/* Text Section */}
            <div className="flex flex-col">
                <span className="text-[6px] sm:text-[10px] ... uppercase">
                    {label}
                </span>
                <span className={`text-[9px] sm:text-[13px] ... ${color}`}>
                    {value}
                </span>
            </div>
        </div>
    );
}
```

---

## 🚀 Potential Enhancements

### 1. **Animasi untuk Perubahan Besar**
```typescript
// Flash/pulse ketika net balance > threshold
const isLargeChange = Math.abs(netBalance) > 5000;
const animationClass = isLargeChange ? 'animate-pulse' : '';
```

### 2. **Tooltip Detail**
```tsx
<div className="group">
    <span className="hover:bg-yellow-200">{netBalanceLabel}</span>
    <div className="hidden group-hover:block bg-gray-800 text-white p-2 rounded">
        {/* Detail breakdown: pajak, emas, biaya */}
    </div>
</div>
```

### 3. **Trend Arrow**
```tsx
// Tambah tren dibanding hari sebelumnya
const yesterday = previousBalance;
const trend = netBalance > yesterday ? '📈' : '📉';
```

### 4. **Penyimpanan History**
```typescript
// Track balance history untuk chart
const [balanceHistory, setBalanceHistory] = useState<number[]>([]);

useEffect(() => {
    setBalanceHistory(prev => [...prev, netBalance]);
}, [currentDate]);
```

---

## 🔍 Debug Tips

### Verifikasi Kalkulasi:
```typescript
// Console log untuk debugging
console.log('Tax Income:', calculateTotalTaxIncome(countryDetail));
console.log('Gold Income:', calculateGoldMiningDailyProduction(countryDetail));
console.log('Ministry Cost:', calculateTotalMinistryCostPerDay(countryDetail));
console.log('Net Balance:', calculateCountryNetBalance(countryDetail));
console.log('Current Budget:', countryDetail.anggaran);
```

### Check Props:
```typescript
console.log('Navbar Props:', { countryDetail, netBalanceAdjustment });
```

---

## 📋 Summary

| Aspek | Detail |
|-------|--------|
| **Komponen Utama** | Navbar.tsx + StatusItem |
| **Kalkulasi** | treasuryUpdater.ts |
| **Update Trigger** | Perubahan tanggal simulasi |
| **Format +/-** | `text-emerald-700` (hijau) / `text-rose-700` (merah) |
| **Data Source** | countryDetail.anggaran + net balance calculation |
| **Display Location** | Center navbar, between POPULASI & KEPUASAN |

