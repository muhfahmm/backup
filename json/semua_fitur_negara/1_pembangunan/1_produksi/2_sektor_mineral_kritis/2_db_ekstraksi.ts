// ===================
// DETAIL TOTAL BANGUNAN: Ekstraksi (Total: 12 Bangunan)
// ===================
export const mineralKritisRate = {
  "1_tambang_emas": {
    key: "1_tambang_emas",
    dataKey: "emas",
    label: "Tambang Emas",
    deskripsi: "Tambang Emas",
    produksi: 150,
    satuan: "KG",
    waktu_pembangunan: 120,
    biaya_pembangunan: 6000,
    lowongan_kerja: 1000,
    konsumsi_listrik: 80
  },
  "2_tambang_uranium": {
    key: "2_tambang_uranium",
    dataKey: "uranium",
    label: "Tambang Uranium",
    deskripsi: "Tambang Uranium",
    produksi: 100,
    satuan: "KG",
    waktu_pembangunan: 240,
    biaya_pembangunan: 7500,
    lowongan_kerja: 500,
    konsumsi_listrik: 150
  },
  "3_tambang_batu_bara": {
    key: "3_tambang_batu_bara",
    dataKey: "batu_bara",
    label: "Tambang Batu Bara",
    deskripsi: "Tambang Batu Bara",
    produksi: 15000,
    satuan: "TON",
    waktu_pembangunan: 90,
    biaya_pembangunan: 1500,
    lowongan_kerja: 2000,
    konsumsi_listrik: 120
  },
  "4_sumur_minyak": {
    key: "4_sumur_minyak",
    dataKey: "minyak_bumi",
    label: "Sumur Minyak Bumi",
    deskripsi: "Sumur Minyak Bumi",
    produksi: 25000,
    satuan: "BARREL",
    waktu_pembangunan: 150,
    biaya_pembangunan: 4500,
    lowongan_kerja: 300,
    konsumsi_listrik: 150
  },
  "5_sumur_gas": {
    key: "5_sumur_gas",
    dataKey: "gas_alam",
    label: "Sumur Gas Alam",
    deskripsi: "Sumur Gas Alam",
    produksi: 5000,
    satuan: "MMSCFD",
    waktu_pembangunan: 120,
    biaya_pembangunan: 4000,
    lowongan_kerja: 200,
    konsumsi_listrik: 130
  },
  "6_tambang_garam": {
    key: "6_tambang_garam",
    dataKey: "garam",
    label: "Tambang Garam",
    deskripsi: "Tambang Garam",
    produksi: 10000,
    satuan: "TON",
    waktu_pembangunan: 45,
    biaya_pembangunan: 500,
    lowongan_kerja: 400,
    konsumsi_listrik: 45
  },
  "7_tambang_nikel": {
    key: "7_tambang_nikel",
    dataKey: "nikel",
    label: "Tambang Nikel",
    deskripsi: "Tambang Nikel",
    produksi: 12000,
    satuan: "TON",
    waktu_pembangunan: 180,
    biaya_pembangunan: 5000,
    lowongan_kerja: 1500,
    konsumsi_listrik: 320
  },
  "8_tambang_litium": {
    key: "8_tambang_litium",
    dataKey: "litium",
    label: "Tambang Litium",
    deskripsi: "Tambang Litium",
    produksi: 8000,
    satuan: "TON",
    waktu_pembangunan: 210,
    biaya_pembangunan: 5500,
    lowongan_kerja: 1200,
    konsumsi_listrik: 250
  },
  "9_tambang_tembaga": {
    key: "9_tambang_tembaga",
    dataKey: "tembaga",
    label: "Tambang Tembaga",
    deskripsi: "Tambang Tembaga",
    produksi: 14000,
    satuan: "TON",
    waktu_pembangunan: 120,
    biaya_pembangunan: 3500,
    lowongan_kerja: 1500,
    konsumsi_listrik: 240
  },
  "10_tambang_aluminium": {
    key: "10_tambang_aluminium",
    dataKey: "aluminium",
    label: "Tambang Aluminium",
    deskripsi: "Tambang Aluminium",
    produksi: 18000,
    satuan: "TON",
    waktu_pembangunan: 90,
    biaya_pembangunan: 3000,
    lowongan_kerja: 1400,
    konsumsi_listrik: 550
  },
  "11_tambang_ltj": {
    key: "11_tambang_ltj",
    dataKey: "logam_tanah_jarang",
    label: "Tambang Logam Tanah Jarang",
    deskripsi: "Tambang Logam Tanah Jarang",
    produksi: 500,
    satuan: "KG",
    waktu_pembangunan: 360,
    biaya_pembangunan: 9000,
    lowongan_kerja: 800,
    konsumsi_listrik: 380
  },
  "12_tambang_bijih_besi": {
    key: "12_tambang_bijih_besi",
    dataKey: "bijih_besi",
    label: "Tambang Bijih Besi",
    deskripsi: "Tambang Bijih Besi",
    produksi: 25000,
    satuan: "TON",
    waktu_pembangunan: 90,
    biaya_pembangunan: 2500,
    lowongan_kerja: 1800,
    konsumsi_listrik: 180
  },
};

export interface SektorEkstraksi {
  emas?: number;
  uranium?: number;
  batu_bara?: number;
  minyak_bumi?: number;
  gas_alam?: number;
  garam?: number;
  nikel?: number;
  litium?: number;
  tembaga?: number;
  aluminium?: number;
  logam_tanah_jarang?: number;
  bijih_besi?: number;
}

export interface ExtractionData {
  emas: number;
  uranium: number;
  batu_bara: number;
  minyak_bumi: number;
  gas_alam: number;
  garam: number;
  nikel: number;
  litium: number;
  tembaga: number;
  aluminium: number;
  logam_tanah_jarang: number;
  bijih_besi: number;
}
