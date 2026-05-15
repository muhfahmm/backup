export const polandia_profile = {
  "name_en": "Poland",
  "capital": "Warsaw",
  "name_id": "Polandia",
  "lon": 21.01,
  "lat": 52.22,
  "flag": "🇵🇱",
  "jumlah_penduduk": 37296000,
  "anggaran": 8167,
  "pendapatan_nasional": "23335",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { polandia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/135_polandia";
import { polandia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/135_polandia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { polandia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/135_polandia";

import { polandia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/135_polandia";
import { polandia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/135_polandia";
import { polandia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/135_polandia";
import { polandia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/135_polandia";
import { polandia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/135_polandia";
import { polandia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/135_polandia";
import { polandia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/135_polandia";
import { polandia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/135_polandia";
import { polandia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/135_polandia";
import { polandia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/135_polandia";
import { polandia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/135_polandia";
import { polandia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/135_polandia";
import { polandia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/135_polandia";
import { polandia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/135_polandia";
import { polandia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/135_polandia";
import { polandia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/135_polandia";
import { polandia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/135_polandia";
import { polandia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/135_polandia";
import { polandia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/135_polandia";
const polandia_geopolitik = {
    "un_vote": 200,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 39,
      "kekuatan_keras": 23,
      "prestise_diplomatik": 57
    }
  } as const;

export const polandia: CountryData = {
  ...polandia_profile,
  "sektor_listrik": polandia_listrik,
  "hunian": polandia_hunian,
  "infrastruktur": polandia_infrastruktur,
  "sektor_ekstraksi": polandia_ekstraksi,
  "sektor_manufaktur": polandia_manufaktur,
  "sektor_peternakan": polandia_peternakan,
  "sektor_agrikultur": polandia_agrikultur,
  "sektor_perikanan": polandia_perikanan,
  "sektor_olahan_pangan": polandia_olahan_pangan,
  "sektor_farmasi": polandia_farmasi,
  "sektor_pertahanan": polandia_pertahanan,
  "armada_militer": polandia_armada,
  "militer_strategis": polandia_strategis,
  "armada_kepolisian": polandia_kepolisian,
  "pabrik_militer": polandia_pabrik,
  "intelijen": polandia_intelijen,
    "pendidikan": polandia_pendidikan,
  "kesehatan": polandia_kesehatan,
  "hukum": polandia_hukum,
  "sektor_olahraga": polandia_olahraga,
  "sektor_komersial": polandia_komersial,
  "sektor_hiburan": polandia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 112
    },
    "korporasi": {
      "tarif": 26,
      "kepuasan": 52,
      "pendapatan": 392
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 80
    },
    "bea_cukai": {
      "tarif": 34,
      "kepuasan": 86,
      "pendapatan": 763
    },
    "lingkungan": {
      "tarif": 24,
      "kepuasan": 88,
      "pendapatan": 382
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 41 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 123 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 591
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 15.55,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": polandia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 32,
    "keamanan": 17,
    "keuangan": 39,
    "lingkungan": 60
  }
};


