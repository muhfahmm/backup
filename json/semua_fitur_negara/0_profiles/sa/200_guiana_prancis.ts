// @ts-nocheck
const guiana_prancis_profile = {
  "name_en": "French Guiana",
  "capital": "Cayenne",
  "name_id": "Guiana prancis",
  "lon": -53,
  "lat": 4,
  "flag": "ðŸ‡¬ðŸ‡«",
  "jumlah_penduduk": 316604,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const guiana_prancis_geopolitik = {
    "un_vote": 39,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 3,
      "kekuatan_keras": 35,
      "prestise_diplomatik": 57
    }
  };

const guiana_prancis = {
  ...guiana_prancis_profile,
  "sektor_listrik": guiana_prancis_listrik,
  "hunian": guiana_prancis_hunian,
  "infrastruktur": guiana_prancis_infrastruktur,
  "sektor_ekstraksi": guiana_prancis_ekstraksi,
  "sektor_manufaktur": guiana_prancis_manufaktur,
  "sektor_peternakan": guiana_prancis_peternakan,
  "sektor_agrikultur": guiana_prancis_agrikultur,
  "sektor_perikanan": guiana_prancis_perikanan,
  "sektor_olahan_pangan": guiana_prancis_olahan_pangan,
  "sektor_farmasi": guiana_prancis_farmasi,
  "sektor_pertahanan": guiana_prancis_pertahanan,
  "armada_militer": guiana_prancis_armada,
  "militer_strategis": guiana_prancis_strategis,
  "armada_kepolisian": guiana_prancis_kepolisian,
  "pabrik_militer": guiana_prancis_pabrik,
  "intelijen": guiana_prancis_intelijen,
    "pendidikan": guiana_prancis_pendidikan,
  "kesehatan": guiana_prancis_kesehatan,
  "hukum": guiana_prancis_hukum,
  "sektor_olahraga": guiana_prancis_olahraga,
  "sektor_komersial": guiana_prancis_komersial,
  "sektor_hiburan": guiana_prancis_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 20,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 82,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 28.8,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 0.8,
    "harga_air": 4.16,
    "harga_obat": 315.8,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": guiana_prancis_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 25,
    "pendidikan": 14,
    "keamanan": 13,
    "keuangan": 27,
    "lingkungan": 60
  }
};





