// @ts-nocheck
const chad_profile = {
  "name_en": "Chad",
  "capital": "N'Djamena",
  "name_id": "Chad",
  "lon": 19,
  "lat": 15,
  "flag": "ðŸ‡¹ðŸ‡©",
  "jumlah_penduduk": 19340757,
  "anggaran": 117,
  "pendapatan_nasional": "333",
  "religion": "Islam",
  "ideology": "Nasionalisme"
};


const chad_geopolitik = {
    "un_vote": 58,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 7,
      "kekuatan_keras": 23,
      "prestise_diplomatik": 57
  }
  };

const chad = {
  ...chad_profile,
  "sektor_listrik": chad_listrik,
  "hunian": chad_hunian,
  "infrastruktur": chad_infrastruktur,
  "sektor_ekstraksi": chad_ekstraksi,
  "sektor_manufaktur": chad_manufaktur,
  "sektor_peternakan": chad_peternakan,
  "sektor_agrikultur": chad_agrikultur,
  "sektor_perikanan": chad_perikanan,
  "sektor_olahan_pangan": chad_olahan_pangan,
  "sektor_farmasi": chad_farmasi,
  "sektor_pertahanan": chad_pertahanan,
  "armada_militer": chad_armada,
  "militer_strategis": chad_strategis,
  "armada_kepolisian": chad_kepolisian,
  "pabrik_militer": chad_pabrik,
  "intelijen": chad_intelijen,
    "pendidikan": chad_pendidikan,
  "kesehatan": chad_kesehatan,
  "hukum": chad_hukum,
  "sektor_olahraga": chad_olahraga,
  "sektor_komersial": chad_komersial,
  "sektor_hiburan": chad_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 32,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 9
    },
    "bea_cukai": {
      "tarif": 13,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": chad_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 34,
    "pendidikan": 32,
    "keamanan": 6,
    "keuangan": 23,
    "lingkungan": 60
  }
};





