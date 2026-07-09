# 🐛 ISSUE: Production Values Not Updating Real-Time

## ❌ Original Issue (RESOLVED)

Production & Pembangunan modal tidak terupdate secara real-time saat pergantian tanggal simulasi.

### Observable Behavior (SEBELUM FIX):

```
SAAT INI:
- Tanggal game berubah dari 10 → 11 → 12 (di SIMULATION CALENDAR)
- Production values di modal TETAP SAMA (tidak berubah)
- Last Update: Since 2026-07-09 (tidak update!)

TAPI KETIKA:
- User pindah page / buka page lain
- User screenshot
- User close & open modal
- User refresh/reload
↓
Production values TIBA-TIBA UPDATE dengan benar! ✅
```

---

## 🔍 Root Cause (ACTUAL ROOT CAUSE - NOT what was in original diagnosis)

### The Real Problem: Date Object Reference Mutation

**File:** `c:\EM\apps\src\app\page\time_controllers\timeManager.ts`

**SEBELUM FIX:**
```typescript
if (delta >= interval) {
    const daysToAdvance = Math.floor(delta / interval);
    this.currentDate.setDate(this.currentDate.getDate() + daysToAdvance);  // ⚠️ MUTASI OBJECT
    
    this.lastTickTime = now - (delta % interval);
    this.triggerCallback();
}
```

**Masalah:**
- `setDate()` **MUTASI Date object yang sama**, tidak membuat instance baru
- Reference object tetap identik setiap tick
- React menggunakan `Object.is()` untuk perbandingan state → reference yang sama = tidak ada perubahan
- **React bail-out** dari re-render meskipun isi Date sudah berubah

### Cascade Effect:

```
TimeManager: setDate() mutasi in-place
    ↓ (reference SAMA)
    ↓
MapPage.setCurrentDate(timeManagerRef.current.getCurrentDate())
    ↓ (return reference SAMA)
    ↓
React state check: Object.is(oldDate, newDate) = true → BAIL-OUT ❌
    ↓
Component tidak re-render
    ↓
currentDate prop tidak berubah reference
    ↓
useMemo dengan dependency [currentDate, ...] TIDAK recalculate
    ↓
Production display TIDAK update ❌
```

**Kenapa Tiba-Tiba Update Saat Pindah Page?**

```
User trigger re-render lain (fetchBuildingMetadata selesai, hover state, dll)
    ↓
Component re-render
    ↓
Saat ini closure sudah capture currentDate yang SUDAH TERMUTASI berhari-hari
    ↓
calculateProductionAmount recalculate dengan accumulated date changes
    ↓
Semua nilai production jump sekaligus ✅
```

---

## ✅ Solution (IMPLEMENTED)

### Fix 1: Buat NEW Date Instance (Bukan Mutasi In-Place)

**File:** `timeManager.ts` (Line 96-105)

```typescript
// ❌ SEBELUM:
if (delta >= interval) {
    const daysToAdvance = Math.floor(delta / interval);
    this.currentDate.setDate(this.currentDate.getDate() + daysToAdvance);
    this.lastTickTime = now - (delta % interval);
    this.triggerCallback();
}

// ✅ SESUDAH:
if (delta >= interval) {
    const daysToAdvance = Math.floor(delta / interval);
    // Create NEW Date instance instead of mutating in-place
    const newDate = new Date(this.currentDate);
    newDate.setDate(newDate.getDate() + daysToAdvance);
    this.currentDate = newDate;  // ← Assign reference baru!
    
    this.lastTickTime = now - (delta % interval);
    this.triggerCallback();
}
```

**Why This Works:**
- `new Date(this.currentDate)` membuat instance baru
- `setDate()` di instance baru (tidak mutasi yang lama)
- `this.currentDate = newDate` assign reference baru
- React detect perubahan state → re-render ✅

### Fix 2: Return Copy dari `getCurrentDate()` (Defensive)

**File:** `timeManager.ts` (Line 52-54)

```typescript
// ❌ SEBELUM:
public getCurrentDate(): Date {
    return this.currentDate;  // Return reference langsung
}

// ✅ SESUDAH:
public getCurrentDate(): Date {
    return new Date(this.currentDate);  // Return copy
}
```

**Why This Works:**
- Mencegah mutasi eksternal terhadap `this.currentDate`
- Consumer tidak bisa accidentally mutate internal state
- Aman dari closure mutations

---

## 📊 Flow Setelah Fix

```
TimeManager (per tick)
    ↓ create newDate instance
    ↓ this.currentDate = newDate (reference baru!)
    ↓ triggerCallback()
    ↓
MapPage.setCurrentDate(getCurrentDate()) → setCurrentDate(new Date)
    ↓ React detect Object.is() = false (reference berbeda)
    ↓ state update trigger! ✅
    ↓
MapPage re-render dengan currentDate baru
    ↓
ModalsManager receive currentDate prop (reference baru)
    ↓
ProduksiModal receive currentDate prop (reference baru)
    ↓
useMemo [currentDate, ...] detect perubahan → recalculate! ✅
    ↓
calculateProductionAmount execute dengan date terbaru
    ↓
Production display update REAL-TIME ✅
    ↓
useEffect [currentDate, ...] trigger → update last_update_date
    ↓
"Last Update: Since {today}" display update REAL-TIME ✅
```

---

## 🧪 Testing Checklist

- [ ] Open Produksi & Pembangunan modal
- [ ] Play/Resume simulasi (tidak pause)
- [ ] Watch tanggal di SIMULATION CALENDAR berganti (10 → 11 → 12 → ...)
- [ ] **Verify production values LANGSUNG update per hari** (real-time, no delay)
- [ ] **Verify "Last Update: Since {date}" LANGSUNG update** (tidak perlu pindah page)
- [ ] Close modal, resume simulasi, buka lagi → values consistent dengan date ✅
- [ ] Pause simulasi, advance manual, resume → values recalculate immediately ✅

---

## 🔧 Technical Notes

- Tidak perlu ubah `ProduksiModal.tsx` / `ModalsManager.tsx`
- Tidak perlu add `key` prop atau force update mechanism
- Hanya perubahan di `timeManager.ts` saja sudah cukup
- Seluruh cascade re-render React bekerja alami sesuai desain

---

## ✅ Status: FIXED

**Files Modified:**
- `c:\EM\apps\src\app\page\time_controllers\timeManager.ts` (2 fixes)

**Build Status:** ✅ Success

**Expected Result:** Production akan update real-time setiap tanggal berganti, baik modal terbuka maupun tertutup.
