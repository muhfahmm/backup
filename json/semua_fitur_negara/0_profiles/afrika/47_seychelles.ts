// @ts-nocheck
const seychelles_profile = {
  "name_en": "Seychelles",
  "capital": "Victoria",
  "name_id": "Seychelles",
  "lon": 55.66666666,
  "lat": -4.58333333,
  "flag": "ðŸ‡¸ðŸ‡¨",
  "jumlah_penduduk": 100447,
  "anggaran": 19,
  "pendapatan_nasional": "56",
  "religion": "Katolik",
  "ideology": "Liberalisme"
};


const seychelles_geopolitik = {
    "un_vote": 6,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 27,
      "prestise_diplomatik": 57
  }
  };

const seychelles = {
  ...seychelles_profile,
  "sektor_listrik": seychelles_listrik,
  "hunian": seychelles_hunian,
  "infrastruktur": seychelles_infrastruktur,
  "sektor_ekstraksi": seychelles_ekstraksi,
  "sektor_manufaktur": seychelles_manufaktur,
  "sektor_peternakan": seychelles_peternakan,
  "sektor_agrikultur": seychelles_agrikultur,
  "sektor_perikanan": seychelles_perikanan,
  "sektor_olahan_pangan": seychelles_olahan_pangan,
  "sektor_farmasi": seychelles_farmasi,
  "sektor_pertahanan": seychelles_pertahanan,
  "armada_militer": seychelles_armada,
  "militer_strategis": seychelles_strategis,
  "armada_kepolisian": seychelles_kepolisian,
  "pabrik_militer": seychelles_pabrik,
  "intelijen": seychelles_intelijen,
    "pendidikan": seychelles_pendidikan,
  "kesehatan": seychelles_kesehatan,
  "hukum": seychelles_hukum,
  "sektor_olahraga": seychelles_olahraga,
  "sektor_komersial": seychelles_komersial,
  "sektor_hiburan": seychelles_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": seychelles_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 32,
    "pendidikan": 23,
    "keamanan": 10,
    "keuangan": 27,
    "lingkungan": 60
  }
};





