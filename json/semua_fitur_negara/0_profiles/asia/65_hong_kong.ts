export const hong_kong_profile = {
  "name_en": "Hong Kong",
  "capital": "City of Victoria",
  "name_id": "Hong kong",
  "lon": 114.188,
  "lat": 22.267,
  "flag": "🇭🇰",
  "jumlah_penduduk": 7414909,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Buddha",
  "ideology": "Kapitalisme"
} as const;

import { hong_kong_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/65_hong_kong";
import { hong_kong_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/65_hong_kong";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { hong_kong_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/65_hong_kong";

import { hong_kong_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/65_hong_kong";
import { hong_kong_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/65_hong_kong";
import { hong_kong_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/65_hong_kong";
import { hong_kong_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/65_hong_kong";
import { hong_kong_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/65_hong_kong";
import { hong_kong_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/65_hong_kong";
import { hong_kong_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/65_hong_kong";
import { hong_kong_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/65_hong_kong";
import { hong_kong_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/65_hong_kong";
import { hong_kong_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/65_hong_kong";
import { hong_kong_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/65_hong_kong";
import { hong_kong_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/65_hong_kong";
import { hong_kong_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/65_hong_kong";
import { hong_kong_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/65_hong_kong";
import { hong_kong_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/65_hong_kong";
import { hong_kong_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/65_hong_kong";
import { hong_kong_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/65_hong_kong";
import { hong_kong_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/65_hong_kong";
import { hong_kong_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/65_hong_kong";
const hong_kong_geopolitik = {
    "un_vote": 27,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
      "kekuatan_keras": 20,
      "prestise_diplomatik": 57
    }
  } as const;

export const hong_kong: CountryData = {
  ...hong_kong_profile,
  "sektor_listrik": hong_kong_listrik,
  "hunian": hong_kong_hunian,
  "infrastruktur": hong_kong_infrastruktur,
  "sektor_ekstraksi": hong_kong_ekstraksi,
  "sektor_manufaktur": hong_kong_manufaktur,
  "sektor_peternakan": hong_kong_peternakan,
  "sektor_agrikultur": hong_kong_agrikultur,
  "sektor_perikanan": hong_kong_perikanan,
  "sektor_olahan_pangan": hong_kong_olahan_pangan,
  "sektor_farmasi": hong_kong_farmasi,
  "sektor_pertahanan": hong_kong_pertahanan,
  "armada_militer": hong_kong_armada,
  "militer_strategis": hong_kong_strategis,
  "armada_kepolisian": hong_kong_kepolisian,
  "pabrik_militer": hong_kong_pabrik,
  "intelijen": hong_kong_intelijen,
    "pendidikan": hong_kong_pendidikan,
  "kesehatan": hong_kong_kesehatan,
  "hukum": hong_kong_hukum,
  "sektor_olahraga": hong_kong_olahraga,
  "sektor_komersial": hong_kong_komersial,
  "sektor_hiburan": hong_kong_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 2,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 41,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 15.55,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": hong_kong_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 14,
    "pendidikan": 4,
    "keamanan": 15,
    "keuangan": 35,
    "lingkungan": 60
  }
};


