export const kroasia_profile = {
  "name_en": "Croatia",
  "capital": "Zagreb",
  "name_id": "Kroasia",
  "lon": 15.5,
  "lat": 45.16666666,
  "flag": "🇭🇷",
  "jumlah_penduduk": 3866233,
  "anggaran": 758,
  "pendapatan_nasional": "2167",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { kroasia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/124_kroasia";
import { kroasia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/124_kroasia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { kroasia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/124_kroasia";

import { kroasia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/124_kroasia";
import { kroasia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/124_kroasia";
import { kroasia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/124_kroasia";
import { kroasia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/124_kroasia";
import { kroasia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/124_kroasia";
import { kroasia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/124_kroasia";
import { kroasia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/124_kroasia";
import { kroasia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/124_kroasia";
import { kroasia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/124_kroasia";
import { kroasia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/124_kroasia";
import { kroasia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/124_kroasia";
import { kroasia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/124_kroasia";
import { kroasia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/124_kroasia";
import { kroasia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/124_kroasia";
import { kroasia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/124_kroasia";
import { kroasia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/124_kroasia";
import { kroasia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/124_kroasia";
import { kroasia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/124_kroasia";
import { kroasia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/124_kroasia";
const kroasia_geopolitik = {
    "un_vote": 129,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 35,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  } as const;

export const kroasia: CountryData = {
  ...kroasia_profile,
  "sektor_listrik": kroasia_listrik,
  "hunian": kroasia_hunian,
  "infrastruktur": kroasia_infrastruktur,
  "sektor_ekstraksi": kroasia_ekstraksi,
  "sektor_manufaktur": kroasia_manufaktur,
  "sektor_peternakan": kroasia_peternakan,
  "sektor_agrikultur": kroasia_agrikultur,
  "sektor_perikanan": kroasia_perikanan,
  "sektor_olahan_pangan": kroasia_olahan_pangan,
  "sektor_farmasi": kroasia_farmasi,
  "sektor_pertahanan": kroasia_pertahanan,
  "armada_militer": kroasia_armada,
  "militer_strategis": kroasia_strategis,
  "armada_kepolisian": kroasia_kepolisian,
  "pabrik_militer": kroasia_pabrik,
  "intelijen": kroasia_intelijen,
    "pendidikan": kroasia_pendidikan,
  "kesehatan": kroasia_kesehatan,
  "hukum": kroasia_hukum,
  "sektor_olahraga": kroasia_olahraga,
  "sektor_komersial": kroasia_komersial,
  "sektor_hiburan": kroasia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 33
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 55
    },
    "bea_cukai": {
      "tarif": 39,
      "kepuasan": 86,
      "pendapatan": 63
    },
    "lingkungan": {
      "tarif": 20,
      "kepuasan": 88,
      "pendapatan": 27
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 22
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 82,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 0.8,
    "harga_air": 4.16,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kroasia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 36,
    "pendidikan": 8,
    "keamanan": 33,
    "keuangan": 35,
    "lingkungan": 60
  }
};


