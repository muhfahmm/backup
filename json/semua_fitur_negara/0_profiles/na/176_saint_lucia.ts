export const saint_lucia_profile = {
  "name_en": "Saint Lucia",
  "capital": "Castries",
  "name_id": "Saint lucia",
  "lon": -60.96666666,
  "lat": 13.88333333,
  "flag": "🇱🇨",
  "jumlah_penduduk": 184100,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { saint_lucia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/176_saint_lucia";
import { saint_lucia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/176_saint_lucia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { saint_lucia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/176_saint_lucia";

import { saint_lucia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/176_saint_lucia";
import { saint_lucia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/176_saint_lucia";
import { saint_lucia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/176_saint_lucia";
import { saint_lucia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/176_saint_lucia";
import { saint_lucia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/176_saint_lucia";
import { saint_lucia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/176_saint_lucia";
import { saint_lucia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/176_saint_lucia";
import { saint_lucia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/176_saint_lucia";
import { saint_lucia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/176_saint_lucia";
import { saint_lucia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/176_saint_lucia";
import { saint_lucia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/176_saint_lucia";
import { saint_lucia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/176_saint_lucia";
import { saint_lucia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/176_saint_lucia";
import { saint_lucia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/176_saint_lucia";
import { saint_lucia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/176_saint_lucia";
import { saint_lucia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/176_saint_lucia";
import { saint_lucia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/176_saint_lucia";
import { saint_lucia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/176_saint_lucia";
import { saint_lucia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/176_saint_lucia";
const saint_lucia_geopolitik = {
    "un_vote": 17,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 19,
      "prestise_diplomatik": 57
    }
  } as const;

export const saint_lucia: CountryData = {
  ...saint_lucia_profile,
  "sektor_listrik": saint_lucia_listrik,
  "hunian": saint_lucia_hunian,
  "infrastruktur": saint_lucia_infrastruktur,
  "sektor_ekstraksi": saint_lucia_ekstraksi,
  "sektor_manufaktur": saint_lucia_manufaktur,
  "sektor_peternakan": saint_lucia_peternakan,
  "sektor_agrikultur": saint_lucia_agrikultur,
  "sektor_perikanan": saint_lucia_perikanan,
  "sektor_olahan_pangan": saint_lucia_olahan_pangan,
  "sektor_farmasi": saint_lucia_farmasi,
  "sektor_pertahanan": saint_lucia_pertahanan,
  "armada_militer": saint_lucia_armada,
  "militer_strategis": saint_lucia_strategis,
  "armada_kepolisian": saint_lucia_kepolisian,
  "pabrik_militer": saint_lucia_pabrik,
  "intelijen": saint_lucia_intelijen,
    "pendidikan": saint_lucia_pendidikan,
  "kesehatan": saint_lucia_kesehatan,
  "hukum": saint_lucia_hukum,
  "sektor_olahraga": saint_lucia_olahraga,
  "sektor_komersial": saint_lucia_komersial,
  "sektor_hiburan": saint_lucia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 16,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 28.8,
    "harga_telur": 15.55,
    "harga_bbm": 14.98,
    "harga_listrik": 1.28,
    "harga_air": 7.28,
    "harga_obat": 126.32,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": saint_lucia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 21,
    "keamanan": 16,
    "keuangan": 28,
    "lingkungan": 60
  }
};


