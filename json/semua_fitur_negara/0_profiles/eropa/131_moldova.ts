export const moldova_profile = {
  "name_en": "Moldova",
  "capital": "Chișinău",
  "name_id": "Moldova",
  "lon": 29,
  "lat": 47,
  "flag": "🇲🇩",
  "jumlah_penduduk": 3334547,
  "anggaran": 156,
  "pendapatan_nasional": "444",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi"
} as const;

import { moldova_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/131_moldova";
import { moldova_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/131_moldova";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { moldova_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/131_moldova";

import { moldova_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/131_moldova";
import { moldova_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/131_moldova";
import { moldova_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/131_moldova";
import { moldova_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/131_moldova";
import { moldova_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/131_moldova";
import { moldova_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/131_moldova";
import { moldova_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/131_moldova";
import { moldova_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/131_moldova";
import { moldova_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/131_moldova";
import { moldova_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/131_moldova";
import { moldova_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/131_moldova";
import { moldova_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/131_moldova";
import { moldova_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/131_moldova";
import { moldova_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/131_moldova";
import { moldova_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/131_moldova";
import { moldova_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/131_moldova";
import { moldova_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/131_moldova";
import { moldova_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/131_moldova";
import { moldova_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/131_moldova";
const moldova_geopolitik = {
    "un_vote": 38,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 15,
      "kekuatan_keras": 7,
      "prestise_diplomatik": 57
    }
  } as const;

export const moldova: CountryData = {
  ...moldova_profile,
  "sektor_listrik": moldova_listrik,
  "hunian": moldova_hunian,
  "infrastruktur": moldova_infrastruktur,
  "sektor_ekstraksi": moldova_ekstraksi,
  "sektor_manufaktur": moldova_manufaktur,
  "sektor_peternakan": moldova_peternakan,
  "sektor_agrikultur": moldova_agrikultur,
  "sektor_perikanan": moldova_perikanan,
  "sektor_olahan_pangan": moldova_olahan_pangan,
  "sektor_farmasi": moldova_farmasi,
  "sektor_pertahanan": moldova_pertahanan,
  "armada_militer": moldova_armada,
  "militer_strategis": moldova_strategis,
  "armada_kepolisian": moldova_kepolisian,
  "pabrik_militer": moldova_pabrik,
  "intelijen": moldova_intelijen,
    "pendidikan": moldova_pendidikan,
  "kesehatan": moldova_kesehatan,
  "hukum": moldova_hukum,
  "sektor_olahraga": moldova_olahraga,
  "sektor_komersial": moldova_komersial,
  "sektor_hiburan": moldova_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 17,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 15
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 33,
      "kepuasan": 93,
      "pendapatan": 12
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 2.6,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": moldova_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 27,
    "keamanan": 22,
    "keuangan": 9,
    "lingkungan": 60
  }
};


