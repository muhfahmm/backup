export const vatikan_profile = {
  "name_en": "Vatican City",
  "capital": "Vatican City",
  "name_id": "Vatikan",
  "lon": 12.45,
  "lat": 41.9,
  "flag": "🇻🇦",
  "jumlah_penduduk": 882,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Monarki"
} as const;

import { vatikan_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/150_vatikan";
import { vatikan_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/150_vatikan";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { vatikan_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/150_vatikan";

import { vatikan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/150_vatikan";
import { vatikan_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/150_vatikan";
import { vatikan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/150_vatikan";
import { vatikan_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/150_vatikan";
import { vatikan_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/150_vatikan";
import { vatikan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/150_vatikan";
import { vatikan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/150_vatikan";
import { vatikan_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/150_vatikan";
import { vatikan_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/150_vatikan";
import { vatikan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/150_vatikan";
import { vatikan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/150_vatikan";
import { vatikan_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/150_vatikan";
import { vatikan_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/150_vatikan";
import { vatikan_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/150_vatikan";
import { vatikan_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/150_vatikan";
import { vatikan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/150_vatikan";
import { vatikan_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/150_vatikan";
import { vatikan_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/150_vatikan";
import { vatikan_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/150_vatikan";
const vatikan_geopolitik = {
    "un_vote": 34,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 24,
      "prestise_diplomatik": 57
    }
  } as const;

export const vatikan: CountryData = {
  ...vatikan_profile,
  "sektor_listrik": vatikan_listrik,
  "hunian": vatikan_hunian,
  "infrastruktur": vatikan_infrastruktur,
  "sektor_ekstraksi": vatikan_ekstraksi,
  "sektor_manufaktur": vatikan_manufaktur,
  "sektor_peternakan": vatikan_peternakan,
  "sektor_agrikultur": vatikan_agrikultur,
  "sektor_perikanan": vatikan_perikanan,
  "sektor_olahan_pangan": vatikan_olahan_pangan,
  "sektor_farmasi": vatikan_farmasi,
  "sektor_pertahanan": vatikan_pertahanan,
  "armada_militer": vatikan_armada,
  "militer_strategis": vatikan_strategis,
  "armada_kepolisian": vatikan_kepolisian,
  "pabrik_militer": vatikan_pabrik,
  "intelijen": vatikan_intelijen,
    "pendidikan": vatikan_pendidikan,
  "kesehatan": vatikan_kesehatan,
  "hukum": vatikan_hukum,
  "sektor_olahraga": vatikan_olahraga,
  "sektor_komersial": vatikan_komersial,
  "sektor_hiburan": vatikan_hiburan,
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
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 4,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 3.2,
    "harga_air": 4.16,
    "harga_obat": 157.9,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": vatikan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 17,
    "pendidikan": 23,
    "keamanan": 35,
    "keuangan": 17,
    "lingkungan": 60
  }
};


