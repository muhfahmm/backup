// @ts-nocheck
const afganistan_profile = {
  "name_en": "Afghanistan",
  "capital": "Kabul",
  "name_id": "Afganistan",
  "lon": 69.16,
  "lat": 34.54,
  "flag": "ðŸ‡¦ðŸ‡«",
  "jumlah_penduduk": 43844000,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Islam",
  "ideology": "Konservatisme"
};


const afganistan_geopolitik = {
    "un_vote": 126,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 25,
      "kekuatan_keras": 22,
      "prestise_diplomatik": 57
    }
  };

const afganistan = {
  ...afganistan_profile,
  "sektor_listrik": afganistan_listrik,
  "hunian": afganistan_hunian,
  "infrastruktur": afganistan_infrastruktur,
  "sektor_ekstraksi": afganistan_ekstraksi,
  "sektor_manufaktur": afganistan_manufaktur,
  "sektor_peternakan": afganistan_peternakan,
  "sektor_agrikultur": afganistan_agrikultur,
  "sektor_perikanan": afganistan_perikanan,
  "sektor_olahan_pangan": afganistan_olahan_pangan,
  "sektor_farmasi": afganistan_farmasi,
  "sektor_pertahanan": afganistan_pertahanan,
  "armada_militer": afganistan_armada,
  "militer_strategis": afganistan_strategis,
  "armada_kepolisian": afganistan_kepolisian,
  "pabrik_militer": afganistan_pabrik,
  "intelijen": afganistan_intelijen,
    "pendidikan": afganistan_pendidikan,
  "kesehatan": afganistan_kesehatan,
  "hukum": afganistan_hukum,
  "sektor_olahraga": afganistan_olahraga,
  "sektor_komersial": afganistan_komersial,
  "sektor_hiburan": afganistan_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 12
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 38,
      "kepuasan": 93,
      "pendapatan": 11
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 24.88,
    "harga_bbm": 5.35,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": afganistan_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 33,
    "pendidikan": 28,
    "keamanan": 19,
    "keuangan": 39,
    "lingkungan": 60
  }
};





