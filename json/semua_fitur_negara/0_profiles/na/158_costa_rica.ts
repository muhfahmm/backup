// @ts-nocheck
const costa_rica_profile = {
  "name_en": "Costa Rica",
  "capital": "San JosÃ©",
  "name_id": "Costa rica",
  "lon": -84,
  "lat": 10,
  "flag": "ðŸ‡¨ðŸ‡·",
  "jumlah_penduduk": 5191824,
  "anggaran": 681,
  "pendapatan_nasional": "1945",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const costa_rica_geopolitik = {
    "un_vote": 72,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 4,
      "kekuatan_keras": 23,
      "prestise_diplomatik": 57
    }
  };

const costa_rica = {
  ...costa_rica_profile,
  "sektor_listrik": costa_rica_listrik,
  "hunian": costa_rica_hunian,
  "infrastruktur": costa_rica_infrastruktur,
  "sektor_ekstraksi": costa_rica_ekstraksi,
  "sektor_manufaktur": costa_rica_manufaktur,
  "sektor_peternakan": costa_rica_peternakan,
  "sektor_agrikultur": costa_rica_agrikultur,
  "sektor_perikanan": costa_rica_perikanan,
  "sektor_olahan_pangan": costa_rica_olahan_pangan,
  "sektor_farmasi": costa_rica_farmasi,
  "sektor_pertahanan": costa_rica_pertahanan,
  "armada_militer": costa_rica_armada,
  "militer_strategis": costa_rica_strategis,
  "armada_kepolisian": costa_rica_kepolisian,
  "pabrik_militer": costa_rica_pabrik,
  "intelijen": costa_rica_intelijen,
    "pendidikan": costa_rica_pendidikan,
  "kesehatan": costa_rica_kesehatan,
  "hukum": costa_rica_hukum,
  "sektor_olahraga": costa_rica_olahraga,
  "sektor_komersial": costa_rica_komersial,
  "sektor_hiburan": costa_rica_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 69
    },
    "korporasi": {
      "tarif": 34,
      "kepuasan": 52,
      "pendapatan": 41
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 13
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 44
    },
    "lingkungan": {
      "tarif": 17,
      "kepuasan": 88,
      "pendapatan": 34
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 38,
      "kepuasan": 93,
      "pendapatan": 75
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
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
  "geopolitik": costa_rica_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 8,
    "keamanan": 10,
    "keuangan": 36,
    "lingkungan": 60
  }
};





