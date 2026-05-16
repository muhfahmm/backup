// @ts-nocheck
const armenia_profile = {
  "name_en": "Armenia",
  "capital": "Yerevan",
  "name_id": "Armenia",
  "lon": 44.51,
  "lat": 40.19,
  "flag": "ðŸ‡¦ðŸ‡²",
  "jumlah_penduduk": 3076200,
  "anggaran": 214,
  "pendapatan_nasional": "611",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi"
};


const armenia_geopolitik = {
    "un_vote": 152,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 30,
      "kekuatan_keras": 11,
      "prestise_diplomatik": 57
    }
  };

const armenia = {
  ...armenia_profile,
  "sektor_listrik": armenia_listrik,
  "hunian": armenia_hunian,
  "infrastruktur": armenia_infrastruktur,
  "sektor_ekstraksi": armenia_ekstraksi,
  "sektor_manufaktur": armenia_manufaktur,
  "sektor_peternakan": armenia_peternakan,
  "sektor_agrikultur": armenia_agrikultur,
  "sektor_perikanan": armenia_perikanan,
  "sektor_olahan_pangan": armenia_olahan_pangan,
  "sektor_farmasi": armenia_farmasi,
  "sektor_pertahanan": armenia_pertahanan,
  "armada_militer": armenia_armada,
  "militer_strategis": armenia_strategis,
  "armada_kepolisian": armenia_kepolisian,
  "pabrik_militer": armenia_pabrik,
  "intelijen": armenia_intelijen,
    "pendidikan": armenia_pendidikan,
  "kesehatan": armenia_kesehatan,
  "hukum": armenia_hukum,
  "sektor_olahraga": armenia_olahraga,
  "sektor_komersial": armenia_komersial,
  "sektor_hiburan": armenia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 4,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 9,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 24
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 24,
      "kepuasan": 88,
      "pendapatan": 15
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 7.28,
    "harga_obat": 221.06,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": armenia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 40,
    "pendidikan": 20,
    "keamanan": 10,
    "keuangan": 5,
    "lingkungan": 60
  }
};





