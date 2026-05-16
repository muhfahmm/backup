// @ts-nocheck
const arab_saudi_profile = {
  "name_en": "Saudi Arabia",
  "capital": "Riyadh",
  "name_id": "Arab Saudi",
  "lon": 46.67,
  "lat": 24.71,
  "flag": "ðŸ‡¸ðŸ‡¦",
  "jumlah_penduduk": 34110821,
  "anggaran": 10793,
  "pendapatan_nasional": "30836",
  "religion": "Islam",
  "ideology": "Monarki"
};


const arab_saudi_geopolitik = {
    "un_vote": 163,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 13,
      "kekuatan_keras": 23,
      "prestise_diplomatik": 57
    }
  };

const arab_saudi = {
  ...arab_saudi_profile,
  "sektor_listrik": arab_saudi_listrik,
  "hunian": arab_saudi_hunian,
  "infrastruktur": arab_saudi_infrastruktur,
  "sektor_ekstraksi": arab_saudi_ekstraksi,
  "sektor_manufaktur": arab_saudi_manufaktur,
  "sektor_peternakan": arab_saudi_peternakan,
  "sektor_agrikultur": arab_saudi_agrikultur,
  "sektor_perikanan": arab_saudi_perikanan,
  "sektor_olahan_pangan": arab_saudi_olahan_pangan,
  "sektor_farmasi": arab_saudi_farmasi,
  "sektor_pertahanan": arab_saudi_pertahanan,
  "armada_militer": arab_saudi_armada,
  "militer_strategis": arab_saudi_strategis,
  "armada_kepolisian": arab_saudi_kepolisian,
  "pabrik_militer": arab_saudi_pabrik,
  "intelijen": arab_saudi_intelijen,
    "pendidikan": arab_saudi_pendidikan,
  "kesehatan": arab_saudi_kesehatan,
  "hukum": arab_saudi_hukum,
  "sektor_olahraga": arab_saudi_olahraga,
  "sektor_komersial": arab_saudi_komersial,
  "sektor_hiburan": arab_saudi_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 832
    },
    "korporasi": {
      "tarif": 2,
      "kepuasan": 52,
      "pendapatan": 44
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 982
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 335
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 265
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 54 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 162 },
    "lainnya": {
      "tarif": 4,
      "kepuasan": 93,
      "pendapatan": 127
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 62.2,
    "harga_bbm": 21.4,
    "harga_listrik": 2.24,
    "harga_air": 10.4,
    "harga_obat": 315.8,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": arab_saudi_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 33,
    "pendidikan": 19,
    "keamanan": 21,
    "keuangan": 39,
    "lingkungan": 60
  }
};





