// @ts-nocheck
const luksemburg_profile = {
  "name_en": "Luxembourg",
  "capital": "Luxembourg",
  "name_id": "Luksemburg",
  "lon": 6.07,
  "lat": 49.36,
  "flag": "ðŸ‡±ðŸ‡º",
  "jumlah_penduduk": 681973,
  "anggaran": 846,
  "pendapatan_nasional": "2417",
  "religion": "Katolik",
  "ideology": "Kapitalisme"
};


const luksemburg_geopolitik = {
    "un_vote": 67,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 20,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  };

const luksemburg = {
  ...luksemburg_profile,
  "sektor_listrik": luksemburg_listrik,
  "hunian": luksemburg_hunian,
  "infrastruktur": luksemburg_infrastruktur,
  "sektor_ekstraksi": luksemburg_ekstraksi,
  "sektor_manufaktur": luksemburg_manufaktur,
  "sektor_peternakan": luksemburg_peternakan,
  "sektor_agrikultur": luksemburg_agrikultur,
  "sektor_perikanan": luksemburg_perikanan,
  "sektor_olahan_pangan": luksemburg_olahan_pangan,
  "sektor_farmasi": luksemburg_farmasi,
  "sektor_pertahanan": luksemburg_pertahanan,
  "armada_militer": luksemburg_armada,
  "militer_strategis": luksemburg_strategis,
  "armada_kepolisian": luksemburg_kepolisian,
  "pabrik_militer": luksemburg_pabrik,
  "intelijen": luksemburg_intelijen,
    "pendidikan": luksemburg_pendidikan,
  "kesehatan": luksemburg_kesehatan,
  "hukum": luksemburg_hukum,
  "sektor_olahraga": luksemburg_olahraga,
  "sektor_komersial": luksemburg_komersial,
  "sektor_hiburan": luksemburg_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 17
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 31
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 38
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 34
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 31
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 13 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 25
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 11.52,
    "harga_telur": 62.2,
    "harga_bbm": 5.35,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": luksemburg_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 39,
    "keamanan": 39,
    "keuangan": 6,
    "lingkungan": 60
  }
};





