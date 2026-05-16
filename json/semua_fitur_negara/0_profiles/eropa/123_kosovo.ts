// @ts-nocheck
const kosovo_profile = {
  "name_en": "Kosovo",
  "capital": "Pristina",
  "name_id": "Kosovo",
  "lon": 21.166667,
  "lat": 42.666667,
  "flag": "ðŸ‡½ðŸ‡°",
  "jumlah_penduduk": "10M",
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Islam",
  "ideology": "Demokrasi"
};


const kosovo_geopolitik = {
    "un_vote": 7,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 3,
      "prestise_diplomatik": 57
    }
  };

const kosovo = {
  ...kosovo_profile,
  "sektor_listrik": kosovo_listrik,
  "hunian": kosovo_hunian,
  "infrastruktur": kosovo_infrastruktur,
  "sektor_ekstraksi": kosovo_ekstraksi,
  "sektor_manufaktur": kosovo_manufaktur,
  "sektor_peternakan": kosovo_peternakan,
  "sektor_agrikultur": kosovo_agrikultur,
  "sektor_perikanan": kosovo_perikanan,
  "sektor_olahan_pangan": kosovo_olahan_pangan,
  "sektor_farmasi": kosovo_farmasi,
  "sektor_pertahanan": kosovo_pertahanan,
  "armada_militer": kosovo_armada,
  "militer_strategis": kosovo_strategis,
  "armada_kepolisian": kosovo_kepolisian,
  "pabrik_militer": kosovo_pabrik,
  "intelijen": kosovo_intelijen,
    "pendidikan": kosovo_pendidikan,
  "kesehatan": kosovo_kesehatan,
  "hukum": kosovo_hukum,
  "sektor_olahraga": kosovo_olahraga,
  "sektor_komersial": kosovo_komersial,
  "sektor_hiburan": kosovo_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 32,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 0
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
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 28.8,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 10.4,
    "harga_obat": 315.8,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kosovo_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 39,
    "pendidikan": 9,
    "keamanan": 33,
    "keuangan": 9,
    "lingkungan": 60
  }
};





