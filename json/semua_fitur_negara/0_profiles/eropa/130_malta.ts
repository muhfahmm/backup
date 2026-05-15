export const malta_profile = {
  "name_en": "Malta",
  "capital": "Valletta",
  "name_id": "Malta",
  "lon": 14.3,
  "lat": 35.53,
  "flag": "🇲🇹",
  "jumlah_penduduk": 574250,
  "anggaran": 194,
  "pendapatan_nasional": "556",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { malta_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/130_malta";
import { malta_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/130_malta";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { malta_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/130_malta";

import { malta_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/130_malta";
import { malta_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/130_malta";
import { malta_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/130_malta";
import { malta_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/130_malta";
import { malta_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/130_malta";
import { malta_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/130_malta";
import { malta_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/130_malta";
import { malta_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/130_malta";
import { malta_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/130_malta";
import { malta_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/130_malta";
import { malta_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/130_malta";
import { malta_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/130_malta";
import { malta_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/130_malta";
import { malta_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/130_malta";
import { malta_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/130_malta";
import { malta_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/130_malta";
import { malta_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/130_malta";
import { malta_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/130_malta";
import { malta_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/130_malta";
const malta_geopolitik = {
    "un_vote": 121,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 39,
      "prestise_diplomatik": 57
    }
  } as const;

export const malta: CountryData = {
  ...malta_profile,
  "sektor_listrik": malta_listrik,
  "hunian": malta_hunian,
  "infrastruktur": malta_infrastruktur,
  "sektor_ekstraksi": malta_ekstraksi,
  "sektor_manufaktur": malta_manufaktur,
  "sektor_peternakan": malta_peternakan,
  "sektor_agrikultur": malta_agrikultur,
  "sektor_perikanan": malta_perikanan,
  "sektor_olahan_pangan": malta_olahan_pangan,
  "sektor_farmasi": malta_farmasi,
  "sektor_pertahanan": malta_pertahanan,
  "armada_militer": malta_armada,
  "militer_strategis": malta_strategis,
  "armada_kepolisian": malta_kepolisian,
  "pabrik_militer": malta_pabrik,
  "intelijen": malta_intelijen,
    "pendidikan": malta_pendidikan,
  "kesehatan": malta_kesehatan,
  "hukum": malta_hukum,
  "sektor_olahraga": malta_olahraga,
  "sektor_komersial": malta_komersial,
  "sektor_hiburan": malta_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 32,
      "kepuasan": 67,
      "pendapatan": 14
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 21,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 12
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 15.55,
    "harga_bbm": 8.56,
    "harga_listrik": 1.28,
    "harga_air": 4.16,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": malta_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 17,
    "pendidikan": 34,
    "keamanan": 16,
    "keuangan": 11,
    "lingkungan": 60
  }
};


