export const korea_selatan_profile = {
  "name_en": "South Korea",
  "capital": "Seoul",
  "name_id": "Korea Selatan",
  "lon": 126.97,
  "lat": 37.56,
  "flag": "🇰🇷",
  "jumlah_penduduk": "10M",
  "anggaran": 17112,
  "pendapatan_nasional": "48893",
  "religion": "Ateisme",
  "ideology": "Kapitalisme"
} as const;

import { korea_selatan_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/75_korea_selatan";
import { korea_selatan_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/75_korea_selatan";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { korea_selatan_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/75_korea_selatan";

import { korea_selatan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/75_korea_selatan";
import { korea_selatan_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/75_korea_selatan";
import { korea_selatan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/75_korea_selatan";
import { korea_selatan_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/75_korea_selatan";
import { korea_selatan_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/75_korea_selatan";
import { korea_selatan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/75_korea_selatan";
import { korea_selatan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/75_korea_selatan";
import { korea_selatan_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/75_korea_selatan";
import { korea_selatan_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/75_korea_selatan";
import { korea_selatan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/75_korea_selatan";
import { korea_selatan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/75_korea_selatan";
import { korea_selatan_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/75_korea_selatan";
import { korea_selatan_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/75_korea_selatan";
import { korea_selatan_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/75_korea_selatan";
import { korea_selatan_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/75_korea_selatan";
import { korea_selatan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/75_korea_selatan";
import { korea_selatan_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/75_korea_selatan";
import { korea_selatan_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/75_korea_selatan";
import { korea_selatan_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/75_korea_selatan";
const korea_selatan_geopolitik = {
    "un_vote": 185,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 33,
      "kekuatan_keras": 29,
      "prestise_diplomatik": 57
    }
  } as const;

export const korea_selatan: CountryData = {
  ...korea_selatan_profile,
  "sektor_listrik": korea_selatan_listrik,
  "hunian": korea_selatan_hunian,
  "infrastruktur": korea_selatan_infrastruktur,
  "sektor_ekstraksi": korea_selatan_ekstraksi,
  "sektor_manufaktur": korea_selatan_manufaktur,
  "sektor_peternakan": korea_selatan_peternakan,
  "sektor_agrikultur": korea_selatan_agrikultur,
  "sektor_perikanan": korea_selatan_perikanan,
  "sektor_olahan_pangan": korea_selatan_olahan_pangan,
  "sektor_farmasi": korea_selatan_farmasi,
  "sektor_pertahanan": korea_selatan_pertahanan,
  "armada_militer": korea_selatan_armada,
  "militer_strategis": korea_selatan_strategis,
  "armada_kepolisian": korea_selatan_kepolisian,
  "pabrik_militer": korea_selatan_pabrik,
  "intelijen": korea_selatan_intelijen,
    "pendidikan": korea_selatan_pendidikan,
  "kesehatan": korea_selatan_kesehatan,
  "hukum": korea_selatan_hukum,
  "sektor_olahraga": korea_selatan_olahraga,
  "sektor_komersial": korea_selatan_komersial,
  "sektor_hiburan": korea_selatan_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 1153
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 50
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 17
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 1632
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 1078
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 86 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 257 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 375
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 11.52,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": korea_selatan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 7,
    "pendidikan": 34,
    "keamanan": 9,
    "keuangan": 12,
    "lingkungan": 60
  }
};


