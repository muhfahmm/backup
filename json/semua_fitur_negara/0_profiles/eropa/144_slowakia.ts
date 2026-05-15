export const slowakia_profile = {
  "name_en": "Slovakia",
  "capital": "Bratislava",
  "name_id": "Slowakia",
  "lon": 19.5,
  "lat": 48.66666666,
  "flag": "🇸🇰",
  "jumlah_penduduk": 5423229,
  "anggaran": 1264,
  "pendapatan_nasional": "3611",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { slowakia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/144_slowakia";
import { slowakia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/144_slowakia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { slowakia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/144_slowakia";

import { slowakia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/144_slowakia";
import { slowakia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/144_slowakia";
import { slowakia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/144_slowakia";
import { slowakia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/144_slowakia";
import { slowakia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/144_slowakia";
import { slowakia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/144_slowakia";
import { slowakia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/144_slowakia";
import { slowakia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/144_slowakia";
import { slowakia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/144_slowakia";
import { slowakia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/144_slowakia";
import { slowakia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/144_slowakia";
import { slowakia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/144_slowakia";
import { slowakia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/144_slowakia";
import { slowakia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/144_slowakia";
import { slowakia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/144_slowakia";
import { slowakia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/144_slowakia";
import { slowakia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/144_slowakia";
import { slowakia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/144_slowakia";
import { slowakia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/144_slowakia";
const slowakia_geopolitik = {
    "un_vote": 176,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 13,
      "kekuatan_keras": 38,
      "prestise_diplomatik": 57
    }
  } as const;

export const slowakia: CountryData = {
  ...slowakia_profile,
  "sektor_listrik": slowakia_listrik,
  "hunian": slowakia_hunian,
  "infrastruktur": slowakia_infrastruktur,
  "sektor_ekstraksi": slowakia_ekstraksi,
  "sektor_manufaktur": slowakia_manufaktur,
  "sektor_peternakan": slowakia_peternakan,
  "sektor_agrikultur": slowakia_agrikultur,
  "sektor_perikanan": slowakia_perikanan,
  "sektor_olahan_pangan": slowakia_olahan_pangan,
  "sektor_farmasi": slowakia_farmasi,
  "sektor_pertahanan": slowakia_pertahanan,
  "armada_militer": slowakia_armada,
  "militer_strategis": slowakia_strategis,
  "armada_kepolisian": slowakia_kepolisian,
  "pabrik_militer": slowakia_pabrik,
  "intelijen": slowakia_intelijen,
    "pendidikan": slowakia_pendidikan,
  "kesehatan": slowakia_kesehatan,
  "hukum": slowakia_hukum,
  "sektor_olahraga": slowakia_olahraga,
  "sektor_komersial": slowakia_komersial,
  "sektor_hiburan": slowakia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 13,
      "kepuasan": 67,
      "pendapatan": 25
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 39
    },
    "penghasilan": {
      "tarif": 38,
      "kepuasan": 61,
      "pendapatan": 89
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 56
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 7 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 19 },
    "lainnya": {
      "tarif": 32,
      "kepuasan": 93,
      "pendapatan": 94
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 43.54,
    "harga_bbm": 14.98,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": slowakia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 22,
    "pendidikan": 30,
    "keamanan": 14,
    "keuangan": 28,
    "lingkungan": 60
  }
};


