// @ts-nocheck
const greenland_profile = {
  "name_en": "Greenland",
  "capital": "Nuuk",
  "name_id": "Greenland",
  "lon": -40,
  "lat": 72,
  "flag": "ðŸ‡¬ðŸ‡±",
  "jumlah_penduduk": 55840,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const greenland_geopolitik = {
    "un_vote": 43,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 6,
      "kekuatan_keras": 33,
      "prestise_diplomatik": 57
    }
  };

const greenland = {
  ...greenland_profile,
  "sektor_listrik": greenland_listrik,
  "hunian": greenland_hunian,
  "infrastruktur": greenland_infrastruktur,
  "sektor_ekstraksi": greenland_ekstraksi,
  "sektor_manufaktur": greenland_manufaktur,
  "sektor_peternakan": greenland_peternakan,
  "sektor_agrikultur": greenland_agrikultur,
  "sektor_perikanan": greenland_perikanan,
  "sektor_olahan_pangan": greenland_olahan_pangan,
  "sektor_farmasi": greenland_farmasi,
  "sektor_pertahanan": greenland_pertahanan,
  "armada_militer": greenland_armada,
  "militer_strategis": greenland_strategis,
  "armada_kepolisian": greenland_kepolisian,
  "pabrik_militer": greenland_pabrik,
  "intelijen": greenland_intelijen,
    "pendidikan": greenland_pendidikan,
  "kesehatan": greenland_kesehatan,
  "hukum": greenland_hukum,
  "sektor_olahraga": greenland_olahraga,
  "sektor_komersial": greenland_komersial,
  "sektor_hiburan": greenland_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 23,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 35,
      "kepuasan": 93,
      "pendapatan": 5
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
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 2.24,
    "harga_air": 4.16,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": greenland_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 40,
    "pendidikan": 18,
    "keamanan": 38,
    "keuangan": 32,
    "lingkungan": 60
  }
};





