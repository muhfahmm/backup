export const venezuela_profile = {
  "name_en": "Venezuela",
  "capital": "Caracas",
  "name_id": "Venezuela",
  "lon": -66,
  "lat": 8,
  "flag": "🇻🇪",
  "jumlah_penduduk": 28300000,
  "anggaran": 924,
  "pendapatan_nasional": "2639",
  "religion": "Katolik",
  "ideology": "Sosialisme"
} as const;

import { venezuela_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/sa/207_venezuela";
import { venezuela_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/sa/207_venezuela";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { venezuela_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/sa/207_venezuela";

import { venezuela_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/sa/207_venezuela";
import { venezuela_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/sa/207_venezuela";
import { venezuela_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/sa/207_venezuela";
import { venezuela_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/sa/207_venezuela";
import { venezuela_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/sa/207_venezuela";
import { venezuela_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/sa/207_venezuela";
import { venezuela_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/sa/207_venezuela";
import { venezuela_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/sa/207_venezuela";
import { venezuela_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/sa/207_venezuela";
import { venezuela_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/sa/207_venezuela";
import { venezuela_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/sa/207_venezuela";
import { venezuela_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/sa/207_venezuela";
import { venezuela_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/sa/207_venezuela";
import { venezuela_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/sa/207_venezuela";
import { venezuela_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/sa/207_venezuela";
import { venezuela_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/sa/207_venezuela";
import { venezuela_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/sa/207_venezuela";
import { venezuela_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/sa/207_venezuela";
import { venezuela_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/sa/207_venezuela";
const venezuela_geopolitik = {
    "un_vote": 195,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 40,
      "kekuatan_keras": 34,
      "prestise_diplomatik": 57
    }
  } as const;

export const venezuela: CountryData = {
  ...venezuela_profile,
  "sektor_listrik": venezuela_listrik,
  "hunian": venezuela_hunian,
  "infrastruktur": venezuela_infrastruktur,
  "sektor_ekstraksi": venezuela_ekstraksi,
  "sektor_manufaktur": venezuela_manufaktur,
  "sektor_peternakan": venezuela_peternakan,
  "sektor_agrikultur": venezuela_agrikultur,
  "sektor_perikanan": venezuela_perikanan,
  "sektor_olahan_pangan": venezuela_olahan_pangan,
  "sektor_farmasi": venezuela_farmasi,
  "sektor_pertahanan": venezuela_pertahanan,
  "armada_militer": venezuela_armada,
  "militer_strategis": venezuela_strategis,
  "armada_kepolisian": venezuela_kepolisian,
  "pabrik_militer": venezuela_pabrik,
  "intelijen": venezuela_intelijen,
    "pendidikan": venezuela_pendidikan,
  "kesehatan": venezuela_kesehatan,
  "hukum": venezuela_hukum,
  "sektor_olahraga": venezuela_olahraga,
  "sektor_komersial": venezuela_komersial,
  "sektor_hiburan": venezuela_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 75
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 19
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 85
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 41
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 14 },
    "lainnya": {
      "tarif": 4,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 20.16,
    "harga_telur": 15.55,
    "harga_bbm": 8.56,
    "harga_listrik": 3.2,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": venezuela_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 28,
    "pendidikan": 26,
    "keamanan": 11,
    "keuangan": 8,
    "lingkungan": 60
  }
};


