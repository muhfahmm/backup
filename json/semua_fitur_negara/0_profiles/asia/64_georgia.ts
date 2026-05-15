export const georgia_profile = {
  "name_en": "Georgia",
  "capital": "Tbilisi",
  "name_id": "Georgia",
  "lon": 43.5,
  "lat": 42,
  "flag": "🇬🇪",
  "jumlah_penduduk": 3704500,
  "anggaran": 243,
  "pendapatan_nasional": "694",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi"
} as const;

import { georgia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/64_georgia";
import { georgia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/64_georgia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { georgia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/64_georgia";

import { georgia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/64_georgia";
import { georgia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/64_georgia";
import { georgia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/64_georgia";
import { georgia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/64_georgia";
import { georgia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/64_georgia";
import { georgia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/64_georgia";
import { georgia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/64_georgia";
import { georgia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/64_georgia";
import { georgia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/64_georgia";
import { georgia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/64_georgia";
import { georgia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/64_georgia";
import { georgia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/64_georgia";
import { georgia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/64_georgia";
import { georgia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/64_georgia";
import { georgia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/64_georgia";
import { georgia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/64_georgia";
import { georgia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/64_georgia";
import { georgia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/64_georgia";
import { georgia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/64_georgia";
const georgia_geopolitik = {
    "un_vote": 127,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 18,
      "kekuatan_keras": 32,
      "prestise_diplomatik": 57
    }
  } as const;

export const georgia: CountryData = {
  ...georgia_profile,
  "sektor_listrik": georgia_listrik,
  "hunian": georgia_hunian,
  "infrastruktur": georgia_infrastruktur,
  "sektor_ekstraksi": georgia_ekstraksi,
  "sektor_manufaktur": georgia_manufaktur,
  "sektor_peternakan": georgia_peternakan,
  "sektor_agrikultur": georgia_agrikultur,
  "sektor_perikanan": georgia_perikanan,
  "sektor_olahan_pangan": georgia_olahan_pangan,
  "sektor_farmasi": georgia_farmasi,
  "sektor_pertahanan": georgia_pertahanan,
  "armada_militer": georgia_armada,
  "militer_strategis": georgia_strategis,
  "armada_kepolisian": georgia_kepolisian,
  "pabrik_militer": georgia_pabrik,
  "intelijen": georgia_intelijen,
    "pendidikan": georgia_pendidikan,
  "kesehatan": georgia_kesehatan,
  "hukum": georgia_hukum,
  "sektor_olahraga": georgia_olahraga,
  "sektor_komersial": georgia_komersial,
  "sektor_hiburan": georgia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 23,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 15,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 17
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": georgia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 17,
    "pendidikan": 8,
    "keamanan": 21,
    "keuangan": 8,
    "lingkungan": 60
  }
};


