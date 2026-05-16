// @ts-nocheck
const mauritius_profile = {
  "name_en": "Mauritius",
  "capital": "Port Louis",
  "name_id": "Mauritius",
  "lon": 57.55,
  "lat": -20.28333333,
  "flag": "ðŸ‡²ðŸ‡º",
  "jumlah_penduduk": 1241856,
  "anggaran": 136,
  "pendapatan_nasional": "389",
  "religion": "Hindu",
  "ideology": "Demokrasi"
};


const mauritius_geopolitik = {
    "un_vote": 69,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 13,
      "kekuatan_keras": 33,
      "prestise_diplomatik": 57
  }
  };

const mauritius = {
  ...mauritius_profile,
  "sektor_listrik": mauritius_listrik,
  "hunian": mauritius_hunian,
  "infrastruktur": mauritius_infrastruktur,
  "sektor_ekstraksi": mauritius_ekstraksi,
  "sektor_manufaktur": mauritius_manufaktur,
  "sektor_peternakan": mauritius_peternakan,
  "sektor_agrikultur": mauritius_agrikultur,
  "sektor_perikanan": mauritius_perikanan,
  "sektor_olahan_pangan": mauritius_olahan_pangan,
  "sektor_farmasi": mauritius_farmasi,
  "sektor_pertahanan": mauritius_pertahanan,
  "armada_militer": mauritius_armada,
  "militer_strategis": mauritius_strategis,
  "armada_kepolisian": mauritius_kepolisian,
  "pabrik_militer": mauritius_pabrik,
  "intelijen": mauritius_intelijen,
    "pendidikan": mauritius_pendidikan,
  "kesehatan": mauritius_kesehatan,
  "hukum": mauritius_hukum,
  "sektor_olahraga": mauritius_olahraga,
  "sektor_komersial": mauritius_komersial,
  "sektor_hiburan": mauritius_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 22,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 28.8,
    "harga_telur": 62.2,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": mauritius_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 14,
    "pendidikan": 39,
    "keamanan": 11,
    "keuangan": 37,
    "lingkungan": 60
  }
};





