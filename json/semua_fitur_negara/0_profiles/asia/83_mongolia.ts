// @ts-nocheck
const mongolia_profile = {
  "name_en": "Mongolia",
  "capital": "Ulan Bator",
  "name_id": "Mongolia",
  "lon": 105,
  "lat": 46,
  "flag": "ðŸ‡²ðŸ‡³",
  "jumlah_penduduk": 3544835,
  "anggaran": 175,
  "pendapatan_nasional": "500",
  "religion": "Buddha",
  "ideology": "Demokrasi"
};


const mongolia_geopolitik = {
    "un_vote": 134,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 34,
      "kekuatan_keras": 15,
      "prestise_diplomatik": 57
    }
  };

const mongolia = {
  ...mongolia_profile,
  "sektor_listrik": mongolia_listrik,
  "hunian": mongolia_hunian,
  "infrastruktur": mongolia_infrastruktur,
  "sektor_ekstraksi": mongolia_ekstraksi,
  "sektor_manufaktur": mongolia_manufaktur,
  "sektor_peternakan": mongolia_peternakan,
  "sektor_agrikultur": mongolia_agrikultur,
  "sektor_perikanan": mongolia_perikanan,
  "sektor_olahan_pangan": mongolia_olahan_pangan,
  "sektor_farmasi": mongolia_farmasi,
  "sektor_pertahanan": mongolia_pertahanan,
  "armada_militer": mongolia_armada,
  "militer_strategis": mongolia_strategis,
  "armada_kepolisian": mongolia_kepolisian,
  "pabrik_militer": mongolia_pabrik,
  "intelijen": mongolia_intelijen,
    "pendidikan": mongolia_pendidikan,
  "kesehatan": mongolia_kesehatan,
  "hukum": mongolia_hukum,
  "sektor_olahraga": mongolia_olahraga,
  "sektor_komersial": mongolia_komersial,
  "sektor_hiburan": mongolia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 13
    },
    "penghasilan": {
      "tarif": 23,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 26,
      "kepuasan": 86,
      "pendapatan": 7
    },
    "lingkungan": {
      "tarif": 37,
      "kepuasan": 88,
      "pendapatan": 16
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
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
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 28.8,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 2.6,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": mongolia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 31,
    "pendidikan": 6,
    "keamanan": 23,
    "keuangan": 32,
    "lingkungan": 60
  }
};





