// @ts-nocheck
const kirgizstan_profile = {
  "name_en": "Kyrgyzstan",
  "capital": "Bishkek",
  "name_id": "Kirgizstan",
  "lon": 75,
  "lat": 41,
  "flag": "ðŸ‡°ðŸ‡¬",
  "jumlah_penduduk": 6132932,
  "anggaran": 117,
  "pendapatan_nasional": "333",
  "religion": "Islam",
  "ideology": "Demokrasi"
};


const kirgizstan_geopolitik = {
    "un_vote": 19,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 15,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  };

const kirgizstan = {
  ...kirgizstan_profile,
  "sektor_listrik": kirgizstan_listrik,
  "hunian": kirgizstan_hunian,
  "infrastruktur": kirgizstan_infrastruktur,
  "sektor_ekstraksi": kirgizstan_ekstraksi,
  "sektor_manufaktur": kirgizstan_manufaktur,
  "sektor_peternakan": kirgizstan_peternakan,
  "sektor_agrikultur": kirgizstan_agrikultur,
  "sektor_perikanan": kirgizstan_perikanan,
  "sektor_olahan_pangan": kirgizstan_olahan_pangan,
  "sektor_farmasi": kirgizstan_farmasi,
  "sektor_pertahanan": kirgizstan_pertahanan,
  "armada_militer": kirgizstan_armada,
  "militer_strategis": kirgizstan_strategis,
  "armada_kepolisian": kirgizstan_kepolisian,
  "pabrik_militer": kirgizstan_pabrik,
  "intelijen": kirgizstan_intelijen,
    "pendidikan": kirgizstan_pendidikan,
  "kesehatan": kirgizstan_kesehatan,
  "hukum": kirgizstan_hukum,
  "sektor_olahraga": kirgizstan_olahraga,
  "sektor_komersial": kirgizstan_komersial,
  "sektor_hiburan": kirgizstan_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 38,
      "kepuasan": 61,
      "pendapatan": 9
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
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
    "harga_beras": 16,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 0.8,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kirgizstan_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 1,
    "keamanan": 37,
    "keuangan": 26,
    "lingkungan": 60
  }
};





