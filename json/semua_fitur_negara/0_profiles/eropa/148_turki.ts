// @ts-nocheck
const turki_profile = {
  "name_en": "Turkiye",
  "capital": "Ankara",
  "name_id": "Turki",
  "lon": 32.85,
  "lat": 39.93,
  "flag": "ðŸ‡¹ðŸ‡·",
  "jumlah_penduduk": "10M",
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Islam",
  "ideology": "Konservatisme"
};


const turki_geopolitik = {
    "un_vote": 83,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 35,
      "kekuatan_keras": 28,
      "prestise_diplomatik": 57
    }
  };

const turki = {
  ...turki_profile,
  "sektor_listrik": turki_listrik,
  "hunian": turki_hunian,
  "infrastruktur": turki_infrastruktur,
  "sektor_ekstraksi": turki_ekstraksi,
  "sektor_manufaktur": turki_manufaktur,
  "sektor_peternakan": turki_peternakan,
  "sektor_agrikultur": turki_agrikultur,
  "sektor_perikanan": turki_perikanan,
  "sektor_olahan_pangan": turki_olahan_pangan,
  "sektor_farmasi": turki_farmasi,
  "sektor_pertahanan": turki_pertahanan,
  "armada_militer": turki_armada,
  "militer_strategis": turki_strategis,
  "armada_kepolisian": turki_kepolisian,
  "pabrik_militer": turki_pabrik,
  "intelijen": turki_intelijen,
    "pendidikan": turki_pendidikan,
  "kesehatan": turki_kesehatan,
  "hukum": turki_hukum,
  "sektor_olahraga": turki_olahraga,
  "sektor_komersial": turki_komersial,
  "sektor_hiburan": turki_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 22,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 26,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 33,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 29,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 38,
      "kepuasan": 93,
      "pendapatan": 9
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
    "harga_gula": 28.8,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 3.2,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": turki_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 22,
    "keamanan": 26,
    "keuangan": 28,
    "lingkungan": 60
  }
};





