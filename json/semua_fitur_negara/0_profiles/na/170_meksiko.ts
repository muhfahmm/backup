// @ts-nocheck
const meksiko_profile = {
  "name_en": "Mexico",
  "capital": "Mexico City",
  "name_id": "Meksiko",
  "lon": -102,
  "lat": 23,
  "flag": "ðŸ‡²ðŸ‡½",
  "jumlah_penduduk": 131001723,
  "anggaran": 17404,
  "pendapatan_nasional": "49726",
  "religion": "Katolik",
  "ideology": "Sosialisme"
};


const meksiko_geopolitik = {
    "un_vote": 186,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 21,
      "prestise_diplomatik": 57
    }
  };

const meksiko = {
  ...meksiko_profile,
  "sektor_listrik": meksiko_listrik,
  "hunian": meksiko_hunian,
  "infrastruktur": meksiko_infrastruktur,
  "sektor_ekstraksi": meksiko_ekstraksi,
  "sektor_manufaktur": meksiko_manufaktur,
  "sektor_peternakan": meksiko_peternakan,
  "sektor_agrikultur": meksiko_agrikultur,
  "sektor_perikanan": meksiko_perikanan,
  "sektor_olahan_pangan": meksiko_olahan_pangan,
  "sektor_farmasi": meksiko_farmasi,
  "sektor_pertahanan": meksiko_pertahanan,
  "armada_militer": meksiko_armada,
  "militer_strategis": meksiko_strategis,
  "armada_kepolisian": meksiko_kepolisian,
  "pabrik_militer": meksiko_pabrik,
  "intelijen": meksiko_intelijen,
    "pendidikan": meksiko_pendidikan,
  "kesehatan": meksiko_kesehatan,
  "hukum": meksiko_hukum,
  "sektor_olahraga": meksiko_olahraga,
  "sektor_komersial": meksiko_komersial,
  "sektor_hiburan": meksiko_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 630
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 1548
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 1054
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 309
    },
    "lingkungan": {
      "tarif": 9,
      "kepuasan": 88,
      "pendapatan": 264
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 88 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 262 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 497
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 3.2,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": meksiko_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 4,
    "pendidikan": 23,
    "keamanan": 32,
    "keuangan": 9,
    "lingkungan": 60
  }
};





