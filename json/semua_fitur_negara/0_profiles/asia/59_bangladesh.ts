// @ts-nocheck
const bangladesh_profile = {
  "name_en": "Bangladesh",
  "capital": "Dhaka",
  "name_id": "Bangladesh",
  "lon": 90,
  "lat": 24,
  "flag": "ðŸ‡§ðŸ‡©",
  "jumlah_penduduk": 169828911,
  "anggaran": 4473,
  "pendapatan_nasional": "12779",
  "religion": "Islam",
  "ideology": "Demokrasi"
};


const bangladesh_geopolitik = {
    "un_vote": 118,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 7,
      "kekuatan_keras": 15,
      "prestise_diplomatik": 57
    }
  };

const bangladesh = {
  ...bangladesh_profile,
  "sektor_listrik": bangladesh_listrik,
  "hunian": bangladesh_hunian,
  "infrastruktur": bangladesh_infrastruktur,
  "sektor_ekstraksi": bangladesh_ekstraksi,
  "sektor_manufaktur": bangladesh_manufaktur,
  "sektor_peternakan": bangladesh_peternakan,
  "sektor_agrikultur": bangladesh_agrikultur,
  "sektor_perikanan": bangladesh_perikanan,
  "sektor_olahan_pangan": bangladesh_olahan_pangan,
  "sektor_farmasi": bangladesh_farmasi,
  "sektor_pertahanan": bangladesh_pertahanan,
  "armada_militer": bangladesh_armada,
  "militer_strategis": bangladesh_strategis,
  "armada_kepolisian": bangladesh_kepolisian,
  "pabrik_militer": bangladesh_pabrik,
  "intelijen": bangladesh_intelijen,
    "pendidikan": bangladesh_pendidikan,
  "kesehatan": bangladesh_kesehatan,
  "hukum": bangladesh_hukum,
  "sektor_olahraga": bangladesh_olahraga,
  "sektor_komersial": bangladesh_komersial,
  "sektor_hiburan": bangladesh_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 7,
      "kepuasan": 67,
      "pendapatan": 58
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 156
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 55
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 39
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 248
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 23 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 68 },
    "lainnya": {
      "tarif": 9,
      "kepuasan": 93,
      "pendapatan": 96
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 5.35,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": bangladesh_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 36,
    "pendidikan": 22,
    "keamanan": 36,
    "keuangan": 17,
    "lingkungan": 60
  }
};





