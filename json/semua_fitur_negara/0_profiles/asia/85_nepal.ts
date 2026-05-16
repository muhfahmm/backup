// @ts-nocheck
const nepal_profile = {
  "name_en": "Nepal",
  "capital": "Kathmandu",
  "name_id": "Nepal",
  "lon": 84,
  "lat": 28,
  "flag": "ðŸ‡³ðŸ‡µ",
  "jumlah_penduduk": 29164578,
  "anggaran": 389,
  "pendapatan_nasional": "1111",
  "religion": "Hindu",
  "ideology": "Demokrasi"
};


const nepal_geopolitik = {
    "un_vote": 89,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 14,
      "prestise_diplomatik": 57
    }
  };

const nepal = {
  ...nepal_profile,
  "sektor_listrik": nepal_listrik,
  "hunian": nepal_hunian,
  "infrastruktur": nepal_infrastruktur,
  "sektor_ekstraksi": nepal_ekstraksi,
  "sektor_manufaktur": nepal_manufaktur,
  "sektor_peternakan": nepal_peternakan,
  "sektor_agrikultur": nepal_agrikultur,
  "sektor_perikanan": nepal_perikanan,
  "sektor_olahan_pangan": nepal_olahan_pangan,
  "sektor_farmasi": nepal_farmasi,
  "sektor_pertahanan": nepal_pertahanan,
  "armada_militer": nepal_armada,
  "militer_strategis": nepal_strategis,
  "armada_kepolisian": nepal_kepolisian,
  "pabrik_militer": nepal_pabrik,
  "intelijen": nepal_intelijen,
    "pendidikan": nepal_pendidikan,
  "kesehatan": nepal_kesehatan,
  "hukum": nepal_hukum,
  "sektor_olahraga": nepal_olahraga,
  "sektor_komersial": nepal_komersial,
  "sektor_hiburan": nepal_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 16
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 14
    },
    "bea_cukai": {
      "tarif": 2,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 6 },
    "lainnya": {
      "tarif": 18,
      "kepuasan": 93,
      "pendapatan": 11
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 14.4,
    "harga_telur": 62.2,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": nepal_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 30,
    "pendidikan": 32,
    "keamanan": 40,
    "keuangan": 25,
    "lingkungan": 60
  }
};





