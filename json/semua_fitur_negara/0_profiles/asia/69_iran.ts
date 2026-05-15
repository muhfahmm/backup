export const iran_profile = {
  "name_en": "Iran",
  "capital": "Tehran",
  "name_id": "Iran",
  "lon": 51.38,
  "lat": 35.68,
  "flag": "🇮🇷",
  "jumlah_penduduk": 86563000,
  "anggaran": 3598,
  "pendapatan_nasional": "10279",
  "religion": "Islam",
  "ideology": "Konservatisme"
} as const;

import { iran_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/69_iran";
import { iran_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/69_iran";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { iran_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/69_iran";

import { iran_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/69_iran";
import { iran_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/69_iran";
import { iran_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/69_iran";
import { iran_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/69_iran";
import { iran_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/69_iran";
import { iran_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/69_iran";
import { iran_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/69_iran";
import { iran_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/69_iran";
import { iran_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/69_iran";
import { iran_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/69_iran";
import { iran_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/69_iran";
import { iran_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/69_iran";
import { iran_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/69_iran";
import { iran_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/69_iran";
import { iran_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/69_iran";
import { iran_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/69_iran";
import { iran_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/69_iran";
import { iran_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/69_iran";
import { iran_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/69_iran";
const iran_geopolitik = {
    "un_vote": 191,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 14,
      "kekuatan_keras": 38,
      "prestise_diplomatik": 57
    }
  } as const;

export const iran: CountryData = {
  ...iran_profile,
  "sektor_listrik": iran_listrik,
  "hunian": iran_hunian,
  "infrastruktur": iran_infrastruktur,
  "sektor_ekstraksi": iran_ekstraksi,
  "sektor_manufaktur": iran_manufaktur,
  "sektor_peternakan": iran_peternakan,
  "sektor_agrikultur": iran_agrikultur,
  "sektor_perikanan": iran_perikanan,
  "sektor_olahan_pangan": iran_olahan_pangan,
  "sektor_farmasi": iran_farmasi,
  "sektor_pertahanan": iran_pertahanan,
  "armada_militer": iran_armada,
  "militer_strategis": iran_strategis,
  "armada_kepolisian": iran_kepolisian,
  "pabrik_militer": iran_pabrik,
  "intelijen": iran_intelijen,
    "pendidikan": iran_pendidikan,
  "kesehatan": iran_kesehatan,
  "hukum": iran_hukum,
  "sektor_olahraga": iran_olahraga,
  "sektor_komersial": iran_komersial,
  "sektor_hiburan": iran_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 267
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 395
    },
    "penghasilan": {
      "tarif": 7,
      "kepuasan": 61,
      "pendapatan": 60
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 74
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 137
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 18 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 54 },
    "lainnya": {
      "tarif": 18,
      "kepuasan": 93,
      "pendapatan": 131
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 43.54,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": iran_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 5,
    "pendidikan": 16,
    "keamanan": 24,
    "keuangan": 4,
    "lingkungan": 60
  }
};


