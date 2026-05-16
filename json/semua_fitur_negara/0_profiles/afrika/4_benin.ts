// @ts-nocheck
const benin_profile = {
  "name_en": "Benin",
  "capital": "Porto-Novo",
  "name_id": "Benin",
  "lon": 2.25,
  "lat": 9.5,
  "flag": "ðŸ‡§ðŸ‡¯",
  "jumlah_penduduk": 13224860,
  "anggaran": 185,
  "pendapatan_nasional": "528",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const benin_geopolitik = {
    "un_vote": 62,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
      "kekuatan_keras": 31,
      "prestise_diplomatik": 57
  }
  };

const benin = {
  ...benin_profile,
  "sektor_listrik": benin_listrik,
  "hunian": benin_hunian,
  "infrastruktur": benin_infrastruktur,
  "sektor_ekstraksi": benin_ekstraksi,
  "sektor_manufaktur": benin_manufaktur,
  "sektor_peternakan": benin_peternakan,
  "sektor_agrikultur": benin_agrikultur,
  "sektor_perikanan": benin_perikanan,
  "sektor_olahan_pangan": benin_olahan_pangan,
  "sektor_farmasi": benin_farmasi,
  "sektor_pertahanan": benin_pertahanan,
  "armada_militer": benin_armada,
  "militer_strategis": benin_strategis,
  "armada_kepolisian": benin_kepolisian,
  "pabrik_militer": benin_pabrik,
  "intelijen": benin_intelijen,
    "pendidikan": benin_pendidikan,
  "kesehatan": benin_kesehatan,
  "hukum": benin_hukum,
  "sektor_olahraga": benin_olahraga,
  "sektor_komersial": benin_komersial,
  "sektor_hiburan": benin_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 7
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 24,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 29,
      "kepuasan": 93,
      "pendapatan": 12
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 2.6,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": benin_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 22,
    "pendidikan": 32,
    "keamanan": 17,
    "keuangan": 7,
    "lingkungan": 60
  }
};





