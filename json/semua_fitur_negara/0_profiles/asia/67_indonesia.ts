// @ts-nocheck

const indonesia_profile = {
  "name_en": "Indonesia",
  "capital": "Jakarta",
  "name_id": "Indonesia",
  "lon": 106.84,
  "lat": -6.2,
  "flag": "ðŸ‡®ðŸ‡©",
  "jumlah_penduduk": 288315089,
  "anggaran": 13807,
  "pendapatan_nasional": "39448",
  "religion": "Islam",
  "ideology": "Demokrasi"
};

const indonesia_geopolitik = {
    "un_vote": 128,
    "reputasi_diplomatik": "Unggul",
    "aliansi_aktif": ["Amerika Serikat", "Jepang", "Australia", "India"],
    "pengaruh_global": 78.2,
    "peringkat_diplomasi": 12,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 8,
      "kekuatan_keras": 7,
      "prestise_diplomatik": 57
    }
  };

const indonesia = {
  ...indonesia_profile,
  "sektor_listrik": indonesia_listrik,
  "infrastruktur": indonesia_infrastruktur,
  "sektor_ekstraksi": indonesia_ekstraksi,
  "sektor_manufaktur": indonesia_manufaktur,
  "sektor_peternakan": indonesia_peternakan,
  "sektor_agrikultur": indonesia_agrikultur,
  "sektor_perikanan": indonesia_perikanan,
  "sektor_olahan_pangan": indonesia_olahan_pangan,
  "sektor_farmasi": indonesia_farmasi,
  "sektor_pertahanan": indonesia_pertahanan,
  "armada_militer": indonesia_armada,
  "militer_strategis": indonesia_strategis,
  "armada_kepolisian": indonesia_kepolisian,
  "pabrik_militer": indonesia_pabrik,
  "intelijen": indonesia_intelijen,
    "pendidikan": indonesia_pendidikan,
  "kesehatan": indonesia_kesehatan,
  "hukum": indonesia_hukum,
  "sektor_olahraga": indonesia_olahraga,
  "sektor_komersial": indonesia_komersial,
  "sektor_hiburan": indonesia_hiburan,
  "hunian": indonesia_hunian,
  "pajak": {
    "ppn": { "nama": "Pajak Pertambahan Nilai", "tarif": 11, "pendapatan": 450 },
    "korporasi": { "nama": "Pajak Korporasi", "tarif": 22, "pendapatan": 380 },
    "penghasilan": { "nama": "Pajak Penghasilan", "tarif": 15, "pendapatan": 520 },
    "cukai_rokok": { "nama": "Cukai Hasil Tembakau", "tarif": 10, "pendapatan": 120 }
  },
  "harga": {
    "harga_beras": 14500,
    "harga_bbm": 12500,
    "harga_listrik": 1500,
    "indeks_konsumen": 105.4
  },
  "geopolitik": indonesia_geopolitik
};

