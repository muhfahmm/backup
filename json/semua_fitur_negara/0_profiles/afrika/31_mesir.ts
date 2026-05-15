export const mesir_profile = {
  "name_en": "Egypt",
  "capital": "Cairo",
  "name_id": "Mesir",
  "lon": 31.23,
  "lat": 30.04,
  "flag": "🇪🇬",
  "jumlah_penduduk": 107868296,
  "anggaran": 3841,
  "pendapatan_nasional": "10973",
  "religion": "Islam",
  "ideology": "Nasionalisme"
} as const;

import { mesir_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/31_mesir";
import { mesir_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/31_mesir";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { mesir_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/31_mesir";

import { mesir_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/31_mesir";
import { mesir_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/31_mesir";
import { mesir_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/31_mesir";
import { mesir_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/31_mesir";
import { mesir_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/31_mesir";
import { mesir_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/31_mesir";
import { mesir_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/31_mesir";
import { mesir_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/31_mesir";
import { mesir_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/31_mesir";
import { mesir_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/31_mesir";
import { mesir_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/31_mesir";
import { mesir_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/31_mesir";
import { mesir_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/31_mesir";
import { mesir_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/31_mesir";
import { mesir_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/31_mesir";
import { mesir_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/31_mesir";
import { mesir_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/31_mesir";
import { mesir_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/31_mesir";
import { mesir_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/31_mesir";
const mesir_geopolitik = {
    "un_vote": 159,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 6,
      "kekuatan_keras": 34,
      "prestise_diplomatik": 57
  }
  } as const;

export const mesir: CountryData = {
  ...mesir_profile,
  "sektor_listrik": mesir_listrik,
  "hunian": mesir_hunian,
  "infrastruktur": mesir_infrastruktur,
  "sektor_ekstraksi": mesir_ekstraksi,
  "sektor_manufaktur": mesir_manufaktur,
  "sektor_peternakan": mesir_peternakan,
  "sektor_agrikultur": mesir_agrikultur,
  "sektor_perikanan": mesir_perikanan,
  "sektor_olahan_pangan": mesir_olahan_pangan,
  "sektor_farmasi": mesir_farmasi,
  "sektor_pertahanan": mesir_pertahanan,
  "armada_militer": mesir_armada,
  "militer_strategis": mesir_strategis,
  "armada_kepolisian": mesir_kepolisian,
  "pabrik_militer": mesir_pabrik,
  "intelijen": mesir_intelijen,
    "pendidikan": mesir_pendidikan,
  "kesehatan": mesir_kesehatan,
  "hukum": mesir_hukum,
  "sektor_olahraga": mesir_olahraga,
  "sektor_komersial": mesir_komersial,
  "sektor_hiburan": mesir_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 352
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 169
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 62
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 209
    },
    "lingkungan": {
      "tarif": 20,
      "kepuasan": 88,
      "pendapatan": 160
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 20 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 58 },
    "lainnya": {
      "tarif": 24,
      "kepuasan": 93,
      "pendapatan": 137
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 62.2,
    "harga_bbm": 14.98,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 126.32,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": mesir_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 30,
    "pendidikan": 16,
    "keamanan": 4,
    "keuangan": 23,
    "lingkungan": 60
  }
};


