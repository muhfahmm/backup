export const republik_uganda_profile = {
  "name_en": "Uganda",
  "capital": "Kampala",
  "name_id": "Republik uganda",
  "lon": 32,
  "lat": 1,
  "flag": "🇺🇬",
  "jumlah_penduduk": 45905417,
  "anggaran": 486,
  "pendapatan_nasional": "1389",
  "religion": "Katolik",
  "ideology": "Konservatisme"
} as const;

import { republik_uganda_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/41_republik_uganda";
import { republik_uganda_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/41_republik_uganda";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { republik_uganda_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/41_republik_uganda";

import { republik_uganda_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/41_republik_uganda";
import { republik_uganda_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/41_republik_uganda";
import { republik_uganda_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/41_republik_uganda";
import { republik_uganda_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/41_republik_uganda";
import { republik_uganda_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/41_republik_uganda";
import { republik_uganda_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/41_republik_uganda";
import { republik_uganda_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/41_republik_uganda";
import { republik_uganda_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/41_republik_uganda";
import { republik_uganda_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/41_republik_uganda";
import { republik_uganda_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/41_republik_uganda";
import { republik_uganda_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/41_republik_uganda";
import { republik_uganda_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/41_republik_uganda";
import { republik_uganda_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/41_republik_uganda";
import { republik_uganda_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/41_republik_uganda";
import { republik_uganda_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/41_republik_uganda";
import { republik_uganda_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/41_republik_uganda";
import { republik_uganda_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/41_republik_uganda";
import { republik_uganda_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/41_republik_uganda";
import { republik_uganda_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/41_republik_uganda";
const republik_uganda_geopolitik = {
    "un_vote": 101,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 20,
      "kekuatan_keras": 10,
      "prestise_diplomatik": 57
  }
  } as const;

export const republik_uganda: CountryData = {
  ...republik_uganda_profile,
  "sektor_listrik": republik_uganda_listrik,
  "hunian": republik_uganda_hunian,
  "infrastruktur": republik_uganda_infrastruktur,
  "sektor_ekstraksi": republik_uganda_ekstraksi,
  "sektor_manufaktur": republik_uganda_manufaktur,
  "sektor_peternakan": republik_uganda_peternakan,
  "sektor_agrikultur": republik_uganda_agrikultur,
  "sektor_perikanan": republik_uganda_perikanan,
  "sektor_olahan_pangan": republik_uganda_olahan_pangan,
  "sektor_farmasi": republik_uganda_farmasi,
  "sektor_pertahanan": republik_uganda_pertahanan,
  "armada_militer": republik_uganda_armada,
  "militer_strategis": republik_uganda_strategis,
  "armada_kepolisian": republik_uganda_kepolisian,
  "pabrik_militer": republik_uganda_pabrik,
  "intelijen": republik_uganda_intelijen,
    "pendidikan": republik_uganda_pendidikan,
  "kesehatan": republik_uganda_kesehatan,
  "hukum": republik_uganda_hukum,
  "sektor_olahraga": republik_uganda_olahraga,
  "sektor_komersial": republik_uganda_komersial,
  "sektor_hiburan": republik_uganda_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 21
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 46
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 18
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 8 },
    "lainnya": {
      "tarif": 30,
      "kepuasan": 93,
      "pendapatan": 36
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 62.2,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_uganda_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 28,
    "pendidikan": 17,
    "keamanan": 28,
    "keuangan": 37,
    "lingkungan": 60
  }
};


