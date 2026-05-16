// @ts-nocheck
const islandia_profile = {
  "name_en": "Iceland",
  "capital": "Reykjavik",
  "name_id": "Islandia",
  "lon": -18,
  "lat": 65,
  "flag": "ðŸ‡®ðŸ‡¸",
  "jumlah_penduduk": 394530,
  "anggaran": 292,
  "pendapatan_nasional": "833",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const islandia_geopolitik = {
    "un_vote": 103,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 29,
      "kekuatan_keras": 18,
      "prestise_diplomatik": 57
    }
  };

const islandia = {
  ...islandia_profile,
  "sektor_listrik": islandia_listrik,
  "hunian": islandia_hunian,
  "infrastruktur": islandia_infrastruktur,
  "sektor_ekstraksi": islandia_ekstraksi,
  "sektor_manufaktur": islandia_manufaktur,
  "sektor_peternakan": islandia_peternakan,
  "sektor_agrikultur": islandia_agrikultur,
  "sektor_perikanan": islandia_perikanan,
  "sektor_olahan_pangan": islandia_olahan_pangan,
  "sektor_farmasi": islandia_farmasi,
  "sektor_pertahanan": islandia_pertahanan,
  "armada_militer": islandia_armada,
  "militer_strategis": islandia_strategis,
  "armada_kepolisian": islandia_kepolisian,
  "pabrik_militer": islandia_pabrik,
  "intelijen": islandia_intelijen,
    "pendidikan": islandia_pendidikan,
  "kesehatan": islandia_kesehatan,
  "hukum": islandia_hukum,
  "sektor_olahraga": islandia_olahraga,
  "sektor_komersial": islandia_komersial,
  "sektor_hiburan": islandia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 22
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 9,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 6
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 15.55,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": islandia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 32,
    "pendidikan": 28,
    "keamanan": 9,
    "keuangan": 22,
    "lingkungan": 60
  }
};





