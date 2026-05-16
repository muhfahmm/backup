// @ts-nocheck
const amerika_serikat_profile = {
  "name_en": "United States",
  "capital": "Washington, D.C.",
  "name_id": "Amerika Serikat",
  "lon": -77.03,
  "lat": 38.9,
  "flag": "ðŸ‡ºðŸ‡¸",
  "jumlah_penduduk": 341784857,
  "anggaran": 280022,
  "pendapatan_nasional": "800064",
  "religion": "Protestan",
  "ideology": "Kapitalisme"
};


const amerika_serikat_geopolitik = {
    "un_vote": 203,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 25,
      "kekuatan_keras": 15,
      "prestise_diplomatik": 57
    }
  };

const amerika_serikat = {
  ...amerika_serikat_profile,
  "sektor_listrik": amerika_serikat_listrik,
  "hunian": amerika_serikat_hunian,
  "infrastruktur": amerika_serikat_infrastruktur,
  "sektor_ekstraksi": amerika_serikat_ekstraksi,
  "sektor_manufaktur": amerika_serikat_manufaktur,
  "sektor_peternakan": amerika_serikat_peternakan,
  "sektor_agrikultur": amerika_serikat_agrikultur,
  "sektor_perikanan": amerika_serikat_perikanan,
  "sektor_olahan_pangan": amerika_serikat_olahan_pangan,
  "sektor_farmasi": amerika_serikat_farmasi,
  "sektor_pertahanan": amerika_serikat_pertahanan,
  "armada_militer": amerika_serikat_armada,
  "militer_strategis": amerika_serikat_strategis,
  "armada_kepolisian": amerika_serikat_kepolisian,
  "pabrik_militer": amerika_serikat_pabrik,
  "intelijen": amerika_serikat_intelijen,
    "pendidikan": amerika_serikat_pendidikan,
  "kesehatan": amerika_serikat_kesehatan,
  "hukum": amerika_serikat_hukum,
  "sektor_olahraga": amerika_serikat_olahraga,
  "sektor_komersial": amerika_serikat_komersial,
  "sektor_hiburan": amerika_serikat_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 28175
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 19391
    },
    "penghasilan": {
      "tarif": 21,
      "kepuasan": 61,
      "pendapatan": 5914
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 2690
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 7054
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1401 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4201 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 4046
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 5.35,
    "harga_listrik": 0.8,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": amerika_serikat_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 6,
    "pendidikan": 13,
    "keamanan": 35,
    "keuangan": 32,
    "lingkungan": 60
  }
};





