// @ts-nocheck
const australia_profile = {
  "name_en": "Australia",
  "capital": "Canberra",
  "name_id": "Australia",
  "lon": 149.13,
  "lat": -35.28,
  "flag": "ðŸ‡¦ðŸ‡º",
  "jumlah_penduduk": 26177413,
  "anggaran": 16724,
  "pendapatan_nasional": "47782",
  "religion": "Protestan",
  "ideology": "Kapitalisme"
};


const australia_geopolitik = {
    "un_vote": 112,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 6,
      "kekuatan_keras": 21,
      "prestise_diplomatik": 57
    }
  };

const australia = {
  ...australia_profile,
  "sektor_listrik": australia_listrik,
  "hunian": australia_hunian,
  "infrastruktur": australia_infrastruktur,
  "sektor_ekstraksi": australia_ekstraksi,
  "sektor_manufaktur": australia_manufaktur,
  "sektor_peternakan": australia_peternakan,
  "sektor_agrikultur": australia_agrikultur,
  "sektor_perikanan": australia_perikanan,
  "sektor_olahan_pangan": australia_olahan_pangan,
  "sektor_farmasi": australia_farmasi,
  "sektor_pertahanan": australia_pertahanan,
  "armada_militer": australia_armada,
  "militer_strategis": australia_strategis,
  "armada_kepolisian": australia_kepolisian,
  "pabrik_militer": australia_pabrik,
  "intelijen": australia_intelijen,
    "pendidikan": australia_pendidikan,
  "kesehatan": australia_kesehatan,
  "hukum": australia_hukum,
  "sektor_olahraga": australia_olahraga,
  "sektor_komersial": australia_komersial,
  "sektor_hiburan": australia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 392
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 213
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 209
    },
    "bea_cukai": {
      "tarif": 13,
      "kepuasan": 86,
      "pendapatan": 509
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 635
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 84 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 251 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 764
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 43.54,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": australia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 7,
    "keamanan": 1,
    "keuangan": 14,
    "lingkungan": 60
  }
};





