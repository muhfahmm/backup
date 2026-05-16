// @ts-nocheck
const brazil_profile = {
  "name_en": "Brazil",
  "capital": "BrasÃ­lia",
  "name_id": "Brazil",
  "lon": -47.88,
  "lat": -15.79,
  "flag": "ðŸ‡§ðŸ‡·",
  "jumlah_penduduk": 213421037,
  "anggaran": 22655,
  "pendapatan_nasional": "64727",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const brazil_geopolitik = {
    "un_vote": 206,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 33,
      "kekuatan_keras": 28,
      "prestise_diplomatik": 57
    }
  };

const brazil = {
  ...brazil_profile,
  "sektor_listrik": brazil_listrik,
  "hunian": brazil_hunian,
  "infrastruktur": brazil_infrastruktur,
  "sektor_ekstraksi": brazil_ekstraksi,
  "sektor_manufaktur": brazil_manufaktur,
  "sektor_peternakan": brazil_peternakan,
  "sektor_agrikultur": brazil_agrikultur,
  "sektor_perikanan": brazil_perikanan,
  "sektor_olahan_pangan": brazil_olahan_pangan,
  "sektor_farmasi": brazil_farmasi,
  "sektor_pertahanan": brazil_pertahanan,
  "armada_militer": brazil_armada,
  "militer_strategis": brazil_strategis,
  "armada_kepolisian": brazil_kepolisian,
  "pabrik_militer": brazil_pabrik,
  "intelijen": brazil_intelijen,
    "pendidikan": brazil_pendidikan,
  "kesehatan": brazil_kesehatan,
  "hukum": brazil_hukum,
  "sektor_olahraga": brazil_olahraga,
  "sektor_komersial": brazil_komersial,
  "sektor_hiburan": brazil_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 594
    },
    "korporasi": {
      "tarif": 4,
      "kepuasan": 52,
      "pendapatan": 159
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 213
    },
    "bea_cukai": {
      "tarif": 20,
      "kepuasan": 86,
      "pendapatan": 1246
    },
    "lingkungan": {
      "tarif": 24,
      "kepuasan": 88,
      "pendapatan": 1341
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 114 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 340 },
    "lainnya": {
      "tarif": 3,
      "kepuasan": 93,
      "pendapatan": 95
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 126.32,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": brazil_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 10,
    "pendidikan": 31,
    "keamanan": 39,
    "keuangan": 36,
    "lingkungan": 60
  }
};





