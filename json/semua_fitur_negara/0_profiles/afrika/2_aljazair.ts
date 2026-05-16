// @ts-nocheck
const aljazair_profile = {
  "name_en": "Algeria",
  "capital": "Algiers",
  "name_id": "Aljazair",
  "lon": 3.08,
  "lat": 36.73,
  "flag": "ðŸ‡©ðŸ‡¿",
  "jumlah_penduduk": 47400000,
  "anggaran": 2334,
  "pendapatan_nasional": "6667",
  "religion": "Islam",
  "ideology": "Nasionalisme"
};


const aljazair_geopolitik = {
    "un_vote": 84,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 5,
      "kekuatan_keras": 14,
      "prestise_diplomatik": 57
  }
  };

const aljazair = {
  ...aljazair_profile,
  "sektor_listrik": aljazair_listrik,
  "hunian": aljazair_hunian,
  "infrastruktur": aljazair_infrastruktur,
  "sektor_ekstraksi": aljazair_ekstraksi,
  "sektor_manufaktur": aljazair_manufaktur,
  "sektor_peternakan": aljazair_peternakan,
  "sektor_agrikultur": aljazair_agrikultur,
  "sektor_perikanan": aljazair_perikanan,
  "sektor_olahan_pangan": aljazair_olahan_pangan,
  "sektor_farmasi": aljazair_farmasi,
  "sektor_pertahanan": aljazair_pertahanan,
  "armada_militer": aljazair_armada,
  "militer_strategis": aljazair_strategis,
  "armada_kepolisian": aljazair_kepolisian,
  "pabrik_militer": aljazair_pabrik,
  "intelijen": aljazair_intelijen,
    "pendidikan": aljazair_pendidikan,
  "kesehatan": aljazair_kesehatan,
  "hukum": aljazair_hukum,
  "sektor_olahraga": aljazair_olahraga,
  "sektor_komersial": aljazair_komersial,
  "sektor_hiburan": aljazair_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 214
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 49
    },
    "penghasilan": {
      "tarif": 33,
      "kepuasan": 61,
      "pendapatan": 196
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 104
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 249
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 12 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 36 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 126
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 5.35,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": aljazair_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 21,
    "pendidikan": 5,
    "keamanan": 10,
    "keuangan": 12,
    "lingkungan": 60
  }
};





