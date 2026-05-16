// @ts-nocheck
const bulgaria_profile = {
  "name_en": "Bulgaria",
  "capital": "Sofia",
  "name_id": "Bulgaria",
  "lon": 25,
  "lat": 43,
  "flag": "ðŸ‡§ðŸ‡¬",
  "jumlah_penduduk": 6687717,
  "anggaran": 1021,
  "pendapatan_nasional": "2917",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi"
};


const bulgaria_geopolitik = {
    "un_vote": 42,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 11,
      "prestise_diplomatik": 57
    }
  };

const bulgaria = {
  ...bulgaria_profile,
  "sektor_listrik": bulgaria_listrik,
  "hunian": bulgaria_hunian,
  "infrastruktur": bulgaria_infrastruktur,
  "sektor_ekstraksi": bulgaria_ekstraksi,
  "sektor_manufaktur": bulgaria_manufaktur,
  "sektor_peternakan": bulgaria_peternakan,
  "sektor_agrikultur": bulgaria_agrikultur,
  "sektor_perikanan": bulgaria_perikanan,
  "sektor_olahan_pangan": bulgaria_olahan_pangan,
  "sektor_farmasi": bulgaria_farmasi,
  "sektor_pertahanan": bulgaria_pertahanan,
  "armada_militer": bulgaria_armada,
  "militer_strategis": bulgaria_strategis,
  "armada_kepolisian": bulgaria_kepolisian,
  "pabrik_militer": bulgaria_pabrik,
  "intelijen": bulgaria_intelijen,
    "pendidikan": bulgaria_pendidikan,
  "kesehatan": bulgaria_kesehatan,
  "hukum": bulgaria_hukum,
  "sektor_olahraga": bulgaria_olahraga,
  "sektor_komersial": bulgaria_komersial,
  "sektor_hiburan": bulgaria_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 4,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 77
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 99
    },
    "bea_cukai": {
      "tarif": 23,
      "kepuasan": 86,
      "pendapatan": 47
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 67
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 16 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 53
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 11.52,
    "harga_telur": 62.2,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": bulgaria_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 1,
    "pendidikan": 1,
    "keamanan": 31,
    "keuangan": 23,
    "lingkungan": 60
  }
};





