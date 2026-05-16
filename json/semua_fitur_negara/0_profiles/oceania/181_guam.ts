// @ts-nocheck
const guam_profile = {
  "name_en": "Guam",
  "capital": "HagÃ¥tÃ±a",
  "name_id": "Guam",
  "lon": 144.78333333,
  "lat": 13.46666666,
  "flag": "ðŸ‡¬ðŸ‡º",
  "jumlah_penduduk": 167777,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const guam_geopolitik = {
    "un_vote": 151,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 32,
      "kekuatan_keras": 33,
      "prestise_diplomatik": 57
    }
  };

const guam = {
  ...guam_profile,
  "sektor_listrik": guam_listrik,
  "hunian": guam_hunian,
  "infrastruktur": guam_infrastruktur,
  "sektor_ekstraksi": guam_ekstraksi,
  "sektor_manufaktur": guam_manufaktur,
  "sektor_peternakan": guam_peternakan,
  "sektor_agrikultur": guam_agrikultur,
  "sektor_perikanan": guam_perikanan,
  "sektor_olahan_pangan": guam_olahan_pangan,
  "sektor_farmasi": guam_farmasi,
  "sektor_pertahanan": guam_pertahanan,
  "armada_militer": guam_armada,
  "militer_strategis": guam_strategis,
  "armada_kepolisian": guam_kepolisian,
  "pabrik_militer": guam_pabrik,
  "intelijen": guam_intelijen,
    "pendidikan": guam_pendidikan,
  "kesehatan": guam_kesehatan,
  "hukum": guam_hukum,
  "sektor_olahraga": guam_olahraga,
  "sektor_komersial": guam_komersial,
  "sektor_hiburan": guam_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 315.8,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": guam_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 29,
    "keamanan": 38,
    "keuangan": 32,
    "lingkungan": 60
  }
};





