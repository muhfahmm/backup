export const lesotho_profile = {
  "name_en": "Lesotho",
  "capital": "Maseru",
  "name_id": "Lesotho",
  "lon": 28.5,
  "lat": -29.5,
  "flag": "🇱🇸",
  "jumlah_penduduk": 2337423,
  "anggaran": 24,
  "pendapatan_nasional": "69",
  "religion": "Katolik",
  "ideology": "Monarki"
} as const;

import { lesotho_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/22_lesotho";
import { lesotho_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/22_lesotho";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { lesotho_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/22_lesotho";

import { lesotho_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/22_lesotho";
import { lesotho_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/22_lesotho";
import { lesotho_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/22_lesotho";
import { lesotho_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/22_lesotho";
import { lesotho_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/22_lesotho";
import { lesotho_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/22_lesotho";
import { lesotho_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/22_lesotho";
import { lesotho_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/22_lesotho";
import { lesotho_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/22_lesotho";
import { lesotho_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/22_lesotho";
import { lesotho_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/22_lesotho";
import { lesotho_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/22_lesotho";
import { lesotho_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/22_lesotho";
import { lesotho_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/22_lesotho";
import { lesotho_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/22_lesotho";
import { lesotho_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/22_lesotho";
import { lesotho_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/22_lesotho";
import { lesotho_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/22_lesotho";
import { lesotho_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/22_lesotho";
const lesotho_geopolitik = {
    "un_vote": 115,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 23,
      "prestise_diplomatik": 57
  }
  } as const;

export const lesotho: CountryData = {
  ...lesotho_profile,
  "sektor_listrik": lesotho_listrik,
  "hunian": lesotho_hunian,
  "infrastruktur": lesotho_infrastruktur,
  "sektor_ekstraksi": lesotho_ekstraksi,
  "sektor_manufaktur": lesotho_manufaktur,
  "sektor_peternakan": lesotho_peternakan,
  "sektor_agrikultur": lesotho_agrikultur,
  "sektor_perikanan": lesotho_perikanan,
  "sektor_olahan_pangan": lesotho_olahan_pangan,
  "sektor_farmasi": lesotho_farmasi,
  "sektor_pertahanan": lesotho_pertahanan,
  "armada_militer": lesotho_armada,
  "militer_strategis": lesotho_strategis,
  "armada_kepolisian": lesotho_kepolisian,
  "pabrik_militer": lesotho_pabrik,
  "intelijen": lesotho_intelijen,
    "pendidikan": lesotho_pendidikan,
  "kesehatan": lesotho_kesehatan,
  "hukum": lesotho_hukum,
  "sektor_olahraga": lesotho_olahraga,
  "sektor_komersial": lesotho_komersial,
  "sektor_hiburan": lesotho_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 28.8,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": lesotho_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 29,
    "pendidikan": 9,
    "keamanan": 11,
    "keuangan": 33,
    "lingkungan": 60
  }
};


