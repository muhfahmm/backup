// @ts-nocheck
const tunisia_profile = {
  "name_en": "Tunisia",
  "capital": "Tunis",
  "name_id": "Tunisia",
  "lon": 9,
  "lat": 34,
  "flag": "ðŸ‡¹ðŸ‡³",
  "jumlah_penduduk": 11972169,
  "anggaran": 457,
  "pendapatan_nasional": "1306",
  "religion": "Islam",
  "ideology": "Nasionalisme"
};


const tunisia_geopolitik = {
    "un_vote": 59,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
      "kekuatan_keras": 26,
      "prestise_diplomatik": 57
  }
  };

const tunisia = {
  ...tunisia_profile,
  "sektor_listrik": tunisia_listrik,
  "hunian": tunisia_hunian,
  "infrastruktur": tunisia_infrastruktur,
  "sektor_ekstraksi": tunisia_ekstraksi,
  "sektor_manufaktur": tunisia_manufaktur,
  "sektor_peternakan": tunisia_peternakan,
  "sektor_agrikultur": tunisia_agrikultur,
  "sektor_perikanan": tunisia_perikanan,
  "sektor_olahan_pangan": tunisia_olahan_pangan,
  "sektor_farmasi": tunisia_farmasi,
  "sektor_pertahanan": tunisia_pertahanan,
  "armada_militer": tunisia_armada,
  "militer_strategis": tunisia_strategis,
  "armada_kepolisian": tunisia_kepolisian,
  "pabrik_militer": tunisia_pabrik,
  "intelijen": tunisia_intelijen,
    "pendidikan": tunisia_pendidikan,
  "kesehatan": tunisia_kesehatan,
  "hukum": tunisia_hukum,
  "sektor_olahraga": tunisia_olahraga,
  "sektor_komersial": tunisia_komersial,
  "sektor_hiburan": tunisia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 24
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 2,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 7.2,
    "harga_telur": 43.54,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": tunisia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 19,
    "pendidikan": 39,
    "keamanan": 14,
    "keuangan": 16,
    "lingkungan": 60
  }
};





