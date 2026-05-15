export const peru_profile = {
  "name_en": "Peru",
  "capital": "Lima",
  "name_id": "Peru",
  "lon": -76,
  "lat": -10,
  "flag": "🇵🇪",
  "jumlah_penduduk": 33396698,
  "anggaran": 2528,
  "pendapatan_nasional": "7223",
  "religion": "Katolik",
  "ideology": "Sosialisme"
} as const;

import { peru_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/sa/204_peru";
import { peru_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/sa/204_peru";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { peru_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/sa/204_peru";

import { peru_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/sa/204_peru";
import { peru_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/sa/204_peru";
import { peru_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/sa/204_peru";
import { peru_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/sa/204_peru";
import { peru_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/sa/204_peru";
import { peru_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/sa/204_peru";
import { peru_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/sa/204_peru";
import { peru_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/sa/204_peru";
import { peru_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/sa/204_peru";
import { peru_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/sa/204_peru";
import { peru_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/sa/204_peru";
import { peru_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/sa/204_peru";
import { peru_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/sa/204_peru";
import { peru_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/sa/204_peru";
import { peru_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/sa/204_peru";
import { peru_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/sa/204_peru";
import { peru_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/sa/204_peru";
import { peru_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/sa/204_peru";
import { peru_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/sa/204_peru";
const peru_geopolitik = {
    "un_vote": 41,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 11,
      "prestise_diplomatik": 57
    }
  } as const;

export const peru: CountryData = {
  ...peru_profile,
  "sektor_listrik": peru_listrik,
  "hunian": peru_hunian,
  "infrastruktur": peru_infrastruktur,
  "sektor_ekstraksi": peru_ekstraksi,
  "sektor_manufaktur": peru_manufaktur,
  "sektor_peternakan": peru_peternakan,
  "sektor_agrikultur": peru_agrikultur,
  "sektor_perikanan": peru_perikanan,
  "sektor_olahan_pangan": peru_olahan_pangan,
  "sektor_farmasi": peru_farmasi,
  "sektor_pertahanan": peru_pertahanan,
  "armada_militer": peru_armada,
  "militer_strategis": peru_strategis,
  "armada_kepolisian": peru_kepolisian,
  "pabrik_militer": peru_pabrik,
  "intelijen": peru_intelijen,
    "pendidikan": peru_pendidikan,
  "kesehatan": peru_kesehatan,
  "hukum": peru_hukum,
  "sektor_olahraga": peru_olahraga,
  "sektor_komersial": peru_komersial,
  "sektor_hiburan": peru_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 196
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 100
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 138
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 218
    },
    "lingkungan": {
      "tarif": 24,
      "kepuasan": 88,
      "pendapatan": 74
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 13 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 38 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 6
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 5.35,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": peru_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 19,
    "pendidikan": 28,
    "keamanan": 11,
    "keuangan": 11,
    "lingkungan": 60
  }
};


