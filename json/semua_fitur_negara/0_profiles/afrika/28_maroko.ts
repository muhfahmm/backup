export const maroko_profile = {
  "name_en": "Morocco",
  "capital": "Rabat",
  "name_id": "Maroko",
  "lon": -5,
  "lat": 32,
  "flag": "🇲🇦",
  "jumlah_penduduk": 36828330,
  "anggaran": 1313,
  "pendapatan_nasional": "3750",
  "religion": "Islam",
  "ideology": "Monarki"
} as const;

import { maroko_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/28_maroko";
import { maroko_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/28_maroko";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { maroko_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/28_maroko";

import { maroko_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/28_maroko";
import { maroko_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/28_maroko";
import { maroko_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/28_maroko";
import { maroko_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/28_maroko";
import { maroko_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/28_maroko";
import { maroko_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/28_maroko";
import { maroko_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/28_maroko";
import { maroko_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/28_maroko";
import { maroko_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/28_maroko";
import { maroko_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/28_maroko";
import { maroko_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/28_maroko";
import { maroko_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/28_maroko";
import { maroko_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/28_maroko";
import { maroko_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/28_maroko";
import { maroko_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/28_maroko";
import { maroko_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/28_maroko";
import { maroko_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/28_maroko";
import { maroko_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/28_maroko";
import { maroko_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/28_maroko";
const maroko_geopolitik = {
    "un_vote": 109,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 5,
      "kekuatan_keras": 28,
      "prestise_diplomatik": 57
  }
  } as const;

export const maroko: CountryData = {
  ...maroko_profile,
  "sektor_listrik": maroko_listrik,
  "hunian": maroko_hunian,
  "infrastruktur": maroko_infrastruktur,
  "sektor_ekstraksi": maroko_ekstraksi,
  "sektor_manufaktur": maroko_manufaktur,
  "sektor_peternakan": maroko_peternakan,
  "sektor_agrikultur": maroko_agrikultur,
  "sektor_perikanan": maroko_perikanan,
  "sektor_olahan_pangan": maroko_olahan_pangan,
  "sektor_farmasi": maroko_farmasi,
  "sektor_pertahanan": maroko_pertahanan,
  "armada_militer": maroko_armada,
  "militer_strategis": maroko_strategis,
  "armada_kepolisian": maroko_kepolisian,
  "pabrik_militer": maroko_pabrik,
  "intelijen": maroko_intelijen,
    "pendidikan": maroko_pendidikan,
  "kesehatan": maroko_kesehatan,
  "hukum": maroko_hukum,
  "sektor_olahraga": maroko_olahraga,
  "sektor_komersial": maroko_komersial,
  "sektor_hiburan": maroko_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 67
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 102
    },
    "penghasilan": {
      "tarif": 37,
      "kepuasan": 61,
      "pendapatan": 127
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 73
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 51
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 7 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 20 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 10
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 2.6,
    "harga_obat": 78.95,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": maroko_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 21,
    "pendidikan": 29,
    "keamanan": 9,
    "keuangan": 14,
    "lingkungan": 60
  }
};


