// @ts-nocheck
const belarus_profile = {
  "name_en": "Belarus",
  "capital": "Minsk",
  "name_id": "Belarus",
  "lon": 28,
  "lat": 53,
  "flag": "ðŸ‡§ðŸ‡¾",
  "jumlah_penduduk": 9056696,
  "anggaran": 681,
  "pendapatan_nasional": "1945",
  "religion": "Kristen Ortodoks",
  "ideology": "Nasionalisme"
};


const belarus_geopolitik = {
    "un_vote": 102,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
      "kekuatan_keras": 39,
      "prestise_diplomatik": 57
    }
  };

const belarus = {
  ...belarus_profile,
  "sektor_listrik": belarus_listrik,
  "hunian": belarus_hunian,
  "infrastruktur": belarus_infrastruktur,
  "sektor_ekstraksi": belarus_ekstraksi,
  "sektor_manufaktur": belarus_manufaktur,
  "sektor_peternakan": belarus_peternakan,
  "sektor_agrikultur": belarus_agrikultur,
  "sektor_perikanan": belarus_perikanan,
  "sektor_olahan_pangan": belarus_olahan_pangan,
  "sektor_farmasi": belarus_farmasi,
  "sektor_pertahanan": belarus_pertahanan,
  "armada_militer": belarus_armada,
  "militer_strategis": belarus_strategis,
  "armada_kepolisian": belarus_kepolisian,
  "pabrik_militer": belarus_pabrik,
  "intelijen": belarus_intelijen,
    "pendidikan": belarus_pendidikan,
  "kesehatan": belarus_kesehatan,
  "hukum": belarus_hukum,
  "sektor_olahraga": belarus_olahraga,
  "sektor_komersial": belarus_komersial,
  "sektor_hiburan": belarus_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 18
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 48
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 64
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 7
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 53
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": belarus_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 21,
    "pendidikan": 1,
    "keamanan": 15,
    "keuangan": 39,
    "lingkungan": 60
  }
};





