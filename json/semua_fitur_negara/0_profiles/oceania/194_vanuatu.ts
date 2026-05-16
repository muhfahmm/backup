// @ts-nocheck
const vanuatu_profile = {
  "name_en": "Vanuatu",
  "capital": "Port Vila",
  "name_id": "Vanuatu",
  "lon": 167,
  "lat": -16,
  "flag": "ðŸ‡»ðŸ‡º",
  "jumlah_penduduk": 321409,
  "anggaran": 10,
  "pendapatan_nasional": "28",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const vanuatu_geopolitik = {
    "un_vote": 1,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 4,
      "kekuatan_keras": 10,
      "prestise_diplomatik": 57
    }
  };

const vanuatu = {
  ...vanuatu_profile,
  "sektor_listrik": vanuatu_listrik,
  "hunian": vanuatu_hunian,
  "infrastruktur": vanuatu_infrastruktur,
  "sektor_ekstraksi": vanuatu_ekstraksi,
  "sektor_manufaktur": vanuatu_manufaktur,
  "sektor_peternakan": vanuatu_peternakan,
  "sektor_agrikultur": vanuatu_agrikultur,
  "sektor_perikanan": vanuatu_perikanan,
  "sektor_olahan_pangan": vanuatu_olahan_pangan,
  "sektor_farmasi": vanuatu_farmasi,
  "sektor_pertahanan": vanuatu_pertahanan,
  "armada_militer": vanuatu_armada,
  "militer_strategis": vanuatu_strategis,
  "armada_kepolisian": vanuatu_kepolisian,
  "pabrik_militer": vanuatu_pabrik,
  "intelijen": vanuatu_intelijen,
    "pendidikan": vanuatu_pendidikan,
  "kesehatan": vanuatu_kesehatan,
  "hukum": vanuatu_hukum,
  "sektor_olahraga": vanuatu_olahraga,
  "sektor_komersial": vanuatu_komersial,
  "sektor_hiburan": vanuatu_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 5.35,
    "harga_listrik": 3.2,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": vanuatu_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 1,
    "pendidikan": 10,
    "keamanan": 39,
    "keuangan": 34,
    "lingkungan": 60
  }
};





