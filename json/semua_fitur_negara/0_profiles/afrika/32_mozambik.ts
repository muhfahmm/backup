export const mozambik_profile = {
  "name_en": "Mozambique",
  "capital": "Maputo",
  "name_id": "Mozambik",
  "lon": 35,
  "lat": -18.25,
  "flag": "🇲🇿",
  "jumlah_penduduk": 30066648,
  "anggaran": 175,
  "pendapatan_nasional": "500",
  "religion": "Katolik",
  "ideology": "Sosialisme"
} as const;

import { mozambik_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/32_mozambik";
import { mozambik_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/32_mozambik";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { mozambik_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/32_mozambik";

import { mozambik_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/32_mozambik";
import { mozambik_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/32_mozambik";
import { mozambik_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/32_mozambik";
import { mozambik_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/32_mozambik";
import { mozambik_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/32_mozambik";
import { mozambik_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/32_mozambik";
import { mozambik_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/32_mozambik";
import { mozambik_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/32_mozambik";
import { mozambik_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/32_mozambik";
import { mozambik_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/32_mozambik";
import { mozambik_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/32_mozambik";
import { mozambik_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/32_mozambik";
import { mozambik_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/32_mozambik";
import { mozambik_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/32_mozambik";
import { mozambik_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/32_mozambik";
import { mozambik_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/32_mozambik";
import { mozambik_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/32_mozambik";
import { mozambik_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/32_mozambik";
import { mozambik_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/32_mozambik";
const mozambik_geopolitik = {
    "un_vote": 85,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 12,
      "kekuatan_keras": 28,
      "prestise_diplomatik": 57
  }
  } as const;

export const mozambik: CountryData = {
  ...mozambik_profile,
  "sektor_listrik": mozambik_listrik,
  "hunian": mozambik_hunian,
  "infrastruktur": mozambik_infrastruktur,
  "sektor_ekstraksi": mozambik_ekstraksi,
  "sektor_manufaktur": mozambik_manufaktur,
  "sektor_peternakan": mozambik_peternakan,
  "sektor_agrikultur": mozambik_agrikultur,
  "sektor_perikanan": mozambik_perikanan,
  "sektor_olahan_pangan": mozambik_olahan_pangan,
  "sektor_farmasi": mozambik_farmasi,
  "sektor_pertahanan": mozambik_pertahanan,
  "armada_militer": mozambik_armada,
  "militer_strategis": mozambik_strategis,
  "armada_kepolisian": mozambik_kepolisian,
  "pabrik_militer": mozambik_pabrik,
  "intelijen": mozambik_intelijen,
    "pendidikan": mozambik_pendidikan,
  "kesehatan": mozambik_kesehatan,
  "hukum": mozambik_hukum,
  "sektor_olahraga": mozambik_olahraga,
  "sektor_komersial": mozambik_komersial,
  "sektor_hiburan": mozambik_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 7
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 6,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 14.98,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": mozambik_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 6,
    "pendidikan": 25,
    "keamanan": 1,
    "keuangan": 35,
    "lingkungan": 60
  }
};


