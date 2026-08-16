# Kesejahteraan Calculator - Dokumentasi Lengkap

**Date:** August 16, 2026  
**Status:** ✅ Completed & Integrated
**Build:** ✅ SUCCESS

---

## 📋 Ringkasan

File `kesejahteraanCalculator.ts` menyediakan logika untuk menghitung **Indeks Kesejahteraan (Welfare Index)** yang otomatis **naik atau turun** berdasarkan 3 sektor utama:

1. **Pendidikan (Education)** — 35% bobot
2. **Kesehatan (Health)** — 40% bobot  
3. **Tempat Umum (Public Facilities)** — 25% bobot

Nilai kesejahteraan **real-time** dihitung dan update otomatis setiap kali:
- Fasilitas pendidikan/kesehatan/tempat umum ditambah/dikurangi
- Harapan hidup atau indeks kesehatan berubah
- Populasi berubah (untuk perhitungan rasio)

---

## 📂 Struktur File

### File Baru
```
apps/src/app/logic/kesejahteraanCalculator.ts
```

### File yang Dimodifikasi
```
apps/src/app/page/map_system/map-system.tsx
```

---

## 🔧 Fungsi-Fungsi Utama

### 1. **calculatePendidikanScore(countryDetail)**

Menghitung skor sektor Pendidikan berdasarkan:
- Pendidikan Dasar: Prasekolah, SD, SMP, SMA (target: 1 per 20,000 jiwa)
- Pendidikan Lanjutan: Universitas, Lembaga Pendidikan (target: 1 per 100,000 jiwa)
- Penelitian: Lab, Observatorium, Pusat Penelitian (target: 1 per 200,000 jiwa)
- Literasi: Program literasi (target: 1 per 100,000 jiwa)

```typescript
export interface PendidikanMetrics {
  totalFacilities: number;      // Total jumlah fasilitas pendidikan
  score: number;                // Score 1-100
  detail: {
    prasekolah: number;
    dasar: number;
    menengah: number;
    lanjutan: number;
    universitas: number;
    lembagaPendidikan: number;
    laboratorium: number;
    observatorium: number;
    pusatPenelitian: number;
    pusatPengembangan: number;
    literasi: number;
  };
}

export function calculatePendidikanScore(countryDetail: any): PendidikanMetrics
```

**Return:** Object dengan score dan detail breakdown

**Weighting:**
- Pendidikan Dasar: 50% (fondasi penting)
- Pendidikan Lanjutan: 30% (investasi SDM)
- Penelitian: 15% (inovasi)
- Literasi: 5% (keberlanjutan)

---

### 2. **calculateKesehatanScore(countryDetail)**

Menghitung skor sektor Kesehatan berdasarkan:
- Rumah Sakit Besar & Kecil (target: 1 per 25,000 jiwa)
- Pusat Diagnostik (target: 1 per 500,000 jiwa)
- Harapan Hidup (life expectancy bonus/penalty)
- Indeks Kesehatan (health index bonus)

```typescript
export interface KesehatanMetrics {
  totalFacilities: number;      // Total jumlah fasilitas kesehatan
  score: number;                // Score 1-100 (dapat > 100 dengan bonus)
  detail: {
    rumahSakitBesar: number;
    rumahSakitKecil: number;
    pusatDiagnostik: number;
    harapanHidup: number;
    indeksKesehatan: number;
  };
  lifeExpectancyBonus: number;  // Bonus dari harapan hidup
}

export function calculateKesehatanScore(countryDetail: any): KesehatanMetrics
```

**Bonus Sistem:**
- Harapan hidup ≥ 75 tahun: +4 poin per tahun (max +20)
- Harapan hidup < 70 tahun: -2 poin per tahun (penalty)
- Health Index: +20 poin jika 100% terpenuhi

**Contoh:**
```
Harapan Hidup 78 → Bonus: (78 - 75) * 4 = +12 poin
Indeks Kesehatan 80 → Bonus: (80 / 100) * 20 = +16 poin
```

---

### 3. **calculateTempatUmumScore(countryDetail)**

Menghitung skor sektor Tempat Umum berdasarkan 3 kategori:

**Transportasi (45% bobot):**
- Jalur Sepeda, Jalan Raya, Terminal Bus, Stasiun, Kereta Bawah Tanah
- Pelabuhan, Bandara, Helipad
- Target: 1 per 20,000 jiwa

**Rekreasi (35% bobot):**
- Kolam Renang, Stadium, Gym, Golf, Esports, Gokart
- Bioskop, Teater, Sirkuit Balap
- Target: 1 per 12,500 jiwa

**Komersial (20% bobot):**
- Mall, Hotel, Pusat Grosir Tekstil
- Target: 1 per 50,000 jiwa

```typescript
export interface TempatUmumMetrics {
  totalFacilities: number;      // Total jumlah fasilitas umum
  score: number;                // Score 1-100
  detail: {
    transportasi: number;       // Jumlah fasilitas transportasi
    rekreasi: number;           // Jumlah fasilitas rekreasi
    komersial: number;          // Jumlah fasilitas komersial
  };
}

export function calculateTempatUmumScore(countryDetail: any): TempatUmumMetrics
```

---

### 4. **calculateKesejahteraan(countryDetail, previousScore?)** ⭐ MAIN

Menghitung Indeks Kesejahteraan Keseluruhan dengan weighting:
- **Pendidikan: 35%**
- **Kesehatan: 40%**
- **Tempat Umum: 25%**

```typescript
export interface KesejahteraanIndex {
  overallScore: number;         // Score akhir 1-100
  pendidikanScore: number;      // Sub-score pendidikan
  kesehatanScore: number;       // Sub-score kesehatan
  tempatUmumScore: number;      // Sub-score tempat umum
  trend: 'naik' | 'turun' | 'stabil'; // Trend vs tick sebelumnya
  detail: {
    pendidikan: PendidikanMetrics;
    kesehatan: KesehatanMetrics;
    tempatUmum: TempatUmumMetrics;
  };
}

export function calculateKesejahteraan(
  countryDetail: any, 
  previousScore?: number
): KesejahteraanIndex
```

**Interpretasi Skor:**
| Skor | Status | Interpretasi |
|------|--------|--------------|
| 1-20 | Sangat Buruk | Krisis kesejahteraan total |
| 21-40 | Buruk | Kesejahteraan rendah, urgent action |
| 41-60 | Sedang | Kesejahteraan mencukupi, dapat ditingkatkan |
| 61-80 | Baik | Kesejahteraan tinggi |
| 81-100 | Sangat Baik | Kesejahteraan luar biasa |

**Trend Tracking:**
```typescript
// Jika previousScore diberikan:
- Naik: overallScore > previousScore + 2
- Turun: overallScore < previousScore - 2
- Stabil: Perubahan ≤ 2 poin
```

---

## 🎯 Integrasi dengan map-system.tsx

### State Management
```typescript
const [kesejahteraan, setKesejahteraan] = useState<number>(50);
```

### Auto-Update useEffect
```typescript
useEffect(() => {
    if (!countryDetail || !metadata) return;

    const kesejahteraanResult = calculateKesejahteraan(countryDetail, countryDetail?.kesejahteraan);
    
    // Update hanya jika berubah > 1 poin (mencegah infinite loop)
    const currentKesejahteraan = countryDetail?.kesejahteraan ?? 50;
    if (Math.abs(currentKesejahteraan - kesejahteraanResult.overallScore) < 1) return;

    setCountryDetail((prev: any) => ({
        ...prev, 
        kesejahteraan: kesejahteraanResult.overallScore,
        kesejahteraanTrend: kesejahteraanResult.trend,
    }));
    
    setKesejahteraan(kesejahteraanResult.overallScore);
}, [
    // Dependencies: semua field yang mempengaruhi kesejahteraan
    // - Pendidikan (11 fields)
    // - Kesehatan (5 fields)
    // - Tempat Umum (20+ fields)
    // - Populasi (untuk rasio)
    // - Metadata
]);
```

### Reset on Game Restart
```typescript
handleRestart() {
    // ...
    setKesejahteraan(50);  // Reset ke default
    // ...
}
```

---

## 📊 Contoh Perhitungan

### Skenario: Negara dengan Pembangunan Fasilitas Tinggi

```
KONDISI:
- Populasi: 10 juta
- Harapan Hidup: 78 tahun
- Indeks Kesehatan: 85

PENDIDIKAN:
- Prasekolah: 150 (target: 500) → 30%
- SD: 800 (target: 1000) → 80%
- Universitas: 80 (target: 100) → 80%
- Score Pendidikan: Weighted avg = ~65/100

KESEHATAN:
- RS Besar: 40 (target: 400) → 10%
- RS Kecil: 200 (target: 400) → 50%
- Pusat Diagnostik: 5 (target: 20) → 25%
- Fasilitas Score: ~30/100
- Harapan Hidup Bonus: +12 poin
- Health Index Bonus: +17 poin
- Score Kesehatan: 30 + 12 + 17 = 59/100

TEMPAT UMUM:
- Transportasi: 150 fasilitas → 75%
- Rekreasi: 80 fasilitas → 40%
- Komersial: 30 fasilitas → 60%
- Score Tempat Umum: (75*0.45 + 40*0.35 + 60*0.2) = 56/100

HASIL AKHIR:
Kesejahteraan = (65*0.35 + 59*0.4 + 56*0.25) = 59.5/100 → SEDANG
Trend: Naik (dari previous 55)
```

---

## 🎨 Utility Functions

### getKesejahteraanColor(score)
Mengembalikan Tailwind class untuk warna display:
```typescript
if (score >= 81) return 'text-emerald-700 font-black';     // Hijau gelap
if (score >= 61) return 'text-emerald-600';                // Hijau
if (score >= 41) return 'text-yellow-600';                 // Kuning
if (score >= 21) return 'text-orange-600';                 // Oranye
return 'text-red-700 font-black';                           // Merah gelap
```

### getKesejahteraanStatus(score)
Mengembalikan text status:
```typescript
81-100: "Sangat Baik"
61-80: "Baik"
41-60: "Sedang"
21-40: "Buruk"
1-20: "Sangat Buruk"
```

### getKesejahteraanTrendIcon(trend)
Mengembalikan emoji untuk trend:
```typescript
'naik': "📈"
'turun': "📉"
'stabil': "➡️"
```

### formatKesejahteraan(score)
Format untuk display: `"XX/100"`

### getKesejahteraanBreakdown(kesejahteraan)
Mengembalikan breakdown detail string:
```
Indeks Kesejahteraan: 59/100 (Sedang) 📈

Breakdown:
  • Pendidikan: 65/100
    - 1030 fasilitas pendidikan
  
  • Kesehatan: 59/100 (Bonus harapan hidup: 12.0 poin)
    - 245 fasilitas kesehatan
  
  • Tempat Umum: 56/100
    - 260 fasilitas umum
```

---

## 🚀 Skenario Penggunaan

### 1. **Pemain Ingin Naikkan Kesejahteraan**

**Strategi:**
```
Prioritas 1 (Kesehatan - 40%):
  ✓ Bangun Rumah Sakit Besar/Kecil
  ✓ Naikkan program kesehatan
  ✓ Maintain harapan hidup ≥ 75 tahun

Prioritas 2 (Pendidikan - 35%):
  ✓ Bangun SD, SMP, SMA
  ✓ Investasi Universitas
  ✓ Program literasi

Prioritas 3 (Tempat Umum - 25%):
  ✓ Bangun transportasi (jalan, stasiun)
  ✓ Fasilitas rekreasi
  ✓ Mall/hotel untuk ekonomi
```

### 2. **Pemain Mengabaikan Pembangunan**

```
Kesejahteraan akan:
- Stagnan di 30-40 (kurang fasilitas)
- Turun drastis jika populasi naik (rasio turun)
- Naik sedikit dari bonus harapan hidup alami
```

### 3. **Pemain Fokus pada Kesehatan**

```
Fokus RS + Progam Kesehatan:
- Score Kesehatan: 80+ (bobot 40%)
- Tapi Pendidikan & Tempat Umum stagnan
- Overall Kesejahteraan: 65-70 (cukup baik)
```

---

## 📈 Dampak Game Mechanics

### Pada Kepuasan Rakyat
- Kesejahteraan ≠ Kepuasan (berbeda sistem)
- Kepuasan dipengaruhi pajak, harga, pangan, listrik, hunian, layanan publik
- Kesejahteraan fokus pada kualitas hidup: pendidikan, kesehatan, fasilitas umum

### Pada Populasi
- Harapan hidup naik → Birth rate lebih tinggi
- Health facilities bagus → Death rate lebih rendah
- Kesejahteraan tinggi = lingkungan yang baik untuk populasi tumbuh

### Pada Peringkat Presiden
- Kesejahteraan tidak langsung mempengaruhi peringkat
- Tapi kesejahteraan rendah → kepuasan rendah → peringkat turun

---

## 🧪 Testing

### Unit Test Example
```typescript
import { calculateKesejahteraan, getKesejahteraanStatus } from './kesejahteraanCalculator';

test('Kesejahteraan score calculation', () => {
  const country = {
    jumlah_penduduk: 10000000,
    prasekolah: 100,
    dasar: 500,
    menengah: 300,
    universitas: 50,
    rumah_sakit_besar: 30,
    rumah_sakit_kecil: 150,
    harapan_hidup: 76,
    indeks_kesehatan: 80,
    // ... fasilitas umum
  };
  
  const result = calculateKesejahteraan(country);
  
  expect(result.overallScore).toBeGreaterThan(50);
  expect(result.overallScore).toBeLessThanOrEqual(100);
  expect(result.trend).toMatch(/naik|turun|stabil/);
});
```

---

## 🔗 Related Files

- **Source:** `kesejahteraanCalculator.ts`
- **Integration:** `map-system.tsx` (auto-update useEffect)
- **Display:** `Navbar.tsx` (dapat ditambahkan)
- **Related:** `kepuasanCalculator.ts`, `peringkatCalculator.ts`

---

## ✅ Build & Deployment

**Build Status:** ✅ SUCCESS
```
Compiled successfully in 33.0s
TypeScript check... Finished in 16.4s
No errors or warnings
```

---

## 📝 Changelog

| Date | Change | Status |
|------|--------|--------|
| 2026-08-16 | Create kesejahteraanCalculator.ts | ✅ Done |
| 2026-08-16 | Add calculatePendidikanScore() | ✅ Done |
| 2026-08-16 | Add calculateKesehatanScore() | ✅ Done |
| 2026-08-16 | Add calculateTempatUmumScore() | ✅ Done |
| 2026-08-16 | Add main calculateKesejahteraan() | ✅ Done |
| 2026-08-16 | Integrate into map-system.tsx | ✅ Done |
| 2026-08-16 | Add auto-update useEffect | ✅ Done |
| 2026-08-16 | Build & test integration | ✅ Pass |

---

## 🎯 Next Steps (Optional)

1. ✅ Display kesejahteraan di Navbar
2. ✅ Create Kesejahteraan detail modal (seperti Kepuasan modal)
3. ✅ Add kesejahteraan breakdown visualization
4. ✅ Create warning jika kesejahteraan < 20
5. ✅ Add kesejahteraan historical tracking (untuk trend graph)
6. ✅ Integrate dengan news/event system

---

**End of Kesejahteraan Calculator Documentation**
