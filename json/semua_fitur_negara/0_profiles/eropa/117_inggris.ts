export const inggris_profile = {
  "name_en": "United Kingdom",
  "capital": "London",
  "name_id": "Inggris",
  "lon": -0.12,
  "lat": 51.5,
  "flag": "🇬🇧",
  "jumlah_penduduk": 69487000,
  "anggaran": 34030,
  "pendapatan_nasional": "97230",
  "religion": "Protestan",
  "ideology": "Kapitalisme"
} as const;

import { inggris_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/117_inggris";
import { inggris_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/117_inggris";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { inggris_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/117_inggris";

import { inggris_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/117_inggris";
import { inggris_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/117_inggris";
import { inggris_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/117_inggris";
import { inggris_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/117_inggris";
import { inggris_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/117_inggris";
import { inggris_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/117_inggris";
import { inggris_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/117_inggris";
import { inggris_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/117_inggris";
import { inggris_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/117_inggris";
import { inggris_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/117_inggris";
import { inggris_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/117_inggris";
import { inggris_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/117_inggris";
import { inggris_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/117_inggris";
import { inggris_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/117_inggris";
import { inggris_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/117_inggris";
import { inggris_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/117_inggris";
import { inggris_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/117_inggris";
import { inggris_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/117_inggris";
import { inggris_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/117_inggris";
const inggris_geopolitik = {
    "un_vote": 181,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 3,
      "kekuatan_keras": 29,
      "prestise_diplomatik": 57
    }
  } as const;

export const inggris: CountryData = {
  ...inggris_profile,
  "sektor_listrik": inggris_listrik,
  "hunian": inggris_hunian,
  "infrastruktur": inggris_infrastruktur,
  "sektor_ekstraksi": inggris_ekstraksi,
  "sektor_manufaktur": inggris_manufaktur,
  "sektor_peternakan": inggris_peternakan,
  "sektor_agrikultur": inggris_agrikultur,
  "sektor_perikanan": inggris_perikanan,
  "sektor_olahan_pangan": inggris_olahan_pangan,
  "sektor_farmasi": inggris_farmasi,
  "sektor_pertahanan": inggris_pertahanan,
  "armada_militer": inggris_armada,
  "militer_strategis": inggris_strategis,
  "armada_kepolisian": inggris_kepolisian,
  "pabrik_militer": inggris_pabrik,
  "intelijen": inggris_intelijen,
    "pendidikan": inggris_pendidikan,
  "kesehatan": inggris_kesehatan,
  "hukum": inggris_hukum,
  "sektor_olahraga": inggris_olahraga,
  "sektor_komersial": inggris_komersial,
  "sektor_hiburan": inggris_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 1495
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 1669
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 2342
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 3052
    },
    "lingkungan": {
      "tarif": 31,
      "kepuasan": 88,
      "pendapatan": 1976
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 171 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 511 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 641
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 7.28,
    "harga_obat": 221.06,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": inggris_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 32,
    "pendidikan": 31,
    "keamanan": 5,
    "keuangan": 2,
    "lingkungan": 60
  }
};


