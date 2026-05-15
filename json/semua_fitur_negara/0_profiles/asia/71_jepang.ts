export const jepang_profile = {
  "name_en": "Japan",
  "capital": "Tokyo",
  "name_id": "Jepang",
  "lon": 139.65,
  "lat": 35.67,
  "flag": "🇯🇵",
  "jumlah_penduduk": 122860000,
  "anggaran": 39962,
  "pendapatan_nasional": "114176",
  "religion": "Shinto",
  "ideology": "Kapitalisme"
} as const;

import { jepang_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/71_jepang";
import { jepang_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/71_jepang";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { jepang_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/71_jepang";

import { jepang_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/71_jepang";
import { jepang_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/71_jepang";
import { jepang_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/71_jepang";
import { jepang_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/71_jepang";
import { jepang_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/71_jepang";
import { jepang_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/71_jepang";
import { jepang_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/71_jepang";
import { jepang_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/71_jepang";
import { jepang_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/71_jepang";
import { jepang_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/71_jepang";
import { jepang_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/71_jepang";
import { jepang_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/71_jepang";
import { jepang_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/71_jepang";
import { jepang_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/71_jepang";
import { jepang_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/71_jepang";
import { jepang_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/71_jepang";
import { jepang_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/71_jepang";
import { jepang_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/71_jepang";
import { jepang_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/71_jepang";
const jepang_geopolitik = {
    "un_vote": 207,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 39,
      "kekuatan_keras": 19,
      "prestise_diplomatik": 57
    }
  } as const;

export const jepang: CountryData = {
  ...jepang_profile,
  "sektor_listrik": jepang_listrik,
  "hunian": jepang_hunian,
  "infrastruktur": jepang_infrastruktur,
  "sektor_ekstraksi": jepang_ekstraksi,
  "sektor_manufaktur": jepang_manufaktur,
  "sektor_peternakan": jepang_peternakan,
  "sektor_agrikultur": jepang_agrikultur,
  "sektor_perikanan": jepang_perikanan,
  "sektor_olahan_pangan": jepang_olahan_pangan,
  "sektor_farmasi": jepang_farmasi,
  "sektor_pertahanan": jepang_pertahanan,
  "armada_militer": jepang_armada,
  "militer_strategis": jepang_strategis,
  "armada_kepolisian": jepang_kepolisian,
  "pabrik_militer": jepang_pabrik,
  "intelijen": jepang_intelijen,
    "pendidikan": jepang_pendidikan,
  "kesehatan": jepang_kesehatan,
  "hukum": jepang_hukum,
  "sektor_olahraga": jepang_olahraga,
  "sektor_komersial": jepang_komersial,
  "sektor_hiburan": jepang_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 3,
      "kepuasan": 67,
      "pendapatan": 209
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 245
    },
    "penghasilan": {
      "tarif": 23,
      "kepuasan": 61,
      "pendapatan": 1899
    },
    "bea_cukai": {
      "tarif": 12,
      "kepuasan": 86,
      "pendapatan": 568
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 433
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 200 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 600 },
    "lainnya": {
      "tarif": 16,
      "kepuasan": 93,
      "pendapatan": 1182
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 82,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 7.2,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 2.6,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": jepang_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 40,
    "keamanan": 10,
    "keuangan": 22,
    "lingkungan": 60
  }
};


