// @ts-nocheck
const inggris_profile = {
  "name_en": "United Kingdom",
  "capital": "London",
  "name_id": "Inggris",
  "lon": -0.12,
  "lat": 51.5,
  "flag": "ðŸ‡¬ðŸ‡§",
  "jumlah_penduduk": 69487000,
  "anggaran": 34030,
  "pendapatan_nasional": "97230",
  "religion": "Protestan",
  "ideology": "Kapitalisme"
};


const inggris_geopolitik = {
    "un_vote": 181,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 3,
      "kekuatan_keras": 29,
      "prestise_diplomatik": 57
    }
  };

const inggris = {
  ...inggris_profile,
  "sektor_listrik": inggris_listrik,
  "hunian": inggris_hunian,
  "infrastruktur": inggris_infrastruktur,
  "sektor_ekstraksi": inggris_ekstraksi,
  "sektor_manufaktur": inggris_manufaktur,
  "sektor_peternakan": inggris_peternakan,
  "sektor_agrikultur": inggris_agrikultur,
  "sektor_perikanan": inggris_perikanan,
  "sektor_olahan_pangan": inggris_olahan_pangan,
  "sektor_farmasi": inggris_farmasi,
  "sektor_pertahanan": inggris_pertahanan,
  "armada_militer": inggris_armada,
  "militer_strategis": inggris_strategis,
  "armada_kepolisian": inggris_kepolisian,
  "pabrik_militer": inggris_pabrik,
  "intelijen": inggris_intelijen,
    "pendidikan": inggris_pendidikan,
  "kesehatan": inggris_kesehatan,
  "hukum": inggris_hukum,
  "sektor_olahraga": inggris_olahraga,
  "sektor_komersial": inggris_komersial,
  "sektor_hiburan": inggris_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 1495
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 1669
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 2342
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 3052
    },
    "lingkungan": {
      "tarif": 31,
      "kepuasan": 88,
      "pendapatan": 1976
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 171 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 511 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 641
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 7.28,
    "harga_obat": 221.06,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": inggris_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 32,
    "pendidikan": 31,
    "keamanan": 5,
    "keuangan": 2,
    "lingkungan": 60
  }
};





