export const makau_profile = {
  "name_en": "Macau",
  "capital": "N/A",
  "name_id": "Makau",
  "lon": 113.55,
  "lat": 22.16666666,
  "flag": "🇲🇴",
  "jumlah_penduduk": "10M",
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Buddha",
  "ideology": "Kapitalisme"
} as const;

import { makau_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/80_makau";
import { makau_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/80_makau";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { makau_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/80_makau";

import { makau_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/80_makau";
import { makau_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/80_makau";
import { makau_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/80_makau";
import { makau_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/80_makau";
import { makau_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/80_makau";
import { makau_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/80_makau";
import { makau_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/80_makau";
import { makau_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/80_makau";
import { makau_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/80_makau";
import { makau_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/80_makau";
import { makau_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/80_makau";
import { makau_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/80_makau";
import { makau_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/80_makau";
import { makau_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/80_makau";
import { makau_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/80_makau";
import { makau_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/80_makau";
import { makau_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/80_makau";
import { makau_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/80_makau";
import { makau_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/80_makau";
const makau_geopolitik = {
    "un_vote": 8,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 21,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  } as const;

export const makau: CountryData = {
  ...makau_profile,
  "sektor_listrik": makau_listrik,
  "hunian": makau_hunian,
  "infrastruktur": makau_infrastruktur,
  "sektor_ekstraksi": makau_ekstraksi,
  "sektor_manufaktur": makau_manufaktur,
  "sektor_peternakan": makau_peternakan,
  "sektor_agrikultur": makau_agrikultur,
  "sektor_perikanan": makau_perikanan,
  "sektor_olahan_pangan": makau_olahan_pangan,
  "sektor_farmasi": makau_farmasi,
  "sektor_pertahanan": makau_pertahanan,
  "armada_militer": makau_armada,
  "militer_strategis": makau_strategis,
  "armada_kepolisian": makau_kepolisian,
  "pabrik_militer": makau_pabrik,
  "intelijen": makau_intelijen,
    "pendidikan": makau_pendidikan,
  "kesehatan": makau_kesehatan,
  "hukum": makau_hukum,
  "sektor_olahraga": makau_olahraga,
  "sektor_komersial": makau_komersial,
  "sektor_hiburan": makau_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 18,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 7.2,
    "harga_telur": 24.88,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": makau_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 17,
    "pendidikan": 22,
    "keamanan": 6,
    "keuangan": 22,
    "lingkungan": 60
  }
};


