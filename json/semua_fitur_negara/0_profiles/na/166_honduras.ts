// @ts-nocheck
const honduras_profile = {
  "name_en": "Honduras",
  "capital": "Tegucigalpa",
  "name_id": "Honduras",
  "lon": -86.5,
  "lat": 15,
  "flag": "ðŸ‡­ðŸ‡³",
  "jumlah_penduduk": 10825703,
  "anggaran": 311,
  "pendapatan_nasional": "889",
  "religion": "Katolik",
  "ideology": "Demokrasi"
};


const honduras_geopolitik = {
    "un_vote": 137,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 35,
      "kekuatan_keras": 12,
      "prestise_diplomatik": 57
    }
  };

const honduras = {
  ...honduras_profile,
  "sektor_listrik": honduras_listrik,
  "hunian": honduras_hunian,
  "infrastruktur": honduras_infrastruktur,
  "sektor_ekstraksi": honduras_ekstraksi,
  "sektor_manufaktur": honduras_manufaktur,
  "sektor_peternakan": honduras_peternakan,
  "sektor_agrikultur": honduras_agrikultur,
  "sektor_perikanan": honduras_perikanan,
  "sektor_olahan_pangan": honduras_olahan_pangan,
  "sektor_farmasi": honduras_farmasi,
  "sektor_pertahanan": honduras_pertahanan,
  "armada_militer": honduras_armada,
  "militer_strategis": honduras_strategis,
  "armada_kepolisian": honduras_kepolisian,
  "pabrik_militer": honduras_pabrik,
  "intelijen": honduras_intelijen,
    "pendidikan": honduras_pendidikan,
  "kesehatan": honduras_kesehatan,
  "hukum": honduras_hukum,
  "sektor_olahraga": honduras_olahraga,
  "sektor_komersial": honduras_komersial,
  "sektor_hiburan": honduras_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 17
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 18
    },
    "penghasilan": {
      "tarif": 16,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 16
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 7
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 16,
      "kepuasan": 93,
      "pendapatan": 13
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 14.98,
    "harga_listrik": 3.2,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": honduras_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 21,
    "pendidikan": 4,
    "keamanan": 14,
    "keuangan": 21,
    "lingkungan": 60
  }
};





