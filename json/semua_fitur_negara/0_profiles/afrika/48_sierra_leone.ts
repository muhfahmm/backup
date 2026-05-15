export const sierra_leone_profile = {
  "name_en": "Sierra Leone",
  "capital": "Freetown",
  "name_id": "Sierra leone",
  "lon": -11.5,
  "lat": 8.5,
  "flag": "🇸🇱",
  "jumlah_penduduk": 8642022,
  "anggaran": 39,
  "pendapatan_nasional": "111",
  "religion": "Islam",
  "ideology": "Demokrasi"
} as const;

import { sierra_leone_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/48_sierra_leone";
import { sierra_leone_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/48_sierra_leone";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { sierra_leone_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/48_sierra_leone";

import { sierra_leone_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/48_sierra_leone";
import { sierra_leone_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/48_sierra_leone";
import { sierra_leone_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/48_sierra_leone";
import { sierra_leone_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/48_sierra_leone";
import { sierra_leone_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/48_sierra_leone";
import { sierra_leone_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/48_sierra_leone";
import { sierra_leone_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/48_sierra_leone";
import { sierra_leone_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/48_sierra_leone";
import { sierra_leone_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/48_sierra_leone";
import { sierra_leone_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/48_sierra_leone";
import { sierra_leone_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/48_sierra_leone";
import { sierra_leone_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/48_sierra_leone";
import { sierra_leone_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/48_sierra_leone";
import { sierra_leone_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/48_sierra_leone";
import { sierra_leone_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/48_sierra_leone";
import { sierra_leone_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/48_sierra_leone";
import { sierra_leone_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/48_sierra_leone";
import { sierra_leone_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/48_sierra_leone";
import { sierra_leone_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/48_sierra_leone";
const sierra_leone_geopolitik = {
    "un_vote": 91,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 40,
      "kekuatan_keras": 3,
      "prestise_diplomatik": 57
  }
  } as const;

export const sierra_leone: CountryData = {
  ...sierra_leone_profile,
  "sektor_listrik": sierra_leone_listrik,
  "hunian": sierra_leone_hunian,
  "infrastruktur": sierra_leone_infrastruktur,
  "sektor_ekstraksi": sierra_leone_ekstraksi,
  "sektor_manufaktur": sierra_leone_manufaktur,
  "sektor_peternakan": sierra_leone_peternakan,
  "sektor_agrikultur": sierra_leone_agrikultur,
  "sektor_perikanan": sierra_leone_perikanan,
  "sektor_olahan_pangan": sierra_leone_olahan_pangan,
  "sektor_farmasi": sierra_leone_farmasi,
  "sektor_pertahanan": sierra_leone_pertahanan,
  "armada_militer": sierra_leone_armada,
  "militer_strategis": sierra_leone_strategis,
  "armada_kepolisian": sierra_leone_kepolisian,
  "pabrik_militer": sierra_leone_pabrik,
  "intelijen": sierra_leone_intelijen,
    "pendidikan": sierra_leone_pendidikan,
  "kesehatan": sierra_leone_kesehatan,
  "hukum": sierra_leone_hukum,
  "sektor_olahraga": sierra_leone_olahraga,
  "sektor_komersial": sierra_leone_komersial,
  "sektor_hiburan": sierra_leone_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 20,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 23,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 40,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 41,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 20.16,
    "harga_telur": 62.2,
    "harga_bbm": 5.35,
    "harga_listrik": 3.2,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": sierra_leone_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 40,
    "pendidikan": 3,
    "keamanan": 11,
    "keuangan": 29,
    "lingkungan": 60
  }
};


