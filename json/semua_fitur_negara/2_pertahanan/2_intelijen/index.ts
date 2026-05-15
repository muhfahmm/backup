export interface IntelligenceData {
  sistem_satelit: number;
  jaringan_radar: number;
  operasi_siber: number;
}

export const intelijenRate = {
  "sistem_satelit": {
    key: "sistem_satelit",
    dataKey: "sistem_satelit",
    label: "Sistem Satelit Intelijen",
    deskripsi: "Sistem Satelit Intelijen Strategis Nasional",
    biaya_pembangunan: 112500, // Reduced from 150M
    waktu_pembangunan: 90,

    lowongan_kerja: 4500,
    konsumsi_listrik: 650,
  },
  "jaringan_radar": {
    key: "jaringan_radar",
    dataKey: "jaringan_radar",
    label: "Jaringan Radar Nasional",
    deskripsi: "Jaringan Radar Pertahanan Nasional Terpadu",
    biaya_pembangunan: 63750, // Reduced from 85M
    waktu_pembangunan: 30,

    lowongan_kerja: 3500,
    konsumsi_listrik: 550,
  },
  "operasi_siber": {
    key: "operasi_siber",
    dataKey: "operasi_siber",
    label: "Pusat Operasi Siber",
    deskripsi: "Pusat Operasi Intelijen & Pertahanan Siber",
    biaya_pembangunan: 48750, // Reduced from 65M
    waktu_pembangunan: 60,

    lowongan_kerja: 12000,
    konsumsi_listrik: 450,
  },
};
