export const swedia_profile = {
  "name_en": "Sweden",
  "capital": "Stockholm",
  "name_id": "Swedia",
  "lon": 18.06,
  "lat": 59.32,
  "flag": "🇸🇪",
  "jumlah_penduduk": 10604061,
  "anggaran": 5834,
  "pendapatan_nasional": "16668",
  "religion": "Protestan",
  "ideology": "Sosialisme"
} as const;

import { swedia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/146_swedia";
import { swedia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/146_swedia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { swedia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/146_swedia";

import { swedia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/146_swedia";
import { swedia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/146_swedia";
import { swedia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/146_swedia";
import { swedia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/146_swedia";
import { swedia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/146_swedia";
import { swedia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/146_swedia";
import { swedia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/146_swedia";
import { swedia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/146_swedia";
import { swedia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/146_swedia";
import { swedia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/146_swedia";
import { swedia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/146_swedia";
import { swedia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/146_swedia";
import { swedia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/146_swedia";
import { swedia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/146_swedia";
import { swedia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/146_swedia";
import { swedia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/146_swedia";
import { swedia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/146_swedia";
import { swedia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/146_swedia";
import { swedia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/146_swedia";
const swedia_geopolitik = {
    "un_vote": 90,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 3,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  } as const;

export const swedia: CountryData = {
  ...swedia_profile,
  "sektor_listrik": swedia_listrik,
  "hunian": swedia_hunian,
  "infrastruktur": swedia_infrastruktur,
  "sektor_ekstraksi": swedia_ekstraksi,
  "sektor_manufaktur": swedia_manufaktur,
  "sektor_peternakan": swedia_peternakan,
  "sektor_agrikultur": swedia_agrikultur,
  "sektor_perikanan": swedia_perikanan,
  "sektor_olahan_pangan": swedia_olahan_pangan,
  "sektor_farmasi": swedia_farmasi,
  "sektor_pertahanan": swedia_pertahanan,
  "armada_militer": swedia_armada,
  "militer_strategis": swedia_strategis,
  "armada_kepolisian": swedia_kepolisian,
  "pabrik_militer": swedia_pabrik,
  "intelijen": swedia_intelijen,
    "pendidikan": swedia_pendidikan,
  "kesehatan": swedia_kesehatan,
  "hukum": swedia_hukum,
  "sektor_olahraga": swedia_olahraga,
  "sektor_komersial": swedia_komersial,
  "sektor_hiburan": swedia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 76
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 631
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 301
    },
    "lingkungan": {
      "tarif": 39,
      "kepuasan": 88,
      "pendapatan": 543
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 30 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 88 },
    "lainnya": {
      "tarif": 24,
      "kepuasan": 93,
      "pendapatan": 414
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 11.52,
    "harga_telur": 62.2,
    "harga_bbm": 5.35,
    "harga_listrik": 3.2,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": swedia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 13,
    "pendidikan": 8,
    "keamanan": 34,
    "keuangan": 8,
    "lingkungan": 60
  }
};


