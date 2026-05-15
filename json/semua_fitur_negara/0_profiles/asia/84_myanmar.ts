export const myanmar_profile = {
  "name_en": "Myanmar",
  "capital": "Naypyidaw",
  "name_id": "Myanmar",
  "lon": 96.07,
  "lat": 19.76,
  "flag": "🇲🇲",
  "jumlah_penduduk": 51375327,
  "anggaran": 583,
  "pendapatan_nasional": "1667",
  "religion": "Buddha",
  "ideology": "Nasionalisme"
} as const;

import { myanmar_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/84_myanmar";
import { myanmar_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/84_myanmar";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { myanmar_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/84_myanmar";

import { myanmar_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/84_myanmar";
import { myanmar_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/84_myanmar";
import { myanmar_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/84_myanmar";
import { myanmar_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/84_myanmar";
import { myanmar_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/84_myanmar";
import { myanmar_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/84_myanmar";
import { myanmar_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/84_myanmar";
import { myanmar_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/84_myanmar";
import { myanmar_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/84_myanmar";
import { myanmar_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/84_myanmar";
import { myanmar_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/84_myanmar";
import { myanmar_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/84_myanmar";
import { myanmar_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/84_myanmar";
import { myanmar_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/84_myanmar";
import { myanmar_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/84_myanmar";
import { myanmar_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/84_myanmar";
import { myanmar_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/84_myanmar";
import { myanmar_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/84_myanmar";
import { myanmar_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/84_myanmar";
const myanmar_geopolitik = {
    "un_vote": 55,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 15,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  } as const;

export const myanmar: CountryData = {
  ...myanmar_profile,
  "sektor_listrik": myanmar_listrik,
  "hunian": myanmar_hunian,
  "infrastruktur": myanmar_infrastruktur,
  "sektor_ekstraksi": myanmar_ekstraksi,
  "sektor_manufaktur": myanmar_manufaktur,
  "sektor_peternakan": myanmar_peternakan,
  "sektor_agrikultur": myanmar_agrikultur,
  "sektor_perikanan": myanmar_perikanan,
  "sektor_olahan_pangan": myanmar_olahan_pangan,
  "sektor_farmasi": myanmar_farmasi,
  "sektor_pertahanan": myanmar_pertahanan,
  "armada_militer": myanmar_armada,
  "militer_strategis": myanmar_strategis,
  "armada_kepolisian": myanmar_kepolisian,
  "pabrik_militer": myanmar_pabrik,
  "intelijen": myanmar_intelijen,
    "pendidikan": myanmar_pendidikan,
  "kesehatan": myanmar_kesehatan,
  "hukum": myanmar_hukum,
  "sektor_olahraga": myanmar_olahraga,
  "sektor_komersial": myanmar_komersial,
  "sektor_hiburan": myanmar_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 43
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 19
    },
    "bea_cukai": {
      "tarif": 29,
      "kepuasan": 86,
      "pendapatan": 45
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 24
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 9 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 17
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 4.16,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": myanmar_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 15,
    "pendidikan": 35,
    "keamanan": 2,
    "keuangan": 13,
    "lingkungan": 60
  }
};


