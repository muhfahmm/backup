export const ethiopia_profile = {
  "name_en": "Ethiopia",
  "capital": "Addis Ababa",
  "name_id": "Ethiopia",
  "lon": 38,
  "lat": 8,
  "flag": "🇪🇹",
  "jumlah_penduduk": 111652998,
  "anggaran": 1507,
  "pendapatan_nasional": "4306",
  "religion": "Kristen Ortodoks",
  "ideology": "Nasionalisme"
} as const;

import { ethiopia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/12_ethiopia";
import { ethiopia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/12_ethiopia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { ethiopia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/12_ethiopia";

import { ethiopia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/12_ethiopia";
import { ethiopia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/12_ethiopia";
import { ethiopia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/12_ethiopia";
import { ethiopia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/12_ethiopia";
import { ethiopia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/12_ethiopia";
import { ethiopia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/12_ethiopia";
import { ethiopia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/12_ethiopia";
import { ethiopia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/12_ethiopia";
import { ethiopia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/12_ethiopia";
import { ethiopia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/12_ethiopia";
import { ethiopia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/12_ethiopia";
import { ethiopia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/12_ethiopia";
import { ethiopia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/12_ethiopia";
import { ethiopia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/12_ethiopia";
import { ethiopia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/12_ethiopia";
import { ethiopia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/12_ethiopia";
import { ethiopia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/12_ethiopia";
import { ethiopia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/12_ethiopia";
import { ethiopia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/12_ethiopia";
const ethiopia_geopolitik = {
    "un_vote": 70,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
      "kekuatan_keras": 14,
      "prestise_diplomatik": 57
  }
  } as const;

export const ethiopia: CountryData = {
  ...ethiopia_profile,
  "sektor_listrik": ethiopia_listrik,
  "hunian": ethiopia_hunian,
  "infrastruktur": ethiopia_infrastruktur,
  "sektor_ekstraksi": ethiopia_ekstraksi,
  "sektor_manufaktur": ethiopia_manufaktur,
  "sektor_peternakan": ethiopia_peternakan,
  "sektor_agrikultur": ethiopia_agrikultur,
  "sektor_perikanan": ethiopia_perikanan,
  "sektor_olahan_pangan": ethiopia_olahan_pangan,
  "sektor_farmasi": ethiopia_farmasi,
  "sektor_pertahanan": ethiopia_pertahanan,
  "armada_militer": ethiopia_armada,
  "militer_strategis": ethiopia_strategis,
  "armada_kepolisian": ethiopia_kepolisian,
  "pabrik_militer": ethiopia_pabrik,
  "intelijen": ethiopia_intelijen,
    "pendidikan": ethiopia_pendidikan,
  "kesehatan": ethiopia_kesehatan,
  "hukum": ethiopia_hukum,
  "sektor_olahraga": ethiopia_olahraga,
  "sektor_komersial": ethiopia_komersial,
  "sektor_hiburan": ethiopia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 59
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 82
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 63
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 81
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 50
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 8 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 23 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 18
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": ethiopia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 19,
    "pendidikan": 4,
    "keamanan": 5,
    "keuangan": 33,
    "lingkungan": 60
  }
};


