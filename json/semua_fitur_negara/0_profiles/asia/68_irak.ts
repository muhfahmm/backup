export const irak_profile = {
  "name_en": "Iraq",
  "capital": "Baghdad",
  "name_id": "Irak",
  "lon": 44.36,
  "lat": 33.31,
  "flag": "🇮🇶",
  "jumlah_penduduk": 46118793,
  "anggaran": 2606,
  "pendapatan_nasional": "7445",
  "religion": "Islam",
  "ideology": "Demokrasi"
} as const;

import { irak_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/68_irak";
import { irak_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/68_irak";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { irak_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/68_irak";

import { irak_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/68_irak";
import { irak_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/68_irak";
import { irak_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/68_irak";
import { irak_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/68_irak";
import { irak_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/68_irak";
import { irak_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/68_irak";
import { irak_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/68_irak";
import { irak_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/68_irak";
import { irak_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/68_irak";
import { irak_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/68_irak";
import { irak_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/68_irak";
import { irak_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/68_irak";
import { irak_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/68_irak";
import { irak_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/68_irak";
import { irak_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/68_irak";
import { irak_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/68_irak";
import { irak_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/68_irak";
import { irak_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/68_irak";
import { irak_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/68_irak";
const irak_geopolitik = {
    "un_vote": 132,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 22,
      "kekuatan_keras": 7,
      "prestise_diplomatik": 57
    }
  } as const;

export const irak: CountryData = {
  ...irak_profile,
  "sektor_listrik": irak_listrik,
  "hunian": irak_hunian,
  "infrastruktur": irak_infrastruktur,
  "sektor_ekstraksi": irak_ekstraksi,
  "sektor_manufaktur": irak_manufaktur,
  "sektor_peternakan": irak_peternakan,
  "sektor_agrikultur": irak_agrikultur,
  "sektor_perikanan": irak_perikanan,
  "sektor_olahan_pangan": irak_olahan_pangan,
  "sektor_farmasi": irak_farmasi,
  "sektor_pertahanan": irak_pertahanan,
  "armada_militer": irak_armada,
  "militer_strategis": irak_strategis,
  "armada_kepolisian": irak_kepolisian,
  "pabrik_militer": irak_pabrik,
  "intelijen": irak_intelijen,
    "pendidikan": irak_pendidikan,
  "kesehatan": irak_kesehatan,
  "hukum": irak_hukum,
  "sektor_olahraga": irak_olahraga,
  "sektor_komersial": irak_komersial,
  "sektor_hiburan": irak_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 67
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 301
    },
    "bea_cukai": {
      "tarif": 3,
      "kepuasan": 86,
      "pendapatan": 15
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 224
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 14 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 40 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 190
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 5.35,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 126.32,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": irak_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 29,
    "keamanan": 9,
    "keuangan": 5,
    "lingkungan": 60
  }
};


