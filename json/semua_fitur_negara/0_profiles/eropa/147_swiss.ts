export const swiss_profile = {
  "name_en": "Switzerland",
  "capital": "Bern",
  "name_id": "Swiss",
  "lon": 8,
  "lat": 47,
  "flag": "🇨🇭",
  "jumlah_penduduk": 8962300,
  "anggaran": 8848,
  "pendapatan_nasional": "25280",
  "religion": "Katolik",
  "ideology": "Kapitalisme"
} as const;

import { swiss_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/147_swiss";
import { swiss_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/147_swiss";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { swiss_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/147_swiss";

import { swiss_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/147_swiss";
import { swiss_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/147_swiss";
import { swiss_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/147_swiss";
import { swiss_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/147_swiss";
import { swiss_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/147_swiss";
import { swiss_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/147_swiss";
import { swiss_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/147_swiss";
import { swiss_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/147_swiss";
import { swiss_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/147_swiss";
import { swiss_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/147_swiss";
import { swiss_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/147_swiss";
import { swiss_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/147_swiss";
import { swiss_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/147_swiss";
import { swiss_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/147_swiss";
import { swiss_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/147_swiss";
import { swiss_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/147_swiss";
import { swiss_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/147_swiss";
import { swiss_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/147_swiss";
import { swiss_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/147_swiss";
const swiss_geopolitik = {
    "un_vote": 198,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 25,
      "kekuatan_keras": 30,
      "prestise_diplomatik": 57
    }
  } as const;

export const swiss: CountryData = {
  ...swiss_profile,
  "sektor_listrik": swiss_listrik,
  "hunian": swiss_hunian,
  "infrastruktur": swiss_infrastruktur,
  "sektor_ekstraksi": swiss_ekstraksi,
  "sektor_manufaktur": swiss_manufaktur,
  "sektor_peternakan": swiss_peternakan,
  "sektor_agrikultur": swiss_agrikultur,
  "sektor_perikanan": swiss_perikanan,
  "sektor_olahan_pangan": swiss_olahan_pangan,
  "sektor_farmasi": swiss_farmasi,
  "sektor_pertahanan": swiss_pertahanan,
  "armada_militer": swiss_armada,
  "militer_strategis": swiss_strategis,
  "armada_kepolisian": swiss_kepolisian,
  "pabrik_militer": swiss_pabrik,
  "intelijen": swiss_intelijen,
    "pendidikan": swiss_pendidikan,
  "kesehatan": swiss_kesehatan,
  "hukum": swiss_hukum,
  "sektor_olahraga": swiss_olahraga,
  "sektor_komersial": swiss_komersial,
  "sektor_hiburan": swiss_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 540
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 672
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 446
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 90
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 786
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 45 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 133 },
    "lainnya": {
      "tarif": 34,
      "kepuasan": 93,
      "pendapatan": 502
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
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": swiss_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 34,
    "pendidikan": 3,
    "keamanan": 40,
    "keuangan": 36,
    "lingkungan": 60
  }
};


