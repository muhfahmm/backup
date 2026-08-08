# Requirements Logic untuk Armada Militer

Folder ini berisi logika material requirements untuk semua tipe infrastruktur dan unit militer Armada.

## Struktur Folder

```
requirements_logic/
├── 1_infanteri/
│   └── requirements.ts         - Barak (Pasukan Infanteri)
├── 2_hangar_tank/
│   └── requirements.ts         - Hangar Tank + Tank & APC
├── 3_gudang_senjata/
│   └── requirements.ts         - Gudang Senjata + Artileri, Roket, Pertahanan Udara
├── 4_pangkalan_laut/
│   └── requirements.ts         - Pangkalan Laut + semua jenis Kapal
├── 5_pangkalan_udara/
│   └── requirements.ts         - Pangkalan Udara + semua jenis Pesawat
└── README.md                   - File ini
```

## Daftar Kategori & Building

### 1_infanteri (Infanteri)
- **barak** - Fasilitas pelatihan pasukan infanteri

Material dibutuhkan:
- Semen Beton: 250 unit
- Batu Bara: 100 unit
- Besi: 150 unit
- Kayu: 200 unit

---

### 2_hangar_tank (Hangar Tank)
- **hangar_tank** - Fasilitas penyimpanan tank dan APC
- **tank_tempur_utama** - Kendaraan tempur utama
- **apc_ifv** - Armored Personnel Carrier / Infantry Fighting Vehicle

**Hangar Tank (Infrastruktur)**
- Semen Beton: 500 unit
- Besi: 400 unit
- Batu Bara: 200 unit
- Kayu: 300 unit

**Tank Tempur Utama (Produksi)**
- Besi: 800 unit
- Minyak Bumi: 400 unit
- Timah: 150 unit

**APC / IFV (Produksi)**
- Besi: 600 unit
- Minyak Bumi: 300 unit
- Aluminium: 100 unit

---

### 3_gudang_senjata (Gudang Senjata)
- **gudang_senjata** - Fasilitas penyimpanan senjata dan amunisi
- **artileri_berat** - Sistem artileri berat
- **sistem_peluncur_roket** - Sistem peluncur roket
- **pertahanan_udara_mobile** - Sistem pertahanan udara mobile
- **kendaraan_taktis** - Kendaraan taktis pendukung

**Gudang Senjata (Infrastruktur)**
- Semen Beton: 400 unit
- Besi: 300 unit
- Kayu: 250 unit
- Batu Bara: 150 unit

**Artileri Berat (Produksi)**
- Besi: 1000 unit
- Minyak Bumi: 500 unit
- Timah: 200 unit

**Sistem Peluncur Roket (Produksi)**
- Besi: 900 unit
- Minyak Bumi: 600 unit
- Tembaga: 250 unit

**Pertahanan Udara Mobile (Produksi)**
- Besi: 700 unit
- Minyak Bumi: 400 unit
- Aluminium: 200 unit

**Kendaraan Taktis (Produksi)**
- Besi: 500 unit
- Minyak Bumi: 300 unit
- Karet: 150 unit

---

### 4_pangkalan_laut (Pangkalan Laut)
- **pangkalan_laut** - Fasilitas maritim utama
- **kapal_induk** - Kapal induk konvensional
- **kapal_induk_nuklir** - Kapal induk bertenaga nuklir
- **kapal_destroyer** - Kapal penghancur
- **kapal_korvet** - Kapal perang berkecil
- **kapal_selam_nuklir** - Kapal selam bertenaga nuklir
- **kapal_selam_regular** - Kapal selam konvensional
- **kapal_ranjau** - Kapal penabur ranjau
- **kapal_logistik** - Kapal pendukung logistik

**Pangkalan Laut (Infrastruktur)**
- Semen Beton: 600 unit
- Besi: 400 unit
- Kayu: 500 unit
- Batu Bara: 200 unit

**Kapal Induk (Produksi)**
- Besi: 3000 unit
- Minyak Bumi: 1500 unit
- Tembaga: 500 unit

**Kapal Induk Nuklir (Produksi)**
- Besi: 4000 unit
- Minyak Bumi: 2000 unit
- Uranium: 300 unit

**Kapal Destroyer (Produksi)**
- Besi: 2000 unit
- Minyak Bumi: 1000 unit
- Tembaga: 400 unit

**Kapal Korvet (Produksi)**
- Besi: 1200 unit
- Minyak Bumi: 600 unit
- Aluminium: 250 unit

**Kapal Selam Nuklir (Produksi)**
- Besi: 2500 unit
- Minyak Bumi: 1200 unit
- Uranium: 250 unit

**Kapal Selam Reguler (Produksi)**
- Besi: 1500 unit
- Minyak Bumi: 800 unit
- Tembaga: 300 unit

**Kapal Ranjau (Produksi)**
- Besi: 800 unit
- Minyak Bumi: 400 unit
- Timah: 150 unit

**Kapal Logistik (Produksi)**
- Besi: 1000 unit
- Minyak Bumi: 500 unit
- Kayu: 300 unit

---

### 5_pangkalan_udara (Pangkalan Udara)
- **pangkalan_udara** - Fasilitas penerbangan utama
- **jet_tempur_siluman** - Jet tempur stealth
- **jet_tempur_interceptor** - Jet tempur interceptor
- **pesawat_pengebom** - Pesawat pengebom
- **helikopter_serang** - Helikopter serang
- **pesawat_pengintai** - Pesawat pengintai
- **drone_intai_uav** - Drone pengintai (UAV)
- **drone_kamikaze** - Drone kamikaze
- **pesawat_angkut** - Pesawat angkut militer

**Pangkalan Udara (Infrastruktur)**
- Semen Beton: 700 unit
- Besi: 500 unit
- Kayu: 400 unit
- Batu Bara: 250 unit

**Jet Tempur Siluman (Produksi)**
- Besi: 2000 unit
- Minyak Bumi: 1200 unit
- Aluminium: 400 unit

**Jet Tempur Interceptor (Produksi)**
- Besi: 1800 unit
- Minyak Bumi: 1000 unit
- Aluminium: 350 unit

**Pesawat Pengebom (Produksi)**
- Besi: 2200 unit
- Minyak Bumi: 1300 unit
- Tembaga: 300 unit

**Helikopter Serang (Produksi)**
- Besi: 1400 unit
- Minyak Bumi: 800 unit
- Aluminium: 250 unit

**Pesawat Pengintai (Produksi)**
- Besi: 1000 unit
- Minyak Bumi: 600 unit
- Aluminium: 200 unit

**Drone Intai UAV (Produksi)**
- Besi: 400 unit
- Minyak Bumi: 200 unit
- Aluminium: 100 unit

**Drone Kamikaze (Produksi)**
- Besi: 300 unit
- Minyak Bumi: 150 unit
- Timah: 80 unit

**Pesawat Angkut (Produksi)**
- Besi: 1600 unit
- Minyak Bumi: 900 unit
- Aluminium: 300 unit

---

## Type Definitions

Setiap file requirements.ts mengekspor:

```typescript
export type RequirementItem = {
  group: string;              // 'pembangunan' atau 'produksi'
  label: string;              // Nama material (e.g., 'semen beton')
  resourceKey: string;        // Key resource di database (e.g., 'semen_beton')
  amount: number;             // Jumlah material dibutuhkan
};

export type BuildingRequirements = {
  buildingKey: string;        // Key bangunan/unit militer
  requirements: RequirementItem[];
};
```

## Function Exports

Setiap file menyediakan:

- `findRequirements(buildingKey: string)` - Cari requirements untuk specific building
- `getTotalProduction(...)` - Hitung total produksi berdasarkan jumlah unit dan metadata

---

## Integration Notes

Files ini siap untuk di-import ke modal components atau logic files untuk:
- Validate material requirements saat pembelian
- Display material grid di modal pembangunan
- Check stock availability
- Calculate missing materials

Contoh import:
```typescript
import { REQUIREMENTS, findRequirements } from '../requirements_logic/1_infanteri/requirements';
```
