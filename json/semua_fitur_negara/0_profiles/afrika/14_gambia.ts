export const gambia_profile = {
  "name_en": "Gambia",
  "capital": "Banjul",
  "name_id": "Gambia",
  "lon": -16.56666666,
  "lat": 13.46666666,
  "flag": "🇬🇲",
  "jumlah_penduduk": 2422754,
  "anggaran": 21,
  "pendapatan_nasional": "61",
  "religion": "Islam",
  "ideology": "Demokrasi"
} as const;

import { gambia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/14_gambia";
import { gambia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/14_gambia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { gambia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/14_gambia";

import { gambia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/14_gambia";
import { gambia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/14_gambia";
import { gambia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/14_gambia";
import { gambia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/14_gambia";
import { gambia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/14_gambia";
import { gambia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/14_gambia";
import { gambia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/14_gambia";
import { gambia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/14_gambia";
import { gambia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/14_gambia";
import { gambia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/14_gambia";
import { gambia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/14_gambia";
import { gambia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/14_gambia";
import { gambia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/14_gambia";
import { gambia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/14_gambia";
import { gambia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/14_gambia";
import { gambia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/14_gambia";
import { gambia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/14_gambia";
import { gambia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/14_gambia";
import { gambia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/14_gambia";
const gambia_geopolitik = {
    "un_vote": 116,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 40,
      "kekuatan_keras": 17,
      "prestise_diplomatik": 57
  }
  } as const;

export const gambia: CountryData = {
  ...gambia_profile,
  "sektor_listrik": gambia_listrik,
  "hunian": gambia_hunian,
  "infrastruktur": gambia_infrastruktur,
  "sektor_ekstraksi": gambia_ekstraksi,
  "sektor_manufaktur": gambia_manufaktur,
  "sektor_peternakan": gambia_peternakan,
  "sektor_agrikultur": gambia_agrikultur,
  "sektor_perikanan": gambia_perikanan,
  "sektor_olahan_pangan": gambia_olahan_pangan,
  "sektor_farmasi": gambia_farmasi,
  "sektor_pertahanan": gambia_pertahanan,
  "armada_militer": gambia_armada,
  "militer_strategis": gambia_strategis,
  "armada_kepolisian": gambia_kepolisian,
  "pabrik_militer": gambia_pabrik,
  "intelijen": gambia_intelijen,
    "pendidikan": gambia_pendidikan,
  "kesehatan": gambia_kesehatan,
  "hukum": gambia_hukum,
  "sektor_olahraga": gambia_olahraga,
  "sektor_komersial": gambia_komersial,
  "sektor_hiburan": gambia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 34,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": gambia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 33,
    "pendidikan": 23,
    "keamanan": 22,
    "keuangan": 31,
    "lingkungan": 60
  }
};


