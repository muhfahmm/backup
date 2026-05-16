// @ts-nocheck
const republik_serbia_profile = {
  "name_en": "Serbia",
  "capital": "Belgrade",
  "name_id": "Republik serbia",
  "lon": 21,
  "lat": 44,
  "flag": "ðŸ‡·ðŸ‡¸",
  "jumlah_penduduk": 7149077,
  "anggaran": 661,
  "pendapatan_nasional": "1889",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const republik_serbia_geopolitik = {
    "un_vote": 167,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 29,
      "kekuatan_keras": 30,
      "prestise_diplomatik": 57
    }
  };

const republik_serbia = {
  ...republik_serbia_profile,
  "sektor_listrik": republik_serbia_listrik,
  "hunian": republik_serbia_hunian,
  "infrastruktur": republik_serbia_infrastruktur,
  "sektor_ekstraksi": republik_serbia_ekstraksi,
  "sektor_manufaktur": republik_serbia_manufaktur,
  "sektor_peternakan": republik_serbia_peternakan,
  "sektor_agrikultur": republik_serbia_agrikultur,
  "sektor_perikanan": republik_serbia_perikanan,
  "sektor_olahan_pangan": republik_serbia_olahan_pangan,
  "sektor_farmasi": republik_serbia_farmasi,
  "sektor_pertahanan": republik_serbia_pertahanan,
  "armada_militer": republik_serbia_armada,
  "militer_strategis": republik_serbia_strategis,
  "armada_kepolisian": republik_serbia_kepolisian,
  "pabrik_militer": republik_serbia_pabrik,
  "intelijen": republik_serbia_intelijen,
    "pendidikan": republik_serbia_pendidikan,
  "kesehatan": republik_serbia_kesehatan,
  "hukum": republik_serbia_hukum,
  "sektor_olahraga": republik_serbia_olahraga,
  "sektor_komersial": republik_serbia_komersial,
  "sektor_hiburan": republik_serbia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 14
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 27
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 42
    },
    "lingkungan": {
      "tarif": 11,
      "kepuasan": 88,
      "pendapatan": 20
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 10 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 10
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 14.98,
    "harga_listrik": 2.24,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_serbia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 30,
    "pendidikan": 3,
    "keamanan": 26,
    "keuangan": 26,
    "lingkungan": 60
  }
};





