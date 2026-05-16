// @ts-nocheck
const malawi_profile = {
  "name_en": "Malawi",
  "capital": "Lilongwe",
  "name_id": "Malawi",
  "lon": 33.47,
  "lat": -13.59,
  "flag": "ðŸ‡²ðŸ‡¼",
  "jumlah_penduduk": 20734262,
  "anggaran": 117,
  "pendapatan_nasional": "333",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const malawi_geopolitik = {
    "un_vote": 35,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 3,
      "kekuatan_keras": 20,
      "prestise_diplomatik": 57
  }
  };

const malawi = {
  ...malawi_profile,
  "sektor_listrik": malawi_listrik,
  "hunian": malawi_hunian,
  "infrastruktur": malawi_infrastruktur,
  "sektor_ekstraksi": malawi_ekstraksi,
  "sektor_manufaktur": malawi_manufaktur,
  "sektor_peternakan": malawi_peternakan,
  "sektor_agrikultur": malawi_agrikultur,
  "sektor_perikanan": malawi_perikanan,
  "sektor_olahan_pangan": malawi_olahan_pangan,
  "sektor_farmasi": malawi_farmasi,
  "sektor_pertahanan": malawi_pertahanan,
  "armada_militer": malawi_armada,
  "militer_strategis": malawi_strategis,
  "armada_kepolisian": malawi_kepolisian,
  "pabrik_militer": malawi_pabrik,
  "intelijen": malawi_intelijen,
    "pendidikan": malawi_pendidikan,
  "kesehatan": malawi_kesehatan,
  "hukum": malawi_hukum,
  "sektor_olahraga": malawi_olahraga,
  "sektor_komersial": malawi_komersial,
  "sektor_hiburan": malawi_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 7
    },
    "penghasilan": {
      "tarif": 16,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 7
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 30,
      "kepuasan": 93,
      "pendapatan": 10
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 62.2,
    "harga_bbm": 5.35,
    "harga_listrik": 0.8,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": malawi_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 40,
    "pendidikan": 27,
    "keamanan": 5,
    "keuangan": 2,
    "lingkungan": 60
  }
};





