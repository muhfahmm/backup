// @ts-nocheck
const latvia_profile = {
  "name_en": "Latvia",
  "capital": "Riga",
  "name_id": "Latvia",
  "lon": 25,
  "lat": 57,
  "flag": "ðŸ‡±ðŸ‡»",
  "jumlah_penduduk": 1857400,
  "anggaran": 418,
  "pendapatan_nasional": "1195",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const latvia_geopolitik = {
    "un_vote": 164,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 37,
      "kekuatan_keras": 17,
      "prestise_diplomatik": 57
    }
  };

const latvia = {
  ...latvia_profile,
  "sektor_listrik": latvia_listrik,
  "hunian": latvia_hunian,
  "infrastruktur": latvia_infrastruktur,
  "sektor_ekstraksi": latvia_ekstraksi,
  "sektor_manufaktur": latvia_manufaktur,
  "sektor_peternakan": latvia_peternakan,
  "sektor_agrikultur": latvia_agrikultur,
  "sektor_perikanan": latvia_perikanan,
  "sektor_olahan_pangan": latvia_olahan_pangan,
  "sektor_farmasi": latvia_farmasi,
  "sektor_pertahanan": latvia_pertahanan,
  "armada_militer": latvia_armada,
  "militer_strategis": latvia_strategis,
  "armada_kepolisian": latvia_kepolisian,
  "pabrik_militer": latvia_pabrik,
  "intelijen": latvia_intelijen,
    "pendidikan": latvia_pendidikan,
  "kesehatan": latvia_kesehatan,
  "hukum": latvia_hukum,
  "sektor_olahraga": latvia_olahraga,
  "sektor_komersial": latvia_komersial,
  "sektor_hiburan": latvia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 39,
      "kepuasan": 67,
      "pendapatan": 23
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 25
    },
    "penghasilan": {
      "tarif": 14,
      "kepuasan": 61,
      "pendapatan": 15
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 16
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 24
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 18,
      "kepuasan": 93,
      "pendapatan": 14
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": latvia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 1,
    "keamanan": 31,
    "keuangan": 27,
    "lingkungan": 60
  }
};





