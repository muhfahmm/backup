// @ts-nocheck
const grenada_profile = {
  "name_en": "Grenada",
  "capital": "St. George's",
  "name_id": "Grenada",
  "lon": -61.66666666,
  "lat": 12.11666666,
  "flag": "ðŸ‡¬ðŸ‡©",
  "jumlah_penduduk": 112579,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const grenada_geopolitik = {
    "un_vote": 63,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 23,
      "kekuatan_keras": 18,
      "prestise_diplomatik": 57
    }
  };

const grenada = {
  ...grenada_profile,
  "sektor_listrik": grenada_listrik,
  "hunian": grenada_hunian,
  "infrastruktur": grenada_infrastruktur,
  "sektor_ekstraksi": grenada_ekstraksi,
  "sektor_manufaktur": grenada_manufaktur,
  "sektor_peternakan": grenada_peternakan,
  "sektor_agrikultur": grenada_agrikultur,
  "sektor_perikanan": grenada_perikanan,
  "sektor_olahan_pangan": grenada_olahan_pangan,
  "sektor_farmasi": grenada_farmasi,
  "sektor_pertahanan": grenada_pertahanan,
  "armada_militer": grenada_armada,
  "militer_strategis": grenada_strategis,
  "armada_kepolisian": grenada_kepolisian,
  "pabrik_militer": grenada_pabrik,
  "intelijen": grenada_intelijen,
    "pendidikan": grenada_pendidikan,
  "kesehatan": grenada_kesehatan,
  "hukum": grenada_hukum,
  "sektor_olahraga": grenada_olahraga,
  "sektor_komersial": grenada_komersial,
  "sektor_hiburan": grenada_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 22,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 12,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 33,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 315.8,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": grenada_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 8,
    "pendidikan": 35,
    "keamanan": 12,
    "keuangan": 9,
    "lingkungan": 60
  }
};





