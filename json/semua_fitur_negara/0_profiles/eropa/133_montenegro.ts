// @ts-nocheck
const montenegro_profile = {
  "name_en": "Montenegro",
  "capital": "Podgorica",
  "name_id": "Montenegro",
  "lon": 19.3,
  "lat": 42.5,
  "flag": "ðŸ‡²ðŸ‡ª",
  "jumlah_penduduk": 626485,
  "anggaran": 68,
  "pendapatan_nasional": "194",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi"
};


const montenegro_geopolitik = {
    "un_vote": 104,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 21,
      "kekuatan_keras": 34,
      "prestise_diplomatik": 57
    }
  };

const montenegro = {
  ...montenegro_profile,
  "sektor_listrik": montenegro_listrik,
  "hunian": montenegro_hunian,
  "infrastruktur": montenegro_infrastruktur,
  "sektor_ekstraksi": montenegro_ekstraksi,
  "sektor_manufaktur": montenegro_manufaktur,
  "sektor_peternakan": montenegro_peternakan,
  "sektor_agrikultur": montenegro_agrikultur,
  "sektor_perikanan": montenegro_perikanan,
  "sektor_olahan_pangan": montenegro_olahan_pangan,
  "sektor_farmasi": montenegro_farmasi,
  "sektor_pertahanan": montenegro_pertahanan,
  "armada_militer": montenegro_armada,
  "militer_strategis": montenegro_strategis,
  "armada_kepolisian": montenegro_kepolisian,
  "pabrik_militer": montenegro_pabrik,
  "intelijen": montenegro_intelijen,
    "pendidikan": montenegro_pendidikan,
  "kesehatan": montenegro_kesehatan,
  "hukum": montenegro_hukum,
  "sektor_olahraga": montenegro_olahraga,
  "sektor_komersial": montenegro_komersial,
  "sektor_hiburan": montenegro_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 37,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
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
    "harga_beras": 12.8,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 62.2,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 126.32,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": montenegro_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 4,
    "pendidikan": 39,
    "keamanan": 9,
    "keuangan": 21,
    "lingkungan": 60
  }
};





