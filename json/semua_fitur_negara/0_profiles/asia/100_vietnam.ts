export const vietnam_profile = {
  "name_en": "Vietnam",
  "capital": "Hanoi",
  "name_id": "Vietnam",
  "lon": 105.83,
  "lat": 21.02,
  "flag": "🇻🇳",
  "jumlah_penduduk": 102300000,
  "anggaran": 4181,
  "pendapatan_nasional": "11945",
  "religion": "Ateisme",
  "ideology": "Komunisme"
} as const;

import { vietnam_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/100_vietnam";
import { vietnam_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/100_vietnam";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { vietnam_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/100_vietnam";

import { vietnam_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/100_vietnam";
import { vietnam_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/100_vietnam";
import { vietnam_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/100_vietnam";
import { vietnam_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/100_vietnam";
import { vietnam_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/100_vietnam";
import { vietnam_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/100_vietnam";
import { vietnam_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/100_vietnam";
import { vietnam_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/100_vietnam";
import { vietnam_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/100_vietnam";
import { vietnam_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/100_vietnam";
import { vietnam_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/100_vietnam";
import { vietnam_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/100_vietnam";
import { vietnam_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/100_vietnam";
import { vietnam_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/100_vietnam";
import { vietnam_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/100_vietnam";
import { vietnam_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/100_vietnam";
import { vietnam_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/100_vietnam";
import { vietnam_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/100_vietnam";
import { vietnam_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/100_vietnam";
const vietnam_geopolitik = {
    "un_vote": 76,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 10,
      "kekuatan_keras": 3,
      "prestise_diplomatik": 57
    }
  } as const;

export const vietnam: CountryData = {
  ...vietnam_profile,
  "sektor_listrik": vietnam_listrik,
  "hunian": vietnam_hunian,
  "infrastruktur": vietnam_infrastruktur,
  "sektor_ekstraksi": vietnam_ekstraksi,
  "sektor_manufaktur": vietnam_manufaktur,
  "sektor_peternakan": vietnam_peternakan,
  "sektor_agrikultur": vietnam_agrikultur,
  "sektor_perikanan": vietnam_perikanan,
  "sektor_olahan_pangan": vietnam_olahan_pangan,
  "sektor_farmasi": vietnam_farmasi,
  "sektor_pertahanan": vietnam_pertahanan,
  "armada_militer": vietnam_armada,
  "militer_strategis": vietnam_strategis,
  "armada_kepolisian": vietnam_kepolisian,
  "pabrik_militer": vietnam_pabrik,
  "intelijen": vietnam_intelijen,
    "pendidikan": vietnam_pendidikan,
  "kesehatan": vietnam_kesehatan,
  "hukum": vietnam_hukum,
  "sektor_olahraga": vietnam_olahraga,
  "sektor_komersial": vietnam_komersial,
  "sektor_hiburan": vietnam_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 13,
      "kepuasan": 67,
      "pendapatan": 95
    },
    "korporasi": {
      "tarif": 20,
      "kepuasan": 52,
      "pendapatan": 133
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 185
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 233
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 70
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 21 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 63 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 28.8,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 2.6,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": vietnam_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 28,
    "pendidikan": 31,
    "keamanan": 4,
    "keuangan": 5,
    "lingkungan": 60
  }
};


