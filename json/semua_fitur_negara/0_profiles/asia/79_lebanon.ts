// @ts-nocheck
const lebanon_profile = {
  "name_en": "Lebanon",
  "capital": "Beirut",
  "name_id": "Lebanon",
  "lon": 35.83333333,
  "lat": 33.83333333,
  "flag": "ðŸ‡±ðŸ‡§",
  "jumlah_penduduk": 6093509,
  "anggaran": 175,
  "pendapatan_nasional": "500",
  "religion": "Islam",
  "ideology": "Demokrasi"
};


const lebanon_geopolitik = {
    "un_vote": 183,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 38,
      "kekuatan_keras": 37,
      "prestise_diplomatik": 57
    }
  };

const lebanon = {
  ...lebanon_profile,
  "sektor_listrik": lebanon_listrik,
  "hunian": lebanon_hunian,
  "infrastruktur": lebanon_infrastruktur,
  "sektor_ekstraksi": lebanon_ekstraksi,
  "sektor_manufaktur": lebanon_manufaktur,
  "sektor_peternakan": lebanon_peternakan,
  "sektor_agrikultur": lebanon_agrikultur,
  "sektor_perikanan": lebanon_perikanan,
  "sektor_olahan_pangan": lebanon_olahan_pangan,
  "sektor_farmasi": lebanon_farmasi,
  "sektor_pertahanan": lebanon_pertahanan,
  "armada_militer": lebanon_armada,
  "militer_strategis": lebanon_strategis,
  "armada_kepolisian": lebanon_kepolisian,
  "pabrik_militer": lebanon_pabrik,
  "intelijen": lebanon_intelijen,
    "pendidikan": lebanon_pendidikan,
  "kesehatan": lebanon_kesehatan,
  "hukum": lebanon_hukum,
  "sektor_olahraga": lebanon_olahraga,
  "sektor_komersial": lebanon_komersial,
  "sektor_hiburan": lebanon_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 13
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 15,
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
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 21.4,
    "harga_listrik": 0.8,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": lebanon_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 8,
    "keamanan": 6,
    "keuangan": 13,
    "lingkungan": 60
  }
};





