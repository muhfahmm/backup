// @ts-nocheck
const panama_profile = {
  "name_en": "Panama",
  "capital": "Panama City",
  "name_id": "Panama",
  "lon": -80,
  "lat": 9,
  "flag": "ðŸ‡µðŸ‡¦",
  "jumlah_penduduk": 4064780,
  "anggaran": 739,
  "pendapatan_nasional": "2111",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const panama_geopolitik = {
    "un_vote": 120,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 30,
      "kekuatan_keras": 15,
      "prestise_diplomatik": 57
    }
  };

const panama = {
  ...panama_profile,
  "sektor_listrik": panama_listrik,
  "hunian": panama_hunian,
  "infrastruktur": panama_infrastruktur,
  "sektor_ekstraksi": panama_ekstraksi,
  "sektor_manufaktur": panama_manufaktur,
  "sektor_peternakan": panama_peternakan,
  "sektor_agrikultur": panama_agrikultur,
  "sektor_perikanan": panama_perikanan,
  "sektor_olahan_pangan": panama_olahan_pangan,
  "sektor_farmasi": panama_farmasi,
  "sektor_pertahanan": panama_pertahanan,
  "armada_militer": panama_armada,
  "militer_strategis": panama_strategis,
  "armada_kepolisian": panama_kepolisian,
  "pabrik_militer": panama_pabrik,
  "intelijen": panama_intelijen,
    "pendidikan": panama_pendidikan,
  "kesehatan": panama_kesehatan,
  "hukum": panama_hukum,
  "sektor_olahraga": panama_olahraga,
  "sektor_komersial": panama_komersial,
  "sektor_hiburan": panama_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 41
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 10
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 14
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 54
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 17
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 85
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
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
  "geopolitik": panama_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 32,
    "pendidikan": 25,
    "keamanan": 15,
    "keuangan": 7,
    "lingkungan": 60
  }
};





