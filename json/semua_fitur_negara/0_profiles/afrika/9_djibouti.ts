export const djibouti_profile = {
  "name_en": "Djibouti",
  "capital": "Djibouti",
  "name_id": "Djibouti",
  "lon": 43,
  "lat": 11.5,
  "flag": "🇩🇯",
  "jumlah_penduduk": 1136455,
  "anggaran": 39,
  "pendapatan_nasional": "111",
  "religion": "Islam",
  "ideology": "Konservatisme"
} as const;

import { djibouti_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/9_djibouti";
import { djibouti_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/9_djibouti";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { djibouti_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/9_djibouti";

import { djibouti_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/9_djibouti";
import { djibouti_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/9_djibouti";
import { djibouti_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/9_djibouti";
import { djibouti_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/9_djibouti";
import { djibouti_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/9_djibouti";
import { djibouti_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/9_djibouti";
import { djibouti_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/9_djibouti";
import { djibouti_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/9_djibouti";
import { djibouti_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/9_djibouti";
import { djibouti_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/9_djibouti";
import { djibouti_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/9_djibouti";
import { djibouti_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/9_djibouti";
import { djibouti_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/9_djibouti";
import { djibouti_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/9_djibouti";
import { djibouti_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/9_djibouti";
import { djibouti_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/9_djibouti";
import { djibouti_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/9_djibouti";
import { djibouti_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/9_djibouti";
import { djibouti_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/9_djibouti";
const djibouti_geopolitik = {
    "un_vote": 13,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 10,
      "kekuatan_keras": 3,
      "prestise_diplomatik": 57
  }
  } as const;

export const djibouti: CountryData = {
  ...djibouti_profile,
  "sektor_listrik": djibouti_listrik,
  "hunian": djibouti_hunian,
  "infrastruktur": djibouti_infrastruktur,
  "sektor_ekstraksi": djibouti_ekstraksi,
  "sektor_manufaktur": djibouti_manufaktur,
  "sektor_peternakan": djibouti_peternakan,
  "sektor_agrikultur": djibouti_agrikultur,
  "sektor_perikanan": djibouti_perikanan,
  "sektor_olahan_pangan": djibouti_olahan_pangan,
  "sektor_farmasi": djibouti_farmasi,
  "sektor_pertahanan": djibouti_pertahanan,
  "armada_militer": djibouti_armada,
  "militer_strategis": djibouti_strategis,
  "armada_kepolisian": djibouti_kepolisian,
  "pabrik_militer": djibouti_pabrik,
  "intelijen": djibouti_intelijen,
    "pendidikan": djibouti_pendidikan,
  "kesehatan": djibouti_kesehatan,
  "hukum": djibouti_hukum,
  "sektor_olahraga": djibouti_olahraga,
  "sektor_komersial": djibouti_komersial,
  "sektor_hiburan": djibouti_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 13,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 20.16,
    "harga_telur": 62.2,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": djibouti_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 28,
    "pendidikan": 16,
    "keamanan": 25,
    "keuangan": 18,
    "lingkungan": 60
  }
};


