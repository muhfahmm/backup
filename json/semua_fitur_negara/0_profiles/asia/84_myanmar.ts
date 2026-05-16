// @ts-nocheck
const myanmar_profile = {
  "name_en": "Myanmar",
  "capital": "Naypyidaw",
  "name_id": "Myanmar",
  "lon": 96.07,
  "lat": 19.76,
  "flag": "ðŸ‡²ðŸ‡²",
  "jumlah_penduduk": 51375327,
  "anggaran": 583,
  "pendapatan_nasional": "1667",
  "religion": "Buddha",
  "ideology": "Nasionalisme"
};


const myanmar_geopolitik = {
    "un_vote": 55,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 15,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  };

const myanmar = {
  ...myanmar_profile,
  "sektor_listrik": myanmar_listrik,
  "hunian": myanmar_hunian,
  "infrastruktur": myanmar_infrastruktur,
  "sektor_ekstraksi": myanmar_ekstraksi,
  "sektor_manufaktur": myanmar_manufaktur,
  "sektor_peternakan": myanmar_peternakan,
  "sektor_agrikultur": myanmar_agrikultur,
  "sektor_perikanan": myanmar_perikanan,
  "sektor_olahan_pangan": myanmar_olahan_pangan,
  "sektor_farmasi": myanmar_farmasi,
  "sektor_pertahanan": myanmar_pertahanan,
  "armada_militer": myanmar_armada,
  "militer_strategis": myanmar_strategis,
  "armada_kepolisian": myanmar_kepolisian,
  "pabrik_militer": myanmar_pabrik,
  "intelijen": myanmar_intelijen,
    "pendidikan": myanmar_pendidikan,
  "kesehatan": myanmar_kesehatan,
  "hukum": myanmar_hukum,
  "sektor_olahraga": myanmar_olahraga,
  "sektor_komersial": myanmar_komersial,
  "sektor_hiburan": myanmar_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 43
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 19
    },
    "bea_cukai": {
      "tarif": 29,
      "kepuasan": 86,
      "pendapatan": 45
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 24
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 9 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 17
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 4.16,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": myanmar_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 15,
    "pendidikan": 35,
    "keamanan": 2,
    "keuangan": 13,
    "lingkungan": 60
  }
};





