export const yaman_profile = {
  "name_en": "Yemen",
  "capital": "Sana'a",
  "name_id": "Yaman",
  "lon": 48,
  "lat": 15,
  "flag": "🇾🇪",
  "jumlah_penduduk": 33697000,
  "anggaran": 214,
  "pendapatan_nasional": "611",
  "religion": "Islam",
  "ideology": "Nasionalisme"
} as const;

import { yaman_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/101_yaman";
import { yaman_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/101_yaman";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { yaman_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/101_yaman";

import { yaman_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/101_yaman";
import { yaman_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/101_yaman";
import { yaman_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/101_yaman";
import { yaman_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/101_yaman";
import { yaman_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/101_yaman";
import { yaman_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/101_yaman";
import { yaman_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/101_yaman";
import { yaman_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/101_yaman";
import { yaman_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/101_yaman";
import { yaman_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/101_yaman";
import { yaman_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/101_yaman";
import { yaman_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/101_yaman";
import { yaman_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/101_yaman";
import { yaman_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/101_yaman";
import { yaman_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/101_yaman";
import { yaman_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/101_yaman";
import { yaman_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/101_yaman";
import { yaman_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/101_yaman";
import { yaman_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/101_yaman";
const yaman_geopolitik = {
    "un_vote": 111,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 30,
      "kekuatan_keras": 8,
      "prestise_diplomatik": 57
    }
  } as const;

export const yaman: CountryData = {
  ...yaman_profile,
  "sektor_listrik": yaman_listrik,
  "hunian": yaman_hunian,
  "infrastruktur": yaman_infrastruktur,
  "sektor_ekstraksi": yaman_ekstraksi,
  "sektor_manufaktur": yaman_manufaktur,
  "sektor_peternakan": yaman_peternakan,
  "sektor_agrikultur": yaman_agrikultur,
  "sektor_perikanan": yaman_perikanan,
  "sektor_olahan_pangan": yaman_olahan_pangan,
  "sektor_farmasi": yaman_farmasi,
  "sektor_pertahanan": yaman_pertahanan,
  "armada_militer": yaman_armada,
  "militer_strategis": yaman_strategis,
  "armada_kepolisian": yaman_kepolisian,
  "pabrik_militer": yaman_pabrik,
  "intelijen": yaman_intelijen,
    "pendidikan": yaman_pendidikan,
  "kesehatan": yaman_kesehatan,
  "hukum": yaman_hukum,
  "sektor_olahraga": yaman_olahraga,
  "sektor_komersial": yaman_komersial,
  "sektor_hiburan": yaman_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 22
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 28.8,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 2.6,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": yaman_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 10,
    "keamanan": 34,
    "keuangan": 22,
    "lingkungan": 60
  }
};


