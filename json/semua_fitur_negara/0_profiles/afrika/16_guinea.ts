// @ts-nocheck
const guinea_profile = {
  "name_en": "Guinea",
  "capital": "Conakry",
  "name_id": "Guinea",
  "lon": -10,
  "lat": 11,
  "flag": "ðŸ‡¬ðŸ‡³",
  "jumlah_penduduk": 17521167,
  "anggaran": 175,
  "pendapatan_nasional": "500",
  "religion": "Islam",
  "ideology": "Nasionalisme"
};


const guinea_geopolitik = {
    "un_vote": 49,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 18,
      "kekuatan_keras": 5,
      "prestise_diplomatik": 57
  }
  };

const guinea = {
  ...guinea_profile,
  "sektor_listrik": guinea_listrik,
  "hunian": guinea_hunian,
  "infrastruktur": guinea_infrastruktur,
  "sektor_ekstraksi": guinea_ekstraksi,
  "sektor_manufaktur": guinea_manufaktur,
  "sektor_peternakan": guinea_peternakan,
  "sektor_agrikultur": guinea_agrikultur,
  "sektor_perikanan": guinea_perikanan,
  "sektor_olahan_pangan": guinea_olahan_pangan,
  "sektor_farmasi": guinea_farmasi,
  "sektor_pertahanan": guinea_pertahanan,
  "armada_militer": guinea_armada,
  "militer_strategis": guinea_strategis,
  "armada_kepolisian": guinea_kepolisian,
  "pabrik_militer": guinea_pabrik,
  "intelijen": guinea_intelijen,
    "pendidikan": guinea_pendidikan,
  "kesehatan": guinea_kesehatan,
  "hukum": guinea_hukum,
  "sektor_olahraga": guinea_olahraga,
  "sektor_komersial": guinea_komersial,
  "sektor_hiburan": guinea_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 20,
      "kepuasan": 86,
      "pendapatan": 9
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 43.54,
    "harga_bbm": 14.98,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": guinea_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 4,
    "pendidikan": 16,
    "keamanan": 12,
    "keuangan": 31,
    "lingkungan": 60
  }
};





