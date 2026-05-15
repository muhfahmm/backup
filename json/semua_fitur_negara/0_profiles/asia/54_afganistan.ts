export const afganistan_profile = {
  "name_en": "Afghanistan",
  "capital": "Kabul",
  "name_id": "Afganistan",
  "lon": 69.16,
  "lat": 34.54,
  "flag": "🇦🇫",
  "jumlah_penduduk": 43844000,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Islam",
  "ideology": "Konservatisme"
} as const;

import { afganistan_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/54_afganistan";
import { afganistan_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/54_afganistan";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { afganistan_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/54_afganistan";

import { afganistan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/54_afganistan";
import { afganistan_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/54_afganistan";
import { afganistan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/54_afganistan";
import { afganistan_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/54_afganistan";
import { afganistan_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/54_afganistan";
import { afganistan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/54_afganistan";
import { afganistan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/54_afganistan";
import { afganistan_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/54_afganistan";
import { afganistan_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/54_afganistan";
import { afganistan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/54_afganistan";
import { afganistan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/54_afganistan";
import { afganistan_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/54_afganistan";
import { afganistan_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/54_afganistan";
import { afganistan_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/54_afganistan";
import { afganistan_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/54_afganistan";
import { afganistan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/54_afganistan";
import { afganistan_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/54_afganistan";
import { afganistan_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/54_afganistan";
import { afganistan_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/54_afganistan";
const afganistan_geopolitik = {
    "un_vote": 126,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 25,
      "kekuatan_keras": 22,
      "prestise_diplomatik": 57
    }
  } as const;

export const afganistan: CountryData = {
  ...afganistan_profile,
  "sektor_listrik": afganistan_listrik,
  "hunian": afganistan_hunian,
  "infrastruktur": afganistan_infrastruktur,
  "sektor_ekstraksi": afganistan_ekstraksi,
  "sektor_manufaktur": afganistan_manufaktur,
  "sektor_peternakan": afganistan_peternakan,
  "sektor_agrikultur": afganistan_agrikultur,
  "sektor_perikanan": afganistan_perikanan,
  "sektor_olahan_pangan": afganistan_olahan_pangan,
  "sektor_farmasi": afganistan_farmasi,
  "sektor_pertahanan": afganistan_pertahanan,
  "armada_militer": afganistan_armada,
  "militer_strategis": afganistan_strategis,
  "armada_kepolisian": afganistan_kepolisian,
  "pabrik_militer": afganistan_pabrik,
  "intelijen": afganistan_intelijen,
    "pendidikan": afganistan_pendidikan,
  "kesehatan": afganistan_kesehatan,
  "hukum": afganistan_hukum,
  "sektor_olahraga": afganistan_olahraga,
  "sektor_komersial": afganistan_komersial,
  "sektor_hiburan": afganistan_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
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
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 12
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 38,
      "kepuasan": 93,
      "pendapatan": 11
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
    "harga_gula": 11.52,
    "harga_telur": 24.88,
    "harga_bbm": 5.35,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": afganistan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 33,
    "pendidikan": 28,
    "keamanan": 19,
    "keuangan": 39,
    "lingkungan": 60
  }
};


