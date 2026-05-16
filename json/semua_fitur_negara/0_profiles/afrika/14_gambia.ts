// @ts-nocheck
const gambia_profile = {
  "name_en": "Gambia",
  "capital": "Banjul",
  "name_id": "Gambia",
  "lon": -16.56666666,
  "lat": 13.46666666,
  "flag": "ðŸ‡¬ðŸ‡²",
  "jumlah_penduduk": 2422754,
  "anggaran": 21,
  "pendapatan_nasional": "61",
  "religion": "Islam",
  "ideology": "Demokrasi"
};


const gambia_geopolitik = {
    "un_vote": 116,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 40,
      "kekuatan_keras": 17,
      "prestise_diplomatik": 57
  }
  };

const gambia = {
  ...gambia_profile,
  "sektor_listrik": gambia_listrik,
  "hunian": gambia_hunian,
  "infrastruktur": gambia_infrastruktur,
  "sektor_ekstraksi": gambia_ekstraksi,
  "sektor_manufaktur": gambia_manufaktur,
  "sektor_peternakan": gambia_peternakan,
  "sektor_agrikultur": gambia_agrikultur,
  "sektor_perikanan": gambia_perikanan,
  "sektor_olahan_pangan": gambia_olahan_pangan,
  "sektor_farmasi": gambia_farmasi,
  "sektor_pertahanan": gambia_pertahanan,
  "armada_militer": gambia_armada,
  "militer_strategis": gambia_strategis,
  "armada_kepolisian": gambia_kepolisian,
  "pabrik_militer": gambia_pabrik,
  "intelijen": gambia_intelijen,
    "pendidikan": gambia_pendidikan,
  "kesehatan": gambia_kesehatan,
  "hukum": gambia_hukum,
  "sektor_olahraga": gambia_olahraga,
  "sektor_komersial": gambia_komersial,
  "sektor_hiburan": gambia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 34,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": gambia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 33,
    "pendidikan": 23,
    "keamanan": 22,
    "keuangan": 31,
    "lingkungan": 60
  }
};





