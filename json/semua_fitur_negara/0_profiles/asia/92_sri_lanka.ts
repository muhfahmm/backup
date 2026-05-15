export const sri_lanka_profile = {
  "name_en": "Sri Lanka",
  "capital": "Colombo",
  "name_id": "Sri lanka",
  "lon": 81,
  "lat": 7,
  "flag": "🇱🇰",
  "jumlah_penduduk": 21781800,
  "anggaran": 729,
  "pendapatan_nasional": "2084",
  "religion": "Buddha",
  "ideology": "Demokrasi"
} as const;

import { sri_lanka_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/92_sri_lanka";
import { sri_lanka_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/92_sri_lanka";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { sri_lanka_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/92_sri_lanka";

import { sri_lanka_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/92_sri_lanka";
import { sri_lanka_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/92_sri_lanka";
import { sri_lanka_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/92_sri_lanka";
import { sri_lanka_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/92_sri_lanka";
import { sri_lanka_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/92_sri_lanka";
import { sri_lanka_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/92_sri_lanka";
import { sri_lanka_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/92_sri_lanka";
import { sri_lanka_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/92_sri_lanka";
import { sri_lanka_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/92_sri_lanka";
import { sri_lanka_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/92_sri_lanka";
import { sri_lanka_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/92_sri_lanka";
import { sri_lanka_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/92_sri_lanka";
import { sri_lanka_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/92_sri_lanka";
import { sri_lanka_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/92_sri_lanka";
import { sri_lanka_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/92_sri_lanka";
import { sri_lanka_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/92_sri_lanka";
import { sri_lanka_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/92_sri_lanka";
import { sri_lanka_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/92_sri_lanka";
import { sri_lanka_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/92_sri_lanka";
const sri_lanka_geopolitik = {
    "un_vote": 158,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 15,
      "kekuatan_keras": 36,
      "prestise_diplomatik": 57
    }
  } as const;

export const sri_lanka: CountryData = {
  ...sri_lanka_profile,
  "sektor_listrik": sri_lanka_listrik,
  "hunian": sri_lanka_hunian,
  "infrastruktur": sri_lanka_infrastruktur,
  "sektor_ekstraksi": sri_lanka_ekstraksi,
  "sektor_manufaktur": sri_lanka_manufaktur,
  "sektor_peternakan": sri_lanka_peternakan,
  "sektor_agrikultur": sri_lanka_agrikultur,
  "sektor_perikanan": sri_lanka_perikanan,
  "sektor_olahan_pangan": sri_lanka_olahan_pangan,
  "sektor_farmasi": sri_lanka_farmasi,
  "sektor_pertahanan": sri_lanka_pertahanan,
  "armada_militer": sri_lanka_armada,
  "militer_strategis": sri_lanka_strategis,
  "armada_kepolisian": sri_lanka_kepolisian,
  "pabrik_militer": sri_lanka_pabrik,
  "intelijen": sri_lanka_intelijen,
    "pendidikan": sri_lanka_pendidikan,
  "kesehatan": sri_lanka_kesehatan,
  "hukum": sri_lanka_hukum,
  "sektor_olahraga": sri_lanka_olahraga,
  "sektor_komersial": sri_lanka_komersial,
  "sektor_hiburan": sri_lanka_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 33,
      "kepuasan": 52,
      "pendapatan": 69
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 32
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 12
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 21
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 26
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 7.2,
    "harga_telur": 43.54,
    "harga_bbm": 21.4,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": sri_lanka_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 7,
    "pendidikan": 13,
    "keamanan": 31,
    "keuangan": 33,
    "lingkungan": 60
  }
};


