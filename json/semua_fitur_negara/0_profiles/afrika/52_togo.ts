// @ts-nocheck
const togo_profile = {
  "name_en": "Togo",
  "capital": "LomÃ©",
  "name_id": "Togo",
  "lon": 1.16666666,
  "lat": 8,
  "flag": "ðŸ‡¹ðŸ‡¬",
  "jumlah_penduduk": 9053799,
  "anggaran": 88,
  "pendapatan_nasional": "250",
  "religion": "Katolik",
  "ideology": "Konservatisme"
};


const togo_geopolitik = {
    "un_vote": 122,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 35,
      "kekuatan_keras": 17,
      "prestise_diplomatik": 57
  }
  };

const togo = {
  ...togo_profile,
  "sektor_listrik": togo_listrik,
  "hunian": togo_hunian,
  "infrastruktur": togo_infrastruktur,
  "sektor_ekstraksi": togo_ekstraksi,
  "sektor_manufaktur": togo_manufaktur,
  "sektor_peternakan": togo_peternakan,
  "sektor_agrikultur": togo_agrikultur,
  "sektor_perikanan": togo_perikanan,
  "sektor_olahan_pangan": togo_olahan_pangan,
  "sektor_farmasi": togo_farmasi,
  "sektor_pertahanan": togo_pertahanan,
  "armada_militer": togo_armada,
  "militer_strategis": togo_strategis,
  "armada_kepolisian": togo_kepolisian,
  "pabrik_militer": togo_pabrik,
  "intelijen": togo_intelijen,
    "pendidikan": togo_pendidikan,
  "kesehatan": togo_kesehatan,
  "hukum": togo_hukum,
  "sektor_olahraga": togo_olahraga,
  "sektor_komersial": togo_komersial,
  "sektor_hiburan": togo_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 5,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 35,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 82,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": togo_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 22,
    "pendidikan": 30,
    "keamanan": 2,
    "keuangan": 11,
    "lingkungan": 60
  }
};





