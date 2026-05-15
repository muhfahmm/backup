export const samoa_profile = {
  "name_en": "Samoa",
  "capital": "Apia",
  "name_id": "Samoa",
  "lon": -172.33333333,
  "lat": -13.58333333,
  "flag": "🇼🇸",
  "jumlah_penduduk": 205557,
  "anggaran": 10,
  "pendapatan_nasional": "25",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { samoa_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/oceania/188_samoa";
import { samoa_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/oceania/188_samoa";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { samoa_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/oceania/188_samoa";

import { samoa_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/oceania/188_samoa";
import { samoa_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/oceania/188_samoa";
import { samoa_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/oceania/188_samoa";
import { samoa_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/oceania/188_samoa";
import { samoa_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/oceania/188_samoa";
import { samoa_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/oceania/188_samoa";
import { samoa_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/oceania/188_samoa";
import { samoa_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/oceania/188_samoa";
import { samoa_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/oceania/188_samoa";
import { samoa_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/oceania/188_samoa";
import { samoa_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/oceania/188_samoa";
import { samoa_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/oceania/188_samoa";
import { samoa_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/oceania/188_samoa";
import { samoa_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/oceania/188_samoa";
import { samoa_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/oceania/188_samoa";
import { samoa_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/oceania/188_samoa";
import { samoa_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/oceania/188_samoa";
import { samoa_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/oceania/188_samoa";
import { samoa_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/oceania/188_samoa";
const samoa_geopolitik = {
    "un_vote": 9,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 35,
      "prestise_diplomatik": 57
    }
  } as const;

export const samoa: CountryData = {
  ...samoa_profile,
  "sektor_listrik": samoa_listrik,
  "hunian": samoa_hunian,
  "infrastruktur": samoa_infrastruktur,
  "sektor_ekstraksi": samoa_ekstraksi,
  "sektor_manufaktur": samoa_manufaktur,
  "sektor_peternakan": samoa_peternakan,
  "sektor_agrikultur": samoa_agrikultur,
  "sektor_perikanan": samoa_perikanan,
  "sektor_olahan_pangan": samoa_olahan_pangan,
  "sektor_farmasi": samoa_farmasi,
  "sektor_pertahanan": samoa_pertahanan,
  "armada_militer": samoa_armada,
  "militer_strategis": samoa_strategis,
  "armada_kepolisian": samoa_kepolisian,
  "pabrik_militer": samoa_pabrik,
  "intelijen": samoa_intelijen,
    "pendidikan": samoa_pendidikan,
  "kesehatan": samoa_kesehatan,
  "hukum": samoa_hukum,
  "sektor_olahraga": samoa_olahraga,
  "sektor_komersial": samoa_komersial,
  "sektor_hiburan": samoa_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 3,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 29,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 24,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 28.8,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 4.16,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": samoa_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 14,
    "pendidikan": 27,
    "keamanan": 33,
    "keuangan": 8,
    "lingkungan": 60
  }
};


