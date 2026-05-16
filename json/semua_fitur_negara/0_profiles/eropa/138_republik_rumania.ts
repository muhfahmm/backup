// @ts-nocheck
const republik_rumania_profile = {
  "name_en": "Romania",
  "capital": "Bucharest",
  "name_id": "Republik rumania",
  "lon": 25,
  "lat": 46,
  "flag": "ðŸ‡·ðŸ‡´",
  "jumlah_penduduk": 19036031,
  "anggaran": 3403,
  "pendapatan_nasional": "9723",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const republik_rumania_geopolitik = {
    "un_vote": 143,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 33,
      "kekuatan_keras": 6,
      "prestise_diplomatik": 57
    }
  };

const republik_rumania = {
  ...republik_rumania_profile,
  "sektor_listrik": republik_rumania_listrik,
  "hunian": republik_rumania_hunian,
  "infrastruktur": republik_rumania_infrastruktur,
  "sektor_ekstraksi": republik_rumania_ekstraksi,
  "sektor_manufaktur": republik_rumania_manufaktur,
  "sektor_peternakan": republik_rumania_peternakan,
  "sektor_agrikultur": republik_rumania_agrikultur,
  "sektor_perikanan": republik_rumania_perikanan,
  "sektor_olahan_pangan": republik_rumania_olahan_pangan,
  "sektor_farmasi": republik_rumania_farmasi,
  "sektor_pertahanan": republik_rumania_pertahanan,
  "armada_militer": republik_rumania_armada,
  "militer_strategis": republik_rumania_strategis,
  "armada_kepolisian": republik_rumania_kepolisian,
  "pabrik_militer": republik_rumania_pabrik,
  "intelijen": republik_rumania_intelijen,
    "pendidikan": republik_rumania_pendidikan,
  "kesehatan": republik_rumania_kesehatan,
  "hukum": republik_rumania_hukum,
  "sektor_olahraga": republik_rumania_olahraga,
  "sektor_komersial": republik_rumania_komersial,
  "sektor_hiburan": republik_rumania_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 13,
      "kepuasan": 67,
      "pendapatan": 132
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 177
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 137
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 137
    },
    "lingkungan": {
      "tarif": 9,
      "kepuasan": 88,
      "pendapatan": 85
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 18 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 52 },
    "lainnya": {
      "tarif": 31,
      "kepuasan": 93,
      "pendapatan": 305
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_rumania_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 17,
    "keamanan": 19,
    "keuangan": 26,
    "lingkungan": 60
  }
};





