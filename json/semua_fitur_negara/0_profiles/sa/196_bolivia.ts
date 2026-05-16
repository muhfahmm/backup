// @ts-nocheck
const bolivia_profile = {
  "name_en": "Bolivia",
  "capital": "Sucre",
  "name_id": "Bolivia",
  "lon": -65,
  "lat": -17,
  "flag": "ðŸ‡§ðŸ‡´",
  "jumlah_penduduk": 11365333,
  "anggaran": 428,
  "pendapatan_nasional": "1222",
  "religion": "Katolik",
  "ideology": "Sosialisme"
};


const bolivia_geopolitik = {
    "un_vote": 68,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 16,
      "kekuatan_keras": 9,
      "prestise_diplomatik": 57
    }
  };

const bolivia = {
  ...bolivia_profile,
  "sektor_listrik": bolivia_listrik,
  "hunian": bolivia_hunian,
  "infrastruktur": bolivia_infrastruktur,
  "sektor_ekstraksi": bolivia_ekstraksi,
  "sektor_manufaktur": bolivia_manufaktur,
  "sektor_peternakan": bolivia_peternakan,
  "sektor_agrikultur": bolivia_agrikultur,
  "sektor_perikanan": bolivia_perikanan,
  "sektor_olahan_pangan": bolivia_olahan_pangan,
  "sektor_farmasi": bolivia_farmasi,
  "sektor_pertahanan": bolivia_pertahanan,
  "armada_militer": bolivia_armada,
  "militer_strategis": bolivia_strategis,
  "armada_kepolisian": bolivia_kepolisian,
  "pabrik_militer": bolivia_pabrik,
  "intelijen": bolivia_intelijen,
    "pendidikan": bolivia_pendidikan,
  "kesehatan": bolivia_kesehatan,
  "hukum": bolivia_hukum,
  "sektor_olahraga": bolivia_olahraga,
  "sektor_komersial": bolivia_komersial,
  "sektor_hiburan": bolivia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 27,
      "kepuasan": 67,
      "pendapatan": 21
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 25
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 32
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 7
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 24
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 28.8,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 2.24,
    "harga_air": 4.16,
    "harga_obat": 126.32,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": bolivia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 31,
    "pendidikan": 8,
    "keamanan": 14,
    "keuangan": 33,
    "lingkungan": 60
  }
};





