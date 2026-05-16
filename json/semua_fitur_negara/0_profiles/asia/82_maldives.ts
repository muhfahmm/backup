// @ts-nocheck
const maldives_profile = {
  "name_en": "Maldives",
  "capital": "MalÃ©",
  "name_id": "Maldives",
  "lon": 73.3,
  "lat": 4.1,
  "flag": "ðŸ‡²ðŸ‡»",
  "jumlah_penduduk": 527799,
  "anggaran": 63,
  "pendapatan_nasional": "181",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const maldives_geopolitik = {
    "un_vote": 145,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 27,
      "prestise_diplomatik": 57
    }
  };

const maldives = {
  ...maldives_profile,
  "sektor_listrik": maldives_listrik,
  "hunian": maldives_hunian,
  "infrastruktur": maldives_infrastruktur,
  "sektor_ekstraksi": maldives_ekstraksi,
  "sektor_manufaktur": maldives_manufaktur,
  "sektor_peternakan": maldives_peternakan,
  "sektor_agrikultur": maldives_agrikultur,
  "sektor_perikanan": maldives_perikanan,
  "sektor_olahan_pangan": maldives_olahan_pangan,
  "sektor_farmasi": maldives_farmasi,
  "sektor_pertahanan": maldives_pertahanan,
  "armada_militer": maldives_armada,
  "militer_strategis": maldives_strategis,
  "armada_kepolisian": maldives_kepolisian,
  "pabrik_militer": maldives_pabrik,
  "intelijen": maldives_intelijen,
    "pendidikan": maldives_pendidikan,
  "kesehatan": maldives_kesehatan,
  "hukum": maldives_hukum,
  "sektor_olahraga": maldives_olahraga,
  "sektor_komersial": maldives_komersial,
  "sektor_hiburan": maldives_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 2,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 3.2,
    "harga_air": 2.6,
    "harga_obat": 78.95,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": maldives_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 4,
    "keamanan": 34,
    "keuangan": 14,
    "lingkungan": 60
  }
};





