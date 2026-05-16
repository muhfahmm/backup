// @ts-nocheck
const makau_profile = {
  "name_en": "Macau",
  "capital": "N/A",
  "name_id": "Makau",
  "lon": 113.55,
  "lat": 22.16666666,
  "flag": "ðŸ‡²ðŸ‡´",
  "jumlah_penduduk": "10M",
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Buddha",
  "ideology": "Kapitalisme"
};


const makau_geopolitik = {
    "un_vote": 8,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 21,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  };

const makau = {
  ...makau_profile,
  "sektor_listrik": makau_listrik,
  "hunian": makau_hunian,
  "infrastruktur": makau_infrastruktur,
  "sektor_ekstraksi": makau_ekstraksi,
  "sektor_manufaktur": makau_manufaktur,
  "sektor_peternakan": makau_peternakan,
  "sektor_agrikultur": makau_agrikultur,
  "sektor_perikanan": makau_perikanan,
  "sektor_olahan_pangan": makau_olahan_pangan,
  "sektor_farmasi": makau_farmasi,
  "sektor_pertahanan": makau_pertahanan,
  "armada_militer": makau_armada,
  "militer_strategis": makau_strategis,
  "armada_kepolisian": makau_kepolisian,
  "pabrik_militer": makau_pabrik,
  "intelijen": makau_intelijen,
    "pendidikan": makau_pendidikan,
  "kesehatan": makau_kesehatan,
  "hukum": makau_hukum,
  "sektor_olahraga": makau_olahraga,
  "sektor_komersial": makau_komersial,
  "sektor_hiburan": makau_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 18,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 7.2,
    "harga_telur": 24.88,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": makau_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 17,
    "pendidikan": 22,
    "keamanan": 6,
    "keuangan": 22,
    "lingkungan": 60
  }
};





