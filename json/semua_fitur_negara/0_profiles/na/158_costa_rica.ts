export const costa_rica_profile = {
  "name_en": "Costa Rica",
  "capital": "San José",
  "name_id": "Costa rica",
  "lon": -84,
  "lat": 10,
  "flag": "🇨🇷",
  "jumlah_penduduk": 5191824,
  "anggaran": 681,
  "pendapatan_nasional": "1945",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { costa_rica_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/158_costa_rica";
import { costa_rica_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/158_costa_rica";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { costa_rica_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/158_costa_rica";

import { costa_rica_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/158_costa_rica";
import { costa_rica_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/158_costa_rica";
import { costa_rica_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/158_costa_rica";
import { costa_rica_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/158_costa_rica";
import { costa_rica_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/158_costa_rica";
import { costa_rica_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/158_costa_rica";
import { costa_rica_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/158_costa_rica";
import { costa_rica_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/158_costa_rica";
import { costa_rica_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/158_costa_rica";
import { costa_rica_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/158_costa_rica";
import { costa_rica_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/158_costa_rica";
import { costa_rica_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/158_costa_rica";
import { costa_rica_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/158_costa_rica";
import { costa_rica_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/158_costa_rica";
import { costa_rica_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/158_costa_rica";
import { costa_rica_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/158_costa_rica";
import { costa_rica_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/158_costa_rica";
import { costa_rica_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/158_costa_rica";
import { costa_rica_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/158_costa_rica";
const costa_rica_geopolitik = {
    "un_vote": 72,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 4,
      "kekuatan_keras": 23,
      "prestise_diplomatik": 57
    }
  } as const;

export const costa_rica: CountryData = {
  ...costa_rica_profile,
  "sektor_listrik": costa_rica_listrik,
  "hunian": costa_rica_hunian,
  "infrastruktur": costa_rica_infrastruktur,
  "sektor_ekstraksi": costa_rica_ekstraksi,
  "sektor_manufaktur": costa_rica_manufaktur,
  "sektor_peternakan": costa_rica_peternakan,
  "sektor_agrikultur": costa_rica_agrikultur,
  "sektor_perikanan": costa_rica_perikanan,
  "sektor_olahan_pangan": costa_rica_olahan_pangan,
  "sektor_farmasi": costa_rica_farmasi,
  "sektor_pertahanan": costa_rica_pertahanan,
  "armada_militer": costa_rica_armada,
  "militer_strategis": costa_rica_strategis,
  "armada_kepolisian": costa_rica_kepolisian,
  "pabrik_militer": costa_rica_pabrik,
  "intelijen": costa_rica_intelijen,
    "pendidikan": costa_rica_pendidikan,
  "kesehatan": costa_rica_kesehatan,
  "hukum": costa_rica_hukum,
  "sektor_olahraga": costa_rica_olahraga,
  "sektor_komersial": costa_rica_komersial,
  "sektor_hiburan": costa_rica_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 69
    },
    "korporasi": {
      "tarif": 34,
      "kepuasan": 52,
      "pendapatan": 41
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 13
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 44
    },
    "lingkungan": {
      "tarif": 17,
      "kepuasan": 88,
      "pendapatan": 34
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 38,
      "kepuasan": 93,
      "pendapatan": 75
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": costa_rica_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 8,
    "keamanan": 10,
    "keuangan": 36,
    "lingkungan": 60
  }
};


