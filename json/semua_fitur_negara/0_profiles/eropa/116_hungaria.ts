export const hungaria_profile = {
  "name_en": "Hungary",
  "capital": "Budapest",
  "name_id": "Hungaria",
  "lon": 20,
  "lat": 47,
  "flag": "🇭🇺",
  "jumlah_penduduk": 9489000,
  "anggaran": 2042,
  "pendapatan_nasional": "5834",
  "religion": "Katolik",
  "ideology": "Nasionalisme"
} as const;

import { hungaria_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/116_hungaria";
import { hungaria_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/116_hungaria";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { hungaria_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/116_hungaria";

import { hungaria_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/116_hungaria";
import { hungaria_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/116_hungaria";
import { hungaria_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/116_hungaria";
import { hungaria_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/116_hungaria";
import { hungaria_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/116_hungaria";
import { hungaria_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/116_hungaria";
import { hungaria_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/116_hungaria";
import { hungaria_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/116_hungaria";
import { hungaria_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/116_hungaria";
import { hungaria_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/116_hungaria";
import { hungaria_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/116_hungaria";
import { hungaria_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/116_hungaria";
import { hungaria_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/116_hungaria";
import { hungaria_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/116_hungaria";
import { hungaria_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/116_hungaria";
import { hungaria_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/116_hungaria";
import { hungaria_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/116_hungaria";
import { hungaria_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/116_hungaria";
import { hungaria_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/116_hungaria";
const hungaria_geopolitik = {
    "un_vote": 94,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
      "kekuatan_keras": 16,
      "prestise_diplomatik": 57
    }
  } as const;

export const hungaria: CountryData = {
  ...hungaria_profile,
  "sektor_listrik": hungaria_listrik,
  "hunian": hungaria_hunian,
  "infrastruktur": hungaria_infrastruktur,
  "sektor_ekstraksi": hungaria_ekstraksi,
  "sektor_manufaktur": hungaria_manufaktur,
  "sektor_peternakan": hungaria_peternakan,
  "sektor_agrikultur": hungaria_agrikultur,
  "sektor_perikanan": hungaria_perikanan,
  "sektor_olahan_pangan": hungaria_olahan_pangan,
  "sektor_farmasi": hungaria_farmasi,
  "sektor_pertahanan": hungaria_pertahanan,
  "armada_militer": hungaria_armada,
  "militer_strategis": hungaria_strategis,
  "armada_kepolisian": hungaria_kepolisian,
  "pabrik_militer": hungaria_pabrik,
  "intelijen": hungaria_intelijen,
    "pendidikan": hungaria_pendidikan,
  "kesehatan": hungaria_kesehatan,
  "hukum": hungaria_hukum,
  "sektor_olahraga": hungaria_olahraga,
  "sektor_komersial": hungaria_komersial,
  "sektor_hiburan": hungaria_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 62
    },
    "penghasilan": {
      "tarif": 12,
      "kepuasan": 61,
      "pendapatan": 62
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 188
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 66
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 11 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 31 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": hungaria_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 18,
    "pendidikan": 24,
    "keamanan": 9,
    "keuangan": 26,
    "lingkungan": 60
  }
};


