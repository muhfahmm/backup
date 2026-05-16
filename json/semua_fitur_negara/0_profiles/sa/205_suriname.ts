// @ts-nocheck
const suriname_profile = {
  "name_en": "Suriname",
  "capital": "Paramaribo",
  "name_id": "Suriname",
  "lon": -56,
  "lat": 4,
  "flag": "ðŸ‡¸ðŸ‡·",
  "jumlah_penduduk": 616500,
  "anggaran": 34,
  "pendapatan_nasional": "97",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const suriname_geopolitik = {
    "un_vote": 3,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
      "kekuatan_keras": 4,
      "prestise_diplomatik": 57
    }
  };

const suriname = {
  ...suriname_profile,
  "sektor_listrik": suriname_listrik,
  "hunian": suriname_hunian,
  "infrastruktur": suriname_infrastruktur,
  "sektor_ekstraksi": suriname_ekstraksi,
  "sektor_manufaktur": suriname_manufaktur,
  "sektor_peternakan": suriname_peternakan,
  "sektor_agrikultur": suriname_agrikultur,
  "sektor_perikanan": suriname_perikanan,
  "sektor_olahan_pangan": suriname_olahan_pangan,
  "sektor_farmasi": suriname_farmasi,
  "sektor_pertahanan": suriname_pertahanan,
  "armada_militer": suriname_armada,
  "militer_strategis": suriname_strategis,
  "armada_kepolisian": suriname_kepolisian,
  "pabrik_militer": suriname_pabrik,
  "intelijen": suriname_intelijen,
    "pendidikan": suriname_pendidikan,
  "kesehatan": suriname_kesehatan,
  "hukum": suriname_hukum,
  "sektor_olahraga": suriname_olahraga,
  "sektor_komersial": suriname_komersial,
  "sektor_hiburan": suriname_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 7.28,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": suriname_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 4,
    "pendidikan": 21,
    "keamanan": 23,
    "keuangan": 27,
    "lingkungan": 60
  }
};





