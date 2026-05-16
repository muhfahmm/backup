// @ts-nocheck
const india_profile = {
  "name_en": "India",
  "capital": "New Delhi",
  "name_id": "India",
  "lon": 77.2,
  "lat": 28.61,
  "flag": "ðŸ‡®ðŸ‡³",
  "jumlah_penduduk": 1417492000,
  "anggaran": 38309,
  "pendapatan_nasional": "109453",
  "religion": "Hindu",
  "ideology": "Nasionalisme"
};


const india_geopolitik = {
    "un_vote": 204,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 15,
      "kekuatan_keras": 33,
      "prestise_diplomatik": 57
    }
  };

const india = {
  ...india_profile,
  "sektor_listrik": india_listrik,
  "hunian": india_hunian,
  "infrastruktur": india_infrastruktur,
  "sektor_ekstraksi": india_ekstraksi,
  "sektor_manufaktur": india_manufaktur,
  "sektor_peternakan": india_peternakan,
  "sektor_agrikultur": india_agrikultur,
  "sektor_perikanan": india_perikanan,
  "sektor_olahan_pangan": india_olahan_pangan,
  "sektor_farmasi": india_farmasi,
  "sektor_pertahanan": india_pertahanan,
  "armada_militer": india_armada,
  "militer_strategis": india_strategis,
  "armada_kepolisian": india_kepolisian,
  "pabrik_militer": india_pabrik,
  "intelijen": india_intelijen,
    "pendidikan": india_pendidikan,
  "kesehatan": india_kesehatan,
  "hukum": india_hukum,
  "sektor_olahraga": india_olahraga,
  "sektor_komersial": india_komersial,
  "sektor_hiburan": india_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 1262
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 1658
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 2793
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 1109
    },
    "lingkungan": {
      "tarif": 4,
      "kepuasan": 88,
      "pendapatan": 332
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 192 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 575 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 2111
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 4.16,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": india_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 22,
    "pendidikan": 29,
    "keamanan": 19,
    "keuangan": 39,
    "lingkungan": 60
  }
};





