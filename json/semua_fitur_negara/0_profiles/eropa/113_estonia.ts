// @ts-nocheck
const estonia_profile = {
  "name_en": "Estonia",
  "capital": "Tallinn",
  "name_id": "Estonia",
  "lon": 26,
  "lat": 59,
  "flag": "ðŸ‡ªðŸ‡ª",
  "jumlah_penduduk": 1374687,
  "anggaran": 389,
  "pendapatan_nasional": "1111",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const estonia_geopolitik = {
    "un_vote": 168,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 38,
      "kekuatan_keras": 21,
      "prestise_diplomatik": 57
    }
  };

const estonia = {
  ...estonia_profile,
  "sektor_listrik": estonia_listrik,
  "hunian": estonia_hunian,
  "infrastruktur": estonia_infrastruktur,
  "sektor_ekstraksi": estonia_ekstraksi,
  "sektor_manufaktur": estonia_manufaktur,
  "sektor_peternakan": estonia_peternakan,
  "sektor_agrikultur": estonia_agrikultur,
  "sektor_perikanan": estonia_perikanan,
  "sektor_olahan_pangan": estonia_olahan_pangan,
  "sektor_farmasi": estonia_farmasi,
  "sektor_pertahanan": estonia_pertahanan,
  "armada_militer": estonia_armada,
  "militer_strategis": estonia_strategis,
  "armada_kepolisian": estonia_kepolisian,
  "pabrik_militer": estonia_pabrik,
  "intelijen": estonia_intelijen,
    "pendidikan": estonia_pendidikan,
  "kesehatan": estonia_kesehatan,
  "hukum": estonia_hukum,
  "sektor_olahraga": estonia_olahraga,
  "sektor_komersial": estonia_komersial,
  "sektor_hiburan": estonia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 16
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 23
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 31,
      "kepuasan": 88,
      "pendapatan": 31
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 6 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 19
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 7.2,
    "harga_telur": 62.2,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": estonia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 2,
    "pendidikan": 23,
    "keamanan": 14,
    "keuangan": 12,
    "lingkungan": 60
  }
};





