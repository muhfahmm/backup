// @ts-nocheck
const gibraltar_profile = {
  "name_en": "Gibraltar",
  "capital": "Gibraltar",
  "name_id": "Gibraltar",
  "lon": -5.35,
  "lat": 36.13333333,
  "flag": "ðŸ‡¬ðŸ‡®",
  "jumlah_penduduk": 32688,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const gibraltar_geopolitik = {
    "un_vote": 23,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 13,
      "kekuatan_keras": 16,
      "prestise_diplomatik": 57
    }
  };

const gibraltar = {
  ...gibraltar_profile,
  "sektor_listrik": gibraltar_listrik,
  "hunian": gibraltar_hunian,
  "infrastruktur": gibraltar_infrastruktur,
  "sektor_ekstraksi": gibraltar_ekstraksi,
  "sektor_manufaktur": gibraltar_manufaktur,
  "sektor_peternakan": gibraltar_peternakan,
  "sektor_agrikultur": gibraltar_agrikultur,
  "sektor_perikanan": gibraltar_perikanan,
  "sektor_olahan_pangan": gibraltar_olahan_pangan,
  "sektor_farmasi": gibraltar_farmasi,
  "sektor_pertahanan": gibraltar_pertahanan,
  "armada_militer": gibraltar_armada,
  "militer_strategis": gibraltar_strategis,
  "armada_kepolisian": gibraltar_kepolisian,
  "pabrik_militer": gibraltar_pabrik,
  "intelijen": gibraltar_intelijen,
    "pendidikan": gibraltar_pendidikan,
  "kesehatan": gibraltar_kesehatan,
  "hukum": gibraltar_hukum,
  "sektor_olahraga": gibraltar_olahraga,
  "sektor_komersial": gibraltar_komersial,
  "sektor_hiburan": gibraltar_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 23,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 7.2,
    "harga_telur": 24.88,
    "harga_bbm": 14.98,
    "harga_listrik": 1.28,
    "harga_air": 10.4,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": gibraltar_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 36,
    "pendidikan": 18,
    "keamanan": 35,
    "keuangan": 39,
    "lingkungan": 60
  }
};





