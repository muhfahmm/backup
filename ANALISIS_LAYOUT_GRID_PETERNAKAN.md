# ANALISIS: Layout Grid Peternakan pada Produksi & Pembangunan

## 📍 Lokasi File

```
apps/src/app/page/navigasi_menu/2_navigasi_bawah/5_pembangunan/1_produksi/
├── ProduksiModal.tsx (induk modal)
├── BaseProduksiGrid.tsx (komponen grid reusable)
└── card_data/
    └── 4_peternakan.tsx (config Peternakan)
```

---

## 🏗️ Arsitektur: Bagaimana Grid Dibangun?

### 1️⃣ **ProduksiModal.tsx** - Entry Point Utama
**File**: `apps/src/app/page/navigasi_menu/2_navigasi_bawah/5_pembangunan/1_produksi/ProduksiModal.tsx`

**Struktur**:
```typescript
const TABS = [
  { id: "kelistrikan", label: "Kelistrikan", component: KelistrikanTab },
  { id: "mineral", label: "Mineral & Energi", component: MineralEnergiTab },
  { id: "manufaktur", label: "Manufaktur", component: ManufakturTab },
  { id: "peternakan", label: "Peternakan", component: PeternakanTab },  // ← Tab Peternakan
  { id: "agrikultur", label: "Agrikultur", component: AgrikulturTab },
  { id: "perikanan", label: "Perikanan", component: PerikananTab },
  { id: "olahan pangan", label: "Olahan Pangan", component: OlahanPanganTab },
];
```

**Alur**:
1. User klik "Menu:Produksi" di sidebar
2. ProduksiModal terbuka dengan tab default "kelistrikan"
3. User klik button "PETERNAKAN" di sidebar kiri
4. `activeTab` berubah dari "kelistrikan" menjadi "peternakan"
5. `ComponentToRender` di-update ke `PeternakanTab`

**Rendering Logic**:
```typescript
const activeSection = TABS.find((tab) => tab.id === activeTab) || TABS[0];
const ComponentToRender = activeSection.component;

// Inside JSX:
<ComponentToRender
  countryDetail={countryDetail}
  setCountryDetail={setCountryDetail}
  metadata={metadata}
  calculateProductionAmount={calculateProductionAmount}
  findMeta={findMeta}
  onBuildClick={handleBuild}
  hoveredBuildingKey={hoveredBuildingKey}
  setHoveredBuildingKey={setHoveredBuildingKey}
  highlightedCardKey={highlightedCardKey}
  isBuildingAvailable={availabilityChecker}
  loadingMetadata={loadingMetadata}
  selectedBuilding={selectedBuilding}
  currentDate={currentDate}
  ongoingConstructions={ongoingConstructions}
/>
```

---

### 2️⃣ **4_peternakan.tsx** - Tab Peternakan Config
**File**: `apps/src/app/page/navigasi_menu/2_navegasi_bawah/5_pembangunan/1_produksi/card_data/4_peternakan.tsx`

**Seluruh File**:
```typescript
"use client"
import { Beef } from "lucide-react";
import BaseProduksiGrid from "../BaseProduksiGrid";

const KEYS = ["ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing"];

export default function PeternakanTab(props: any) {
  return <BaseProduksiGrid {...props} keys={KEYS} title="Peternakan" Icon={Beef} isElectricityTab={false} />;
}
```

**Yang Dipass ke BaseProduksiGrid**:
- `keys`: Array dari 4 bangunan peternakan
- `title`: "Peternakan" (untuk header)
- `Icon`: Beef icon dari lucide-react
- `isElectricityTab`: false (karena bukan listrik, ada footer berbeda)
- `...props`: Semua props dari ProduksiModal (countryDetail, metadata, dll)

---

### 3️⃣ **BaseProduksiGrid.tsx** - Komponen Grid Reusable
**File**: `apps/src/app/page/navigasi_menu/2_navigasi_bawah/5_pembangunan/1_produksi/BaseProduksiGrid.tsx`

**Ukuran**: ~300 baris (komponen utama untuk semua grid)

#### **Props yang Diterima**:
```typescript
interface BaseProduksiGridProps {
  keys: string[];                                    // ["ayam_unggas", "sapi_perah", ...]
  title: string;                                     // "Peternakan"
  Icon: any;                                         // Beef icon
  countryDetail: any;                                // Data negara
  metadata: any;                                     // Metadata bangunan
  calculateProductionAmount: (key: string) => number; // Fungsi hitung produksi
  findMeta: (key: string) => any;                    // Fungsi cari metadata
  onBuildClick: (key: string, label: string) => void; // Handler klik build
  hoveredBuildingKey: string | null;                 // Untuk info popup
  setHoveredBuildingKey: (key: string | null) => void;
  isBuildingAvailable?: (buildingKey: string, countryName: string) => boolean;
  isElectricityTab: boolean;                         // false untuk peternakan
  highlightedCardKey?: string | null;                // Highlight card tertentu
  ongoingConstructions?: any[];                      // Konstruksi yang sedang berjalan
  currentDate?: string | Date;
}
```

#### **Layout Struktur**:
```jsx
<div className="grid grid-cols-4 gap-4">
  {keys.map((key) => (
    <div key={key} className="...card styling...">
      {/* Header: Label + Info Button */}
      <div>
        <p>{formatLabel(key)}</p>
        <button onClick={...info popup...}><Info /></button>
      </div>
      
      {/* Count + Queue */}
      <div>
        <span>{perCount}</span>
        {isBuilding && <span>+{queueCount}</span>}
      </div>
      
      {/* Footer: Non-Electricity */}
      {!isElectricityTab && (
        <div>
          <span>{stock.toLocaleString('id-ID')}</span>
        </div>
      )}
    </div>
  ))}
</div>
```

#### **Key Features**:
1. **Grid 4 Kolom**: `grid grid-cols-4 gap-4`
2. **Card Styling**: Border, hover effects, bg colors
3. **Badge Tanggal**: Untuk konstruksi yang sedang berjalan
4. **Info Popup**: Hover button untuk detail bangunan
5. **Production Calculation**: Real-time berdasarkan metadata
6. **Highlighting**: Card bisa di-highlight (hijau border)
7. **Availability Check**: Beberapa bangunan tidak tersedia untuk negara tertentu

---

## 🎨 Visual Flow: Dari Tab ke Card

```
ProduksiModal
    ↓
[Sidebar Tabs]
    ↓
Click "PETERNAKAN"
    ↓
activeTab = "peternakan"
    ↓
PeternakanTab component renders
    ↓
PeternakanTab imports BaseProduksiGrid
    ↓
BaseProduksiGrid receives:
    - keys: ["ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing"]
    - title: "Peternakan"
    - Icon: Beef
    - ...other props
    ↓
BaseProduksiGrid.map(keys) renders 4 cards
    ↓
Grid Layout (4 columns)
    ├─ Card 1: Ayam Unggas (54 bangunan, 8.100 produksi)
    ├─ Card 2: Sapi Perah (32 bangunan, 4.800 produksi)
    ├─ Card 3: Sapi Potong (25 bangunan, 3.000 produksi)
    └─ Card 4: Domba Kambing (9 bangunan, 1.620 produksi)
```

---

## 📊 Data Flow: Dari CountryDetail ke Display

```typescript
// 1. countryDetail punya field:
countryDetail = {
  ayam_unggas: 54,          // Jumlah bangunan
  sapi_perah: 32,
  sapi_potong: 25,
  domba_kambing: 9,
  ongoingConstructions: [   // Konstruksi ongoing
    { buildingKey: "ayam_unggas", endDate: "2026-08-15", ... }
  ],
  ...
}

// 2. metadata punya field (dari API):
metadata = {
  ayam_unggas: {
    produksi: 150,           // Per unit per hari
    biaya_pembangunan: 5000,
    waktu_pembangunan: 5,
    deskripsi: "...",
    ...
  },
  ...
}

// 3. BaseProduksiGrid map keys dan combine data:
keys.map((key) => {
  const perCount = countryDetail[key];           // 54
  const bMeta = findMeta(key);                   // metadata.ayam_unggas
  const production = calculateProductionAmount(key);  // 54 * 150 = 8.100
  const buildingConstructions = ongoingConstructions.filter(
    c => c.buildingKey === key
  );
  
  return <Card perCount={perCount} production={production} ... />
})

// 4. Card displays:
//  - Label: "Ayam Unggas"
//  - Count: 54 bangunan
//  - Badge: Tanggal selesai (jika ada konstruksi)
//  - Footer: 8.100 (production atau stock)
```

---

## 🔑 Key Components & Files

| File | Ukuran | Fungsi |
|------|--------|--------|
| `ProduksiModal.tsx` | ~700 baris | Main modal, tab management, logic bangunan |
| `BaseProduksiGrid.tsx` | ~300 baris | Reusable grid component, rendering cards |
| `4_peternakan.tsx` | ~10 baris | Config wrapper untuk Peternakan tab |
| `requirements_logic/peternakan.ts` | ~100 baris | Material requirements untuk setiap bangunan |
| `card_data/` | 7 files | Tab configs untuk setiap kategori (mineral, manufaktur, dll) |

---

## 🎯 Kesimpulan: Dari Mana Grid Dibuat?

### **Singkatnya**:
1. **ProduksiModal.tsx** ← Induk yang manage semua logic
2. **PeternakanTab** (4_peternakan.tsx) ← Config: keys + title + icon
3. **BaseProduksiGrid.tsx** ← Component yang render grid layout

### **Template Pattern**:
Setiap tab (Peternakan, Agrikultur, Perikanan, dll) mengikuti pola:
```typescript
// card_data/X_something.tsx
const KEYS = ["bangunan1", "bangunan2", ...];
export default function SomethingTab(props: any) {
  return <BaseProduksiGrid {...props} keys={KEYS} title="Something" Icon={IconName} />;
}
```

### **CSS Grid**: 
- `grid grid-cols-4 gap-4` = 4 kolom, gap 1rem
- Setiap card 1 kolom lebar

### **Responsive**:
- Fixed 4 kolom di desktop
- Tidak ada media queries di BaseProduksiGrid (mungkin perlu ditambah untuk mobile)

---

## 💡 Diagram Teknis

```
┌─────────────────────────────────────────┐
│         ProduksiModal                   │
│  (Main orchestrator dengan logic)       │
└──────────────┬──────────────────────────┘
               │
       ┌───────┴────────┐
       │                │
   [Left Sidebar]    [Content Area]
   (Tab Buttons)     (Dynamic Component)
       │                │
       └────────┬───────┘
                │
         Click "PETERNAKAN"
                │
                ↓
    PeternakanTab (4_peternakan.tsx)
         ↓
    BaseProduksiGrid
         ↓
    ┌─ map keys ─┐
    │            │
   Card 1      Card 2      Card 3      Card 4
  (4 Columns Grid Layout)
```

---

## 🚀 Untuk Modifikasi

Jika ingin mengubah grid Peternakan:

1. **Tambah/Kurangi Bangunan**:
   - Edit `KEYS` di `4_peternakan.tsx`
   
2. **Ubah Jumlah Kolom**:
   - Ubah `grid-cols-4` ke `grid-cols-3` atau `grid-cols-5` di `BaseProduksiGrid.tsx` (line 124)

3. **Ubah Styling Card**:
   - Modif className di `BaseProduksiGrid.tsx` (line 130-145)

4. **Ubah Footer Display** (Production vs Stock):
   - Modif footer logic di `BaseProduksiGrid.tsx` (line 195-215)

