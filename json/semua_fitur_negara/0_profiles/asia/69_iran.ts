// @ts-nocheck
const iran_profile = {
  "name_en": "Iran",
  "capital": "Tehran",
  "name_id": "Iran",
  "lon": 51.38,
  "lat": 35.68,
  "flag": "ðŸ‡®ðŸ‡·",
  "jumlah_penduduk": 86563000,
  "anggaran": 3598,
  "pendapatan_nasional": "10279",
  "religion": "Islam",
  "ideology": "Konservatisme"
};


const iran_geopolitik = {
    "un_vote": 191,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 14,
      "kekuatan_keras": 38,
      "prestise_diplomatik": 57
    }
  };

const iran = {
  ...iran_profile,
  "sektor_listrik": iran_listrik,
  "hunian": iran_hunian,
  "infrastruktur": iran_infrastruktur,
  "sektor_ekstraksi": iran_ekstraksi,
  "sektor_manufaktur": iran_manufaktur,
  "sektor_peternakan": iran_peternakan,
  "sektor_agrikultur": iran_agrikultur,
  "sektor_perikanan": iran_perikanan,
  "sektor_olahan_pangan": iran_olahan_pangan,
  "sektor_farmasi": iran_farmasi,
  "sektor_pertahanan": iran_pertahanan,
  "armada_militer": iran_armada,
  "militer_strategis": iran_strategis,
  "armada_kepolisian": iran_kepolisian,
  "pabrik_militer": iran_pabrik,
  "intelijen": iran_intelijen,
    "pendidikan": iran_pendidikan,
  "kesehatan": iran_kesehatan,
  "hukum": iran_hukum,
  "sektor_olahraga": iran_olahraga,
  "sektor_komersial": iran_komersial,
  "sektor_hiburan": iran_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 267
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 395
    },
    "penghasilan": {
      "tarif": 7,
      "kepuasan": 61,
      "pendapatan": 60
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 74
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 137
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 18 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 54 },
    "lainnya": {
      "tarif": 18,
      "kepuasan": 93,
      "pendapatan": 131
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 43.54,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": iran_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 5,
    "pendidikan": 16,
    "keamanan": 24,
    "keuangan": 4,
    "lingkungan": 60
  }
};





