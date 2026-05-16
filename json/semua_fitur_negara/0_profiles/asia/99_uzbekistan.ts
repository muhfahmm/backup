// @ts-nocheck
const uzbekistan_profile = {
  "name_en": "Uzbekistan",
  "capital": "Tashkent",
  "name_id": "Uzbekistan",
  "lon": 64,
  "lat": 41,
  "flag": "ðŸ‡ºðŸ‡¿",
  "jumlah_penduduk": 38236704,
  "anggaran": 875,
  "pendapatan_nasional": "2500",
  "religion": "Islam",
  "ideology": "Nasionalisme"
};


const uzbekistan_geopolitik = {
    "un_vote": 80,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 18,
      "kekuatan_keras": 3,
      "prestise_diplomatik": 57
    }
  };

const uzbekistan = {
  ...uzbekistan_profile,
  "sektor_listrik": uzbekistan_listrik,
  "hunian": uzbekistan_hunian,
  "infrastruktur": uzbekistan_infrastruktur,
  "sektor_ekstraksi": uzbekistan_ekstraksi,
  "sektor_manufaktur": uzbekistan_manufaktur,
  "sektor_peternakan": uzbekistan_peternakan,
  "sektor_agrikultur": uzbekistan_agrikultur,
  "sektor_perikanan": uzbekistan_perikanan,
  "sektor_olahan_pangan": uzbekistan_olahan_pangan,
  "sektor_farmasi": uzbekistan_farmasi,
  "sektor_pertahanan": uzbekistan_pertahanan,
  "armada_militer": uzbekistan_armada,
  "militer_strategis": uzbekistan_strategis,
  "armada_kepolisian": uzbekistan_kepolisian,
  "pabrik_militer": uzbekistan_pabrik,
  "intelijen": uzbekistan_intelijen,
    "pendidikan": uzbekistan_pendidikan,
  "kesehatan": uzbekistan_kesehatan,
  "hukum": uzbekistan_hukum,
  "sektor_olahraga": uzbekistan_olahraga,
  "sektor_komersial": uzbekistan_komersial,
  "sektor_hiburan": uzbekistan_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 39
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 74
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 46
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 20
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 14 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 71
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 5.35,
    "harga_listrik": 2.24,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": uzbekistan_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 34,
    "pendidikan": 8,
    "keamanan": 24,
    "keuangan": 31,
    "lingkungan": 60
  }
};





