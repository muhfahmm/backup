// @ts-nocheck
const mesir_profile = {
  "name_en": "Egypt",
  "capital": "Cairo",
  "name_id": "Mesir",
  "lon": 31.23,
  "lat": 30.04,
  "flag": "ðŸ‡ªðŸ‡¬",
  "jumlah_penduduk": 107868296,
  "anggaran": 3841,
  "pendapatan_nasional": "10973",
  "religion": "Islam",
  "ideology": "Nasionalisme"
};


const mesir_geopolitik = {
    "un_vote": 159,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 6,
      "kekuatan_keras": 34,
      "prestise_diplomatik": 57
  }
  };

const mesir = {
  ...mesir_profile,
  "sektor_listrik": mesir_listrik,
  "hunian": mesir_hunian,
  "infrastruktur": mesir_infrastruktur,
  "sektor_ekstraksi": mesir_ekstraksi,
  "sektor_manufaktur": mesir_manufaktur,
  "sektor_peternakan": mesir_peternakan,
  "sektor_agrikultur": mesir_agrikultur,
  "sektor_perikanan": mesir_perikanan,
  "sektor_olahan_pangan": mesir_olahan_pangan,
  "sektor_farmasi": mesir_farmasi,
  "sektor_pertahanan": mesir_pertahanan,
  "armada_militer": mesir_armada,
  "militer_strategis": mesir_strategis,
  "armada_kepolisian": mesir_kepolisian,
  "pabrik_militer": mesir_pabrik,
  "intelijen": mesir_intelijen,
    "pendidikan": mesir_pendidikan,
  "kesehatan": mesir_kesehatan,
  "hukum": mesir_hukum,
  "sektor_olahraga": mesir_olahraga,
  "sektor_komersial": mesir_komersial,
  "sektor_hiburan": mesir_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 352
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 169
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 62
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 209
    },
    "lingkungan": {
      "tarif": 20,
      "kepuasan": 88,
      "pendapatan": 160
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 20 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 58 },
    "lainnya": {
      "tarif": 24,
      "kepuasan": 93,
      "pendapatan": 137
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 62.2,
    "harga_bbm": 14.98,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 126.32,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": mesir_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 30,
    "pendidikan": 16,
    "keamanan": 4,
    "keuangan": 23,
    "lingkungan": 60
  }
};





