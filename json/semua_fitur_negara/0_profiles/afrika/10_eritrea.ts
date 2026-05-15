export const eritrea_profile = {
  "name_en": "Eritrea",
  "capital": "Asmara",
  "name_id": "Eritrea",
  "lon": 39,
  "lat": 15,
  "flag": "🇪🇷",
  "jumlah_penduduk": 3535603,
  "anggaran": 24,
  "pendapatan_nasional": "69",
  "religion": "Islam",
  "ideology": "Sosialisme"
} as const;

import { eritrea_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/10_eritrea";
import { eritrea_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/10_eritrea";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { eritrea_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/10_eritrea";

import { eritrea_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/10_eritrea";
import { eritrea_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/10_eritrea";
import { eritrea_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/10_eritrea";
import { eritrea_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/10_eritrea";
import { eritrea_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/10_eritrea";
import { eritrea_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/10_eritrea";
import { eritrea_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/10_eritrea";
import { eritrea_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/10_eritrea";
import { eritrea_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/10_eritrea";
import { eritrea_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/10_eritrea";
import { eritrea_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/10_eritrea";
import { eritrea_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/10_eritrea";
import { eritrea_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/10_eritrea";
import { eritrea_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/10_eritrea";
import { eritrea_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/10_eritrea";
import { eritrea_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/10_eritrea";
import { eritrea_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/10_eritrea";
import { eritrea_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/10_eritrea";
import { eritrea_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/10_eritrea";
const eritrea_geopolitik = {
    "un_vote": 47,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 27,
      "kekuatan_keras": 6,
      "prestise_diplomatik": 57
  }
  } as const;

export const eritrea: CountryData = {
  ...eritrea_profile,
  "sektor_listrik": eritrea_listrik,
  "hunian": eritrea_hunian,
  "infrastruktur": eritrea_infrastruktur,
  "sektor_ekstraksi": eritrea_ekstraksi,
  "sektor_manufaktur": eritrea_manufaktur,
  "sektor_peternakan": eritrea_peternakan,
  "sektor_agrikultur": eritrea_agrikultur,
  "sektor_perikanan": eritrea_perikanan,
  "sektor_olahan_pangan": eritrea_olahan_pangan,
  "sektor_farmasi": eritrea_farmasi,
  "sektor_pertahanan": eritrea_pertahanan,
  "armada_militer": eritrea_armada,
  "militer_strategis": eritrea_strategis,
  "armada_kepolisian": eritrea_kepolisian,
  "pabrik_militer": eritrea_pabrik,
  "intelijen": eritrea_intelijen,
    "pendidikan": eritrea_pendidikan,
  "kesehatan": eritrea_kesehatan,
  "hukum": eritrea_hukum,
  "sektor_olahraga": eritrea_olahraga,
  "sektor_komersial": eritrea_komersial,
  "sektor_hiburan": eritrea_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 7,
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
      "tarif": 32,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 7.2,
    "harga_telur": 43.54,
    "harga_bbm": 21.4,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": eritrea_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 31,
    "pendidikan": 24,
    "keamanan": 11,
    "keuangan": 18,
    "lingkungan": 60
  }
};


