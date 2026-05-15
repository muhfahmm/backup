export const chile_profile = {
  "name_en": "Chile",
  "capital": "Santiago",
  "name_id": "Chile",
  "lon": -71,
  "lat": -30,
  "flag": "🇨🇱",
  "jumlah_penduduk": 20206953,
  "anggaran": 3257,
  "pendapatan_nasional": "9306",
  "religion": "Katolik",
  "ideology": "Liberalisme"
} as const;

import { chile_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/sa/198_chile";
import { chile_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/sa/198_chile";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { chile_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/sa/198_chile";

import { chile_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/sa/198_chile";
import { chile_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/sa/198_chile";
import { chile_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/sa/198_chile";
import { chile_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/sa/198_chile";
import { chile_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/sa/198_chile";
import { chile_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/sa/198_chile";
import { chile_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/sa/198_chile";
import { chile_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/sa/198_chile";
import { chile_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/sa/198_chile";
import { chile_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/sa/198_chile";
import { chile_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/sa/198_chile";
import { chile_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/sa/198_chile";
import { chile_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/sa/198_chile";
import { chile_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/sa/198_chile";
import { chile_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/sa/198_chile";
import { chile_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/sa/198_chile";
import { chile_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/sa/198_chile";
import { chile_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/sa/198_chile";
import { chile_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/sa/198_chile";
const chile_geopolitik = {
    "un_vote": 147,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 26,
      "kekuatan_keras": 4,
      "prestise_diplomatik": 57
    }
  } as const;

export const chile: CountryData = {
  ...chile_profile,
  "sektor_listrik": chile_listrik,
  "hunian": chile_hunian,
  "infrastruktur": chile_infrastruktur,
  "sektor_ekstraksi": chile_ekstraksi,
  "sektor_manufaktur": chile_manufaktur,
  "sektor_peternakan": chile_peternakan,
  "sektor_agrikultur": chile_agrikultur,
  "sektor_perikanan": chile_perikanan,
  "sektor_olahan_pangan": chile_olahan_pangan,
  "sektor_farmasi": chile_farmasi,
  "sektor_pertahanan": chile_pertahanan,
  "armada_militer": chile_armada,
  "militer_strategis": chile_strategis,
  "armada_kepolisian": chile_kepolisian,
  "pabrik_militer": chile_pabrik,
  "intelijen": chile_intelijen,
    "pendidikan": chile_pendidikan,
  "kesehatan": chile_kesehatan,
  "hukum": chile_hukum,
  "sektor_olahraga": chile_olahraga,
  "sektor_komersial": chile_komersial,
  "sektor_hiburan": chile_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 181
    },
    "korporasi": {
      "tarif": 34,
      "kepuasan": 52,
      "pendapatan": 128
    },
    "penghasilan": {
      "tarif": 17,
      "kepuasan": 61,
      "pendapatan": 144
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 133
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 17 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 49 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 68
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 11.52,
    "harga_telur": 15.55,
    "harga_bbm": 5.35,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": chile_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 37,
    "keamanan": 18,
    "keuangan": 40,
    "lingkungan": 60
  }
};


