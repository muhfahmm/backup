export const kamboja_profile = {
  "name_en": "Cambodia",
  "capital": "Phnom Penh",
  "name_id": "Kamboja",
  "lon": 104.91,
  "lat": 11.55,
  "flag": "🇰🇭",
  "jumlah_penduduk": 17577760,
  "anggaran": 292,
  "pendapatan_nasional": "833",
  "religion": "Buddha",
  "ideology": "Demokrasi"
} as const;

import { kamboja_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/72_kamboja";
import { kamboja_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/72_kamboja";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { kamboja_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/72_kamboja";

import { kamboja_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/72_kamboja";
import { kamboja_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/72_kamboja";
import { kamboja_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/72_kamboja";
import { kamboja_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/72_kamboja";
import { kamboja_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/72_kamboja";
import { kamboja_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/72_kamboja";
import { kamboja_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/72_kamboja";
import { kamboja_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/72_kamboja";
import { kamboja_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/72_kamboja";
import { kamboja_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/72_kamboja";
import { kamboja_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/72_kamboja";
import { kamboja_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/72_kamboja";
import { kamboja_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/72_kamboja";
import { kamboja_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/72_kamboja";
import { kamboja_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/72_kamboja";
import { kamboja_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/72_kamboja";
import { kamboja_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/72_kamboja";
import { kamboja_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/72_kamboja";
import { kamboja_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/72_kamboja";
const kamboja_geopolitik = {
    "un_vote": 166,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 28,
      "kekuatan_keras": 29,
      "prestise_diplomatik": 57
    }
  } as const;

export const kamboja: CountryData = {
  ...kamboja_profile,
  "sektor_listrik": kamboja_listrik,
  "hunian": kamboja_hunian,
  "infrastruktur": kamboja_infrastruktur,
  "sektor_ekstraksi": kamboja_ekstraksi,
  "sektor_manufaktur": kamboja_manufaktur,
  "sektor_peternakan": kamboja_peternakan,
  "sektor_agrikultur": kamboja_agrikultur,
  "sektor_perikanan": kamboja_perikanan,
  "sektor_olahan_pangan": kamboja_olahan_pangan,
  "sektor_farmasi": kamboja_farmasi,
  "sektor_pertahanan": kamboja_pertahanan,
  "armada_militer": kamboja_armada,
  "militer_strategis": kamboja_strategis,
  "armada_kepolisian": kamboja_kepolisian,
  "pabrik_militer": kamboja_pabrik,
  "intelijen": kamboja_intelijen,
    "pendidikan": kamboja_pendidikan,
  "kesehatan": kamboja_kesehatan,
  "hukum": kamboja_hukum,
  "sektor_olahraga": kamboja_olahraga,
  "sektor_komersial": kamboja_komersial,
  "sektor_hiburan": kamboja_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 17
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 18
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 19,
      "kepuasan": 86,
      "pendapatan": 13
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 12
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 18
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kamboja_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 16,
    "keamanan": 14,
    "keuangan": 39,
    "lingkungan": 60
  }
};


