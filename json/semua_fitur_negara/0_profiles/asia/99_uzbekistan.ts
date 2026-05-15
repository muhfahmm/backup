export const uzbekistan_profile = {
  "name_en": "Uzbekistan",
  "capital": "Tashkent",
  "name_id": "Uzbekistan",
  "lon": 64,
  "lat": 41,
  "flag": "🇺🇿",
  "jumlah_penduduk": 38236704,
  "anggaran": 875,
  "pendapatan_nasional": "2500",
  "religion": "Islam",
  "ideology": "Nasionalisme"
} as const;

import { uzbekistan_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/99_uzbekistan";
import { uzbekistan_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/99_uzbekistan";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { uzbekistan_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/99_uzbekistan";

import { uzbekistan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/99_uzbekistan";
import { uzbekistan_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/99_uzbekistan";
import { uzbekistan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/99_uzbekistan";
import { uzbekistan_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/99_uzbekistan";
import { uzbekistan_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/99_uzbekistan";
import { uzbekistan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/99_uzbekistan";
import { uzbekistan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/99_uzbekistan";
import { uzbekistan_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/99_uzbekistan";
import { uzbekistan_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/99_uzbekistan";
import { uzbekistan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/99_uzbekistan";
import { uzbekistan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/99_uzbekistan";
import { uzbekistan_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/99_uzbekistan";
import { uzbekistan_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/99_uzbekistan";
import { uzbekistan_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/99_uzbekistan";
import { uzbekistan_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/99_uzbekistan";
import { uzbekistan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/99_uzbekistan";
import { uzbekistan_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/99_uzbekistan";
import { uzbekistan_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/99_uzbekistan";
import { uzbekistan_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/99_uzbekistan";
const uzbekistan_geopolitik = {
    "un_vote": 80,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 18,
      "kekuatan_keras": 3,
      "prestise_diplomatik": 57
    }
  } as const;

export const uzbekistan: CountryData = {
  ...uzbekistan_profile,
  "sektor_listrik": uzbekistan_listrik,
  "hunian": uzbekistan_hunian,
  "infrastruktur": uzbekistan_infrastruktur,
  "sektor_ekstraksi": uzbekistan_ekstraksi,
  "sektor_manufaktur": uzbekistan_manufaktur,
  "sektor_peternakan": uzbekistan_peternakan,
  "sektor_agrikultur": uzbekistan_agrikultur,
  "sektor_perikanan": uzbekistan_perikanan,
  "sektor_olahan_pangan": uzbekistan_olahan_pangan,
  "sektor_farmasi": uzbekistan_farmasi,
  "sektor_pertahanan": uzbekistan_pertahanan,
  "armada_militer": uzbekistan_armada,
  "militer_strategis": uzbekistan_strategis,
  "armada_kepolisian": uzbekistan_kepolisian,
  "pabrik_militer": uzbekistan_pabrik,
  "intelijen": uzbekistan_intelijen,
    "pendidikan": uzbekistan_pendidikan,
  "kesehatan": uzbekistan_kesehatan,
  "hukum": uzbekistan_hukum,
  "sektor_olahraga": uzbekistan_olahraga,
  "sektor_komersial": uzbekistan_komersial,
  "sektor_hiburan": uzbekistan_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 39
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 74
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 46
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 20
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 14 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 71
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 5.35,
    "harga_listrik": 2.24,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": uzbekistan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 34,
    "pendidikan": 8,
    "keamanan": 24,
    "keuangan": 31,
    "lingkungan": 60
  }
};


