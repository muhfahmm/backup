// @ts-nocheck
const siprus_profile = {
  "name_en": "Cyprus",
  "capital": "Nicosia",
  "name_id": "Siprus",
  "lon": 33,
  "lat": 35,
  "flag": "ðŸ‡¨ðŸ‡¾",
  "jumlah_penduduk": 983000,
  "anggaran": 292,
  "pendapatan_nasional": "833",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi"
};


const siprus_geopolitik = {
    "un_vote": 131,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 15,
      "prestise_diplomatik": 57
    }
  };

const siprus = {
  ...siprus_profile,
  "sektor_listrik": siprus_listrik,
  "hunian": siprus_hunian,
  "infrastruktur": siprus_infrastruktur,
  "sektor_ekstraksi": siprus_ekstraksi,
  "sektor_manufaktur": siprus_manufaktur,
  "sektor_peternakan": siprus_peternakan,
  "sektor_agrikultur": siprus_agrikultur,
  "sektor_perikanan": siprus_perikanan,
  "sektor_olahan_pangan": siprus_olahan_pangan,
  "sektor_farmasi": siprus_farmasi,
  "sektor_pertahanan": siprus_pertahanan,
  "armada_militer": siprus_armada,
  "militer_strategis": siprus_strategis,
  "armada_kepolisian": siprus_kepolisian,
  "pabrik_militer": siprus_pabrik,
  "intelijen": siprus_intelijen,
    "pendidikan": siprus_pendidikan,
  "kesehatan": siprus_kesehatan,
  "hukum": siprus_hukum,
  "sektor_olahraga": siprus_olahraga,
  "sektor_komersial": siprus_komersial,
  "sektor_hiburan": siprus_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 28,
      "kepuasan": 67,
      "pendapatan": 21
    },
    "korporasi": {
      "tarif": 39,
      "kepuasan": 52,
      "pendapatan": 29
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 34,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 7.2,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": siprus_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 24,
    "pendidikan": 19,
    "keamanan": 4,
    "keuangan": 13,
    "lingkungan": 60
  }
};





