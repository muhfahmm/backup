export interface SektorKomersial {
  pusat_belanja?: number;
  hotel?: number;
  pusat_grosir_tekstil?: number;
}

// ===================
// DETAIL TOTAL BANGUNAN: Komersial (Total: 3 Bangunan)
// ===================
export const komersialRate: Record<string, any> = {
  "23_pusat_belanja": {
    key: "23_pusat_belanja",
    dataKey: "pusat_belanja",
    label: "Pusat Perbelanjaan",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pusat Perbelanjaan & Mall Nasional",
    waktu_pembangunan: 50,
    biaya_pembangunan: 48750,
    lowongan_kerja: 25000,
    konsumsi_listrik: 650,
    efek: "Meningkatkan kas negara"
  },
  "24_hotel": {
    key: "24_hotel",
    dataKey: "hotel",
    label: "Hotel & Resort",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Kompleks Hotel & Resort Internasional",
    waktu_pembangunan: 35,
    biaya_pembangunan: 63750,
    lowongan_kerja: 8500,
    konsumsi_listrik: 350,
    efek: "Meningkatkan kas negara"
  },
  "25_pusat_grosir_tekstil": {
    key: "25_pusat_grosir_tekstil",
    dataKey: "pusat_grosir_tekstil",
    label: "Pusat Grosir",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pusat Perdagangan & Logistik Tekstil",
    waktu_pembangunan: 20,
    biaya_pembangunan: 26250,
    lowongan_kerja: 12000,
    konsumsi_listrik: 150,
    efek: "Meningkatkan kas negara"
  },
};
