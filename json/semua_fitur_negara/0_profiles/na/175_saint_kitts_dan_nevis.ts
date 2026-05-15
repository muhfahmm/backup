export const saint_kitts_dan_nevis_profile = {
  "name_en": "Saint Kitts and Nevis",
  "capital": "Basseterre",
  "name_id": "Saint kitts dan nevis",
  "lon": -62.75,
  "lat": 17.33333333,
  "flag": "🇰🇳",
  "jumlah_penduduk": 51320,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { saint_kitts_dan_nevis_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/175_saint_kitts_dan_nevis";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { saint_kitts_dan_nevis_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/175_saint_kitts_dan_nevis";

import { saint_kitts_dan_nevis_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/175_saint_kitts_dan_nevis";
import { saint_kitts_dan_nevis_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/175_saint_kitts_dan_nevis";
const saint_kitts_dan_nevis_geopolitik = {
    "un_vote": 64,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 16,
      "kekuatan_keras": 35,
      "prestise_diplomatik": 57
    }
  } as const;

export const saint_kitts_dan_nevis: CountryData = {
  ...saint_kitts_dan_nevis_profile,
  "sektor_listrik": saint_kitts_dan_nevis_listrik,
  "hunian": saint_kitts_dan_nevis_hunian,
  "infrastruktur": saint_kitts_dan_nevis_infrastruktur,
  "sektor_ekstraksi": saint_kitts_dan_nevis_ekstraksi,
  "sektor_manufaktur": saint_kitts_dan_nevis_manufaktur,
  "sektor_peternakan": saint_kitts_dan_nevis_peternakan,
  "sektor_agrikultur": saint_kitts_dan_nevis_agrikultur,
  "sektor_perikanan": saint_kitts_dan_nevis_perikanan,
  "sektor_olahan_pangan": saint_kitts_dan_nevis_olahan_pangan,
  "sektor_farmasi": saint_kitts_dan_nevis_farmasi,
  "sektor_pertahanan": saint_kitts_dan_nevis_pertahanan,
  "armada_militer": saint_kitts_dan_nevis_armada,
  "militer_strategis": saint_kitts_dan_nevis_strategis,
  "armada_kepolisian": saint_kitts_dan_nevis_kepolisian,
  "pabrik_militer": saint_kitts_dan_nevis_pabrik,
  "intelijen": saint_kitts_dan_nevis_intelijen,
    "pendidikan": saint_kitts_dan_nevis_pendidikan,
  "kesehatan": saint_kitts_dan_nevis_kesehatan,
  "hukum": saint_kitts_dan_nevis_hukum,
  "sektor_olahraga": saint_kitts_dan_nevis_olahraga,
  "sektor_komersial": saint_kitts_dan_nevis_komersial,
  "sektor_hiburan": saint_kitts_dan_nevis_hiburan,
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
      "tarif": 26,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 13,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 24,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 8.56,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": saint_kitts_dan_nevis_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 9,
    "keamanan": 5,
    "keuangan": 22,
    "lingkungan": 60
  }
};


