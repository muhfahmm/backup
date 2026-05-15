export const belgia_profile = {
  "name_en": "Belgium",
  "capital": "Brussels",
  "name_id": "Belgia",
  "lon": 4.35,
  "lat": 50.85,
  "flag": "🇧🇪",
  "jumlah_penduduk": 11930567,
  "anggaran": 6077,
  "pendapatan_nasional": "17362",
  "religion": "Katolik",
  "ideology": "Sosialisme"
} as const;

import { belgia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/108_belgia";
import { belgia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/108_belgia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { belgia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/108_belgia";

import { belgia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/108_belgia";
import { belgia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/108_belgia";
import { belgia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/108_belgia";
import { belgia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/108_belgia";
import { belgia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/108_belgia";
import { belgia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/108_belgia";
import { belgia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/108_belgia";
import { belgia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/108_belgia";
import { belgia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/108_belgia";
import { belgia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/108_belgia";
import { belgia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/108_belgia";
import { belgia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/108_belgia";
import { belgia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/108_belgia";
import { belgia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/108_belgia";
import { belgia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/108_belgia";
import { belgia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/108_belgia";
import { belgia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/108_belgia";
import { belgia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/108_belgia";
import { belgia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/108_belgia";
const belgia_geopolitik = {
    "un_vote": 189,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 39,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  } as const;

export const belgia: CountryData = {
  ...belgia_profile,
  "sektor_listrik": belgia_listrik,
  "hunian": belgia_hunian,
  "infrastruktur": belgia_infrastruktur,
  "sektor_ekstraksi": belgia_ekstraksi,
  "sektor_manufaktur": belgia_manufaktur,
  "sektor_peternakan": belgia_peternakan,
  "sektor_agrikultur": belgia_agrikultur,
  "sektor_perikanan": belgia_perikanan,
  "sektor_olahan_pangan": belgia_olahan_pangan,
  "sektor_farmasi": belgia_farmasi,
  "sektor_pertahanan": belgia_pertahanan,
  "armada_militer": belgia_armada,
  "militer_strategis": belgia_strategis,
  "armada_kepolisian": belgia_kepolisian,
  "pabrik_militer": belgia_pabrik,
  "intelijen": belgia_intelijen,
    "pendidikan": belgia_pendidikan,
  "kesehatan": belgia_kesehatan,
  "hukum": belgia_hukum,
  "sektor_olahraga": belgia_olahraga,
  "sektor_komersial": belgia_komersial,
  "sektor_hiburan": belgia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 101
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 194
    },
    "penghasilan": {
      "tarif": 8,
      "kepuasan": 61,
      "pendapatan": 83
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 555
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 71
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 31 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 92 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 146
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": belgia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 26,
    "keamanan": 34,
    "keuangan": 20,
    "lingkungan": 60
  }
};


