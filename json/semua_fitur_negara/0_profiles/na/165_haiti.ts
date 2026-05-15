export const haiti_profile = {
  "name_en": "Haiti",
  "capital": "Port-au-Prince",
  "name_id": "Haiti",
  "lon": -72.41666666,
  "lat": 19,
  "flag": "🇭🇹",
  "jumlah_penduduk": 11867032,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { haiti_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/165_haiti";
import { haiti_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/165_haiti";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { haiti_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/165_haiti";

import { haiti_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/165_haiti";
import { haiti_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/165_haiti";
import { haiti_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/165_haiti";
import { haiti_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/165_haiti";
import { haiti_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/165_haiti";
import { haiti_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/165_haiti";
import { haiti_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/165_haiti";
import { haiti_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/165_haiti";
import { haiti_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/165_haiti";
import { haiti_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/165_haiti";
import { haiti_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/165_haiti";
import { haiti_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/165_haiti";
import { haiti_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/165_haiti";
import { haiti_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/165_haiti";
import { haiti_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/165_haiti";
import { haiti_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/165_haiti";
import { haiti_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/165_haiti";
import { haiti_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/165_haiti";
import { haiti_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/165_haiti";
const haiti_geopolitik = {
    "un_vote": 105,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 32,
      "kekuatan_keras": 15,
      "prestise_diplomatik": 57
    }
  } as const;

export const haiti: CountryData = {
  ...haiti_profile,
  "sektor_listrik": haiti_listrik,
  "hunian": haiti_hunian,
  "infrastruktur": haiti_infrastruktur,
  "sektor_ekstraksi": haiti_ekstraksi,
  "sektor_manufaktur": haiti_manufaktur,
  "sektor_peternakan": haiti_peternakan,
  "sektor_agrikultur": haiti_agrikultur,
  "sektor_perikanan": haiti_perikanan,
  "sektor_olahan_pangan": haiti_olahan_pangan,
  "sektor_farmasi": haiti_farmasi,
  "sektor_pertahanan": haiti_pertahanan,
  "armada_militer": haiti_armada,
  "militer_strategis": haiti_strategis,
  "armada_kepolisian": haiti_kepolisian,
  "pabrik_militer": haiti_pabrik,
  "intelijen": haiti_intelijen,
    "pendidikan": haiti_pendidikan,
  "kesehatan": haiti_kesehatan,
  "hukum": haiti_hukum,
  "sektor_olahraga": haiti_olahraga,
  "sektor_komersial": haiti_komersial,
  "sektor_hiburan": haiti_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 1,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 9
    },
    "bea_cukai": {
      "tarif": 24,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 15.55,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": haiti_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 32,
    "pendidikan": 16,
    "keamanan": 15,
    "keuangan": 7,
    "lingkungan": 60
  }
};


