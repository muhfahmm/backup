// @ts-nocheck
const swedia_profile = {
  "name_en": "Sweden",
  "capital": "Stockholm",
  "name_id": "Swedia",
  "lon": 18.06,
  "lat": 59.32,
  "flag": "ðŸ‡¸ðŸ‡ª",
  "jumlah_penduduk": 10604061,
  "anggaran": 5834,
  "pendapatan_nasional": "16668",
  "religion": "Protestan",
  "ideology": "Sosialisme"
};


const swedia_geopolitik = {
    "un_vote": 90,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 3,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  };

const swedia = {
  ...swedia_profile,
  "sektor_listrik": swedia_listrik,
  "hunian": swedia_hunian,
  "infrastruktur": swedia_infrastruktur,
  "sektor_ekstraksi": swedia_ekstraksi,
  "sektor_manufaktur": swedia_manufaktur,
  "sektor_peternakan": swedia_peternakan,
  "sektor_agrikultur": swedia_agrikultur,
  "sektor_perikanan": swedia_perikanan,
  "sektor_olahan_pangan": swedia_olahan_pangan,
  "sektor_farmasi": swedia_farmasi,
  "sektor_pertahanan": swedia_pertahanan,
  "armada_militer": swedia_armada,
  "militer_strategis": swedia_strategis,
  "armada_kepolisian": swedia_kepolisian,
  "pabrik_militer": swedia_pabrik,
  "intelijen": swedia_intelijen,
    "pendidikan": swedia_pendidikan,
  "kesehatan": swedia_kesehatan,
  "hukum": swedia_hukum,
  "sektor_olahraga": swedia_olahraga,
  "sektor_komersial": swedia_komersial,
  "sektor_hiburan": swedia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 76
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 631
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 301
    },
    "lingkungan": {
      "tarif": 39,
      "kepuasan": 88,
      "pendapatan": 543
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 30 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 88 },
    "lainnya": {
      "tarif": 24,
      "kepuasan": 93,
      "pendapatan": 414
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 11.52,
    "harga_telur": 62.2,
    "harga_bbm": 5.35,
    "harga_listrik": 3.2,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": swedia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 13,
    "pendidikan": 8,
    "keamanan": 34,
    "keuangan": 8,
    "lingkungan": 60
  }
};





