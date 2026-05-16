// @ts-nocheck
const belanda_profile = {
  "name_en": "Netherlands",
  "capital": "Amsterdam",
  "name_id": "Belanda",
  "lon": 4.9,
  "lat": 52.36,
  "flag": "ðŸ‡³ðŸ‡±",
  "jumlah_penduduk": 18137265,
  "anggaran": 10598,
  "pendapatan_nasional": "30280",
  "religion": "Protestan",
  "ideology": "Kapitalisme"
};


const belanda_geopolitik = {
    "un_vote": 196,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 22,
      "prestise_diplomatik": 57
    }
  };

const belanda = {
  ...belanda_profile,
  "sektor_listrik": belanda_listrik,
  "hunian": belanda_hunian,
  "infrastruktur": belanda_infrastruktur,
  "sektor_ekstraksi": belanda_ekstraksi,
  "sektor_manufaktur": belanda_manufaktur,
  "sektor_peternakan": belanda_peternakan,
  "sektor_agrikultur": belanda_agrikultur,
  "sektor_perikanan": belanda_perikanan,
  "sektor_olahan_pangan": belanda_olahan_pangan,
  "sektor_farmasi": belanda_farmasi,
  "sektor_pertahanan": belanda_pertahanan,
  "armada_militer": belanda_armada,
  "militer_strategis": belanda_strategis,
  "armada_kepolisian": belanda_kepolisian,
  "pabrik_militer": belanda_pabrik,
  "intelijen": belanda_intelijen,
    "pendidikan": belanda_pendidikan,
  "kesehatan": belanda_kesehatan,
  "hukum": belanda_hukum,
  "sektor_olahraga": belanda_olahraga,
  "sektor_komersial": belanda_komersial,
  "sektor_hiburan": belanda_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 271
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 1015
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 489
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 610
    },
    "lingkungan": {
      "tarif": 31,
      "kepuasan": 88,
      "pendapatan": 731
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 53 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 159 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 129
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 7.2,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": belanda_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 23,
    "pendidikan": 25,
    "keamanan": 26,
    "keuangan": 30,
    "lingkungan": 60
  }
};





