// @ts-nocheck
const kuwait_profile = {
  "name_en": "Kuwait",
  "capital": "Kuwait City",
  "name_id": "Kuwait",
  "lon": 47.97,
  "lat": 29.37,
  "flag": "ðŸ‡°ðŸ‡¼",
  "jumlah_penduduk": 4881254,
  "anggaran": 1507,
  "pendapatan_nasional": "4306",
  "religion": "Islam",
  "ideology": "Monarki"
};


const kuwait_geopolitik = {
    "un_vote": 157,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 6,
      "prestise_diplomatik": 57
    }
  };

const kuwait = {
  ...kuwait_profile,
  "sektor_listrik": kuwait_listrik,
  "hunian": kuwait_hunian,
  "infrastruktur": kuwait_infrastruktur,
  "sektor_ekstraksi": kuwait_ekstraksi,
  "sektor_manufaktur": kuwait_manufaktur,
  "sektor_peternakan": kuwait_peternakan,
  "sektor_agrikultur": kuwait_agrikultur,
  "sektor_perikanan": kuwait_perikanan,
  "sektor_olahan_pangan": kuwait_olahan_pangan,
  "sektor_farmasi": kuwait_farmasi,
  "sektor_pertahanan": kuwait_pertahanan,
  "armada_militer": kuwait_armada,
  "militer_strategis": kuwait_strategis,
  "armada_kepolisian": kuwait_kepolisian,
  "pabrik_militer": kuwait_pabrik,
  "intelijen": kuwait_intelijen,
    "pendidikan": kuwait_pendidikan,
  "kesehatan": kuwait_kesehatan,
  "hukum": kuwait_hukum,
  "sektor_olahraga": kuwait_olahraga,
  "sektor_komersial": kuwait_komersial,
  "sektor_hiburan": kuwait_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 52
    },
    "korporasi": {
      "tarif": 23,
      "kepuasan": 52,
      "pendapatan": 58
    },
    "penghasilan": {
      "tarif": 21,
      "kepuasan": 61,
      "pendapatan": 70
    },
    "bea_cukai": {
      "tarif": 13,
      "kepuasan": 86,
      "pendapatan": 55
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 44
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 8 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 23 },
    "lainnya": {
      "tarif": 6,
      "kepuasan": 93,
      "pendapatan": 24
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kuwait_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 21,
    "pendidikan": 17,
    "keamanan": 24,
    "keuangan": 25,
    "lingkungan": 60
  }
};





