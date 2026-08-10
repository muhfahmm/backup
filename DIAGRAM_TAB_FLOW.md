# 📊 Visual Diagram: Tab Ringkasan & Statistik Flow

## 🎯 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                      map-system.tsx (Main)                       │
│                                                                   │
│  const [activeMenu, setActiveMenu] = useState('Peta Taktis')    │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    ModalsManager.tsx                             │
│  (Conditional Rendering berdasarkan activeMenu)                 │
│                                                                   │
│  if (activeMenu?.startsWith('Dashboard:Populasi:Overview'))     │
│    → Render RingkasanPopulasiModal                              │
│                                                                   │
│  else if (activeMenu?.startsWith('Dashboard:Populasi'))         │
│    → Render StatistikPopulasiModal                              │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
        ↓                                   ↓
┌──────────────────────────┐   ┌──────────────────────────┐
│ RingkasanPopulasiModal   │   │ StatistikPopulasiModal   │
│ (Tab 1: Ringkasan)       │   │ (Tab 2: Statistik)       │
│                          │   │                          │
│ isOpen: depends on       │   │ isOpen: depends on       │
│ activeMenu value         │   │ activeMenu value         │
│                          │   │                          │
│ ┌──────────────────────┐ │   │ ┌──────────────────────┐ │
│ │ Header + Tabs        │ │   │ │ Header + Tabs        │ │
│ │ [Ringkasan][Statistik]│─┼──→│ │ [Ringkasan][Statistik]│ │
│ └──────────────────────┘ │   │ └──────────────────────┘ │
│           ↓              │   │           ↓              │
│ ┌──────────────────────┐ │   │ ┌──────────────────────┐ │
│ │ Content:             │ │   │ │ Content:             │ │
│ │ - Demographics       │ │   │ │ - Social Structure   │ │
│ │ - Vitalitas Metrics  │ │   │ │ - Demographics       │ │
│ └──────────────────────┘ │   │ └──────────────────────┘ │
│                          │   │                          │
└──────────────────────────┘   └──────────────────────────┘
```

---

## 🔄 State Flow: Tab Navigation

### **Scenario 1: User Opens Kependudukan Modal**

```
1. User clicks "KEPUASAN" in Navbar
   ↓
2. onOpenKepuasan() triggered
   ↓
3. setActiveMenu("Dashboard:Kepuasan")
   ↓
4. activeMenu = "Dashboard:Kepuasan"
   ↓
5. ModalsManager checks condition
   ├─ Dashboard:Populasi? NO
   └─ Keep RingkasanPopulasiModal hidden
   ↓
6. User navigates to Populasi (via menu)
   ↓
7. setActiveMenu("Dashboard:Populasi")
   ↓
8. activeMenu = "Dashboard:Populasi"
   ↓
9. ModalsManager detects change
   ├─ Dashboard:Populasi:Overview? NO
   ├─ Dashboard:Populasi? YES ✓
   └─ Render RingkasanPopulasiModal (isOpen=true)
```

---

### **Scenario 2: User Clicks Statistik Tab**

```
RingkasanPopulasiModal isOpen
│
├─ Header rendered ✓
│  ├─ Title: "KEPENDUDUKAN" ✓
│  └─ Tab Buttons ✓
│     ├─ [Ringkasan] (active - dark background)
│     │   className="bg-[#5c3c10] text-[#FAF6EE]"
│     │
│     └─ [Statistik] (inactive - hover effect)
│         className="text-[#8b7e66] hover:text-[#5c3c10]"
│         onClick={() => setActiveMenu?.("Dashboard:Populasi")}
│
└─ User clicks [Statistik] button
   ↓
   onClick triggered
   ↓
   setActiveMenu?.("Dashboard:Populasi")
   ↓
   map-system setActiveMenu state updates
   ↓
   activeMenu = "Dashboard:Populasi"
   ↓
   ModalsManager re-renders
   ↓
   Condition check:
   if (activeMenu?.startsWith('Dashboard:Populasi:Overview'))
     ├─ FALSE (it's "Dashboard:Populasi", not "...Overview")
     └─ Don't render RingkasanPopulasiModal
   
   else if (activeMenu?.startsWith('Dashboard:Populasi'))
     ├─ TRUE ✓
     └─ Render StatistikPopulasiModal (isOpen=true)
   ↓
   StatistikPopulasiModal renders with data
   ├─ Same header layout
   ├─ Same summary cards
   └─ Different content (Struktur Kelas Sosial)
```

---

### **Scenario 3: User Clicks Ringkasan Tab (dari Statistik)**

```
StatistikPopulasiModal isOpen
│
├─ Header rendered ✓
│  ├─ Title: "KEPENDUDUKAN" ✓
│  └─ Tab Buttons ✓
│     ├─ [Ringkasan] (inactive - hover effect)
│     │   onClick={() => setActiveMenu?.("Dashboard:Populasi:Overview")}
│     │
│     └─ [Statistik] (active - dark background)
│         className="bg-[#5c3c10] text-[#FAF6EE]"
│
└─ User clicks [Ringkasan] button
   ↓
   onClick triggered
   ↓
   setActiveMenu?.("Dashboard:Populasi:Overview")
   ↓
   map-system setActiveMenu state updates
   ↓
   activeMenu = "Dashboard:Populasi:Overview"
   ↓
   ModalsManager re-renders
   ↓
   Condition check:
   if (activeMenu?.startsWith('Dashboard:Populasi:Overview'))
     ├─ TRUE ✓
     └─ Render RingkasanPopulasiModal (isOpen=true)
   
   else if (activeMenu?.startsWith('Dashboard:Populasi'))
     ├─ Also TRUE, but first condition already matched
     └─ Only RingkasanPopulasiModal renders
   ↓
   StatistikPopulasiModal closes (RingkasanPopulasiModal takes precedence)
```

---

## 🎨 Tab Button Styling

### **Visual Representation**

```
┌─────────────────────────────────────────────┐
│  Tab Container (bg-[#e4dac3]/40)            │
│                                              │
│  ┌────────────────────────────────────────┐ │
│  │ Active Tab (Ringkasan)                 │ │
│  │ ┌──────────────────────────────────┐   │ │
│  │ │ bg: #5c3c10 (dark brown)         │   │ │
│  │ │ text: #FAF6EE (cream)            │   │ │
│  │ │ RINGKASAN                        │   │ │
│  │ └──────────────────────────────────┘   │ │
│  │                                         │ │
│  │ Inactive Tab (Statistik)                │ │
│  │ ┌──────────────────────────────────┐   │ │
│  │ │ bg: transparent                  │   │ │
│  │ │ text: #8b7e66 (muted)           │   │ │
│  │ │ hover: #5c3c10                   │   │ │
│  │ │ STATISTIK                        │   │ │
│  │ └──────────────────────────────────┘   │ │
│  └────────────────────────────────────────┘ │
│                                              │
└─────────────────────────────────────────────┘
```

---

## 📊 Content Differences

```
┌────────────────────────────┬────────────────────────────┐
│   RINGKASAN                │   STATISTIK                │
├────────────────────────────┼────────────────────────────┤
│ 1. Informasi Demografi     │ 1. Struktur Kelas Sosial   │
│    - Daily births          │    - Kaum Elit (2.1%)      │
│    - Daily deaths          │    - Menengah Atas (11.8%) │
│    - Net change            │    - Kelas Menengah (46.4%)│
│                            │    - Kelas Pekerja (31.2%) │
│ 2. Kondisi Sosial          │    - Masyarakat Miskin     │
│    - Keamanan: 84.5%       │      (8.5%)                │
│    - Harapan Hidup: 73 thn │                            │
│    - Kepuasan: 50%         │ 2. Metrik Demografi        │
│                            │    - Harapan Hidup         │
│                            │    - Keamanan Nasional     │
│                            │    - Median Usia           │
│                            │    - Kelahiran Harian      │
└────────────────────────────┴────────────────────────────┘
```

---

## 🔗 Code Reference

### **File Locations**

| Component | File | Line |
|-----------|------|------|
| Tab Buttons (Ringkasan) | RingkasanPopulasiModal.tsx | ~128-138 |
| Tab Buttons (Statistik) | StatistikPopulasiModal.tsx | ~82-93 |
| setActiveMenu trigger | RingkasanPopulasiModal.tsx | 133 |
| setActiveMenu trigger | StatistikPopulasiModal.tsx | 89 |
| activeMenu state | map-system.tsx | 61 |
| Modal rendering logic | ModalsManager.tsx | Search for "Dashboard:Populasi" |

### **Key Code Snippets**

```typescript
// RingkasanPopulasiModal.tsx - Click Statistik
<button
  onClick={() => setActiveMenu?.("Dashboard:Populasi")}
  className="px-6 py-2 rounded-lg text-xs font-black uppercase..."
>
  Statistik
</button>

// StatistikPopulasiModal.tsx - Click Ringkasan
<button
  onClick={() => setActiveMenu?.("Dashboard:Populasi:Overview")}
  className="px-6 py-2 rounded-lg text-xs font-black uppercase..."
>
  Ringkasan
</button>

// map-system.tsx - State
const [activeMenu, setActiveMenu] = useState('Peta Taktis');

// ModalsManager.tsx - Conditional Render
{activeMenu?.startsWith('Dashboard:Populasi:Overview') && (
  <RingkasanPopulasiModal isOpen={true} {...props} />
)}
```

---

## 🎯 Key Takeaways

1. **Tab buttons are rendered INSIDE each modal** - Not in a separate tab container
2. **activeMenu state controls which modal to show** - It's the source of truth
3. **Both modals share the same data source** - countryDetail
4. **Navigation is via setActiveMenu prop** - Passed from map-system through ModalsManager
5. **Smooth UX**: User sees instant tab switch without page reload
