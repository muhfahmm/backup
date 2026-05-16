// @ts-nocheck
const kroasia_profile = {
  "name_en": "Croatia",
  "capital": "Zagreb",
  "name_id": "Kroasia",
  "lon": 15.5,
  "lat": 45.16666666,
  "flag": "ðŸ‡­ðŸ‡·",
  "jumlah_penduduk": 3866233,
  "anggaran": 758,
  "pendapatan_nasional": "2167",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const kroasia_geopolitik = {
    "un_vote": 129,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 35,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  };

const kroasia = {
  ...kroasia_profile,
  "sektor_listrik": kroasia_listrik,
  "hunian": kroasia_hunian,
  "infrastruktur": kroasia_infrastruktur,
  "sektor_ekstraksi": kroasia_ekstraksi,
  "sektor_manufaktur": kroasia_manufaktur,
  "sektor_peternakan": kroasia_peternakan,
  "sektor_agrikultur": kroasia_agrikultur,
  "sektor_perikanan": kroasia_perikanan,
  "sektor_olahan_pangan": kroasia_olahan_pangan,
  "sektor_farmasi": kroasia_farmasi,
  "sektor_pertahanan": kroasia_pertahanan,
  "armada_militer": kroasia_armada,
  "militer_strategis": kroasia_strategis,
  "armada_kepolisian": kroasia_kepolisian,
  "pabrik_militer": kroasia_pabrik,
  "intelijen": kroasia_intelijen,
    "pendidikan": kroasia_pendidikan,
  "kesehatan": kroasia_kesehatan,
  "hukum": kroasia_hukum,
  "sektor_olahraga": kroasia_olahraga,
  "sektor_komersial": kroasia_komersial,
  "sektor_hiburan": kroasia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 33
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 55
    },
    "bea_cukai": {
      "tarif": 39,
      "kepuasan": 86,
      "pendapatan": 63
    },
    "lingkungan": {
      "tarif": 20,
      "kepuasan": 88,
      "pendapatan": 27
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 22
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 82,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 0.8,
    "harga_air": 4.16,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kroasia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 36,
    "pendidikan": 8,
    "keamanan": 33,
    "keuangan": 35,
    "lingkungan": 60
  }
};





