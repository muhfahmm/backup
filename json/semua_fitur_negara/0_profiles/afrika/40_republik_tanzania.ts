export const republik_tanzania_profile = {
  "name_en": "Tanzania",
  "capital": "Dodoma",
  "name_id": "Republik tanzania",
  "lon": 35,
  "lat": -6,
  "flag": "🇹🇿",
  "jumlah_penduduk": 68153004,
  "anggaran": 729,
  "pendapatan_nasional": "2084",
  "religion": "Katolik",
  "ideology": "Sosialisme"
} as const;

import { republik_tanzania_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/40_republik_tanzania";
import { republik_tanzania_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/40_republik_tanzania";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { republik_tanzania_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/40_republik_tanzania";

import { republik_tanzania_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/40_republik_tanzania";
import { republik_tanzania_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/40_republik_tanzania";
import { republik_tanzania_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/40_republik_tanzania";
import { republik_tanzania_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/40_republik_tanzania";
import { republik_tanzania_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/40_republik_tanzania";
import { republik_tanzania_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/40_republik_tanzania";
import { republik_tanzania_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/40_republik_tanzania";
import { republik_tanzania_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/40_republik_tanzania";
import { republik_tanzania_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/40_republik_tanzania";
import { republik_tanzania_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/40_republik_tanzania";
import { republik_tanzania_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/40_republik_tanzania";
import { republik_tanzania_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/40_republik_tanzania";
import { republik_tanzania_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/40_republik_tanzania";
import { republik_tanzania_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/40_republik_tanzania";
import { republik_tanzania_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/40_republik_tanzania";
import { republik_tanzania_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/40_republik_tanzania";
import { republik_tanzania_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/40_republik_tanzania";
import { republik_tanzania_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/40_republik_tanzania";
import { republik_tanzania_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/40_republik_tanzania";
const republik_tanzania_geopolitik = {
    "un_vote": 178,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 40,
      "kekuatan_keras": 11,
      "prestise_diplomatik": 57
  }
  } as const;

export const republik_tanzania: CountryData = {
  ...republik_tanzania_profile,
  "sektor_listrik": republik_tanzania_listrik,
  "hunian": republik_tanzania_hunian,
  "infrastruktur": republik_tanzania_infrastruktur,
  "sektor_ekstraksi": republik_tanzania_ekstraksi,
  "sektor_manufaktur": republik_tanzania_manufaktur,
  "sektor_peternakan": republik_tanzania_peternakan,
  "sektor_agrikultur": republik_tanzania_agrikultur,
  "sektor_perikanan": republik_tanzania_perikanan,
  "sektor_olahan_pangan": republik_tanzania_olahan_pangan,
  "sektor_farmasi": republik_tanzania_farmasi,
  "sektor_pertahanan": republik_tanzania_pertahanan,
  "armada_militer": republik_tanzania_armada,
  "militer_strategis": republik_tanzania_strategis,
  "armada_kepolisian": republik_tanzania_kepolisian,
  "pabrik_militer": republik_tanzania_pabrik,
  "intelijen": republik_tanzania_intelijen,
    "pendidikan": republik_tanzania_pendidikan,
  "kesehatan": republik_tanzania_kesehatan,
  "hukum": republik_tanzania_hukum,
  "sektor_olahraga": republik_tanzania_olahraga,
  "sektor_komersial": republik_tanzania_komersial,
  "sektor_hiburan": republik_tanzania_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 58
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 82
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 51
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 27
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 42
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 24,
      "kepuasan": 93,
      "pendapatan": 23
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 14.4,
    "harga_telur": 15.55,
    "harga_bbm": 5.35,
    "harga_listrik": 0.8,
    "harga_air": 4.16,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_tanzania_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 17,
    "pendidikan": 34,
    "keamanan": 40,
    "keuangan": 40,
    "lingkungan": 60
  }
};


