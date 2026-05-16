// @ts-nocheck
const curacao_profile = {
  "name_en": "CuraÃ§ao",
  "capital": "Willemstad",
  "name_id": "Curacao",
  "lon": -68.933333,
  "lat": 12.116667,
  "flag": "ðŸ‡¨ðŸ‡¼",
  "jumlah_penduduk": 185482,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const curacao_geopolitik = {
    "un_vote": 16,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 27,
      "kekuatan_keras": 6,
      "prestise_diplomatik": 57
    }
  };

const curacao = {
  ...curacao_profile,
  "sektor_listrik": curacao_listrik,
  "hunian": curacao_hunian,
  "infrastruktur": curacao_infrastruktur,
  "sektor_ekstraksi": curacao_ekstraksi,
  "sektor_manufaktur": curacao_manufaktur,
  "sektor_peternakan": curacao_peternakan,
  "sektor_agrikultur": curacao_agrikultur,
  "sektor_perikanan": curacao_perikanan,
  "sektor_olahan_pangan": curacao_olahan_pangan,
  "sektor_farmasi": curacao_farmasi,
  "sektor_pertahanan": curacao_pertahanan,
  "armada_militer": curacao_armada,
  "militer_strategis": curacao_strategis,
  "armada_kepolisian": curacao_kepolisian,
  "pabrik_militer": curacao_pabrik,
  "intelijen": curacao_intelijen,
    "pendidikan": curacao_pendidikan,
  "kesehatan": curacao_kesehatan,
  "hukum": curacao_hukum,
  "sektor_olahraga": curacao_olahraga,
  "sektor_komersial": curacao_komersial,
  "sektor_hiburan": curacao_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 23,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 39,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 2,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 40,
      "kepuasan": 88,
      "pendapatan": 8
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
    "harga_beras": 22.4,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 15.55,
    "harga_bbm": 14.98,
    "harga_listrik": 3.2,
    "harga_air": 4.16,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": curacao_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 17,
    "keamanan": 32,
    "keuangan": 31,
    "lingkungan": 60
  }
};





