// ===================
// DETAIL TOTAL BANGUNAN: Manufaktur (Total: 7 Bangunan)
// ===================
export const manufakturRate = {
  "1_pabrik_elektronik": {
    key: "1_pabrik_elektronik",
    dataKey: "semikonduktor",
    label: "Pabrik Semikonduktor",
    deskripsi: "Pabrik Semikonduktor",
    produksi: 150,
    satuan: "UNIT",
    waktu_pembangunan: 360,
    biaya_pembangunan: 9500,
    lowongan_kerja: 15000,
    konsumsi_listrik: 650
  },
  "2_pabrik_mobil": {
    key: "2_pabrik_mobil",
    dataKey: "mobil",
    label: "Pabrik Mobil",
    deskripsi: "Pabrik Mobil",
    produksi: 5500,
    satuan: "UNIT",
    waktu_pembangunan: 240,
    biaya_pembangunan: 6500,
    lowongan_kerja: 35000,
    konsumsi_listrik: 420
  },
  "3_pabrik_motor": {
    key: "3_pabrik_motor",
    dataKey: "sepeda_motor",
    label: "Pabrik Motor",
    deskripsi: "Pabrik Motor",
    produksi: 18000,
    satuan: "UNIT",
    waktu_pembangunan: 120,
    biaya_pembangunan: 3500,
    lowongan_kerja: 22000,
    konsumsi_listrik: 280
  },
  "4_smelter": {
    key: "4_smelter",
    dataKey: "smelter",
    label: "Pabrik Logam (Smelter)",
    deskripsi: "Pabrik Logam (Smelter)",
    produksi: 35000,
    satuan: "TON",
    waktu_pembangunan: 180,
    biaya_pembangunan: 7500,
    lowongan_kerja: 12000,
    konsumsi_listrik: 950
  },
  "5_pabrik_semen": {
    key: "5_pabrik_semen",
    dataKey: "semen_beton",
    label: "Pabrik Beton & Semen",
    deskripsi: "Pabrik Beton & Semen",
    produksi: 95000,
    satuan: "TON",
    waktu_pembangunan: 90,
    biaya_pembangunan: 2800,
    lowongan_kerja: 8000,
    konsumsi_listrik: 580
  },
  "6_penggergajian_kayu": {
    key: "6_penggergajian_kayu",
    dataKey: "kayu",
    label: "Penggergajian Kayu",
    deskripsi: "Penggergajian Kayu",
    produksi: 32000,
    satuan: "M3",
    waktu_pembangunan: 60,
    biaya_pembangunan: 1500,
    lowongan_kerja: 5000,
    konsumsi_listrik: 150
  },
  "7_pabrik_pupuk": {
    key: "7_pabrik_pupuk",
    dataKey: "pupuk",
    label: "Pabrik Pupuk",
    deskripsi: "Pabrik Pupuk",
    produksi: 42000,
    satuan: "TON",
    waktu_pembangunan: 90,
    biaya_pembangunan: 2000,
    lowongan_kerja: 7000,
    konsumsi_listrik: 320
  },
};

export interface SektorManufaktur {
  semikonduktor?: number;
  mobil?: number;
  sepeda_motor?: number;
  smelter?: number;
  semen_beton?: number;
  kayu?: number;
  pupuk?: number;
}

export interface ManufacturingData {
  semikonduktor: number;
  mobil: number;
  sepeda_motor: number;
  smelter: number;
  semen_beton: number;
  kayu: number;
  pupuk: number;
}
