// @ts-nocheck
const mikronesia_profile = {
  "name_en": "Micronesia",
  "capital": "Palikir",
  "name_id": "Mikronesia",
  "lon": 158.25,
  "lat": 6.91666666,
  "flag": "ðŸ‡«ðŸ‡²",
  "jumlah_penduduk": 115107,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const mikronesia_geopolitik = {
    "un_vote": 14,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 9,
      "kekuatan_keras": 29,
      "prestise_diplomatik": 57
    }
  };

const mikronesia = {
  ...mikronesia_profile,
  "sektor_listrik": mikronesia_listrik,
  "hunian": mikronesia_hunian,
  "infrastruktur": mikronesia_infrastruktur,
  "sektor_ekstraksi": mikronesia_ekstraksi,
  "sektor_manufaktur": mikronesia_manufaktur,
  "sektor_peternakan": mikronesia_peternakan,
  "sektor_agrikultur": mikronesia_agrikultur,
  "sektor_perikanan": mikronesia_perikanan,
  "sektor_olahan_pangan": mikronesia_olahan_pangan,
  "sektor_farmasi": mikronesia_farmasi,
  "sektor_pertahanan": mikronesia_pertahanan,
  "armada_militer": mikronesia_armada,
  "militer_strategis": mikronesia_strategis,
  "armada_kepolisian": mikronesia_kepolisian,
  "pabrik_militer": mikronesia_pabrik,
  "intelijen": mikronesia_intelijen,
    "pendidikan": mikronesia_pendidikan,
  "kesehatan": mikronesia_kesehatan,
  "hukum": mikronesia_hukum,
  "sektor_olahraga": mikronesia_olahraga,
  "sektor_komersial": mikronesia_komersial,
  "sektor_hiburan": mikronesia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 12,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 7,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 15,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 27,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": mikronesia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 5,
    "pendidikan": 4,
    "keamanan": 24,
    "keuangan": 19,
    "lingkungan": 60
  }
};





