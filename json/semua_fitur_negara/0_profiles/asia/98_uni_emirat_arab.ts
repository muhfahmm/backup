export const uni_emirat_arab_profile = {
  "name_en": "United Arab Emirates",
  "capital": "Abu Dhabi",
  "name_id": "Uni emirat arab",
  "lon": 54.37,
  "lat": 24.45,
  "flag": "🇦🇪",
  "jumlah_penduduk": 9541615,
  "anggaran": 4959,
  "pendapatan_nasional": "14168",
  "religion": "Islam",
  "ideology": "Monarki"
} as const;

import { uni_emirat_arab_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/98_uni_emirat_arab";
import { uni_emirat_arab_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/98_uni_emirat_arab";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { uni_emirat_arab_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/98_uni_emirat_arab";

import { uni_emirat_arab_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/98_uni_emirat_arab";
import { uni_emirat_arab_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/98_uni_emirat_arab";
import { uni_emirat_arab_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/98_uni_emirat_arab";
import { uni_emirat_arab_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/98_uni_emirat_arab";
import { uni_emirat_arab_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/98_uni_emirat_arab";
import { uni_emirat_arab_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/98_uni_emirat_arab";
import { uni_emirat_arab_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/98_uni_emirat_arab";
import { uni_emirat_arab_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/98_uni_emirat_arab";
import { uni_emirat_arab_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/98_uni_emirat_arab";
import { uni_emirat_arab_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/98_uni_emirat_arab";
import { uni_emirat_arab_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/98_uni_emirat_arab";
import { uni_emirat_arab_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/98_uni_emirat_arab";
import { uni_emirat_arab_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/98_uni_emirat_arab";
import { uni_emirat_arab_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/98_uni_emirat_arab";
import { uni_emirat_arab_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/98_uni_emirat_arab";
import { uni_emirat_arab_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/98_uni_emirat_arab";
import { uni_emirat_arab_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/98_uni_emirat_arab";
import { uni_emirat_arab_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/98_uni_emirat_arab";
import { uni_emirat_arab_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/98_uni_emirat_arab";
const uni_emirat_arab_geopolitik = {
    "un_vote": 193,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 32,
      "kekuatan_keras": 29,
      "prestise_diplomatik": 57
    }
  } as const;

export const uni_emirat_arab: CountryData = {
  ...uni_emirat_arab_profile,
  "sektor_listrik": uni_emirat_arab_listrik,
  "hunian": uni_emirat_arab_hunian,
  "infrastruktur": uni_emirat_arab_infrastruktur,
  "sektor_ekstraksi": uni_emirat_arab_ekstraksi,
  "sektor_manufaktur": uni_emirat_arab_manufaktur,
  "sektor_peternakan": uni_emirat_arab_peternakan,
  "sektor_agrikultur": uni_emirat_arab_agrikultur,
  "sektor_perikanan": uni_emirat_arab_perikanan,
  "sektor_olahan_pangan": uni_emirat_arab_olahan_pangan,
  "sektor_farmasi": uni_emirat_arab_farmasi,
  "sektor_pertahanan": uni_emirat_arab_pertahanan,
  "armada_militer": uni_emirat_arab_armada,
  "militer_strategis": uni_emirat_arab_strategis,
  "armada_kepolisian": uni_emirat_arab_kepolisian,
  "pabrik_militer": uni_emirat_arab_pabrik,
  "intelijen": uni_emirat_arab_intelijen,
    "pendidikan": uni_emirat_arab_pendidikan,
  "kesehatan": uni_emirat_arab_kesehatan,
  "hukum": uni_emirat_arab_hukum,
  "sektor_olahraga": uni_emirat_arab_olahraga,
  "sektor_komersial": uni_emirat_arab_komersial,
  "sektor_hiburan": uni_emirat_arab_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 211
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 81
    },
    "penghasilan": {
      "tarif": 32,
      "kepuasan": 61,
      "pendapatan": 204
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 200
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 419
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 25 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 75 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 227
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 11.52,
    "harga_telur": 43.54,
    "harga_bbm": 8.56,
    "harga_listrik": 3.2,
    "harga_air": 7.28,
    "harga_obat": 126.32,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": uni_emirat_arab_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 16,
    "keamanan": 32,
    "keuangan": 17,
    "lingkungan": 60
  }
};


