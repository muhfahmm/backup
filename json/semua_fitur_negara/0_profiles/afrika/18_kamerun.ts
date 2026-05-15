export const kamerun_profile = {
  "name_en": "Cameroon",
  "capital": "Yaoundé",
  "name_id": "Kamerun",
  "lon": 12,
  "lat": 6,
  "flag": "🇨🇲",
  "jumlah_penduduk": 28088845,
  "anggaran": 438,
  "pendapatan_nasional": "1250",
  "religion": "Katolik",
  "ideology": "Konservatisme"
} as const;

import { kamerun_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/18_kamerun";
import { kamerun_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/18_kamerun";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { kamerun_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/18_kamerun";

import { kamerun_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/18_kamerun";
import { kamerun_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/18_kamerun";
import { kamerun_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/18_kamerun";
import { kamerun_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/18_kamerun";
import { kamerun_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/18_kamerun";
import { kamerun_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/18_kamerun";
import { kamerun_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/18_kamerun";
import { kamerun_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/18_kamerun";
import { kamerun_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/18_kamerun";
import { kamerun_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/18_kamerun";
import { kamerun_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/18_kamerun";
import { kamerun_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/18_kamerun";
import { kamerun_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/18_kamerun";
import { kamerun_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/18_kamerun";
import { kamerun_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/18_kamerun";
import { kamerun_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/18_kamerun";
import { kamerun_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/18_kamerun";
import { kamerun_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/18_kamerun";
import { kamerun_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/18_kamerun";
const kamerun_geopolitik = {
    "un_vote": 138,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 26,
      "kekuatan_keras": 19,
      "prestise_diplomatik": 57
  }
  } as const;

export const kamerun: CountryData = {
  ...kamerun_profile,
  "sektor_listrik": kamerun_listrik,
  "hunian": kamerun_hunian,
  "infrastruktur": kamerun_infrastruktur,
  "sektor_ekstraksi": kamerun_ekstraksi,
  "sektor_manufaktur": kamerun_manufaktur,
  "sektor_peternakan": kamerun_peternakan,
  "sektor_agrikultur": kamerun_agrikultur,
  "sektor_perikanan": kamerun_perikanan,
  "sektor_olahan_pangan": kamerun_olahan_pangan,
  "sektor_farmasi": kamerun_farmasi,
  "sektor_pertahanan": kamerun_pertahanan,
  "armada_militer": kamerun_armada,
  "militer_strategis": kamerun_strategis,
  "armada_kepolisian": kamerun_kepolisian,
  "pabrik_militer": kamerun_pabrik,
  "intelijen": kamerun_intelijen,
    "pendidikan": kamerun_pendidikan,
  "kesehatan": kamerun_kesehatan,
  "hukum": kamerun_hukum,
  "sektor_olahraga": kamerun_olahraga,
  "sektor_komersial": kamerun_komersial,
  "sektor_hiburan": kamerun_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 7,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 33,
      "kepuasan": 86,
      "pendapatan": 29
    },
    "lingkungan": {
      "tarif": 27,
      "kepuasan": 88,
      "pendapatan": 30
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 3,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 7.2,
    "harga_telur": 43.54,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kamerun_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 15,
    "pendidikan": 38,
    "keamanan": 9,
    "keuangan": 3,
    "lingkungan": 60
  }
};


