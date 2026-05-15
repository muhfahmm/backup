export const bangladesh_profile = {
  "name_en": "Bangladesh",
  "capital": "Dhaka",
  "name_id": "Bangladesh",
  "lon": 90,
  "lat": 24,
  "flag": "🇧🇩",
  "jumlah_penduduk": 169828911,
  "anggaran": 4473,
  "pendapatan_nasional": "12779",
  "religion": "Islam",
  "ideology": "Demokrasi"
} as const;

import { bangladesh_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/59_bangladesh";
import { bangladesh_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/59_bangladesh";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { bangladesh_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/59_bangladesh";

import { bangladesh_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/59_bangladesh";
import { bangladesh_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/59_bangladesh";
import { bangladesh_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/59_bangladesh";
import { bangladesh_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/59_bangladesh";
import { bangladesh_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/59_bangladesh";
import { bangladesh_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/59_bangladesh";
import { bangladesh_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/59_bangladesh";
import { bangladesh_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/59_bangladesh";
import { bangladesh_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/59_bangladesh";
import { bangladesh_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/59_bangladesh";
import { bangladesh_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/59_bangladesh";
import { bangladesh_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/59_bangladesh";
import { bangladesh_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/59_bangladesh";
import { bangladesh_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/59_bangladesh";
import { bangladesh_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/59_bangladesh";
import { bangladesh_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/59_bangladesh";
import { bangladesh_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/59_bangladesh";
import { bangladesh_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/59_bangladesh";
import { bangladesh_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/59_bangladesh";
const bangladesh_geopolitik = {
    "un_vote": 118,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 7,
      "kekuatan_keras": 15,
      "prestise_diplomatik": 57
    }
  } as const;

export const bangladesh: CountryData = {
  ...bangladesh_profile,
  "sektor_listrik": bangladesh_listrik,
  "hunian": bangladesh_hunian,
  "infrastruktur": bangladesh_infrastruktur,
  "sektor_ekstraksi": bangladesh_ekstraksi,
  "sektor_manufaktur": bangladesh_manufaktur,
  "sektor_peternakan": bangladesh_peternakan,
  "sektor_agrikultur": bangladesh_agrikultur,
  "sektor_perikanan": bangladesh_perikanan,
  "sektor_olahan_pangan": bangladesh_olahan_pangan,
  "sektor_farmasi": bangladesh_farmasi,
  "sektor_pertahanan": bangladesh_pertahanan,
  "armada_militer": bangladesh_armada,
  "militer_strategis": bangladesh_strategis,
  "armada_kepolisian": bangladesh_kepolisian,
  "pabrik_militer": bangladesh_pabrik,
  "intelijen": bangladesh_intelijen,
    "pendidikan": bangladesh_pendidikan,
  "kesehatan": bangladesh_kesehatan,
  "hukum": bangladesh_hukum,
  "sektor_olahraga": bangladesh_olahraga,
  "sektor_komersial": bangladesh_komersial,
  "sektor_hiburan": bangladesh_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 7,
      "kepuasan": 67,
      "pendapatan": 58
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 156
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 55
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 39
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 248
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 23 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 68 },
    "lainnya": {
      "tarif": 9,
      "kepuasan": 93,
      "pendapatan": 96
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 5.35,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": bangladesh_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 36,
    "pendidikan": 22,
    "keamanan": 36,
    "keuangan": 17,
    "lingkungan": 60
  }
};


