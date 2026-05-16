// @ts-nocheck
const ukraina_profile = {
  "name_en": "Ukraine",
  "capital": "Kyiv",
  "name_id": "Ukraina",
  "lon": 30.52,
  "lat": 50.45,
  "flag": "ðŸ‡ºðŸ‡¦",
  "jumlah_penduduk": 36700000,
  "anggaran": 1556,
  "pendapatan_nasional": "4445",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi"
};


const ukraina_geopolitik = {
    "un_vote": 205,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 39,
      "prestise_diplomatik": 57
    }
  };

const ukraina = {
  ...ukraina_profile,
  "sektor_listrik": ukraina_listrik,
  "hunian": ukraina_hunian,
  "infrastruktur": ukraina_infrastruktur,
  "sektor_ekstraksi": ukraina_ekstraksi,
  "sektor_manufaktur": ukraina_manufaktur,
  "sektor_peternakan": ukraina_peternakan,
  "sektor_agrikultur": ukraina_agrikultur,
  "sektor_perikanan": ukraina_perikanan,
  "sektor_olahan_pangan": ukraina_olahan_pangan,
  "sektor_farmasi": ukraina_farmasi,
  "sektor_pertahanan": ukraina_pertahanan,
  "armada_militer": ukraina_armada,
  "militer_strategis": ukraina_strategis,
  "armada_kepolisian": ukraina_kepolisian,
  "pabrik_militer": ukraina_pabrik,
  "intelijen": ukraina_intelijen,
    "pendidikan": ukraina_pendidikan,
  "kesehatan": ukraina_kesehatan,
  "hukum": ukraina_hukum,
  "sektor_olahraga": ukraina_olahraga,
  "sektor_komersial": ukraina_komersial,
  "sektor_hiburan": ukraina_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 20
    },
    "penghasilan": {
      "tarif": 19,
      "kepuasan": 61,
      "pendapatan": 34
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 85
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 8 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 24 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 7.28,
    "harga_obat": 315.8,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": ukraina_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 6,
    "keamanan": 1,
    "keuangan": 28,
    "lingkungan": 60
  }
};





