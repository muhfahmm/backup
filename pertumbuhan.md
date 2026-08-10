# Analisis Kepuasan Rakyat & Pertumbuhan Populasi

## 1. FAKTOR-FAKTOR YANG MENGHAMBAT KEPUASAN RAKYAT (Penilaian Sektoral)

Berdasarkan fitur yang telah dikembangkan, terdapat **5 sektor utama** yang mempengaruhi kepuasan rakyat dan masuk dalam perhitungan **Penilaian Sektoral**:

### A. Pajak (Tax Rate)
- **Penghambat**: Tingginya beban pajak
- **Mekanisme**: Kepuasan berbanding terbalik dengan rata-rata tingkat pajak
- **Formula**: `Kepuasan = 100 - rata-rata_pajak_all_tax_types`
- **Contoh**: Jika rata-rata pajak 40%, kepuasan dari sektor ini = 60%
- **Dampak**: Semakin tinggi pajak, semakin rendah kepuasan rakyat
- **Implementasi**: File `taxLogic.ts` menghitung kepuasan berdasarkan 8 jenis pajak yang dikonfigurasi

### B. Harga Barang Pokok
- **Penghambat**: Inflasi dan ketidakstabilan harga kebutuhan sehari-hari
- **Indikator**: Living Cost Index (saat ini 62.4)
- **Dampak**: Menurunkan daya beli masyarakat kelas pekerja dan miskin
- **Status**: Saat ini hardcoded di UI dengan skor 50%

### C. Produksi Pangan
- **Penghambat**: Ketersediaan pangan yang rendah atau tidak stabil
- **Aspek**: Ketahanan pangan nasional, ketersediaan industri pangan
- **Populasi Terpengaruh**: Prioritas untuk masyarakat kelas menengah ke bawah
- **Status**: Saat ini hardcoded di UI dengan skor 50%

### D. Produksi Listrik
- **Penghambat**: Ketidakseimbangan pasokan dan permintaan energi
- **Dampak**: Krisis listrik → menurunkan produktivitas → menurunkan kepuasan
- **Aspek Grid Nasional**: Sistem kelistrikan yang stabil dan merata
- **Status**: Saat ini hardcoded di UI dengan skor 50%

### E. Hunian Permukiman
- **Penghambat**: Keterbatasan rumah layak huni dan akses perumahan
- **Indikator**: 
  - Homeless Count = `populasi × 0.007` (0.7% dari total populasi)
  - Menunjukkan persentase tunawisma
- **Dampak**: Homelessness langsung mengurangi kepuasan sosial dan stabilitas
- **Status**: Saat ini hardcoded di UI dengan skor 50%

---

## 2. SISTEM BOOSTER KEPUASAN (Initiatives/Aksi Positif)

Selain penghambat, terdapat **7 inisiatif budaya-olahraga** yang dapat meningkatkan kepuasan:

| No. | Inisiatif | Biaya (EM) | Boost Kepuasan | ROI |
|-----|-----------|-----------|------------------|-----|
| 1 | Konser | 25,000 | +5% | 1:0.0002 |
| 2 | Festival | 50,000 | +10% | 1:0.0002 |
| 3 | Karnaval | 150,000 | +120% | 1:0.0008 |
| 4 | Piala Davis | 400,000 | +300% | 1:0.0075 |
| 5 | Piala Dunia Rugbi | 500,000 | +50% | 1:0.0001 |
| 6 | Olimpiade | 1,500,000 | +75% | 1:0.00005 |
| 7 | Piala Dunia FIFA | 2,500,000 | +100% | 1:0.00004 |

**Mekanisme**: Setiap inisiatif mengurangi anggaran negara dan meningkatkan kepuasan rakyat secara langsung.

---

## 3. BAGAIMANA PERTUMBUHAN POPULASI TERJADI

### A. Formula Dasar Pertumbuhan Populasi

Pertumbuhan populasi dihitung menggunakan model demografi sederhana:

```javascript
dailyBirths = populasi × 0.000042  // Tingkat kelahiran harian
dailyDeaths = populasi × 0.000018  // Tingkat kematian harian
totalDailyDelta = dailyBirths - dailyDeaths  // Net pertumbuhan harian
totalMonthlyGrowthPercent = (totalDailyDelta × 30 / populasi) × 100
```

**Contoh Kalkulasi** (populasi 10 juta):
- Kelahiran harian: 10,000,000 × 0.000042 = 420 jiwa
- Kematian harian: 10,000,000 × 0.000018 = 180 jiwa
- Net pertambahan: 420 - 180 = 240 jiwa/hari
- Pertumbuhan bulanan: (240 × 30 / 10,000,000) × 100 = 0.072%

### B. Faktor-Faktor yang Mempengaruhi Pertumbuhan Populasi

#### 1. **Tingkat Kelahiran** (Birth Rate: 0.42% per hari dari populasi)
- **Dipengaruhi oleh**:
  - Struktur usia populasi (median usia 30.2 tahun = usia reproduksi)
  - Stabilitas ekonomi (kepuasan rakyat → tingkat pernikahan/reproduksi)
  - Akses kesehatan ibu dan anak
  - Budaya dan ideologi agama negara

#### 2. **Tingkat Kematian** (Death Rate: 0.18% per hari dari populasi)
- **Dipengaruhi oleh**:
  - Harapan hidup (saat ini: 73.2 tahun)
  - Keamanan nasional/Stabilitas hukum (84.5%)
  - Akses kesehatan publik
  - Kualitas lingkungan hidup
  - Ketersediaan makanan dan nutrisi

#### 3. **Kualitas Hidup** (Dampak Tidak Langsung)
- **Life Expectancy**: 73.2 tahun
  - Lebih tinggi = tingkat kematian lebih rendah = pertumbuhan lebih pesat
  - Dipengaruhi oleh: kepuasan rakyat, layanan kesehatan, keamanan
  
- **Security Level**: 84.5%
  - Stabilitas hukum → menurunkan kematian kekerasan
  - Tinggi = tingkat kematian turun = pertumbuhan meningkat

#### 4. **Struktur Sosial Populasi** (Social Classes)
Populasi terbagi menjadi:
- **Kaum Elit**: 2.1% → Fertility rate: Rendah (keluarga kecil)
- **Menengah Atas**: 11.8% → Fertility rate: Sedang
- **Kelas Menengah**: 46.4% → Fertility rate: Tinggi (kontribusi terbesar)
- **Kelas Pekerja**: 31.2% → Fertility rate: Sangat Tinggi (keluarga besar)
- **Masyarakat Miskin**: 8.5% → Fertility rate: Paling Tinggi (birth control terbatas)

**Insight**: Populasi kelas pekerja & miskin (39.7%) berkontribusi ~70% terhadap kelahiran baru.

#### 5. **Metrik Demografi Lainnya**
- **Homeless Count** = `populasi × 0.007` (0.7%)
  - Tinggi → menurunkan kepuasan & life expectancy
  - Memicu kelahiran prematur & kematian lebih tinggi di kalangan homeless
  
- **Daily Births** = Ditampilkan di UI sebagai KPI
- **Living Cost Index**: 62.4 (saat ini stabil)
  - Lebih tinggi = lebih banyak kematian kelaparan

---

## 4. INTERKONEKSI KEPUASAN & PERTUMBUHAN POPULASI

### Loop Positif (Virtuous Cycle):
```
Kepuasan ↑ → Life Expectancy ↑ → Kematian ↓ → Pertumbuhan ↑
Kepuasan ↑ → Stabilitas ekonomi ↑ → Birth Rate ↑ → Pertumbuhan ↑
```

### Loop Negatif (Vicious Cycle):
```
Pajak ↑ → Kepuasan ↓ → Security ↓ → Kematian ↑ → Pertumbuhan ↓
Harga ↑ → Kepuasan ↓ → Malnutrisi ↑ → Life Expectancy ↓ → Pertumbuhan ↓
```

---

## 5. REKOMENDASI UNTUK PERTUMBUHAN OPTIMAL

### Strategi Meningkatkan Kepuasan & Pertumbuhan:

1. **Manajemen Pajak Agresif**
   - Target: Rata-rata pajak < 35%
   - Kepuasan akan > 65%

2. **Stabilisasi Harga Pangan**
   - Fokus pada "Industri Pangan" di menu Produksi & Konsumsi
   - Sinkronisasi dengan "Produksi Lahan Pertanian"

3. **Bonus Kelistrikan**
   - Grid Nasional yang stabil = industri produktif = kepuasan naik

4. **Program Perumahan Masif**
   - Kurangi homeless dari 0.7% menjadi < 0.3%
   - Investasi di "Hunian Permukiman"

5. **Events Budaya Strategis**
   - Piala Dunia FIFA (2.5jt cost, +100% boost) = ROI terbaik untuk skala besar
   - Konser/Festival (ROI lebih baik per 100k EM)

---

## 6. STATUS IMPLEMENTASI SAAT INI

### ✅ Sudah Diimplementasi:
- [x] Tax-based satisfaction calculation
- [x] 7 Satisfaction boost initiatives
- [x] Daily births/deaths calculation
- [x] Population growth percentage
- [x] Social class breakdown
- [x] Demographic metrics (life expectancy, security, etc.)
- [x] Homeless count calculation
- [x] 5 Sectoral satisfaction display (Penilaian Sektoral)

### ⚠️ Hardcoded/Belum Dinamis:
- [ ] Sectoral scores (Pajak, Harga, Pangan, Listrik, Hunian) masih 50% fixed
- [ ] Birth rate adjustment berdasarkan kepuasan rakyat (hanya static multiplier)
- [ ] Formula kombinasi sektoral → kepuasan umum belum jelas

### 🔄 Saran Pengembangan Lanjutan:
1. **Dynamic Sectoral Scoring**: Sambungkan economic data real-time ke skor sektor
2. **Kepuasan → Birth Rate Link**: Kepuasan tinggi = birth rate naik
3. **Migrasi Populasi**: Tambahkan outflow/inflow dari negara lain
4. **Crisis Events**: Random disasters yang turunkan life expectancy/security
5. **Resource Scarcity**: Kelangkaan pangan/listrik secara dinamis

---

**Dokumen ini mencakup analisis lengkap kepuasan rakyat & pertumbuhan populasi berdasarkan fitur yang sudah dikembangkan.**
