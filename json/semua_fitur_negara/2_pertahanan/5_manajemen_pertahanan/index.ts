export interface SektorPertahanan {
  penjara: number;
  gudang_senjata: number;
  hangar_tank: number;
  pusat_komando: number;
  pangkalan_udara: number;
  pangkalan_laut: number;
  program_luar_angkasa: number;
  lisensi_siber?: boolean;
  pertahanan_siber: number;
}

// ===================
// DETAIL TOTAL BANGUNAN: Pertahanan (Total: 9 Bangunan)
// ===================
export const pertahananRate = {
  "1_penjara": {
    key: "1_penjara",
    dataKey: "penjara",
    groupId: "pertahanan",
    label: "Penjara",
    deskripsi: "Lembaga Pemasyarakatan",
    biaya_pembangunan: 41250,
    waktu_pembangunan: 15,
    lowongan_kerja: 200,
    kapasitas: 5000,
    satuan_kapasitas: "Tahanan",
    konsumsi_listrik: 200
  },
  "2_gudang_senjata": {
    key: "2_gudang_senjata",
    dataKey: "gudang_senjata",
    groupId: "pertahanan",
    label: "Gudang Senjata",
    deskripsi: "Penyimpanan Amunisi",
    biaya_pembangunan: 26250,
    waktu_pembangunan: 30,
    lowongan_kerja: 100,
    kapasitas: 10000,
    satuan_kapasitas: "Unit Amunisi",
    konsumsi_listrik: 200
  },
  "3_hangar_tank": {
    key: "3_hangar_tank",
    dataKey: "hangar_tank",
    groupId: "pertahanan",
    label: "Hangar Tank",
    deskripsi: "Garasi Tempur",
    biaya_pembangunan: 63750,
    waktu_pembangunan: 30,
    lowongan_kerja: 150,
    kapasitas: 50,
    satuan_kapasitas: "Main Battle Tank",
    konsumsi_listrik: 500
  },
  "5_pusat_komando": {
    key: "5_pusat_komando",
    dataKey: "pusat_komando",
    groupId: "pertahanan",
    label: "Pusat Komando",
    deskripsi: "Komando Tertinggi",
    biaya_pembangunan: 187500,
    waktu_pembangunan: 120,
    lowongan_kerja: 250,
    kapasitas: 1,
    satuan_kapasitas: "Komando Strategis",
    konsumsi_listrik: 150
  },
  "6_pangkalan_udara": {
    key: "6_pangkalan_udara",
    dataKey: "pangkalan_udara",
    groupId: "pertahanan",
    label: "Pangkalan Udara",
    deskripsi: "Fasilitas Dirgantara",
    biaya_pembangunan: 337500,
    waktu_pembangunan: 60,
    lowongan_kerja: 500,
    kapasitas: 24,
    satuan_kapasitas: "Pesawat Tempur",
    konsumsi_listrik: 300
  },
  "7_pangkalan_laut": {
    key: "7_pangkalan_laut",
    dataKey: "pangkalan_laut",
    groupId: "pertahanan",
    label: "Pangkalan Laut",
    deskripsi: "Fasilitas Maritim",
    biaya_pembangunan: 412500,
    waktu_pembangunan: 120,
    lowongan_kerja: 450,
    kapasitas: 12,
    satuan_kapasitas: "Kapal Perang",
    konsumsi_listrik: 350
  },
  "8_program_luar_angkasa": {
    key: "8_program_luar_angkasa",
    dataKey: "program_luar_angkasa",
    groupId: "pertahanan",
    label: "Program Luar Angkasa",
    deskripsi: "Program Satelit",
    biaya_pembangunan: 937500,
    waktu_pembangunan: 120,
    lowongan_kerja: 800,
    konsumsi_listrik: 80
  },
  "9_pertahanan_siber": {
    key: "9_pertahanan_siber",
    dataKey: "pertahanan_siber",
    groupId: "pertahanan",
    label: "Pertahanan Siber",
    deskripsi: "Keamanan Digital",
    biaya_pembangunan: 112500,
    waktu_pembangunan: 60,
    lowongan_kerja: 120,
    konsumsi_listrik: 50
  },
};
