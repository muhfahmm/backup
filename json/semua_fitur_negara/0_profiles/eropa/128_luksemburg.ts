export const luksemburg_profile = {
  "name_en": "Luxembourg",
  "capital": "Luxembourg",
  "name_id": "Luksemburg",
  "lon": 6.07,
  "lat": 49.36,
  "flag": "🇱🇺",
  "jumlah_penduduk": 681973,
  "anggaran": 846,
  "pendapatan_nasional": "2417",
  "religion": "Katolik",
  "ideology": "Kapitalisme"
} as const;

import { luksemburg_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/128_luksemburg";
import { luksemburg_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/128_luksemburg";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { luksemburg_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/128_luksemburg";

import { luksemburg_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/128_luksemburg";
import { luksemburg_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/128_luksemburg";
import { luksemburg_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/128_luksemburg";
import { luksemburg_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/128_luksemburg";
import { luksemburg_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/128_luksemburg";
import { luksemburg_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/128_luksemburg";
import { luksemburg_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/128_luksemburg";
import { luksemburg_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/128_luksemburg";
import { luksemburg_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/128_luksemburg";
import { luksemburg_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/128_luksemburg";
import { luksemburg_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/128_luksemburg";
import { luksemburg_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/128_luksemburg";
import { luksemburg_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/128_luksemburg";
import { luksemburg_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/128_luksemburg";
import { luksemburg_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/128_luksemburg";
import { luksemburg_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/128_luksemburg";
import { luksemburg_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/128_luksemburg";
import { luksemburg_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/128_luksemburg";
import { luksemburg_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/128_luksemburg";
const luksemburg_geopolitik = {
    "un_vote": 67,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 20,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  } as const;

export const luksemburg: CountryData = {
  ...luksemburg_profile,
  "sektor_listrik": luksemburg_listrik,
  "hunian": luksemburg_hunian,
  "infrastruktur": luksemburg_infrastruktur,
  "sektor_ekstraksi": luksemburg_ekstraksi,
  "sektor_manufaktur": luksemburg_manufaktur,
  "sektor_peternakan": luksemburg_peternakan,
  "sektor_agrikultur": luksemburg_agrikultur,
  "sektor_perikanan": luksemburg_perikanan,
  "sektor_olahan_pangan": luksemburg_olahan_pangan,
  "sektor_farmasi": luksemburg_farmasi,
  "sektor_pertahanan": luksemburg_pertahanan,
  "armada_militer": luksemburg_armada,
  "militer_strategis": luksemburg_strategis,
  "armada_kepolisian": luksemburg_kepolisian,
  "pabrik_militer": luksemburg_pabrik,
  "intelijen": luksemburg_intelijen,
    "pendidikan": luksemburg_pendidikan,
  "kesehatan": luksemburg_kesehatan,
  "hukum": luksemburg_hukum,
  "sektor_olahraga": luksemburg_olahraga,
  "sektor_komersial": luksemburg_komersial,
  "sektor_hiburan": luksemburg_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 17
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 31
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 38
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 34
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 31
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 13 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 25
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 11.52,
    "harga_telur": 62.2,
    "harga_bbm": 5.35,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": luksemburg_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 39,
    "keamanan": 39,
    "keuangan": 6,
    "lingkungan": 60
  }
};


