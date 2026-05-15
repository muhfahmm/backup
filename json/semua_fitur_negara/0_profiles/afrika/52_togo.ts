export const togo_profile = {
  "name_en": "Togo",
  "capital": "Lomé",
  "name_id": "Togo",
  "lon": 1.16666666,
  "lat": 8,
  "flag": "🇹🇬",
  "jumlah_penduduk": 9053799,
  "anggaran": 88,
  "pendapatan_nasional": "250",
  "religion": "Katolik",
  "ideology": "Konservatisme"
} as const;

import { togo_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/52_togo";
import { togo_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/52_togo";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { togo_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/52_togo";

import { togo_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/52_togo";
import { togo_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/52_togo";
import { togo_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/52_togo";
import { togo_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/52_togo";
import { togo_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/52_togo";
import { togo_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/52_togo";
import { togo_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/52_togo";
import { togo_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/52_togo";
import { togo_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/52_togo";
import { togo_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/52_togo";
import { togo_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/52_togo";
import { togo_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/52_togo";
import { togo_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/52_togo";
import { togo_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/52_togo";
import { togo_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/52_togo";
import { togo_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/52_togo";
import { togo_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/52_togo";
import { togo_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/52_togo";
import { togo_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/52_togo";
const togo_geopolitik = {
    "un_vote": 122,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 35,
      "kekuatan_keras": 17,
      "prestise_diplomatik": 57
  }
  } as const;

export const togo: CountryData = {
  ...togo_profile,
  "sektor_listrik": togo_listrik,
  "hunian": togo_hunian,
  "infrastruktur": togo_infrastruktur,
  "sektor_ekstraksi": togo_ekstraksi,
  "sektor_manufaktur": togo_manufaktur,
  "sektor_peternakan": togo_peternakan,
  "sektor_agrikultur": togo_agrikultur,
  "sektor_perikanan": togo_perikanan,
  "sektor_olahan_pangan": togo_olahan_pangan,
  "sektor_farmasi": togo_farmasi,
  "sektor_pertahanan": togo_pertahanan,
  "armada_militer": togo_armada,
  "militer_strategis": togo_strategis,
  "armada_kepolisian": togo_kepolisian,
  "pabrik_militer": togo_pabrik,
  "intelijen": togo_intelijen,
    "pendidikan": togo_pendidikan,
  "kesehatan": togo_kesehatan,
  "hukum": togo_hukum,
  "sektor_olahraga": togo_olahraga,
  "sektor_komersial": togo_komersial,
  "sektor_hiburan": togo_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 5,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 35,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 82,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": togo_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 22,
    "pendidikan": 30,
    "keamanan": 2,
    "keuangan": 11,
    "lingkungan": 60
  }
};


