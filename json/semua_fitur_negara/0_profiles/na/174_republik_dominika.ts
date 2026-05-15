export const republik_dominika_profile = {
  "name_en": "Dominican Republic",
  "capital": "Santo Domingo",
  "name_id": "Republik dominika",
  "lon": -70.66666666,
  "lat": 19,
  "flag": "🇩🇴",
  "jumlah_penduduk": 11427557,
  "anggaran": 1070,
  "pendapatan_nasional": "3056",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { republik_dominika_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/174_republik_dominika";
import { republik_dominika_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/174_republik_dominika";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { republik_dominika_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/174_republik_dominika";

import { republik_dominika_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/174_republik_dominika";
import { republik_dominika_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/174_republik_dominika";
import { republik_dominika_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/174_republik_dominika";
import { republik_dominika_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/174_republik_dominika";
import { republik_dominika_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/174_republik_dominika";
import { republik_dominika_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/174_republik_dominika";
import { republik_dominika_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/174_republik_dominika";
import { republik_dominika_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/174_republik_dominika";
import { republik_dominika_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/174_republik_dominika";
import { republik_dominika_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/174_republik_dominika";
import { republik_dominika_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/174_republik_dominika";
import { republik_dominika_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/174_republik_dominika";
import { republik_dominika_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/174_republik_dominika";
import { republik_dominika_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/174_republik_dominika";
import { republik_dominika_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/174_republik_dominika";
import { republik_dominika_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/174_republik_dominika";
import { republik_dominika_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/174_republik_dominika";
import { republik_dominika_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/174_republik_dominika";
import { republik_dominika_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/174_republik_dominika";
const republik_dominika_geopolitik = {
    "un_vote": 45,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 8,
      "kekuatan_keras": 7,
      "prestise_diplomatik": 57
    }
  } as const;

export const republik_dominika: CountryData = {
  ...republik_dominika_profile,
  "sektor_listrik": republik_dominika_listrik,
  "hunian": republik_dominika_hunian,
  "infrastruktur": republik_dominika_infrastruktur,
  "sektor_ekstraksi": republik_dominika_ekstraksi,
  "sektor_manufaktur": republik_dominika_manufaktur,
  "sektor_peternakan": republik_dominika_peternakan,
  "sektor_agrikultur": republik_dominika_agrikultur,
  "sektor_perikanan": republik_dominika_perikanan,
  "sektor_olahan_pangan": republik_dominika_olahan_pangan,
  "sektor_farmasi": republik_dominika_farmasi,
  "sektor_pertahanan": republik_dominika_pertahanan,
  "armada_militer": republik_dominika_armada,
  "militer_strategis": republik_dominika_strategis,
  "armada_kepolisian": republik_dominika_kepolisian,
  "pabrik_militer": republik_dominika_pabrik,
  "intelijen": republik_dominika_intelijen,
    "pendidikan": republik_dominika_pendidikan,
  "kesehatan": republik_dominika_kesehatan,
  "hukum": republik_dominika_hukum,
  "sektor_olahraga": republik_dominika_olahraga,
  "sektor_komersial": republik_dominika_komersial,
  "sektor_hiburan": republik_dominika_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 64
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 34
    },
    "bea_cukai": {
      "tarif": 12,
      "kepuasan": 86,
      "pendapatan": 28
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 17 },
    "lainnya": {
      "tarif": 29,
      "kepuasan": 93,
      "pendapatan": 44
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 3.2,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_dominika_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 20,
    "keamanan": 9,
    "keuangan": 25,
    "lingkungan": 60
  }
};


