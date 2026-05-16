// @ts-nocheck
const bhutan_profile = {
  "name_en": "Bhutan",
  "capital": "Thimphu",
  "name_id": "Bhutan",
  "lon": 90.5,
  "lat": 27.5,
  "flag": "ðŸ‡§ðŸ‡¹",
  "jumlah_penduduk": 784043,
  "anggaran": 27,
  "pendapatan_nasional": "78",
  "religion": "Buddha",
  "ideology": "Monarki"
};


const bhutan_geopolitik = {
    "un_vote": 149,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 37,
      "kekuatan_keras": 33,
      "prestise_diplomatik": 57
    }
  };

const bhutan = {
  ...bhutan_profile,
  "sektor_listrik": bhutan_listrik,
  "hunian": bhutan_hunian,
  "infrastruktur": bhutan_infrastruktur,
  "sektor_ekstraksi": bhutan_ekstraksi,
  "sektor_manufaktur": bhutan_manufaktur,
  "sektor_peternakan": bhutan_peternakan,
  "sektor_agrikultur": bhutan_agrikultur,
  "sektor_perikanan": bhutan_perikanan,
  "sektor_olahan_pangan": bhutan_olahan_pangan,
  "sektor_farmasi": bhutan_farmasi,
  "sektor_pertahanan": bhutan_pertahanan,
  "armada_militer": bhutan_armada,
  "militer_strategis": bhutan_strategis,
  "armada_kepolisian": bhutan_kepolisian,
  "pabrik_militer": bhutan_pabrik,
  "intelijen": bhutan_intelijen,
    "pendidikan": bhutan_pendidikan,
  "kesehatan": bhutan_kesehatan,
  "hukum": bhutan_hukum,
  "sektor_olahraga": bhutan_olahraga,
  "sektor_komersial": bhutan_komersial,
  "sektor_hiburan": bhutan_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 24,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 82,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 14.4,
    "harga_telur": 62.2,
    "harga_bbm": 8.56,
    "harga_listrik": 3.2,
    "harga_air": 10.4,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": bhutan_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 29,
    "keamanan": 10,
    "keuangan": 7,
    "lingkungan": 60
  }
};





