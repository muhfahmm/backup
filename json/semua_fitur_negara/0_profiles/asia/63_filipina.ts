export const filipina_profile = {
  "name_en": "Philippines",
  "capital": "Manila",
  "name_id": "Filipina",
  "lon": 120.98,
  "lat": 14.59,
  "flag": "🇵🇭",
  "jumlah_penduduk": 114123600,
  "anggaran": 4230,
  "pendapatan_nasional": "12084",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { filipina_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/63_filipina";
import { filipina_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/63_filipina";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { filipina_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/63_filipina";

import { filipina_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/63_filipina";
import { filipina_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/63_filipina";
import { filipina_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/63_filipina";
import { filipina_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/63_filipina";
import { filipina_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/63_filipina";
import { filipina_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/63_filipina";
import { filipina_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/63_filipina";
import { filipina_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/63_filipina";
import { filipina_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/63_filipina";
import { filipina_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/63_filipina";
import { filipina_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/63_filipina";
import { filipina_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/63_filipina";
import { filipina_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/63_filipina";
import { filipina_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/63_filipina";
import { filipina_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/63_filipina";
import { filipina_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/63_filipina";
import { filipina_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/63_filipina";
import { filipina_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/63_filipina";
import { filipina_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/63_filipina";
const filipina_geopolitik = {
    "un_vote": 139,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 8,
      "kekuatan_keras": 21,
      "prestise_diplomatik": 57
    }
  } as const;

export const filipina: CountryData = {
  ...filipina_profile,
  "sektor_listrik": filipina_listrik,
  "hunian": filipina_hunian,
  "infrastruktur": filipina_infrastruktur,
  "sektor_ekstraksi": filipina_ekstraksi,
  "sektor_manufaktur": filipina_manufaktur,
  "sektor_peternakan": filipina_peternakan,
  "sektor_agrikultur": filipina_agrikultur,
  "sektor_perikanan": filipina_perikanan,
  "sektor_olahan_pangan": filipina_olahan_pangan,
  "sektor_farmasi": filipina_farmasi,
  "sektor_pertahanan": filipina_pertahanan,
  "armada_militer": filipina_armada,
  "militer_strategis": filipina_strategis,
  "armada_kepolisian": filipina_kepolisian,
  "pabrik_militer": filipina_pabrik,
  "intelijen": filipina_intelijen,
    "pendidikan": filipina_pendidikan,
  "kesehatan": filipina_kesehatan,
  "hukum": filipina_hukum,
  "sektor_olahraga": filipina_olahraga,
  "sektor_komersial": filipina_komersial,
  "sektor_hiburan": filipina_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 201
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 44
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 279
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 81
    },
    "lingkungan": {
      "tarif": 27,
      "kepuasan": 88,
      "pendapatan": 149
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 22 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 64 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 69
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": filipina_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 13,
    "pendidikan": 36,
    "keamanan": 30,
    "keuangan": 32,
    "lingkungan": 60
  }
};


