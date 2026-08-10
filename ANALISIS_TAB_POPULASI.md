# 📊 Analisis Tab Ringkasan & Statistik Modal Populasi

## 🔍 Overview

Modal Kependudukan memiliki 2 tab utama:
1. **RINGKASAN** - Overview singkat demografi & vitalitas
2. **STATISTIK** - Detail lengkap struktur kelas sosial & metrics

---

## 🏗️ Arsitektur Tab

### **Location Files**

```
Modal Container (di ModalsManager)
  ↓
RingkasanPopulasiModal.tsx (Tab 1: Ringkasan)
  ↓
StatistikPopulasiModal.tsx (Tab 2: Statistik)
```

### **Navigation Flow**

```
User klik modal "Kependudukan"
  ↓
ModalsManager render RingkasanPopulasiModal (isOpen=true)
  ↓
User klik tab "STATISTIK"
  ↓
onClick={() => setActiveMenu?.("Dashboard:Populasi")}
  ↓
activeMenu state berubah di map-system
  ↓
ModalsManager detect change
  ↓
ModalsManager render StatistikPopulasiModal (isOpen=true)
```

---

## 💻 Kode Tab di RingkasanPopulasiModal

### **Header dengan Tab Buttons**
```typescript
<div className="flex items-center bg-[#e4dac3]/40 p-1 rounded-xl border border-[#bfae93]/50 backdrop-blur-md ml-4">
  {/* TAB 1: Ringkasan (Active) */}
  <button
    className="px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all 
               bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/20 cursor-pointer"
  >
    Ringkasan
  </button>
  
  {/* TAB 2: Statistik (Inactive) */}
  <button
    onClick={() => setActiveMenu?.("Dashboard:Populasi")}
    className="px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all 
               text-[#8b7e66] hover:text-[#5c3c10] cursor-pointer"
  >
    Statistik
  </button>
</div>
```

**Button Style:**
- **Active Tab**: Dark background `bg-[#5c3c10]` + light text
- **Inactive Tab**: Transparent + hover effect

---

## 🔗 Tab State Management

### **RingkasanPopulasiModal Props**
```typescript
interface RingkasanPopulasiModalProps {
  isOpen: boolean;              // Kontrol visibility
  onClose: () => void;          // Close handler
  setActiveMenu?: (menu: string) => void;  // ← Tab navigation
  countryDetail: CountryDetail;
  selectedCountry: any;
}
```

### **Flow: Click Statistik Tab**
```
1. User click "Statistik" button
   ↓
2. onClick trigger: setActiveMenu?.("Dashboard:Populasi")
   ↓
3. setActiveMenu call di map-system.tsx
   ↓
4. activeMenu state = "Dashboard:Populasi"
   ↓
5. ModalsManager detect change (activeMenu in dependency)
   ↓
6. ModalsManager check: isActive?.startsWith("Dashboard:Populasi")
   ↓
7. Close RingkasanPopulasiModal (isOpen=false)
   ↓
8. Open StatistikPopulasiModal (isOpen=true)
```

---

## 📱 Tab Content Structure

### **RingkasanPopulasiModal Content**

```
Header
├── Title: "Kependudukan"
├── Tab Buttons (Ringkasan | Statistik)
└── Close Button

Summary Cards (4 items)
├── Total Populasi: 146,028,325 jiwa
├── Laju Pertumbuhan: +3,498 /hr
├── Tunawisma: 1,022,198 jiwa
└── Kesejahteraan: 62.4 INDX

Content Area
├── 1. Informasi Demografi
│   ├── Daily births
│   └── Daily deaths
└── 2. Kondisi Sosial & Layanan Publik
    ├── Keamanan Publik: 84.5%
    ├── Harapan Hidup: 73.0 tahun
    └── Kepuasan Rakyat: 50.0%
```

### **StatistikPopulasiModal Content**

```
Header
├── Title: "Kependudukan"
├── Tab Buttons (Ringkasan | Statistik)
└── Close Button

Summary Cards (same as Ringkasan)

Content Area
├── 1. Struktur Kelas Sosial (5 items)
│   ├── Kaum Elit: 2.1%
│   ├── Menengah Atas: 11.8%
│   ├── Kelas Menengah: 46.4%
│   ├── Kelas Pekerja: 31.2%
│   └── Masyarakat Miskin: 8.5%
└── 2. Metrik Demografi & Vitalitas (4 items)
    ├── Harapan Hidup
    ├── Keamanan Nasional
    ├── Median Usia
    └── Kelahiran Harian
```

---

## 🔄 State Management Detail

### **Di map-system.tsx**
```typescript
const [activeMenu, setActiveMenu] = useState('Peta Taktis');

// Saat user click "Statistik" tab
// activeMenu berubah dari undefined → "Dashboard:Populasi"
```

### **Di ModalsManager.tsx**
```typescript
// Conditional rendering berdasarkan activeMenu
{activeMenu?.startsWith('Dashboard:Populasi:Overview') && (
  <RingkasanPopulasiModal
    isOpen={true}
    setActiveMenu={setActiveMenu}
    {...props}
  />
)}

{activeMenu?.startsWith('Dashboard:Populasi') && 
 !activeMenu?.startsWith('Dashboard:Populasi:Overview') && (
  <StatistikPopulasiModal
    isOpen={true}
    setActiveMenu={setActiveMenu}
    {...props}
  />
)}
```

---

## 🎨 Tab Button Styling

### **Active State**
```css
/* Ringkasan (Active) */
bg-[#5c3c10]           /* Dark brown background */
text-[#FAF6EE]         /* Cream text */
shadow-md shadow-[#5c3c10]/20
```

### **Inactive State**
```css
/* Statistik (Inactive) */
bg-transparent
text-[#8b7e66]         /* Muted brown */
hover:text-[#5c3c10]   /* Dark on hover */
cursor-pointer
```

### **Container**
```css
bg-[#e4dac3]/40        /* Light semi-transparent background */
p-1                     /* Small padding */
rounded-xl
border border-[#bfae93]/50
backdrop-blur-md        /* Blur effect */
```

---

## 📊 Data Flow untuk Tab Content

### **Data Source: calculateDailyPopulationChange()**

Kedua tab menggunakan **same calculation logic**:
```typescript
const metrics = useMemo(() => {
  if (!countryDetail) return null;
  return hitungDemografi(countryDetail);
}, [countryDetail]);
```

**Return value digunakan oleh:**

| Tab | Uses | Display |
|-----|------|---------|
| Ringkasan | dailyBirths, dailyDeaths, populasi, kepuasanUmum | Daily metrics + Summary |
| Statistik | socialClasses (calculated), lifeExpectancy, security | Social structure breakdown |

---

## 🔑 Key Functions

### **Tab Control Function**
```typescript
// Di RingkasanPopulasiModal.tsx
onClick={() => setActiveMenu?.("Dashboard:Populasi")}

// Ini call setActiveMenu prop yang di-pass dari map-system
// setActiveMenu adalah function dari map-system state
```

### **isOpen Logic**
```typescript
// RingkasanPopulasiModal tetap render ke DOM
// Tapi di-hide dengan:
// - Modal container: fixed positioning
// - Visibility: controlled by isOpen prop
// - Z-index management

// Saat switch tab:
// RingkasanPopulasiModal: isOpen=false → hidden
// StatistikPopulasiModal: isOpen=true → visible
```

---

## 📝 Summary

**Tab Ringkasan & Statistik adalah:**
1. ✅ **Two separate modal components** yang di-render conditionally
2. ✅ **Sharing same data source** (countryDetail + demographic calculations)
3. ✅ **Controlled via activeMenu state** di map-system.tsx
4. ✅ **Styled differently** untuk visual feedback
5. ✅ **Navigation via setActiveMenu callback** yang di-pass as prop

**Alur Teknis:**
```
Tab Button Click
  ↓
setActiveMenu("Dashboard:Populasi")
  ↓
activeMenu state update di map-system
  ↓
ModalsManager re-render
  ↓
Check activeMenu condition
  ↓
Switch modal visibility
  ↓
StatistikPopulasiModal render dengan isOpen=true
```

---

## 🎯 Important Notes

1. **Both modals share same header layout** - Title, tab buttons, close button
2. **Both modals share same summary cards** - Top stats tetap sama
3. **Content area berbeda** - Ringkasan fokus demografis, Statistik fokus sosial struktur
4. **Tab buttons di-render di RingkasanPopulasiModal** - Button untuk switch ke Statistik
5. **StatistikPopulasiModal juga punya tab buttons** - Button untuk switch kembali ke Ringkasan

---

## 🔍 How to Find Tab Navigation

1. **RingkasanPopulasiModal.tsx:128-138** - Tab button for Statistik
2. **StatistikPopulasiModal.tsx:82-93** - Tab button for Ringkasan  
3. **map-system.tsx:61** - activeMenu state
4. **ModalsManager.tsx** - Conditional rendering logic (cari modal render sections)
5. **Navbar.tsx** - onOpenKepuasan trigger untuk buka modal pertama kali
