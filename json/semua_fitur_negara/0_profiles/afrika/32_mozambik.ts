// @ts-nocheck
const mozambik_profile = {
  "name_en": "Mozambique",
  "capital": "Maputo",
  "name_id": "Mozambik",
  "lon": 35,
  "lat": -18.25,
  "flag": "ðŸ‡²ðŸ‡¿",
  "jumlah_penduduk": 30066648,
  "anggaran": 175,
  "pendapatan_nasional": "500",
  "religion": "Katolik",
  "ideology": "Sosialisme"
};


const mozambik_geopolitik = {
    "un_vote": 85,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 12,
      "kekuatan_keras": 28,
      "prestise_diplomatik": 57
  }
  };

const mozambik = {
  ...mozambik_profile,
  "sektor_listrik": mozambik_listrik,
  "hunian": mozambik_hunian,
  "infrastruktur": mozambik_infrastruktur,
  "sektor_ekstraksi": mozambik_ekstraksi,
  "sektor_manufaktur": mozambik_manufaktur,
  "sektor_peternakan": mozambik_peternakan,
  "sektor_agrikultur": mozambik_agrikultur,
  "sektor_perikanan": mozambik_perikanan,
  "sektor_olahan_pangan": mozambik_olahan_pangan,
  "sektor_farmasi": mozambik_farmasi,
  "sektor_pertahanan": mozambik_pertahanan,
  "armada_militer": mozambik_armada,
  "militer_strategis": mozambik_strategis,
  "armada_kepolisian": mozambik_kepolisian,
  "pabrik_militer": mozambik_pabrik,
  "intelijen": mozambik_intelijen,
    "pendidikan": mozambik_pendidikan,
  "kesehatan": mozambik_kesehatan,
  "hukum": mozambik_hukum,
  "sektor_olahraga": mozambik_olahraga,
  "sektor_komersial": mozambik_komersial,
  "sektor_hiburan": mozambik_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 7
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 6,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 14.98,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": mozambik_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 6,
    "pendidikan": 25,
    "keamanan": 1,
    "keuangan": 35,
    "lingkungan": 60
  }
};





