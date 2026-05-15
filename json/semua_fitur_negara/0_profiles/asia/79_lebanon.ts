export const lebanon_profile = {
  "name_en": "Lebanon",
  "capital": "Beirut",
  "name_id": "Lebanon",
  "lon": 35.83333333,
  "lat": 33.83333333,
  "flag": "🇱🇧",
  "jumlah_penduduk": 6093509,
  "anggaran": 175,
  "pendapatan_nasional": "500",
  "religion": "Islam",
  "ideology": "Demokrasi"
} as const;

import { lebanon_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/79_lebanon";
import { lebanon_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/79_lebanon";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { lebanon_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/79_lebanon";

import { lebanon_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/79_lebanon";
import { lebanon_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/79_lebanon";
import { lebanon_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/79_lebanon";
import { lebanon_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/79_lebanon";
import { lebanon_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/79_lebanon";
import { lebanon_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/79_lebanon";
import { lebanon_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/79_lebanon";
import { lebanon_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/79_lebanon";
import { lebanon_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/79_lebanon";
import { lebanon_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/79_lebanon";
import { lebanon_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/79_lebanon";
import { lebanon_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/79_lebanon";
import { lebanon_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/79_lebanon";
import { lebanon_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/79_lebanon";
import { lebanon_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/79_lebanon";
import { lebanon_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/79_lebanon";
import { lebanon_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/79_lebanon";
import { lebanon_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/79_lebanon";
import { lebanon_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/79_lebanon";
const lebanon_geopolitik = {
    "un_vote": 183,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 38,
      "kekuatan_keras": 37,
      "prestise_diplomatik": 57
    }
  } as const;

export const lebanon: CountryData = {
  ...lebanon_profile,
  "sektor_listrik": lebanon_listrik,
  "hunian": lebanon_hunian,
  "infrastruktur": lebanon_infrastruktur,
  "sektor_ekstraksi": lebanon_ekstraksi,
  "sektor_manufaktur": lebanon_manufaktur,
  "sektor_peternakan": lebanon_peternakan,
  "sektor_agrikultur": lebanon_agrikultur,
  "sektor_perikanan": lebanon_perikanan,
  "sektor_olahan_pangan": lebanon_olahan_pangan,
  "sektor_farmasi": lebanon_farmasi,
  "sektor_pertahanan": lebanon_pertahanan,
  "armada_militer": lebanon_armada,
  "militer_strategis": lebanon_strategis,
  "armada_kepolisian": lebanon_kepolisian,
  "pabrik_militer": lebanon_pabrik,
  "intelijen": lebanon_intelijen,
    "pendidikan": lebanon_pendidikan,
  "kesehatan": lebanon_kesehatan,
  "hukum": lebanon_hukum,
  "sektor_olahraga": lebanon_olahraga,
  "sektor_komersial": lebanon_komersial,
  "sektor_hiburan": lebanon_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 13
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 15,
      "kepuasan": 93,
      "pendapatan": 6
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 21.4,
    "harga_listrik": 0.8,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": lebanon_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 8,
    "keamanan": 6,
    "keuangan": 13,
    "lingkungan": 60
  }
};


