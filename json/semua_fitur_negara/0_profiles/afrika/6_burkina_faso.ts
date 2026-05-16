// @ts-nocheck
const burkina_faso_profile = {
  "name_en": "Burkina Faso",
  "capital": "Ouagadougou",
  "name_id": "Burkina faso",
  "lon": -2,
  "lat": 13,
  "flag": "ðŸ‡§ðŸ‡«",
  "jumlah_penduduk": 22185654,
  "anggaran": 175,
  "pendapatan_nasional": "500",
  "religion": "Islam",
  "ideology": "Nasionalisme"
};


const burkina_faso_geopolitik = {
    "un_vote": 46,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 15,
      "kekuatan_keras": 7,
      "prestise_diplomatik": 57
  }
  };

const burkina_faso = {
  ...burkina_faso_profile,
  "sektor_listrik": burkina_faso_listrik,
  "hunian": burkina_faso_hunian,
  "infrastruktur": burkina_faso_infrastruktur,
  "sektor_ekstraksi": burkina_faso_ekstraksi,
  "sektor_manufaktur": burkina_faso_manufaktur,
  "sektor_peternakan": burkina_faso_peternakan,
  "sektor_agrikultur": burkina_faso_agrikultur,
  "sektor_perikanan": burkina_faso_perikanan,
  "sektor_olahan_pangan": burkina_faso_olahan_pangan,
  "sektor_farmasi": burkina_faso_farmasi,
  "sektor_pertahanan": burkina_faso_pertahanan,
  "armada_militer": burkina_faso_armada,
  "militer_strategis": burkina_faso_strategis,
  "armada_kepolisian": burkina_faso_kepolisian,
  "pabrik_militer": burkina_faso_pabrik,
  "intelijen": burkina_faso_intelijen,
    "pendidikan": burkina_faso_pendidikan,
  "kesehatan": burkina_faso_kesehatan,
  "hukum": burkina_faso_hukum,
  "sektor_olahraga": burkina_faso_olahraga,
  "sektor_komersial": burkina_faso_komersial,
  "sektor_hiburan": burkina_faso_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 29,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 16,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 11
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 82,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 8.56,
    "harga_listrik": 1.28,
    "harga_air": 10.4,
    "harga_obat": 221.06,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": burkina_faso_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 29,
    "pendidikan": 20,
    "keamanan": 1,
    "keuangan": 21,
    "lingkungan": 60
  }
};





