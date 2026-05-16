// @ts-nocheck
const spanyol_profile = {
  "name_en": "Spain",
  "capital": "Madrid",
  "name_id": "Spanyol",
  "lon": -3.7,
  "lat": 40.41,
  "flag": "ðŸ‡ªðŸ‡¸",
  "jumlah_penduduk": 49570725,
  "anggaran": 15362,
  "pendapatan_nasional": "43892",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const spanyol_geopolitik = {
    "un_vote": 135,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 8,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  };

const spanyol = {
  ...spanyol_profile,
  "sektor_listrik": spanyol_listrik,
  "hunian": spanyol_hunian,
  "infrastruktur": spanyol_infrastruktur,
  "sektor_ekstraksi": spanyol_ekstraksi,
  "sektor_manufaktur": spanyol_manufaktur,
  "sektor_peternakan": spanyol_peternakan,
  "sektor_agrikultur": spanyol_agrikultur,
  "sektor_perikanan": spanyol_perikanan,
  "sektor_olahan_pangan": spanyol_olahan_pangan,
  "sektor_farmasi": spanyol_farmasi,
  "sektor_pertahanan": spanyol_pertahanan,
  "armada_militer": spanyol_armada,
  "militer_strategis": spanyol_strategis,
  "armada_kepolisian": spanyol_kepolisian,
  "pabrik_militer": spanyol_pabrik,
  "intelijen": spanyol_intelijen,
    "pendidikan": spanyol_pendidikan,
  "kesehatan": spanyol_kesehatan,
  "hukum": spanyol_hukum,
  "sektor_olahraga": spanyol_olahraga,
  "sektor_komersial": spanyol_komersial,
  "sektor_hiburan": spanyol_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 1365
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 370
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 1029
    },
    "bea_cukai": {
      "tarif": 26,
      "kepuasan": 86,
      "pendapatan": 950
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 445
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 77 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 231 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 742
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": spanyol_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 19,
    "pendidikan": 24,
    "keamanan": 7,
    "keuangan": 27,
    "lingkungan": 60
  }
};





