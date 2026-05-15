export const angola_profile = {
  "name_en": "Angola",
  "capital": "Luanda",
  "name_id": "Angola",
  "lon": 13.23,
  "lat": -8.83,
  "flag": "🇦🇴",
  "jumlah_penduduk": 38778554,
  "anggaran": 826,
  "pendapatan_nasional": "2361",
  "religion": "Katolik",
  "ideology": "Sosialisme"
} as const;

import { angola_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/3_angola";
import { angola_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/3_angola";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { angola_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/3_angola";

import { angola_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/3_angola";
import { angola_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/3_angola";
import { angola_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/3_angola";
import { angola_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/3_angola";
import { angola_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/3_angola";
import { angola_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/3_angola";
import { angola_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/3_angola";
import { angola_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/3_angola";
import { angola_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/3_angola";
import { angola_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/3_angola";
import { angola_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/3_angola";
import { angola_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/3_angola";
import { angola_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/3_angola";
import { angola_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/3_angola";
import { angola_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/3_angola";
import { angola_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/3_angola";
import { angola_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/3_angola";
import { angola_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/3_angola";
import { angola_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/3_angola";
const angola_geopolitik = {
    "un_vote": 155,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 37,
      "kekuatan_keras": 6,
      "prestise_diplomatik": 57
  }
  } as const;

export const angola: CountryData = {
  ...angola_profile,
  "sektor_listrik": angola_listrik,
  "hunian": angola_hunian,
  "infrastruktur": angola_infrastruktur,
  "sektor_ekstraksi": angola_ekstraksi,
  "sektor_manufaktur": angola_manufaktur,
  "sektor_peternakan": angola_peternakan,
  "sektor_agrikultur": angola_agrikultur,
  "sektor_perikanan": angola_perikanan,
  "sektor_olahan_pangan": angola_olahan_pangan,
  "sektor_farmasi": angola_farmasi,
  "sektor_pertahanan": angola_pertahanan,
  "armada_militer": angola_armada,
  "militer_strategis": angola_strategis,
  "armada_kepolisian": angola_kepolisian,
  "pabrik_militer": angola_pabrik,
  "intelijen": angola_intelijen,
    "pendidikan": angola_pendidikan,
  "kesehatan": angola_kesehatan,
  "hukum": angola_hukum,
  "sektor_olahraga": angola_olahraga,
  "sektor_komersial": angola_komersial,
  "sektor_hiburan": angola_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 26,
      "kepuasan": 67,
      "pendapatan": 49
    },
    "korporasi": {
      "tarif": 26,
      "kepuasan": 52,
      "pendapatan": 47
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 56
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 32
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 62
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 13 },
    "lainnya": {
      "tarif": 34,
      "kepuasan": 93,
      "pendapatan": 69
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
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": angola_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 32,
    "keamanan": 29,
    "keuangan": 18,
    "lingkungan": 60
  }
};


