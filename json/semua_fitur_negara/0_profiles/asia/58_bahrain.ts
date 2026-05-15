export const bahrain_profile = {
  "name_en": "Bahrain",
  "capital": "Manama",
  "name_id": "Bahrain",
  "lon": 50.55,
  "lat": 26,
  "flag": "🇧🇭",
  "jumlah_penduduk": 1577059,
  "anggaran": 428,
  "pendapatan_nasional": "1222",
  "religion": "Islam",
  "ideology": "Monarki"
} as const;

import { bahrain_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/58_bahrain";
import { bahrain_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/58_bahrain";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { bahrain_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/58_bahrain";

import { bahrain_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/58_bahrain";
import { bahrain_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/58_bahrain";
import { bahrain_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/58_bahrain";
import { bahrain_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/58_bahrain";
import { bahrain_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/58_bahrain";
import { bahrain_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/58_bahrain";
import { bahrain_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/58_bahrain";
import { bahrain_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/58_bahrain";
import { bahrain_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/58_bahrain";
import { bahrain_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/58_bahrain";
import { bahrain_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/58_bahrain";
import { bahrain_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/58_bahrain";
import { bahrain_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/58_bahrain";
import { bahrain_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/58_bahrain";
import { bahrain_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/58_bahrain";
import { bahrain_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/58_bahrain";
import { bahrain_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/58_bahrain";
import { bahrain_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/58_bahrain";
import { bahrain_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/58_bahrain";
const bahrain_geopolitik = {
    "un_vote": 96,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 27,
      "kekuatan_keras": 14,
      "prestise_diplomatik": 57
    }
  } as const;

export const bahrain: CountryData = {
  ...bahrain_profile,
  "sektor_listrik": bahrain_listrik,
  "hunian": bahrain_hunian,
  "infrastruktur": bahrain_infrastruktur,
  "sektor_ekstraksi": bahrain_ekstraksi,
  "sektor_manufaktur": bahrain_manufaktur,
  "sektor_peternakan": bahrain_peternakan,
  "sektor_agrikultur": bahrain_agrikultur,
  "sektor_perikanan": bahrain_perikanan,
  "sektor_olahan_pangan": bahrain_olahan_pangan,
  "sektor_farmasi": bahrain_farmasi,
  "sektor_pertahanan": bahrain_pertahanan,
  "armada_militer": bahrain_armada,
  "militer_strategis": bahrain_strategis,
  "armada_kepolisian": bahrain_kepolisian,
  "pabrik_militer": bahrain_pabrik,
  "intelijen": bahrain_intelijen,
    "pendidikan": bahrain_pendidikan,
  "kesehatan": bahrain_kesehatan,
  "hukum": bahrain_hukum,
  "sektor_olahraga": bahrain_olahraga,
  "sektor_komersial": bahrain_komersial,
  "sektor_hiburan": bahrain_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 27
    },
    "penghasilan": {
      "tarif": 20,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 37,
      "kepuasan": 88,
      "pendapatan": 22
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 31
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 5.35,
    "harga_listrik": 3.2,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": bahrain_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 32,
    "pendidikan": 35,
    "keamanan": 22,
    "keuangan": 13,
    "lingkungan": 60
  }
};


