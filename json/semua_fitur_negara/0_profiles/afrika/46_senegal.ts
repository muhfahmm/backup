// @ts-nocheck
const senegal_profile = {
  "name_en": "Senegal",
  "capital": "Dakar",
  "name_id": "Senegal",
  "lon": -14,
  "lat": 14,
  "flag": "ðŸ‡¸ðŸ‡³",
  "jumlah_penduduk": 19075959,
  "anggaran": 272,
  "pendapatan_nasional": "778",
  "religion": "Islam",
  "ideology": "Demokrasi"
};


const senegal_geopolitik = {
    "un_vote": 119,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 34,
      "kekuatan_keras": 5,
      "prestise_diplomatik": 57
  }
  };

const senegal = {
  ...senegal_profile,
  "sektor_listrik": senegal_listrik,
  "hunian": senegal_hunian,
  "infrastruktur": senegal_infrastruktur,
  "sektor_ekstraksi": senegal_ekstraksi,
  "sektor_manufaktur": senegal_manufaktur,
  "sektor_peternakan": senegal_peternakan,
  "sektor_agrikultur": senegal_agrikultur,
  "sektor_perikanan": senegal_perikanan,
  "sektor_olahan_pangan": senegal_olahan_pangan,
  "sektor_farmasi": senegal_farmasi,
  "sektor_pertahanan": senegal_pertahanan,
  "armada_militer": senegal_armada,
  "militer_strategis": senegal_strategis,
  "armada_kepolisian": senegal_kepolisian,
  "pabrik_militer": senegal_pabrik,
  "intelijen": senegal_intelijen,
    "pendidikan": senegal_pendidikan,
  "kesehatan": senegal_kesehatan,
  "hukum": senegal_hukum,
  "sektor_olahraga": senegal_olahraga,
  "sektor_komersial": senegal_komersial,
  "sektor_hiburan": senegal_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 11
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 10
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 4
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 9
    },
    "lingkungan": {
      "tarif": 17,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
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
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 14.98,
    "harga_listrik": 2.24,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": senegal_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 31,
    "pendidikan": 35,
    "keamanan": 4,
    "keuangan": 23,
    "lingkungan": 60
  }
};





