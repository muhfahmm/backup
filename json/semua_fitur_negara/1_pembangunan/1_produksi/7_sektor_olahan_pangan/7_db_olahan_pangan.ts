// ===================
// DETAIL TOTAL BANGUNAN: Olahan Pangan (Total: 10 Bangunan)
// ===================
export const olahanPanganRate = {
  "1_pabrik_air_mineral": {
    key: "1_pabrik_air_mineral",
    dataKey: "air_mineral",
    label: "Pabrik Air Mineral",
    deskripsi: "Pabrik Air Mineral",
    produksi: 250000,
    satuan: "LITER",
    waktu_pembangunan: 7,
    biaya_pembangunan: 1500, // Reduced to 1.5M
    lowongan_kerja: 4500,
    konsumsi_listrik: 35
  },
  "2_pabrik_gula": {
    key: "2_pabrik_gula",
    dataKey: "gula",
    label: "Pabrik Gula",
    deskripsi: "Pabrik Gula",
    produksi: 45000,
    satuan: "TON",
    waktu_pembangunan: 20,
    biaya_pembangunan: 5500, // Reduced to 5.5M
    lowongan_kerja: 8000,
    konsumsi_listrik: 95
  },
  "3_pabrik_roti": {
    key: "3_pabrik_roti",
    dataKey: "roti",
    label: "Pabrik Roti",
    deskripsi: "Pabrik Roti",
    produksi: 150000,
    satuan: "UNIT",
    waktu_pembangunan: 7,
    biaya_pembangunan: 1400, // Reduced to 1.4M
    lowongan_kerja: 3500,
    konsumsi_listrik: 42
  },
  "4_pabrik_pengolahan_daging": {
    key: "4_pabrik_pengolahan_daging",
    dataKey: "pengolahan_daging",
    label: "Pabrik Pengolahan Daging",
    deskripsi: "Pabrik Pengolahan Daging",
    produksi: 12000,
    satuan: "TON",
    waktu_pembangunan: 30,
    biaya_pembangunan: 6000, // Reduced to 6M
    lowongan_kerja: 6500,
    konsumsi_listrik: 120
  },
  "5_pabrik_mie_instan": {
    key: "5_pabrik_mie_instan",
    dataKey: "mie_instan",
    label: "Pabrik Mie Instan",
    deskripsi: "Pabrik Mie Instan",
    produksi: 550000,
    satuan: "UNIT",
    waktu_pembangunan: 15,
    biaya_pembangunan: 3500, // Reduced to 3.5M
    lowongan_kerja: 7500,
    konsumsi_listrik: 85
  },
  "6_pabrik_minyak_goreng": {
    key: "6_pabrik_minyak_goreng",
    dataKey: "minyak_goreng",
    label: "Pabrik Minyak Goreng",
    deskripsi: "Pabrik Minyak Goreng",
    produksi: 95000,
    satuan: "TON",
    waktu_pembangunan: 20,
    biaya_pembangunan: 4500, // Reduced to 4.5M
    lowongan_kerja: 6000,
    konsumsi_listrik: 75
  },
  "7_pabrik_pengolahan_susu": {
    key: "7_pabrik_pengolahan_susu",
    dataKey: "susu",
    label: "Pabrik Pengolahan Susu",
    deskripsi: "Pabrik Pengolahan Susu",
    produksi: 180000,
    satuan: "LITER",
    waktu_pembangunan: 10,
    biaya_pembangunan: 2800, // Reduced to 2.8M
    lowongan_kerja: 5000,
    konsumsi_listrik: 60
  },
  "8_pabrik_pakan_ternak": {
    key: "8_pabrik_pakan_ternak",
    dataKey: "pakan_ternak",
    label: "Pabrik Pakan Ternak",
    deskripsi: "Pabrik Pakan Ternak",
    produksi: 85000,
    satuan: "TON",
    waktu_pembangunan: 10,
    biaya_pembangunan: 2000, // Reduced to 2M
    lowongan_kerja: 4500,
    konsumsi_listrik: 55
  },
  "9_pabrik_pengalengan_ikan": {
    key: "9_pabrik_pengalengan_ikan",
    dataKey: "ikan_kaleng",
    label: "Pabrik Pengalengan Ikan",
    deskripsi: "Pabrik Pengalengan Ikan",
    produksi: 25000,
    satuan: "TON",
    waktu_pembangunan: 10,
    biaya_pembangunan: 2500, // Reduced to 2.5M
    lowongan_kerja: 5500,
    konsumsi_listrik: 65
  },
  "10_pabrik_pengolahan_kopi_teh": {
    key: "10_pabrik_pengolahan_kopi_teh",
    dataKey: "kopi_teh",
    label: "Pabrik Pengolahan Kopi & Teh",
    deskripsi: "Pabrik Pengolahan Kopi & Teh",
    produksi: 35000,
    satuan: "KG",
    waktu_pembangunan: 7,
    biaya_pembangunan: 1200, // Reduced to 1.2M
    lowongan_kerja: 4000,
    konsumsi_listrik: 45
  }
};

export interface SektorOlahanPangan {
  air_mineral?: number;
  gula?: number;
  roti?: number;
  pengolahan_daging?: number;
  mie_instan?: number;
  minyak_goreng?: number;
  susu?: number;
  pakan_ternak?: number;
  ikan_kaleng?: number;
  kopi_teh?: number;
}

export interface FoodProcessingData {
  air_mineral: number;
  gula: number;
  roti: number;
  pengolahan_daging: number;
  mie_instan: number;
  minyak_goreng: number;
  susu: number;
  pakan_ternak: number;
  ikan_kaleng: number;
  kopi_teh: number;
}
