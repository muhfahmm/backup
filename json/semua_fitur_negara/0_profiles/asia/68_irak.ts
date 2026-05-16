// @ts-nocheck
const irak_profile = {
  "name_en": "Iraq",
  "capital": "Baghdad",
  "name_id": "Irak",
  "lon": 44.36,
  "lat": 33.31,
  "flag": "ðŸ‡®ðŸ‡¶",
  "jumlah_penduduk": 46118793,
  "anggaran": 2606,
  "pendapatan_nasional": "7445",
  "religion": "Islam",
  "ideology": "Demokrasi"
};


const irak_geopolitik = {
    "un_vote": 132,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 22,
      "kekuatan_keras": 7,
      "prestise_diplomatik": 57
    }
  };

const irak = {
  ...irak_profile,
  "sektor_listrik": irak_listrik,
  "hunian": irak_hunian,
  "infrastruktur": irak_infrastruktur,
  "sektor_ekstraksi": irak_ekstraksi,
  "sektor_manufaktur": irak_manufaktur,
  "sektor_peternakan": irak_peternakan,
  "sektor_agrikultur": irak_agrikultur,
  "sektor_perikanan": irak_perikanan,
  "sektor_olahan_pangan": irak_olahan_pangan,
  "sektor_farmasi": irak_farmasi,
  "sektor_pertahanan": irak_pertahanan,
  "armada_militer": irak_armada,
  "militer_strategis": irak_strategis,
  "armada_kepolisian": irak_kepolisian,
  "pabrik_militer": irak_pabrik,
  "intelijen": irak_intelijen,
    "pendidikan": irak_pendidikan,
  "kesehatan": irak_kesehatan,
  "hukum": irak_hukum,
  "sektor_olahraga": irak_olahraga,
  "sektor_komersial": irak_komersial,
  "sektor_hiburan": irak_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 67
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 301
    },
    "bea_cukai": {
      "tarif": 3,
      "kepuasan": 86,
      "pendapatan": 15
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 224
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 14 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 40 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 190
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 5.35,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 126.32,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": irak_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 29,
    "keamanan": 9,
    "keuangan": 5,
    "lingkungan": 60
  }
};





