// @ts-nocheck
const liberia_profile = {
  "name_en": "Liberia",
  "capital": "Monrovia",
  "name_id": "Liberia",
  "lon": -9.5,
  "lat": 6.5,
  "flag": "ðŸ‡±ðŸ‡·",
  "jumlah_penduduk": 5612817,
  "anggaran": 39,
  "pendapatan_nasional": "111",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const liberia_geopolitik = {
    "un_vote": 93,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 39,
      "kekuatan_keras": 8,
      "prestise_diplomatik": 57
  }
  };

const liberia = {
  ...liberia_profile,
  "sektor_listrik": liberia_listrik,
  "hunian": liberia_hunian,
  "infrastruktur": liberia_infrastruktur,
  "sektor_ekstraksi": liberia_ekstraksi,
  "sektor_manufaktur": liberia_manufaktur,
  "sektor_peternakan": liberia_peternakan,
  "sektor_agrikultur": liberia_agrikultur,
  "sektor_perikanan": liberia_perikanan,
  "sektor_olahan_pangan": liberia_olahan_pangan,
  "sektor_farmasi": liberia_farmasi,
  "sektor_pertahanan": liberia_pertahanan,
  "armada_militer": liberia_armada,
  "militer_strategis": liberia_strategis,
  "armada_kepolisian": liberia_kepolisian,
  "pabrik_militer": liberia_pabrik,
  "intelijen": liberia_intelijen,
    "pendidikan": liberia_pendidikan,
  "kesehatan": liberia_kesehatan,
  "hukum": liberia_hukum,
  "sektor_olahraga": liberia_olahraga,
  "sektor_komersial": liberia_komersial,
  "sektor_hiburan": liberia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 24,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 82,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 20.16,
    "harga_telur": 62.2,
    "harga_bbm": 14.98,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 78.95,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": liberia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 7,
    "pendidikan": 21,
    "keamanan": 36,
    "keuangan": 3,
    "lingkungan": 60
  }
};





