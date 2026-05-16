// @ts-nocheck
const botswana_profile = {
  "name_en": "Botswana",
  "capital": "Gaborone",
  "name_id": "Botswana",
  "lon": 24,
  "lat": -22,
  "flag": "ðŸ‡§ðŸ‡¼",
  "jumlah_penduduk": 2675063,
  "anggaran": 194,
  "pendapatan_nasional": "556",
  "religion": "Protestan",
  "ideology": "Kapitalisme"
};


const botswana_geopolitik = {
    "un_vote": 48,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 13,
      "kekuatan_keras": 15,
      "prestise_diplomatik": 57
  }
  };

const botswana = {
  ...botswana_profile,
  "sektor_listrik": botswana_listrik,
  "hunian": botswana_hunian,
  "infrastruktur": botswana_infrastruktur,
  "sektor_ekstraksi": botswana_ekstraksi,
  "sektor_manufaktur": botswana_manufaktur,
  "sektor_peternakan": botswana_peternakan,
  "sektor_agrikultur": botswana_agrikultur,
  "sektor_perikanan": botswana_perikanan,
  "sektor_olahan_pangan": botswana_olahan_pangan,
  "sektor_farmasi": botswana_farmasi,
  "sektor_pertahanan": botswana_pertahanan,
  "armada_militer": botswana_armada,
  "militer_strategis": botswana_strategis,
  "armada_kepolisian": botswana_kepolisian,
  "pabrik_militer": botswana_pabrik,
  "intelijen": botswana_intelijen,
    "pendidikan": botswana_pendidikan,
  "kesehatan": botswana_kesehatan,
  "hukum": botswana_hukum,
  "sektor_olahraga": botswana_olahraga,
  "sektor_komersial": botswana_komersial,
  "sektor_hiburan": botswana_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 23,
      "kepuasan": 86,
      "pendapatan": 9
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 24.88,
    "harga_bbm": 21.4,
    "harga_listrik": 1.28,
    "harga_air": 7.28,
    "harga_obat": 221.06,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": botswana_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 16,
    "keamanan": 9,
    "keuangan": 18,
    "lingkungan": 60
  }
};





