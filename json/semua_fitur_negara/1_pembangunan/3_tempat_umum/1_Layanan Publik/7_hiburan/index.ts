export interface SektorHiburan {
  bioskop?: number;
  teater?: number;
}

// ===================
// DETAIL TOTAL BANGUNAN: Hiburan (Total: 2 Bangunan)
// ===================
export const hiburanRate: Record<string, any> = {
  "26_bioskop": {
    key: "26_bioskop",
    dataKey: "bioskop",
    label: "Bioskop",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Kompleks Bioskop Nasional",
    waktu_pembangunan: 120,
    biaya_pembangunan: 26250,
    lowongan_kerja: 2500,
    konsumsi_listrik: 120,
    efek: "Meningkatkan kas negara"
  },
  "27_gedung_teater": {
    key: "27_gedung_teater",
    dataKey: "gedung_teater",
    label: "Gedung Teater",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Gedung Teater & Seni Pertunjukan Nasional",
    waktu_pembangunan: 150,
    biaya_pembangunan: 48750,
    lowongan_kerja: 3500,
    konsumsi_listrik: 150,
    efek: "Meningkatkan kas negara"
  },
};
