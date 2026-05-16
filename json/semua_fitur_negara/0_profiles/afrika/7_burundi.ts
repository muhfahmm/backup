// @ts-nocheck
const burundi_profile = {
  "name_en": "Burundi",
  "capital": "Gitega",
  "name_id": "Burundi",
  "lon": 30,
  "lat": -3.5,
  "flag": "ðŸ‡§ðŸ‡®",
  "jumlah_penduduk": 12332788,
  "anggaran": 34,
  "pendapatan_nasional": "97",
  "religion": "Katolik",
  "ideology": "Konservatisme"
};


const burundi_geopolitik = {
    "un_vote": 37,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 9,
      "kekuatan_keras": 23,
      "prestise_diplomatik": 57
  }
  };

const burundi = {
  ...burundi_profile,
  "sektor_listrik": burundi_listrik,
  "hunian": burundi_hunian,
  "infrastruktur": burundi_infrastruktur,
  "sektor_ekstraksi": burundi_ekstraksi,
  "sektor_manufaktur": burundi_manufaktur,
  "sektor_peternakan": burundi_peternakan,
  "sektor_agrikultur": burundi_agrikultur,
  "sektor_perikanan": burundi_perikanan,
  "sektor_olahan_pangan": burundi_olahan_pangan,
  "sektor_farmasi": burundi_farmasi,
  "sektor_pertahanan": burundi_pertahanan,
  "armada_militer": burundi_armada,
  "militer_strategis": burundi_strategis,
  "armada_kepolisian": burundi_kepolisian,
  "pabrik_militer": burundi_pabrik,
  "intelijen": burundi_intelijen,
    "pendidikan": burundi_pendidikan,
  "kesehatan": burundi_kesehatan,
  "hukum": burundi_hukum,
  "sektor_olahraga": burundi_olahraga,
  "sektor_komersial": burundi_komersial,
  "sektor_hiburan": burundi_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 21.4,
    "harga_listrik": 1.28,
    "harga_air": 10.4,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": burundi_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 2,
    "pendidikan": 9,
    "keamanan": 23,
    "keuangan": 37,
    "lingkungan": 60
  }
};





