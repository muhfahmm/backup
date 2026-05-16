// @ts-nocheck
const ceko_profile = {
  "name_en": "Czechia",
  "capital": "Prague",
  "name_id": "Ceko",
  "lon": 15.5,
  "lat": 49.75,
  "flag": "ðŸ‡¨ðŸ‡¿",
  "jumlah_penduduk": "10M",
  "anggaran": 3209,
  "pendapatan_nasional": "9167",
  "religion": "Ateisme",
  "ideology": "Demokrasi"
};


const ceko_geopolitik = {
    "un_vote": 26,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 26,
      "prestise_diplomatik": 57
    }
  };

const ceko = {
  ...ceko_profile,
  "sektor_listrik": ceko_listrik,
  "hunian": ceko_hunian,
  "infrastruktur": ceko_infrastruktur,
  "sektor_ekstraksi": ceko_ekstraksi,
  "sektor_manufaktur": ceko_manufaktur,
  "sektor_peternakan": ceko_peternakan,
  "sektor_agrikultur": ceko_agrikultur,
  "sektor_perikanan": ceko_perikanan,
  "sektor_olahan_pangan": ceko_olahan_pangan,
  "sektor_farmasi": ceko_farmasi,
  "sektor_pertahanan": ceko_pertahanan,
  "armada_militer": ceko_armada,
  "militer_strategis": ceko_strategis,
  "armada_kepolisian": ceko_kepolisian,
  "pabrik_militer": ceko_pabrik,
  "intelijen": ceko_intelijen,
    "pendidikan": ceko_pendidikan,
  "kesehatan": ceko_kesehatan,
  "hukum": ceko_hukum,
  "sektor_olahraga": ceko_olahraga,
  "sektor_komersial": ceko_komersial,
  "sektor_hiburan": ceko_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 66
    },
    "korporasi": {
      "tarif": 22,
      "kepuasan": 52,
      "pendapatan": 171
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 98
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 43
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 72
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 17 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 49 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 131
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 28.8,
    "harga_telur": 43.54,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 221.06,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": ceko_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 15,
    "pendidikan": 8,
    "keamanan": 39,
    "keuangan": 23,
    "lingkungan": 60
  }
};





