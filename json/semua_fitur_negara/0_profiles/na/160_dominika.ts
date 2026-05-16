// @ts-nocheck
const dominika_profile = {
  "name_en": "Dominica",
  "capital": "Roseau",
  "name_id": "Dominika",
  "lon": -61.33333333,
  "lat": 15.41666666,
  "flag": "ðŸ‡©ðŸ‡²",
  "jumlah_penduduk": 72412,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const dominika_geopolitik = {
    "un_vote": 54,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 21,
      "kekuatan_keras": 18,
      "prestise_diplomatik": 57
    }
  };

const dominika = {
  ...dominika_profile,
  "sektor_listrik": dominika_listrik,
  "hunian": dominika_hunian,
  "infrastruktur": dominika_infrastruktur,
  "sektor_ekstraksi": dominika_ekstraksi,
  "sektor_manufaktur": dominika_manufaktur,
  "sektor_peternakan": dominika_peternakan,
  "sektor_agrikultur": dominika_agrikultur,
  "sektor_perikanan": dominika_perikanan,
  "sektor_olahan_pangan": dominika_olahan_pangan,
  "sektor_farmasi": dominika_farmasi,
  "sektor_pertahanan": dominika_pertahanan,
  "armada_militer": dominika_armada,
  "militer_strategis": dominika_strategis,
  "armada_kepolisian": dominika_kepolisian,
  "pabrik_militer": dominika_pabrik,
  "intelijen": dominika_intelijen,
    "pendidikan": dominika_pendidikan,
  "kesehatan": dominika_kesehatan,
  "hukum": dominika_hukum,
  "sektor_olahraga": dominika_olahraga,
  "sektor_komersial": dominika_komersial,
  "sektor_hiburan": dominika_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 5.35,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 126.32,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": dominika_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 39,
    "keamanan": 8,
    "keuangan": 39,
    "lingkungan": 60
  }
};





