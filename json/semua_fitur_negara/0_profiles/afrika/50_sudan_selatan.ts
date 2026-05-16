// @ts-nocheck
const sudan_selatan_profile = {
  "name_en": "South Sudan",
  "capital": "Juba",
  "name_id": "Sudan selatan",
  "lon": 30,
  "lat": 7,
  "flag": "ðŸ‡¸ðŸ‡¸",
  "jumlah_penduduk": 11088796,
  "anggaran": 49,
  "pendapatan_nasional": "139",
  "religion": "Katolik",
  "ideology": "Nasionalisme"
};


const sudan_selatan_geopolitik = {
    "un_vote": 92,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 24,
      "kekuatan_keras": 28,
      "prestise_diplomatik": 57
  }
  };

const sudan_selatan = {
  ...sudan_selatan_profile,
  "sektor_listrik": sudan_selatan_listrik,
  "hunian": sudan_selatan_hunian,
  "infrastruktur": sudan_selatan_infrastruktur,
  "sektor_ekstraksi": sudan_selatan_ekstraksi,
  "sektor_manufaktur": sudan_selatan_manufaktur,
  "sektor_peternakan": sudan_selatan_peternakan,
  "sektor_agrikultur": sudan_selatan_agrikultur,
  "sektor_perikanan": sudan_selatan_perikanan,
  "sektor_olahan_pangan": sudan_selatan_olahan_pangan,
  "sektor_farmasi": sudan_selatan_farmasi,
  "sektor_pertahanan": sudan_selatan_pertahanan,
  "armada_militer": sudan_selatan_armada,
  "militer_strategis": sudan_selatan_strategis,
  "armada_kepolisian": sudan_selatan_kepolisian,
  "pabrik_militer": sudan_selatan_pabrik,
  "intelijen": sudan_selatan_intelijen,
    "pendidikan": sudan_selatan_pendidikan,
  "kesehatan": sudan_selatan_kesehatan,
  "hukum": sudan_selatan_hukum,
  "sektor_olahraga": sudan_selatan_olahraga,
  "sektor_komersial": sudan_selatan_komersial,
  "sektor_hiburan": sudan_selatan_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 8,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": sudan_selatan_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 33,
    "pendidikan": 12,
    "keamanan": 20,
    "keuangan": 26,
    "lingkungan": 60
  }
};





