// @ts-nocheck
const slowakia_profile = {
  "name_en": "Slovakia",
  "capital": "Bratislava",
  "name_id": "Slowakia",
  "lon": 19.5,
  "lat": 48.66666666,
  "flag": "ðŸ‡¸ðŸ‡°",
  "jumlah_penduduk": 5423229,
  "anggaran": 1264,
  "pendapatan_nasional": "3611",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const slowakia_geopolitik = {
    "un_vote": 176,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 13,
      "kekuatan_keras": 38,
      "prestise_diplomatik": 57
    }
  };

const slowakia = {
  ...slowakia_profile,
  "sektor_listrik": slowakia_listrik,
  "hunian": slowakia_hunian,
  "infrastruktur": slowakia_infrastruktur,
  "sektor_ekstraksi": slowakia_ekstraksi,
  "sektor_manufaktur": slowakia_manufaktur,
  "sektor_peternakan": slowakia_peternakan,
  "sektor_agrikultur": slowakia_agrikultur,
  "sektor_perikanan": slowakia_perikanan,
  "sektor_olahan_pangan": slowakia_olahan_pangan,
  "sektor_farmasi": slowakia_farmasi,
  "sektor_pertahanan": slowakia_pertahanan,
  "armada_militer": slowakia_armada,
  "militer_strategis": slowakia_strategis,
  "armada_kepolisian": slowakia_kepolisian,
  "pabrik_militer": slowakia_pabrik,
  "intelijen": slowakia_intelijen,
    "pendidikan": slowakia_pendidikan,
  "kesehatan": slowakia_kesehatan,
  "hukum": slowakia_hukum,
  "sektor_olahraga": slowakia_olahraga,
  "sektor_komersial": slowakia_komersial,
  "sektor_hiburan": slowakia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 13,
      "kepuasan": 67,
      "pendapatan": 25
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 39
    },
    "penghasilan": {
      "tarif": 38,
      "kepuasan": 61,
      "pendapatan": 89
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 56
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 7 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 19 },
    "lainnya": {
      "tarif": 32,
      "kepuasan": 93,
      "pendapatan": 94
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 43.54,
    "harga_bbm": 14.98,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": slowakia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 22,
    "pendidikan": 30,
    "keamanan": 14,
    "keuangan": 28,
    "lingkungan": 60
  }
};





