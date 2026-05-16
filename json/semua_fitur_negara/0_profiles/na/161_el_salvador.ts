// @ts-nocheck
const el_salvador_profile = {
  "name_en": "El Salvador",
  "capital": "San Salvador",
  "name_id": "El salvador",
  "lon": -88.91666666,
  "lat": 13.83333333,
  "flag": "ðŸ‡¸ðŸ‡»",
  "jumlah_penduduk": 6338193,
  "anggaran": 311,
  "pendapatan_nasional": "889",
  "religion": "Katolik",
  "ideology": "Nasionalisme"
};


const el_salvador_geopolitik = {
    "un_vote": 79,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 26,
      "kekuatan_keras": 5,
      "prestise_diplomatik": 57
    }
  };

const el_salvador = {
  ...el_salvador_profile,
  "sektor_listrik": el_salvador_listrik,
  "hunian": el_salvador_hunian,
  "infrastruktur": el_salvador_infrastruktur,
  "sektor_ekstraksi": el_salvador_ekstraksi,
  "sektor_manufaktur": el_salvador_manufaktur,
  "sektor_peternakan": el_salvador_peternakan,
  "sektor_agrikultur": el_salvador_agrikultur,
  "sektor_perikanan": el_salvador_perikanan,
  "sektor_olahan_pangan": el_salvador_olahan_pangan,
  "sektor_farmasi": el_salvador_farmasi,
  "sektor_pertahanan": el_salvador_pertahanan,
  "armada_militer": el_salvador_armada,
  "militer_strategis": el_salvador_strategis,
  "armada_kepolisian": el_salvador_kepolisian,
  "pabrik_militer": el_salvador_pabrik,
  "intelijen": el_salvador_intelijen,
    "pendidikan": el_salvador_pendidikan,
  "kesehatan": el_salvador_kesehatan,
  "hukum": el_salvador_hukum,
  "sektor_olahraga": el_salvador_olahraga,
  "sektor_komersial": el_salvador_komersial,
  "sektor_hiburan": el_salvador_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 15
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 26
    },
    "bea_cukai": {
      "tarif": 39,
      "kepuasan": 86,
      "pendapatan": 20
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 14.98,
    "harga_listrik": 2.24,
    "harga_air": 4.16,
    "harga_obat": 126.32,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": el_salvador_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 34,
    "pendidikan": 24,
    "keamanan": 16,
    "keuangan": 26,
    "lingkungan": 60
  }
};





