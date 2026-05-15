export const eswatini_profile = {
  "name_en": "Eswatini",
  "capital": "Lobamba",
  "name_id": "Eswatini",
  "lon": 31.5,
  "lat": -26.5,
  "flag": "🇸🇿",
  "jumlah_penduduk": 1242822,
  "anggaran": 44,
  "pendapatan_nasional": "125",
  "religion": "Protestan",
  "ideology": "Monarki"
} as const;

import { eswatini_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/11_eswatini";
import { eswatini_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/11_eswatini";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { eswatini_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/11_eswatini";

import { eswatini_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/11_eswatini";
import { eswatini_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/11_eswatini";
import { eswatini_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/11_eswatini";
import { eswatini_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/11_eswatini";
import { eswatini_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/11_eswatini";
import { eswatini_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/11_eswatini";
import { eswatini_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/11_eswatini";
import { eswatini_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/11_eswatini";
import { eswatini_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/11_eswatini";
import { eswatini_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/11_eswatini";
import { eswatini_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/11_eswatini";
import { eswatini_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/11_eswatini";
import { eswatini_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/11_eswatini";
import { eswatini_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/11_eswatini";
import { eswatini_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/11_eswatini";
import { eswatini_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/11_eswatini";
import { eswatini_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/11_eswatini";
import { eswatini_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/11_eswatini";
import { eswatini_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/11_eswatini";
const eswatini_geopolitik = {
    "un_vote": 60,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 19,
      "kekuatan_keras": 23,
      "prestise_diplomatik": 57
  }
  } as const;

export const eswatini: CountryData = {
  ...eswatini_profile,
  "sektor_listrik": eswatini_listrik,
  "hunian": eswatini_hunian,
  "infrastruktur": eswatini_infrastruktur,
  "sektor_ekstraksi": eswatini_ekstraksi,
  "sektor_manufaktur": eswatini_manufaktur,
  "sektor_peternakan": eswatini_peternakan,
  "sektor_agrikultur": eswatini_agrikultur,
  "sektor_perikanan": eswatini_perikanan,
  "sektor_olahan_pangan": eswatini_olahan_pangan,
  "sektor_farmasi": eswatini_farmasi,
  "sektor_pertahanan": eswatini_pertahanan,
  "armada_militer": eswatini_armada,
  "militer_strategis": eswatini_strategis,
  "armada_kepolisian": eswatini_kepolisian,
  "pabrik_militer": eswatini_pabrik,
  "intelijen": eswatini_intelijen,
    "pendidikan": eswatini_pendidikan,
  "kesehatan": eswatini_kesehatan,
  "hukum": eswatini_hukum,
  "sektor_olahraga": eswatini_olahraga,
  "sektor_komersial": eswatini_komersial,
  "sektor_hiburan": eswatini_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 2,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 14,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": eswatini_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 29,
    "pendidikan": 40,
    "keamanan": 6,
    "keuangan": 10,
    "lingkungan": 60
  }
};


