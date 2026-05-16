// @ts-nocheck
const uruguay_profile = {
  "name_en": "Uruguay",
  "capital": "Montevideo",
  "name_id": "Uruguay",
  "lon": -56,
  "lat": -33,
  "flag": "ðŸ‡ºðŸ‡¾",
  "jumlah_penduduk": 3485931,
  "anggaran": 700,
  "pendapatan_nasional": "2000",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const uruguay_geopolitik = {
    "un_vote": 99,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 8,
      "kekuatan_keras": 29,
      "prestise_diplomatik": 57
    }
  };

const uruguay = {
  ...uruguay_profile,
  "sektor_listrik": uruguay_listrik,
  "hunian": uruguay_hunian,
  "infrastruktur": uruguay_infrastruktur,
  "sektor_ekstraksi": uruguay_ekstraksi,
  "sektor_manufaktur": uruguay_manufaktur,
  "sektor_peternakan": uruguay_peternakan,
  "sektor_agrikultur": uruguay_agrikultur,
  "sektor_perikanan": uruguay_perikanan,
  "sektor_olahan_pangan": uruguay_olahan_pangan,
  "sektor_farmasi": uruguay_farmasi,
  "sektor_pertahanan": uruguay_pertahanan,
  "armada_militer": uruguay_armada,
  "militer_strategis": uruguay_strategis,
  "armada_kepolisian": uruguay_kepolisian,
  "pabrik_militer": uruguay_pabrik,
  "intelijen": uruguay_intelijen,
    "pendidikan": uruguay_pendidikan,
  "kesehatan": uruguay_kesehatan,
  "hukum": uruguay_hukum,
  "sektor_olahraga": uruguay_olahraga,
  "sektor_komersial": uruguay_komersial,
  "sektor_hiburan": uruguay_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 16
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 23,
      "kepuasan": 61,
      "pendapatan": 37
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 22
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 66
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 20
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 14.4,
    "harga_telur": 62.2,
    "harga_bbm": 21.4,
    "harga_listrik": 3.2,
    "harga_air": 4.16,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": uruguay_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 6,
    "pendidikan": 37,
    "keamanan": 1,
    "keuangan": 2,
    "lingkungan": 60
  }
};





