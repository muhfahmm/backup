// @ts-nocheck
const tonga_profile = {
  "name_en": "Tonga",
  "capital": "Nuku'alofa",
  "name_id": "Tonga",
  "lon": -175,
  "lat": -20,
  "flag": "ðŸ‡¹ðŸ‡´",
  "jumlah_penduduk": 100179,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Monarki"
};


const tonga_geopolitik = {
    "un_vote": 5,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 5,
      "kekuatan_keras": 18,
      "prestise_diplomatik": 57
    }
  };

const tonga = {
  ...tonga_profile,
  "sektor_listrik": tonga_listrik,
  "hunian": tonga_hunian,
  "infrastruktur": tonga_infrastruktur,
  "sektor_ekstraksi": tonga_ekstraksi,
  "sektor_manufaktur": tonga_manufaktur,
  "sektor_peternakan": tonga_peternakan,
  "sektor_agrikultur": tonga_agrikultur,
  "sektor_perikanan": tonga_perikanan,
  "sektor_olahan_pangan": tonga_olahan_pangan,
  "sektor_farmasi": tonga_farmasi,
  "sektor_pertahanan": tonga_pertahanan,
  "armada_militer": tonga_armada,
  "militer_strategis": tonga_strategis,
  "armada_kepolisian": tonga_kepolisian,
  "pabrik_militer": tonga_pabrik,
  "intelijen": tonga_intelijen,
    "pendidikan": tonga_pendidikan,
  "kesehatan": tonga_kesehatan,
  "hukum": tonga_hukum,
  "sektor_olahraga": tonga_olahraga,
  "sektor_komersial": tonga_komersial,
  "sektor_hiburan": tonga_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 11.52,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 10.4,
    "harga_obat": 315.8,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": tonga_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 19,
    "pendidikan": 33,
    "keamanan": 6,
    "keuangan": 18,
    "lingkungan": 60
  }
};





