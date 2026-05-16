// @ts-nocheck
const slovenia_profile = {
  "name_en": "Slovenia",
  "capital": "Ljubljana",
  "name_id": "Slovenia",
  "lon": 14.81666666,
  "lat": 46.11666666,
  "flag": "ðŸ‡¸ðŸ‡®",
  "jumlah_penduduk": 2123949,
  "anggaran": 632,
  "pendapatan_nasional": "1806",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const slovenia_geopolitik = {
    "un_vote": 78,
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

const slovenia = {
  ...slovenia_profile,
  "sektor_listrik": slovenia_listrik,
  "hunian": slovenia_hunian,
  "infrastruktur": slovenia_infrastruktur,
  "sektor_ekstraksi": slovenia_ekstraksi,
  "sektor_manufaktur": slovenia_manufaktur,
  "sektor_peternakan": slovenia_peternakan,
  "sektor_agrikultur": slovenia_agrikultur,
  "sektor_perikanan": slovenia_perikanan,
  "sektor_olahan_pangan": slovenia_olahan_pangan,
  "sektor_farmasi": slovenia_farmasi,
  "sektor_pertahanan": slovenia_pertahanan,
  "armada_militer": slovenia_armada,
  "militer_strategis": slovenia_strategis,
  "armada_kepolisian": slovenia_kepolisian,
  "pabrik_militer": slovenia_pabrik,
  "intelijen": slovenia_intelijen,
    "pendidikan": slovenia_pendidikan,
  "kesehatan": slovenia_kesehatan,
  "hukum": slovenia_hukum,
  "sektor_olahraga": slovenia_olahraga,
  "sektor_komersial": slovenia_komersial,
  "sektor_hiburan": slovenia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 61
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 60
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 32
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 52
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 11
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 10 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 15
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 0.8,
    "harga_air": 7.28,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": slovenia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 2,
    "pendidikan": 6,
    "keamanan": 19,
    "keuangan": 10,
    "lingkungan": 60
  }
};





