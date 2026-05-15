export const yordania_profile = {
  "name_en": "Jordan",
  "capital": "Amman",
  "name_id": "Yordania",
  "lon": 36,
  "lat": 31,
  "flag": "🇯🇴",
  "jumlah_penduduk": 11937000,
  "anggaran": 457,
  "pendapatan_nasional": "1306",
  "religion": "Islam",
  "ideology": "Monarki"
} as const;

import { yordania_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/102_yordania";
import { yordania_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/102_yordania";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { yordania_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/102_yordania";

import { yordania_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/102_yordania";
import { yordania_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/102_yordania";
import { yordania_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/102_yordania";
import { yordania_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/102_yordania";
import { yordania_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/102_yordania";
import { yordania_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/102_yordania";
import { yordania_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/102_yordania";
import { yordania_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/102_yordania";
import { yordania_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/102_yordania";
import { yordania_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/102_yordania";
import { yordania_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/102_yordania";
import { yordania_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/102_yordania";
import { yordania_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/102_yordania";
import { yordania_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/102_yordania";
import { yordania_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/102_yordania";
import { yordania_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/102_yordania";
import { yordania_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/102_yordania";
import { yordania_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/102_yordania";
import { yordania_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/102_yordania";
const yordania_geopolitik = {
    "un_vote": 82,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 7,
      "kekuatan_keras": 26,
      "prestise_diplomatik": 57
    }
  } as const;

export const yordania: CountryData = {
  ...yordania_profile,
  "sektor_listrik": yordania_listrik,
  "hunian": yordania_hunian,
  "infrastruktur": yordania_infrastruktur,
  "sektor_ekstraksi": yordania_ekstraksi,
  "sektor_manufaktur": yordania_manufaktur,
  "sektor_peternakan": yordania_peternakan,
  "sektor_agrikultur": yordania_agrikultur,
  "sektor_perikanan": yordania_perikanan,
  "sektor_olahan_pangan": yordania_olahan_pangan,
  "sektor_farmasi": yordania_farmasi,
  "sektor_pertahanan": yordania_pertahanan,
  "armada_militer": yordania_armada,
  "militer_strategis": yordania_strategis,
  "armada_kepolisian": yordania_kepolisian,
  "pabrik_militer": yordania_pabrik,
  "intelijen": yordania_intelijen,
    "pendidikan": yordania_pendidikan,
  "kesehatan": yordania_kesehatan,
  "hukum": yordania_hukum,
  "sektor_olahraga": yordania_olahraga,
  "sektor_komersial": yordania_komersial,
  "sektor_hiburan": yordania_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 20
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 22
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 25
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 26
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 24
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": yordania_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 14,
    "keamanan": 28,
    "keuangan": 35,
    "lingkungan": 60
  }
};


