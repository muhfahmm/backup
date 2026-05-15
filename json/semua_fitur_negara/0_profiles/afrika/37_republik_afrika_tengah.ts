export const republik_afrika_tengah_profile = {
  "name_en": "Central African Republic",
  "capital": "Bangui",
  "name_id": "Republik afrika tengah",
  "lon": 21,
  "lat": 7,
  "flag": "🇨🇫",
  "jumlah_penduduk": 5330690,
  "anggaran": 24,
  "pendapatan_nasional": "69",
  "religion": "Protestan",
  "ideology": "Nasionalisme"
} as const;

import { republik_afrika_tengah_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/37_republik_afrika_tengah";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { republik_afrika_tengah_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/37_republik_afrika_tengah";

import { republik_afrika_tengah_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/37_republik_afrika_tengah";
const republik_afrika_tengah_geopolitik = {
    "un_vote": 66,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 23,
      "kekuatan_keras": 20,
      "prestise_diplomatik": 57
  }
  } as const;

export const republik_afrika_tengah: CountryData = {
  ...republik_afrika_tengah_profile,
  "sektor_listrik": republik_afrika_tengah_listrik,
  "hunian": republik_afrika_tengah_hunian,
  "infrastruktur": republik_afrika_tengah_infrastruktur,
  "sektor_ekstraksi": republik_afrika_tengah_ekstraksi,
  "sektor_manufaktur": republik_afrika_tengah_manufaktur,
  "sektor_peternakan": republik_afrika_tengah_peternakan,
  "sektor_agrikultur": republik_afrika_tengah_agrikultur,
  "sektor_perikanan": republik_afrika_tengah_perikanan,
  "sektor_olahan_pangan": republik_afrika_tengah_olahan_pangan,
  "sektor_farmasi": republik_afrika_tengah_farmasi,
  "sektor_pertahanan": republik_afrika_tengah_pertahanan,
  "armada_militer": republik_afrika_tengah_armada,
  "militer_strategis": republik_afrika_tengah_strategis,
  "armada_kepolisian": republik_afrika_tengah_kepolisian,
  "pabrik_militer": republik_afrika_tengah_pabrik,
  "intelijen": republik_afrika_tengah_intelijen,
    "pendidikan": republik_afrika_tengah_pendidikan,
  "kesehatan": republik_afrika_tengah_kesehatan,
  "hukum": republik_afrika_tengah_hukum,
  "sektor_olahraga": republik_afrika_tengah_olahraga,
  "sektor_komersial": republik_afrika_tengah_komersial,
  "sektor_hiburan": republik_afrika_tengah_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 24,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 2.24,
    "harga_air": 4.16,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_afrika_tengah_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 9,
    "pendidikan": 38,
    "keamanan": 22,
    "keuangan": 32,
    "lingkungan": 60
  }
};


