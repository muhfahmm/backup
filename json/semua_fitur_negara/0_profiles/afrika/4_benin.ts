export const benin_profile = {
  "name_en": "Benin",
  "capital": "Porto-Novo",
  "name_id": "Benin",
  "lon": 2.25,
  "lat": 9.5,
  "flag": "🇧🇯",
  "jumlah_penduduk": 13224860,
  "anggaran": 185,
  "pendapatan_nasional": "528",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { benin_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/4_benin";
import { benin_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/4_benin";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { benin_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/4_benin";

import { benin_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/4_benin";
import { benin_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/4_benin";
import { benin_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/4_benin";
import { benin_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/4_benin";
import { benin_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/4_benin";
import { benin_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/4_benin";
import { benin_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/4_benin";
import { benin_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/4_benin";
import { benin_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/4_benin";
import { benin_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/4_benin";
import { benin_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/4_benin";
import { benin_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/4_benin";
import { benin_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/4_benin";
import { benin_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/4_benin";
import { benin_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/4_benin";
import { benin_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/4_benin";
import { benin_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/4_benin";
import { benin_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/4_benin";
import { benin_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/4_benin";
const benin_geopolitik = {
    "un_vote": 62,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
      "kekuatan_keras": 31,
      "prestise_diplomatik": 57
  }
  } as const;

export const benin: CountryData = {
  ...benin_profile,
  "sektor_listrik": benin_listrik,
  "hunian": benin_hunian,
  "infrastruktur": benin_infrastruktur,
  "sektor_ekstraksi": benin_ekstraksi,
  "sektor_manufaktur": benin_manufaktur,
  "sektor_peternakan": benin_peternakan,
  "sektor_agrikultur": benin_agrikultur,
  "sektor_perikanan": benin_perikanan,
  "sektor_olahan_pangan": benin_olahan_pangan,
  "sektor_farmasi": benin_farmasi,
  "sektor_pertahanan": benin_pertahanan,
  "armada_militer": benin_armada,
  "militer_strategis": benin_strategis,
  "armada_kepolisian": benin_kepolisian,
  "pabrik_militer": benin_pabrik,
  "intelijen": benin_intelijen,
    "pendidikan": benin_pendidikan,
  "kesehatan": benin_kesehatan,
  "hukum": benin_hukum,
  "sektor_olahraga": benin_olahraga,
  "sektor_komersial": benin_komersial,
  "sektor_hiburan": benin_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 7
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 24,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 29,
      "kepuasan": 93,
      "pendapatan": 12
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 2.6,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": benin_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 22,
    "pendidikan": 32,
    "keamanan": 17,
    "keuangan": 7,
    "lingkungan": 60
  }
};


