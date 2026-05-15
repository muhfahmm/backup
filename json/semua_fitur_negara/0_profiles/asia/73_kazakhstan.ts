export const kazakhstan_profile = {
  "name_en": "Kazakhstan",
  "capital": "Astana",
  "name_id": "Kazakhstan",
  "lon": 68,
  "lat": 48,
  "flag": "🇰🇿",
  "jumlah_penduduk": 20532240,
  "anggaran": 2528,
  "pendapatan_nasional": "7223",
  "religion": "Islam",
  "ideology": "Nasionalisme"
} as const;

import { kazakhstan_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/73_kazakhstan";
import { kazakhstan_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/73_kazakhstan";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { kazakhstan_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/73_kazakhstan";

import { kazakhstan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/73_kazakhstan";
import { kazakhstan_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/73_kazakhstan";
import { kazakhstan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/73_kazakhstan";
import { kazakhstan_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/73_kazakhstan";
import { kazakhstan_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/73_kazakhstan";
import { kazakhstan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/73_kazakhstan";
import { kazakhstan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/73_kazakhstan";
import { kazakhstan_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/73_kazakhstan";
import { kazakhstan_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/73_kazakhstan";
import { kazakhstan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/73_kazakhstan";
import { kazakhstan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/73_kazakhstan";
import { kazakhstan_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/73_kazakhstan";
import { kazakhstan_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/73_kazakhstan";
import { kazakhstan_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/73_kazakhstan";
import { kazakhstan_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/73_kazakhstan";
import { kazakhstan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/73_kazakhstan";
import { kazakhstan_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/73_kazakhstan";
import { kazakhstan_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/73_kazakhstan";
import { kazakhstan_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/73_kazakhstan";
const kazakhstan_geopolitik = {
    "un_vote": 187,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 38,
      "kekuatan_keras": 20,
      "prestise_diplomatik": 57
    }
  } as const;

export const kazakhstan: CountryData = {
  ...kazakhstan_profile,
  "sektor_listrik": kazakhstan_listrik,
  "hunian": kazakhstan_hunian,
  "infrastruktur": kazakhstan_infrastruktur,
  "sektor_ekstraksi": kazakhstan_ekstraksi,
  "sektor_manufaktur": kazakhstan_manufaktur,
  "sektor_peternakan": kazakhstan_peternakan,
  "sektor_agrikultur": kazakhstan_agrikultur,
  "sektor_perikanan": kazakhstan_perikanan,
  "sektor_olahan_pangan": kazakhstan_olahan_pangan,
  "sektor_farmasi": kazakhstan_farmasi,
  "sektor_pertahanan": kazakhstan_pertahanan,
  "armada_militer": kazakhstan_armada,
  "militer_strategis": kazakhstan_strategis,
  "armada_kepolisian": kazakhstan_kepolisian,
  "pabrik_militer": kazakhstan_pabrik,
  "intelijen": kazakhstan_intelijen,
    "pendidikan": kazakhstan_pendidikan,
  "kesehatan": kazakhstan_kesehatan,
  "hukum": kazakhstan_hukum,
  "sektor_olahraga": kazakhstan_olahraga,
  "sektor_komersial": kazakhstan_komersial,
  "sektor_hiburan": kazakhstan_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 32,
      "kepuasan": 67,
      "pendapatan": 133
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 102
    },
    "penghasilan": {
      "tarif": 13,
      "kepuasan": 61,
      "pendapatan": 90
    },
    "bea_cukai": {
      "tarif": 22,
      "kepuasan": 86,
      "pendapatan": 100
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 65
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 13 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 38 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 46
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 41,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 28.8,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kazakhstan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 26,
    "keamanan": 11,
    "keuangan": 32,
    "lingkungan": 60
  }
};


