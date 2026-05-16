// @ts-nocheck
const jerman_profile = {
  "name_en": "Germany",
  "capital": "Berlin",
  "name_id": "Jerman",
  "lon": 13.4,
  "lat": 52.52,
  "flag": "ðŸ‡©ðŸ‡ª",
  "jumlah_penduduk": 83497147,
  "anggaran": 44629,
  "pendapatan_nasional": "127510",
  "religion": "Protestan",
  "ideology": "Kapitalisme"
};


const jerman_geopolitik = {
    "un_vote": 197,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 30,
      "kekuatan_keras": 18,
      "prestise_diplomatik": 57
    }
  };

const jerman = {
  ...jerman_profile,
  "sektor_listrik": jerman_listrik,
  "hunian": jerman_hunian,
  "infrastruktur": jerman_infrastruktur,
  "sektor_ekstraksi": jerman_ekstraksi,
  "sektor_manufaktur": jerman_manufaktur,
  "sektor_peternakan": jerman_peternakan,
  "sektor_agrikultur": jerman_agrikultur,
  "sektor_perikanan": jerman_perikanan,
  "sektor_olahan_pangan": jerman_olahan_pangan,
  "sektor_farmasi": jerman_farmasi,
  "sektor_pertahanan": jerman_pertahanan,
  "armada_militer": jerman_armada,
  "militer_strategis": jerman_strategis,
  "armada_kepolisian": jerman_kepolisian,
  "pabrik_militer": jerman_pabrik,
  "intelijen": jerman_intelijen,
    "pendidikan": jerman_pendidikan,
  "kesehatan": jerman_kesehatan,
  "hukum": jerman_hukum,
  "sektor_olahraga": jerman_olahraga,
  "sektor_komersial": jerman_komersial,
  "sektor_hiburan": jerman_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 1299
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 283
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 1963
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 775
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 1581
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 224 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 670 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 931
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": jerman_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 30,
    "pendidikan": 35,
    "keamanan": 12,
    "keuangan": 17,
    "lingkungan": 60
  }
};





