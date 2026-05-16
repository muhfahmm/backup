// @ts-nocheck
const samoa_amerika_profile = {
  "name_en": "American Samoa",
  "capital": "Pago Pago",
  "name_id": "Samoa amerika",
  "lon": -170,
  "lat": -14.33333333,
  "flag": "ðŸ‡¦ðŸ‡¸",
  "jumlah_penduduk": 43886,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const samoa_amerika_geopolitik = {
    "un_vote": 24,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 21,
      "kekuatan_keras": 3,
      "prestise_diplomatik": 57
    }
  };

const samoa_amerika = {
  ...samoa_amerika_profile,
  "sektor_listrik": samoa_amerika_listrik,
  "hunian": samoa_amerika_hunian,
  "infrastruktur": samoa_amerika_infrastruktur,
  "sektor_ekstraksi": samoa_amerika_ekstraksi,
  "sektor_manufaktur": samoa_amerika_manufaktur,
  "sektor_peternakan": samoa_amerika_peternakan,
  "sektor_agrikultur": samoa_amerika_agrikultur,
  "sektor_perikanan": samoa_amerika_perikanan,
  "sektor_olahan_pangan": samoa_amerika_olahan_pangan,
  "sektor_farmasi": samoa_amerika_farmasi,
  "sektor_pertahanan": samoa_amerika_pertahanan,
  "armada_militer": samoa_amerika_armada,
  "militer_strategis": samoa_amerika_strategis,
  "armada_kepolisian": samoa_amerika_kepolisian,
  "pabrik_militer": samoa_amerika_pabrik,
  "intelijen": samoa_amerika_intelijen,
    "pendidikan": samoa_amerika_pendidikan,
  "kesehatan": samoa_amerika_kesehatan,
  "hukum": samoa_amerika_hukum,
  "sektor_olahraga": samoa_amerika_olahraga,
  "sektor_komersial": samoa_amerika_komersial,
  "sektor_hiburan": samoa_amerika_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 31,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 8,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 221.06,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": samoa_amerika_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 27,
    "keamanan": 18,
    "keuangan": 40,
    "lingkungan": 60
  }
};





