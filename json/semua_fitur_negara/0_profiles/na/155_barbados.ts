// @ts-nocheck
const barbados_profile = {
  "name_en": "Barbados",
  "capital": "Bridgetown",
  "name_id": "Barbados",
  "lon": -59.53333333,
  "lat": 13.16666666,
  "flag": "ðŸ‡§ðŸ‡§",
  "jumlah_penduduk": 267800,
  "anggaran": 53,
  "pendapatan_nasional": "153",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const barbados_geopolitik = {
    "un_vote": 10,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 4,
      "kekuatan_keras": 9,
      "prestise_diplomatik": 57
    }
  };

const barbados = {
  ...barbados_profile,
  "sektor_listrik": barbados_listrik,
  "hunian": barbados_hunian,
  "infrastruktur": barbados_infrastruktur,
  "sektor_ekstraksi": barbados_ekstraksi,
  "sektor_manufaktur": barbados_manufaktur,
  "sektor_peternakan": barbados_peternakan,
  "sektor_agrikultur": barbados_agrikultur,
  "sektor_perikanan": barbados_perikanan,
  "sektor_olahan_pangan": barbados_olahan_pangan,
  "sektor_farmasi": barbados_farmasi,
  "sektor_pertahanan": barbados_pertahanan,
  "armada_militer": barbados_armada,
  "militer_strategis": barbados_strategis,
  "armada_kepolisian": barbados_kepolisian,
  "pabrik_militer": barbados_pabrik,
  "intelijen": barbados_intelijen,
    "pendidikan": barbados_pendidikan,
  "kesehatan": barbados_kesehatan,
  "hukum": barbados_hukum,
  "sektor_olahraga": barbados_olahraga,
  "sektor_komersial": barbados_komersial,
  "sektor_hiburan": barbados_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 9,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 28.8,
    "harga_telur": 31.1,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": barbados_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 4,
    "keamanan": 12,
    "keuangan": 26,
    "lingkungan": 60
  }
};





