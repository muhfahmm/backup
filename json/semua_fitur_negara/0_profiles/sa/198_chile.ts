// @ts-nocheck
const chile_profile = {
  "name_en": "Chile",
  "capital": "Santiago",
  "name_id": "Chile",
  "lon": -71,
  "lat": -30,
  "flag": "ðŸ‡¨ðŸ‡±",
  "jumlah_penduduk": 20206953,
  "anggaran": 3257,
  "pendapatan_nasional": "9306",
  "religion": "Katolik",
  "ideology": "Liberalisme"
};


const chile_geopolitik = {
    "un_vote": 147,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 26,
      "kekuatan_keras": 4,
      "prestise_diplomatik": 57
    }
  };

const chile = {
  ...chile_profile,
  "sektor_listrik": chile_listrik,
  "hunian": chile_hunian,
  "infrastruktur": chile_infrastruktur,
  "sektor_ekstraksi": chile_ekstraksi,
  "sektor_manufaktur": chile_manufaktur,
  "sektor_peternakan": chile_peternakan,
  "sektor_agrikultur": chile_agrikultur,
  "sektor_perikanan": chile_perikanan,
  "sektor_olahan_pangan": chile_olahan_pangan,
  "sektor_farmasi": chile_farmasi,
  "sektor_pertahanan": chile_pertahanan,
  "armada_militer": chile_armada,
  "militer_strategis": chile_strategis,
  "armada_kepolisian": chile_kepolisian,
  "pabrik_militer": chile_pabrik,
  "intelijen": chile_intelijen,
    "pendidikan": chile_pendidikan,
  "kesehatan": chile_kesehatan,
  "hukum": chile_hukum,
  "sektor_olahraga": chile_olahraga,
  "sektor_komersial": chile_komersial,
  "sektor_hiburan": chile_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 181
    },
    "korporasi": {
      "tarif": 34,
      "kepuasan": 52,
      "pendapatan": 128
    },
    "penghasilan": {
      "tarif": 17,
      "kepuasan": 61,
      "pendapatan": 144
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 133
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 17 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 49 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 68
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 11.52,
    "harga_telur": 15.55,
    "harga_bbm": 5.35,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": chile_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 37,
    "keamanan": 18,
    "keuangan": 40,
    "lingkungan": 60
  }
};





