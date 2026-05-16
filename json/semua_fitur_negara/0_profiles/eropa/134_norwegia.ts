// @ts-nocheck
const norwegia_profile = {
  "name_en": "Norway",
  "capital": "Oslo",
  "name_id": "Norwegia",
  "lon": 10.75,
  "lat": 59.91,
  "flag": "ðŸ‡³ðŸ‡´",
  "jumlah_penduduk": 5627400,
  "anggaran": 5639,
  "pendapatan_nasional": "16112",
  "religion": "Protestan",
  "ideology": "Sosialisme"
};


const norwegia_geopolitik = {
    "un_vote": 161,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 10,
      "kekuatan_keras": 31,
      "prestise_diplomatik": 57
    }
  };

const norwegia = {
  ...norwegia_profile,
  "sektor_listrik": norwegia_listrik,
  "hunian": norwegia_hunian,
  "infrastruktur": norwegia_infrastruktur,
  "sektor_ekstraksi": norwegia_ekstraksi,
  "sektor_manufaktur": norwegia_manufaktur,
  "sektor_peternakan": norwegia_peternakan,
  "sektor_agrikultur": norwegia_agrikultur,
  "sektor_perikanan": norwegia_perikanan,
  "sektor_olahan_pangan": norwegia_olahan_pangan,
  "sektor_farmasi": norwegia_farmasi,
  "sektor_pertahanan": norwegia_pertahanan,
  "armada_militer": norwegia_armada,
  "militer_strategis": norwegia_strategis,
  "armada_kepolisian": norwegia_kepolisian,
  "pabrik_militer": norwegia_pabrik,
  "intelijen": norwegia_intelijen,
    "pendidikan": norwegia_pendidikan,
  "kesehatan": norwegia_kesehatan,
  "hukum": norwegia_hukum,
  "sektor_olahraga": norwegia_olahraga,
  "sektor_komersial": norwegia_komersial,
  "sektor_hiburan": norwegia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 187
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 146
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 125
    },
    "bea_cukai": {
      "tarif": 19,
      "kepuasan": 86,
      "pendapatan": 158
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 45
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 29 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 85 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 13
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": norwegia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 32,
    "pendidikan": 14,
    "keamanan": 25,
    "keuangan": 21,
    "lingkungan": 60
  }
};





