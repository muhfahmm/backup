// @ts-nocheck
const niger_profile = {
  "name_en": "Niger",
  "capital": "Niamey",
  "name_id": "Niger",
  "lon": 8,
  "lat": 16,
  "flag": "ðŸ‡³ðŸ‡ª",
  "jumlah_penduduk": 26333333,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Islam",
  "ideology": "Nasionalisme"
};


const niger_geopolitik = {
    "un_vote": 30,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 18,
      "kekuatan_keras": 5,
      "prestise_diplomatik": 57
  }
  };

const niger = {
  ...niger_profile,
  "sektor_listrik": niger_listrik,
  "hunian": niger_hunian,
  "infrastruktur": niger_infrastruktur,
  "sektor_ekstraksi": niger_ekstraksi,
  "sektor_manufaktur": niger_manufaktur,
  "sektor_peternakan": niger_peternakan,
  "sektor_agrikultur": niger_agrikultur,
  "sektor_perikanan": niger_perikanan,
  "sektor_olahan_pangan": niger_olahan_pangan,
  "sektor_farmasi": niger_farmasi,
  "sektor_pertahanan": niger_pertahanan,
  "armada_militer": niger_armada,
  "militer_strategis": niger_strategis,
  "armada_kepolisian": niger_kepolisian,
  "pabrik_militer": niger_pabrik,
  "intelijen": niger_intelijen,
    "pendidikan": niger_pendidikan,
  "kesehatan": niger_kesehatan,
  "hukum": niger_hukum,
  "sektor_olahraga": niger_olahraga,
  "sektor_komersial": niger_komersial,
  "sektor_hiburan": niger_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 38,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 27,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 27,
      "kepuasan": 93,
      "pendapatan": 10
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 7.2,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 4.16,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": niger_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 23,
    "pendidikan": 5,
    "keamanan": 34,
    "keuangan": 1,
    "lingkungan": 60
  }
};





