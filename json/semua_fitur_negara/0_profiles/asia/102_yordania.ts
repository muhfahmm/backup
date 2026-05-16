// @ts-nocheck
const yordania_profile = {
  "name_en": "Jordan",
  "capital": "Amman",
  "name_id": "Yordania",
  "lon": 36,
  "lat": 31,
  "flag": "ðŸ‡¯ðŸ‡´",
  "jumlah_penduduk": 11937000,
  "anggaran": 457,
  "pendapatan_nasional": "1306",
  "religion": "Islam",
  "ideology": "Monarki"
};


const yordania_geopolitik = {
    "un_vote": 82,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 7,
      "kekuatan_keras": 26,
      "prestise_diplomatik": 57
    }
  };

const yordania = {
  ...yordania_profile,
  "sektor_listrik": yordania_listrik,
  "hunian": yordania_hunian,
  "infrastruktur": yordania_infrastruktur,
  "sektor_ekstraksi": yordania_ekstraksi,
  "sektor_manufaktur": yordania_manufaktur,
  "sektor_peternakan": yordania_peternakan,
  "sektor_agrikultur": yordania_agrikultur,
  "sektor_perikanan": yordania_perikanan,
  "sektor_olahan_pangan": yordania_olahan_pangan,
  "sektor_farmasi": yordania_farmasi,
  "sektor_pertahanan": yordania_pertahanan,
  "armada_militer": yordania_armada,
  "militer_strategis": yordania_strategis,
  "armada_kepolisian": yordania_kepolisian,
  "pabrik_militer": yordania_pabrik,
  "intelijen": yordania_intelijen,
    "pendidikan": yordania_pendidikan,
  "kesehatan": yordania_kesehatan,
  "hukum": yordania_hukum,
  "sektor_olahraga": yordania_olahraga,
  "sektor_komersial": yordania_komersial,
  "sektor_hiburan": yordania_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 20
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 22
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 25
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 26
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 24
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": yordania_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 14,
    "keamanan": 28,
    "keuangan": 35,
    "lingkungan": 60
  }
};





