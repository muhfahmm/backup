// ===================
// DETAIL TOTAL BANGUNAN: Armada Militer (Total: 22 Unit)
// ===================
export const armadaMiliterRate = {
  // ARMADA DARAT
  "1_barak": {
    key: "1_barak",
    dataKey: "barak",
    groupId: "darat",
    label: "Barak Militer",
    deskripsi: "Kompleks Hunian & Pelatihan Tentara",
    biaya_pembangunan: 26250,
    waktu_pembangunan: 15,
    lowongan_kerja: 8000,
    konsumsi_listrik: 650,
  },
  "2_tank": {
    key: "2_tank",
    dataKey: "tank_tempur_utama",
    groupId: "darat",
    label: "Main Battle Tank (MBT)",
    deskripsi: "Divisi Kavaleri Berat",
    biaya_pembangunan: 63750,
    waktu_pembangunan: 30,
    lowongan_kerja: 15000,
    konsumsi_bahan_bakar: 19000
  },
  "3_apc": {
    key: "3_apc",
    dataKey: "apc_ifv",
    groupId: "darat",
    label: "APC / IFV",
    deskripsi: "Transportasi Taktis & Mekanis",
    biaya_pembangunan: 26250,
    waktu_pembangunan: 15,
    lowongan_kerja: 10000,
    konsumsi_bahan_bakar: 8000
  },
  "4_artileri": {
    key: "4_artileri",
    dataKey: "artileri_berat",
    groupId: "darat",
    label: "Artileri Berat",
    deskripsi: "Sistem Pukulan Jarak Jauh",
    biaya_pembangunan: 48750,
    waktu_pembangunan: 45,
    lowongan_kerja: 8500,
    konsumsi_bahan_bakar: 6000
  },
  "5_roket_peluncur": {
    key: "5_roket_peluncur",
    dataKey: "sistem_peluncur_roket",
    groupId: "darat",
    label: "MLRS Rocket System",
    deskripsi: "Sistem Roket Multi-Laras",
    biaya_pembangunan: 71250,
    waktu_pembangunan: 60,
    lowongan_kerja: 5000,
    konsumsi_bahan_bakar: 10000
  },
  "6_misil_sam": {
    key: "6_misil_sam",
    dataKey: "pertahanan_udara_mobile",
    groupId: "darat",
    label: "Mobile SAM System",
    deskripsi: "Pertahanan Udara Jarak Menengah",
    biaya_pembangunan: 93750,
    waktu_pembangunan: 60,
    lowongan_kerja: 6000,
    konsumsi_bahan_bakar: 15000
  },
  "7_kendaraan_taktis": {
    key: "7_kendaraan_taktis",
    dataKey: "kendaraan_taktis",
    groupId: "darat",
    label: "Kendaraan Taktis",
    deskripsi: "Unit Patroli & Serbu Cepat",
    biaya_pembangunan: 11250,
    waktu_pembangunan: 10,
    lowongan_kerja: 2500,
    konsumsi_bahan_bakar: 12000
  },
  
  // ARMADA LAUT
  "8_kapal_induk": {
    key: "8_kapal_induk",
    dataKey: "kapal_induk",
    groupId: "laut",
    label: "Kapal Induk Konvensional",
    deskripsi: "Pangkalan Udara Maritim Terapung",
    biaya_pembangunan: 1125000,
    waktu_pembangunan: 360,
    lowongan_kerja: 35000,
    konsumsi_bahan_bakar: 12000000
  },
  "8b_kapal_induk_nuklir": {
    key: "8b_kapal_induk_nuklir",
    dataKey: "kapal_induk_nuklir",
    groupId: "laut",
    label: "Kapal Induk Nuklir",
    deskripsi: "Supremasi Maritim Global",
    biaya_pembangunan: 1875000,
    waktu_pembangunan: 480,
    lowongan_kerja: 45000,
    konsumsi_uranium: 5
  },
  "9_kapal_perusak": {
    key: "9_kapal_perusak",
    dataKey: "kapal_destroyer",
    groupId: "laut",
    label: "Kapal Destroyer",
    deskripsi: "Perusak Pertahanan Maritim",
    biaya_pembangunan: 337500,
    waktu_pembangunan: 180,
    lowongan_kerja: 18000,
    konsumsi_bahan_bakar: 15000000
  },
  "10_kapal_korvet": {
    key: "10_kapal_korvet",
    dataKey: "kapal_korvet",
    groupId: "laut",
    label: "Kapal Korvet",
    deskripsi: "Kapal Kawal Terintegrasi",
    biaya_pembangunan: 135000,
    waktu_pembangunan: 90,
    lowongan_kerja: 8500,
    konsumsi_bahan_bakar: 8000000
  },
  "11_kapal_selam_nuklir": {
    key: "11_kapal_selam_nuklir",
    dataKey: "kapal_selam_nuklir",
    groupId: "laut",
    label: "Kapal Selam Nuklir",
    deskripsi: "Siluman Bawah Laut Nasional",
    biaya_pembangunan: 562500,
    waktu_pembangunan: 240,
    lowongan_kerja: 6500,
    konsumsi_uranium: 2
  },
  "12_kapal_selam_reguler": {
    key: "12_kapal_selam_reguler",
    dataKey: "kapal_selam_regular",
    groupId: "laut",
    label: "Kapal Selam Reguler",
    deskripsi: "Patroli Bawah Laut",
    biaya_pembangunan: 187500,
    waktu_pembangunan: 120,
    lowongan_kerja: 4500,
    konsumsi_bahan_bakar: 4000000
  },
  "13_penyapu_ranjau": {
    key: "13_penyapu_ranjau",
    dataKey: "kapal_ranjau",
    groupId: "laut",
    label: "Kapal Ranjau",
    deskripsi: "Penyapu & Penanam Ranjau",
    biaya_pembangunan: 63750,
    waktu_pembangunan: 60,
    lowongan_kerja: 2500,
    konsumsi_bahan_bakar: 3000000
  },
  "14_kapal_logistik": {
    key: "14_kapal_logistik",
    dataKey: "kapal_logistik",
    groupId: "laut",
    label: "Kapal Logistik Maritim",
    deskripsi: "Suplai & Perbekalan Armada",
    biaya_pembangunan: 90000,
    waktu_pembangunan: 90,
    lowongan_kerja: 4500,
    konsumsi_bahan_bakar: 6000000
  },
  
  // ARMADA UDARA
  "15_jet_tempur_siluman": {
    key: "15_jet_tempur_siluman",
    dataKey: "jet_tempur_siluman",
    groupId: "udara",
    label: "Jet Tempur Stealth",
    deskripsi: "Supremasi Udara Generasi-5",
    biaya_pembangunan: 112500,
    waktu_pembangunan: 120,
    lowongan_kerja: 12000,
    konsumsi_bahan_bakar: 12000000
  },
  "16_jet_pencegat": {
    key: "16_jet_pencegat",
    dataKey: "jet_tempur_interceptor",
    groupId: "udara",
    label: "Jet Interceptor",
    deskripsi: "Pertahanan Udara Cepat",
    biaya_pembangunan: 63750,
    waktu_pembangunan: 90,
    lowongan_kerja: 8500,
    konsumsi_bahan_bakar: 10000000
  },
  "17_pesawat_pembom": {
    key: "17_pesawat_pembom",
    dataKey: "pesawat_pengebom",
    groupId: "udara",
    label: "Pesawat Pengebom Strategis",
    deskripsi: "Pukulan Udara Jarak Jauh",
    biaya_pembangunan: 187500,
    waktu_pembangunan: 180,
    lowongan_kerja: 15000,
    konsumsi_bahan_bakar: 20000000
  },
  "18_helikopter_serbu": {
    key: "18_helikopter_serbu",
    dataKey: "helikopter_serang",
    groupId: "udara",
    label: "Helikopter Serang",
    deskripsi: "Bantuan Tembakan Udara Dekat",
    biaya_pembangunan: 41250,
    waktu_pembangunan: 45,
    lowongan_kerja: 5500,
    konsumsi_bahan_bakar: 5000000
  },
  "19_pesawat_intai": {
    key: "19_pesawat_intai",
    dataKey: "pesawat_pengintai",
    groupId: "udara",
    label: "Pesawat Intai Strategis (AWACS)",
    deskripsi: "Komando & Pengamatan Udara",
    biaya_pembangunan: 71250,
    waktu_pembangunan: 90,
    lowongan_kerja: 4500,
    konsumsi_bahan_bakar: 4000000
  },
  "20_drone_intai": {
    key: "20_drone_intai",
    dataKey: "drone_intai_uav",
    groupId: "udara",
    label: "Drone Intai UAV",
    deskripsi: "Pengamatan Tanpa Awak",
    biaya_pembangunan: 11250,
    waktu_pembangunan: 30,
    lowongan_kerja: 1200,
    konsumsi_bahan_bakar: 500000
  },
  "21_drone_kamikaze": {
    key: "21_drone_kamikaze",
    dataKey: "drone_kamikaze",
    groupId: "udara",
    label: "Drone Kamikaze",
    deskripsi: "Amunisi Cerdas Presisi",
    biaya_pembangunan: 3750,
    waktu_pembangunan: 7,
    lowongan_kerja: 500,
    konsumsi_bahan_bakar: 200000
  },
  "22_transport_udara": {
    key: "22_transport_udara",
    dataKey: "pesawat_angkut",
    groupId: "udara",
    label: "Pesawat Angkut Berat",
    biaya_pembangunan: 56250,
    waktu_pembangunan: 60,
    lowongan_kerja: 6500,
    konsumsi_bahan_bakar: 8000000
  }
};

export interface SektorArmadaMiliter {
  barak: number;
  darat: {
    tank_tempur_utama: number;
    apc_ifv: number;
    artileri_berat: number;
    sistem_peluncur_roket: number;
    pertahanan_udara_mobile: number;
    kendaraan_taktis: number;
  };
  laut: {
    kapal_induk: number;
    kapal_induk_nuklir: number;
    kapal_destroyer: number;
    kapal_korvet: number;
    kapal_selam_nuklir: number;
    kapal_selam_regular: number;
    kapal_ranjau: number;
    kapal_logistik: number;
  };
  udara: {
    jet_tempur_siluman: number;
    jet_tempur_interceptor: number;
    pesawat_pengebom: number;
    helikopter_serang: number;
    pesawat_pengintai: number;
    drone_intai_uav: number;
    drone_kamikaze: number;
    pesawat_angkut: number;
  };
}

export const armadaMiliterList = [
  // 2. Armada Tempur (Armada)
  { key: "barak", category: "Armada", label: "Barak Militer", deskripsi: "Hunian Tentara", biaya_pembangunan: 26250, waktu_pembangunan: 15, biaya_pemeliharaan: 15 },
  { key: "tank", category: "Armada", label: "Main Battle Tank", deskripsi: "Kavaleri Darat", biaya_pembangunan: 63750, waktu_pembangunan: 30, biaya_pemeliharaan: 10 },
  { key: "apc", category: "Armada", label: "APC / IFV", deskripsi: "Transportasi Taktis", biaya_pembangunan: 26250, waktu_pembangunan: 15, biaya_pemeliharaan: 4 },
  { key: "artileri", category: "Armada", label: "Artileri Berat", deskripsi: "Pukulan Jarak Jauh", biaya_pembangunan: 48750, waktu_pembangunan: 45, biaya_pemeliharaan: 8 },
  { key: "rocket", category: "Armada", label: "MLRS Rocket", deskripsi: "Sistem Roket", biaya_pembangunan: 71250, waktu_pembangunan: 60, biaya_pemeliharaan: 12 },
  { key: "sam", category: "Armada", label: "Mobile SAM", deskripsi: "Hulu Ledak", biaya_pembangunan: 93750, waktu_pembangunan: 60, biaya_pemeliharaan: 15 },
  { key: "tactical", category: "Armada", label: "Kendaraan Taktis", deskripsi: "Patroli Tempur", biaya_pembangunan: 11250, waktu_pembangunan: 10, biaya_pemeliharaan: 2 },
  { key: "carrier", category: "Armada", label: "Kapal Induk Konvensional", deskripsi: "Pangkalan Apung", biaya_pembangunan: 1125000, waktu_pembangunan: 360, biaya_pemeliharaan: 200 },
  { key: "nuclear_carrier", category: "Armada", label: "Kapal Induk Nuklir", deskripsi: "Pangkalan Udara Terapung", biaya_pembangunan: 1875000, waktu_pembangunan: 480, biaya_pemeliharaan: 400 },
  { key: "destroyer", category: "Armada", label: "Kapal Destroyer", deskripsi: "Perusak Maritim", biaya_pembangunan: 337500, waktu_pembangunan: 180, biaya_pemeliharaan: 100 },
  { key: "corvette", category: "Armada", label: "Kapal Korvet", deskripsi: "Kapal Kawal", biaya_pembangunan: 135000, waktu_pembangunan: 90, biaya_pemeliharaan: 45 },
  { key: "submarine", category: "Armada", label: "Kapal Selam Nuklir", deskripsi: "Siluman Bawah Air", biaya_pembangunan: 562500, waktu_pembangunan: 240, biaya_pemeliharaan: 150 },
  { key: "reg_sub", category: "Armada", label: "Kapal Selam Reguler", deskripsi: "Selam Reguler", biaya_pembangunan: 187500, waktu_pembangunan: 120, biaya_pemeliharaan: 60 },
  { key: "mine_ship", category: "Armada", label: "Kapal Ranjau", deskripsi: "Penyapu Ranjau", biaya_pembangunan: 63750, waktu_pembangunan: 60, biaya_pemeliharaan: 15 },
  { key: "logistics", category: "Armada", label: "Kapal Logistik", deskripsi: "Suplai Maritim", biaya_pembangunan: 90000, waktu_pembangunan: 90, biaya_pemeliharaan: 25 },
  { key: "stealth_jet", category: "Armada", label: "Jet Stealth", deskripsi: "Supremasi Udara", biaya_pembangunan: 112500, waktu_pembangunan: 120, biaya_pemeliharaan: 120 },
  { key: "interceptor", category: "Armada", label: "Jet Interceptor", deskripsi: "Satu Pencegat", biaya_pembangunan: 63750, waktu_pembangunan: 90, biaya_pemeliharaan: 55 },
  { key: "bomber", category: "Armada", label: "Pesawat Pengebom", deskripsi: "Serangan Udara", biaya_pembangunan: 187500, waktu_pembangunan: 180, biaya_pemeliharaan: 180 },
  { key: "heli_attack", category: "Armada", label: "Heli Serang", deskripsi: "Bantuan Udara", biaya_pembangunan: 41250, waktu_pembangunan: 45, biaya_pemeliharaan: 25 },
  { key: "recon_plane", category: "Armada", label: "Pesawat Intai", deskripsi: "Intelijen Udara", biaya_pembangunan: 71250, waktu_pembangunan: 90, biaya_pemeliharaan: 20 },
  { key: "uav", category: "Armada", label: "Drone UAV", deskripsi: "Intai Tanpa Awak", biaya_pembangunan: 11250, waktu_pembangunan: 30, biaya_pemeliharaan: 5 },
  { key: "kamikaze", category: "Armada", label: "Drone Kamikaze", deskripsi: "Serangan Bunuh Diri", biaya_pembangunan: 3750, waktu_pembangunan: 7, biaya_pemeliharaan: 1 },
  { key: "transport", category: "Armada", label: "Pesawat Angkut", deskripsi: "Logistik Udara", biaya_pembangunan: 56250, waktu_pembangunan: 60, biaya_pemeliharaan: 15 }
];
