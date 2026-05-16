// @ts-nocheck
const fiji_profile = {
  "name_en": "Fiji",
  "capital": "Suva",
  "name_id": "Fiji",
  "lon": 175,
  "lat": -18,
  "flag": "ðŸ‡«ðŸ‡¯",
  "jumlah_penduduk": 902623,
  "anggaran": 49,
  "pendapatan_nasional": "139",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const fiji_geopolitik = {
    "un_vote": 113,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 37,
      "kekuatan_keras": 16,
      "prestise_diplomatik": 57
    }
  };

const fiji = {
  ...fiji_profile,
  "sektor_listrik": fiji_listrik,
  "hunian": fiji_hunian,
  "infrastruktur": fiji_infrastruktur,
  "sektor_ekstraksi": fiji_ekstraksi,
  "sektor_manufaktur": fiji_manufaktur,
  "sektor_peternakan": fiji_peternakan,
  "sektor_agrikultur": fiji_agrikultur,
  "sektor_perikanan": fiji_perikanan,
  "sektor_olahan_pangan": fiji_olahan_pangan,
  "sektor_farmasi": fiji_farmasi,
  "sektor_pertahanan": fiji_pertahanan,
  "armada_militer": fiji_armada,
  "militer_strategis": fiji_strategis,
  "armada_kepolisian": fiji_kepolisian,
  "pabrik_militer": fiji_pabrik,
  "intelijen": fiji_intelijen,
    "pendidikan": fiji_pendidikan,
  "kesehatan": fiji_kesehatan,
  "hukum": fiji_hukum,
  "sektor_olahraga": fiji_olahraga,
  "sektor_komersial": fiji_komersial,
  "sektor_hiburan": fiji_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 4,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 20,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 4,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 82,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": fiji_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 8,
    "pendidikan": 4,
    "keamanan": 17,
    "keuangan": 18,
    "lingkungan": 60
  }
};





