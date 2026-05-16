// @ts-nocheck
const denmark_profile = {
  "name_en": "Denmark",
  "capital": "Copenhagen",
  "name_id": "Denmark",
  "lon": 12.56,
  "lat": 55.67,
  "flag": "ðŸ‡©ðŸ‡°",
  "jumlah_penduduk": 6029607,
  "anggaran": 3986,
  "pendapatan_nasional": "11390",
  "religion": "Protestan",
  "ideology": "Sosialisme"
};


const denmark_geopolitik = {
    "un_vote": 184,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 32,
      "kekuatan_keras": 20,
      "prestise_diplomatik": 57
    }
  };

const denmark = {
  ...denmark_profile,
  "sektor_listrik": denmark_listrik,
  "hunian": denmark_hunian,
  "infrastruktur": denmark_infrastruktur,
  "sektor_ekstraksi": denmark_ekstraksi,
  "sektor_manufaktur": denmark_manufaktur,
  "sektor_peternakan": denmark_peternakan,
  "sektor_agrikultur": denmark_agrikultur,
  "sektor_perikanan": denmark_perikanan,
  "sektor_olahan_pangan": denmark_olahan_pangan,
  "sektor_farmasi": denmark_farmasi,
  "sektor_pertahanan": denmark_pertahanan,
  "armada_militer": denmark_armada,
  "militer_strategis": denmark_strategis,
  "armada_kepolisian": denmark_kepolisian,
  "pabrik_militer": denmark_pabrik,
  "intelijen": denmark_intelijen,
    "pendidikan": denmark_pendidikan,
  "kesehatan": denmark_kesehatan,
  "hukum": denmark_hukum,
  "sektor_olahraga": denmark_olahraga,
  "sektor_komersial": denmark_komersial,
  "sektor_hiburan": denmark_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 72
    },
    "korporasi": {
      "tarif": 9,
      "kepuasan": 52,
      "pendapatan": 56
    },
    "penghasilan": {
      "tarif": 21,
      "kepuasan": 61,
      "pendapatan": 107
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 272
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 273
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 20 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 60 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 180
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 5.35,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": denmark_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 33,
    "pendidikan": 32,
    "keamanan": 28,
    "keuangan": 36,
    "lingkungan": 60
  }
};





