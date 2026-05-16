// @ts-nocheck
const san_marino_profile = {
  "name_en": "San Marino",
  "capital": "City of San Marino",
  "name_id": "San marino",
  "lon": 12.41666666,
  "lat": 43.76666666,
  "flag": "ðŸ‡¸ðŸ‡²",
  "jumlah_penduduk": 34156,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const san_marino_geopolitik = {
    "un_vote": 31,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 6,
      "kekuatan_keras": 30,
      "prestise_diplomatik": 57
    }
  };

const san_marino = {
  ...san_marino_profile,
  "sektor_listrik": san_marino_listrik,
  "hunian": san_marino_hunian,
  "infrastruktur": san_marino_infrastruktur,
  "sektor_ekstraksi": san_marino_ekstraksi,
  "sektor_manufaktur": san_marino_manufaktur,
  "sektor_peternakan": san_marino_peternakan,
  "sektor_agrikultur": san_marino_agrikultur,
  "sektor_perikanan": san_marino_perikanan,
  "sektor_olahan_pangan": san_marino_olahan_pangan,
  "sektor_farmasi": san_marino_farmasi,
  "sektor_pertahanan": san_marino_pertahanan,
  "armada_militer": san_marino_armada,
  "militer_strategis": san_marino_strategis,
  "armada_kepolisian": san_marino_kepolisian,
  "pabrik_militer": san_marino_pabrik,
  "intelijen": san_marino_intelijen,
    "pendidikan": san_marino_pendidikan,
  "kesehatan": san_marino_kesehatan,
  "hukum": san_marino_hukum,
  "sektor_olahraga": san_marino_olahraga,
  "sektor_komersial": san_marino_komersial,
  "sektor_hiburan": san_marino_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 8,
      "kepuasan": 93,
      "pendapatan": 0
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
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": san_marino_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 8,
    "pendidikan": 5,
    "keamanan": 34,
    "keuangan": 11,
    "lingkungan": 60
  }
};





