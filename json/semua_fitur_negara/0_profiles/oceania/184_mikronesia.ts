export const mikronesia_profile = {
  "name_en": "Micronesia",
  "capital": "Palikir",
  "name_id": "Mikronesia",
  "lon": 158.25,
  "lat": 6.91666666,
  "flag": "🇫🇲",
  "jumlah_penduduk": 115107,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { mikronesia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/oceania/184_mikronesia";
import { mikronesia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/oceania/184_mikronesia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { mikronesia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/oceania/184_mikronesia";

import { mikronesia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/oceania/184_mikronesia";
import { mikronesia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/oceania/184_mikronesia";
import { mikronesia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/oceania/184_mikronesia";
import { mikronesia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/oceania/184_mikronesia";
import { mikronesia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/oceania/184_mikronesia";
import { mikronesia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/oceania/184_mikronesia";
import { mikronesia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/oceania/184_mikronesia";
import { mikronesia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/oceania/184_mikronesia";
import { mikronesia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/oceania/184_mikronesia";
import { mikronesia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/oceania/184_mikronesia";
import { mikronesia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/oceania/184_mikronesia";
import { mikronesia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/oceania/184_mikronesia";
import { mikronesia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/oceania/184_mikronesia";
import { mikronesia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/oceania/184_mikronesia";
import { mikronesia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/oceania/184_mikronesia";
import { mikronesia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/oceania/184_mikronesia";
import { mikronesia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/oceania/184_mikronesia";
import { mikronesia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/oceania/184_mikronesia";
import { mikronesia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/oceania/184_mikronesia";
const mikronesia_geopolitik = {
    "un_vote": 14,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 9,
      "kekuatan_keras": 29,
      "prestise_diplomatik": 57
    }
  } as const;

export const mikronesia: CountryData = {
  ...mikronesia_profile,
  "sektor_listrik": mikronesia_listrik,
  "hunian": mikronesia_hunian,
  "infrastruktur": mikronesia_infrastruktur,
  "sektor_ekstraksi": mikronesia_ekstraksi,
  "sektor_manufaktur": mikronesia_manufaktur,
  "sektor_peternakan": mikronesia_peternakan,
  "sektor_agrikultur": mikronesia_agrikultur,
  "sektor_perikanan": mikronesia_perikanan,
  "sektor_olahan_pangan": mikronesia_olahan_pangan,
  "sektor_farmasi": mikronesia_farmasi,
  "sektor_pertahanan": mikronesia_pertahanan,
  "armada_militer": mikronesia_armada,
  "militer_strategis": mikronesia_strategis,
  "armada_kepolisian": mikronesia_kepolisian,
  "pabrik_militer": mikronesia_pabrik,
  "intelijen": mikronesia_intelijen,
    "pendidikan": mikronesia_pendidikan,
  "kesehatan": mikronesia_kesehatan,
  "hukum": mikronesia_hukum,
  "sektor_olahraga": mikronesia_olahraga,
  "sektor_komersial": mikronesia_komersial,
  "sektor_hiburan": mikronesia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 12,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 7,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 15,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 27,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": mikronesia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 5,
    "pendidikan": 4,
    "keamanan": 24,
    "keuangan": 19,
    "lingkungan": 60
  }
};


