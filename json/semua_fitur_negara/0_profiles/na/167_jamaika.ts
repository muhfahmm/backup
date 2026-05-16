// @ts-nocheck
const jamaika_profile = {
  "name_en": "Jamaica",
  "capital": "Kingston",
  "name_id": "Jamaika",
  "lon": -77.5,
  "lat": 18.25,
  "flag": "ðŸ‡¯ðŸ‡²",
  "jumlah_penduduk": 2774538,
  "anggaran": 175,
  "pendapatan_nasional": "500",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const jamaika_geopolitik = {
    "un_vote": 57,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 4,
      "kekuatan_keras": 27,
      "prestise_diplomatik": 57
    }
  };

const jamaika = {
  ...jamaika_profile,
  "sektor_listrik": jamaika_listrik,
  "hunian": jamaika_hunian,
  "infrastruktur": jamaika_infrastruktur,
  "sektor_ekstraksi": jamaika_ekstraksi,
  "sektor_manufaktur": jamaika_manufaktur,
  "sektor_peternakan": jamaika_peternakan,
  "sektor_agrikultur": jamaika_agrikultur,
  "sektor_perikanan": jamaika_perikanan,
  "sektor_olahan_pangan": jamaika_olahan_pangan,
  "sektor_farmasi": jamaika_farmasi,
  "sektor_pertahanan": jamaika_pertahanan,
  "armada_militer": jamaika_armada,
  "militer_strategis": jamaika_strategis,
  "armada_kepolisian": jamaika_kepolisian,
  "pabrik_militer": jamaika_pabrik,
  "intelijen": jamaika_intelijen,
    "pendidikan": jamaika_pendidikan,
  "kesehatan": jamaika_kesehatan,
  "hukum": jamaika_hukum,
  "sektor_olahraga": jamaika_olahraga,
  "sektor_komersial": jamaika_komersial,
  "sektor_hiburan": jamaika_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 23,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 9,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 221.06,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": jamaika_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 34,
    "keamanan": 35,
    "keuangan": 14,
    "lingkungan": 60
  }
};





