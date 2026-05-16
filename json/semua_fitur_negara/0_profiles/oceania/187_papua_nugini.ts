// @ts-nocheck
const papua_nugini_profile = {
  "name_en": "Papua New Guinea",
  "capital": "Port Moresby",
  "name_id": "Papua nugini",
  "lon": 147,
  "lat": -6,
  "flag": "ðŸ‡µðŸ‡¬",
  "jumlah_penduduk": 10499000,
  "anggaran": 292,
  "pendapatan_nasional": "833",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const papua_nugini_geopolitik = {
    "un_vote": 130,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 6,
      "prestise_diplomatik": 57
    }
  };

const papua_nugini = {
  ...papua_nugini_profile,
  "sektor_listrik": papua_nugini_listrik,
  "hunian": papua_nugini_hunian,
  "infrastruktur": papua_nugini_infrastruktur,
  "sektor_ekstraksi": papua_nugini_ekstraksi,
  "sektor_manufaktur": papua_nugini_manufaktur,
  "sektor_peternakan": papua_nugini_peternakan,
  "sektor_agrikultur": papua_nugini_agrikultur,
  "sektor_perikanan": papua_nugini_perikanan,
  "sektor_olahan_pangan": papua_nugini_olahan_pangan,
  "sektor_farmasi": papua_nugini_farmasi,
  "sektor_pertahanan": papua_nugini_pertahanan,
  "armada_militer": papua_nugini_armada,
  "militer_strategis": papua_nugini_strategis,
  "armada_kepolisian": papua_nugini_kepolisian,
  "pabrik_militer": papua_nugini_pabrik,
  "intelijen": papua_nugini_intelijen,
    "pendidikan": papua_nugini_pendidikan,
  "kesehatan": papua_nugini_kesehatan,
  "hukum": papua_nugini_hukum,
  "sektor_olahraga": papua_nugini_olahraga,
  "sektor_komersial": papua_nugini_komersial,
  "sektor_hiburan": papua_nugini_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 9
    },
    "bea_cukai": {
      "tarif": 3,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 13
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 31,
      "kepuasan": 93,
      "pendapatan": 23
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 43.54,
    "harga_bbm": 8.56,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": papua_nugini_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 10,
    "pendidikan": 21,
    "keamanan": 37,
    "keuangan": 23,
    "lingkungan": 60
  }
};





