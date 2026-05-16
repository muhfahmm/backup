// @ts-nocheck
const haiti_profile = {
  "name_en": "Haiti",
  "capital": "Port-au-Prince",
  "name_id": "Haiti",
  "lon": -72.41666666,
  "lat": 19,
  "flag": "ðŸ‡­ðŸ‡¹",
  "jumlah_penduduk": 11867032,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const haiti_geopolitik = {
    "un_vote": 105,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 32,
      "kekuatan_keras": 15,
      "prestise_diplomatik": 57
    }
  };

const haiti = {
  ...haiti_profile,
  "sektor_listrik": haiti_listrik,
  "hunian": haiti_hunian,
  "infrastruktur": haiti_infrastruktur,
  "sektor_ekstraksi": haiti_ekstraksi,
  "sektor_manufaktur": haiti_manufaktur,
  "sektor_peternakan": haiti_peternakan,
  "sektor_agrikultur": haiti_agrikultur,
  "sektor_perikanan": haiti_perikanan,
  "sektor_olahan_pangan": haiti_olahan_pangan,
  "sektor_farmasi": haiti_farmasi,
  "sektor_pertahanan": haiti_pertahanan,
  "armada_militer": haiti_armada,
  "militer_strategis": haiti_strategis,
  "armada_kepolisian": haiti_kepolisian,
  "pabrik_militer": haiti_pabrik,
  "intelijen": haiti_intelijen,
    "pendidikan": haiti_pendidikan,
  "kesehatan": haiti_kesehatan,
  "hukum": haiti_hukum,
  "sektor_olahraga": haiti_olahraga,
  "sektor_komersial": haiti_komersial,
  "sektor_hiburan": haiti_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 1,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 9
    },
    "bea_cukai": {
      "tarif": 24,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 15.55,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": haiti_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 32,
    "pendidikan": 16,
    "keamanan": 15,
    "keuangan": 7,
    "lingkungan": 60
  }
};





