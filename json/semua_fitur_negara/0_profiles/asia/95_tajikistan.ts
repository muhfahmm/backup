export const tajikistan_profile = {
  "name_en": "Tajikistan",
  "capital": "Dushanbe",
  "name_id": "Tajikistan",
  "lon": 71,
  "lat": 39,
  "flag": "🇹🇯",
  "jumlah_penduduk": 9806453,
  "anggaran": 117,
  "pendapatan_nasional": "333",
  "religion": "Islam",
  "ideology": "Nasionalisme"
} as const;

import { tajikistan_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/95_tajikistan";
import { tajikistan_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/95_tajikistan";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { tajikistan_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/95_tajikistan";

import { tajikistan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/95_tajikistan";
import { tajikistan_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/95_tajikistan";
import { tajikistan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/95_tajikistan";
import { tajikistan_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/95_tajikistan";
import { tajikistan_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/95_tajikistan";
import { tajikistan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/95_tajikistan";
import { tajikistan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/95_tajikistan";
import { tajikistan_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/95_tajikistan";
import { tajikistan_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/95_tajikistan";
import { tajikistan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/95_tajikistan";
import { tajikistan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/95_tajikistan";
import { tajikistan_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/95_tajikistan";
import { tajikistan_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/95_tajikistan";
import { tajikistan_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/95_tajikistan";
import { tajikistan_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/95_tajikistan";
import { tajikistan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/95_tajikistan";
import { tajikistan_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/95_tajikistan";
import { tajikistan_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/95_tajikistan";
import { tajikistan_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/95_tajikistan";
const tajikistan_geopolitik = {
    "un_vote": 177,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 33,
      "kekuatan_keras": 36,
      "prestise_diplomatik": 57
    }
  } as const;

export const tajikistan: CountryData = {
  ...tajikistan_profile,
  "sektor_listrik": tajikistan_listrik,
  "hunian": tajikistan_hunian,
  "infrastruktur": tajikistan_infrastruktur,
  "sektor_ekstraksi": tajikistan_ekstraksi,
  "sektor_manufaktur": tajikistan_manufaktur,
  "sektor_peternakan": tajikistan_peternakan,
  "sektor_agrikultur": tajikistan_agrikultur,
  "sektor_perikanan": tajikistan_perikanan,
  "sektor_olahan_pangan": tajikistan_olahan_pangan,
  "sektor_farmasi": tajikistan_farmasi,
  "sektor_pertahanan": tajikistan_pertahanan,
  "armada_militer": tajikistan_armada,
  "militer_strategis": tajikistan_strategis,
  "armada_kepolisian": tajikistan_kepolisian,
  "pabrik_militer": tajikistan_pabrik,
  "intelijen": tajikistan_intelijen,
    "pendidikan": tajikistan_pendidikan,
  "kesehatan": tajikistan_kesehatan,
  "hukum": tajikistan_hukum,
  "sektor_olahraga": tajikistan_olahraga,
  "sektor_komersial": tajikistan_komersial,
  "sektor_hiburan": tajikistan_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 7,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 11
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 33,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": tajikistan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 8,
    "keamanan": 12,
    "keuangan": 29,
    "lingkungan": 60
  }
};


