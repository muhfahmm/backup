export const montenegro_profile = {
  "name_en": "Montenegro",
  "capital": "Podgorica",
  "name_id": "Montenegro",
  "lon": 19.3,
  "lat": 42.5,
  "flag": "🇲🇪",
  "jumlah_penduduk": 626485,
  "anggaran": 68,
  "pendapatan_nasional": "194",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi"
} as const;

import { montenegro_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/133_montenegro";
import { montenegro_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/133_montenegro";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { montenegro_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/133_montenegro";

import { montenegro_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/133_montenegro";
import { montenegro_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/133_montenegro";
import { montenegro_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/133_montenegro";
import { montenegro_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/133_montenegro";
import { montenegro_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/133_montenegro";
import { montenegro_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/133_montenegro";
import { montenegro_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/133_montenegro";
import { montenegro_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/133_montenegro";
import { montenegro_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/133_montenegro";
import { montenegro_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/133_montenegro";
import { montenegro_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/133_montenegro";
import { montenegro_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/133_montenegro";
import { montenegro_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/133_montenegro";
import { montenegro_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/133_montenegro";
import { montenegro_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/133_montenegro";
import { montenegro_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/133_montenegro";
import { montenegro_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/133_montenegro";
import { montenegro_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/133_montenegro";
import { montenegro_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/133_montenegro";
const montenegro_geopolitik = {
    "un_vote": 104,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 21,
      "kekuatan_keras": 34,
      "prestise_diplomatik": 57
    }
  } as const;

export const montenegro: CountryData = {
  ...montenegro_profile,
  "sektor_listrik": montenegro_listrik,
  "hunian": montenegro_hunian,
  "infrastruktur": montenegro_infrastruktur,
  "sektor_ekstraksi": montenegro_ekstraksi,
  "sektor_manufaktur": montenegro_manufaktur,
  "sektor_peternakan": montenegro_peternakan,
  "sektor_agrikultur": montenegro_agrikultur,
  "sektor_perikanan": montenegro_perikanan,
  "sektor_olahan_pangan": montenegro_olahan_pangan,
  "sektor_farmasi": montenegro_farmasi,
  "sektor_pertahanan": montenegro_pertahanan,
  "armada_militer": montenegro_armada,
  "militer_strategis": montenegro_strategis,
  "armada_kepolisian": montenegro_kepolisian,
  "pabrik_militer": montenegro_pabrik,
  "intelijen": montenegro_intelijen,
    "pendidikan": montenegro_pendidikan,
  "kesehatan": montenegro_kesehatan,
  "hukum": montenegro_hukum,
  "sektor_olahraga": montenegro_olahraga,
  "sektor_komersial": montenegro_komersial,
  "sektor_hiburan": montenegro_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 37,
      "kepuasan": 88,
      "pendapatan": 4
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
    "harga_daging_sapi": 145.74,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 62.2,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 126.32,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": montenegro_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 4,
    "pendidikan": 39,
    "keamanan": 9,
    "keuangan": 21,
    "lingkungan": 60
  }
};


