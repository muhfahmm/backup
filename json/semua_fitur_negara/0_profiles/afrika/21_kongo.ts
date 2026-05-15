export const kongo_profile = {
  "name_en": "Republic of the Congo",
  "capital": "Brazzaville",
  "name_id": "Kongo",
  "lon": 15,
  "lat": -1,
  "flag": "🇨🇬",
  "jumlah_penduduk": 6332961,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Katolik",
  "ideology": "Sosialisme"
} as const;

import { kongo_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/21_kongo";
import { kongo_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/21_kongo";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { kongo_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/21_kongo";

import { kongo_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/21_kongo";
import { kongo_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/21_kongo";
import { kongo_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/21_kongo";
import { kongo_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/21_kongo";
import { kongo_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/21_kongo";
import { kongo_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/21_kongo";
import { kongo_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/21_kongo";
import { kongo_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/21_kongo";
import { kongo_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/21_kongo";
import { kongo_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/21_kongo";
import { kongo_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/21_kongo";
import { kongo_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/21_kongo";
import { kongo_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/21_kongo";
import { kongo_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/21_kongo";
import { kongo_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/21_kongo";
import { kongo_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/21_kongo";
import { kongo_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/21_kongo";
import { kongo_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/21_kongo";
import { kongo_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/21_kongo";
const kongo_geopolitik = {
    "un_vote": 53,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 15,
      "kekuatan_keras": 11,
      "prestise_diplomatik": 57
  }
  } as const;

export const kongo: CountryData = {
  ...kongo_profile,
  "sektor_listrik": kongo_listrik,
  "hunian": kongo_hunian,
  "infrastruktur": kongo_infrastruktur,
  "sektor_ekstraksi": kongo_ekstraksi,
  "sektor_manufaktur": kongo_manufaktur,
  "sektor_peternakan": kongo_peternakan,
  "sektor_agrikultur": kongo_agrikultur,
  "sektor_perikanan": kongo_perikanan,
  "sektor_olahan_pangan": kongo_olahan_pangan,
  "sektor_farmasi": kongo_farmasi,
  "sektor_pertahanan": kongo_pertahanan,
  "armada_militer": kongo_armada,
  "militer_strategis": kongo_strategis,
  "armada_kepolisian": kongo_kepolisian,
  "pabrik_militer": kongo_pabrik,
  "intelijen": kongo_intelijen,
    "pendidikan": kongo_pendidikan,
  "kesehatan": kongo_kesehatan,
  "hukum": kongo_hukum,
  "sektor_olahraga": kongo_olahraga,
  "sektor_komersial": kongo_komersial,
  "sektor_hiburan": kongo_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 12
    },
    "bea_cukai": {
      "tarif": 26,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 34,
      "kepuasan": 88,
      "pendapatan": 11
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 21.4,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kongo_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 3,
    "pendidikan": 17,
    "keamanan": 3,
    "keuangan": 37,
    "lingkungan": 60
  }
};


