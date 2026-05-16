// @ts-nocheck
const singapura_profile = {
  "name_en": "Singapore",
  "capital": "Singapore",
  "name_id": "Singapura",
  "lon": 103.81,
  "lat": 1.35,
  "flag": "ðŸ‡¸ðŸ‡¬",
  "jumlah_penduduk": 6110200,
  "anggaran": 4862,
  "pendapatan_nasional": "13890",
  "religion": "Buddha",
  "ideology": "Kapitalisme"
};


const singapura_geopolitik = {
    "un_vote": 148,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 12,
      "kekuatan_keras": 26,
      "prestise_diplomatik": 57
    }
  };

const singapura = {
  ...singapura_profile,
  "sektor_listrik": singapura_listrik,
  "hunian": singapura_hunian,
  "infrastruktur": singapura_infrastruktur,
  "sektor_ekstraksi": singapura_ekstraksi,
  "sektor_manufaktur": singapura_manufaktur,
  "sektor_peternakan": singapura_peternakan,
  "sektor_agrikultur": singapura_agrikultur,
  "sektor_perikanan": singapura_perikanan,
  "sektor_olahan_pangan": singapura_olahan_pangan,
  "sektor_farmasi": singapura_farmasi,
  "sektor_pertahanan": singapura_pertahanan,
  "armada_militer": singapura_armada,
  "militer_strategis": singapura_strategis,
  "armada_kepolisian": singapura_kepolisian,
  "pabrik_militer": singapura_pabrik,
  "intelijen": singapura_intelijen,
    "pendidikan": singapura_pendidikan,
  "kesehatan": singapura_kesehatan,
  "hukum": singapura_hukum,
  "sektor_olahraga": singapura_olahraga,
  "sektor_komersial": singapura_komersial,
  "sektor_hiburan": singapura_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 80
    },
    "korporasi": {
      "tarif": 36,
      "kepuasan": 52,
      "pendapatan": 478
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 132
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 231
    },
    "lingkungan": {
      "tarif": 39,
      "kepuasan": 88,
      "pendapatan": 379
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 25 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 73 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 147
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 0.8,
    "harga_air": 10.4,
    "harga_obat": 221.06,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": singapura_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 6,
    "pendidikan": 18,
    "keamanan": 31,
    "keuangan": 19,
    "lingkungan": 60
  }
};





