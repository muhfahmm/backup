export const jerman_profile = {
  "name_en": "Germany",
  "capital": "Berlin",
  "name_id": "Jerman",
  "lon": 13.4,
  "lat": 52.52,
  "flag": "🇩🇪",
  "jumlah_penduduk": 83497147,
  "anggaran": 44629,
  "pendapatan_nasional": "127510",
  "religion": "Protestan",
  "ideology": "Kapitalisme"
} as const;

import { jerman_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/121_jerman";
import { jerman_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/121_jerman";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { jerman_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/121_jerman";

import { jerman_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/121_jerman";
import { jerman_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/121_jerman";
import { jerman_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/121_jerman";
import { jerman_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/121_jerman";
import { jerman_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/121_jerman";
import { jerman_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/121_jerman";
import { jerman_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/121_jerman";
import { jerman_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/121_jerman";
import { jerman_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/121_jerman";
import { jerman_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/121_jerman";
import { jerman_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/121_jerman";
import { jerman_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/121_jerman";
import { jerman_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/121_jerman";
import { jerman_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/121_jerman";
import { jerman_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/121_jerman";
import { jerman_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/121_jerman";
import { jerman_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/121_jerman";
import { jerman_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/121_jerman";
import { jerman_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/121_jerman";
const jerman_geopolitik = {
    "un_vote": 197,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 30,
      "kekuatan_keras": 18,
      "prestise_diplomatik": 57
    }
  } as const;

export const jerman: CountryData = {
  ...jerman_profile,
  "sektor_listrik": jerman_listrik,
  "hunian": jerman_hunian,
  "infrastruktur": jerman_infrastruktur,
  "sektor_ekstraksi": jerman_ekstraksi,
  "sektor_manufaktur": jerman_manufaktur,
  "sektor_peternakan": jerman_peternakan,
  "sektor_agrikultur": jerman_agrikultur,
  "sektor_perikanan": jerman_perikanan,
  "sektor_olahan_pangan": jerman_olahan_pangan,
  "sektor_farmasi": jerman_farmasi,
  "sektor_pertahanan": jerman_pertahanan,
  "armada_militer": jerman_armada,
  "militer_strategis": jerman_strategis,
  "armada_kepolisian": jerman_kepolisian,
  "pabrik_militer": jerman_pabrik,
  "intelijen": jerman_intelijen,
    "pendidikan": jerman_pendidikan,
  "kesehatan": jerman_kesehatan,
  "hukum": jerman_hukum,
  "sektor_olahraga": jerman_olahraga,
  "sektor_komersial": jerman_komersial,
  "sektor_hiburan": jerman_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 1299
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 283
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 1963
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 775
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 1581
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 224 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 670 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 931
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": jerman_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 30,
    "pendidikan": 35,
    "keamanan": 12,
    "keuangan": 17,
    "lingkungan": 60
  }
};


