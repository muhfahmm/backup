export const tunisia_profile = {
  "name_en": "Tunisia",
  "capital": "Tunis",
  "name_id": "Tunisia",
  "lon": 9,
  "lat": 34,
  "flag": "🇹🇳",
  "jumlah_penduduk": 11972169,
  "anggaran": 457,
  "pendapatan_nasional": "1306",
  "religion": "Islam",
  "ideology": "Nasionalisme"
} as const;

import { tunisia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/53_tunisia";
import { tunisia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/53_tunisia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { tunisia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/53_tunisia";

import { tunisia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/53_tunisia";
import { tunisia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/53_tunisia";
import { tunisia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/53_tunisia";
import { tunisia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/53_tunisia";
import { tunisia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/53_tunisia";
import { tunisia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/53_tunisia";
import { tunisia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/53_tunisia";
import { tunisia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/53_tunisia";
import { tunisia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/53_tunisia";
import { tunisia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/53_tunisia";
import { tunisia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/53_tunisia";
import { tunisia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/53_tunisia";
import { tunisia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/53_tunisia";
import { tunisia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/53_tunisia";
import { tunisia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/53_tunisia";
import { tunisia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/53_tunisia";
import { tunisia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/53_tunisia";
import { tunisia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/53_tunisia";
import { tunisia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/53_tunisia";
const tunisia_geopolitik = {
    "un_vote": 59,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
      "kekuatan_keras": 26,
      "prestise_diplomatik": 57
  }
  } as const;

export const tunisia: CountryData = {
  ...tunisia_profile,
  "sektor_listrik": tunisia_listrik,
  "hunian": tunisia_hunian,
  "infrastruktur": tunisia_infrastruktur,
  "sektor_ekstraksi": tunisia_ekstraksi,
  "sektor_manufaktur": tunisia_manufaktur,
  "sektor_peternakan": tunisia_peternakan,
  "sektor_agrikultur": tunisia_agrikultur,
  "sektor_perikanan": tunisia_perikanan,
  "sektor_olahan_pangan": tunisia_olahan_pangan,
  "sektor_farmasi": tunisia_farmasi,
  "sektor_pertahanan": tunisia_pertahanan,
  "armada_militer": tunisia_armada,
  "militer_strategis": tunisia_strategis,
  "armada_kepolisian": tunisia_kepolisian,
  "pabrik_militer": tunisia_pabrik,
  "intelijen": tunisia_intelijen,
    "pendidikan": tunisia_pendidikan,
  "kesehatan": tunisia_kesehatan,
  "hukum": tunisia_hukum,
  "sektor_olahraga": tunisia_olahraga,
  "sektor_komersial": tunisia_komersial,
  "sektor_hiburan": tunisia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 24
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 2,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 7.2,
    "harga_telur": 43.54,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": tunisia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 19,
    "pendidikan": 39,
    "keamanan": 14,
    "keuangan": 16,
    "lingkungan": 60
  }
};


