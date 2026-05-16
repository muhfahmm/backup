// @ts-nocheck
const israel_profile = {
  "name_en": "Israel",
  "capital": "Jerusalem",
  "name_id": "Israel",
  "lon": 35.21,
  "lat": 31.76,
  "flag": "ðŸ‡®ðŸ‡±",
  "jumlah_penduduk": 10244000,
  "anggaran": 5056,
  "pendapatan_nasional": "14446",
  "religion": "Yahudi",
  "ideology": "Kapitalisme"
};


const israel_geopolitik = {
    "un_vote": 199,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 37,
      "kekuatan_keras": 17,
      "prestise_diplomatik": 57
    }
  };

const israel = {
  ...israel_profile,
  "sektor_listrik": israel_listrik,
  "hunian": israel_hunian,
  "infrastruktur": israel_infrastruktur,
  "sektor_ekstraksi": israel_ekstraksi,
  "sektor_manufaktur": israel_manufaktur,
  "sektor_peternakan": israel_peternakan,
  "sektor_agrikultur": israel_agrikultur,
  "sektor_perikanan": israel_perikanan,
  "sektor_olahan_pangan": israel_olahan_pangan,
  "sektor_farmasi": israel_farmasi,
  "sektor_pertahanan": israel_pertahanan,
  "armada_militer": israel_armada,
  "militer_strategis": israel_strategis,
  "armada_kepolisian": israel_kepolisian,
  "pabrik_militer": israel_pabrik,
  "intelijen": israel_intelijen,
    "pendidikan": israel_pendidikan,
  "kesehatan": israel_kesehatan,
  "hukum": israel_hukum,
  "sektor_olahraga": israel_olahraga,
  "sektor_komersial": israel_komersial,
  "sektor_hiburan": israel_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 40
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 160
    },
    "penghasilan": {
      "tarif": 17,
      "kepuasan": 61,
      "pendapatan": 97
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 58
    },
    "lingkungan": {
      "tarif": 17,
      "kepuasan": 88,
      "pendapatan": 139
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 26 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 76 },
    "lainnya": {
      "tarif": 37,
      "kepuasan": 93,
      "pendapatan": 383
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 28.8,
    "harga_telur": 62.2,
    "harga_bbm": 10.7,
    "harga_listrik": 0.8,
    "harga_air": 7.28,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": israel_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 16,
    "keamanan": 39,
    "keuangan": 31,
    "lingkungan": 60
  }
};





