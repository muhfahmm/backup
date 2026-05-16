// @ts-nocheck
const ekuador_profile = {
  "name_en": "Ecuador",
  "capital": "Quito",
  "name_id": "Ekuador",
  "lon": -77.5,
  "lat": -2,
  "flag": "ðŸ‡ªðŸ‡¨",
  "jumlah_penduduk": 18103660,
  "anggaran": 1118,
  "pendapatan_nasional": "3195",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const ekuador_geopolitik = {
    "un_vote": 32,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 3,
      "kekuatan_keras": 4,
      "prestise_diplomatik": 57
    }
  };

const ekuador = {
  ...ekuador_profile,
  "sektor_listrik": ekuador_listrik,
  "hunian": ekuador_hunian,
  "infrastruktur": ekuador_infrastruktur,
  "sektor_ekstraksi": ekuador_ekstraksi,
  "sektor_manufaktur": ekuador_manufaktur,
  "sektor_peternakan": ekuador_peternakan,
  "sektor_agrikultur": ekuador_agrikultur,
  "sektor_perikanan": ekuador_perikanan,
  "sektor_olahan_pangan": ekuador_olahan_pangan,
  "sektor_farmasi": ekuador_farmasi,
  "sektor_pertahanan": ekuador_pertahanan,
  "armada_militer": ekuador_armada,
  "militer_strategis": ekuador_strategis,
  "armada_kepolisian": ekuador_kepolisian,
  "pabrik_militer": ekuador_pabrik,
  "intelijen": ekuador_intelijen,
    "pendidikan": ekuador_pendidikan,
  "kesehatan": ekuador_kesehatan,
  "hukum": ekuador_hukum,
  "sektor_olahraga": ekuador_olahraga,
  "sektor_komersial": ekuador_komersial,
  "sektor_hiburan": ekuador_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 28
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 56
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 61
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 91
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 34
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 17 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 83
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 7.2,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": ekuador_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 17,
    "pendidikan": 40,
    "keamanan": 3,
    "keuangan": 22,
    "lingkungan": 60
  }
};





