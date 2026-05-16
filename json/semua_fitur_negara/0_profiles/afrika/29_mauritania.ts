// @ts-nocheck
const mauritania_profile = {
  "name_en": "Mauritania",
  "capital": "Nouakchott",
  "name_id": "Mauritania",
  "lon": -12,
  "lat": 20,
  "flag": "ðŸ‡²ðŸ‡·",
  "jumlah_penduduk": 5169395,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Islam",
  "ideology": "Konservatisme"
};


const mauritania_geopolitik = {
    "un_vote": 124,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 40,
      "prestise_diplomatik": 57
  }
  };

const mauritania = {
  ...mauritania_profile,
  "sektor_listrik": mauritania_listrik,
  "hunian": mauritania_hunian,
  "infrastruktur": mauritania_infrastruktur,
  "sektor_ekstraksi": mauritania_ekstraksi,
  "sektor_manufaktur": mauritania_manufaktur,
  "sektor_peternakan": mauritania_peternakan,
  "sektor_agrikultur": mauritania_agrikultur,
  "sektor_perikanan": mauritania_perikanan,
  "sektor_olahan_pangan": mauritania_olahan_pangan,
  "sektor_farmasi": mauritania_farmasi,
  "sektor_pertahanan": mauritania_pertahanan,
  "armada_militer": mauritania_armada,
  "militer_strategis": mauritania_strategis,
  "armada_kepolisian": mauritania_kepolisian,
  "pabrik_militer": mauritania_pabrik,
  "intelijen": mauritania_intelijen,
    "pendidikan": mauritania_pendidikan,
  "kesehatan": mauritania_kesehatan,
  "hukum": mauritania_hukum,
  "sektor_olahraga": mauritania_olahraga,
  "sektor_komersial": mauritania_komersial,
  "sektor_hiburan": mauritania_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 28.8,
    "harga_telur": 31.1,
    "harga_bbm": 5.35,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 78.95,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": mauritania_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 24,
    "pendidikan": 29,
    "keamanan": 29,
    "keuangan": 40,
    "lingkungan": 60
  }
};





