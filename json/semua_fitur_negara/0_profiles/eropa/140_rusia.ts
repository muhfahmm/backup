// @ts-nocheck
const rusia_profile = {
  "name_en": "Russia",
  "capital": "Moscow",
  "name_id": "Rusia",
  "lon": 37.61,
  "lat": 55.75,
  "flag": "ðŸ‡·ðŸ‡º",
  "jumlah_penduduk": 146028325,
  "anggaran": 19640,
  "pendapatan_nasional": "56116",
  "religion": "Kristen Ortodoks",
  "ideology": "Nasionalisme"
};


const rusia_geopolitik = {
    "un_vote": 150,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 12,
      "prestise_diplomatik": 57
    }
  };

const rusia = {
  ...rusia_profile,
  "sektor_listrik": rusia_listrik,
  "hunian": rusia_hunian,
  "infrastruktur": rusia_infrastruktur,
  "sektor_ekstraksi": rusia_ekstraksi,
  "sektor_manufaktur": rusia_manufaktur,
  "sektor_peternakan": rusia_peternakan,
  "sektor_agrikultur": rusia_agrikultur,
  "sektor_perikanan": rusia_perikanan,
  "sektor_olahan_pangan": rusia_olahan_pangan,
  "sektor_farmasi": rusia_farmasi,
  "sektor_pertahanan": rusia_pertahanan,
  "armada_militer": rusia_armada,
  "militer_strategis": rusia_strategis,
  "armada_kepolisian": rusia_kepolisian,
  "pabrik_militer": rusia_pabrik,
  "intelijen": rusia_intelijen,
    "pendidikan": rusia_pendidikan,
  "kesehatan": rusia_kesehatan,
  "hukum": rusia_hukum,
  "sektor_olahraga": rusia_olahraga,
  "sektor_komersial": rusia_komersial,
  "sektor_hiburan": rusia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 1161
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 241
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 1042
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 983
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 1412
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 99 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 295 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 1274
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 41,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 15.55,
    "harga_bbm": 21.4,
    "harga_listrik": 1.28,
    "harga_air": 4.16,
    "harga_obat": 126.32,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": rusia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 7,
    "pendidikan": 14,
    "keamanan": 20,
    "keuangan": 1,
    "lingkungan": 60
  }
};





