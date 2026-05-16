// @ts-nocheck
const mali_profile = {
  "name_en": "Mali",
  "capital": "Bamako",
  "name_id": "Mali",
  "lon": -8,
  "lat": 12.39,
  "flag": "ðŸ‡²ðŸ‡±",
  "jumlah_penduduk": 22395489,
  "anggaran": 175,
  "pendapatan_nasional": "500",
  "religion": "Islam",
  "ideology": "Nasionalisme"
};


const mali_geopolitik = {
    "un_vote": 106,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 24,
      "prestise_diplomatik": 57
  }
  };

const mali = {
  ...mali_profile,
  "sektor_listrik": mali_listrik,
  "hunian": mali_hunian,
  "infrastruktur": mali_infrastruktur,
  "sektor_ekstraksi": mali_ekstraksi,
  "sektor_manufaktur": mali_manufaktur,
  "sektor_peternakan": mali_peternakan,
  "sektor_agrikultur": mali_agrikultur,
  "sektor_perikanan": mali_perikanan,
  "sektor_olahan_pangan": mali_olahan_pangan,
  "sektor_farmasi": mali_farmasi,
  "sektor_pertahanan": mali_pertahanan,
  "armada_militer": mali_armada,
  "militer_strategis": mali_strategis,
  "armada_kepolisian": mali_kepolisian,
  "pabrik_militer": mali_pabrik,
  "intelijen": mali_intelijen,
    "pendidikan": mali_pendidikan,
  "kesehatan": mali_kesehatan,
  "hukum": mali_hukum,
  "sektor_olahraga": mali_olahraga,
  "sektor_komersial": mali_komersial,
  "sektor_hiburan": mali_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 4
    },
    "penghasilan": {
      "tarif": 12,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 21,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 14,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 1.28,
    "harga_air": 10.4,
    "harga_obat": 78.95,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": mali_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 9,
    "pendidikan": 20,
    "keamanan": 21,
    "keuangan": 32,
    "lingkungan": 60
  }
};





