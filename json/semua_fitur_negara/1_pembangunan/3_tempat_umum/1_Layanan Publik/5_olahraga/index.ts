export interface OlahragaData {
  kolam_renang: number;
  sirkuit_balap: number;
  stadion: number;
  stadion_internasional: number;
  gym?: number;
  golf?: number;
  esports?: number;
  gokart?: number;
}

// ===================
// DETAIL TOTAL BANGUNAN: Olahraga & Rekreasi (Total: 7 Bangunan)
// ===================
export const olahragaRate: Record<string, any> = {
  "16_kolam_renang": {
    key: "16_kolam_renang",
    dataKey: "kolam_renang",
    label: "Kolam Renang",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pusat Akuatik Nasional",
    waktu_pembangunan: 7,
    biaya_pembangunan: 9000,
    lowongan_kerja: 600,
    konsumsi_listrik: 45,
    efek: "Meningkatkan kas negara"
  },
  "17_sirkuit_balap": {
    key: "17_sirkuit_balap",
    dataKey: "sirkuit_balap",
    label: "Sirkuit Balap",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Sirkuit Balap Internasional",
    waktu_pembangunan: 40,
    biaya_pembangunan: 71250,
    lowongan_kerja: 8000,
    konsumsi_listrik: 350,
    efek: "Meningkatkan kas negara"
  },
  "18_stadium_int": {
    key: "18_stadium_int",
    dataKey: "stadium_int",
    label: "Stadion (Nas/Int)",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Stadion Utama Internasional",
    waktu_pembangunan: 60,
    biaya_pembangunan: 97500,
    lowongan_kerja: 25000,
    konsumsi_listrik: 950,
    efek: "Meningkatkan kas negara"
  },
  "19_gym_center": {
    key: "19_gym_center",
    dataKey: "gym_center",
    label: "Pusat Kebugaran",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Pusat Kebugaran & Olahraga Terpadu",
    waktu_pembangunan: 15,
    biaya_pembangunan: 18750,
    lowongan_kerja: 1500,
    konsumsi_listrik: 85,
    efek: "Meningkatkan kas negara"
  },
  "20_lapangan_golf": {
    key: "20_lapangan_golf",
    dataKey: "lapangan_golf",
    label: "Lapangan Golf",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Fasilitas Golf Nasional",
    waktu_pembangunan: 25,
    biaya_pembangunan: 41250,
    lowongan_kerja: 3500,
    konsumsi_listrik: 120,
    efek: "Meningkatkan kas negara"
  },
  "21_esports_arena": {
    key: "21_esports_arena",
    dataKey: "esports_arena",
    label: "Arena E-Sports",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Arena E-Sports Global",
    waktu_pembangunan: 30,
    biaya_pembangunan: 56250,
    lowongan_kerja: 5000,
    konsumsi_listrik: 450,
    efek: "Meningkatkan kas negara"
  },
  "22_gokart_circuit": {
    key: "22_gokart_circuit",
    dataKey: "gokart_circuit",
    label: "Sirkuit Gokart",
    produksi: 1,
    satuan: "Unit",
    deskripsi: "Sirkuit Gokart Profesional",
    waktu_pembangunan: 10,
    biaya_pembangunan: 13500,
    lowongan_kerja: 1200,
    konsumsi_listrik: 120,
    efek: "Meningkatkan kas negara"
  },
};
