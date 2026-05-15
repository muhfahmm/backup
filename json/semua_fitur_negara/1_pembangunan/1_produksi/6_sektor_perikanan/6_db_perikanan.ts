// ===================
// DETAIL TOTAL BANGUNAN: Perikanan (Total: 3 Bangunan)
// ===================
export const perikananRate = {
  "1_tambak_udang": {
    key: "1_tambak_udang",
    dataKey: "udang",
    label: "Tambak Udang",
    deskripsi: "Tambang Udang Intensif",
    produksi: 75000,
    satuan: "KG",
    waktu_pembangunan: 15,
    biaya_pembangunan: 2500, // Reduced to 2.5M
    lowongan_kerja: 3500,
    konsumsi_listrik: 25
  },
  "2_budidaya_ikan_tawar": {
    key: "2_budidaya_ikan_tawar",
    dataKey: "ikan",
    label: "Budidaya Ikan",
    deskripsi: "Budidaya Ikan Air Tawar",
    produksi: 120000,
    satuan: "KG",
    waktu_pembangunan: 10,
    biaya_pembangunan: 1500, // Reduced to 1.5M
    lowongan_kerja: 4500,
    konsumsi_listrik: 18
  },
  "3_budidaya_mutiara": {
    key: "3_budidaya_mutiara",
    dataKey: "mutiara",
    label: "Budidaya Mutiara",
    deskripsi: "Budidaya Kerang & Mutiara",
    produksi: 15000,
    satuan: "GRAM",
    waktu_pembangunan: 30,
    biaya_pembangunan: 4500, // Reduced to 4.5M
    lowongan_kerja: 2500,
    konsumsi_listrik: 45
  }
};

export interface SektorPerikanan {
  udang?: number;
  ikan?: number;
  mutiara?: number;
}

export interface FisheryData {
  udang: number;
  ikan: number;
  mutiara: number;
}
