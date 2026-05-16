// @ts-nocheck
const china_profile = {
  "name_en": "China",
  "capital": "Beijing",
  "name_id": "China",
  "lon": 116.4,
  "lat": 39.9,
  "flag": "ðŸ‡¨ðŸ‡³",
  "jumlah_penduduk": 1404890000,
  "anggaran": 180167,
  "pendapatan_nasional": "514763",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const china_geopolitik = {
    "un_vote": 201,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 3,
      "kekuatan_keras": 30,
      "prestise_diplomatik": 57
    }
  };

const china = {
  ...china_profile,
  "sektor_listrik": china_listrik,
  "hunian": china_hunian,
  "infrastruktur": china_infrastruktur,
  "sektor_ekstraksi": china_ekstraksi,
  "sektor_manufaktur": china_manufaktur,
  "sektor_peternakan": china_peternakan,
  "sektor_agrikultur": china_agrikultur,
  "sektor_perikanan": china_perikanan,
  "sektor_olahan_pangan": china_olahan_pangan,
  "sektor_farmasi": china_farmasi,
  "sektor_pertahanan": china_pertahanan,
  "armada_militer": china_armada,
  "militer_strategis": china_strategis,
  "armada_kepolisian": china_kepolisian,
  "pabrik_militer": china_pabrik,
  "intelijen": china_intelijen,
    "pendidikan": china_pendidikan,
  "kesehatan": china_kesehatan,
  "hukum": china_hukum,
  "sektor_olahraga": china_olahraga,
  "sektor_komersial": china_komersial,
  "sektor_hiburan": china_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 7003
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 367
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 2324
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 14341
    },
    "lingkungan": {
      "tarif": 23,
      "kepuasan": 88,
      "pendapatan": 5242
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 901 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2703 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 5219
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 15.55,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 2.6,
    "harga_obat": 315.8,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": china_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 6,
    "pendidikan": 24,
    "keamanan": 36,
    "keuangan": 10,
    "lingkungan": 60
  }
};





