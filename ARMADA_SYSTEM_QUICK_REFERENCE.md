# Armada System - Quick Reference Guide

## 🎯 System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     ARMADA RECRUITMENT FLOW                      │
└─────────────────────────────────────────────────────────────────┘

1. USER CLICKS UNIT CARD
   ↓
2. MODAL OPENS (KonfirmasiArmadaAktifModal)
   - Shows capacity checking
   - Displays cost & requirements
   - Enters quantity
   ↓
3. USER CONFIRMS
   ↓
4. handleConfirmRecruit() EXECUTES
   - Creates ongoingConstructions entry
   - Sets type: "recruitment" | "purchase"
   - Calculates end date
   - Stores in countryDetail.armada.[group].[key]
   ↓
5. CARD UPDATES IMMEDIATELY
   - Date badge appears: "15 Aug, 2026"
   - Green counter shows: "+100"
   ↓
6. useEffect MONITORS TIME
   - Every render checks: currentDate >= endDate
   ↓
7. TIME REACHES COMPLETION
   - Auto-adds units to main inventory
   - Updates: armada.darat.tank_tempur_utama += 100
   - Removes entry from ongoingConstructions
   ↓
8. CARD UPDATES AGAIN
   - Badge disappears
   - Main count increases
   - Green counter vanishes
```

## 📦 Data Structure Examples

### Ongoing Infantry Recruitment
```javascript
{
  id: "recruitment_1234567890",
  buildingKey: "pasukan_infanteri",
  label: "Pasukan Infanteri",
  quantity: 50000,
  cost: 250000000,
  startDate: "2026-08-09",
  endDate: "2026-12-27",
  type: "recruitment",      // ← Infantry only
  group: "darat"
}
```

### Ongoing Tank Purchase
```javascript
{
  id: "purchase_1234567891",
  buildingKey: "tank_tempur_utama",
  label: "Tank Tempur Utama",
  quantity: 100,
  cost: 1500000,
  startDate: "2026-08-09",
  endDate: "2027-01-06",
  type: "purchase",           // ← Non-infantry units
  group: "darat"
}
```

### Completed & Auto-Added to Inventory
```javascript
countryDetail.armada = {
  darat: {
    pasukan_infanteri: 1330050,  // ← +50 from recruitment
    tank_tempur_utama: 4750,      // ← +100 from purchase
    apc_ifv: 45100,
    // ... other units
  },
  laut: {
    kapal_induk_nuklir: 20,       // ← +9 from purchase
    kapal_destroyer: 95,
    // ... other ships
  },
  udara: {
    jet_tempur_siluman: 450,
    drone_kamikaze: 5000,
    // ... other aircraft
  }
}
```

## 🏗️ Unit Groups & Capacities

### Darat (Land)
```
├─ Pasukan Infanteri (barak)
│  ├─ Capacity Container: infanteri
│  ├─ Storage: armada.darat.pasukan_infanteri
│  └─ Time: (quantity / 10000) * 8 days
│
├─ Tank Tempur Utama & APC/IFV
│  ├─ Capacity Container: hangar_tank
│  ├─ Storage: armada.darat.tank_tempur_utama | apc_ifv
│  └─ Time: ceil((timePerUnit * quantity) / 10) days
│
└─ Artileri/Roket/Pertahanan Udara/Kendaraan
   ├─ Capacity Container: gudang_senjata
   ├─ Storage: armada.darat.[unit_key]
   └─ Time: ceil((timePerUnit * quantity) / 10) days
```

### Laut (Sea)
```
├─ All 8 Ship Types
│  ├─ Capacity Container: pangkalan_laut
│  ├─ Storage: armada.laut.[ship_key]
│  └─ Time: ceil((timePerUnit * quantity) / 10) days
│
└─ Examples:
   - kapal_induk: 1,125,000 cost, 120 days base
   - kapal_induk_nuklir: 1,875,000 cost, 150 days base
   - kapal_destroyer: 337,500 cost, 60 days base
```

### Udara (Air)
```
├─ All 8 Aircraft Types
│  ├─ Capacity Container: pangkalan_udara
│  ├─ Storage: armada.udara.[aircraft_key]
│  └─ Time: ceil((timePerUnit * quantity) / 10) days
│
└─ Examples:
   - jet_tempur_siluman: 112,500 cost, 45 days base
   - drone_kamikaze: 3,750 cost, 2 days base
```

## 🔧 Key Functions

### `handleConfirmRecruit(quantity: number)`
**Triggered by:** User clicks confirm in modal

**Does:**
1. Checks if unit is "barak" (infantry)
2. Calculates recruitment/purchase days
3. Creates ongoingConstruction entry
4. Updates countryDetail state

**Time Calculations:**
- Infantry: `Math.ceil(quantity / 10000) * 8`
- Others: `Math.ceil((timePerUnit * quantity) / 10)`

### Auto-Completion useEffect
**Triggered by:** 
- Change to `currentDate`
- Change to `countryDetail.game_date`
- Change to `ongoingConstructions`

**Does:**
1. Compares each construction's endDate with currentDate
2. Filters for type="recruitment" OR type="purchase"
3. Adds quantity to correct armada group/key
4. Removes entry from ongoingConstructions

### `getData(key: string, group?: string): number`
**Checks these locations in order:**
1. `countryDetail[key]`
2. `countryDetail.pertahanan[key]`
3. `countryDetail.armada[key]`
4. `countryDetail.armada[group][key]` ← **Primary**
5. `countryDetail[group][key]`

**Returns:** 0 if not found

## 📊 Metadata Time Values (in days, base)

| Unit | Darat | Laut | Udara |
|------|-------|------|-------|
| Besar | 15-30 | 90-150 | 35-55 |
| Medium | 10-20 | 30-60 | 25-45 |
| Kecil | 2-5 | 5-10 | 2-10 |

Formula: `Total Days = ceil((baseTime * quantity) / 10)`
- 1 unit = ~10% of base time
- 100 units = ~100% of base time
- 1000 units = ~1000% of base time

## 🎨 UI Elements

### Date Badge
```
┌─────────────────────┐
│  15 Aug, 2026       │  ← Positioned -top-6 (above card)
└─────────────────────┘
      ↓
┌─────────────────────────┐
│ Tank Tempur Utama    [i]│
│                         │
│ 4,650 +100 unit        │  ← Green "+X" counter next to count
└─────────────────────────┘
```

**Styling:**
- Badge background: `bg-[#2e261a]`
- Badge text: `text-[#FAF6EE]`
- Counter color: `text-emerald-600`
- Font size: Badge = `text-[10px]`, Counter = `text-sm`

### Card States

**Without Pending:**
```
┌─────────────────────────┐
│ Unit Name            [i]│
│                         │
│ 4,650                   │
│ unit                    │
└─────────────────────────┘
```

**With Pending:**
```
       15 Aug, 2026        ← Date badge
            │
┌─────────────────────────┐
│ Unit Name            [i]│
│                         │
│ 4,650        +100       │ ← Green counter
│ unit                    │
└─────────────────────────┘
```

## ✅ Verification Checklist

After implementation, verify:

- [ ] All 23 unit types show in correct tabs (Darat/Laut/Udara)
- [ ] Date badges show correct format (DD MMM, YYYY)
- [ ] Green "+X" counters display only when pending
- [ ] Capacity warnings show when full/insufficient
- [ ] Units auto-add after time expires
- [ ] Default values load from JSON (not showing 0)
- [ ] Modal capacity checking works for all groups
- [ ] No TypeScript errors in armada_aktif.tsx
- [ ] Date calculations are correct (no timezone issues)
- [ ] pendingConstructions array updates properly

## 🐛 Debugging Tips

### Check Pending Construction Entry
```javascript
console.log(countryDetail.ongoingConstructions)
// Should see entries with:
// - buildingKey: correct unit key
// - type: "recruitment" or "purchase"
// - endDate: YYYY-MM-DD format
// - group: "darat", "laut", or "udara"
```

### Check Auto-Add
```javascript
console.log(countryDetail.armada.darat.tank_tempur_utama)
// Should increment when currentDate >= endDate
```

### Check Date Parsing
```javascript
const [y, m, d] = "2026-08-09".split('-').map(Number)
const date = new Date(y, m - 1, d)
console.log(date) // Should be valid Date object
```

## 📝 Files Modified

- `1_armada_aktif.tsx` - Main implementation
- `1_konfirmasi_armada_aktif_modal.tsx` - Capacity checking (no changes needed)
- `armadaLogic.ts` - Unit breakdown (no changes needed)

## 🚀 Next Steps (Optional)

1. **Quantity Input Modal:** Add min/max quantity constraints
2. **Bulk Operations:** Allow batch-adding multiple unit types
3. **Scheduling:** UI to schedule multiple purchases with delays
4. **History:** Track completed purchases/recruitments
5. **Statistics:** Show recruitment rates per container type
