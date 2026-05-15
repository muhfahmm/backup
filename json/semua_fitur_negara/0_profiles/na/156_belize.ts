export const belize_profile = {
  "name_en": "Belize",
  "capital": "Belmopan",
  "name_id": "Belize",
  "lon": -88.75,
  "lat": 17.25,
  "flag": "🇧🇿",
  "jumlah_penduduk": 417634,
  "anggaran": 24,
  "pendapatan_nasional": "69",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { belize_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/156_belize";
import { belize_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/156_belize";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { belize_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/156_belize";

import { belize_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/156_belize";
import { belize_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/156_belize";
import { belize_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/156_belize";
import { belize_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/156_belize";
import { belize_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/156_belize";
import { belize_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/156_belize";
import { belize_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/156_belize";
import { belize_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/156_belize";
import { belize_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/156_belize";
import { belize_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/156_belize";
import { belize_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/156_belize";
import { belize_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/156_belize";
import { belize_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/156_belize";
import { belize_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/156_belize";
import { belize_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/156_belize";
import { belize_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/156_belize";
import { belize_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/156_belize";
import { belize_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/156_belize";
import { belize_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/156_belize";
const belize_geopolitik = {
    "un_vote": 15,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 5,
      "kekuatan_keras": 29,
      "prestise_diplomatik": 57
    }
  } as const;

export const belize: CountryData = {
  ...belize_profile,
  "sektor_listrik": belize_listrik,
  "hunian": belize_hunian,
  "infrastruktur": belize_infrastruktur,
  "sektor_ekstraksi": belize_ekstraksi,
  "sektor_manufaktur": belize_manufaktur,
  "sektor_peternakan": belize_peternakan,
  "sektor_agrikultur": belize_agrikultur,
  "sektor_perikanan": belize_perikanan,
  "sektor_olahan_pangan": belize_olahan_pangan,
  "sektor_farmasi": belize_farmasi,
  "sektor_pertahanan": belize_pertahanan,
  "armada_militer": belize_armada,
  "militer_strategis": belize_strategis,
  "armada_kepolisian": belize_kepolisian,
  "pabrik_militer": belize_pabrik,
  "intelijen": belize_intelijen,
    "pendidikan": belize_pendidikan,
  "kesehatan": belize_kesehatan,
  "hukum": belize_hukum,
  "sektor_olahraga": belize_olahraga,
  "sektor_komersial": belize_komersial,
  "sektor_hiburan": belize_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 26,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 3,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 24,
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
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 11.52,
    "harga_telur": 24.88,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": belize_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 23,
    "pendidikan": 29,
    "keamanan": 34,
    "keuangan": 27,
    "lingkungan": 60
  }
};


