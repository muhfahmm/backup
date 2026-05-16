// @ts-nocheck
const palau_profile = {
  "name_en": "Palau",
  "capital": "Ngerulmud",
  "name_id": "Palau",
  "lon": 134.5,
  "lat": 7.5,
  "flag": "ðŸ‡µðŸ‡¼",
  "jumlah_penduduk": 16733,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const palau_geopolitik = {
    "un_vote": 44,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 34,
      "kekuatan_keras": 21,
      "prestise_diplomatik": 57
    }
  };

const palau = {
  ...palau_profile,
  "sektor_listrik": palau_listrik,
  "hunian": palau_hunian,
  "infrastruktur": palau_infrastruktur,
  "sektor_ekstraksi": palau_ekstraksi,
  "sektor_manufaktur": palau_manufaktur,
  "sektor_peternakan": palau_peternakan,
  "sektor_agrikultur": palau_agrikultur,
  "sektor_perikanan": palau_perikanan,
  "sektor_olahan_pangan": palau_olahan_pangan,
  "sektor_farmasi": palau_farmasi,
  "sektor_pertahanan": palau_pertahanan,
  "armada_militer": palau_armada,
  "militer_strategis": palau_strategis,
  "armada_kepolisian": palau_kepolisian,
  "pabrik_militer": palau_pabrik,
  "intelijen": palau_intelijen,
    "pendidikan": palau_pendidikan,
  "kesehatan": palau_kesehatan,
  "hukum": palau_hukum,
  "sektor_olahraga": palau_olahraga,
  "sektor_komersial": palau_komersial,
  "sektor_hiburan": palau_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 33,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": palau_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 27,
    "keamanan": 34,
    "keuangan": 8,
    "lingkungan": 60
  }
};





