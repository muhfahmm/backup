export const samoa_amerika_profile = {
  "name_en": "American Samoa",
  "capital": "Pago Pago",
  "name_id": "Samoa amerika",
  "lon": -170,
  "lat": -14.33333333,
  "flag": "🇦🇸",
  "jumlah_penduduk": 43886,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { samoa_amerika_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/oceania/189_samoa_amerika";
import { samoa_amerika_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/oceania/189_samoa_amerika";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { samoa_amerika_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/oceania/189_samoa_amerika";

import { samoa_amerika_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/oceania/189_samoa_amerika";
import { samoa_amerika_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/oceania/189_samoa_amerika";
import { samoa_amerika_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/oceania/189_samoa_amerika";
import { samoa_amerika_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/oceania/189_samoa_amerika";
import { samoa_amerika_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/oceania/189_samoa_amerika";
import { samoa_amerika_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/oceania/189_samoa_amerika";
import { samoa_amerika_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/oceania/189_samoa_amerika";
import { samoa_amerika_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/oceania/189_samoa_amerika";
import { samoa_amerika_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/oceania/189_samoa_amerika";
import { samoa_amerika_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/oceania/189_samoa_amerika";
import { samoa_amerika_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/oceania/189_samoa_amerika";
import { samoa_amerika_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/oceania/189_samoa_amerika";
import { samoa_amerika_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/oceania/189_samoa_amerika";
import { samoa_amerika_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/oceania/189_samoa_amerika";
import { samoa_amerika_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/oceania/189_samoa_amerika";
import { samoa_amerika_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/oceania/189_samoa_amerika";
import { samoa_amerika_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/oceania/189_samoa_amerika";
import { samoa_amerika_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/oceania/189_samoa_amerika";
import { samoa_amerika_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/oceania/189_samoa_amerika";
const samoa_amerika_geopolitik = {
    "un_vote": 24,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 21,
      "kekuatan_keras": 3,
      "prestise_diplomatik": 57
    }
  } as const;

export const samoa_amerika: CountryData = {
  ...samoa_amerika_profile,
  "sektor_listrik": samoa_amerika_listrik,
  "hunian": samoa_amerika_hunian,
  "infrastruktur": samoa_amerika_infrastruktur,
  "sektor_ekstraksi": samoa_amerika_ekstraksi,
  "sektor_manufaktur": samoa_amerika_manufaktur,
  "sektor_peternakan": samoa_amerika_peternakan,
  "sektor_agrikultur": samoa_amerika_agrikultur,
  "sektor_perikanan": samoa_amerika_perikanan,
  "sektor_olahan_pangan": samoa_amerika_olahan_pangan,
  "sektor_farmasi": samoa_amerika_farmasi,
  "sektor_pertahanan": samoa_amerika_pertahanan,
  "armada_militer": samoa_amerika_armada,
  "militer_strategis": samoa_amerika_strategis,
  "armada_kepolisian": samoa_amerika_kepolisian,
  "pabrik_militer": samoa_amerika_pabrik,
  "intelijen": samoa_amerika_intelijen,
    "pendidikan": samoa_amerika_pendidikan,
  "kesehatan": samoa_amerika_kesehatan,
  "hukum": samoa_amerika_hukum,
  "sektor_olahraga": samoa_amerika_olahraga,
  "sektor_komersial": samoa_amerika_komersial,
  "sektor_hiburan": samoa_amerika_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 31,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 8,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 221.06,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": samoa_amerika_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 27,
    "keamanan": 18,
    "keuangan": 40,
    "lingkungan": 60
  }
};


