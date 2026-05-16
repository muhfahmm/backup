// @ts-nocheck
const kazakhstan_profile = {
  "name_en": "Kazakhstan",
  "capital": "Astana",
  "name_id": "Kazakhstan",
  "lon": 68,
  "lat": 48,
  "flag": "ðŸ‡°ðŸ‡¿",
  "jumlah_penduduk": 20532240,
  "anggaran": 2528,
  "pendapatan_nasional": "7223",
  "religion": "Islam",
  "ideology": "Nasionalisme"
};


const kazakhstan_geopolitik = {
    "un_vote": 187,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 38,
      "kekuatan_keras": 20,
      "prestise_diplomatik": 57
    }
  };

const kazakhstan = {
  ...kazakhstan_profile,
  "sektor_listrik": kazakhstan_listrik,
  "hunian": kazakhstan_hunian,
  "infrastruktur": kazakhstan_infrastruktur,
  "sektor_ekstraksi": kazakhstan_ekstraksi,
  "sektor_manufaktur": kazakhstan_manufaktur,
  "sektor_peternakan": kazakhstan_peternakan,
  "sektor_agrikultur": kazakhstan_agrikultur,
  "sektor_perikanan": kazakhstan_perikanan,
  "sektor_olahan_pangan": kazakhstan_olahan_pangan,
  "sektor_farmasi": kazakhstan_farmasi,
  "sektor_pertahanan": kazakhstan_pertahanan,
  "armada_militer": kazakhstan_armada,
  "militer_strategis": kazakhstan_strategis,
  "armada_kepolisian": kazakhstan_kepolisian,
  "pabrik_militer": kazakhstan_pabrik,
  "intelijen": kazakhstan_intelijen,
    "pendidikan": kazakhstan_pendidikan,
  "kesehatan": kazakhstan_kesehatan,
  "hukum": kazakhstan_hukum,
  "sektor_olahraga": kazakhstan_olahraga,
  "sektor_komersial": kazakhstan_komersial,
  "sektor_hiburan": kazakhstan_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 32,
      "kepuasan": 67,
      "pendapatan": 133
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 102
    },
    "penghasilan": {
      "tarif": 13,
      "kepuasan": 61,
      "pendapatan": 90
    },
    "bea_cukai": {
      "tarif": 22,
      "kepuasan": 86,
      "pendapatan": 100
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 65
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 13 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 38 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 46
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 41,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 28.8,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kazakhstan_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 26,
    "keamanan": 11,
    "keuangan": 32,
    "lingkungan": 60
  }
};





