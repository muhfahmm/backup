// @ts-nocheck
const kolombia_profile = {
  "name_en": "Colombia",
  "capital": "BogotÃ¡",
  "name_id": "Kolombia",
  "lon": -72,
  "lat": 4,
  "flag": "ðŸ‡¨ðŸ‡´",
  "jumlah_penduduk": 53057212,
  "anggaran": 3306,
  "pendapatan_nasional": "9445",
  "religion": "Katolik",
  "ideology": "Sosialisme"
};


const kolombia_geopolitik = {
    "un_vote": 173,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 27,
      "kekuatan_keras": 15,
      "prestise_diplomatik": 57
    }
  };

const kolombia = {
  ...kolombia_profile,
  "sektor_listrik": kolombia_listrik,
  "hunian": kolombia_hunian,
  "infrastruktur": kolombia_infrastruktur,
  "sektor_ekstraksi": kolombia_ekstraksi,
  "sektor_manufaktur": kolombia_manufaktur,
  "sektor_peternakan": kolombia_peternakan,
  "sektor_agrikultur": kolombia_agrikultur,
  "sektor_perikanan": kolombia_perikanan,
  "sektor_olahan_pangan": kolombia_olahan_pangan,
  "sektor_farmasi": kolombia_farmasi,
  "sektor_pertahanan": kolombia_pertahanan,
  "armada_militer": kolombia_armada,
  "militer_strategis": kolombia_strategis,
  "armada_kepolisian": kolombia_kepolisian,
  "pabrik_militer": kolombia_pabrik,
  "intelijen": kolombia_intelijen,
    "pendidikan": kolombia_pendidikan,
  "kesehatan": kolombia_kesehatan,
  "hukum": kolombia_hukum,
  "sektor_olahraga": kolombia_olahraga,
  "sektor_komersial": kolombia_komersial,
  "sektor_hiburan": kolombia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 34
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 120
    },
    "penghasilan": {
      "tarif": 18,
      "kepuasan": 61,
      "pendapatan": 93
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 136
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 17 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 50 },
    "lainnya": {
      "tarif": 8,
      "kepuasan": 93,
      "pendapatan": 60
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 20.16,
    "harga_telur": 24.88,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 78.95,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kolombia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 22,
    "pendidikan": 21,
    "keamanan": 5,
    "keuangan": 26,
    "lingkungan": 60
  }
};





