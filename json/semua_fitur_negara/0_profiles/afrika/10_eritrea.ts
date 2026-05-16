// @ts-nocheck
const eritrea_profile = {
  "name_en": "Eritrea",
  "capital": "Asmara",
  "name_id": "Eritrea",
  "lon": 39,
  "lat": 15,
  "flag": "ðŸ‡ªðŸ‡·",
  "jumlah_penduduk": 3535603,
  "anggaran": 24,
  "pendapatan_nasional": "69",
  "religion": "Islam",
  "ideology": "Sosialisme"
};


const eritrea_geopolitik = {
    "un_vote": 47,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 27,
      "kekuatan_keras": 6,
      "prestise_diplomatik": 57
  }
  };

const eritrea = {
  ...eritrea_profile,
  "sektor_listrik": eritrea_listrik,
  "hunian": eritrea_hunian,
  "infrastruktur": eritrea_infrastruktur,
  "sektor_ekstraksi": eritrea_ekstraksi,
  "sektor_manufaktur": eritrea_manufaktur,
  "sektor_peternakan": eritrea_peternakan,
  "sektor_agrikultur": eritrea_agrikultur,
  "sektor_perikanan": eritrea_perikanan,
  "sektor_olahan_pangan": eritrea_olahan_pangan,
  "sektor_farmasi": eritrea_farmasi,
  "sektor_pertahanan": eritrea_pertahanan,
  "armada_militer": eritrea_armada,
  "militer_strategis": eritrea_strategis,
  "armada_kepolisian": eritrea_kepolisian,
  "pabrik_militer": eritrea_pabrik,
  "intelijen": eritrea_intelijen,
    "pendidikan": eritrea_pendidikan,
  "kesehatan": eritrea_kesehatan,
  "hukum": eritrea_hukum,
  "sektor_olahraga": eritrea_olahraga,
  "sektor_komersial": eritrea_komersial,
  "sektor_hiburan": eritrea_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 15,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 32,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 7.2,
    "harga_telur": 43.54,
    "harga_bbm": 21.4,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": eritrea_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 31,
    "pendidikan": 24,
    "keamanan": 11,
    "keuangan": 18,
    "lingkungan": 60
  }
};





