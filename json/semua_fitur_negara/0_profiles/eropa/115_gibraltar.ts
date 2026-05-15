export const gibraltar_profile = {
  "name_en": "Gibraltar",
  "capital": "Gibraltar",
  "name_id": "Gibraltar",
  "lon": -5.35,
  "lat": 36.13333333,
  "flag": "🇬🇮",
  "jumlah_penduduk": 32688,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { gibraltar_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/115_gibraltar";
import { gibraltar_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/115_gibraltar";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { gibraltar_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/115_gibraltar";

import { gibraltar_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/115_gibraltar";
import { gibraltar_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/115_gibraltar";
import { gibraltar_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/115_gibraltar";
import { gibraltar_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/115_gibraltar";
import { gibraltar_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/115_gibraltar";
import { gibraltar_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/115_gibraltar";
import { gibraltar_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/115_gibraltar";
import { gibraltar_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/115_gibraltar";
import { gibraltar_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/115_gibraltar";
import { gibraltar_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/115_gibraltar";
import { gibraltar_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/115_gibraltar";
import { gibraltar_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/115_gibraltar";
import { gibraltar_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/115_gibraltar";
import { gibraltar_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/115_gibraltar";
import { gibraltar_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/115_gibraltar";
import { gibraltar_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/115_gibraltar";
import { gibraltar_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/115_gibraltar";
import { gibraltar_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/115_gibraltar";
import { gibraltar_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/115_gibraltar";
const gibraltar_geopolitik = {
    "un_vote": 23,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 13,
      "kekuatan_keras": 16,
      "prestise_diplomatik": 57
    }
  } as const;

export const gibraltar: CountryData = {
  ...gibraltar_profile,
  "sektor_listrik": gibraltar_listrik,
  "hunian": gibraltar_hunian,
  "infrastruktur": gibraltar_infrastruktur,
  "sektor_ekstraksi": gibraltar_ekstraksi,
  "sektor_manufaktur": gibraltar_manufaktur,
  "sektor_peternakan": gibraltar_peternakan,
  "sektor_agrikultur": gibraltar_agrikultur,
  "sektor_perikanan": gibraltar_perikanan,
  "sektor_olahan_pangan": gibraltar_olahan_pangan,
  "sektor_farmasi": gibraltar_farmasi,
  "sektor_pertahanan": gibraltar_pertahanan,
  "armada_militer": gibraltar_armada,
  "militer_strategis": gibraltar_strategis,
  "armada_kepolisian": gibraltar_kepolisian,
  "pabrik_militer": gibraltar_pabrik,
  "intelijen": gibraltar_intelijen,
    "pendidikan": gibraltar_pendidikan,
  "kesehatan": gibraltar_kesehatan,
  "hukum": gibraltar_hukum,
  "sektor_olahraga": gibraltar_olahraga,
  "sektor_komersial": gibraltar_komersial,
  "sektor_hiburan": gibraltar_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 23,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 7.2,
    "harga_telur": 24.88,
    "harga_bbm": 14.98,
    "harga_listrik": 1.28,
    "harga_air": 10.4,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": gibraltar_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 36,
    "pendidikan": 18,
    "keamanan": 35,
    "keuangan": 39,
    "lingkungan": 60
  }
};


