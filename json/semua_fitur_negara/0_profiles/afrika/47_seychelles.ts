export const seychelles_profile = {
  "name_en": "Seychelles",
  "capital": "Victoria",
  "name_id": "Seychelles",
  "lon": 55.66666666,
  "lat": -4.58333333,
  "flag": "🇸🇨",
  "jumlah_penduduk": 100447,
  "anggaran": 19,
  "pendapatan_nasional": "56",
  "religion": "Katolik",
  "ideology": "Liberalisme"
} as const;

import { seychelles_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/47_seychelles";
import { seychelles_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/47_seychelles";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { seychelles_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/47_seychelles";

import { seychelles_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/47_seychelles";
import { seychelles_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/47_seychelles";
import { seychelles_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/47_seychelles";
import { seychelles_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/47_seychelles";
import { seychelles_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/47_seychelles";
import { seychelles_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/47_seychelles";
import { seychelles_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/47_seychelles";
import { seychelles_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/47_seychelles";
import { seychelles_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/47_seychelles";
import { seychelles_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/47_seychelles";
import { seychelles_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/47_seychelles";
import { seychelles_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/47_seychelles";
import { seychelles_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/47_seychelles";
import { seychelles_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/47_seychelles";
import { seychelles_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/47_seychelles";
import { seychelles_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/47_seychelles";
import { seychelles_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/47_seychelles";
import { seychelles_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/47_seychelles";
import { seychelles_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/47_seychelles";
const seychelles_geopolitik = {
    "un_vote": 6,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 27,
      "prestise_diplomatik": 57
  }
  } as const;

export const seychelles: CountryData = {
  ...seychelles_profile,
  "sektor_listrik": seychelles_listrik,
  "hunian": seychelles_hunian,
  "infrastruktur": seychelles_infrastruktur,
  "sektor_ekstraksi": seychelles_ekstraksi,
  "sektor_manufaktur": seychelles_manufaktur,
  "sektor_peternakan": seychelles_peternakan,
  "sektor_agrikultur": seychelles_agrikultur,
  "sektor_perikanan": seychelles_perikanan,
  "sektor_olahan_pangan": seychelles_olahan_pangan,
  "sektor_farmasi": seychelles_farmasi,
  "sektor_pertahanan": seychelles_pertahanan,
  "armada_militer": seychelles_armada,
  "militer_strategis": seychelles_strategis,
  "armada_kepolisian": seychelles_kepolisian,
  "pabrik_militer": seychelles_pabrik,
  "intelijen": seychelles_intelijen,
    "pendidikan": seychelles_pendidikan,
  "kesehatan": seychelles_kesehatan,
  "hukum": seychelles_hukum,
  "sektor_olahraga": seychelles_olahraga,
  "sektor_komersial": seychelles_komersial,
  "sektor_hiburan": seychelles_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 17,
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
    "harga_ayam": 41,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": seychelles_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 32,
    "pendidikan": 23,
    "keamanan": 10,
    "keuangan": 27,
    "lingkungan": 60
  }
};


