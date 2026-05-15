export const denmark_profile = {
  "name_en": "Denmark",
  "capital": "Copenhagen",
  "name_id": "Denmark",
  "lon": 12.56,
  "lat": 55.67,
  "flag": "🇩🇰",
  "jumlah_penduduk": 6029607,
  "anggaran": 3986,
  "pendapatan_nasional": "11390",
  "religion": "Protestan",
  "ideology": "Sosialisme"
} as const;

import { denmark_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/112_denmark";
import { denmark_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/112_denmark";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { denmark_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/112_denmark";

import { denmark_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/112_denmark";
import { denmark_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/112_denmark";
import { denmark_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/112_denmark";
import { denmark_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/112_denmark";
import { denmark_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/112_denmark";
import { denmark_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/112_denmark";
import { denmark_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/112_denmark";
import { denmark_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/112_denmark";
import { denmark_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/112_denmark";
import { denmark_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/112_denmark";
import { denmark_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/112_denmark";
import { denmark_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/112_denmark";
import { denmark_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/112_denmark";
import { denmark_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/112_denmark";
import { denmark_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/112_denmark";
import { denmark_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/112_denmark";
import { denmark_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/112_denmark";
import { denmark_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/112_denmark";
import { denmark_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/112_denmark";
const denmark_geopolitik = {
    "un_vote": 184,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 32,
      "kekuatan_keras": 20,
      "prestise_diplomatik": 57
    }
  } as const;

export const denmark: CountryData = {
  ...denmark_profile,
  "sektor_listrik": denmark_listrik,
  "hunian": denmark_hunian,
  "infrastruktur": denmark_infrastruktur,
  "sektor_ekstraksi": denmark_ekstraksi,
  "sektor_manufaktur": denmark_manufaktur,
  "sektor_peternakan": denmark_peternakan,
  "sektor_agrikultur": denmark_agrikultur,
  "sektor_perikanan": denmark_perikanan,
  "sektor_olahan_pangan": denmark_olahan_pangan,
  "sektor_farmasi": denmark_farmasi,
  "sektor_pertahanan": denmark_pertahanan,
  "armada_militer": denmark_armada,
  "militer_strategis": denmark_strategis,
  "armada_kepolisian": denmark_kepolisian,
  "pabrik_militer": denmark_pabrik,
  "intelijen": denmark_intelijen,
    "pendidikan": denmark_pendidikan,
  "kesehatan": denmark_kesehatan,
  "hukum": denmark_hukum,
  "sektor_olahraga": denmark_olahraga,
  "sektor_komersial": denmark_komersial,
  "sektor_hiburan": denmark_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 72
    },
    "korporasi": {
      "tarif": 9,
      "kepuasan": 52,
      "pendapatan": 56
    },
    "penghasilan": {
      "tarif": 21,
      "kepuasan": 61,
      "pendapatan": 107
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 272
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 273
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 20 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 60 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 180
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 5.35,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": denmark_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 33,
    "pendidikan": 32,
    "keamanan": 28,
    "keuangan": 36,
    "lingkungan": 60
  }
};


