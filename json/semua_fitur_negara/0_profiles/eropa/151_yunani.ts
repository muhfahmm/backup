// @ts-nocheck
const yunani_profile = {
  "name_en": "Greece",
  "capital": "Athens",
  "name_id": "Yunani",
  "lon": 22,
  "lat": 39,
  "flag": "ðŸ‡¬ðŸ‡·",
  "jumlah_penduduk": 10372335,
  "anggaran": 2236,
  "pendapatan_nasional": "6389",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi"
};


const yunani_geopolitik = {
    "un_vote": 179,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 27,
      "kekuatan_keras": 28,
      "prestise_diplomatik": 57
    }
  };

const yunani = {
  ...yunani_profile,
  "sektor_listrik": yunani_listrik,
  "hunian": yunani_hunian,
  "infrastruktur": yunani_infrastruktur,
  "sektor_ekstraksi": yunani_ekstraksi,
  "sektor_manufaktur": yunani_manufaktur,
  "sektor_peternakan": yunani_peternakan,
  "sektor_agrikultur": yunani_agrikultur,
  "sektor_perikanan": yunani_perikanan,
  "sektor_olahan_pangan": yunani_olahan_pangan,
  "sektor_farmasi": yunani_farmasi,
  "sektor_pertahanan": yunani_pertahanan,
  "armada_militer": yunani_armada,
  "militer_strategis": yunani_strategis,
  "armada_kepolisian": yunani_kepolisian,
  "pabrik_militer": yunani_pabrik,
  "intelijen": yunani_intelijen,
    "pendidikan": yunani_pendidikan,
  "kesehatan": yunani_kesehatan,
  "hukum": yunani_hukum,
  "sektor_olahraga": yunani_olahraga,
  "sektor_komersial": yunani_komersial,
  "sektor_hiburan": yunani_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 90
    },
    "korporasi": {
      "tarif": 15,
      "kepuasan": 52,
      "pendapatan": 85
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 48
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 202
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 125
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 12 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 34 },
    "lainnya": {
      "tarif": 38,
      "kepuasan": 93,
      "pendapatan": 127
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 5.35,
    "harga_listrik": 1.28,
    "harga_air": 4.16,
    "harga_obat": 315.8,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": yunani_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 29,
    "pendidikan": 18,
    "keamanan": 12,
    "keuangan": 25,
    "lingkungan": 60
  }
};





