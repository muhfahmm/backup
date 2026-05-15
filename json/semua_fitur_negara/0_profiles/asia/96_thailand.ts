export const thailand_profile = {
  "name_en": "Thailand",
  "capital": "Bangkok",
  "name_id": "Thailand",
  "lon": 100.5,
  "lat": 13.75,
  "flag": "🇹🇭",
  "jumlah_penduduk": 65826149,
  "anggaran": 4959,
  "pendapatan_nasional": "14168",
  "religion": "Buddha",
  "ideology": "Demokrasi"
} as const;

import { thailand_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/96_thailand";
import { thailand_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/96_thailand";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { thailand_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/96_thailand";

import { thailand_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/96_thailand";
import { thailand_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/96_thailand";
import { thailand_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/96_thailand";
import { thailand_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/96_thailand";
import { thailand_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/96_thailand";
import { thailand_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/96_thailand";
import { thailand_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/96_thailand";
import { thailand_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/96_thailand";
import { thailand_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/96_thailand";
import { thailand_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/96_thailand";
import { thailand_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/96_thailand";
import { thailand_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/96_thailand";
import { thailand_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/96_thailand";
import { thailand_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/96_thailand";
import { thailand_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/96_thailand";
import { thailand_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/96_thailand";
import { thailand_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/96_thailand";
import { thailand_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/96_thailand";
import { thailand_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/96_thailand";
const thailand_geopolitik = {
    "un_vote": 154,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 29,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  } as const;

export const thailand: CountryData = {
  ...thailand_profile,
  "sektor_listrik": thailand_listrik,
  "hunian": thailand_hunian,
  "infrastruktur": thailand_infrastruktur,
  "sektor_ekstraksi": thailand_ekstraksi,
  "sektor_manufaktur": thailand_manufaktur,
  "sektor_peternakan": thailand_peternakan,
  "sektor_agrikultur": thailand_agrikultur,
  "sektor_perikanan": thailand_perikanan,
  "sektor_olahan_pangan": thailand_olahan_pangan,
  "sektor_farmasi": thailand_farmasi,
  "sektor_pertahanan": thailand_pertahanan,
  "armada_militer": thailand_armada,
  "militer_strategis": thailand_strategis,
  "armada_kepolisian": thailand_kepolisian,
  "pabrik_militer": thailand_pabrik,
  "intelijen": thailand_intelijen,
    "pendidikan": thailand_pendidikan,
  "kesehatan": thailand_kesehatan,
  "hukum": thailand_hukum,
  "sektor_olahraga": thailand_olahraga,
  "sektor_komersial": thailand_komersial,
  "sektor_hiburan": thailand_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 307
    },
    "korporasi": {
      "tarif": 39,
      "kepuasan": 52,
      "pendapatan": 520
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 152
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 451
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 43
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 25 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 75 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 135
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 15.55,
    "harga_bbm": 8.56,
    "harga_listrik": 3.2,
    "harga_air": 10.4,
    "harga_obat": 126.32,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": thailand_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 8,
    "pendidikan": 20,
    "keamanan": 9,
    "keuangan": 24,
    "lingkungan": 60
  }
};


