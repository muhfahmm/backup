// @ts-nocheck
const bermuda_profile = {
  "name_en": "Bermuda",
  "capital": "Hamilton",
  "name_id": "Bermuda",
  "lon": -64.75,
  "lat": 32.33333333,
  "flag": "ðŸ‡§ðŸ‡²",
  "jumlah_penduduk": 64636,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const bermuda_geopolitik = {
    "un_vote": 22,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 5,
      "kekuatan_keras": 22,
      "prestise_diplomatik": 57
    }
  };

const bermuda = {
  ...bermuda_profile,
  "sektor_listrik": bermuda_listrik,
  "hunian": bermuda_hunian,
  "infrastruktur": bermuda_infrastruktur,
  "sektor_ekstraksi": bermuda_ekstraksi,
  "sektor_manufaktur": bermuda_manufaktur,
  "sektor_peternakan": bermuda_peternakan,
  "sektor_agrikultur": bermuda_agrikultur,
  "sektor_perikanan": bermuda_perikanan,
  "sektor_olahan_pangan": bermuda_olahan_pangan,
  "sektor_farmasi": bermuda_farmasi,
  "sektor_pertahanan": bermuda_pertahanan,
  "armada_militer": bermuda_armada,
  "militer_strategis": bermuda_strategis,
  "armada_kepolisian": bermuda_kepolisian,
  "pabrik_militer": bermuda_pabrik,
  "intelijen": bermuda_intelijen,
    "pendidikan": bermuda_pendidikan,
  "kesehatan": bermuda_kesehatan,
  "hukum": bermuda_hukum,
  "sektor_olahraga": bermuda_olahraga,
  "sektor_komersial": bermuda_komersial,
  "sektor_hiburan": bermuda_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 26,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 20,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 3.2,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": bermuda_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 33,
    "pendidikan": 35,
    "keamanan": 27,
    "keuangan": 38,
    "lingkungan": 60
  }
};





