export const guyana_profile = {
  "name_en": "Guyana",
  "capital": "Georgetown",
  "name_id": "Guyana",
  "lon": -59,
  "lat": 5,
  "flag": "🇬🇾",
  "jumlah_penduduk": 956044,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { guyana_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/sa/201_guyana";
import { guyana_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/sa/201_guyana";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { guyana_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/sa/201_guyana";

import { guyana_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/sa/201_guyana";
import { guyana_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/sa/201_guyana";
import { guyana_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/sa/201_guyana";
import { guyana_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/sa/201_guyana";
import { guyana_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/sa/201_guyana";
import { guyana_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/sa/201_guyana";
import { guyana_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/sa/201_guyana";
import { guyana_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/sa/201_guyana";
import { guyana_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/sa/201_guyana";
import { guyana_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/sa/201_guyana";
import { guyana_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/sa/201_guyana";
import { guyana_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/sa/201_guyana";
import { guyana_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/sa/201_guyana";
import { guyana_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/sa/201_guyana";
import { guyana_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/sa/201_guyana";
import { guyana_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/sa/201_guyana";
import { guyana_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/sa/201_guyana";
import { guyana_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/sa/201_guyana";
import { guyana_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/sa/201_guyana";
const guyana_geopolitik = {
    "un_vote": 74,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 5,
      "kekuatan_keras": 39,
      "prestise_diplomatik": 57
    }
  } as const;

export const guyana: CountryData = {
  ...guyana_profile,
  "sektor_listrik": guyana_listrik,
  "hunian": guyana_hunian,
  "infrastruktur": guyana_infrastruktur,
  "sektor_ekstraksi": guyana_ekstraksi,
  "sektor_manufaktur": guyana_manufaktur,
  "sektor_peternakan": guyana_peternakan,
  "sektor_agrikultur": guyana_agrikultur,
  "sektor_perikanan": guyana_perikanan,
  "sektor_olahan_pangan": guyana_olahan_pangan,
  "sektor_farmasi": guyana_farmasi,
  "sektor_pertahanan": guyana_pertahanan,
  "armada_militer": guyana_armada,
  "militer_strategis": guyana_strategis,
  "armada_kepolisian": guyana_kepolisian,
  "pabrik_militer": guyana_pabrik,
  "intelijen": guyana_intelijen,
    "pendidikan": guyana_pendidikan,
  "kesehatan": guyana_kesehatan,
  "hukum": guyana_hukum,
  "sektor_olahraga": guyana_olahraga,
  "sektor_komersial": guyana_komersial,
  "sektor_hiburan": guyana_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 13
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 4.16,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": guyana_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 15,
    "pendidikan": 26,
    "keamanan": 10,
    "keuangan": 13,
    "lingkungan": 60
  }
};


