export const gabon_profile = {
  "name_en": "Gabon",
  "capital": "Libreville",
  "name_id": "Gabon",
  "lon": 11.75,
  "lat": -1,
  "flag": "🇬🇦",
  "jumlah_penduduk": 2233272,
  "anggaran": 194,
  "pendapatan_nasional": "556",
  "religion": "Katolik",
  "ideology": "Nasionalisme"
} as const;

import { gabon_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/13_gabon";
import { gabon_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/13_gabon";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { gabon_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/13_gabon";

import { gabon_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/13_gabon";
import { gabon_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/13_gabon";
import { gabon_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/13_gabon";
import { gabon_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/13_gabon";
import { gabon_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/13_gabon";
import { gabon_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/13_gabon";
import { gabon_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/13_gabon";
import { gabon_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/13_gabon";
import { gabon_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/13_gabon";
import { gabon_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/13_gabon";
import { gabon_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/13_gabon";
import { gabon_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/13_gabon";
import { gabon_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/13_gabon";
import { gabon_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/13_gabon";
import { gabon_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/13_gabon";
import { gabon_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/13_gabon";
import { gabon_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/13_gabon";
import { gabon_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/13_gabon";
import { gabon_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/13_gabon";
const gabon_geopolitik = {
    "un_vote": 73,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 20,
      "kekuatan_keras": 13,
      "prestise_diplomatik": 57
  }
  } as const;

export const gabon: CountryData = {
  ...gabon_profile,
  "sektor_listrik": gabon_listrik,
  "hunian": gabon_hunian,
  "infrastruktur": gabon_infrastruktur,
  "sektor_ekstraksi": gabon_ekstraksi,
  "sektor_manufaktur": gabon_manufaktur,
  "sektor_peternakan": gabon_peternakan,
  "sektor_agrikultur": gabon_agrikultur,
  "sektor_perikanan": gabon_perikanan,
  "sektor_olahan_pangan": gabon_olahan_pangan,
  "sektor_farmasi": gabon_farmasi,
  "sektor_pertahanan": gabon_pertahanan,
  "armada_militer": gabon_armada,
  "militer_strategis": gabon_strategis,
  "armada_kepolisian": gabon_kepolisian,
  "pabrik_militer": gabon_pabrik,
  "intelijen": gabon_intelijen,
    "pendidikan": gabon_pendidikan,
  "kesehatan": gabon_kesehatan,
  "hukum": gabon_hukum,
  "sektor_olahraga": gabon_olahraga,
  "sektor_komersial": gabon_komersial,
  "sektor_hiburan": gabon_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 28,
      "kepuasan": 67,
      "pendapatan": 16
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 19
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 12
    },
    "bea_cukai": {
      "tarif": 39,
      "kepuasan": 86,
      "pendapatan": 14
    },
    "lingkungan": {
      "tarif": 23,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 24.88,
    "harga_bbm": 14.98,
    "harga_listrik": 0.8,
    "harga_air": 10.4,
    "harga_obat": 78.95,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": gabon_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 26,
    "keamanan": 11,
    "keuangan": 13,
    "lingkungan": 60
  }
};


