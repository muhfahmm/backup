// @ts-nocheck
const guyana_profile = {
  "name_en": "Guyana",
  "capital": "Georgetown",
  "name_id": "Guyana",
  "lon": -59,
  "lat": 5,
  "flag": "ðŸ‡¬ðŸ‡¾",
  "jumlah_penduduk": 956044,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const guyana_geopolitik = {
    "un_vote": 74,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 5,
      "kekuatan_keras": 39,
      "prestise_diplomatik": 57
    }
  };

const guyana = {
  ...guyana_profile,
  "sektor_listrik": guyana_listrik,
  "hunian": guyana_hunian,
  "infrastruktur": guyana_infrastruktur,
  "sektor_ekstraksi": guyana_ekstraksi,
  "sektor_manufaktur": guyana_manufaktur,
  "sektor_peternakan": guyana_peternakan,
  "sektor_agrikultur": guyana_agrikultur,
  "sektor_perikanan": guyana_perikanan,
  "sektor_olahan_pangan": guyana_olahan_pangan,
  "sektor_farmasi": guyana_farmasi,
  "sektor_pertahanan": guyana_pertahanan,
  "armada_militer": guyana_armada,
  "militer_strategis": guyana_strategis,
  "armada_kepolisian": guyana_kepolisian,
  "pabrik_militer": guyana_pabrik,
  "intelijen": guyana_intelijen,
    "pendidikan": guyana_pendidikan,
  "kesehatan": guyana_kesehatan,
  "hukum": guyana_hukum,
  "sektor_olahraga": guyana_olahraga,
  "sektor_komersial": guyana_komersial,
  "sektor_hiburan": guyana_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 13
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 4.16,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": guyana_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 15,
    "pendidikan": 26,
    "keamanan": 10,
    "keuangan": 13,
    "lingkungan": 60
  }
};





