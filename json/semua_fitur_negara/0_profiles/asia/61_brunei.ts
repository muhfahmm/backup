// @ts-nocheck
const brunei_profile = {
  "name_en": "Brunei",
  "capital": "Bandar Seri Begawan",
  "name_id": "Brunei",
  "lon": 114.94,
  "lat": 4.89,
  "flag": "ðŸ‡§ðŸ‡³",
  "jumlah_penduduk": 458600,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Islam",
  "ideology": "Monarki"
};


const brunei_geopolitik = {
    "un_vote": 114,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 33,
      "kekuatan_keras": 22,
      "prestise_diplomatik": 57
    }
  };

const brunei = {
  ...brunei_profile,
  "sektor_listrik": brunei_listrik,
  "hunian": brunei_hunian,
  "infrastruktur": brunei_infrastruktur,
  "sektor_ekstraksi": brunei_ekstraksi,
  "sektor_manufaktur": brunei_manufaktur,
  "sektor_peternakan": brunei_peternakan,
  "sektor_agrikultur": brunei_agrikultur,
  "sektor_perikanan": brunei_perikanan,
  "sektor_olahan_pangan": brunei_olahan_pangan,
  "sektor_farmasi": brunei_farmasi,
  "sektor_pertahanan": brunei_pertahanan,
  "armada_militer": brunei_armada,
  "militer_strategis": brunei_strategis,
  "armada_kepolisian": brunei_kepolisian,
  "pabrik_militer": brunei_pabrik,
  "intelijen": brunei_intelijen,
    "pendidikan": brunei_pendidikan,
  "kesehatan": brunei_kesehatan,
  "hukum": brunei_hukum,
  "sektor_olahraga": brunei_olahraga,
  "sektor_komersial": brunei_komersial,
  "sektor_hiburan": brunei_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 4
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 78.95,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": brunei_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 9,
    "pendidikan": 24,
    "keamanan": 13,
    "keuangan": 14,
    "lingkungan": 60
  }
};





