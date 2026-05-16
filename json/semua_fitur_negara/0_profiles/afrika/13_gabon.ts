// @ts-nocheck
const gabon_profile = {
  "name_en": "Gabon",
  "capital": "Libreville",
  "name_id": "Gabon",
  "lon": 11.75,
  "lat": -1,
  "flag": "ðŸ‡¬ðŸ‡¦",
  "jumlah_penduduk": 2233272,
  "anggaran": 194,
  "pendapatan_nasional": "556",
  "religion": "Katolik",
  "ideology": "Nasionalisme"
};


const gabon_geopolitik = {
    "un_vote": 73,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 20,
      "kekuatan_keras": 13,
      "prestise_diplomatik": 57
  }
  };

const gabon = {
  ...gabon_profile,
  "sektor_listrik": gabon_listrik,
  "hunian": gabon_hunian,
  "infrastruktur": gabon_infrastruktur,
  "sektor_ekstraksi": gabon_ekstraksi,
  "sektor_manufaktur": gabon_manufaktur,
  "sektor_peternakan": gabon_peternakan,
  "sektor_agrikultur": gabon_agrikultur,
  "sektor_perikanan": gabon_perikanan,
  "sektor_olahan_pangan": gabon_olahan_pangan,
  "sektor_farmasi": gabon_farmasi,
  "sektor_pertahanan": gabon_pertahanan,
  "armada_militer": gabon_armada,
  "militer_strategis": gabon_strategis,
  "armada_kepolisian": gabon_kepolisian,
  "pabrik_militer": gabon_pabrik,
  "intelijen": gabon_intelijen,
    "pendidikan": gabon_pendidikan,
  "kesehatan": gabon_kesehatan,
  "hukum": gabon_hukum,
  "sektor_olahraga": gabon_olahraga,
  "sektor_komersial": gabon_komersial,
  "sektor_hiburan": gabon_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 28,
      "kepuasan": 67,
      "pendapatan": 16
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 19
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 12
    },
    "bea_cukai": {
      "tarif": 39,
      "kepuasan": 86,
      "pendapatan": 14
    },
    "lingkungan": {
      "tarif": 23,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 24.88,
    "harga_bbm": 14.98,
    "harga_listrik": 0.8,
    "harga_air": 10.4,
    "harga_obat": 78.95,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": gabon_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 26,
    "keamanan": 11,
    "keuangan": 13,
    "lingkungan": 60
  }
};





