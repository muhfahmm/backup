// @ts-nocheck
const madagaskar_profile = {
  "name_en": "Madagascar",
  "capital": "Antananarivo",
  "name_id": "Madagaskar",
  "lon": 47.31,
  "lat": -18.55,
  "flag": "ðŸ‡²ðŸ‡¬",
  "jumlah_penduduk": 28915653,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Protestan",
  "ideology": "Demokrasi"
};


const madagaskar_geopolitik = {
    "un_vote": 87,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 29,
      "kekuatan_keras": 3,
      "prestise_diplomatik": 57
  }
  };

const madagaskar = {
  ...madagaskar_profile,
  "sektor_listrik": madagaskar_listrik,
  "hunian": madagaskar_hunian,
  "infrastruktur": madagaskar_infrastruktur,
  "sektor_ekstraksi": madagaskar_ekstraksi,
  "sektor_manufaktur": madagaskar_manufaktur,
  "sektor_peternakan": madagaskar_peternakan,
  "sektor_agrikultur": madagaskar_agrikultur,
  "sektor_perikanan": madagaskar_perikanan,
  "sektor_olahan_pangan": madagaskar_olahan_pangan,
  "sektor_farmasi": madagaskar_farmasi,
  "sektor_pertahanan": madagaskar_pertahanan,
  "armada_militer": madagaskar_armada,
  "militer_strategis": madagaskar_strategis,
  "armada_kepolisian": madagaskar_kepolisian,
  "pabrik_militer": madagaskar_pabrik,
  "intelijen": madagaskar_intelijen,
    "pendidikan": madagaskar_pendidikan,
  "kesehatan": madagaskar_kesehatan,
  "hukum": madagaskar_hukum,
  "sektor_olahraga": madagaskar_olahraga,
  "sektor_komersial": madagaskar_komersial,
  "sektor_hiburan": madagaskar_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 7
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 0.8,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": madagaskar_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 18,
    "pendidikan": 23,
    "keamanan": 22,
    "keuangan": 30,
    "lingkungan": 60
  }
};





