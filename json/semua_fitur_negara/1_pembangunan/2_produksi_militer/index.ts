// ===================
// DETAIL TOTAL BANGUNAN: Pabrik Militer (Total: 4 Bangunan)
// ===================
export const pabrikMiliterRate = {
  "2_pabrik_amunisi": {
    key: "2_pabrik_amunisi",
    dataKey: "pabrik_amunisi",
    groupId: "pabrik_militer",
    label: "Pabrik Amunisi",
    deskripsi: "Produksi Amunisi Militer",
    biaya_pembangunan: 63750, // Reduced from 85M
    waktu_pembangunan: 30,
    lowongan_kerja: 12000,
    konsumsi_listrik: 120,
    produksi: 25000,
    satuan: "Unit"
  }
};

export interface SektorPabrikMiliter {
  pabrik_amunisi: number;
}

export const militerRate = {
  "2_pabrik_amunisi": {
    dataKey: "pabrik_amunisi",
    production: 25000,
    unit: "Unit"
  }
};

export const produksiMiliterPabrik = [
  { key: "pabrik_amunisi", category: "Pabrik", label: "Pabrik Amunisi Militer", deskripsi: "Produksi Amunisi", biaya_pembangunan: 63750, waktu_pembangunan: 30, biaya_pemeliharaan: 420000 }
];
