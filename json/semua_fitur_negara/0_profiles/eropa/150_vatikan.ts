// @ts-nocheck
const vatikan_profile = {
  "name_en": "Vatican City",
  "capital": "Vatican City",
  "name_id": "Vatikan",
  "lon": 12.45,
  "lat": 41.9,
  "flag": "ðŸ‡»ðŸ‡¦",
  "jumlah_penduduk": 882,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Monarki"
};


const vatikan_geopolitik = {
    "un_vote": 34,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 24,
      "prestise_diplomatik": 57
    }
  };

const vatikan = {
  ...vatikan_profile,
  "sektor_listrik": vatikan_listrik,
  "hunian": vatikan_hunian,
  "infrastruktur": vatikan_infrastruktur,
  "sektor_ekstraksi": vatikan_ekstraksi,
  "sektor_manufaktur": vatikan_manufaktur,
  "sektor_peternakan": vatikan_peternakan,
  "sektor_agrikultur": vatikan_agrikultur,
  "sektor_perikanan": vatikan_perikanan,
  "sektor_olahan_pangan": vatikan_olahan_pangan,
  "sektor_farmasi": vatikan_farmasi,
  "sektor_pertahanan": vatikan_pertahanan,
  "armada_militer": vatikan_armada,
  "militer_strategis": vatikan_strategis,
  "armada_kepolisian": vatikan_kepolisian,
  "pabrik_militer": vatikan_pabrik,
  "intelijen": vatikan_intelijen,
    "pendidikan": vatikan_pendidikan,
  "kesehatan": vatikan_kesehatan,
  "hukum": vatikan_hukum,
  "sektor_olahraga": vatikan_olahraga,
  "sektor_komersial": vatikan_komersial,
  "sektor_hiburan": vatikan_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 4,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 3.2,
    "harga_air": 4.16,
    "harga_obat": 157.9,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": vatikan_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 17,
    "pendidikan": 23,
    "keamanan": 35,
    "keuangan": 17,
    "lingkungan": 60
  }
};





