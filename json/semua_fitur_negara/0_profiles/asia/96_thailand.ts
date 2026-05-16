// @ts-nocheck
const thailand_profile = {
  "name_en": "Thailand",
  "capital": "Bangkok",
  "name_id": "Thailand",
  "lon": 100.5,
  "lat": 13.75,
  "flag": "ðŸ‡¹ðŸ‡­",
  "jumlah_penduduk": 65826149,
  "anggaran": 4959,
  "pendapatan_nasional": "14168",
  "religion": "Buddha",
  "ideology": "Demokrasi"
};


const thailand_geopolitik = {
    "un_vote": 154,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 29,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  };

const thailand = {
  ...thailand_profile,
  "sektor_listrik": thailand_listrik,
  "hunian": thailand_hunian,
  "infrastruktur": thailand_infrastruktur,
  "sektor_ekstraksi": thailand_ekstraksi,
  "sektor_manufaktur": thailand_manufaktur,
  "sektor_peternakan": thailand_peternakan,
  "sektor_agrikultur": thailand_agrikultur,
  "sektor_perikanan": thailand_perikanan,
  "sektor_olahan_pangan": thailand_olahan_pangan,
  "sektor_farmasi": thailand_farmasi,
  "sektor_pertahanan": thailand_pertahanan,
  "armada_militer": thailand_armada,
  "militer_strategis": thailand_strategis,
  "armada_kepolisian": thailand_kepolisian,
  "pabrik_militer": thailand_pabrik,
  "intelijen": thailand_intelijen,
    "pendidikan": thailand_pendidikan,
  "kesehatan": thailand_kesehatan,
  "hukum": thailand_hukum,
  "sektor_olahraga": thailand_olahraga,
  "sektor_komersial": thailand_komersial,
  "sektor_hiburan": thailand_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 307
    },
    "korporasi": {
      "tarif": 39,
      "kepuasan": 52,
      "pendapatan": 520
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 152
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 451
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 43
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 25 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 75 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 135
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 15.55,
    "harga_bbm": 8.56,
    "harga_listrik": 3.2,
    "harga_air": 10.4,
    "harga_obat": 126.32,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": thailand_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 8,
    "pendidikan": 20,
    "keamanan": 9,
    "keuangan": 24,
    "lingkungan": 60
  }
};





