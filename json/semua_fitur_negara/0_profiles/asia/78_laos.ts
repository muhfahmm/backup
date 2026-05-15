export const laos_profile = {
  "name_en": "Laos",
  "capital": "Vientiane",
  "name_id": "Laos",
  "lon": 102.63,
  "lat": 17.97,
  "flag": "🇱🇦",
  "jumlah_penduduk": 6961210,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Buddha",
  "ideology": "Komunisme"
} as const;

import { laos_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/78_laos";
import { laos_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/78_laos";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { laos_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/78_laos";

import { laos_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/78_laos";
import { laos_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/78_laos";
import { laos_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/78_laos";
import { laos_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/78_laos";
import { laos_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/78_laos";
import { laos_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/78_laos";
import { laos_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/78_laos";
import { laos_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/78_laos";
import { laos_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/78_laos";
import { laos_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/78_laos";
import { laos_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/78_laos";
import { laos_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/78_laos";
import { laos_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/78_laos";
import { laos_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/78_laos";
import { laos_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/78_laos";
import { laos_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/78_laos";
import { laos_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/78_laos";
import { laos_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/78_laos";
import { laos_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/78_laos";
const laos_geopolitik = {
    "un_vote": 21,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 14,
      "prestise_diplomatik": 57
    }
  } as const;

export const laos: CountryData = {
  ...laos_profile,
  "sektor_listrik": laos_listrik,
  "hunian": laos_hunian,
  "infrastruktur": laos_infrastruktur,
  "sektor_ekstraksi": laos_ekstraksi,
  "sektor_manufaktur": laos_manufaktur,
  "sektor_peternakan": laos_peternakan,
  "sektor_agrikultur": laos_agrikultur,
  "sektor_perikanan": laos_perikanan,
  "sektor_olahan_pangan": laos_olahan_pangan,
  "sektor_farmasi": laos_farmasi,
  "sektor_pertahanan": laos_pertahanan,
  "armada_militer": laos_armada,
  "militer_strategis": laos_strategis,
  "armada_kepolisian": laos_kepolisian,
  "pabrik_militer": laos_pabrik,
  "intelijen": laos_intelijen,
    "pendidikan": laos_pendidikan,
  "kesehatan": laos_kesehatan,
  "hukum": laos_hukum,
  "sektor_olahraga": laos_olahraga,
  "sektor_komersial": laos_komersial,
  "sektor_hiburan": laos_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 32,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 13,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 8,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 11.52,
    "harga_telur": 24.88,
    "harga_bbm": 5.35,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": laos_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 2,
    "pendidikan": 12,
    "keamanan": 39,
    "keuangan": 5,
    "lingkungan": 60
  }
};


