export const finlandia_profile = {
  "name_en": "Finland",
  "capital": "Helsinki",
  "name_id": "Finlandia",
  "lon": 24.93,
  "lat": 60.16,
  "flag": "🇫🇮",
  "jumlah_penduduk": 5650933,
  "anggaran": 2917,
  "pendapatan_nasional": "8334",
  "religion": "Protestan",
  "ideology": "Sosialisme"
} as const;

import { finlandia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/114_finlandia";
import { finlandia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/114_finlandia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { finlandia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/114_finlandia";

import { finlandia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/114_finlandia";
import { finlandia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/114_finlandia";
import { finlandia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/114_finlandia";
import { finlandia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/114_finlandia";
import { finlandia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/114_finlandia";
import { finlandia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/114_finlandia";
import { finlandia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/114_finlandia";
import { finlandia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/114_finlandia";
import { finlandia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/114_finlandia";
import { finlandia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/114_finlandia";
import { finlandia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/114_finlandia";
import { finlandia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/114_finlandia";
import { finlandia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/114_finlandia";
import { finlandia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/114_finlandia";
import { finlandia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/114_finlandia";
import { finlandia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/114_finlandia";
import { finlandia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/114_finlandia";
import { finlandia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/114_finlandia";
import { finlandia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/114_finlandia";
const finlandia_geopolitik = {
    "un_vote": 156,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 22,
      "kekuatan_keras": 6,
      "prestise_diplomatik": 57
    }
  } as const;

export const finlandia: CountryData = {
  ...finlandia_profile,
  "sektor_listrik": finlandia_listrik,
  "hunian": finlandia_hunian,
  "infrastruktur": finlandia_infrastruktur,
  "sektor_ekstraksi": finlandia_ekstraksi,
  "sektor_manufaktur": finlandia_manufaktur,
  "sektor_peternakan": finlandia_peternakan,
  "sektor_agrikultur": finlandia_agrikultur,
  "sektor_perikanan": finlandia_perikanan,
  "sektor_olahan_pangan": finlandia_olahan_pangan,
  "sektor_farmasi": finlandia_farmasi,
  "sektor_pertahanan": finlandia_pertahanan,
  "armada_militer": finlandia_armada,
  "militer_strategis": finlandia_strategis,
  "armada_kepolisian": finlandia_kepolisian,
  "pabrik_militer": finlandia_pabrik,
  "intelijen": finlandia_intelijen,
    "pendidikan": finlandia_pendidikan,
  "kesehatan": finlandia_kesehatan,
  "hukum": finlandia_hukum,
  "sektor_olahraga": finlandia_olahraga,
  "sektor_komersial": finlandia_komersial,
  "sektor_hiburan": finlandia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 23,
      "kepuasan": 52,
      "pendapatan": 113
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 99
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 82
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 63
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 15 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 44 },
    "lainnya": {
      "tarif": 18,
      "kepuasan": 93,
      "pendapatan": 93
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 24.88,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": finlandia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 13,
    "pendidikan": 14,
    "keamanan": 27,
    "keuangan": 36,
    "lingkungan": 60
  }
};


