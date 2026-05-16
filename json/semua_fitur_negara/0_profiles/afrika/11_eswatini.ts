// @ts-nocheck
const eswatini_profile = {
  "name_en": "Eswatini",
  "capital": "Lobamba",
  "name_id": "Eswatini",
  "lon": 31.5,
  "lat": -26.5,
  "flag": "ðŸ‡¸ðŸ‡¿",
  "jumlah_penduduk": 1242822,
  "anggaran": 44,
  "pendapatan_nasional": "125",
  "religion": "Protestan",
  "ideology": "Monarki"
};


const eswatini_geopolitik = {
    "un_vote": 60,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 19,
      "kekuatan_keras": 23,
      "prestise_diplomatik": 57
  }
  };

const eswatini = {
  ...eswatini_profile,
  "sektor_listrik": eswatini_listrik,
  "hunian": eswatini_hunian,
  "infrastruktur": eswatini_infrastruktur,
  "sektor_ekstraksi": eswatini_ekstraksi,
  "sektor_manufaktur": eswatini_manufaktur,
  "sektor_peternakan": eswatini_peternakan,
  "sektor_agrikultur": eswatini_agrikultur,
  "sektor_perikanan": eswatini_perikanan,
  "sektor_olahan_pangan": eswatini_olahan_pangan,
  "sektor_farmasi": eswatini_farmasi,
  "sektor_pertahanan": eswatini_pertahanan,
  "armada_militer": eswatini_armada,
  "militer_strategis": eswatini_strategis,
  "armada_kepolisian": eswatini_kepolisian,
  "pabrik_militer": eswatini_pabrik,
  "intelijen": eswatini_intelijen,
    "pendidikan": eswatini_pendidikan,
  "kesehatan": eswatini_kesehatan,
  "hukum": eswatini_hukum,
  "sektor_olahraga": eswatini_olahraga,
  "sektor_komersial": eswatini_komersial,
  "sektor_hiburan": eswatini_hiburan,
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
      "tarif": 2,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 14,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": eswatini_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 29,
    "pendidikan": 40,
    "keamanan": 6,
    "keuangan": 10,
    "lingkungan": 60
  }
};





