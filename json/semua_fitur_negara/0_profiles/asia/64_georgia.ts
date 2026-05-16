// @ts-nocheck
const georgia_profile = {
  "name_en": "Georgia",
  "capital": "Tbilisi",
  "name_id": "Georgia",
  "lon": 43.5,
  "lat": 42,
  "flag": "ðŸ‡¬ðŸ‡ª",
  "jumlah_penduduk": 3704500,
  "anggaran": 243,
  "pendapatan_nasional": "694",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi"
};


const georgia_geopolitik = {
    "un_vote": 127,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 18,
      "kekuatan_keras": 32,
      "prestise_diplomatik": 57
    }
  };

const georgia = {
  ...georgia_profile,
  "sektor_listrik": georgia_listrik,
  "hunian": georgia_hunian,
  "infrastruktur": georgia_infrastruktur,
  "sektor_ekstraksi": georgia_ekstraksi,
  "sektor_manufaktur": georgia_manufaktur,
  "sektor_peternakan": georgia_peternakan,
  "sektor_agrikultur": georgia_agrikultur,
  "sektor_perikanan": georgia_perikanan,
  "sektor_olahan_pangan": georgia_olahan_pangan,
  "sektor_farmasi": georgia_farmasi,
  "sektor_pertahanan": georgia_pertahanan,
  "armada_militer": georgia_armada,
  "militer_strategis": georgia_strategis,
  "armada_kepolisian": georgia_kepolisian,
  "pabrik_militer": georgia_pabrik,
  "intelijen": georgia_intelijen,
    "pendidikan": georgia_pendidikan,
  "kesehatan": georgia_kesehatan,
  "hukum": georgia_hukum,
  "sektor_olahraga": georgia_olahraga,
  "sektor_komersial": georgia_komersial,
  "sektor_hiburan": georgia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 23,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 15,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 17
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": georgia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 17,
    "pendidikan": 8,
    "keamanan": 21,
    "keuangan": 8,
    "lingkungan": 60
  }
};





