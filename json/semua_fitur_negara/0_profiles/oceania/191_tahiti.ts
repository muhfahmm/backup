// @ts-nocheck
const tahiti_profile = {
  "name_en": "French Polynesia",
  "capital": "PapeetÄ“",
  "name_id": "Tahiti",
  "lon": -140,
  "lat": -15,
  "flag": "ðŸ‡µðŸ‡«",
  "jumlah_penduduk": 308872,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const tahiti_geopolitik = {
    "un_vote": 81,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 14,
      "kekuatan_keras": 37,
      "prestise_diplomatik": 57
    }
  };

const tahiti = {
  ...tahiti_profile,
  "sektor_listrik": tahiti_listrik,
  "hunian": tahiti_hunian,
  "infrastruktur": tahiti_infrastruktur,
  "sektor_ekstraksi": tahiti_ekstraksi,
  "sektor_manufaktur": tahiti_manufaktur,
  "sektor_peternakan": tahiti_peternakan,
  "sektor_agrikultur": tahiti_agrikultur,
  "sektor_perikanan": tahiti_perikanan,
  "sektor_olahan_pangan": tahiti_olahan_pangan,
  "sektor_farmasi": tahiti_farmasi,
  "sektor_pertahanan": tahiti_pertahanan,
  "armada_militer": tahiti_armada,
  "militer_strategis": tahiti_strategis,
  "armada_kepolisian": tahiti_kepolisian,
  "pabrik_militer": tahiti_pabrik,
  "intelijen": tahiti_intelijen,
    "pendidikan": tahiti_pendidikan,
  "kesehatan": tahiti_kesehatan,
  "hukum": tahiti_hukum,
  "sektor_olahraga": tahiti_olahraga,
  "sektor_komersial": tahiti_komersial,
  "sektor_hiburan": tahiti_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 4
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": tahiti_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 38,
    "pendidikan": 10,
    "keamanan": 18,
    "keuangan": 37,
    "lingkungan": 60
  }
};





