// @ts-nocheck
const nikaragua_profile = {
  "name_en": "Nicaragua",
  "capital": "Managua",
  "name_id": "Nikaragua",
  "lon": -85,
  "lat": 13,
  "flag": "ðŸ‡³ðŸ‡®",
  "jumlah_penduduk": 6916140,
  "anggaran": 165,
  "pendapatan_nasional": "472",
  "religion": "Katolik",
  "ideology": "Sosialisme"
};


const nikaragua_geopolitik = {
    "un_vote": 162,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 38,
      "kekuatan_keras": 19,
      "prestise_diplomatik": 57
    }
  };

const nikaragua = {
  ...nikaragua_profile,
  "sektor_listrik": nikaragua_listrik,
  "hunian": nikaragua_hunian,
  "infrastruktur": nikaragua_infrastruktur,
  "sektor_ekstraksi": nikaragua_ekstraksi,
  "sektor_manufaktur": nikaragua_manufaktur,
  "sektor_peternakan": nikaragua_peternakan,
  "sektor_agrikultur": nikaragua_agrikultur,
  "sektor_perikanan": nikaragua_perikanan,
  "sektor_olahan_pangan": nikaragua_olahan_pangan,
  "sektor_farmasi": nikaragua_farmasi,
  "sektor_pertahanan": nikaragua_pertahanan,
  "armada_militer": nikaragua_armada,
  "militer_strategis": nikaragua_strategis,
  "armada_kepolisian": nikaragua_kepolisian,
  "pabrik_militer": nikaragua_pabrik,
  "intelijen": nikaragua_intelijen,
    "pendidikan": nikaragua_pendidikan,
  "kesehatan": nikaragua_kesehatan,
  "hukum": nikaragua_hukum,
  "sektor_olahraga": nikaragua_olahraga,
  "sektor_komersial": nikaragua_komersial,
  "sektor_hiburan": nikaragua_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 20,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 14
    },
    "bea_cukai": {
      "tarif": 29,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": nikaragua_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 39,
    "pendidikan": 37,
    "keamanan": 9,
    "keuangan": 30,
    "lingkungan": 60
  }
};





