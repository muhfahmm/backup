// @ts-nocheck
const somalia_profile = {
  "name_en": "Somalia",
  "capital": "Mogadishu",
  "name_id": "Somalia",
  "lon": 49,
  "lat": 10,
  "flag": "ðŸ‡¸ðŸ‡´",
  "jumlah_penduduk": 19655000,
  "anggaran": 78,
  "pendapatan_nasional": "222",
  "religion": "Islam",
  "ideology": "Konservatisme"
};


const somalia_geopolitik = {
    "un_vote": 98,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 35,
      "kekuatan_keras": 10,
      "prestise_diplomatik": 57
  }
  };

const somalia = {
  ...somalia_profile,
  "sektor_listrik": somalia_listrik,
  "hunian": somalia_hunian,
  "infrastruktur": somalia_infrastruktur,
  "sektor_ekstraksi": somalia_ekstraksi,
  "sektor_manufaktur": somalia_manufaktur,
  "sektor_peternakan": somalia_peternakan,
  "sektor_agrikultur": somalia_agrikultur,
  "sektor_perikanan": somalia_perikanan,
  "sektor_olahan_pangan": somalia_olahan_pangan,
  "sektor_farmasi": somalia_farmasi,
  "sektor_pertahanan": somalia_pertahanan,
  "armada_militer": somalia_armada,
  "militer_strategis": somalia_strategis,
  "armada_kepolisian": somalia_kepolisian,
  "pabrik_militer": somalia_pabrik,
  "intelijen": somalia_intelijen,
    "pendidikan": somalia_pendidikan,
  "kesehatan": somalia_kesehatan,
  "hukum": somalia_hukum,
  "sektor_olahraga": somalia_olahraga,
  "sektor_komersial": somalia_komersial,
  "sektor_hiburan": somalia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 12,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": somalia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 8,
    "pendidikan": 11,
    "keamanan": 24,
    "keuangan": 13,
    "lingkungan": 60
  }
};





