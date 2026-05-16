// @ts-nocheck
const paraguay_profile = {
  "name_en": "Paraguay",
  "capital": "AsunciÃ³n",
  "name_id": "Paraguay",
  "lon": -58,
  "lat": -23,
  "flag": "ðŸ‡µðŸ‡¾",
  "jumlah_penduduk": 6142180,
  "anggaran": 428,
  "pendapatan_nasional": "1222",
  "religion": "Katolik",
  "ideology": "Konservatisme"
};


const paraguay_geopolitik = {
    "un_vote": 71,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 6,
      "prestise_diplomatik": 57
    }
  };

const paraguay = {
  ...paraguay_profile,
  "sektor_listrik": paraguay_listrik,
  "hunian": paraguay_hunian,
  "infrastruktur": paraguay_infrastruktur,
  "sektor_ekstraksi": paraguay_ekstraksi,
  "sektor_manufaktur": paraguay_manufaktur,
  "sektor_peternakan": paraguay_peternakan,
  "sektor_agrikultur": paraguay_agrikultur,
  "sektor_perikanan": paraguay_perikanan,
  "sektor_olahan_pangan": paraguay_olahan_pangan,
  "sektor_farmasi": paraguay_farmasi,
  "sektor_pertahanan": paraguay_pertahanan,
  "armada_militer": paraguay_armada,
  "militer_strategis": paraguay_strategis,
  "armada_kepolisian": paraguay_kepolisian,
  "pabrik_militer": paraguay_pabrik,
  "intelijen": paraguay_intelijen,
    "pendidikan": paraguay_pendidikan,
  "kesehatan": paraguay_kesehatan,
  "hukum": paraguay_hukum,
  "sektor_olahraga": paraguay_olahraga,
  "sektor_komersial": paraguay_komersial,
  "sektor_hiburan": paraguay_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 20,
      "kepuasan": 52,
      "pendapatan": 12
    },
    "penghasilan": {
      "tarif": 37,
      "kepuasan": 61,
      "pendapatan": 30
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 14
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 29
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 82,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 11.52,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 4.16,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": paraguay_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 40,
    "pendidikan": 7,
    "keamanan": 27,
    "keuangan": 4,
    "lingkungan": 60
  }
};





