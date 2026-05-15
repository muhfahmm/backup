export const albania_profile = {
  "name_en": "Albania",
  "capital": "Tirana",
  "name_id": "Albania",
  "lon": 19.81,
  "lat": 41.32,
  "flag": "🇦🇱",
  "jumlah_penduduk": 2791765,
  "anggaran": 214,
  "pendapatan_nasional": "611",
  "religion": "Islam",
  "ideology": "Demokrasi"
} as const;

import { albania_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/103_albania";
import { albania_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/103_albania";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { albania_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/103_albania";

import { albania_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/103_albania";
import { albania_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/103_albania";
import { albania_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/103_albania";
import { albania_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/103_albania";
import { albania_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/103_albania";
import { albania_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/103_albania";
import { albania_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/103_albania";
import { albania_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/103_albania";
import { albania_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/103_albania";
import { albania_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/103_albania";
import { albania_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/103_albania";
import { albania_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/103_albania";
import { albania_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/103_albania";
import { albania_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/103_albania";
import { albania_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/103_albania";
import { albania_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/103_albania";
import { albania_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/103_albania";
import { albania_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/103_albania";
import { albania_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/103_albania";
const albania_geopolitik = {
    "un_vote": 77,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 25,
      "kekuatan_keras": 9,
      "prestise_diplomatik": 57
    }
  } as const;

export const albania: CountryData = {
  ...albania_profile,
  "sektor_listrik": albania_listrik,
  "hunian": albania_hunian,
  "infrastruktur": albania_infrastruktur,
  "sektor_ekstraksi": albania_ekstraksi,
  "sektor_manufaktur": albania_manufaktur,
  "sektor_peternakan": albania_peternakan,
  "sektor_agrikultur": albania_agrikultur,
  "sektor_perikanan": albania_perikanan,
  "sektor_olahan_pangan": albania_olahan_pangan,
  "sektor_farmasi": albania_farmasi,
  "sektor_pertahanan": albania_pertahanan,
  "armada_militer": albania_armada,
  "militer_strategis": albania_strategis,
  "armada_kepolisian": albania_kepolisian,
  "pabrik_militer": albania_pabrik,
  "intelijen": albania_intelijen,
    "pendidikan": albania_pendidikan,
  "kesehatan": albania_kesehatan,
  "hukum": albania_hukum,
  "sektor_olahraga": albania_olahraga,
  "sektor_komersial": albania_komersial,
  "sektor_hiburan": albania_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 19
    },
    "penghasilan": {
      "tarif": 37,
      "kepuasan": 61,
      "pendapatan": 15
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": albania_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 1,
    "pendidikan": 4,
    "keamanan": 2,
    "keuangan": 33,
    "lingkungan": 60
  }
};


