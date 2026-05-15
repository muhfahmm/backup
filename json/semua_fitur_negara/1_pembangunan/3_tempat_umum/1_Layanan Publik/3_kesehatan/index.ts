export interface KesehatanData {
  rumah_sakit_besar?: number;
  rumah_sakit_kecil?: number;
  pusat_diagnostik?: number;
  harapan_hidup?: number;
  indeks_kesehatan?: number;
}

// ===================
// DETAIL TOTAL BANGUNAN: Kesehatan (Total: 3 Bangunan)
// ===================
export const kesehatanRate: Record<string, any> = {
  "11_rumah_sakit_besar": {
    key: "11_rumah_sakit_besar",
    dataKey: "rumah_sakit_besar",
    label: "Rumah Sakit Umum",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Rumah Sakit Umum Pusat (RSUP)",
    waktu_pembangunan: 45,
    biaya_pembangunan: 82500,
    lowongan_kerja: 18000,
    konsumsi_listrik: 850,
    efek: "Mengurangi jumlah kematian akibat pandemi dan epidemi sebesar 0.05%"
  },
  "12_rumah_sakit_kecil": {
    key: "12_rumah_sakit_kecil",
    dataKey: "rumah_sakit_kecil",
    label: "Rumah Sakit Daerah",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Rumah Sakit Daerah (RSUD)",
    waktu_pembangunan: 30,
    biaya_pembangunan: 33750,
    lowongan_kerja: 4500,
    konsumsi_listrik: 120,
    efek: "Mengurangi jumlah kematian akibat pandemi dan epidemi sebesar 0.03%"
  },
  "13_pusat_diagnostik": {
    key: "13_pusat_diagnostik",
    dataKey: "pusat_diagnostik",
    label: "Laboratorium Medik & Diagnostik Nasional",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Laboratorium Medik & Diagnostik Nasional",
    waktu_pembangunan: 15,
    biaya_pembangunan: 18750,
    lowongan_kerja: 2500,
    konsumsi_listrik: 75,
    efek: "Mengurangi jumlah kematian akibat pandemi dan epidemi sebesar 0.01%"
  },
};
