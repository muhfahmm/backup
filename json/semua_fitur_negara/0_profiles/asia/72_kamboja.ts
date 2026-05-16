// @ts-nocheck
const kamboja_profile = {
  "name_en": "Cambodia",
  "capital": "Phnom Penh",
  "name_id": "Kamboja",
  "lon": 104.91,
  "lat": 11.55,
  "flag": "ðŸ‡°ðŸ‡­",
  "jumlah_penduduk": 17577760,
  "anggaran": 292,
  "pendapatan_nasional": "833",
  "religion": "Buddha",
  "ideology": "Demokrasi"
};


const kamboja_geopolitik = {
    "un_vote": 166,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 28,
      "kekuatan_keras": 29,
      "prestise_diplomatik": 57
    }
  };

const kamboja = {
  ...kamboja_profile,
  "sektor_listrik": kamboja_listrik,
  "hunian": kamboja_hunian,
  "infrastruktur": kamboja_infrastruktur,
  "sektor_ekstraksi": kamboja_ekstraksi,
  "sektor_manufaktur": kamboja_manufaktur,
  "sektor_peternakan": kamboja_peternakan,
  "sektor_agrikultur": kamboja_agrikultur,
  "sektor_perikanan": kamboja_perikanan,
  "sektor_olahan_pangan": kamboja_olahan_pangan,
  "sektor_farmasi": kamboja_farmasi,
  "sektor_pertahanan": kamboja_pertahanan,
  "armada_militer": kamboja_armada,
  "militer_strategis": kamboja_strategis,
  "armada_kepolisian": kamboja_kepolisian,
  "pabrik_militer": kamboja_pabrik,
  "intelijen": kamboja_intelijen,
    "pendidikan": kamboja_pendidikan,
  "kesehatan": kamboja_kesehatan,
  "hukum": kamboja_hukum,
  "sektor_olahraga": kamboja_olahraga,
  "sektor_komersial": kamboja_komersial,
  "sektor_hiburan": kamboja_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 17
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 18
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 19,
      "kepuasan": 86,
      "pendapatan": 13
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 12
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 18
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kamboja_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 16,
    "keamanan": 14,
    "keuangan": 39,
    "lingkungan": 60
  }
};





