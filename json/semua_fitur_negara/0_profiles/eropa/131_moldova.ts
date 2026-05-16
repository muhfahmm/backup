// @ts-nocheck
const moldova_profile = {
  "name_en": "Moldova",
  "capital": "ChiÈ™inÄƒu",
  "name_id": "Moldova",
  "lon": 29,
  "lat": 47,
  "flag": "ðŸ‡²ðŸ‡©",
  "jumlah_penduduk": 3334547,
  "anggaran": 156,
  "pendapatan_nasional": "444",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi"
};


const moldova_geopolitik = {
    "un_vote": 38,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 15,
      "kekuatan_keras": 7,
      "prestise_diplomatik": 57
    }
  };

const moldova = {
  ...moldova_profile,
  "sektor_listrik": moldova_listrik,
  "hunian": moldova_hunian,
  "infrastruktur": moldova_infrastruktur,
  "sektor_ekstraksi": moldova_ekstraksi,
  "sektor_manufaktur": moldova_manufaktur,
  "sektor_peternakan": moldova_peternakan,
  "sektor_agrikultur": moldova_agrikultur,
  "sektor_perikanan": moldova_perikanan,
  "sektor_olahan_pangan": moldova_olahan_pangan,
  "sektor_farmasi": moldova_farmasi,
  "sektor_pertahanan": moldova_pertahanan,
  "armada_militer": moldova_armada,
  "militer_strategis": moldova_strategis,
  "armada_kepolisian": moldova_kepolisian,
  "pabrik_militer": moldova_pabrik,
  "intelijen": moldova_intelijen,
    "pendidikan": moldova_pendidikan,
  "kesehatan": moldova_kesehatan,
  "hukum": moldova_hukum,
  "sektor_olahraga": moldova_olahraga,
  "sektor_komersial": moldova_komersial,
  "sektor_hiburan": moldova_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 17,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 15
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 33,
      "kepuasan": 93,
      "pendapatan": 12
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 2.6,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": moldova_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 27,
    "keamanan": 22,
    "keuangan": 9,
    "lingkungan": 60
  }
};





