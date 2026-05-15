export const republik_timor_leste_profile = {
  "name_en": "Timor-Leste",
  "capital": "Dili",
  "name_id": "Republik timor-leste",
  "lon": 125.91666666,
  "lat": -8.83333333,
  "flag": "🇹🇱",
  "jumlah_penduduk": "10M",
  "anggaran": 19,
  "pendapatan_nasional": "56",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { republik_timor_leste_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/90_republik_timor_leste";
import { republik_timor_leste_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/90_republik_timor_leste";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { republik_timor_leste_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/90_republik_timor_leste";

import { republik_timor_leste_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/90_republik_timor_leste";
import { republik_timor_leste_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/90_republik_timor_leste";
import { republik_timor_leste_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/90_republik_timor_leste";
import { republik_timor_leste_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/90_republik_timor_leste";
import { republik_timor_leste_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/90_republik_timor_leste";
import { republik_timor_leste_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/90_republik_timor_leste";
import { republik_timor_leste_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/90_republik_timor_leste";
import { republik_timor_leste_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/90_republik_timor_leste";
import { republik_timor_leste_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/90_republik_timor_leste";
import { republik_timor_leste_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/90_republik_timor_leste";
import { republik_timor_leste_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/90_republik_timor_leste";
import { republik_timor_leste_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/90_republik_timor_leste";
import { republik_timor_leste_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/90_republik_timor_leste";
import { republik_timor_leste_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/90_republik_timor_leste";
import { republik_timor_leste_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/90_republik_timor_leste";
import { republik_timor_leste_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/90_republik_timor_leste";
import { republik_timor_leste_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/90_republik_timor_leste";
import { republik_timor_leste_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/90_republik_timor_leste";
import { republik_timor_leste_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/90_republik_timor_leste";
const republik_timor_leste_geopolitik = {
    "un_vote": 33,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 29,
      "kekuatan_keras": 27,
      "prestise_diplomatik": 57
    }
  } as const;

export const republik_timor_leste: CountryData = {
  ...republik_timor_leste_profile,
  "sektor_listrik": republik_timor_leste_listrik,
  "hunian": republik_timor_leste_hunian,
  "infrastruktur": republik_timor_leste_infrastruktur,
  "sektor_ekstraksi": republik_timor_leste_ekstraksi,
  "sektor_manufaktur": republik_timor_leste_manufaktur,
  "sektor_peternakan": republik_timor_leste_peternakan,
  "sektor_agrikultur": republik_timor_leste_agrikultur,
  "sektor_perikanan": republik_timor_leste_perikanan,
  "sektor_olahan_pangan": republik_timor_leste_olahan_pangan,
  "sektor_farmasi": republik_timor_leste_farmasi,
  "sektor_pertahanan": republik_timor_leste_pertahanan,
  "armada_militer": republik_timor_leste_armada,
  "militer_strategis": republik_timor_leste_strategis,
  "armada_kepolisian": republik_timor_leste_kepolisian,
  "pabrik_militer": republik_timor_leste_pabrik,
  "intelijen": republik_timor_leste_intelijen,
    "pendidikan": republik_timor_leste_pendidikan,
  "kesehatan": republik_timor_leste_kesehatan,
  "hukum": republik_timor_leste_hukum,
  "sektor_olahraga": republik_timor_leste_olahraga,
  "sektor_komersial": republik_timor_leste_komersial,
  "sektor_hiburan": republik_timor_leste_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 27,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 11.52,
    "harga_telur": 62.2,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_timor_leste_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 29,
    "keamanan": 8,
    "keuangan": 29,
    "lingkungan": 60
  }
};


