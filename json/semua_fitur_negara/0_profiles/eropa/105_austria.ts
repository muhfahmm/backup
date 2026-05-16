// @ts-nocheck
const austria_profile = {
  "name_en": "Austria",
  "capital": "Vienna",
  "name_id": "Austria",
  "lon": 16.37,
  "lat": 48.2,
  "flag": "ðŸ‡¦ðŸ‡¹",
  "jumlah_penduduk": 9159950,
  "anggaran": 4959,
  "pendapatan_nasional": "14168",
  "religion": "Katolik",
  "ideology": "Kapitalisme"
};


const austria_geopolitik = {
    "un_vote": 192,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 28,
      "kekuatan_keras": 34,
      "prestise_diplomatik": 57
    }
  };

const austria = {
  ...austria_profile,
  "sektor_listrik": austria_listrik,
  "hunian": austria_hunian,
  "infrastruktur": austria_infrastruktur,
  "sektor_ekstraksi": austria_ekstraksi,
  "sektor_manufaktur": austria_manufaktur,
  "sektor_peternakan": austria_peternakan,
  "sektor_agrikultur": austria_agrikultur,
  "sektor_perikanan": austria_perikanan,
  "sektor_olahan_pangan": austria_olahan_pangan,
  "sektor_farmasi": austria_farmasi,
  "sektor_pertahanan": austria_pertahanan,
  "armada_militer": austria_armada,
  "militer_strategis": austria_strategis,
  "armada_kepolisian": austria_kepolisian,
  "pabrik_militer": austria_pabrik,
  "intelijen": austria_intelijen,
    "pendidikan": austria_pendidikan,
  "kesehatan": austria_kesehatan,
  "hukum": austria_hukum,
  "sektor_olahraga": austria_olahraga,
  "sektor_komersial": austria_komersial,
  "sektor_hiburan": austria_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 170
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 532
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 408
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 117
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 64
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 25 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 75 },
    "lainnya": {
      "tarif": 30,
      "kepuasan": 93,
      "pendapatan": 219
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": austria_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 18,
    "pendidikan": 12,
    "keamanan": 23,
    "keuangan": 37,
    "lingkungan": 60
  }
};





