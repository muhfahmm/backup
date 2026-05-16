// @ts-nocheck
const maroko_profile = {
  "name_en": "Morocco",
  "capital": "Rabat",
  "name_id": "Maroko",
  "lon": -5,
  "lat": 32,
  "flag": "ðŸ‡²ðŸ‡¦",
  "jumlah_penduduk": 36828330,
  "anggaran": 1313,
  "pendapatan_nasional": "3750",
  "religion": "Islam",
  "ideology": "Monarki"
};


const maroko_geopolitik = {
    "un_vote": 109,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 5,
      "kekuatan_keras": 28,
      "prestise_diplomatik": 57
  }
  };

const maroko = {
  ...maroko_profile,
  "sektor_listrik": maroko_listrik,
  "hunian": maroko_hunian,
  "infrastruktur": maroko_infrastruktur,
  "sektor_ekstraksi": maroko_ekstraksi,
  "sektor_manufaktur": maroko_manufaktur,
  "sektor_peternakan": maroko_peternakan,
  "sektor_agrikultur": maroko_agrikultur,
  "sektor_perikanan": maroko_perikanan,
  "sektor_olahan_pangan": maroko_olahan_pangan,
  "sektor_farmasi": maroko_farmasi,
  "sektor_pertahanan": maroko_pertahanan,
  "armada_militer": maroko_armada,
  "militer_strategis": maroko_strategis,
  "armada_kepolisian": maroko_kepolisian,
  "pabrik_militer": maroko_pabrik,
  "intelijen": maroko_intelijen,
    "pendidikan": maroko_pendidikan,
  "kesehatan": maroko_kesehatan,
  "hukum": maroko_hukum,
  "sektor_olahraga": maroko_olahraga,
  "sektor_komersial": maroko_komersial,
  "sektor_hiburan": maroko_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 67
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 102
    },
    "penghasilan": {
      "tarif": 37,
      "kepuasan": 61,
      "pendapatan": 127
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 73
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 51
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 7 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 20 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 10
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 2.6,
    "harga_obat": 78.95,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": maroko_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 21,
    "pendidikan": 29,
    "keamanan": 9,
    "keuangan": 14,
    "lingkungan": 60
  }
};





