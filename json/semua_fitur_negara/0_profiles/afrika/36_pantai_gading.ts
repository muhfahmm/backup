// @ts-nocheck
const pantai_gading_profile = {
  "name_en": "Ivory Coast",
  "capital": "Yamoussoukro",
  "name_id": "Pantai gading",
  "lon": -5,
  "lat": 8,
  "flag": "ðŸ‡¨ðŸ‡®",
  "jumlah_penduduk": 28357022,
  "anggaran": 681,
  "pendapatan_nasional": "1945",
  "religion": "Islam",
  "ideology": "Kapitalisme"
};


const pantai_gading_geopolitik = {
    "un_vote": 51,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 12,
      "kekuatan_keras": 1,
      "prestise_diplomatik": 57
  }
  };

const pantai_gading = {
  ...pantai_gading_profile,
  "sektor_listrik": pantai_gading_listrik,
  "hunian": pantai_gading_hunian,
  "infrastruktur": pantai_gading_infrastruktur,
  "sektor_ekstraksi": pantai_gading_ekstraksi,
  "sektor_manufaktur": pantai_gading_manufaktur,
  "sektor_peternakan": pantai_gading_peternakan,
  "sektor_agrikultur": pantai_gading_agrikultur,
  "sektor_perikanan": pantai_gading_perikanan,
  "sektor_olahan_pangan": pantai_gading_olahan_pangan,
  "sektor_farmasi": pantai_gading_farmasi,
  "sektor_pertahanan": pantai_gading_pertahanan,
  "armada_militer": pantai_gading_armada,
  "militer_strategis": pantai_gading_strategis,
  "armada_kepolisian": pantai_gading_kepolisian,
  "pabrik_militer": pantai_gading_pabrik,
  "intelijen": pantai_gading_intelijen,
    "pendidikan": pantai_gading_pendidikan,
  "kesehatan": pantai_gading_kesehatan,
  "hukum": pantai_gading_hukum,
  "sektor_olahraga": pantai_gading_olahraga,
  "sektor_komersial": pantai_gading_komersial,
  "sektor_hiburan": pantai_gading_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 51
    },
    "korporasi": {
      "tarif": 34,
      "kepuasan": 52,
      "pendapatan": 63
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 23,
      "kepuasan": 86,
      "pendapatan": 21
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 50
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 6
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 41,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 4.16,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": pantai_gading_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 21,
    "pendidikan": 27,
    "keamanan": 9,
    "keuangan": 4,
    "lingkungan": 60
  }
};





