// @ts-nocheck
const marshall_profile = {
  "name_en": "Marshall Islands",
  "capital": "Majuro",
  "name_id": "Marshall",
  "lon": 168,
  "lat": 9,
  "flag": "ðŸ‡²ðŸ‡­",
  "jumlah_penduduk": 41996,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const marshall_geopolitik = {
    "un_vote": 4,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 22,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  };

const marshall = {
  ...marshall_profile,
  "sektor_listrik": marshall_listrik,
  "hunian": marshall_hunian,
  "infrastruktur": marshall_infrastruktur,
  "sektor_ekstraksi": marshall_ekstraksi,
  "sektor_manufaktur": marshall_manufaktur,
  "sektor_peternakan": marshall_peternakan,
  "sektor_agrikultur": marshall_agrikultur,
  "sektor_perikanan": marshall_perikanan,
  "sektor_olahan_pangan": marshall_olahan_pangan,
  "sektor_farmasi": marshall_farmasi,
  "sektor_pertahanan": marshall_pertahanan,
  "armada_militer": marshall_armada,
  "militer_strategis": marshall_strategis,
  "armada_kepolisian": marshall_kepolisian,
  "pabrik_militer": marshall_pabrik,
  "intelijen": marshall_intelijen,
    "pendidikan": marshall_pendidikan,
  "kesehatan": marshall_kesehatan,
  "hukum": marshall_hukum,
  "sektor_olahraga": marshall_olahraga,
  "sektor_komersial": marshall_komersial,
  "sektor_hiburan": marshall_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 27,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 24,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 34,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 30,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 28.8,
    "harga_telur": 62.2,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 2.6,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": marshall_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 22,
    "pendidikan": 30,
    "keamanan": 30,
    "keuangan": 18,
    "lingkungan": 60
  }
};





