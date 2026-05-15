export const lithuania_profile = {
  "name_en": "Lithuania",
  "capital": "Vilnius",
  "name_id": "Lithuania",
  "lon": 25.19,
  "lat": 54.41,
  "flag": "🇱🇹",
  "jumlah_penduduk": 2884359,
  "anggaran": 739,
  "pendapatan_nasional": "2111",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { lithuania_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/127_lithuania";
import { lithuania_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/127_lithuania";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { lithuania_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/127_lithuania";

import { lithuania_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/127_lithuania";
import { lithuania_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/127_lithuania";
import { lithuania_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/127_lithuania";
import { lithuania_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/127_lithuania";
import { lithuania_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/127_lithuania";
import { lithuania_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/127_lithuania";
import { lithuania_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/127_lithuania";
import { lithuania_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/127_lithuania";
import { lithuania_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/127_lithuania";
import { lithuania_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/127_lithuania";
import { lithuania_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/127_lithuania";
import { lithuania_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/127_lithuania";
import { lithuania_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/127_lithuania";
import { lithuania_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/127_lithuania";
import { lithuania_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/127_lithuania";
import { lithuania_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/127_lithuania";
import { lithuania_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/127_lithuania";
import { lithuania_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/127_lithuania";
import { lithuania_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/127_lithuania";
const lithuania_geopolitik = {
    "un_vote": 174,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 31,
      "kekuatan_keras": 33,
      "prestise_diplomatik": 57
    }
  } as const;

export const lithuania: CountryData = {
  ...lithuania_profile,
  "sektor_listrik": lithuania_listrik,
  "hunian": lithuania_hunian,
  "infrastruktur": lithuania_infrastruktur,
  "sektor_ekstraksi": lithuania_ekstraksi,
  "sektor_manufaktur": lithuania_manufaktur,
  "sektor_peternakan": lithuania_peternakan,
  "sektor_agrikultur": lithuania_agrikultur,
  "sektor_perikanan": lithuania_perikanan,
  "sektor_olahan_pangan": lithuania_olahan_pangan,
  "sektor_farmasi": lithuania_farmasi,
  "sektor_pertahanan": lithuania_pertahanan,
  "armada_militer": lithuania_armada,
  "militer_strategis": lithuania_strategis,
  "armada_kepolisian": lithuania_kepolisian,
  "pabrik_militer": lithuania_pabrik,
  "intelijen": lithuania_intelijen,
    "pendidikan": lithuania_pendidikan,
  "kesehatan": lithuania_kesehatan,
  "hukum": lithuania_hukum,
  "sektor_olahraga": lithuania_olahraga,
  "sektor_komersial": lithuania_komersial,
  "sektor_hiburan": lithuania_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 74
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 12
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 16
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 11
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": lithuania_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 18,
    "pendidikan": 9,
    "keamanan": 3,
    "keuangan": 29,
    "lingkungan": 60
  }
};


