// @ts-nocheck
const djibouti_profile = {
  "name_en": "Djibouti",
  "capital": "Djibouti",
  "name_id": "Djibouti",
  "lon": 43,
  "lat": 11.5,
  "flag": "ðŸ‡©ðŸ‡¯",
  "jumlah_penduduk": 1136455,
  "anggaran": 39,
  "pendapatan_nasional": "111",
  "religion": "Islam",
  "ideology": "Konservatisme"
};


const djibouti_geopolitik = {
    "un_vote": 13,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 10,
      "kekuatan_keras": 3,
      "prestise_diplomatik": 57
  }
  };

const djibouti = {
  ...djibouti_profile,
  "sektor_listrik": djibouti_listrik,
  "hunian": djibouti_hunian,
  "infrastruktur": djibouti_infrastruktur,
  "sektor_ekstraksi": djibouti_ekstraksi,
  "sektor_manufaktur": djibouti_manufaktur,
  "sektor_peternakan": djibouti_peternakan,
  "sektor_agrikultur": djibouti_agrikultur,
  "sektor_perikanan": djibouti_perikanan,
  "sektor_olahan_pangan": djibouti_olahan_pangan,
  "sektor_farmasi": djibouti_farmasi,
  "sektor_pertahanan": djibouti_pertahanan,
  "armada_militer": djibouti_armada,
  "militer_strategis": djibouti_strategis,
  "armada_kepolisian": djibouti_kepolisian,
  "pabrik_militer": djibouti_pabrik,
  "intelijen": djibouti_intelijen,
    "pendidikan": djibouti_pendidikan,
  "kesehatan": djibouti_kesehatan,
  "hukum": djibouti_hukum,
  "sektor_olahraga": djibouti_olahraga,
  "sektor_komersial": djibouti_komersial,
  "sektor_hiburan": djibouti_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 13,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 20.16,
    "harga_telur": 62.2,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": djibouti_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 28,
    "pendidikan": 16,
    "keamanan": 25,
    "keuangan": 18,
    "lingkungan": 60
  }
};





