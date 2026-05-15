export const namibia_profile = {
  "name_en": "Namibia",
  "capital": "Windhoek",
  "name_id": "Namibia",
  "lon": 17,
  "lat": -22,
  "flag": "🇳🇦",
  "jumlah_penduduk": 3022401,
  "anggaran": 126,
  "pendapatan_nasional": "361",
  "religion": "Protestan",
  "ideology": "Sosialisme"
} as const;

import { namibia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/33_namibia";
import { namibia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/33_namibia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { namibia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/33_namibia";

import { namibia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/33_namibia";
import { namibia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/33_namibia";
import { namibia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/33_namibia";
import { namibia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/33_namibia";
import { namibia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/33_namibia";
import { namibia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/33_namibia";
import { namibia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/33_namibia";
import { namibia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/33_namibia";
import { namibia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/33_namibia";
import { namibia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/33_namibia";
import { namibia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/33_namibia";
import { namibia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/33_namibia";
import { namibia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/33_namibia";
import { namibia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/33_namibia";
import { namibia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/33_namibia";
import { namibia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/33_namibia";
import { namibia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/33_namibia";
import { namibia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/33_namibia";
import { namibia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/33_namibia";
const namibia_geopolitik = {
    "un_vote": 28,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 7,
      "kekuatan_keras": 25,
      "prestise_diplomatik": 57
  }
  } as const;

export const namibia: CountryData = {
  ...namibia_profile,
  "sektor_listrik": namibia_listrik,
  "hunian": namibia_hunian,
  "infrastruktur": namibia_infrastruktur,
  "sektor_ekstraksi": namibia_ekstraksi,
  "sektor_manufaktur": namibia_manufaktur,
  "sektor_peternakan": namibia_peternakan,
  "sektor_agrikultur": namibia_agrikultur,
  "sektor_perikanan": namibia_perikanan,
  "sektor_olahan_pangan": namibia_olahan_pangan,
  "sektor_farmasi": namibia_farmasi,
  "sektor_pertahanan": namibia_pertahanan,
  "armada_militer": namibia_armada,
  "militer_strategis": namibia_strategis,
  "armada_kepolisian": namibia_kepolisian,
  "pabrik_militer": namibia_pabrik,
  "intelijen": namibia_intelijen,
    "pendidikan": namibia_pendidikan,
  "kesehatan": namibia_kesehatan,
  "hukum": namibia_hukum,
  "sektor_olahraga": namibia_olahraga,
  "sektor_komersial": namibia_komersial,
  "sektor_hiburan": namibia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 2,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": namibia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 1,
    "pendidikan": 22,
    "keamanan": 39,
    "keuangan": 24,
    "lingkungan": 60
  }
};


