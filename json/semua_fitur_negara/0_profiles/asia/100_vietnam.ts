// @ts-nocheck
const vietnam_profile = {
  "name_en": "Vietnam",
  "capital": "Hanoi",
  "name_id": "Vietnam",
  "lon": 105.83,
  "lat": 21.02,
  "flag": "ðŸ‡»ðŸ‡³",
  "jumlah_penduduk": 102300000,
  "anggaran": 4181,
  "pendapatan_nasional": "11945",
  "religion": "Ateisme",
  "ideology": "Komunisme"
};


const vietnam_geopolitik = {
    "un_vote": 76,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 10,
      "kekuatan_keras": 3,
      "prestise_diplomatik": 57
    }
  };

const vietnam = {
  ...vietnam_profile,
  "sektor_listrik": vietnam_listrik,
  "hunian": vietnam_hunian,
  "infrastruktur": vietnam_infrastruktur,
  "sektor_ekstraksi": vietnam_ekstraksi,
  "sektor_manufaktur": vietnam_manufaktur,
  "sektor_peternakan": vietnam_peternakan,
  "sektor_agrikultur": vietnam_agrikultur,
  "sektor_perikanan": vietnam_perikanan,
  "sektor_olahan_pangan": vietnam_olahan_pangan,
  "sektor_farmasi": vietnam_farmasi,
  "sektor_pertahanan": vietnam_pertahanan,
  "armada_militer": vietnam_armada,
  "militer_strategis": vietnam_strategis,
  "armada_kepolisian": vietnam_kepolisian,
  "pabrik_militer": vietnam_pabrik,
  "intelijen": vietnam_intelijen,
    "pendidikan": vietnam_pendidikan,
  "kesehatan": vietnam_kesehatan,
  "hukum": vietnam_hukum,
  "sektor_olahraga": vietnam_olahraga,
  "sektor_komersial": vietnam_komersial,
  "sektor_hiburan": vietnam_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 13,
      "kepuasan": 67,
      "pendapatan": 95
    },
    "korporasi": {
      "tarif": 20,
      "kepuasan": 52,
      "pendapatan": 133
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 185
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 233
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 70
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 21 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 63 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 28.8,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 2.6,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": vietnam_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 28,
    "pendidikan": 31,
    "keamanan": 4,
    "keuangan": 5,
    "lingkungan": 60
  }
};





