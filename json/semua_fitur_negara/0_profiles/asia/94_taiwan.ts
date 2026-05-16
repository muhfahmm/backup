// @ts-nocheck
const taiwan_profile = {
  "name_en": "Taiwan",
  "capital": "Taipei",
  "name_id": "Taiwan",
  "lon": 121,
  "lat": 23.5,
  "flag": "ðŸ‡¹ðŸ‡¼",
  "jumlah_penduduk": "10M",
  "anggaran": 7681,
  "pendapatan_nasional": "21946",
  "religion": "Buddha",
  "ideology": "Kapitalisme"
};


const taiwan_geopolitik = {
    "un_vote": 75,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 14,
      "kekuatan_keras": 27,
      "prestise_diplomatik": 57
    }
  };

const taiwan = {
  ...taiwan_profile,
  "sektor_listrik": taiwan_listrik,
  "hunian": taiwan_hunian,
  "infrastruktur": taiwan_infrastruktur,
  "sektor_ekstraksi": taiwan_ekstraksi,
  "sektor_manufaktur": taiwan_manufaktur,
  "sektor_peternakan": taiwan_peternakan,
  "sektor_agrikultur": taiwan_agrikultur,
  "sektor_perikanan": taiwan_perikanan,
  "sektor_olahan_pangan": taiwan_olahan_pangan,
  "sektor_farmasi": taiwan_farmasi,
  "sektor_pertahanan": taiwan_pertahanan,
  "armada_militer": taiwan_armada,
  "militer_strategis": taiwan_strategis,
  "armada_kepolisian": taiwan_kepolisian,
  "pabrik_militer": taiwan_pabrik,
  "intelijen": taiwan_intelijen,
    "pendidikan": taiwan_pendidikan,
  "kesehatan": taiwan_kesehatan,
  "hukum": taiwan_hukum,
  "sektor_olahraga": taiwan_olahraga,
  "sektor_komersial": taiwan_komersial,
  "sektor_hiburan": taiwan_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 207
    },
    "korporasi": {
      "tarif": 12,
      "kepuasan": 52,
      "pendapatan": 98
    },
    "penghasilan": {
      "tarif": 8,
      "kepuasan": 61,
      "pendapatan": 155
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 667
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 594
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 39 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 116 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 523
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 24.88,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": taiwan_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 40,
    "pendidikan": 25,
    "keamanan": 26,
    "keuangan": 1,
    "lingkungan": 60
  }
};





