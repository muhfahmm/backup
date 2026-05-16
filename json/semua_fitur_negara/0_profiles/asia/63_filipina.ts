// @ts-nocheck
const filipina_profile = {
  "name_en": "Philippines",
  "capital": "Manila",
  "name_id": "Filipina",
  "lon": 120.98,
  "lat": 14.59,
  "flag": "ðŸ‡µðŸ‡­",
  "jumlah_penduduk": 114123600,
  "anggaran": 4230,
  "pendapatan_nasional": "12084",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const filipina_geopolitik = {
    "un_vote": 139,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 8,
      "kekuatan_keras": 21,
      "prestise_diplomatik": 57
    }
  };

const filipina = {
  ...filipina_profile,
  "sektor_listrik": filipina_listrik,
  "hunian": filipina_hunian,
  "infrastruktur": filipina_infrastruktur,
  "sektor_ekstraksi": filipina_ekstraksi,
  "sektor_manufaktur": filipina_manufaktur,
  "sektor_peternakan": filipina_peternakan,
  "sektor_agrikultur": filipina_agrikultur,
  "sektor_perikanan": filipina_perikanan,
  "sektor_olahan_pangan": filipina_olahan_pangan,
  "sektor_farmasi": filipina_farmasi,
  "sektor_pertahanan": filipina_pertahanan,
  "armada_militer": filipina_armada,
  "militer_strategis": filipina_strategis,
  "armada_kepolisian": filipina_kepolisian,
  "pabrik_militer": filipina_pabrik,
  "intelijen": filipina_intelijen,
    "pendidikan": filipina_pendidikan,
  "kesehatan": filipina_kesehatan,
  "hukum": filipina_hukum,
  "sektor_olahraga": filipina_olahraga,
  "sektor_komersial": filipina_komersial,
  "sektor_hiburan": filipina_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 201
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 44
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 279
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 81
    },
    "lingkungan": {
      "tarif": 27,
      "kepuasan": 88,
      "pendapatan": 149
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 22 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 64 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 69
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": filipina_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 13,
    "pendidikan": 36,
    "keamanan": 30,
    "keuangan": 32,
    "lingkungan": 60
  }
};





