export const liechtenstein_profile = {
  "name_en": "Liechtenstein",
  "capital": "Vaduz",
  "name_id": "Liechtenstein",
  "lon": 9.31,
  "lat": 47.08,
  "flag": "🇱🇮",
  "jumlah_penduduk": 41237,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Monarki"
} as const;

import { liechtenstein_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/126_liechtenstein";
import { liechtenstein_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/126_liechtenstein";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { liechtenstein_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/126_liechtenstein";

import { liechtenstein_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/126_liechtenstein";
import { liechtenstein_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/126_liechtenstein";
import { liechtenstein_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/126_liechtenstein";
import { liechtenstein_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/126_liechtenstein";
import { liechtenstein_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/126_liechtenstein";
import { liechtenstein_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/126_liechtenstein";
import { liechtenstein_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/126_liechtenstein";
import { liechtenstein_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/126_liechtenstein";
import { liechtenstein_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/126_liechtenstein";
import { liechtenstein_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/126_liechtenstein";
import { liechtenstein_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/126_liechtenstein";
import { liechtenstein_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/126_liechtenstein";
import { liechtenstein_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/126_liechtenstein";
import { liechtenstein_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/126_liechtenstein";
import { liechtenstein_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/126_liechtenstein";
import { liechtenstein_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/126_liechtenstein";
import { liechtenstein_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/126_liechtenstein";
import { liechtenstein_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/126_liechtenstein";
import { liechtenstein_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/126_liechtenstein";
const liechtenstein_geopolitik = {
    "un_vote": 20,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
      "kekuatan_keras": 28,
      "prestise_diplomatik": 57
    }
  } as const;

export const liechtenstein: CountryData = {
  ...liechtenstein_profile,
  "sektor_listrik": liechtenstein_listrik,
  "hunian": liechtenstein_hunian,
  "infrastruktur": liechtenstein_infrastruktur,
  "sektor_ekstraksi": liechtenstein_ekstraksi,
  "sektor_manufaktur": liechtenstein_manufaktur,
  "sektor_peternakan": liechtenstein_peternakan,
  "sektor_agrikultur": liechtenstein_agrikultur,
  "sektor_perikanan": liechtenstein_perikanan,
  "sektor_olahan_pangan": liechtenstein_olahan_pangan,
  "sektor_farmasi": liechtenstein_farmasi,
  "sektor_pertahanan": liechtenstein_pertahanan,
  "armada_militer": liechtenstein_armada,
  "militer_strategis": liechtenstein_strategis,
  "armada_kepolisian": liechtenstein_kepolisian,
  "pabrik_militer": liechtenstein_pabrik,
  "intelijen": liechtenstein_intelijen,
    "pendidikan": liechtenstein_pendidikan,
  "kesehatan": liechtenstein_kesehatan,
  "hukum": liechtenstein_hukum,
  "sektor_olahraga": liechtenstein_olahraga,
  "sektor_komersial": liechtenstein_komersial,
  "sektor_hiburan": liechtenstein_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 28.8,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": liechtenstein_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 24,
    "pendidikan": 31,
    "keamanan": 20,
    "keuangan": 29,
    "lingkungan": 60
  }
};


