// @ts-nocheck
const libya_profile = {
  "name_en": "Libya",
  "capital": "Tripoli",
  "name_id": "Libya",
  "lon": 13.1,
  "lat": 32.53,
  "flag": "ðŸ‡±ðŸ‡¾",
  "jumlah_penduduk": 7381023,
  "anggaran": 408,
  "pendapatan_nasional": "1167",
  "religion": "Islam",
  "ideology": "Nasionalisme"
};


const libya_geopolitik = {
    "un_vote": 108,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 23,
      "prestise_diplomatik": 57
  }
  };

const libya = {
  ...libya_profile,
  "sektor_listrik": libya_listrik,
  "hunian": libya_hunian,
  "infrastruktur": libya_infrastruktur,
  "sektor_ekstraksi": libya_ekstraksi,
  "sektor_manufaktur": libya_manufaktur,
  "sektor_peternakan": libya_peternakan,
  "sektor_agrikultur": libya_agrikultur,
  "sektor_perikanan": libya_perikanan,
  "sektor_olahan_pangan": libya_olahan_pangan,
  "sektor_farmasi": libya_farmasi,
  "sektor_pertahanan": libya_pertahanan,
  "armada_militer": libya_armada,
  "militer_strategis": libya_strategis,
  "armada_kepolisian": libya_kepolisian,
  "pabrik_militer": libya_pabrik,
  "intelijen": libya_intelijen,
    "pendidikan": libya_pendidikan,
  "kesehatan": libya_kesehatan,
  "hukum": libya_hukum,
  "sektor_olahraga": libya_olahraga,
  "sektor_komersial": libya_komersial,
  "sektor_hiburan": libya_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 18,
      "kepuasan": 61,
      "pendapatan": 16
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 16
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 24
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 43
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 15.55,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 4.16,
    "harga_obat": 221.06,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": libya_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 6,
    "keamanan": 38,
    "keuangan": 22,
    "lingkungan": 60
  }
};





