// @ts-nocheck
const guatemala_profile = {
  "name_en": "Guatemala",
  "capital": "Guatemala City",
  "name_id": "Guatemala",
  "lon": -90.25,
  "lat": 15.5,
  "flag": "ðŸ‡¬ðŸ‡¹",
  "jumlah_penduduk": 18312373,
  "anggaran": 924,
  "pendapatan_nasional": "2639",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const guatemala_geopolitik = {
    "un_vote": 142,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 31,
      "kekuatan_keras": 5,
      "prestise_diplomatik": 57
    }
  };

const guatemala = {
  ...guatemala_profile,
  "sektor_listrik": guatemala_listrik,
  "hunian": guatemala_hunian,
  "infrastruktur": guatemala_infrastruktur,
  "sektor_ekstraksi": guatemala_ekstraksi,
  "sektor_manufaktur": guatemala_manufaktur,
  "sektor_peternakan": guatemala_peternakan,
  "sektor_agrikultur": guatemala_agrikultur,
  "sektor_perikanan": guatemala_perikanan,
  "sektor_olahan_pangan": guatemala_olahan_pangan,
  "sektor_farmasi": guatemala_farmasi,
  "sektor_pertahanan": guatemala_pertahanan,
  "armada_militer": guatemala_armada,
  "militer_strategis": guatemala_strategis,
  "armada_kepolisian": guatemala_kepolisian,
  "pabrik_militer": guatemala_pabrik,
  "intelijen": guatemala_intelijen,
    "pendidikan": guatemala_pendidikan,
  "kesehatan": guatemala_kesehatan,
  "hukum": guatemala_hukum,
  "sektor_olahraga": guatemala_olahraga,
  "sektor_komersial": guatemala_komersial,
  "sektor_hiburan": guatemala_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 31
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 61
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 26
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 39
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 14 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 61
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 0.8,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": guatemala_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 15,
    "pendidikan": 20,
    "keamanan": 37,
    "keuangan": 1,
    "lingkungan": 60
  }
};





