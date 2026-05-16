// @ts-nocheck
const portugal_profile = {
  "name_en": "Portugal",
  "capital": "Lisbon",
  "name_id": "Portugal",
  "lon": -9.13,
  "lat": 38.72,
  "flag": "ðŸ‡µðŸ‡¹",
  "jumlah_penduduk": 10749635,
  "anggaran": 2722,
  "pendapatan_nasional": "7778",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const portugal_geopolitik = {
    "un_vote": 194,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 30,
      "prestise_diplomatik": 57
    }
  };

const portugal = {
  ...portugal_profile,
  "sektor_listrik": portugal_listrik,
  "hunian": portugal_hunian,
  "infrastruktur": portugal_infrastruktur,
  "sektor_ekstraksi": portugal_ekstraksi,
  "sektor_manufaktur": portugal_manufaktur,
  "sektor_peternakan": portugal_peternakan,
  "sektor_agrikultur": portugal_agrikultur,
  "sektor_perikanan": portugal_perikanan,
  "sektor_olahan_pangan": portugal_olahan_pangan,
  "sektor_farmasi": portugal_farmasi,
  "sektor_pertahanan": portugal_pertahanan,
  "armada_militer": portugal_armada,
  "militer_strategis": portugal_strategis,
  "armada_kepolisian": portugal_kepolisian,
  "pabrik_militer": portugal_pabrik,
  "intelijen": portugal_intelijen,
    "pendidikan": portugal_pendidikan,
  "kesehatan": portugal_kesehatan,
  "hukum": portugal_hukum,
  "sektor_olahraga": portugal_olahraga,
  "sektor_komersial": portugal_komersial,
  "sektor_hiburan": portugal_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 114
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 204
    },
    "penghasilan": {
      "tarif": 16,
      "kepuasan": 61,
      "pendapatan": 52
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 32
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 99
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 14 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 41 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 194
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 0.8,
    "harga_air": 2.6,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": portugal_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 33,
    "keamanan": 9,
    "keuangan": 12,
    "lingkungan": 60
  }
};





