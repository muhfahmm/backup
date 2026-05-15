export interface SektorArmadaKepolisian {
  armada_polisi: {
    markas_besar_polri: number;
    akademi_kepolisian: number;
    pusat_forensik: number;
    kantor_polisi: number;
    pos_polisi: number;
    network_cctv: number;
    armada_mobil_polisi: number;
    mobil_patroli_interceptor: number;
    unit_roda_dua: number;
    helikopter_polisi: number;
    unit_k9: number;
    pasukan_swat: number;
    samapta: number;
  };
}

// ===================
// DETAIL TOTAL BANGUNAN: Kepolisian Negara (Total: 13 Jenis)
// ===================
export const armadaPolisiRate: Record<string, any> = {
  // --- PUSAT KOMANDO & PENDIDIKAN ---
  "1_pusat_komando": {
    key: "1_pusat_komando",
    dataKey: "markas_besar_polri",
    label: "Markas Besar Polisi Nasional",
    deskripsi: "Pusat Komando & Pengendali Keamanan Nasional",
    biaya_pembangunan: 93750, // Reduced from 125M
    waktu_pembangunan: 90,

    lowongan_kerja: 45000,
    konsumsi_listrik: 850,
    satuan: "Unit"
  },
  "2_akademi_polisi": {
    key: "2_akademi_polisi",
    dataKey: "akademi_kepolisian",
    label: "Akademi Kepolisian Nasional",
    deskripsi: "Pusat Pendidikan & Pelatihan Perwira",
    biaya_pembangunan: 33750, // Reduced from 45M
    waktu_pembangunan: 60,

    lowongan_kerja: 8500,
    konsumsi_listrik: 350,
    satuan: "Unit"
  },
  "3_pusat_forensik": {
    key: "3_pusat_forensik",
    dataKey: "pusat_forensik",
    label: "Pusat Lab Forensik Nasional",
    deskripsi: "Identifikasi Digital & Fisik Terpadu",
    biaya_pembangunan: 26250, // Reduced from 35M
    waktu_pembangunan: 60,

    lowongan_kerja: 2500,
    konsumsi_listrik: 150,
    satuan: "Unit"
  },

  // --- UNIT PELAYANAN & KEWILAYAHAN ---
  "4_kantor_polisi": {
    key: "4_kantor_polisi",
    dataKey: "kantor_polisi",
    label: "Kantor Polisi Resor (Polres)",
    deskripsi: "Pusat Komando Keamanan Wilayah",
    biaya_pembangunan: 18750, // Reduced from 25M
    waktu_pembangunan: 30,

    lowongan_kerja: 5500,
    konsumsi_listrik: 120,
    satuan: "Unit"
  },
  "5_pos_polisi": {
    key: "5_pos_polisi",
    dataKey: "pos_polisi",
    label: "Unit Pelayanan Polsek",
    deskripsi: "Pelayanan Keamanan Masyarakat Terpadu",
    biaya_pembangunan: 7500, // Reduced from 10M
    waktu_pembangunan: 30,

    lowongan_kerja: 1200,
    konsumsi_listrik: 45,
    satuan: "Unit"
  },
  "6_network_cctv": {
    key: "6_network_cctv",
    dataKey: "network_cctv",
    label: "Jaringan Surveillance Kota",
    deskripsi: "Sistem Pengawasan CCTV Terintegrasi",
    biaya_pembangunan: 11250, // Reduced from 15M
    waktu_pembangunan: 5,

    lowongan_kerja: 800,
    konsumsi_listrik: 85,
    satuan: "Unit"
  },

  // --- ARMADA & RESPON CEPAT ---
  "7_armada_mobil": {
    key: "7_armada_mobil",
    dataKey: "armada_mobil_polisi",
    label: "Armada Mobil Patroli",
    deskripsi: "Unit Reaksi Cepat & Logistik Polisi",
    biaya_pembangunan: 3750, // Reduced from 5M
    waktu_pembangunan: 15,

    lowongan_kerja: 500,
    konsumsi_listrik: 10,
    satuan: "Unit"
  },
  "8_mobil_interceptor": {
    key: "8_mobil_interceptor",
    dataKey: "mobil_patroli_interceptor",
    label: "Mobil Patroli Interceptor",
    deskripsi: "Unit Pengejaran & Patroli Jalan Raya",
    biaya_pembangunan: 2250, // Reduced from 3M
    waktu_pembangunan: 15,

    lowongan_kerja: 200,
    konsumsi_listrik: 10,
    satuan: "Unit"
  },
  "9_unit_r2": {
    key: "9_unit_r2",
    dataKey: "unit_roda_dua",
    label: "Unit Patroli Roda Dua",
    deskripsi: "Patroli Gesit & Respon Cepat Kota",
    biaya_pembangunan: 1125, // Reduced from 1.5M
    waktu_pembangunan: 7,

    lowongan_kerja: 100,
    konsumsi_listrik: 5,
    satuan: "Unit"
  },
  "10_heli_polisi": {
    key: "10_heli_polisi",
    dataKey: "helikopter_polisi",
    label: "Helikopter Patroli Polisi",
    deskripsi: "Pengawasan & Respon Taktis Udara",
    biaya_pembangunan: 33750, // Reduced from 45M
    waktu_pembangunan: 90,

    lowongan_kerja: 1500,
    konsumsi_listrik: 120,
    satuan: "Unit"
  },

  // --- PASUKAN KHUSUS ---
  "11_unit_k9": {
    key: "11_unit_k9",
    dataKey: "unit_k9",
    label: "Unit K-9 Nasional",
    deskripsi: "Pasukan Pelacak & K-9 Taktis",
    biaya_pembangunan: 2250, // Reduced from 3M
    waktu_pembangunan: 7,

    lowongan_kerja: 800,
    konsumsi_listrik: 25,
    satuan: "Unit"
  },
  "12_swat": {
    key: "12_swat",
    dataKey: "pasukan_swat",
    label: "Pasukan Taktis Khusus (Brimob)",
    deskripsi: "Unit Anti-Teror & Respon Taktis Tinggi",
    biaya_pembangunan: 26250, // Reduced from 35M
    waktu_pembangunan: 60,

    lowongan_kerja: 8500,
    konsumsi_listrik: 150,
    satuan: "Unit"
  },
  "13_anti_huru_hara": {
    key: "13_anti_huru_hara",
    dataKey: "samapta",
    label: "Pasukan Samapta & Pengamanan",
    deskripsi: "Pemeliharaan Ketertiban & Anti Huru-Hara",
    biaya_pembangunan: 15000, // Reduced from 20M
    waktu_pembangunan: 30,

    lowongan_kerja: 12000,
    konsumsi_listrik: 85,
    satuan: "Unit"
  },
};
