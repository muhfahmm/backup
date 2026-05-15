export const burundi_profile = {
  "name_en": "Burundi",
  "capital": "Gitega",
  "name_id": "Burundi",
  "lon": 30,
  "lat": -3.5,
  "flag": "🇧🇮",
  "jumlah_penduduk": 12332788,
  "anggaran": 34,
  "pendapatan_nasional": "97",
  "religion": "Katolik",
  "ideology": "Konservatisme"
} as const;

import { burundi_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/7_burundi";
import { burundi_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/7_burundi";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { burundi_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/7_burundi";

import { burundi_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/7_burundi";
import { burundi_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/7_burundi";
import { burundi_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/7_burundi";
import { burundi_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/7_burundi";
import { burundi_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/7_burundi";
import { burundi_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/7_burundi";
import { burundi_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/7_burundi";
import { burundi_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/7_burundi";
import { burundi_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/7_burundi";
import { burundi_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/7_burundi";
import { burundi_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/7_burundi";
import { burundi_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/7_burundi";
import { burundi_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/7_burundi";
import { burundi_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/7_burundi";
import { burundi_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/7_burundi";
import { burundi_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/7_burundi";
import { burundi_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/7_burundi";
import { burundi_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/7_burundi";
import { burundi_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/7_burundi";
const burundi_geopolitik = {
    "un_vote": 37,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 9,
      "kekuatan_keras": 23,
      "prestise_diplomatik": 57
  }
  } as const;

export const burundi: CountryData = {
  ...burundi_profile,
  "sektor_listrik": burundi_listrik,
  "hunian": burundi_hunian,
  "infrastruktur": burundi_infrastruktur,
  "sektor_ekstraksi": burundi_ekstraksi,
  "sektor_manufaktur": burundi_manufaktur,
  "sektor_peternakan": burundi_peternakan,
  "sektor_agrikultur": burundi_agrikultur,
  "sektor_perikanan": burundi_perikanan,
  "sektor_olahan_pangan": burundi_olahan_pangan,
  "sektor_farmasi": burundi_farmasi,
  "sektor_pertahanan": burundi_pertahanan,
  "armada_militer": burundi_armada,
  "militer_strategis": burundi_strategis,
  "armada_kepolisian": burundi_kepolisian,
  "pabrik_militer": burundi_pabrik,
  "intelijen": burundi_intelijen,
    "pendidikan": burundi_pendidikan,
  "kesehatan": burundi_kesehatan,
  "hukum": burundi_hukum,
  "sektor_olahraga": burundi_olahraga,
  "sektor_komersial": burundi_komersial,
  "sektor_hiburan": burundi_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 21.4,
    "harga_listrik": 1.28,
    "harga_air": 10.4,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": burundi_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 2,
    "pendidikan": 9,
    "keamanan": 23,
    "keuangan": 37,
    "lingkungan": 60
  }
};


