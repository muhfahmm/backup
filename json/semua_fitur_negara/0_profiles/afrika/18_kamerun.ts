// @ts-nocheck
const kamerun_profile = {
  "name_en": "Cameroon",
  "capital": "YaoundÃ©",
  "name_id": "Kamerun",
  "lon": 12,
  "lat": 6,
  "flag": "ðŸ‡¨ðŸ‡²",
  "jumlah_penduduk": 28088845,
  "anggaran": 438,
  "pendapatan_nasional": "1250",
  "religion": "Katolik",
  "ideology": "Konservatisme"
};


const kamerun_geopolitik = {
    "un_vote": 138,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 26,
      "kekuatan_keras": 19,
      "prestise_diplomatik": 57
  }
  };

const kamerun = {
  ...kamerun_profile,
  "sektor_listrik": kamerun_listrik,
  "hunian": kamerun_hunian,
  "infrastruktur": kamerun_infrastruktur,
  "sektor_ekstraksi": kamerun_ekstraksi,
  "sektor_manufaktur": kamerun_manufaktur,
  "sektor_peternakan": kamerun_peternakan,
  "sektor_agrikultur": kamerun_agrikultur,
  "sektor_perikanan": kamerun_perikanan,
  "sektor_olahan_pangan": kamerun_olahan_pangan,
  "sektor_farmasi": kamerun_farmasi,
  "sektor_pertahanan": kamerun_pertahanan,
  "armada_militer": kamerun_armada,
  "militer_strategis": kamerun_strategis,
  "armada_kepolisian": kamerun_kepolisian,
  "pabrik_militer": kamerun_pabrik,
  "intelijen": kamerun_intelijen,
    "pendidikan": kamerun_pendidikan,
  "kesehatan": kamerun_kesehatan,
  "hukum": kamerun_hukum,
  "sektor_olahraga": kamerun_olahraga,
  "sektor_komersial": kamerun_komersial,
  "sektor_hiburan": kamerun_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 7,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 33,
      "kepuasan": 86,
      "pendapatan": 29
    },
    "lingkungan": {
      "tarif": 27,
      "kepuasan": 88,
      "pendapatan": 30
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 3,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 7.2,
    "harga_telur": 43.54,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kamerun_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 15,
    "pendidikan": 38,
    "keamanan": 9,
    "keuangan": 3,
    "lingkungan": 60
  }
};





