// @ts-nocheck
const nauru_profile = {
  "name_en": "Nauru",
  "capital": "Yaren",
  "name_id": "Nauru",
  "lon": 166.91666666,
  "lat": -0.53333333,
  "flag": "ðŸ‡³ðŸ‡·",
  "jumlah_penduduk": 11680,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const nauru_geopolitik = {
    "un_vote": 52,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 23,
      "kekuatan_keras": 36,
      "prestise_diplomatik": 57
    }
  };

const nauru = {
  ...nauru_profile,
  "sektor_listrik": nauru_listrik,
  "hunian": nauru_hunian,
  "infrastruktur": nauru_infrastruktur,
  "sektor_ekstraksi": nauru_ekstraksi,
  "sektor_manufaktur": nauru_manufaktur,
  "sektor_peternakan": nauru_peternakan,
  "sektor_agrikultur": nauru_agrikultur,
  "sektor_perikanan": nauru_perikanan,
  "sektor_olahan_pangan": nauru_olahan_pangan,
  "sektor_farmasi": nauru_farmasi,
  "sektor_pertahanan": nauru_pertahanan,
  "armada_militer": nauru_armada,
  "militer_strategis": nauru_strategis,
  "armada_kepolisian": nauru_kepolisian,
  "pabrik_militer": nauru_pabrik,
  "intelijen": nauru_intelijen,
    "pendidikan": nauru_pendidikan,
  "kesehatan": nauru_kesehatan,
  "hukum": nauru_hukum,
  "sektor_olahraga": nauru_olahraga,
  "sektor_komersial": nauru_komersial,
  "sektor_hiburan": nauru_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 34,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 32,
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
    "harga_ayam": 41,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 11.52,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": nauru_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 29,
    "keamanan": 5,
    "keuangan": 9,
    "lingkungan": 60
  }
};





