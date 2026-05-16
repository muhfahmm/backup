// @ts-nocheck
const selandia_baru_profile = {
  "name_en": "New Zealand",
  "capital": "Wellington",
  "name_id": "Selandia baru",
  "lon": 174.77,
  "lat": -41.28,
  "flag": "ðŸ‡³ðŸ‡¿",
  "jumlah_penduduk": 5342000,
  "anggaran": 2431,
  "pendapatan_nasional": "6945",
  "religion": "Protestan",
  "ideology": "Liberalisme"
};


const selandia_baru_geopolitik = {
    "un_vote": 107,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 4,
      "kekuatan_keras": 27,
      "prestise_diplomatik": 57
    }
  };

const selandia_baru = {
  ...selandia_baru_profile,
  "sektor_listrik": selandia_baru_listrik,
  "hunian": selandia_baru_hunian,
  "infrastruktur": selandia_baru_infrastruktur,
  "sektor_ekstraksi": selandia_baru_ekstraksi,
  "sektor_manufaktur": selandia_baru_manufaktur,
  "sektor_peternakan": selandia_baru_peternakan,
  "sektor_agrikultur": selandia_baru_agrikultur,
  "sektor_perikanan": selandia_baru_perikanan,
  "sektor_olahan_pangan": selandia_baru_olahan_pangan,
  "sektor_farmasi": selandia_baru_farmasi,
  "sektor_pertahanan": selandia_baru_pertahanan,
  "armada_militer": selandia_baru_armada,
  "militer_strategis": selandia_baru_strategis,
  "armada_kepolisian": selandia_baru_kepolisian,
  "pabrik_militer": selandia_baru_pabrik,
  "intelijen": selandia_baru_intelijen,
    "pendidikan": selandia_baru_pendidikan,
  "kesehatan": selandia_baru_kesehatan,
  "hukum": selandia_baru_hukum,
  "sektor_olahraga": selandia_baru_olahraga,
  "sektor_komersial": selandia_baru_komersial,
  "sektor_hiburan": selandia_baru_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 85
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 180
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 102
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 18
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 13 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 37 },
    "lainnya": {
      "tarif": 18,
      "kepuasan": 93,
      "pendapatan": 62
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 10.4,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": selandia_baru_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 1,
    "pendidikan": 19,
    "keamanan": 16,
    "keuangan": 34,
    "lingkungan": 60
  }
};





