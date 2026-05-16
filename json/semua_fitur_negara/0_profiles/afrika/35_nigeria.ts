// @ts-nocheck
const nigeria_profile = {
  "name_en": "Nigeria",
  "capital": "Abuja",
  "name_id": "Nigeria",
  "lon": 8,
  "lat": 10,
  "flag": "ðŸ‡³ðŸ‡¬",
  "jumlah_penduduk": 223800000,
  "anggaran": 4618,
  "pendapatan_nasional": "13196",
  "religion": "Islam",
  "ideology": "Demokrasi"
};


const nigeria_geopolitik = {
    "un_vote": 175,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 37,
      "kekuatan_keras": 1,
      "prestise_diplomatik": 57
  }
  };

const nigeria = {
  ...nigeria_profile,
  "sektor_listrik": nigeria_listrik,
  "hunian": nigeria_hunian,
  "infrastruktur": nigeria_infrastruktur,
  "sektor_ekstraksi": nigeria_ekstraksi,
  "sektor_manufaktur": nigeria_manufaktur,
  "sektor_peternakan": nigeria_peternakan,
  "sektor_agrikultur": nigeria_agrikultur,
  "sektor_perikanan": nigeria_perikanan,
  "sektor_olahan_pangan": nigeria_olahan_pangan,
  "sektor_farmasi": nigeria_farmasi,
  "sektor_pertahanan": nigeria_pertahanan,
  "armada_militer": nigeria_armada,
  "militer_strategis": nigeria_strategis,
  "armada_kepolisian": nigeria_kepolisian,
  "pabrik_militer": nigeria_pabrik,
  "intelijen": nigeria_intelijen,
    "pendidikan": nigeria_pendidikan,
  "kesehatan": nigeria_kesehatan,
  "hukum": nigeria_hukum,
  "sektor_olahraga": nigeria_olahraga,
  "sektor_komersial": nigeria_komersial,
  "sektor_hiburan": nigeria_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 99
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 255
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 323
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 131
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 58
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 24 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 70 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 236
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 7.2,
    "harga_telur": 43.54,
    "harga_bbm": 14.98,
    "harga_listrik": 2.24,
    "harga_air": 10.4,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": nigeria_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 34,
    "pendidikan": 15,
    "keamanan": 26,
    "keuangan": 21,
    "lingkungan": 60
  }
};





