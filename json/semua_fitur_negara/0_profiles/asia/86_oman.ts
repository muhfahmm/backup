export const oman_profile = {
  "name_en": "Oman",
  "capital": "Muscat",
  "name_id": "Oman",
  "lon": 57,
  "lat": 21,
  "flag": "🇴🇲",
  "jumlah_penduduk": 5281538,
  "anggaran": 1021,
  "pendapatan_nasional": "2917",
  "religion": "Islam",
  "ideology": "Monarki"
} as const;

import { oman_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/86_oman";
import { oman_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/86_oman";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { oman_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/86_oman";

import { oman_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/86_oman";
import { oman_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/86_oman";
import { oman_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/86_oman";
import { oman_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/86_oman";
import { oman_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/86_oman";
import { oman_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/86_oman";
import { oman_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/86_oman";
import { oman_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/86_oman";
import { oman_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/86_oman";
import { oman_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/86_oman";
import { oman_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/86_oman";
import { oman_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/86_oman";
import { oman_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/86_oman";
import { oman_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/86_oman";
import { oman_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/86_oman";
import { oman_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/86_oman";
import { oman_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/86_oman";
import { oman_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/86_oman";
import { oman_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/86_oman";
const oman_geopolitik = {
    "un_vote": 165,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 32,
      "kekuatan_keras": 19,
      "prestise_diplomatik": 57
    }
  } as const;

export const oman: CountryData = {
  ...oman_profile,
  "sektor_listrik": oman_listrik,
  "hunian": oman_hunian,
  "infrastruktur": oman_infrastruktur,
  "sektor_ekstraksi": oman_ekstraksi,
  "sektor_manufaktur": oman_manufaktur,
  "sektor_peternakan": oman_peternakan,
  "sektor_agrikultur": oman_agrikultur,
  "sektor_perikanan": oman_perikanan,
  "sektor_olahan_pangan": oman_olahan_pangan,
  "sektor_farmasi": oman_farmasi,
  "sektor_pertahanan": oman_pertahanan,
  "armada_militer": oman_armada,
  "militer_strategis": oman_strategis,
  "armada_kepolisian": oman_kepolisian,
  "pabrik_militer": oman_pabrik,
  "intelijen": oman_intelijen,
    "pendidikan": oman_pendidikan,
  "kesehatan": oman_kesehatan,
  "hukum": oman_hukum,
  "sektor_olahraga": oman_olahraga,
  "sektor_komersial": oman_komersial,
  "sektor_hiburan": oman_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 13,
      "kepuasan": 67,
      "pendapatan": 33
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 23,
      "kepuasan": 61,
      "pendapatan": 47
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 31
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 38
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 16 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 104
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 28.8,
    "harga_telur": 24.88,
    "harga_bbm": 14.98,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": oman_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 26,
    "pendidikan": 22,
    "keamanan": 5,
    "keuangan": 24,
    "lingkungan": 60
  }
};


