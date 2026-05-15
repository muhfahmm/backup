export const pakistan_profile = {
  "name_en": "Pakistan",
  "capital": "Islamabad",
  "name_id": "Pakistan",
  "lon": 73.04,
  "lat": 33.68,
  "flag": "🇵🇰",
  "jumlah_penduduk": 241499431,
  "anggaran": 3306,
  "pendapatan_nasional": "9445",
  "religion": "Islam",
  "ideology": "Konservatisme"
} as const;

import { pakistan_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/87_pakistan";
import { pakistan_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/87_pakistan";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { pakistan_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/87_pakistan";

import { pakistan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/87_pakistan";
import { pakistan_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/87_pakistan";
import { pakistan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/87_pakistan";
import { pakistan_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/87_pakistan";
import { pakistan_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/87_pakistan";
import { pakistan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/87_pakistan";
import { pakistan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/87_pakistan";
import { pakistan_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/87_pakistan";
import { pakistan_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/87_pakistan";
import { pakistan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/87_pakistan";
import { pakistan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/87_pakistan";
import { pakistan_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/87_pakistan";
import { pakistan_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/87_pakistan";
import { pakistan_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/87_pakistan";
import { pakistan_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/87_pakistan";
import { pakistan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/87_pakistan";
import { pakistan_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/87_pakistan";
import { pakistan_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/87_pakistan";
import { pakistan_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/87_pakistan";
const pakistan_geopolitik = {
    "un_vote": 180,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 30,
      "kekuatan_keras": 4,
      "prestise_diplomatik": 57
    }
  } as const;

export const pakistan: CountryData = {
  ...pakistan_profile,
  "sektor_listrik": pakistan_listrik,
  "hunian": pakistan_hunian,
  "infrastruktur": pakistan_infrastruktur,
  "sektor_ekstraksi": pakistan_ekstraksi,
  "sektor_manufaktur": pakistan_manufaktur,
  "sektor_peternakan": pakistan_peternakan,
  "sektor_agrikultur": pakistan_agrikultur,
  "sektor_perikanan": pakistan_perikanan,
  "sektor_olahan_pangan": pakistan_olahan_pangan,
  "sektor_farmasi": pakistan_farmasi,
  "sektor_pertahanan": pakistan_pertahanan,
  "armada_militer": pakistan_armada,
  "militer_strategis": pakistan_strategis,
  "armada_kepolisian": pakistan_kepolisian,
  "pabrik_militer": pakistan_pabrik,
  "intelijen": pakistan_intelijen,
    "pendidikan": pakistan_pendidikan,
  "kesehatan": pakistan_kesehatan,
  "hukum": pakistan_hukum,
  "sektor_olahraga": pakistan_olahraga,
  "sektor_komersial": pakistan_komersial,
  "sektor_hiburan": pakistan_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 126
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 205
    },
    "penghasilan": {
      "tarif": 14,
      "kepuasan": 61,
      "pendapatan": 59
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 300
    },
    "lingkungan": {
      "tarif": 17,
      "kepuasan": 88,
      "pendapatan": 100
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 17 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 50 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 124
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": pakistan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 36,
    "pendidikan": 1,
    "keamanan": 8,
    "keuangan": 38,
    "lingkungan": 60
  }
};


