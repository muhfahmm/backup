export const palestina_profile = {
  "name_en": "Palestine",
  "capital": "Ramallah",
  "name_id": "Palestina",
  "lon": 35.2,
  "lat": 31.9,
  "flag": "🇵🇸",
  "jumlah_penduduk": 5495000,
  "anggaran": 194,
  "pendapatan_nasional": "556",
  "religion": "Islam",
  "ideology": "Demokrasi"
} as const;

import { palestina_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/88_palestina";
import { palestina_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/88_palestina";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { palestina_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/88_palestina";

import { palestina_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/88_palestina";
import { palestina_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/88_palestina";
import { palestina_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/88_palestina";
import { palestina_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/88_palestina";
import { palestina_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/88_palestina";
import { palestina_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/88_palestina";
import { palestina_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/88_palestina";
import { palestina_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/88_palestina";
import { palestina_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/88_palestina";
import { palestina_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/88_palestina";
import { palestina_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/88_palestina";
import { palestina_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/88_palestina";
import { palestina_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/88_palestina";
import { palestina_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/88_palestina";
import { palestina_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/88_palestina";
import { palestina_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/88_palestina";
import { palestina_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/88_palestina";
import { palestina_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/88_palestina";
import { palestina_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/88_palestina";
const palestina_geopolitik = {
    "un_vote": 40,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 22,
      "kekuatan_keras": 9,
      "prestise_diplomatik": 57
    }
  } as const;

export const palestina: CountryData = {
  ...palestina_profile,
  "sektor_listrik": palestina_listrik,
  "hunian": palestina_hunian,
  "infrastruktur": palestina_infrastruktur,
  "sektor_ekstraksi": palestina_ekstraksi,
  "sektor_manufaktur": palestina_manufaktur,
  "sektor_peternakan": palestina_peternakan,
  "sektor_agrikultur": palestina_agrikultur,
  "sektor_perikanan": palestina_perikanan,
  "sektor_olahan_pangan": palestina_olahan_pangan,
  "sektor_farmasi": palestina_farmasi,
  "sektor_pertahanan": palestina_pertahanan,
  "armada_militer": palestina_armada,
  "militer_strategis": palestina_strategis,
  "armada_kepolisian": palestina_kepolisian,
  "pabrik_militer": palestina_pabrik,
  "intelijen": palestina_intelijen,
    "pendidikan": palestina_pendidikan,
  "kesehatan": palestina_kesehatan,
  "hukum": palestina_hukum,
  "sektor_olahraga": palestina_olahraga,
  "sektor_komersial": palestina_komersial,
  "sektor_hiburan": palestina_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 11
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 33,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 35,
      "kepuasan": 88,
      "pendapatan": 17
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 24.88,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 315.8,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": palestina_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 6,
    "pendidikan": 15,
    "keamanan": 33,
    "keuangan": 7,
    "lingkungan": 60
  }
};


