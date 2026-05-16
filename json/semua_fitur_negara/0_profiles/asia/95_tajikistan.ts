// @ts-nocheck
const tajikistan_profile = {
  "name_en": "Tajikistan",
  "capital": "Dushanbe",
  "name_id": "Tajikistan",
  "lon": 71,
  "lat": 39,
  "flag": "ðŸ‡¹ðŸ‡¯",
  "jumlah_penduduk": 9806453,
  "anggaran": 117,
  "pendapatan_nasional": "333",
  "religion": "Islam",
  "ideology": "Nasionalisme"
};


const tajikistan_geopolitik = {
    "un_vote": 177,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 33,
      "kekuatan_keras": 36,
      "prestise_diplomatik": 57
    }
  };

const tajikistan = {
  ...tajikistan_profile,
  "sektor_listrik": tajikistan_listrik,
  "hunian": tajikistan_hunian,
  "infrastruktur": tajikistan_infrastruktur,
  "sektor_ekstraksi": tajikistan_ekstraksi,
  "sektor_manufaktur": tajikistan_manufaktur,
  "sektor_peternakan": tajikistan_peternakan,
  "sektor_agrikultur": tajikistan_agrikultur,
  "sektor_perikanan": tajikistan_perikanan,
  "sektor_olahan_pangan": tajikistan_olahan_pangan,
  "sektor_farmasi": tajikistan_farmasi,
  "sektor_pertahanan": tajikistan_pertahanan,
  "armada_militer": tajikistan_armada,
  "militer_strategis": tajikistan_strategis,
  "armada_kepolisian": tajikistan_kepolisian,
  "pabrik_militer": tajikistan_pabrik,
  "intelijen": tajikistan_intelijen,
    "pendidikan": tajikistan_pendidikan,
  "kesehatan": tajikistan_kesehatan,
  "hukum": tajikistan_hukum,
  "sektor_olahraga": tajikistan_olahraga,
  "sektor_komersial": tajikistan_komersial,
  "sektor_hiburan": tajikistan_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 7,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 11
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 33,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": tajikistan_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 8,
    "keamanan": 12,
    "keuangan": 29,
    "lingkungan": 60
  }
};





