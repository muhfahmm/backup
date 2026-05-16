// @ts-nocheck
const kiribati_profile = {
  "name_en": "Kiribati",
  "capital": "South Tarawa",
  "name_id": "Kiribati",
  "lon": 173,
  "lat": 1.41666666,
  "flag": "ðŸ‡°ðŸ‡®",
  "jumlah_penduduk": 134518,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const kiribati_geopolitik = {
    "un_vote": 2,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 3,
      "kekuatan_keras": 18,
      "prestise_diplomatik": 57
    }
  };

const kiribati = {
  ...kiribati_profile,
  "sektor_listrik": kiribati_listrik,
  "hunian": kiribati_hunian,
  "infrastruktur": kiribati_infrastruktur,
  "sektor_ekstraksi": kiribati_ekstraksi,
  "sektor_manufaktur": kiribati_manufaktur,
  "sektor_peternakan": kiribati_peternakan,
  "sektor_agrikultur": kiribati_agrikultur,
  "sektor_perikanan": kiribati_perikanan,
  "sektor_olahan_pangan": kiribati_olahan_pangan,
  "sektor_farmasi": kiribati_farmasi,
  "sektor_pertahanan": kiribati_pertahanan,
  "armada_militer": kiribati_armada,
  "militer_strategis": kiribati_strategis,
  "armada_kepolisian": kiribati_kepolisian,
  "pabrik_militer": kiribati_pabrik,
  "intelijen": kiribati_intelijen,
    "pendidikan": kiribati_pendidikan,
  "kesehatan": kiribati_kesehatan,
  "hukum": kiribati_hukum,
  "sektor_olahraga": kiribati_olahraga,
  "sektor_komersial": kiribati_komersial,
  "sektor_hiburan": kiribati_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 33,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 25,
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
      "tarif": 9,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kiribati_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 23,
    "keamanan": 9,
    "keuangan": 16,
    "lingkungan": 60
  }
};





