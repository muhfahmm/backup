export const suriah_profile = {
  "name_en": "Syria",
  "capital": "Damascus",
  "name_id": "Suriah",
  "lon": 38,
  "lat": 35,
  "flag": "🇸🇾",
  "jumlah_penduduk": 22125000,
  "anggaran": 117,
  "pendapatan_nasional": "333",
  "religion": "Islam",
  "ideology": "Nasionalisme"
} as const;

import { suriah_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/93_suriah";
import { suriah_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/93_suriah";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { suriah_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/93_suriah";

import { suriah_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/93_suriah";
import { suriah_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/93_suriah";
import { suriah_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/93_suriah";
import { suriah_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/93_suriah";
import { suriah_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/93_suriah";
import { suriah_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/93_suriah";
import { suriah_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/93_suriah";
import { suriah_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/93_suriah";
import { suriah_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/93_suriah";
import { suriah_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/93_suriah";
import { suriah_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/93_suriah";
import { suriah_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/93_suriah";
import { suriah_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/93_suriah";
import { suriah_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/93_suriah";
import { suriah_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/93_suriah";
import { suriah_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/93_suriah";
import { suriah_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/93_suriah";
import { suriah_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/93_suriah";
import { suriah_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/93_suriah";
const suriah_geopolitik = {
    "un_vote": 65,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 13,
      "kekuatan_keras": 21,
      "prestise_diplomatik": 57
    }
  } as const;

export const suriah: CountryData = {
  ...suriah_profile,
  "sektor_listrik": suriah_listrik,
  "hunian": suriah_hunian,
  "infrastruktur": suriah_infrastruktur,
  "sektor_ekstraksi": suriah_ekstraksi,
  "sektor_manufaktur": suriah_manufaktur,
  "sektor_peternakan": suriah_peternakan,
  "sektor_agrikultur": suriah_agrikultur,
  "sektor_perikanan": suriah_perikanan,
  "sektor_olahan_pangan": suriah_olahan_pangan,
  "sektor_farmasi": suriah_farmasi,
  "sektor_pertahanan": suriah_pertahanan,
  "armada_militer": suriah_armada,
  "militer_strategis": suriah_strategis,
  "armada_kepolisian": suriah_kepolisian,
  "pabrik_militer": suriah_pabrik,
  "intelijen": suriah_intelijen,
    "pendidikan": suriah_pendidikan,
  "kesehatan": suriah_kesehatan,
  "hukum": suriah_hukum,
  "sektor_olahraga": suriah_olahraga,
  "sektor_komersial": suriah_komersial,
  "sektor_hiburan": suriah_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 22,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": suriah_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 38,
    "pendidikan": 13,
    "keamanan": 27,
    "keuangan": 29,
    "lingkungan": 60
  }
};


