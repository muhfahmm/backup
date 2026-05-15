export const kiribati_profile = {
  "name_en": "Kiribati",
  "capital": "South Tarawa",
  "name_id": "Kiribati",
  "lon": 173,
  "lat": 1.41666666,
  "flag": "🇰🇮",
  "jumlah_penduduk": 134518,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { kiribati_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/oceania/182_kiribati";
import { kiribati_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/oceania/182_kiribati";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { kiribati_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/oceania/182_kiribati";

import { kiribati_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/oceania/182_kiribati";
import { kiribati_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/oceania/182_kiribati";
import { kiribati_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/oceania/182_kiribati";
import { kiribati_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/oceania/182_kiribati";
import { kiribati_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/oceania/182_kiribati";
import { kiribati_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/oceania/182_kiribati";
import { kiribati_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/oceania/182_kiribati";
import { kiribati_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/oceania/182_kiribati";
import { kiribati_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/oceania/182_kiribati";
import { kiribati_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/oceania/182_kiribati";
import { kiribati_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/oceania/182_kiribati";
import { kiribati_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/oceania/182_kiribati";
import { kiribati_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/oceania/182_kiribati";
import { kiribati_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/oceania/182_kiribati";
import { kiribati_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/oceania/182_kiribati";
import { kiribati_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/oceania/182_kiribati";
import { kiribati_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/oceania/182_kiribati";
import { kiribati_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/oceania/182_kiribati";
import { kiribati_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/oceania/182_kiribati";
const kiribati_geopolitik = {
    "un_vote": 2,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 3,
      "kekuatan_keras": 18,
      "prestise_diplomatik": 57
    }
  } as const;

export const kiribati: CountryData = {
  ...kiribati_profile,
  "sektor_listrik": kiribati_listrik,
  "hunian": kiribati_hunian,
  "infrastruktur": kiribati_infrastruktur,
  "sektor_ekstraksi": kiribati_ekstraksi,
  "sektor_manufaktur": kiribati_manufaktur,
  "sektor_peternakan": kiribati_peternakan,
  "sektor_agrikultur": kiribati_agrikultur,
  "sektor_perikanan": kiribati_perikanan,
  "sektor_olahan_pangan": kiribati_olahan_pangan,
  "sektor_farmasi": kiribati_farmasi,
  "sektor_pertahanan": kiribati_pertahanan,
  "armada_militer": kiribati_armada,
  "militer_strategis": kiribati_strategis,
  "armada_kepolisian": kiribati_kepolisian,
  "pabrik_militer": kiribati_pabrik,
  "intelijen": kiribati_intelijen,
    "pendidikan": kiribati_pendidikan,
  "kesehatan": kiribati_kesehatan,
  "hukum": kiribati_hukum,
  "sektor_olahraga": kiribati_olahraga,
  "sektor_komersial": kiribati_komersial,
  "sektor_hiburan": kiribati_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 33,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 25,
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
      "tarif": 9,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kiribati_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 23,
    "keamanan": 9,
    "keuangan": 16,
    "lingkungan": 60
  }
};


