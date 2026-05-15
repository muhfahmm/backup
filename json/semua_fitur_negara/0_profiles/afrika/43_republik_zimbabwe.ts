export const republik_zimbabwe_profile = {
  "name_en": "Zimbabwe",
  "capital": "Harare",
  "name_id": "Republik zimbabwe",
  "lon": 30,
  "lat": -20,
  "flag": "🇿🇼",
  "jumlah_penduduk": 17073087,
  "anggaran": 194,
  "pendapatan_nasional": "556",
  "religion": "Protestan",
  "ideology": "Sosialisme"
} as const;

import { republik_zimbabwe_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/43_republik_zimbabwe";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { republik_zimbabwe_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/43_republik_zimbabwe";

import { republik_zimbabwe_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/43_republik_zimbabwe";
const republik_zimbabwe_geopolitik = {
    "un_vote": 36,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 24,
      "prestise_diplomatik": 57
  }
  } as const;

export const republik_zimbabwe: CountryData = {
  ...republik_zimbabwe_profile,
  "sektor_listrik": republik_zimbabwe_listrik,
  "hunian": republik_zimbabwe_hunian,
  "infrastruktur": republik_zimbabwe_infrastruktur,
  "sektor_ekstraksi": republik_zimbabwe_ekstraksi,
  "sektor_manufaktur": republik_zimbabwe_manufaktur,
  "sektor_peternakan": republik_zimbabwe_peternakan,
  "sektor_agrikultur": republik_zimbabwe_agrikultur,
  "sektor_perikanan": republik_zimbabwe_perikanan,
  "sektor_olahan_pangan": republik_zimbabwe_olahan_pangan,
  "sektor_farmasi": republik_zimbabwe_farmasi,
  "sektor_pertahanan": republik_zimbabwe_pertahanan,
  "armada_militer": republik_zimbabwe_armada,
  "militer_strategis": republik_zimbabwe_strategis,
  "armada_kepolisian": republik_zimbabwe_kepolisian,
  "pabrik_militer": republik_zimbabwe_pabrik,
  "intelijen": republik_zimbabwe_intelijen,
    "pendidikan": republik_zimbabwe_pendidikan,
  "kesehatan": republik_zimbabwe_kesehatan,
  "hukum": republik_zimbabwe_hukum,
  "sektor_olahraga": republik_zimbabwe_olahraga,
  "sektor_komersial": republik_zimbabwe_komersial,
  "sektor_hiburan": republik_zimbabwe_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 13
    },
    "penghasilan": {
      "tarif": 18,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 7
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_zimbabwe_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 31,
    "pendidikan": 17,
    "keamanan": 27,
    "keuangan": 5,
    "lingkungan": 60
  }
};


