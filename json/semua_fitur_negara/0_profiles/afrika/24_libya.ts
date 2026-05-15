export const libya_profile = {
  "name_en": "Libya",
  "capital": "Tripoli",
  "name_id": "Libya",
  "lon": 13.1,
  "lat": 32.53,
  "flag": "🇱🇾",
  "jumlah_penduduk": 7381023,
  "anggaran": 408,
  "pendapatan_nasional": "1167",
  "religion": "Islam",
  "ideology": "Nasionalisme"
} as const;

import { libya_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/24_libya";
import { libya_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/24_libya";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { libya_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/24_libya";

import { libya_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/24_libya";
import { libya_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/24_libya";
import { libya_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/24_libya";
import { libya_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/24_libya";
import { libya_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/24_libya";
import { libya_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/24_libya";
import { libya_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/24_libya";
import { libya_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/24_libya";
import { libya_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/24_libya";
import { libya_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/24_libya";
import { libya_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/24_libya";
import { libya_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/24_libya";
import { libya_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/24_libya";
import { libya_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/24_libya";
import { libya_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/24_libya";
import { libya_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/24_libya";
import { libya_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/24_libya";
import { libya_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/24_libya";
import { libya_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/24_libya";
const libya_geopolitik = {
    "un_vote": 108,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 23,
      "prestise_diplomatik": 57
  }
  } as const;

export const libya: CountryData = {
  ...libya_profile,
  "sektor_listrik": libya_listrik,
  "hunian": libya_hunian,
  "infrastruktur": libya_infrastruktur,
  "sektor_ekstraksi": libya_ekstraksi,
  "sektor_manufaktur": libya_manufaktur,
  "sektor_peternakan": libya_peternakan,
  "sektor_agrikultur": libya_agrikultur,
  "sektor_perikanan": libya_perikanan,
  "sektor_olahan_pangan": libya_olahan_pangan,
  "sektor_farmasi": libya_farmasi,
  "sektor_pertahanan": libya_pertahanan,
  "armada_militer": libya_armada,
  "militer_strategis": libya_strategis,
  "armada_kepolisian": libya_kepolisian,
  "pabrik_militer": libya_pabrik,
  "intelijen": libya_intelijen,
    "pendidikan": libya_pendidikan,
  "kesehatan": libya_kesehatan,
  "hukum": libya_hukum,
  "sektor_olahraga": libya_olahraga,
  "sektor_komersial": libya_komersial,
  "sektor_hiburan": libya_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 18,
      "kepuasan": 61,
      "pendapatan": 16
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 16
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 24
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 43
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 15.55,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 4.16,
    "harga_obat": 221.06,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": libya_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 6,
    "keamanan": 38,
    "keuangan": 22,
    "lingkungan": 60
  }
};


