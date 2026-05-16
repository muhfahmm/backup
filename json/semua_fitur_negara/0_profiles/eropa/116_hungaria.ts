// @ts-nocheck
const hungaria_profile = {
  "name_en": "Hungary",
  "capital": "Budapest",
  "name_id": "Hungaria",
  "lon": 20,
  "lat": 47,
  "flag": "ðŸ‡­ðŸ‡º",
  "jumlah_penduduk": 9489000,
  "anggaran": 2042,
  "pendapatan_nasional": "5834",
  "religion": "Katolik",
  "ideology": "Nasionalisme"
};


const hungaria_geopolitik = {
    "un_vote": 94,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
      "kekuatan_keras": 16,
      "prestise_diplomatik": 57
    }
  };

const hungaria = {
  ...hungaria_profile,
  "sektor_listrik": hungaria_listrik,
  "hunian": hungaria_hunian,
  "infrastruktur": hungaria_infrastruktur,
  "sektor_ekstraksi": hungaria_ekstraksi,
  "sektor_manufaktur": hungaria_manufaktur,
  "sektor_peternakan": hungaria_peternakan,
  "sektor_agrikultur": hungaria_agrikultur,
  "sektor_perikanan": hungaria_perikanan,
  "sektor_olahan_pangan": hungaria_olahan_pangan,
  "sektor_farmasi": hungaria_farmasi,
  "sektor_pertahanan": hungaria_pertahanan,
  "armada_militer": hungaria_armada,
  "militer_strategis": hungaria_strategis,
  "armada_kepolisian": hungaria_kepolisian,
  "pabrik_militer": hungaria_pabrik,
  "intelijen": hungaria_intelijen,
    "pendidikan": hungaria_pendidikan,
  "kesehatan": hungaria_kesehatan,
  "hukum": hungaria_hukum,
  "sektor_olahraga": hungaria_olahraga,
  "sektor_komersial": hungaria_komersial,
  "sektor_hiburan": hungaria_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 62
    },
    "penghasilan": {
      "tarif": 12,
      "kepuasan": 61,
      "pendapatan": 62
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 188
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 66
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 11 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 31 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": hungaria_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 18,
    "pendidikan": 24,
    "keamanan": 9,
    "keuangan": 26,
    "lingkungan": 60
  }
};





