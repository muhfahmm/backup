// ===================
// DETAIL TOTAL BANGUNAN: Farmasi (Total: 1 Bangunan)
// ===================
export const farmasiRate = {
  "1_pabrik_farmasi": {
    key: "1_pabrik_farmasi",
    dataKey: "farmasi",
    label: "Pabrik Farmasi",
    deskripsi: "Pabrik Farmasi",
    produksi: 45000,
    satuan: "BOX",
    waktu_pembangunan: 50,
    biaya_pembangunan: 9500,
    lowongan_kerja: 12000,
    konsumsi_listrik: 250
  }
};

export interface SektorFarmasi {
  farmasi?: number;
}

export interface PharmacyData {
  farmasi: number;
}
