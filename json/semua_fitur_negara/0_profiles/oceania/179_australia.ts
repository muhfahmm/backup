export const australia_profile = {
  "name_en": "Australia",
  "capital": "Canberra",
  "name_id": "Australia",
  "lon": 149.13,
  "lat": -35.28,
  "flag": "🇦🇺",
  "jumlah_penduduk": 26177413,
  "anggaran": 16724,
  "pendapatan_nasional": "47782",
  "religion": "Protestan",
  "ideology": "Kapitalisme"
} as const;

import { australia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/oceania/179_australia";
import { australia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/oceania/179_australia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { australia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/oceania/179_australia";

import { australia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/oceania/179_australia";
import { australia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/oceania/179_australia";
import { australia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/oceania/179_australia";
import { australia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/oceania/179_australia";
import { australia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/oceania/179_australia";
import { australia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/oceania/179_australia";
import { australia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/oceania/179_australia";
import { australia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/oceania/179_australia";
import { australia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/oceania/179_australia";
import { australia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/oceania/179_australia";
import { australia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/oceania/179_australia";
import { australia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/oceania/179_australia";
import { australia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/oceania/179_australia";
import { australia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/oceania/179_australia";
import { australia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/oceania/179_australia";
import { australia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/oceania/179_australia";
import { australia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/oceania/179_australia";
import { australia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/oceania/179_australia";
import { australia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/oceania/179_australia";
const australia_geopolitik = {
    "un_vote": 112,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 6,
      "kekuatan_keras": 21,
      "prestise_diplomatik": 57
    }
  } as const;

export const australia: CountryData = {
  ...australia_profile,
  "sektor_listrik": australia_listrik,
  "hunian": australia_hunian,
  "infrastruktur": australia_infrastruktur,
  "sektor_ekstraksi": australia_ekstraksi,
  "sektor_manufaktur": australia_manufaktur,
  "sektor_peternakan": australia_peternakan,
  "sektor_agrikultur": australia_agrikultur,
  "sektor_perikanan": australia_perikanan,
  "sektor_olahan_pangan": australia_olahan_pangan,
  "sektor_farmasi": australia_farmasi,
  "sektor_pertahanan": australia_pertahanan,
  "armada_militer": australia_armada,
  "militer_strategis": australia_strategis,
  "armada_kepolisian": australia_kepolisian,
  "pabrik_militer": australia_pabrik,
  "intelijen": australia_intelijen,
    "pendidikan": australia_pendidikan,
  "kesehatan": australia_kesehatan,
  "hukum": australia_hukum,
  "sektor_olahraga": australia_olahraga,
  "sektor_komersial": australia_komersial,
  "sektor_hiburan": australia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 392
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 213
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 209
    },
    "bea_cukai": {
      "tarif": 13,
      "kepuasan": 86,
      "pendapatan": 509
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 635
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 84 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 251 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 764
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 43.54,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": australia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 7,
    "keamanan": 1,
    "keuangan": 14,
    "lingkungan": 60
  }
};


