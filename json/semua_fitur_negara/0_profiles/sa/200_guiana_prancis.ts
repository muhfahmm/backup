export const guiana_prancis_profile = {
  "name_en": "French Guiana",
  "capital": "Cayenne",
  "name_id": "Guiana prancis",
  "lon": -53,
  "lat": 4,
  "flag": "🇬🇫",
  "jumlah_penduduk": 316604,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { guiana_prancis_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/sa/200_guiana_prancis";
import { guiana_prancis_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/sa/200_guiana_prancis";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { guiana_prancis_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/sa/200_guiana_prancis";

import { guiana_prancis_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/sa/200_guiana_prancis";
import { guiana_prancis_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/sa/200_guiana_prancis";
import { guiana_prancis_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/sa/200_guiana_prancis";
import { guiana_prancis_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/sa/200_guiana_prancis";
import { guiana_prancis_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/sa/200_guiana_prancis";
import { guiana_prancis_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/sa/200_guiana_prancis";
import { guiana_prancis_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/sa/200_guiana_prancis";
import { guiana_prancis_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/sa/200_guiana_prancis";
import { guiana_prancis_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/sa/200_guiana_prancis";
import { guiana_prancis_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/sa/200_guiana_prancis";
import { guiana_prancis_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/sa/200_guiana_prancis";
import { guiana_prancis_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/sa/200_guiana_prancis";
import { guiana_prancis_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/sa/200_guiana_prancis";
import { guiana_prancis_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/sa/200_guiana_prancis";
import { guiana_prancis_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/sa/200_guiana_prancis";
import { guiana_prancis_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/sa/200_guiana_prancis";
import { guiana_prancis_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/sa/200_guiana_prancis";
import { guiana_prancis_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/sa/200_guiana_prancis";
import { guiana_prancis_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/sa/200_guiana_prancis";
const guiana_prancis_geopolitik = {
    "un_vote": 39,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 3,
      "kekuatan_keras": 35,
      "prestise_diplomatik": 57
    }
  } as const;

export const guiana_prancis: CountryData = {
  ...guiana_prancis_profile,
  "sektor_listrik": guiana_prancis_listrik,
  "hunian": guiana_prancis_hunian,
  "infrastruktur": guiana_prancis_infrastruktur,
  "sektor_ekstraksi": guiana_prancis_ekstraksi,
  "sektor_manufaktur": guiana_prancis_manufaktur,
  "sektor_peternakan": guiana_prancis_peternakan,
  "sektor_agrikultur": guiana_prancis_agrikultur,
  "sektor_perikanan": guiana_prancis_perikanan,
  "sektor_olahan_pangan": guiana_prancis_olahan_pangan,
  "sektor_farmasi": guiana_prancis_farmasi,
  "sektor_pertahanan": guiana_prancis_pertahanan,
  "armada_militer": guiana_prancis_armada,
  "militer_strategis": guiana_prancis_strategis,
  "armada_kepolisian": guiana_prancis_kepolisian,
  "pabrik_militer": guiana_prancis_pabrik,
  "intelijen": guiana_prancis_intelijen,
    "pendidikan": guiana_prancis_pendidikan,
  "kesehatan": guiana_prancis_kesehatan,
  "hukum": guiana_prancis_hukum,
  "sektor_olahraga": guiana_prancis_olahraga,
  "sektor_komersial": guiana_prancis_komersial,
  "sektor_hiburan": guiana_prancis_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 20,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 82,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 28.8,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 0.8,
    "harga_air": 4.16,
    "harga_obat": 315.8,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": guiana_prancis_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 25,
    "pendidikan": 14,
    "keamanan": 13,
    "keuangan": 27,
    "lingkungan": 60
  }
};


