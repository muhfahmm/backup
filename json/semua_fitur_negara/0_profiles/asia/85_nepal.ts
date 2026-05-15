export const nepal_profile = {
  "name_en": "Nepal",
  "capital": "Kathmandu",
  "name_id": "Nepal",
  "lon": 84,
  "lat": 28,
  "flag": "🇳🇵",
  "jumlah_penduduk": 29164578,
  "anggaran": 389,
  "pendapatan_nasional": "1111",
  "religion": "Hindu",
  "ideology": "Demokrasi"
} as const;

import { nepal_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/85_nepal";
import { nepal_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/85_nepal";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { nepal_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/85_nepal";

import { nepal_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/85_nepal";
import { nepal_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/85_nepal";
import { nepal_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/85_nepal";
import { nepal_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/85_nepal";
import { nepal_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/85_nepal";
import { nepal_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/85_nepal";
import { nepal_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/85_nepal";
import { nepal_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/85_nepal";
import { nepal_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/85_nepal";
import { nepal_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/85_nepal";
import { nepal_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/85_nepal";
import { nepal_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/85_nepal";
import { nepal_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/85_nepal";
import { nepal_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/85_nepal";
import { nepal_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/85_nepal";
import { nepal_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/85_nepal";
import { nepal_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/85_nepal";
import { nepal_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/85_nepal";
import { nepal_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/85_nepal";
const nepal_geopolitik = {
    "un_vote": 89,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 14,
      "prestise_diplomatik": 57
    }
  } as const;

export const nepal: CountryData = {
  ...nepal_profile,
  "sektor_listrik": nepal_listrik,
  "hunian": nepal_hunian,
  "infrastruktur": nepal_infrastruktur,
  "sektor_ekstraksi": nepal_ekstraksi,
  "sektor_manufaktur": nepal_manufaktur,
  "sektor_peternakan": nepal_peternakan,
  "sektor_agrikultur": nepal_agrikultur,
  "sektor_perikanan": nepal_perikanan,
  "sektor_olahan_pangan": nepal_olahan_pangan,
  "sektor_farmasi": nepal_farmasi,
  "sektor_pertahanan": nepal_pertahanan,
  "armada_militer": nepal_armada,
  "militer_strategis": nepal_strategis,
  "armada_kepolisian": nepal_kepolisian,
  "pabrik_militer": nepal_pabrik,
  "intelijen": nepal_intelijen,
    "pendidikan": nepal_pendidikan,
  "kesehatan": nepal_kesehatan,
  "hukum": nepal_hukum,
  "sektor_olahraga": nepal_olahraga,
  "sektor_komersial": nepal_komersial,
  "sektor_hiburan": nepal_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 16
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 14
    },
    "bea_cukai": {
      "tarif": 2,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 6 },
    "lainnya": {
      "tarif": 18,
      "kepuasan": 93,
      "pendapatan": 11
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 14.4,
    "harga_telur": 62.2,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": nepal_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 30,
    "pendidikan": 32,
    "keamanan": 40,
    "keuangan": 25,
    "lingkungan": 60
  }
};


