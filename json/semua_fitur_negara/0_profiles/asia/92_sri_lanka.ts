// @ts-nocheck
const sri_lanka_profile = {
  "name_en": "Sri Lanka",
  "capital": "Colombo",
  "name_id": "Sri lanka",
  "lon": 81,
  "lat": 7,
  "flag": "ðŸ‡±ðŸ‡°",
  "jumlah_penduduk": 21781800,
  "anggaran": 729,
  "pendapatan_nasional": "2084",
  "religion": "Buddha",
  "ideology": "Demokrasi"
};


const sri_lanka_geopolitik = {
    "un_vote": 158,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 15,
      "kekuatan_keras": 36,
      "prestise_diplomatik": 57
    }
  };

const sri_lanka = {
  ...sri_lanka_profile,
  "sektor_listrik": sri_lanka_listrik,
  "hunian": sri_lanka_hunian,
  "infrastruktur": sri_lanka_infrastruktur,
  "sektor_ekstraksi": sri_lanka_ekstraksi,
  "sektor_manufaktur": sri_lanka_manufaktur,
  "sektor_peternakan": sri_lanka_peternakan,
  "sektor_agrikultur": sri_lanka_agrikultur,
  "sektor_perikanan": sri_lanka_perikanan,
  "sektor_olahan_pangan": sri_lanka_olahan_pangan,
  "sektor_farmasi": sri_lanka_farmasi,
  "sektor_pertahanan": sri_lanka_pertahanan,
  "armada_militer": sri_lanka_armada,
  "militer_strategis": sri_lanka_strategis,
  "armada_kepolisian": sri_lanka_kepolisian,
  "pabrik_militer": sri_lanka_pabrik,
  "intelijen": sri_lanka_intelijen,
    "pendidikan": sri_lanka_pendidikan,
  "kesehatan": sri_lanka_kesehatan,
  "hukum": sri_lanka_hukum,
  "sektor_olahraga": sri_lanka_olahraga,
  "sektor_komersial": sri_lanka_komersial,
  "sektor_hiburan": sri_lanka_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 33,
      "kepuasan": 52,
      "pendapatan": 69
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 32
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 12
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 21
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 26
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 7.2,
    "harga_telur": 43.54,
    "harga_bbm": 21.4,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": sri_lanka_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 7,
    "pendidikan": 13,
    "keamanan": 31,
    "keuangan": 33,
    "lingkungan": 60
  }
};





