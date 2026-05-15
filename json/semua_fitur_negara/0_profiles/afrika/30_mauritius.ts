export const mauritius_profile = {
  "name_en": "Mauritius",
  "capital": "Port Louis",
  "name_id": "Mauritius",
  "lon": 57.55,
  "lat": -20.28333333,
  "flag": "🇲🇺",
  "jumlah_penduduk": 1241856,
  "anggaran": 136,
  "pendapatan_nasional": "389",
  "religion": "Hindu",
  "ideology": "Demokrasi"
} as const;

import { mauritius_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/30_mauritius";
import { mauritius_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/30_mauritius";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { mauritius_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/30_mauritius";

import { mauritius_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/30_mauritius";
import { mauritius_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/30_mauritius";
import { mauritius_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/30_mauritius";
import { mauritius_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/30_mauritius";
import { mauritius_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/30_mauritius";
import { mauritius_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/30_mauritius";
import { mauritius_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/30_mauritius";
import { mauritius_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/30_mauritius";
import { mauritius_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/30_mauritius";
import { mauritius_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/30_mauritius";
import { mauritius_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/30_mauritius";
import { mauritius_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/30_mauritius";
import { mauritius_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/30_mauritius";
import { mauritius_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/30_mauritius";
import { mauritius_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/30_mauritius";
import { mauritius_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/30_mauritius";
import { mauritius_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/30_mauritius";
import { mauritius_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/30_mauritius";
import { mauritius_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/30_mauritius";
const mauritius_geopolitik = {
    "un_vote": 69,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 13,
      "kekuatan_keras": 33,
      "prestise_diplomatik": 57
  }
  } as const;

export const mauritius: CountryData = {
  ...mauritius_profile,
  "sektor_listrik": mauritius_listrik,
  "hunian": mauritius_hunian,
  "infrastruktur": mauritius_infrastruktur,
  "sektor_ekstraksi": mauritius_ekstraksi,
  "sektor_manufaktur": mauritius_manufaktur,
  "sektor_peternakan": mauritius_peternakan,
  "sektor_agrikultur": mauritius_agrikultur,
  "sektor_perikanan": mauritius_perikanan,
  "sektor_olahan_pangan": mauritius_olahan_pangan,
  "sektor_farmasi": mauritius_farmasi,
  "sektor_pertahanan": mauritius_pertahanan,
  "armada_militer": mauritius_armada,
  "militer_strategis": mauritius_strategis,
  "armada_kepolisian": mauritius_kepolisian,
  "pabrik_militer": mauritius_pabrik,
  "intelijen": mauritius_intelijen,
    "pendidikan": mauritius_pendidikan,
  "kesehatan": mauritius_kesehatan,
  "hukum": mauritius_hukum,
  "sektor_olahraga": mauritius_olahraga,
  "sektor_komersial": mauritius_komersial,
  "sektor_hiburan": mauritius_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 22,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 28.8,
    "harga_telur": 62.2,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": mauritius_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 14,
    "pendidikan": 39,
    "keamanan": 11,
    "keuangan": 37,
    "lingkungan": 60
  }
};


