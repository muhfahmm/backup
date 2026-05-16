// @ts-nocheck
const suriah_profile = {
  "name_en": "Syria",
  "capital": "Damascus",
  "name_id": "Suriah",
  "lon": 38,
  "lat": 35,
  "flag": "ðŸ‡¸ðŸ‡¾",
  "jumlah_penduduk": 22125000,
  "anggaran": 117,
  "pendapatan_nasional": "333",
  "religion": "Islam",
  "ideology": "Nasionalisme"
};


const suriah_geopolitik = {
    "un_vote": 65,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 13,
      "kekuatan_keras": 21,
      "prestise_diplomatik": 57
    }
  };

const suriah = {
  ...suriah_profile,
  "sektor_listrik": suriah_listrik,
  "hunian": suriah_hunian,
  "infrastruktur": suriah_infrastruktur,
  "sektor_ekstraksi": suriah_ekstraksi,
  "sektor_manufaktur": suriah_manufaktur,
  "sektor_peternakan": suriah_peternakan,
  "sektor_agrikultur": suriah_agrikultur,
  "sektor_perikanan": suriah_perikanan,
  "sektor_olahan_pangan": suriah_olahan_pangan,
  "sektor_farmasi": suriah_farmasi,
  "sektor_pertahanan": suriah_pertahanan,
  "armada_militer": suriah_armada,
  "militer_strategis": suriah_strategis,
  "armada_kepolisian": suriah_kepolisian,
  "pabrik_militer": suriah_pabrik,
  "intelijen": suriah_intelijen,
    "pendidikan": suriah_pendidikan,
  "kesehatan": suriah_kesehatan,
  "hukum": suriah_hukum,
  "sektor_olahraga": suriah_olahraga,
  "sektor_komersial": suriah_komersial,
  "sektor_hiburan": suriah_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 22,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": suriah_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 38,
    "pendidikan": 13,
    "keamanan": 27,
    "keuangan": 29,
    "lingkungan": 60
  }
};





