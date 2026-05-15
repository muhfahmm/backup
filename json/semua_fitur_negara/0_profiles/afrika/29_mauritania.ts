export const mauritania_profile = {
  "name_en": "Mauritania",
  "capital": "Nouakchott",
  "name_id": "Mauritania",
  "lon": -12,
  "lat": 20,
  "flag": "🇲🇷",
  "jumlah_penduduk": 5169395,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Islam",
  "ideology": "Konservatisme"
} as const;

import { mauritania_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/29_mauritania";
import { mauritania_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/29_mauritania";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { mauritania_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/29_mauritania";

import { mauritania_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/29_mauritania";
import { mauritania_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/29_mauritania";
import { mauritania_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/29_mauritania";
import { mauritania_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/29_mauritania";
import { mauritania_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/29_mauritania";
import { mauritania_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/29_mauritania";
import { mauritania_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/29_mauritania";
import { mauritania_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/29_mauritania";
import { mauritania_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/29_mauritania";
import { mauritania_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/29_mauritania";
import { mauritania_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/29_mauritania";
import { mauritania_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/29_mauritania";
import { mauritania_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/29_mauritania";
import { mauritania_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/29_mauritania";
import { mauritania_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/29_mauritania";
import { mauritania_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/29_mauritania";
import { mauritania_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/29_mauritania";
import { mauritania_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/29_mauritania";
import { mauritania_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/29_mauritania";
const mauritania_geopolitik = {
    "un_vote": 124,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 40,
      "prestise_diplomatik": 57
  }
  } as const;

export const mauritania: CountryData = {
  ...mauritania_profile,
  "sektor_listrik": mauritania_listrik,
  "hunian": mauritania_hunian,
  "infrastruktur": mauritania_infrastruktur,
  "sektor_ekstraksi": mauritania_ekstraksi,
  "sektor_manufaktur": mauritania_manufaktur,
  "sektor_peternakan": mauritania_peternakan,
  "sektor_agrikultur": mauritania_agrikultur,
  "sektor_perikanan": mauritania_perikanan,
  "sektor_olahan_pangan": mauritania_olahan_pangan,
  "sektor_farmasi": mauritania_farmasi,
  "sektor_pertahanan": mauritania_pertahanan,
  "armada_militer": mauritania_armada,
  "militer_strategis": mauritania_strategis,
  "armada_kepolisian": mauritania_kepolisian,
  "pabrik_militer": mauritania_pabrik,
  "intelijen": mauritania_intelijen,
    "pendidikan": mauritania_pendidikan,
  "kesehatan": mauritania_kesehatan,
  "hukum": mauritania_hukum,
  "sektor_olahraga": mauritania_olahraga,
  "sektor_komersial": mauritania_komersial,
  "sektor_hiburan": mauritania_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 28.8,
    "harga_telur": 31.1,
    "harga_bbm": 5.35,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 78.95,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": mauritania_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 24,
    "pendidikan": 29,
    "keamanan": 29,
    "keuangan": 40,
    "lingkungan": 60
  }
};


