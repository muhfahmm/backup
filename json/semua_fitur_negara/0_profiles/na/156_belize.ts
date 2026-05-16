// @ts-nocheck
const belize_profile = {
  "name_en": "Belize",
  "capital": "Belmopan",
  "name_id": "Belize",
  "lon": -88.75,
  "lat": 17.25,
  "flag": "ðŸ‡§ðŸ‡¿",
  "jumlah_penduduk": 417634,
  "anggaran": 24,
  "pendapatan_nasional": "69",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const belize_geopolitik = {
    "un_vote": 15,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 5,
      "kekuatan_keras": 29,
      "prestise_diplomatik": 57
    }
  };

const belize = {
  ...belize_profile,
  "sektor_listrik": belize_listrik,
  "hunian": belize_hunian,
  "infrastruktur": belize_infrastruktur,
  "sektor_ekstraksi": belize_ekstraksi,
  "sektor_manufaktur": belize_manufaktur,
  "sektor_peternakan": belize_peternakan,
  "sektor_agrikultur": belize_agrikultur,
  "sektor_perikanan": belize_perikanan,
  "sektor_olahan_pangan": belize_olahan_pangan,
  "sektor_farmasi": belize_farmasi,
  "sektor_pertahanan": belize_pertahanan,
  "armada_militer": belize_armada,
  "militer_strategis": belize_strategis,
  "armada_kepolisian": belize_kepolisian,
  "pabrik_militer": belize_pabrik,
  "intelijen": belize_intelijen,
    "pendidikan": belize_pendidikan,
  "kesehatan": belize_kesehatan,
  "hukum": belize_hukum,
  "sektor_olahraga": belize_olahraga,
  "sektor_komersial": belize_komersial,
  "sektor_hiburan": belize_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 26,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 3,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 24,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 11.52,
    "harga_telur": 24.88,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": belize_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 23,
    "pendidikan": 29,
    "keamanan": 34,
    "keuangan": 27,
    "lingkungan": 60
  }
};





