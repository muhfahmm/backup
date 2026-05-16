// @ts-nocheck
const turkmenistan_profile = {
  "name_en": "Turkmenistan",
  "capital": "Ashgabat",
  "name_id": "Turkmenistan",
  "lon": 60,
  "lat": 40,
  "flag": "ðŸ‡¹ðŸ‡²",
  "jumlah_penduduk": 6500000,
  "anggaran": 438,
  "pendapatan_nasional": "1250",
  "religion": "Islam",
  "ideology": "Nasionalisme"
};


const turkmenistan_geopolitik = {
    "un_vote": 133,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 25,
      "kekuatan_keras": 22,
      "prestise_diplomatik": 57
    }
  };

const turkmenistan = {
  ...turkmenistan_profile,
  "sektor_listrik": turkmenistan_listrik,
  "hunian": turkmenistan_hunian,
  "infrastruktur": turkmenistan_infrastruktur,
  "sektor_ekstraksi": turkmenistan_ekstraksi,
  "sektor_manufaktur": turkmenistan_manufaktur,
  "sektor_peternakan": turkmenistan_peternakan,
  "sektor_agrikultur": turkmenistan_agrikultur,
  "sektor_perikanan": turkmenistan_perikanan,
  "sektor_olahan_pangan": turkmenistan_olahan_pangan,
  "sektor_farmasi": turkmenistan_farmasi,
  "sektor_pertahanan": turkmenistan_pertahanan,
  "armada_militer": turkmenistan_armada,
  "militer_strategis": turkmenistan_strategis,
  "armada_kepolisian": turkmenistan_kepolisian,
  "pabrik_militer": turkmenistan_pabrik,
  "intelijen": turkmenistan_intelijen,
    "pendidikan": turkmenistan_pendidikan,
  "kesehatan": turkmenistan_kesehatan,
  "hukum": turkmenistan_hukum,
  "sektor_olahraga": turkmenistan_olahraga,
  "sektor_komersial": turkmenistan_komersial,
  "sektor_hiburan": turkmenistan_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 14
    },
    "korporasi": {
      "tarif": 34,
      "kepuasan": 52,
      "pendapatan": 25
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 38
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 14
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 35
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 30
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 0.8,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": turkmenistan_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 26,
    "pendidikan": 17,
    "keamanan": 12,
    "keuangan": 24,
    "lingkungan": 60
  }
};





