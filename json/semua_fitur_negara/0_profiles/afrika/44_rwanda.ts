// @ts-nocheck
const rwanda_profile = {
  "name_en": "Rwanda",
  "capital": "Kigali",
  "name_id": "Rwanda",
  "lon": 30,
  "lat": -2,
  "flag": "ðŸ‡·ðŸ‡¼",
  "jumlah_penduduk": 14104969,
  "anggaran": 126,
  "pendapatan_nasional": "361",
  "religion": "Katolik",
  "ideology": "Konservatisme"
};


const rwanda_geopolitik = {
    "un_vote": 50,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 12,
      "kekuatan_keras": 15,
      "prestise_diplomatik": 57
  }
  };

const rwanda = {
  ...rwanda_profile,
  "sektor_listrik": rwanda_listrik,
  "hunian": rwanda_hunian,
  "infrastruktur": rwanda_infrastruktur,
  "sektor_ekstraksi": rwanda_ekstraksi,
  "sektor_manufaktur": rwanda_manufaktur,
  "sektor_peternakan": rwanda_peternakan,
  "sektor_agrikultur": rwanda_agrikultur,
  "sektor_perikanan": rwanda_perikanan,
  "sektor_olahan_pangan": rwanda_olahan_pangan,
  "sektor_farmasi": rwanda_farmasi,
  "sektor_pertahanan": rwanda_pertahanan,
  "armada_militer": rwanda_armada,
  "militer_strategis": rwanda_strategis,
  "armada_kepolisian": rwanda_kepolisian,
  "pabrik_militer": rwanda_pabrik,
  "intelijen": rwanda_intelijen,
    "pendidikan": rwanda_pendidikan,
  "kesehatan": rwanda_kesehatan,
  "hukum": rwanda_hukum,
  "sektor_olahraga": rwanda_olahraga,
  "sektor_komersial": rwanda_komersial,
  "sektor_hiburan": rwanda_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 2,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 11,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 33,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 78.95,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": rwanda_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 5,
    "pendidikan": 19,
    "keamanan": 24,
    "keuangan": 34,
    "lingkungan": 60
  }
};





