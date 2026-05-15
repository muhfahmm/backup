export const ceko_profile = {
  "name_en": "Czechia",
  "capital": "Prague",
  "name_id": "Ceko",
  "lon": 15.5,
  "lat": 49.75,
  "flag": "🇨🇿",
  "jumlah_penduduk": "10M",
  "anggaran": 3209,
  "pendapatan_nasional": "9167",
  "religion": "Ateisme",
  "ideology": "Demokrasi"
} as const;

import { ceko_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/111_ceko";
import { ceko_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/111_ceko";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { ceko_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/111_ceko";

import { ceko_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/111_ceko";
import { ceko_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/111_ceko";
import { ceko_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/111_ceko";
import { ceko_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/111_ceko";
import { ceko_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/111_ceko";
import { ceko_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/111_ceko";
import { ceko_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/111_ceko";
import { ceko_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/111_ceko";
import { ceko_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/111_ceko";
import { ceko_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/111_ceko";
import { ceko_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/111_ceko";
import { ceko_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/111_ceko";
import { ceko_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/111_ceko";
import { ceko_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/111_ceko";
import { ceko_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/111_ceko";
import { ceko_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/111_ceko";
import { ceko_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/111_ceko";
import { ceko_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/111_ceko";
import { ceko_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/111_ceko";
const ceko_geopolitik = {
    "un_vote": 26,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 26,
      "prestise_diplomatik": 57
    }
  } as const;

export const ceko: CountryData = {
  ...ceko_profile,
  "sektor_listrik": ceko_listrik,
  "hunian": ceko_hunian,
  "infrastruktur": ceko_infrastruktur,
  "sektor_ekstraksi": ceko_ekstraksi,
  "sektor_manufaktur": ceko_manufaktur,
  "sektor_peternakan": ceko_peternakan,
  "sektor_agrikultur": ceko_agrikultur,
  "sektor_perikanan": ceko_perikanan,
  "sektor_olahan_pangan": ceko_olahan_pangan,
  "sektor_farmasi": ceko_farmasi,
  "sektor_pertahanan": ceko_pertahanan,
  "armada_militer": ceko_armada,
  "militer_strategis": ceko_strategis,
  "armada_kepolisian": ceko_kepolisian,
  "pabrik_militer": ceko_pabrik,
  "intelijen": ceko_intelijen,
    "pendidikan": ceko_pendidikan,
  "kesehatan": ceko_kesehatan,
  "hukum": ceko_hukum,
  "sektor_olahraga": ceko_olahraga,
  "sektor_komersial": ceko_komersial,
  "sektor_hiburan": ceko_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 66
    },
    "korporasi": {
      "tarif": 22,
      "kepuasan": 52,
      "pendapatan": 171
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 98
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 43
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 72
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 17 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 49 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 131
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 28.8,
    "harga_telur": 43.54,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 221.06,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": ceko_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 15,
    "pendidikan": 8,
    "keamanan": 39,
    "keuangan": 23,
    "lingkungan": 60
  }
};


