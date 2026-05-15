export const somalia_profile = {
  "name_en": "Somalia",
  "capital": "Mogadishu",
  "name_id": "Somalia",
  "lon": 49,
  "lat": 10,
  "flag": "🇸🇴",
  "jumlah_penduduk": 19655000,
  "anggaran": 78,
  "pendapatan_nasional": "222",
  "religion": "Islam",
  "ideology": "Konservatisme"
} as const;

import { somalia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/49_somalia";
import { somalia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/49_somalia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { somalia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/49_somalia";

import { somalia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/49_somalia";
import { somalia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/49_somalia";
import { somalia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/49_somalia";
import { somalia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/49_somalia";
import { somalia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/49_somalia";
import { somalia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/49_somalia";
import { somalia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/49_somalia";
import { somalia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/49_somalia";
import { somalia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/49_somalia";
import { somalia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/49_somalia";
import { somalia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/49_somalia";
import { somalia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/49_somalia";
import { somalia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/49_somalia";
import { somalia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/49_somalia";
import { somalia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/49_somalia";
import { somalia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/49_somalia";
import { somalia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/49_somalia";
import { somalia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/49_somalia";
import { somalia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/49_somalia";
const somalia_geopolitik = {
    "un_vote": 98,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 35,
      "kekuatan_keras": 10,
      "prestise_diplomatik": 57
  }
  } as const;

export const somalia: CountryData = {
  ...somalia_profile,
  "sektor_listrik": somalia_listrik,
  "hunian": somalia_hunian,
  "infrastruktur": somalia_infrastruktur,
  "sektor_ekstraksi": somalia_ekstraksi,
  "sektor_manufaktur": somalia_manufaktur,
  "sektor_peternakan": somalia_peternakan,
  "sektor_agrikultur": somalia_agrikultur,
  "sektor_perikanan": somalia_perikanan,
  "sektor_olahan_pangan": somalia_olahan_pangan,
  "sektor_farmasi": somalia_farmasi,
  "sektor_pertahanan": somalia_pertahanan,
  "armada_militer": somalia_armada,
  "militer_strategis": somalia_strategis,
  "armada_kepolisian": somalia_kepolisian,
  "pabrik_militer": somalia_pabrik,
  "intelijen": somalia_intelijen,
    "pendidikan": somalia_pendidikan,
  "kesehatan": somalia_kesehatan,
  "hukum": somalia_hukum,
  "sektor_olahraga": somalia_olahraga,
  "sektor_komersial": somalia_komersial,
  "sektor_hiburan": somalia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 12,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": somalia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 8,
    "pendidikan": 11,
    "keamanan": 24,
    "keuangan": 13,
    "lingkungan": 60
  }
};


