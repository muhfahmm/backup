// ===================
// DETAIL TOTAL BANGUNAN: Listrik (Total: 6 Bangunan)
// ===================
export const KAPASITAS_LISTRIK_METADATA = {
  "1_pembangkit_listrik_tenaga_nuklir": {
    key: "1_pembangkit_listrik_tenaga_nuklir",
    dataKey: "pembangkit_listrik_tenaga_nuklir",
    label: "PLTN",
    produksi: 10000,
    satuan: "MW",
    deskripsi: "PLTN (Fisi Nuklir)",
    waktu_pembangunan: 360,
    biaya_pembangunan: 10000,
    lowongan_kerja: 2500,
    konsumsi_listrik: 0,
    konsumsi_uranium: 5
  },
  "2_pembangkit_listrik_tenaga_air": {
    key: "2_pembangkit_listrik_tenaga_air",
    dataKey: "pembangkit_listrik_tenaga_air",
    label: "PLTA",
    produksi: 2500,
    satuan: "MW",
    deskripsi: "PLTA (Hidroelektrik)",
    waktu_pembangunan: 180,
    biaya_pembangunan: 5000,
    lowongan_kerja: 800,
    konsumsi_listrik: 0
  },
  "3_pembangkit_listrik_tenaga_surya": {
    key: "3_pembangkit_listrik_tenaga_surya",
    dataKey: "pembangkit_listrik_tenaga_surya",
    label: "PLTS",
    produksi: 500,
    satuan: "MW",
    deskripsi: "PLTS (Panel Surya)",
    waktu_pembangunan: 45,
    biaya_pembangunan: 2000,
    lowongan_kerja: 200,
    konsumsi_listrik: 0
  },
  "4_pembangkit_listrik_tenaga_uap": {
    key: "4_pembangkit_listrik_tenaga_uap",
    dataKey: "pembangkit_listrik_tenaga_uap",
    label: "PLTU",
    produksi: 5000,
    satuan: "MW",
    deskripsi: "PLTU (Tenaga Uap)",
    waktu_pembangunan: 120,
    biaya_pembangunan: 3000,
    lowongan_kerja: 1500,
    konsumsi_listrik: 0
  },
  "5_pembangkit_listrik_tenaga_gas": {
    key: "5_pembangkit_listrik_tenaga_gas",
    dataKey: "pembangkit_listrik_tenaga_gas",
    label: "PLTG",
    produksi: 3000,
    satuan: "MW",
    deskripsi: "PLTG (Gas Alam)",
    waktu_pembangunan: 90,
    biaya_pembangunan: 3000,
    lowongan_kerja: 1000,
    konsumsi_listrik: 0
  },
  "6_pembangkit_listrik_tenaga_angin": {
    key: "6_pembangkit_listrik_tenaga_angin",
    dataKey: "pembangkit_listrik_tenaga_angin",
    label: "PLTB",
    produksi: 250,
    satuan: "MW",
    deskripsi: "PLTB (Angin)",
    waktu_pembangunan: 60,
    biaya_pembangunan: 1500,
    lowongan_kerja: 150,
    konsumsi_listrik: 0
  },
};

export interface SektorListrik {
  pembangkit_listrik_tenaga_nuklir?: number;
  pembangkit_listrik_tenaga_air?: number;
  pembangkit_listrik_tenaga_surya?: number;
  pembangkit_listrik_tenaga_uap?: number;
  pembangkit_listrik_tenaga_gas?: number;
  pembangkit_listrik_tenaga_angin?: number;
}

export interface ElectricityData {
  pembangkit_listrik_tenaga_nuklir: number;
  pembangkit_listrik_tenaga_air: number;
  pembangkit_listrik_tenaga_surya: number;
  pembangkit_listrik_tenaga_uap: number;
  pembangkit_listrik_tenaga_gas: number;
  pembangkit_listrik_tenaga_angin: number;
}

export const DASHBOARD_LABELS = {
  supply: { title: "Pemasukan Listrik (Pasokan)", label: "Total Kapasitas Terpasang", unit: "MW" },
  usage: { title: "Penggunaan Listrik (Beban)", label: "Total Konsumsi Nasional", unit: "MW" },
  balance: { title: "Neraca Daya", label: "Surplus/Defisit", unit: "MW" }
};

export const SECTOR_USAGE_LABELS = {
  extraction: "Sektor Ekstraksi & Energi",
  manufacturing: "Sektor Industri & Manufaktur",
  pangan: "Sektor Pangan (Tani & Ternak)",
  defense: "Sektor Pertahanan & Keamanan",
  social: "Sektor Sosial & Layanan Publik",
  transportation: "Sektor Transportasi & Logistik"
};
