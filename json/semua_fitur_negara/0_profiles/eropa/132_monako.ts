// @ts-nocheck
const monako_profile = {
  "name_en": "Monaco",
  "capital": "Monaco",
  "name_id": "Monako",
  "lon": 7.4,
  "lat": 43.73333333,
  "flag": "ðŸ‡²ðŸ‡¨",
  "jumlah_penduduk": 38857,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Monarki"
};


const monako_geopolitik = {
    "un_vote": 88,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 29,
      "kekuatan_keras": 24,
      "prestise_diplomatik": 57
    }
  };

const monako = {
  ...monako_profile,
  "sektor_listrik": monako_listrik,
  "hunian": monako_hunian,
  "infrastruktur": monako_infrastruktur,
  "sektor_ekstraksi": monako_ekstraksi,
  "sektor_manufaktur": monako_manufaktur,
  "sektor_peternakan": monako_peternakan,
  "sektor_agrikultur": monako_agrikultur,
  "sektor_perikanan": monako_perikanan,
  "sektor_olahan_pangan": monako_olahan_pangan,
  "sektor_farmasi": monako_farmasi,
  "sektor_pertahanan": monako_pertahanan,
  "armada_militer": monako_armada,
  "militer_strategis": monako_strategis,
  "armada_kepolisian": monako_kepolisian,
  "pabrik_militer": monako_pabrik,
  "intelijen": monako_intelijen,
    "pendidikan": monako_pendidikan,
  "kesehatan": monako_kesehatan,
  "hukum": monako_hukum,
  "sektor_olahraga": monako_olahraga,
  "sektor_komersial": monako_komersial,
  "sektor_hiburan": monako_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 29,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": monako_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 31,
    "pendidikan": 25,
    "keamanan": 30,
    "keuangan": 5,
    "lingkungan": 60
  }
};





