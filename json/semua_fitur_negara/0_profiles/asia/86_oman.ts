// @ts-nocheck
const oman_profile = {
  "name_en": "Oman",
  "capital": "Muscat",
  "name_id": "Oman",
  "lon": 57,
  "lat": 21,
  "flag": "ðŸ‡´ðŸ‡²",
  "jumlah_penduduk": 5281538,
  "anggaran": 1021,
  "pendapatan_nasional": "2917",
  "religion": "Islam",
  "ideology": "Monarki"
};


const oman_geopolitik = {
    "un_vote": 165,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 32,
      "kekuatan_keras": 19,
      "prestise_diplomatik": 57
    }
  };

const oman = {
  ...oman_profile,
  "sektor_listrik": oman_listrik,
  "hunian": oman_hunian,
  "infrastruktur": oman_infrastruktur,
  "sektor_ekstraksi": oman_ekstraksi,
  "sektor_manufaktur": oman_manufaktur,
  "sektor_peternakan": oman_peternakan,
  "sektor_agrikultur": oman_agrikultur,
  "sektor_perikanan": oman_perikanan,
  "sektor_olahan_pangan": oman_olahan_pangan,
  "sektor_farmasi": oman_farmasi,
  "sektor_pertahanan": oman_pertahanan,
  "armada_militer": oman_armada,
  "militer_strategis": oman_strategis,
  "armada_kepolisian": oman_kepolisian,
  "pabrik_militer": oman_pabrik,
  "intelijen": oman_intelijen,
    "pendidikan": oman_pendidikan,
  "kesehatan": oman_kesehatan,
  "hukum": oman_hukum,
  "sektor_olahraga": oman_olahraga,
  "sektor_komersial": oman_komersial,
  "sektor_hiburan": oman_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 13,
      "kepuasan": 67,
      "pendapatan": 33
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 23,
      "kepuasan": 61,
      "pendapatan": 47
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 31
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 38
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 16 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 104
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 28.8,
    "harga_telur": 24.88,
    "harga_bbm": 14.98,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": oman_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 26,
    "pendidikan": 22,
    "keamanan": 5,
    "keuangan": 24,
    "lingkungan": 60
  }
};





