// @ts-nocheck
const argentina_profile = {
  "name_en": "Argentina",
  "capital": "Buenos Aires",
  "name_id": "Argentina",
  "lon": -58.38,
  "lat": -34.6,
  "flag": "ðŸ‡¦ðŸ‡·",
  "jumlah_penduduk": 46387098,
  "anggaran": 6223,
  "pendapatan_nasional": "17779",
  "religion": "Katolik",
  "ideology": "Kapitalisme"
};


const argentina_geopolitik = {
    "un_vote": 190,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 23,
      "kekuatan_keras": 22,
      "prestise_diplomatik": 57
    }
  };

const argentina = {
  ...argentina_profile,
  "sektor_listrik": argentina_listrik,
  "hunian": argentina_hunian,
  "infrastruktur": argentina_infrastruktur,
  "sektor_ekstraksi": argentina_ekstraksi,
  "sektor_manufaktur": argentina_manufaktur,
  "sektor_peternakan": argentina_peternakan,
  "sektor_agrikultur": argentina_agrikultur,
  "sektor_perikanan": argentina_perikanan,
  "sektor_olahan_pangan": argentina_olahan_pangan,
  "sektor_farmasi": argentina_farmasi,
  "sektor_pertahanan": argentina_pertahanan,
  "armada_militer": argentina_armada,
  "militer_strategis": argentina_strategis,
  "armada_kepolisian": argentina_kepolisian,
  "pabrik_militer": argentina_pabrik,
  "intelijen": argentina_intelijen,
    "pendidikan": argentina_pendidikan,
  "kesehatan": argentina_kesehatan,
  "hukum": argentina_hukum,
  "sektor_olahraga": argentina_olahraga,
  "sektor_komersial": argentina_komersial,
  "sektor_hiburan": argentina_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 37
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 159
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 528
    },
    "bea_cukai": {
      "tarif": 39,
      "kepuasan": 86,
      "pendapatan": 444
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 221
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 32 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 94 },
    "lainnya": {
      "tarif": 15,
      "kepuasan": 93,
      "pendapatan": 253
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 15.55,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": argentina_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 33,
    "pendidikan": 35,
    "keamanan": 24,
    "keuangan": 36,
    "lingkungan": 60
  }
};





