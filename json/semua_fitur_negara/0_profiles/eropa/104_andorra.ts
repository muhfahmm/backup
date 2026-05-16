// @ts-nocheck
const andorra_profile = {
  "name_en": "Andorra",
  "capital": "Andorra la Vella",
  "name_id": "Andorra",
  "lon": 1.52,
  "lat": 42.5,
  "flag": "ðŸ‡¦ðŸ‡©",
  "jumlah_penduduk": 85101,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const andorra_geopolitik = {
    "un_vote": 11,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 4,
      "kekuatan_keras": 12,
      "prestise_diplomatik": 57
    }
  };

const andorra = {
  ...andorra_profile,
  "sektor_listrik": andorra_listrik,
  "hunian": andorra_hunian,
  "infrastruktur": andorra_infrastruktur,
  "sektor_ekstraksi": andorra_ekstraksi,
  "sektor_manufaktur": andorra_manufaktur,
  "sektor_peternakan": andorra_peternakan,
  "sektor_agrikultur": andorra_agrikultur,
  "sektor_perikanan": andorra_perikanan,
  "sektor_olahan_pangan": andorra_olahan_pangan,
  "sektor_farmasi": andorra_farmasi,
  "sektor_pertahanan": andorra_pertahanan,
  "armada_militer": andorra_armada,
  "militer_strategis": andorra_strategis,
  "armada_kepolisian": andorra_kepolisian,
  "pabrik_militer": andorra_pabrik,
  "intelijen": andorra_intelijen,
    "pendidikan": andorra_pendidikan,
  "kesehatan": andorra_kesehatan,
  "hukum": andorra_hukum,
  "sektor_olahraga": andorra_olahraga,
  "sektor_komersial": andorra_komersial,
  "sektor_hiburan": andorra_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 43.54,
    "harga_bbm": 14.98,
    "harga_listrik": 0.8,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": andorra_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 4,
    "pendidikan": 20,
    "keamanan": 33,
    "keuangan": 6,
    "lingkungan": 60
  }
};





