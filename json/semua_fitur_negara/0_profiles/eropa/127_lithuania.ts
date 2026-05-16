// @ts-nocheck
const lithuania_profile = {
  "name_en": "Lithuania",
  "capital": "Vilnius",
  "name_id": "Lithuania",
  "lon": 25.19,
  "lat": 54.41,
  "flag": "ðŸ‡±ðŸ‡¹",
  "jumlah_penduduk": 2884359,
  "anggaran": 739,
  "pendapatan_nasional": "2111",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const lithuania_geopolitik = {
    "un_vote": 174,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 31,
      "kekuatan_keras": 33,
      "prestise_diplomatik": 57
    }
  };

const lithuania = {
  ...lithuania_profile,
  "sektor_listrik": lithuania_listrik,
  "hunian": lithuania_hunian,
  "infrastruktur": lithuania_infrastruktur,
  "sektor_ekstraksi": lithuania_ekstraksi,
  "sektor_manufaktur": lithuania_manufaktur,
  "sektor_peternakan": lithuania_peternakan,
  "sektor_agrikultur": lithuania_agrikultur,
  "sektor_perikanan": lithuania_perikanan,
  "sektor_olahan_pangan": lithuania_olahan_pangan,
  "sektor_farmasi": lithuania_farmasi,
  "sektor_pertahanan": lithuania_pertahanan,
  "armada_militer": lithuania_armada,
  "militer_strategis": lithuania_strategis,
  "armada_kepolisian": lithuania_kepolisian,
  "pabrik_militer": lithuania_pabrik,
  "intelijen": lithuania_intelijen,
    "pendidikan": lithuania_pendidikan,
  "kesehatan": lithuania_kesehatan,
  "hukum": lithuania_hukum,
  "sektor_olahraga": lithuania_olahraga,
  "sektor_komersial": lithuania_komersial,
  "sektor_hiburan": lithuania_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 74
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 12
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 16
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 11
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": lithuania_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 18,
    "pendidikan": 9,
    "keamanan": 3,
    "keuangan": 29,
    "lingkungan": 60
  }
};





