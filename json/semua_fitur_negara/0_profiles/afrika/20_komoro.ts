// @ts-nocheck
const komoro_profile = {
  "name_en": "Comoros",
  "capital": "Moroni",
  "name_id": "Komoro",
  "lon": 44.25,
  "lat": -12.16666666,
  "flag": "ðŸ‡°ðŸ‡²",
  "jumlah_penduduk": 866628,
  "anggaran": 13,
  "pendapatan_nasional": "36",
  "religion": "Islam",
  "ideology": "Demokrasi"
};


const komoro_geopolitik = {
    "un_vote": 61,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 24,
      "kekuatan_keras": 27,
      "prestise_diplomatik": 57
  }
  };

const komoro = {
  ...komoro_profile,
  "sektor_listrik": komoro_listrik,
  "hunian": komoro_hunian,
  "infrastruktur": komoro_infrastruktur,
  "sektor_ekstraksi": komoro_ekstraksi,
  "sektor_manufaktur": komoro_manufaktur,
  "sektor_peternakan": komoro_peternakan,
  "sektor_agrikultur": komoro_agrikultur,
  "sektor_perikanan": komoro_perikanan,
  "sektor_olahan_pangan": komoro_olahan_pangan,
  "sektor_farmasi": komoro_farmasi,
  "sektor_pertahanan": komoro_pertahanan,
  "armada_militer": komoro_armada,
  "militer_strategis": komoro_strategis,
  "armada_kepolisian": komoro_kepolisian,
  "pabrik_militer": komoro_pabrik,
  "intelijen": komoro_intelijen,
    "pendidikan": komoro_pendidikan,
  "kesehatan": komoro_kesehatan,
  "hukum": komoro_hukum,
  "sektor_olahraga": komoro_olahraga,
  "sektor_komersial": komoro_komersial,
  "sektor_hiburan": komoro_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 6,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 7.2,
    "harga_telur": 31.1,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": komoro_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 7,
    "pendidikan": 6,
    "keamanan": 31,
    "keuangan": 37,
    "lingkungan": 60
  }
};





