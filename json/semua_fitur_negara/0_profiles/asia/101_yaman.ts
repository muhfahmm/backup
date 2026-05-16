// @ts-nocheck
const yaman_profile = {
  "name_en": "Yemen",
  "capital": "Sana'a",
  "name_id": "Yaman",
  "lon": 48,
  "lat": 15,
  "flag": "ðŸ‡¾ðŸ‡ª",
  "jumlah_penduduk": 33697000,
  "anggaran": 214,
  "pendapatan_nasional": "611",
  "religion": "Islam",
  "ideology": "Nasionalisme"
};


const yaman_geopolitik = {
    "un_vote": 111,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 30,
      "kekuatan_keras": 8,
      "prestise_diplomatik": 57
    }
  };

const yaman = {
  ...yaman_profile,
  "sektor_listrik": yaman_listrik,
  "hunian": yaman_hunian,
  "infrastruktur": yaman_infrastruktur,
  "sektor_ekstraksi": yaman_ekstraksi,
  "sektor_manufaktur": yaman_manufaktur,
  "sektor_peternakan": yaman_peternakan,
  "sektor_agrikultur": yaman_agrikultur,
  "sektor_perikanan": yaman_perikanan,
  "sektor_olahan_pangan": yaman_olahan_pangan,
  "sektor_farmasi": yaman_farmasi,
  "sektor_pertahanan": yaman_pertahanan,
  "armada_militer": yaman_armada,
  "militer_strategis": yaman_strategis,
  "armada_kepolisian": yaman_kepolisian,
  "pabrik_militer": yaman_pabrik,
  "intelijen": yaman_intelijen,
    "pendidikan": yaman_pendidikan,
  "kesehatan": yaman_kesehatan,
  "hukum": yaman_hukum,
  "sektor_olahraga": yaman_olahraga,
  "sektor_komersial": yaman_komersial,
  "sektor_hiburan": yaman_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 22
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 28.8,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 2.6,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": yaman_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 10,
    "keamanan": 34,
    "keuangan": 22,
    "lingkungan": 60
  }
};





