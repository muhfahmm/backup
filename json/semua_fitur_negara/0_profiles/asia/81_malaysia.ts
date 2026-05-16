// @ts-nocheck
const malaysia_profile = {
  "name_en": "Malaysia",
  "capital": "Kuala Lumpur",
  "name_id": "Malaysia",
  "lon": 101.68,
  "lat": 3.13,
  "flag": "ðŸ‡²ðŸ‡¾",
  "jumlah_penduduk": 32776194,
  "anggaran": 3889,
  "pendapatan_nasional": "11112",
  "religion": "Islam",
  "ideology": "Demokrasi"
};


const malaysia_geopolitik = {
    "un_vote": 141,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 6,
      "kekuatan_keras": 27,
      "prestise_diplomatik": 57
    }
  };

const malaysia = {
  ...malaysia_profile,
  "sektor_listrik": malaysia_listrik,
  "infrastruktur": malaysia_infrastruktur,
  "sektor_ekstraksi": malaysia_ekstraksi,
  "sektor_manufaktur": malaysia_manufaktur,
  "sektor_peternakan": malaysia_peternakan,
  "sektor_agrikultur": malaysia_agrikultur,
  "sektor_perikanan": malaysia_perikanan,
  "sektor_olahan_pangan": malaysia_olahan_pangan,
  "sektor_farmasi": malaysia_farmasi,
  "sektor_pertahanan": malaysia_pertahanan,
  "armada_militer": malaysia_armada,
  "militer_strategis": malaysia_strategis,
  "armada_kepolisian": malaysia_kepolisian,
  "pabrik_militer": malaysia_pabrik,
  "intelijen": malaysia_intelijen,
    "pendidikan": malaysia_pendidikan,
  "kesehatan": malaysia_kesehatan,
  "hukum": malaysia_hukum,
  "sektor_olahraga": malaysia_olahraga,
  "sektor_komersial": malaysia_komersial,
  "sektor_hiburan": malaysia_hiburan,
  "hunian": malaysia_hunian,
  // =============================================================
  // 11. ÃƒÂ°Ã…Â¸Ã¢â‚¬â„¢Ã‚Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 170
    },
    "korporasi": {
      "tarif": 26,
      "kepuasan": 52,
      "pendapatan": 139
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 259
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 82
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 80
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 20 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 59 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 167
    }
  },
  
  // =============================================================
  // 13. ÃƒÂ°Ã…Â¸Ã¢â‚¬ÂºÃ¢â‚¬â„¢ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 14.4,
    "harga_telur": 15.55,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ÃƒÂ°Ã…Â¸Ã…â€™Ã‚Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": malaysia_geopolitik,
  // =============================================================
  // 16. ÃƒÂ°Ã…Â¸Ã‚ÂÃ¢â‚¬ÂºÃƒÂ¯Ã‚Â¸Ã‚Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 2,
    "pendidikan": 39,
    "keamanan": 5,
    "keuangan": 39,
    "lingkungan": 60
  }
};





