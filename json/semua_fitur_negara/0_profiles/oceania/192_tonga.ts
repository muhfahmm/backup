export const tonga_profile = {
  "name_en": "Tonga",
  "capital": "Nuku'alofa",
  "name_id": "Tonga",
  "lon": -175,
  "lat": -20,
  "flag": "🇹🇴",
  "jumlah_penduduk": 100179,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Monarki"
} as const;

import { tonga_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/oceania/192_tonga";
import { tonga_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/oceania/192_tonga";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { tonga_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/oceania/192_tonga";

import { tonga_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/oceania/192_tonga";
import { tonga_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/oceania/192_tonga";
import { tonga_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/oceania/192_tonga";
import { tonga_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/oceania/192_tonga";
import { tonga_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/oceania/192_tonga";
import { tonga_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/oceania/192_tonga";
import { tonga_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/oceania/192_tonga";
import { tonga_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/oceania/192_tonga";
import { tonga_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/oceania/192_tonga";
import { tonga_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/oceania/192_tonga";
import { tonga_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/oceania/192_tonga";
import { tonga_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/oceania/192_tonga";
import { tonga_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/oceania/192_tonga";
import { tonga_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/oceania/192_tonga";
import { tonga_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/oceania/192_tonga";
import { tonga_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/oceania/192_tonga";
import { tonga_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/oceania/192_tonga";
import { tonga_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/oceania/192_tonga";
import { tonga_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/oceania/192_tonga";
const tonga_geopolitik = {
    "un_vote": 5,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 5,
      "kekuatan_keras": 18,
      "prestise_diplomatik": 57
    }
  } as const;

export const tonga: CountryData = {
  ...tonga_profile,
  "sektor_listrik": tonga_listrik,
  "hunian": tonga_hunian,
  "infrastruktur": tonga_infrastruktur,
  "sektor_ekstraksi": tonga_ekstraksi,
  "sektor_manufaktur": tonga_manufaktur,
  "sektor_peternakan": tonga_peternakan,
  "sektor_agrikultur": tonga_agrikultur,
  "sektor_perikanan": tonga_perikanan,
  "sektor_olahan_pangan": tonga_olahan_pangan,
  "sektor_farmasi": tonga_farmasi,
  "sektor_pertahanan": tonga_pertahanan,
  "armada_militer": tonga_armada,
  "militer_strategis": tonga_strategis,
  "armada_kepolisian": tonga_kepolisian,
  "pabrik_militer": tonga_pabrik,
  "intelijen": tonga_intelijen,
    "pendidikan": tonga_pendidikan,
  "kesehatan": tonga_kesehatan,
  "hukum": tonga_hukum,
  "sektor_olahraga": tonga_olahraga,
  "sektor_komersial": tonga_komersial,
  "sektor_hiburan": tonga_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 11.52,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 10.4,
    "harga_obat": 315.8,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": tonga_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 19,
    "pendidikan": 33,
    "keamanan": 6,
    "keuangan": 18,
    "lingkungan": 60
  }
};


