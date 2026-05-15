export interface SektorInfrastruktur {
  jalur_sepeda: number;
  jalan_raya: number;
  terminal_bus: number;
  stasiun_kereta_api: number;
  kereta_bawah_tanah: number;
  pelabuhan: number;
  bandara: number;
  helipad: number;
}

// ===================
// DETAIL TOTAL BANGUNAN: Infrastruktur (Total: 8 Bangunan)
// ===================
export const infrastrukturRate: Record<string, any> = {
  "1_jalur_sepeda": {
    key: "1_jalur_sepeda",
    dataKey: "jalur_sepeda",
    label: "Jalur Sepeda",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Jalur Sepeda",
    waktu_pembangunan: 5,
    biaya_pembangunan: 3750,
    lowongan_kerja: 500,
    konsumsi_listrik: 10,
    efek: "Meningkatkan kepuasan 0.1%"
  },
  "2_jalan_tol": {
    key: "2_jalan_tol",
    dataKey: "jalan_raya",
    label: "Jalan Raya",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Jalan Raya / Tol",
    waktu_pembangunan: 20,
    biaya_pembangunan: 37500,
    lowongan_kerja: 5500,
    konsumsi_listrik: 85,
    efek: "Meningkatkan kepuasan 0.3%"
  },
  "3_terminal_bus": {
    key: "3_terminal_bus",
    dataKey: "terminal_bus",
    label: "Terminal Bus",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Terminal Bus",
    waktu_pembangunan: 15,
    biaya_pembangunan: 18750,
    lowongan_kerja: 3500,
    konsumsi_listrik: 120,
    efek: "Meningkatkan kepuasan 0.5%"
  },
  "4_jalur_kereta": {
    key: "4_jalur_kereta",
    dataKey: "stasiun_kereta_api",
    label: "Stasiun Kereta Api",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Jalur Kereta Api",
    waktu_pembangunan: 30,
    biaya_pembangunan: 56250,
    lowongan_kerja: 12000,
    konsumsi_listrik: 450,
    efek: "Meningkatkan kepuasan 0.5%"
  },
  "5_kereta_bawah_tanah": {
    key: "5_kereta_bawah_tanah",
    dataKey: "kereta_bawah_tanah",
    label: "Kereta Bawah Tanah",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Kereta Bawah Tanah (Subway)",
    waktu_pembangunan: 40,
    biaya_pembangunan: 71250,
    lowongan_kerja: 18000,
    konsumsi_listrik: 850,
    efek: "Meningkatkan kepuasan 0.1%"
  },
  "6_pelabuhan_laut": {
    key: "6_pelabuhan_laut",
    dataKey: "pelabuhan",
    label: "Pelabuhan",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pelabuhan Laut",
    waktu_pembangunan: 50,
    biaya_pembangunan: 90000,
    lowongan_kerja: 45000,
    konsumsi_listrik: 1200,
    efek: "Mempercepat Estimasi Waktu Pengiriman ekspor-impor 0.5%"
  },
  "7_bandara": {
    key: "7_bandara",
    dataKey: "bandara",
    label: "Bandara",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Bandara Internasional",
    waktu_pembangunan: 60,
    biaya_pembangunan: 112500,
    lowongan_kerja: 65000,
    konsumsi_listrik: 1800,
    efek: "Mempercepat Estimasi Waktu Pengiriman ekspor-impor 0.3%"
  },
  "8_helipad": {
    key: "8_helipad",
    dataKey: "helipad",
    label: "Helipad",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Helipad",
    waktu_pembangunan: 7,
    biaya_pembangunan: 11250,
    lowongan_kerja: 800,
    konsumsi_listrik: 45,
    efek: "Mempercepat Estimasi Waktu Pengiriman ekspor-impor 0.1%"
  },
};
