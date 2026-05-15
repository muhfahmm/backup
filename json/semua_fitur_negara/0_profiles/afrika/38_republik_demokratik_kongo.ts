export const republik_demokratik_kongo_profile = {
  "name_en": "DR Congo",
  "capital": "Kinshasa",
  "name_id": "Republik demokratik kongo",
  "lon": 25,
  "lat": 0,
  "flag": "🇨🇩",
  "jumlah_penduduk": 102262808,
  "anggaran": 603,
  "pendapatan_nasional": "1722",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { republik_demokratik_kongo_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/38_republik_demokratik_kongo";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { republik_demokratik_kongo_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/38_republik_demokratik_kongo";

import { republik_demokratik_kongo_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/38_republik_demokratik_kongo";
const republik_demokratik_kongo_geopolitik = {
    "un_vote": 136,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 25,
      "kekuatan_keras": 19,
      "prestise_diplomatik": 57
  }
  } as const;

export const republik_demokratik_kongo: CountryData = {
  ...republik_demokratik_kongo_profile,
  "sektor_listrik": republik_demokratik_kongo_listrik,
  "hunian": republik_demokratik_kongo_hunian,
  "infrastruktur": republik_demokratik_kongo_infrastruktur,
  "sektor_ekstraksi": republik_demokratik_kongo_ekstraksi,
  "sektor_manufaktur": republik_demokratik_kongo_manufaktur,
  "sektor_peternakan": republik_demokratik_kongo_peternakan,
  "sektor_agrikultur": republik_demokratik_kongo_agrikultur,
  "sektor_perikanan": republik_demokratik_kongo_perikanan,
  "sektor_olahan_pangan": republik_demokratik_kongo_olahan_pangan,
  "sektor_farmasi": republik_demokratik_kongo_farmasi,
  "sektor_pertahanan": republik_demokratik_kongo_pertahanan,
  "armada_militer": republik_demokratik_kongo_armada,
  "militer_strategis": republik_demokratik_kongo_strategis,
  "armada_kepolisian": republik_demokratik_kongo_kepolisian,
  "pabrik_militer": republik_demokratik_kongo_pabrik,
  "intelijen": republik_demokratik_kongo_intelijen,
    "pendidikan": republik_demokratik_kongo_pendidikan,
  "kesehatan": republik_demokratik_kongo_kesehatan,
  "hukum": republik_demokratik_kongo_hukum,
  "sektor_olahraga": republik_demokratik_kongo_olahraga,
  "sektor_komersial": republik_demokratik_kongo_komersial,
  "sektor_hiburan": republik_demokratik_kongo_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 50
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 49
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 23
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 54
    },
    "lingkungan": {
      "tarif": 4,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 10 },
    "lainnya": {
      "tarif": 9,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 7.2,
    "harga_telur": 15.55,
    "harga_bbm": 10.7,
    "harga_listrik": 3.2,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_demokratik_kongo_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 28,
    "pendidikan": 24,
    "keamanan": 9,
    "keuangan": 34,
    "lingkungan": 60
  }
};


