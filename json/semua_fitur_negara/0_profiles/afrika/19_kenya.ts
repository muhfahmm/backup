// @ts-nocheck
const kenya_profile = {
  "name_en": "Kenya",
  "capital": "Nairobi",
  "name_id": "Kenya",
  "lon": 38,
  "lat": 1,
  "flag": "ðŸ‡°ðŸ‡ª",
  "jumlah_penduduk": 53330978,
  "anggaran": 1070,
  "pendapatan_nasional": "3056",
  "religion": "Protestan",
  "ideology": "Kapitalisme"
};


const kenya_geopolitik = {
    "un_vote": 169,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 31,
      "kekuatan_keras": 18,
      "prestise_diplomatik": 57
  }
  };

const kenya = {
  ...kenya_profile,
  "sektor_listrik": kenya_listrik,
  "hunian": kenya_hunian,
  "infrastruktur": kenya_infrastruktur,
  "sektor_ekstraksi": kenya_ekstraksi,
  "sektor_manufaktur": kenya_manufaktur,
  "sektor_peternakan": kenya_peternakan,
  "sektor_agrikultur": kenya_agrikultur,
  "sektor_perikanan": kenya_perikanan,
  "sektor_olahan_pangan": kenya_olahan_pangan,
  "sektor_farmasi": kenya_farmasi,
  "sektor_pertahanan": kenya_pertahanan,
  "armada_militer": kenya_armada,
  "militer_strategis": kenya_strategis,
  "armada_kepolisian": kenya_kepolisian,
  "pabrik_militer": kenya_pabrik,
  "intelijen": kenya_intelijen,
    "pendidikan": kenya_pendidikan,
  "kesehatan": kenya_kesehatan,
  "hukum": kenya_hukum,
  "sektor_olahraga": kenya_olahraga,
  "sektor_komersial": kenya_komersial,
  "sektor_hiburan": kenya_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 55
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 95
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 49
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 78
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 15
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 17 },
    "lainnya": {
      "tarif": 3,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 28.8,
    "harga_telur": 43.54,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kenya_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 5,
    "keamanan": 40,
    "keuangan": 23,
    "lingkungan": 60
  }
};





