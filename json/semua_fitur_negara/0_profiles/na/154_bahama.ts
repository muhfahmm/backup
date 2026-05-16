// @ts-nocheck
const bahama_profile = {
  "name_en": "Bahamas",
  "capital": "Nassau",
  "name_id": "Bahama",
  "lon": -76,
  "lat": 24.25,
  "flag": "ðŸ‡§ðŸ‡¸",
  "jumlah_penduduk": 398165,
  "anggaran": 136,
  "pendapatan_nasional": "389",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const bahama_geopolitik = {
    "un_vote": 170,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 37,
      "kekuatan_keras": 36,
      "prestise_diplomatik": 57
    }
  };

const bahama = {
  ...bahama_profile,
  "sektor_listrik": bahama_listrik,
  "hunian": bahama_hunian,
  "infrastruktur": bahama_infrastruktur,
  "sektor_ekstraksi": bahama_ekstraksi,
  "sektor_manufaktur": bahama_manufaktur,
  "sektor_peternakan": bahama_peternakan,
  "sektor_agrikultur": bahama_agrikultur,
  "sektor_perikanan": bahama_perikanan,
  "sektor_olahan_pangan": bahama_olahan_pangan,
  "sektor_farmasi": bahama_farmasi,
  "sektor_pertahanan": bahama_pertahanan,
  "armada_militer": bahama_armada,
  "militer_strategis": bahama_strategis,
  "armada_kepolisian": bahama_kepolisian,
  "pabrik_militer": bahama_pabrik,
  "intelijen": bahama_intelijen,
    "pendidikan": bahama_pendidikan,
  "kesehatan": bahama_kesehatan,
  "hukum": bahama_hukum,
  "sektor_olahraga": bahama_olahraga,
  "sektor_komersial": bahama_komersial,
  "sektor_hiburan": bahama_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 39,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 14
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 32,
      "kepuasan": 93,
      "pendapatan": 11
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 0.8,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": bahama_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 19,
    "pendidikan": 22,
    "keamanan": 8,
    "keuangan": 13,
    "lingkungan": 60
  }
};





