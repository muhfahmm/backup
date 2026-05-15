export const portugal_profile = {
  "name_en": "Portugal",
  "capital": "Lisbon",
  "name_id": "Portugal",
  "lon": -9.13,
  "lat": 38.72,
  "flag": "🇵🇹",
  "jumlah_penduduk": 10749635,
  "anggaran": 2722,
  "pendapatan_nasional": "7778",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { portugal_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/136_portugal";
import { portugal_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/136_portugal";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { portugal_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/136_portugal";

import { portugal_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/136_portugal";
import { portugal_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/136_portugal";
import { portugal_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/136_portugal";
import { portugal_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/136_portugal";
import { portugal_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/136_portugal";
import { portugal_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/136_portugal";
import { portugal_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/136_portugal";
import { portugal_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/136_portugal";
import { portugal_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/136_portugal";
import { portugal_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/136_portugal";
import { portugal_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/136_portugal";
import { portugal_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/136_portugal";
import { portugal_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/136_portugal";
import { portugal_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/136_portugal";
import { portugal_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/136_portugal";
import { portugal_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/136_portugal";
import { portugal_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/136_portugal";
import { portugal_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/136_portugal";
import { portugal_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/136_portugal";
const portugal_geopolitik = {
    "un_vote": 194,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 30,
      "prestise_diplomatik": 57
    }
  } as const;

export const portugal: CountryData = {
  ...portugal_profile,
  "sektor_listrik": portugal_listrik,
  "hunian": portugal_hunian,
  "infrastruktur": portugal_infrastruktur,
  "sektor_ekstraksi": portugal_ekstraksi,
  "sektor_manufaktur": portugal_manufaktur,
  "sektor_peternakan": portugal_peternakan,
  "sektor_agrikultur": portugal_agrikultur,
  "sektor_perikanan": portugal_perikanan,
  "sektor_olahan_pangan": portugal_olahan_pangan,
  "sektor_farmasi": portugal_farmasi,
  "sektor_pertahanan": portugal_pertahanan,
  "armada_militer": portugal_armada,
  "militer_strategis": portugal_strategis,
  "armada_kepolisian": portugal_kepolisian,
  "pabrik_militer": portugal_pabrik,
  "intelijen": portugal_intelijen,
    "pendidikan": portugal_pendidikan,
  "kesehatan": portugal_kesehatan,
  "hukum": portugal_hukum,
  "sektor_olahraga": portugal_olahraga,
  "sektor_komersial": portugal_komersial,
  "sektor_hiburan": portugal_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 114
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 204
    },
    "penghasilan": {
      "tarif": 16,
      "kepuasan": 61,
      "pendapatan": 52
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 32
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 99
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 14 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 41 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 194
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 0.8,
    "harga_air": 2.6,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": portugal_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 33,
    "keamanan": 9,
    "keuangan": 12,
    "lingkungan": 60
  }
};


