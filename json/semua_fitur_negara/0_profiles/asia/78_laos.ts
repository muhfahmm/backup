// @ts-nocheck
const laos_profile = {
  "name_en": "Laos",
  "capital": "Vientiane",
  "name_id": "Laos",
  "lon": 102.63,
  "lat": 17.97,
  "flag": "ðŸ‡±ðŸ‡¦",
  "jumlah_penduduk": 6961210,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Buddha",
  "ideology": "Komunisme"
};


const laos_geopolitik = {
    "un_vote": 21,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 14,
      "prestise_diplomatik": 57
    }
  };

const laos = {
  ...laos_profile,
  "sektor_listrik": laos_listrik,
  "hunian": laos_hunian,
  "infrastruktur": laos_infrastruktur,
  "sektor_ekstraksi": laos_ekstraksi,
  "sektor_manufaktur": laos_manufaktur,
  "sektor_peternakan": laos_peternakan,
  "sektor_agrikultur": laos_agrikultur,
  "sektor_perikanan": laos_perikanan,
  "sektor_olahan_pangan": laos_olahan_pangan,
  "sektor_farmasi": laos_farmasi,
  "sektor_pertahanan": laos_pertahanan,
  "armada_militer": laos_armada,
  "militer_strategis": laos_strategis,
  "armada_kepolisian": laos_kepolisian,
  "pabrik_militer": laos_pabrik,
  "intelijen": laos_intelijen,
    "pendidikan": laos_pendidikan,
  "kesehatan": laos_kesehatan,
  "hukum": laos_hukum,
  "sektor_olahraga": laos_olahraga,
  "sektor_komersial": laos_komersial,
  "sektor_hiburan": laos_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 32,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 13,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 8,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 11.52,
    "harga_telur": 24.88,
    "harga_bbm": 5.35,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": laos_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 2,
    "pendidikan": 12,
    "keamanan": 39,
    "keuangan": 5,
    "lingkungan": 60
  }
};





