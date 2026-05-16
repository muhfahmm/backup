// @ts-nocheck
const namibia_profile = {
  "name_en": "Namibia",
  "capital": "Windhoek",
  "name_id": "Namibia",
  "lon": 17,
  "lat": -22,
  "flag": "ðŸ‡³ðŸ‡¦",
  "jumlah_penduduk": 3022401,
  "anggaran": 126,
  "pendapatan_nasional": "361",
  "religion": "Protestan",
  "ideology": "Sosialisme"
};


const namibia_geopolitik = {
    "un_vote": 28,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 7,
      "kekuatan_keras": 25,
      "prestise_diplomatik": 57
  }
  };

const namibia = {
  ...namibia_profile,
  "sektor_listrik": namibia_listrik,
  "hunian": namibia_hunian,
  "infrastruktur": namibia_infrastruktur,
  "sektor_ekstraksi": namibia_ekstraksi,
  "sektor_manufaktur": namibia_manufaktur,
  "sektor_peternakan": namibia_peternakan,
  "sektor_agrikultur": namibia_agrikultur,
  "sektor_perikanan": namibia_perikanan,
  "sektor_olahan_pangan": namibia_olahan_pangan,
  "sektor_farmasi": namibia_farmasi,
  "sektor_pertahanan": namibia_pertahanan,
  "armada_militer": namibia_armada,
  "militer_strategis": namibia_strategis,
  "armada_kepolisian": namibia_kepolisian,
  "pabrik_militer": namibia_pabrik,
  "intelijen": namibia_intelijen,
    "pendidikan": namibia_pendidikan,
  "kesehatan": namibia_kesehatan,
  "hukum": namibia_hukum,
  "sektor_olahraga": namibia_olahraga,
  "sektor_komersial": namibia_komersial,
  "sektor_hiburan": namibia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 2,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": namibia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 1,
    "pendidikan": 22,
    "keamanan": 39,
    "keuangan": 24,
    "lingkungan": 60
  }
};





