// @ts-nocheck
const lesotho_profile = {
  "name_en": "Lesotho",
  "capital": "Maseru",
  "name_id": "Lesotho",
  "lon": 28.5,
  "lat": -29.5,
  "flag": "ðŸ‡±ðŸ‡¸",
  "jumlah_penduduk": 2337423,
  "anggaran": 24,
  "pendapatan_nasional": "69",
  "religion": "Katolik",
  "ideology": "Monarki"
};


const lesotho_geopolitik = {
    "un_vote": 115,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 23,
      "prestise_diplomatik": 57
  }
  };

const lesotho = {
  ...lesotho_profile,
  "sektor_listrik": lesotho_listrik,
  "hunian": lesotho_hunian,
  "infrastruktur": lesotho_infrastruktur,
  "sektor_ekstraksi": lesotho_ekstraksi,
  "sektor_manufaktur": lesotho_manufaktur,
  "sektor_peternakan": lesotho_peternakan,
  "sektor_agrikultur": lesotho_agrikultur,
  "sektor_perikanan": lesotho_perikanan,
  "sektor_olahan_pangan": lesotho_olahan_pangan,
  "sektor_farmasi": lesotho_farmasi,
  "sektor_pertahanan": lesotho_pertahanan,
  "armada_militer": lesotho_armada,
  "militer_strategis": lesotho_strategis,
  "armada_kepolisian": lesotho_kepolisian,
  "pabrik_militer": lesotho_pabrik,
  "intelijen": lesotho_intelijen,
    "pendidikan": lesotho_pendidikan,
  "kesehatan": lesotho_kesehatan,
  "hukum": lesotho_hukum,
  "sektor_olahraga": lesotho_olahraga,
  "sektor_komersial": lesotho_komersial,
  "sektor_hiburan": lesotho_hiburan,
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
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 28.8,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": lesotho_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 29,
    "pendidikan": 9,
    "keamanan": 11,
    "keuangan": 33,
    "lingkungan": 60
  }
};





