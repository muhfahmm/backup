// @ts-nocheck
const kuba_profile = {
  "name_en": "Cuba",
  "capital": "Havana",
  "name_id": "Kuba",
  "lon": -80,
  "lat": 21.5,
  "flag": "ðŸ‡¨ðŸ‡º",
  "jumlah_penduduk": 9748007,
  "anggaran": 1021,
  "pendapatan_nasional": "2917",
  "religion": "Katolik",
  "ideology": "Komunisme"
};


const kuba_geopolitik = {
    "un_vote": 171,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 39,
      "kekuatan_keras": 9,
      "prestise_diplomatik": 57
    }
  };

const kuba = {
  ...kuba_profile,
  "sektor_listrik": kuba_listrik,
  "hunian": kuba_hunian,
  "infrastruktur": kuba_infrastruktur,
  "sektor_ekstraksi": kuba_ekstraksi,
  "sektor_manufaktur": kuba_manufaktur,
  "sektor_peternakan": kuba_peternakan,
  "sektor_agrikultur": kuba_agrikultur,
  "sektor_perikanan": kuba_perikanan,
  "sektor_olahan_pangan": kuba_olahan_pangan,
  "sektor_farmasi": kuba_farmasi,
  "sektor_pertahanan": kuba_pertahanan,
  "armada_militer": kuba_armada,
  "militer_strategis": kuba_strategis,
  "armada_kepolisian": kuba_kepolisian,
  "pabrik_militer": kuba_pabrik,
  "intelijen": kuba_intelijen,
    "pendidikan": kuba_pendidikan,
  "kesehatan": kuba_kesehatan,
  "hukum": kuba_hukum,
  "sektor_olahraga": kuba_olahraga,
  "sektor_komersial": kuba_komersial,
  "sektor_hiburan": kuba_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 22,
      "kepuasan": 52,
      "pendapatan": 26
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 68
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 110
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 71
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 16 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 33
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 5.35,
    "harga_listrik": 1.28,
    "harga_air": 7.28,
    "harga_obat": 221.06,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kuba_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 8,
    "pendidikan": 1,
    "keamanan": 31,
    "keuangan": 22,
    "lingkungan": 60
  }
};





