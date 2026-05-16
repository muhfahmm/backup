// @ts-nocheck
const liechtenstein_profile = {
  "name_en": "Liechtenstein",
  "capital": "Vaduz",
  "name_id": "Liechtenstein",
  "lon": 9.31,
  "lat": 47.08,
  "flag": "ðŸ‡±ðŸ‡®",
  "jumlah_penduduk": 41237,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Monarki"
};


const liechtenstein_geopolitik = {
    "un_vote": 20,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
      "kekuatan_keras": 28,
      "prestise_diplomatik": 57
    }
  };

const liechtenstein = {
  ...liechtenstein_profile,
  "sektor_listrik": liechtenstein_listrik,
  "hunian": liechtenstein_hunian,
  "infrastruktur": liechtenstein_infrastruktur,
  "sektor_ekstraksi": liechtenstein_ekstraksi,
  "sektor_manufaktur": liechtenstein_manufaktur,
  "sektor_peternakan": liechtenstein_peternakan,
  "sektor_agrikultur": liechtenstein_agrikultur,
  "sektor_perikanan": liechtenstein_perikanan,
  "sektor_olahan_pangan": liechtenstein_olahan_pangan,
  "sektor_farmasi": liechtenstein_farmasi,
  "sektor_pertahanan": liechtenstein_pertahanan,
  "armada_militer": liechtenstein_armada,
  "militer_strategis": liechtenstein_strategis,
  "armada_kepolisian": liechtenstein_kepolisian,
  "pabrik_militer": liechtenstein_pabrik,
  "intelijen": liechtenstein_intelijen,
    "pendidikan": liechtenstein_pendidikan,
  "kesehatan": liechtenstein_kesehatan,
  "hukum": liechtenstein_hukum,
  "sektor_olahraga": liechtenstein_olahraga,
  "sektor_komersial": liechtenstein_komersial,
  "sektor_hiburan": liechtenstein_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 28.8,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": liechtenstein_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 24,
    "pendidikan": 31,
    "keamanan": 20,
    "keuangan": 29,
    "lingkungan": 60
  }
};





