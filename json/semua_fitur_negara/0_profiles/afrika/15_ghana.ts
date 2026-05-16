// @ts-nocheck
const ghana_profile = {
  "name_en": "Ghana",
  "capital": "Accra",
  "name_id": "Ghana",
  "lon": -2,
  "lat": 8,
  "flag": "ðŸ‡¬ðŸ‡­",
  "jumlah_penduduk": 30832019,
  "anggaran": 739,
  "pendapatan_nasional": "2111",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const ghana_geopolitik = {
    "un_vote": 125,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 21,
      "prestise_diplomatik": 57
  }
  };

const ghana = {
  ...ghana_profile,
  "sektor_listrik": ghana_listrik,
  "hunian": ghana_hunian,
  "infrastruktur": ghana_infrastruktur,
  "sektor_ekstraksi": ghana_ekstraksi,
  "sektor_manufaktur": ghana_manufaktur,
  "sektor_peternakan": ghana_peternakan,
  "sektor_agrikultur": ghana_agrikultur,
  "sektor_perikanan": ghana_perikanan,
  "sektor_olahan_pangan": ghana_olahan_pangan,
  "sektor_farmasi": ghana_farmasi,
  "sektor_pertahanan": ghana_pertahanan,
  "armada_militer": ghana_armada,
  "militer_strategis": ghana_strategis,
  "armada_kepolisian": ghana_kepolisian,
  "pabrik_militer": ghana_pabrik,
  "intelijen": ghana_intelijen,
    "pendidikan": ghana_pendidikan,
  "kesehatan": ghana_kesehatan,
  "hukum": ghana_hukum,
  "sektor_olahraga": ghana_olahraga,
  "sektor_komersial": ghana_komersial,
  "sektor_hiburan": ghana_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 55
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 45
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 42
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 29
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 24
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 315.8,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": ghana_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 6,
    "keamanan": 22,
    "keuangan": 17,
    "lingkungan": 60
  }
};





