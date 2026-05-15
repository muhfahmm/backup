export const liberia_profile = {
  "name_en": "Liberia",
  "capital": "Monrovia",
  "name_id": "Liberia",
  "lon": -9.5,
  "lat": 6.5,
  "flag": "🇱🇷",
  "jumlah_penduduk": 5612817,
  "anggaran": 39,
  "pendapatan_nasional": "111",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { liberia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/23_liberia";
import { liberia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/23_liberia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { liberia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/23_liberia";

import { liberia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/23_liberia";
import { liberia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/23_liberia";
import { liberia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/23_liberia";
import { liberia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/23_liberia";
import { liberia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/23_liberia";
import { liberia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/23_liberia";
import { liberia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/23_liberia";
import { liberia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/23_liberia";
import { liberia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/23_liberia";
import { liberia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/23_liberia";
import { liberia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/23_liberia";
import { liberia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/23_liberia";
import { liberia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/23_liberia";
import { liberia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/23_liberia";
import { liberia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/23_liberia";
import { liberia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/23_liberia";
import { liberia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/23_liberia";
import { liberia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/23_liberia";
import { liberia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/23_liberia";
const liberia_geopolitik = {
    "un_vote": 93,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 39,
      "kekuatan_keras": 8,
      "prestise_diplomatik": 57
  }
  } as const;

export const liberia: CountryData = {
  ...liberia_profile,
  "sektor_listrik": liberia_listrik,
  "hunian": liberia_hunian,
  "infrastruktur": liberia_infrastruktur,
  "sektor_ekstraksi": liberia_ekstraksi,
  "sektor_manufaktur": liberia_manufaktur,
  "sektor_peternakan": liberia_peternakan,
  "sektor_agrikultur": liberia_agrikultur,
  "sektor_perikanan": liberia_perikanan,
  "sektor_olahan_pangan": liberia_olahan_pangan,
  "sektor_farmasi": liberia_farmasi,
  "sektor_pertahanan": liberia_pertahanan,
  "armada_militer": liberia_armada,
  "militer_strategis": liberia_strategis,
  "armada_kepolisian": liberia_kepolisian,
  "pabrik_militer": liberia_pabrik,
  "intelijen": liberia_intelijen,
    "pendidikan": liberia_pendidikan,
  "kesehatan": liberia_kesehatan,
  "hukum": liberia_hukum,
  "sektor_olahraga": liberia_olahraga,
  "sektor_komersial": liberia_komersial,
  "sektor_hiburan": liberia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 24,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 82,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 20.16,
    "harga_telur": 62.2,
    "harga_bbm": 14.98,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 78.95,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": liberia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 7,
    "pendidikan": 21,
    "keamanan": 36,
    "keuangan": 3,
    "lingkungan": 60
  }
};


