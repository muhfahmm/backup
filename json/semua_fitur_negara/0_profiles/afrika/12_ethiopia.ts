// @ts-nocheck
const ethiopia_profile = {
  "name_en": "Ethiopia",
  "capital": "Addis Ababa",
  "name_id": "Ethiopia",
  "lon": 38,
  "lat": 8,
  "flag": "ðŸ‡ªðŸ‡¹",
  "jumlah_penduduk": 111652998,
  "anggaran": 1507,
  "pendapatan_nasional": "4306",
  "religion": "Kristen Ortodoks",
  "ideology": "Nasionalisme"
};


const ethiopia_geopolitik = {
    "un_vote": 70,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
      "kekuatan_keras": 14,
      "prestise_diplomatik": 57
  }
  };

const ethiopia = {
  ...ethiopia_profile,
  "sektor_listrik": ethiopia_listrik,
  "hunian": ethiopia_hunian,
  "infrastruktur": ethiopia_infrastruktur,
  "sektor_ekstraksi": ethiopia_ekstraksi,
  "sektor_manufaktur": ethiopia_manufaktur,
  "sektor_peternakan": ethiopia_peternakan,
  "sektor_agrikultur": ethiopia_agrikultur,
  "sektor_perikanan": ethiopia_perikanan,
  "sektor_olahan_pangan": ethiopia_olahan_pangan,
  "sektor_farmasi": ethiopia_farmasi,
  "sektor_pertahanan": ethiopia_pertahanan,
  "armada_militer": ethiopia_armada,
  "militer_strategis": ethiopia_strategis,
  "armada_kepolisian": ethiopia_kepolisian,
  "pabrik_militer": ethiopia_pabrik,
  "intelijen": ethiopia_intelijen,
    "pendidikan": ethiopia_pendidikan,
  "kesehatan": ethiopia_kesehatan,
  "hukum": ethiopia_hukum,
  "sektor_olahraga": ethiopia_olahraga,
  "sektor_komersial": ethiopia_komersial,
  "sektor_hiburan": ethiopia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 59
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 82
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 63
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 81
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 50
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 8 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 23 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 18
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": ethiopia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 19,
    "pendidikan": 4,
    "keamanan": 5,
    "keuangan": 33,
    "lingkungan": 60
  }
};





