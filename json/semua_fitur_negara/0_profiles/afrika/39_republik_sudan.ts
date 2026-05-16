// @ts-nocheck
const republik_sudan_profile = {
  "name_en": "Sudan",
  "capital": "Khartoum",
  "name_id": "Republik sudan",
  "lon": 30,
  "lat": 15,
  "flag": "ðŸ‡¸ðŸ‡©",
  "jumlah_penduduk": 51662000,
  "anggaran": 243,
  "pendapatan_nasional": "694",
  "religion": "Islam",
  "ideology": "Nasionalisme"
};


const republik_sudan_geopolitik = {
    "un_vote": 95,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 7,
      "kekuatan_keras": 34,
      "prestise_diplomatik": 57
  }
  };

const republik_sudan = {
  ...republik_sudan_profile,
  "sektor_listrik": republik_sudan_listrik,
  "hunian": republik_sudan_hunian,
  "infrastruktur": republik_sudan_infrastruktur,
  "sektor_ekstraksi": republik_sudan_ekstraksi,
  "sektor_manufaktur": republik_sudan_manufaktur,
  "sektor_peternakan": republik_sudan_peternakan,
  "sektor_agrikultur": republik_sudan_agrikultur,
  "sektor_perikanan": republik_sudan_perikanan,
  "sektor_olahan_pangan": republik_sudan_olahan_pangan,
  "sektor_farmasi": republik_sudan_farmasi,
  "sektor_pertahanan": republik_sudan_pertahanan,
  "armada_militer": republik_sudan_armada,
  "militer_strategis": republik_sudan_strategis,
  "armada_kepolisian": republik_sudan_kepolisian,
  "pabrik_militer": republik_sudan_pabrik,
  "intelijen": republik_sudan_intelijen,
    "pendidikan": republik_sudan_pendidikan,
  "kesehatan": republik_sudan_kesehatan,
  "hukum": republik_sudan_hukum,
  "sektor_olahraga": republik_sudan_olahraga,
  "sektor_komersial": republik_sudan_komersial,
  "sektor_hiburan": republik_sudan_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 5,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 22
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 29,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_sudan_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 30,
    "pendidikan": 4,
    "keamanan": 9,
    "keuangan": 20,
    "lingkungan": 60
  }
};





