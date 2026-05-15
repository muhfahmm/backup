export const norwegia_profile = {
  "name_en": "Norway",
  "capital": "Oslo",
  "name_id": "Norwegia",
  "lon": 10.75,
  "lat": 59.91,
  "flag": "🇳🇴",
  "jumlah_penduduk": 5627400,
  "anggaran": 5639,
  "pendapatan_nasional": "16112",
  "religion": "Protestan",
  "ideology": "Sosialisme"
} as const;

import { norwegia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/134_norwegia";
import { norwegia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/134_norwegia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { norwegia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/134_norwegia";

import { norwegia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/134_norwegia";
import { norwegia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/134_norwegia";
import { norwegia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/134_norwegia";
import { norwegia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/134_norwegia";
import { norwegia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/134_norwegia";
import { norwegia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/134_norwegia";
import { norwegia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/134_norwegia";
import { norwegia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/134_norwegia";
import { norwegia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/134_norwegia";
import { norwegia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/134_norwegia";
import { norwegia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/134_norwegia";
import { norwegia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/134_norwegia";
import { norwegia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/134_norwegia";
import { norwegia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/134_norwegia";
import { norwegia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/134_norwegia";
import { norwegia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/134_norwegia";
import { norwegia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/134_norwegia";
import { norwegia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/134_norwegia";
import { norwegia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/134_norwegia";
const norwegia_geopolitik = {
    "un_vote": 161,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 10,
      "kekuatan_keras": 31,
      "prestise_diplomatik": 57
    }
  } as const;

export const norwegia: CountryData = {
  ...norwegia_profile,
  "sektor_listrik": norwegia_listrik,
  "hunian": norwegia_hunian,
  "infrastruktur": norwegia_infrastruktur,
  "sektor_ekstraksi": norwegia_ekstraksi,
  "sektor_manufaktur": norwegia_manufaktur,
  "sektor_peternakan": norwegia_peternakan,
  "sektor_agrikultur": norwegia_agrikultur,
  "sektor_perikanan": norwegia_perikanan,
  "sektor_olahan_pangan": norwegia_olahan_pangan,
  "sektor_farmasi": norwegia_farmasi,
  "sektor_pertahanan": norwegia_pertahanan,
  "armada_militer": norwegia_armada,
  "militer_strategis": norwegia_strategis,
  "armada_kepolisian": norwegia_kepolisian,
  "pabrik_militer": norwegia_pabrik,
  "intelijen": norwegia_intelijen,
    "pendidikan": norwegia_pendidikan,
  "kesehatan": norwegia_kesehatan,
  "hukum": norwegia_hukum,
  "sektor_olahraga": norwegia_olahraga,
  "sektor_komersial": norwegia_komersial,
  "sektor_hiburan": norwegia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 187
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 146
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 125
    },
    "bea_cukai": {
      "tarif": 19,
      "kepuasan": 86,
      "pendapatan": 158
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 45
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 29 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 85 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 13
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": norwegia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 32,
    "pendidikan": 14,
    "keamanan": 25,
    "keuangan": 21,
    "lingkungan": 60
  }
};


