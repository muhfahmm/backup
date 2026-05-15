export const irlandia_profile = {
  "name_en": "Ireland",
  "capital": "Dublin",
  "name_id": "Irlandia",
  "lon": -8,
  "lat": 53,
  "flag": "🇮🇪",
  "jumlah_penduduk": 5458600,
  "anggaran": 5153,
  "pendapatan_nasional": "14723",
  "religion": "Katolik",
  "ideology": "Kapitalisme"
} as const;

import { irlandia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/118_irlandia";
import { irlandia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/118_irlandia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { irlandia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/118_irlandia";

import { irlandia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/118_irlandia";
import { irlandia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/118_irlandia";
import { irlandia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/118_irlandia";
import { irlandia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/118_irlandia";
import { irlandia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/118_irlandia";
import { irlandia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/118_irlandia";
import { irlandia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/118_irlandia";
import { irlandia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/118_irlandia";
import { irlandia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/118_irlandia";
import { irlandia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/118_irlandia";
import { irlandia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/118_irlandia";
import { irlandia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/118_irlandia";
import { irlandia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/118_irlandia";
import { irlandia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/118_irlandia";
import { irlandia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/118_irlandia";
import { irlandia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/118_irlandia";
import { irlandia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/118_irlandia";
import { irlandia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/118_irlandia";
import { irlandia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/118_irlandia";
const irlandia_geopolitik = {
    "un_vote": 153,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 29,
      "kekuatan_keras": 5,
      "prestise_diplomatik": 57
    }
  } as const;

export const irlandia: CountryData = {
  ...irlandia_profile,
  "sektor_listrik": irlandia_listrik,
  "hunian": irlandia_hunian,
  "infrastruktur": irlandia_infrastruktur,
  "sektor_ekstraksi": irlandia_ekstraksi,
  "sektor_manufaktur": irlandia_manufaktur,
  "sektor_peternakan": irlandia_peternakan,
  "sektor_agrikultur": irlandia_agrikultur,
  "sektor_perikanan": irlandia_perikanan,
  "sektor_olahan_pangan": irlandia_olahan_pangan,
  "sektor_farmasi": irlandia_farmasi,
  "sektor_pertahanan": irlandia_pertahanan,
  "armada_militer": irlandia_armada,
  "militer_strategis": irlandia_strategis,
  "armada_kepolisian": irlandia_kepolisian,
  "pabrik_militer": irlandia_pabrik,
  "intelijen": irlandia_intelijen,
    "pendidikan": irlandia_pendidikan,
  "kesehatan": irlandia_kesehatan,
  "hukum": irlandia_hukum,
  "sektor_olahraga": irlandia_olahraga,
  "sektor_komersial": irlandia_komersial,
  "sektor_hiburan": irlandia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 19
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 365
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 45
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 471
    },
    "lingkungan": {
      "tarif": 39,
      "kepuasan": 88,
      "pendapatan": 364
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 26 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 78 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 343
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 3.2,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": irlandia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 10,
    "keamanan": 18,
    "keuangan": 4,
    "lingkungan": 60
  }
};


