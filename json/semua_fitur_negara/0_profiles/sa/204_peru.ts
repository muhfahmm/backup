// @ts-nocheck
const peru_profile = {
  "name_en": "Peru",
  "capital": "Lima",
  "name_id": "Peru",
  "lon": -76,
  "lat": -10,
  "flag": "ðŸ‡µðŸ‡ª",
  "jumlah_penduduk": 33396698,
  "anggaran": 2528,
  "pendapatan_nasional": "7223",
  "religion": "Katolik",
  "ideology": "Sosialisme"
};


const peru_geopolitik = {
    "un_vote": 41,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 11,
      "prestise_diplomatik": 57
    }
  };

const peru = {
  ...peru_profile,
  "sektor_listrik": peru_listrik,
  "hunian": peru_hunian,
  "infrastruktur": peru_infrastruktur,
  "sektor_ekstraksi": peru_ekstraksi,
  "sektor_manufaktur": peru_manufaktur,
  "sektor_peternakan": peru_peternakan,
  "sektor_agrikultur": peru_agrikultur,
  "sektor_perikanan": peru_perikanan,
  "sektor_olahan_pangan": peru_olahan_pangan,
  "sektor_farmasi": peru_farmasi,
  "sektor_pertahanan": peru_pertahanan,
  "armada_militer": peru_armada,
  "militer_strategis": peru_strategis,
  "armada_kepolisian": peru_kepolisian,
  "pabrik_militer": peru_pabrik,
  "intelijen": peru_intelijen,
    "pendidikan": peru_pendidikan,
  "kesehatan": peru_kesehatan,
  "hukum": peru_hukum,
  "sektor_olahraga": peru_olahraga,
  "sektor_komersial": peru_komersial,
  "sektor_hiburan": peru_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 196
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 100
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 138
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 218
    },
    "lingkungan": {
      "tarif": 24,
      "kepuasan": 88,
      "pendapatan": 74
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 13 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 38 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 6
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 5.35,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": peru_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 19,
    "pendidikan": 28,
    "keamanan": 11,
    "keuangan": 11,
    "lingkungan": 60
  }
};





