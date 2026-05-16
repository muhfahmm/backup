// @ts-nocheck
const guinea_bissau_profile = {
  "name_en": "Guinea-Bissau",
  "capital": "Bissau",
  "name_id": "Guinea-bissau",
  "lon": -15,
  "lat": 12,
  "flag": "ðŸ‡¬ðŸ‡¼",
  "jumlah_penduduk": 2201310,
  "anggaran": 18,
  "pendapatan_nasional": "50",
  "religion": "Islam",
  "ideology": "Demokrasi"
};


const guinea_bissau_geopolitik = {
    "un_vote": 100,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 28,
      "kekuatan_keras": 30,
      "prestise_diplomatik": 57
  }
  };

const guinea_bissau = {
  ...guinea_bissau_profile,
  "sektor_listrik": guinea_bissau_listrik,
  "hunian": guinea_bissau_hunian,
  "infrastruktur": guinea_bissau_infrastruktur,
  "sektor_ekstraksi": guinea_bissau_ekstraksi,
  "sektor_manufaktur": guinea_bissau_manufaktur,
  "sektor_peternakan": guinea_bissau_peternakan,
  "sektor_agrikultur": guinea_bissau_agrikultur,
  "sektor_perikanan": guinea_bissau_perikanan,
  "sektor_olahan_pangan": guinea_bissau_olahan_pangan,
  "sektor_farmasi": guinea_bissau_farmasi,
  "sektor_pertahanan": guinea_bissau_pertahanan,
  "armada_militer": guinea_bissau_armada,
  "militer_strategis": guinea_bissau_strategis,
  "armada_kepolisian": guinea_bissau_kepolisian,
  "pabrik_militer": guinea_bissau_pabrik,
  "intelijen": guinea_bissau_intelijen,
    "pendidikan": guinea_bissau_pendidikan,
  "kesehatan": guinea_bissau_kesehatan,
  "hukum": guinea_bissau_hukum,
  "sektor_olahraga": guinea_bissau_olahraga,
  "sektor_komersial": guinea_bissau_komersial,
  "sektor_hiburan": guinea_bissau_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 12,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": guinea_bissau_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 21,
    "pendidikan": 25,
    "keamanan": 25,
    "keuangan": 32,
    "lingkungan": 60
  }
};





