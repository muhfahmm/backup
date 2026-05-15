export const latvia_profile = {
  "name_en": "Latvia",
  "capital": "Riga",
  "name_id": "Latvia",
  "lon": 25,
  "lat": 57,
  "flag": "🇱🇻",
  "jumlah_penduduk": 1857400,
  "anggaran": 418,
  "pendapatan_nasional": "1195",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { latvia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/125_latvia";
import { latvia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/125_latvia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { latvia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/125_latvia";

import { latvia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/125_latvia";
import { latvia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/125_latvia";
import { latvia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/125_latvia";
import { latvia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/125_latvia";
import { latvia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/125_latvia";
import { latvia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/125_latvia";
import { latvia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/125_latvia";
import { latvia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/125_latvia";
import { latvia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/125_latvia";
import { latvia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/125_latvia";
import { latvia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/125_latvia";
import { latvia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/125_latvia";
import { latvia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/125_latvia";
import { latvia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/125_latvia";
import { latvia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/125_latvia";
import { latvia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/125_latvia";
import { latvia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/125_latvia";
import { latvia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/125_latvia";
import { latvia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/125_latvia";
const latvia_geopolitik = {
    "un_vote": 164,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 37,
      "kekuatan_keras": 17,
      "prestise_diplomatik": 57
    }
  } as const;

export const latvia: CountryData = {
  ...latvia_profile,
  "sektor_listrik": latvia_listrik,
  "hunian": latvia_hunian,
  "infrastruktur": latvia_infrastruktur,
  "sektor_ekstraksi": latvia_ekstraksi,
  "sektor_manufaktur": latvia_manufaktur,
  "sektor_peternakan": latvia_peternakan,
  "sektor_agrikultur": latvia_agrikultur,
  "sektor_perikanan": latvia_perikanan,
  "sektor_olahan_pangan": latvia_olahan_pangan,
  "sektor_farmasi": latvia_farmasi,
  "sektor_pertahanan": latvia_pertahanan,
  "armada_militer": latvia_armada,
  "militer_strategis": latvia_strategis,
  "armada_kepolisian": latvia_kepolisian,
  "pabrik_militer": latvia_pabrik,
  "intelijen": latvia_intelijen,
    "pendidikan": latvia_pendidikan,
  "kesehatan": latvia_kesehatan,
  "hukum": latvia_hukum,
  "sektor_olahraga": latvia_olahraga,
  "sektor_komersial": latvia_komersial,
  "sektor_hiburan": latvia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 39,
      "kepuasan": 67,
      "pendapatan": 23
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 25
    },
    "penghasilan": {
      "tarif": 14,
      "kepuasan": 61,
      "pendapatan": 15
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 16
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 24
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 18,
      "kepuasan": 93,
      "pendapatan": 14
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": latvia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 1,
    "keamanan": 31,
    "keuangan": 27,
    "lingkungan": 60
  }
};


