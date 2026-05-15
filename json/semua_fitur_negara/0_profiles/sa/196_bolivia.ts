export const bolivia_profile = {
  "name_en": "Bolivia",
  "capital": "Sucre",
  "name_id": "Bolivia",
  "lon": -65,
  "lat": -17,
  "flag": "🇧🇴",
  "jumlah_penduduk": 11365333,
  "anggaran": 428,
  "pendapatan_nasional": "1222",
  "religion": "Katolik",
  "ideology": "Sosialisme"
} as const;

import { bolivia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/sa/196_bolivia";
import { bolivia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/sa/196_bolivia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { bolivia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/sa/196_bolivia";

import { bolivia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/sa/196_bolivia";
import { bolivia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/sa/196_bolivia";
import { bolivia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/sa/196_bolivia";
import { bolivia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/sa/196_bolivia";
import { bolivia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/sa/196_bolivia";
import { bolivia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/sa/196_bolivia";
import { bolivia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/sa/196_bolivia";
import { bolivia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/sa/196_bolivia";
import { bolivia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/sa/196_bolivia";
import { bolivia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/sa/196_bolivia";
import { bolivia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/sa/196_bolivia";
import { bolivia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/sa/196_bolivia";
import { bolivia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/sa/196_bolivia";
import { bolivia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/sa/196_bolivia";
import { bolivia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/sa/196_bolivia";
import { bolivia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/sa/196_bolivia";
import { bolivia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/sa/196_bolivia";
import { bolivia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/sa/196_bolivia";
import { bolivia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/sa/196_bolivia";
const bolivia_geopolitik = {
    "un_vote": 68,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 16,
      "kekuatan_keras": 9,
      "prestise_diplomatik": 57
    }
  } as const;

export const bolivia: CountryData = {
  ...bolivia_profile,
  "sektor_listrik": bolivia_listrik,
  "hunian": bolivia_hunian,
  "infrastruktur": bolivia_infrastruktur,
  "sektor_ekstraksi": bolivia_ekstraksi,
  "sektor_manufaktur": bolivia_manufaktur,
  "sektor_peternakan": bolivia_peternakan,
  "sektor_agrikultur": bolivia_agrikultur,
  "sektor_perikanan": bolivia_perikanan,
  "sektor_olahan_pangan": bolivia_olahan_pangan,
  "sektor_farmasi": bolivia_farmasi,
  "sektor_pertahanan": bolivia_pertahanan,
  "armada_militer": bolivia_armada,
  "militer_strategis": bolivia_strategis,
  "armada_kepolisian": bolivia_kepolisian,
  "pabrik_militer": bolivia_pabrik,
  "intelijen": bolivia_intelijen,
    "pendidikan": bolivia_pendidikan,
  "kesehatan": bolivia_kesehatan,
  "hukum": bolivia_hukum,
  "sektor_olahraga": bolivia_olahraga,
  "sektor_komersial": bolivia_komersial,
  "sektor_hiburan": bolivia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 27,
      "kepuasan": 67,
      "pendapatan": 21
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 25
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 32
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 7
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 24
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 28.8,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 2.24,
    "harga_air": 4.16,
    "harga_obat": 126.32,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": bolivia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 31,
    "pendidikan": 8,
    "keamanan": 14,
    "keuangan": 33,
    "lingkungan": 60
  }
};


