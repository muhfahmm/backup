export const belanda_profile = {
  "name_en": "Netherlands",
  "capital": "Amsterdam",
  "name_id": "Belanda",
  "lon": 4.9,
  "lat": 52.36,
  "flag": "🇳🇱",
  "jumlah_penduduk": 18137265,
  "anggaran": 10598,
  "pendapatan_nasional": "30280",
  "religion": "Protestan",
  "ideology": "Kapitalisme"
} as const;

import { belanda_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/106_belanda";
import { belanda_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/106_belanda";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { belanda_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/106_belanda";

import { belanda_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/106_belanda";
import { belanda_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/106_belanda";
import { belanda_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/106_belanda";
import { belanda_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/106_belanda";
import { belanda_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/106_belanda";
import { belanda_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/106_belanda";
import { belanda_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/106_belanda";
import { belanda_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/106_belanda";
import { belanda_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/106_belanda";
import { belanda_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/106_belanda";
import { belanda_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/106_belanda";
import { belanda_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/106_belanda";
import { belanda_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/106_belanda";
import { belanda_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/106_belanda";
import { belanda_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/106_belanda";
import { belanda_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/106_belanda";
import { belanda_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/106_belanda";
import { belanda_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/106_belanda";
import { belanda_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/106_belanda";
const belanda_geopolitik = {
    "un_vote": 196,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 22,
      "prestise_diplomatik": 57
    }
  } as const;

export const belanda: CountryData = {
  ...belanda_profile,
  "sektor_listrik": belanda_listrik,
  "hunian": belanda_hunian,
  "infrastruktur": belanda_infrastruktur,
  "sektor_ekstraksi": belanda_ekstraksi,
  "sektor_manufaktur": belanda_manufaktur,
  "sektor_peternakan": belanda_peternakan,
  "sektor_agrikultur": belanda_agrikultur,
  "sektor_perikanan": belanda_perikanan,
  "sektor_olahan_pangan": belanda_olahan_pangan,
  "sektor_farmasi": belanda_farmasi,
  "sektor_pertahanan": belanda_pertahanan,
  "armada_militer": belanda_armada,
  "militer_strategis": belanda_strategis,
  "armada_kepolisian": belanda_kepolisian,
  "pabrik_militer": belanda_pabrik,
  "intelijen": belanda_intelijen,
    "pendidikan": belanda_pendidikan,
  "kesehatan": belanda_kesehatan,
  "hukum": belanda_hukum,
  "sektor_olahraga": belanda_olahraga,
  "sektor_komersial": belanda_komersial,
  "sektor_hiburan": belanda_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 271
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 1015
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 489
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 610
    },
    "lingkungan": {
      "tarif": 31,
      "kepuasan": 88,
      "pendapatan": 731
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 53 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 159 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 129
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 7.2,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": belanda_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 23,
    "pendidikan": 25,
    "keamanan": 26,
    "keuangan": 30,
    "lingkungan": 60
  }
};


