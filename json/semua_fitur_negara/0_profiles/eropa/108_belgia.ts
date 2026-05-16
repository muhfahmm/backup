// @ts-nocheck
const belgia_profile = {
  "name_en": "Belgium",
  "capital": "Brussels",
  "name_id": "Belgia",
  "lon": 4.35,
  "lat": 50.85,
  "flag": "ðŸ‡§ðŸ‡ª",
  "jumlah_penduduk": 11930567,
  "anggaran": 6077,
  "pendapatan_nasional": "17362",
  "religion": "Katolik",
  "ideology": "Sosialisme"
};


const belgia_geopolitik = {
    "un_vote": 189,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 39,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  };

const belgia = {
  ...belgia_profile,
  "sektor_listrik": belgia_listrik,
  "hunian": belgia_hunian,
  "infrastruktur": belgia_infrastruktur,
  "sektor_ekstraksi": belgia_ekstraksi,
  "sektor_manufaktur": belgia_manufaktur,
  "sektor_peternakan": belgia_peternakan,
  "sektor_agrikultur": belgia_agrikultur,
  "sektor_perikanan": belgia_perikanan,
  "sektor_olahan_pangan": belgia_olahan_pangan,
  "sektor_farmasi": belgia_farmasi,
  "sektor_pertahanan": belgia_pertahanan,
  "armada_militer": belgia_armada,
  "militer_strategis": belgia_strategis,
  "armada_kepolisian": belgia_kepolisian,
  "pabrik_militer": belgia_pabrik,
  "intelijen": belgia_intelijen,
    "pendidikan": belgia_pendidikan,
  "kesehatan": belgia_kesehatan,
  "hukum": belgia_hukum,
  "sektor_olahraga": belgia_olahraga,
  "sektor_komersial": belgia_komersial,
  "sektor_hiburan": belgia_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 101
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 194
    },
    "penghasilan": {
      "tarif": 8,
      "kepuasan": 61,
      "pendapatan": 83
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 555
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 71
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 31 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 92 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 146
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": belgia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 26,
    "keamanan": 34,
    "keuangan": 20,
    "lingkungan": 60
  }
};





