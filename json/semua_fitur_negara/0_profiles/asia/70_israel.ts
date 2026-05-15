export const israel_profile = {
  "name_en": "Israel",
  "capital": "Jerusalem",
  "name_id": "Israel",
  "lon": 35.21,
  "lat": 31.76,
  "flag": "🇮🇱",
  "jumlah_penduduk": 10244000,
  "anggaran": 5056,
  "pendapatan_nasional": "14446",
  "religion": "Yahudi",
  "ideology": "Kapitalisme"
} as const;

import { israel_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/70_israel";
import { israel_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/70_israel";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { israel_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/70_israel";

import { israel_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/70_israel";
import { israel_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/70_israel";
import { israel_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/70_israel";
import { israel_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/70_israel";
import { israel_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/70_israel";
import { israel_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/70_israel";
import { israel_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/70_israel";
import { israel_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/70_israel";
import { israel_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/70_israel";
import { israel_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/70_israel";
import { israel_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/70_israel";
import { israel_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/70_israel";
import { israel_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/70_israel";
import { israel_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/70_israel";
import { israel_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/70_israel";
import { israel_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/70_israel";
import { israel_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/70_israel";
import { israel_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/70_israel";
import { israel_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/70_israel";
const israel_geopolitik = {
    "un_vote": 199,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 37,
      "kekuatan_keras": 17,
      "prestise_diplomatik": 57
    }
  } as const;

export const israel: CountryData = {
  ...israel_profile,
  "sektor_listrik": israel_listrik,
  "hunian": israel_hunian,
  "infrastruktur": israel_infrastruktur,
  "sektor_ekstraksi": israel_ekstraksi,
  "sektor_manufaktur": israel_manufaktur,
  "sektor_peternakan": israel_peternakan,
  "sektor_agrikultur": israel_agrikultur,
  "sektor_perikanan": israel_perikanan,
  "sektor_olahan_pangan": israel_olahan_pangan,
  "sektor_farmasi": israel_farmasi,
  "sektor_pertahanan": israel_pertahanan,
  "armada_militer": israel_armada,
  "militer_strategis": israel_strategis,
  "armada_kepolisian": israel_kepolisian,
  "pabrik_militer": israel_pabrik,
  "intelijen": israel_intelijen,
    "pendidikan": israel_pendidikan,
  "kesehatan": israel_kesehatan,
  "hukum": israel_hukum,
  "sektor_olahraga": israel_olahraga,
  "sektor_komersial": israel_komersial,
  "sektor_hiburan": israel_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 40
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 160
    },
    "penghasilan": {
      "tarif": 17,
      "kepuasan": 61,
      "pendapatan": 97
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 58
    },
    "lingkungan": {
      "tarif": 17,
      "kepuasan": 88,
      "pendapatan": 139
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 26 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 76 },
    "lainnya": {
      "tarif": 37,
      "kepuasan": 93,
      "pendapatan": 383
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 28.8,
    "harga_telur": 62.2,
    "harga_bbm": 10.7,
    "harga_listrik": 0.8,
    "harga_air": 7.28,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": israel_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 16,
    "keamanan": 39,
    "keuangan": 31,
    "lingkungan": 60
  }
};


