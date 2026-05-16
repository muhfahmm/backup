// @ts-nocheck
const palestina_profile = {
  "name_en": "Palestine",
  "capital": "Ramallah",
  "name_id": "Palestina",
  "lon": 35.2,
  "lat": 31.9,
  "flag": "ðŸ‡µðŸ‡¸",
  "jumlah_penduduk": 5495000,
  "anggaran": 194,
  "pendapatan_nasional": "556",
  "religion": "Islam",
  "ideology": "Demokrasi"
};


const palestina_geopolitik = {
    "un_vote": 40,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 22,
      "kekuatan_keras": 9,
      "prestise_diplomatik": 57
    }
  };

const palestina = {
  ...palestina_profile,
  "sektor_listrik": palestina_listrik,
  "hunian": palestina_hunian,
  "infrastruktur": palestina_infrastruktur,
  "sektor_ekstraksi": palestina_ekstraksi,
  "sektor_manufaktur": palestina_manufaktur,
  "sektor_peternakan": palestina_peternakan,
  "sektor_agrikultur": palestina_agrikultur,
  "sektor_perikanan": palestina_perikanan,
  "sektor_olahan_pangan": palestina_olahan_pangan,
  "sektor_farmasi": palestina_farmasi,
  "sektor_pertahanan": palestina_pertahanan,
  "armada_militer": palestina_armada,
  "militer_strategis": palestina_strategis,
  "armada_kepolisian": palestina_kepolisian,
  "pabrik_militer": palestina_pabrik,
  "intelijen": palestina_intelijen,
    "pendidikan": palestina_pendidikan,
  "kesehatan": palestina_kesehatan,
  "hukum": palestina_hukum,
  "sektor_olahraga": palestina_olahraga,
  "sektor_komersial": palestina_komersial,
  "sektor_hiburan": palestina_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 11
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 33,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 35,
      "kepuasan": 88,
      "pendapatan": 17
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 24.88,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 315.8,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": palestina_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 6,
    "pendidikan": 15,
    "keamanan": 33,
    "keuangan": 7,
    "lingkungan": 60
  }
};





