// @ts-nocheck
const tuvalu_profile = {
  "name_en": "Tuvalu",
  "capital": "Funafuti",
  "name_id": "Tuvalu",
  "lon": 178,
  "lat": -8,
  "flag": "ðŸ‡¹ðŸ‡»",
  "jumlah_penduduk": 10643,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const tuvalu_geopolitik = {
    "un_vote": 29,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 27,
      "kekuatan_keras": 27,
      "prestise_diplomatik": 57
    }
  };

const tuvalu = {
  ...tuvalu_profile,
  "sektor_listrik": tuvalu_listrik,
  "hunian": tuvalu_hunian,
  "infrastruktur": tuvalu_infrastruktur,
  "sektor_ekstraksi": tuvalu_ekstraksi,
  "sektor_manufaktur": tuvalu_manufaktur,
  "sektor_peternakan": tuvalu_peternakan,
  "sektor_agrikultur": tuvalu_agrikultur,
  "sektor_perikanan": tuvalu_perikanan,
  "sektor_olahan_pangan": tuvalu_olahan_pangan,
  "sektor_farmasi": tuvalu_farmasi,
  "sektor_pertahanan": tuvalu_pertahanan,
  "armada_militer": tuvalu_armada,
  "militer_strategis": tuvalu_strategis,
  "armada_kepolisian": tuvalu_kepolisian,
  "pabrik_militer": tuvalu_pabrik,
  "intelijen": tuvalu_intelijen,
    "pendidikan": tuvalu_pendidikan,
  "kesehatan": tuvalu_kesehatan,
  "hukum": tuvalu_hukum,
  "sektor_olahraga": tuvalu_olahraga,
  "sektor_komersial": tuvalu_komersial,
  "sektor_hiburan": tuvalu_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 22,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 14,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 4,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": tuvalu_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 31,
    "pendidikan": 22,
    "keamanan": 16,
    "keuangan": 21,
    "lingkungan": 60
  }
};





