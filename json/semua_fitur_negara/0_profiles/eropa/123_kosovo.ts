export const kosovo_profile = {
  "name_en": "Kosovo",
  "capital": "Pristina",
  "name_id": "Kosovo",
  "lon": 21.166667,
  "lat": 42.666667,
  "flag": "🇽🇰",
  "jumlah_penduduk": "10M",
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Islam",
  "ideology": "Demokrasi"
} as const;

import { kosovo_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/123_kosovo";
import { kosovo_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/123_kosovo";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { kosovo_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/123_kosovo";

import { kosovo_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/123_kosovo";
import { kosovo_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/123_kosovo";
import { kosovo_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/123_kosovo";
import { kosovo_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/123_kosovo";
import { kosovo_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/123_kosovo";
import { kosovo_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/123_kosovo";
import { kosovo_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/123_kosovo";
import { kosovo_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/123_kosovo";
import { kosovo_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/123_kosovo";
import { kosovo_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/123_kosovo";
import { kosovo_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/123_kosovo";
import { kosovo_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/123_kosovo";
import { kosovo_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/123_kosovo";
import { kosovo_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/123_kosovo";
import { kosovo_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/123_kosovo";
import { kosovo_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/123_kosovo";
import { kosovo_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/123_kosovo";
import { kosovo_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/123_kosovo";
import { kosovo_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/123_kosovo";
const kosovo_geopolitik = {
    "un_vote": 7,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 3,
      "prestise_diplomatik": 57
    }
  } as const;

export const kosovo: CountryData = {
  ...kosovo_profile,
  "sektor_listrik": kosovo_listrik,
  "hunian": kosovo_hunian,
  "infrastruktur": kosovo_infrastruktur,
  "sektor_ekstraksi": kosovo_ekstraksi,
  "sektor_manufaktur": kosovo_manufaktur,
  "sektor_peternakan": kosovo_peternakan,
  "sektor_agrikultur": kosovo_agrikultur,
  "sektor_perikanan": kosovo_perikanan,
  "sektor_olahan_pangan": kosovo_olahan_pangan,
  "sektor_farmasi": kosovo_farmasi,
  "sektor_pertahanan": kosovo_pertahanan,
  "armada_militer": kosovo_armada,
  "militer_strategis": kosovo_strategis,
  "armada_kepolisian": kosovo_kepolisian,
  "pabrik_militer": kosovo_pabrik,
  "intelijen": kosovo_intelijen,
    "pendidikan": kosovo_pendidikan,
  "kesehatan": kosovo_kesehatan,
  "hukum": kosovo_hukum,
  "sektor_olahraga": kosovo_olahraga,
  "sektor_komersial": kosovo_komersial,
  "sektor_hiburan": kosovo_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 32,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 2,
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
    "harga_minyak_goreng": 12.32,
    "harga_gula": 28.8,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 10.4,
    "harga_obat": 315.8,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kosovo_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 39,
    "pendidikan": 9,
    "keamanan": 33,
    "keuangan": 9,
    "lingkungan": 60
  }
};


