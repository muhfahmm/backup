// @ts-nocheck
const jepang_profile = {
  "name_en": "Japan",
  "capital": "Tokyo",
  "name_id": "Jepang",
  "lon": 139.65,
  "lat": 35.67,
  "flag": "ðŸ‡¯ðŸ‡µ",
  "jumlah_penduduk": 122860000,
  "anggaran": 39962,
  "pendapatan_nasional": "114176",
  "religion": "Shinto",
  "ideology": "Kapitalisme"
};


const jepang_geopolitik = {
    "un_vote": 207,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 39,
      "kekuatan_keras": 19,
      "prestise_diplomatik": 57
    }
  };

const jepang = {
  ...jepang_profile,
  "sektor_listrik": jepang_listrik,
  "hunian": jepang_hunian,
  "infrastruktur": jepang_infrastruktur,
  "sektor_ekstraksi": jepang_ekstraksi,
  "sektor_manufaktur": jepang_manufaktur,
  "sektor_peternakan": jepang_peternakan,
  "sektor_agrikultur": jepang_agrikultur,
  "sektor_perikanan": jepang_perikanan,
  "sektor_olahan_pangan": jepang_olahan_pangan,
  "sektor_farmasi": jepang_farmasi,
  "sektor_pertahanan": jepang_pertahanan,
  "armada_militer": jepang_armada,
  "militer_strategis": jepang_strategis,
  "armada_kepolisian": jepang_kepolisian,
  "pabrik_militer": jepang_pabrik,
  "intelijen": jepang_intelijen,
    "pendidikan": jepang_pendidikan,
  "kesehatan": jepang_kesehatan,
  "hukum": jepang_hukum,
  "sektor_olahraga": jepang_olahraga,
  "sektor_komersial": jepang_komersial,
  "sektor_hiburan": jepang_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 3,
      "kepuasan": 67,
      "pendapatan": 209
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 245
    },
    "penghasilan": {
      "tarif": 23,
      "kepuasan": 61,
      "pendapatan": 1899
    },
    "bea_cukai": {
      "tarif": 12,
      "kepuasan": 86,
      "pendapatan": 568
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 433
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 200 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 600 },
    "lainnya": {
      "tarif": 16,
      "kepuasan": 93,
      "pendapatan": 1182
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 82,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 7.2,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 2.6,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": jepang_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 40,
    "keamanan": 10,
    "keuangan": 22,
    "lingkungan": 60
  }
};





