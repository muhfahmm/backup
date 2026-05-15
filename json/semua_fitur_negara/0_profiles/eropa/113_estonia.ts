export const estonia_profile = {
  "name_en": "Estonia",
  "capital": "Tallinn",
  "name_id": "Estonia",
  "lon": 26,
  "lat": 59,
  "flag": "🇪🇪",
  "jumlah_penduduk": 1374687,
  "anggaran": 389,
  "pendapatan_nasional": "1111",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { estonia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/113_estonia";
import { estonia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/113_estonia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { estonia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/113_estonia";

import { estonia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/113_estonia";
import { estonia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/113_estonia";
import { estonia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/113_estonia";
import { estonia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/113_estonia";
import { estonia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/113_estonia";
import { estonia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/113_estonia";
import { estonia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/113_estonia";
import { estonia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/113_estonia";
import { estonia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/113_estonia";
import { estonia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/113_estonia";
import { estonia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/113_estonia";
import { estonia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/113_estonia";
import { estonia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/113_estonia";
import { estonia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/113_estonia";
import { estonia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/113_estonia";
import { estonia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/113_estonia";
import { estonia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/113_estonia";
import { estonia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/113_estonia";
import { estonia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/113_estonia";
const estonia_geopolitik = {
    "un_vote": 168,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 38,
      "kekuatan_keras": 21,
      "prestise_diplomatik": 57
    }
  } as const;

export const estonia: CountryData = {
  ...estonia_profile,
  "sektor_listrik": estonia_listrik,
  "hunian": estonia_hunian,
  "infrastruktur": estonia_infrastruktur,
  "sektor_ekstraksi": estonia_ekstraksi,
  "sektor_manufaktur": estonia_manufaktur,
  "sektor_peternakan": estonia_peternakan,
  "sektor_agrikultur": estonia_agrikultur,
  "sektor_perikanan": estonia_perikanan,
  "sektor_olahan_pangan": estonia_olahan_pangan,
  "sektor_farmasi": estonia_farmasi,
  "sektor_pertahanan": estonia_pertahanan,
  "armada_militer": estonia_armada,
  "militer_strategis": estonia_strategis,
  "armada_kepolisian": estonia_kepolisian,
  "pabrik_militer": estonia_pabrik,
  "intelijen": estonia_intelijen,
    "pendidikan": estonia_pendidikan,
  "kesehatan": estonia_kesehatan,
  "hukum": estonia_hukum,
  "sektor_olahraga": estonia_olahraga,
  "sektor_komersial": estonia_komersial,
  "sektor_hiburan": estonia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 16
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 23
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 31,
      "kepuasan": 88,
      "pendapatan": 31
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 6 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 19
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 7.2,
    "harga_telur": 62.2,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": estonia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 2,
    "pendidikan": 23,
    "keamanan": 14,
    "keuangan": 12,
    "lingkungan": 60
  }
};


