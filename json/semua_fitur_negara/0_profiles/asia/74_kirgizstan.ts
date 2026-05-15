export const kirgizstan_profile = {
  "name_en": "Kyrgyzstan",
  "capital": "Bishkek",
  "name_id": "Kirgizstan",
  "lon": 75,
  "lat": 41,
  "flag": "🇰🇬",
  "jumlah_penduduk": 6132932,
  "anggaran": 117,
  "pendapatan_nasional": "333",
  "religion": "Islam",
  "ideology": "Demokrasi"
} as const;

import { kirgizstan_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/74_kirgizstan";
import { kirgizstan_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/74_kirgizstan";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { kirgizstan_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/74_kirgizstan";

import { kirgizstan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/74_kirgizstan";
import { kirgizstan_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/74_kirgizstan";
import { kirgizstan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/74_kirgizstan";
import { kirgizstan_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/74_kirgizstan";
import { kirgizstan_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/74_kirgizstan";
import { kirgizstan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/74_kirgizstan";
import { kirgizstan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/74_kirgizstan";
import { kirgizstan_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/74_kirgizstan";
import { kirgizstan_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/74_kirgizstan";
import { kirgizstan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/74_kirgizstan";
import { kirgizstan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/74_kirgizstan";
import { kirgizstan_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/74_kirgizstan";
import { kirgizstan_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/74_kirgizstan";
import { kirgizstan_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/74_kirgizstan";
import { kirgizstan_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/74_kirgizstan";
import { kirgizstan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/74_kirgizstan";
import { kirgizstan_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/74_kirgizstan";
import { kirgizstan_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/74_kirgizstan";
import { kirgizstan_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/74_kirgizstan";
const kirgizstan_geopolitik = {
    "un_vote": 19,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 15,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  } as const;

export const kirgizstan: CountryData = {
  ...kirgizstan_profile,
  "sektor_listrik": kirgizstan_listrik,
  "hunian": kirgizstan_hunian,
  "infrastruktur": kirgizstan_infrastruktur,
  "sektor_ekstraksi": kirgizstan_ekstraksi,
  "sektor_manufaktur": kirgizstan_manufaktur,
  "sektor_peternakan": kirgizstan_peternakan,
  "sektor_agrikultur": kirgizstan_agrikultur,
  "sektor_perikanan": kirgizstan_perikanan,
  "sektor_olahan_pangan": kirgizstan_olahan_pangan,
  "sektor_farmasi": kirgizstan_farmasi,
  "sektor_pertahanan": kirgizstan_pertahanan,
  "armada_militer": kirgizstan_armada,
  "militer_strategis": kirgizstan_strategis,
  "armada_kepolisian": kirgizstan_kepolisian,
  "pabrik_militer": kirgizstan_pabrik,
  "intelijen": kirgizstan_intelijen,
    "pendidikan": kirgizstan_pendidikan,
  "kesehatan": kirgizstan_kesehatan,
  "hukum": kirgizstan_hukum,
  "sektor_olahraga": kirgizstan_olahraga,
  "sektor_komersial": kirgizstan_komersial,
  "sektor_hiburan": kirgizstan_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 38,
      "kepuasan": 61,
      "pendapatan": 9
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 0.8,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kirgizstan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 1,
    "keamanan": 37,
    "keuangan": 26,
    "lingkungan": 60
  }
};


