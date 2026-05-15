export const argentina_profile = {
  "name_en": "Argentina",
  "capital": "Buenos Aires",
  "name_id": "Argentina",
  "lon": -58.38,
  "lat": -34.6,
  "flag": "🇦🇷",
  "jumlah_penduduk": 46387098,
  "anggaran": 6223,
  "pendapatan_nasional": "17779",
  "religion": "Katolik",
  "ideology": "Kapitalisme"
} as const;

import { argentina_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/sa/195_argentina";
import { argentina_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/sa/195_argentina";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { argentina_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/sa/195_argentina";

import { argentina_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/sa/195_argentina";
import { argentina_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/sa/195_argentina";
import { argentina_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/sa/195_argentina";
import { argentina_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/sa/195_argentina";
import { argentina_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/sa/195_argentina";
import { argentina_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/sa/195_argentina";
import { argentina_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/sa/195_argentina";
import { argentina_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/sa/195_argentina";
import { argentina_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/sa/195_argentina";
import { argentina_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/sa/195_argentina";
import { argentina_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/sa/195_argentina";
import { argentina_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/sa/195_argentina";
import { argentina_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/sa/195_argentina";
import { argentina_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/sa/195_argentina";
import { argentina_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/sa/195_argentina";
import { argentina_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/sa/195_argentina";
import { argentina_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/sa/195_argentina";
import { argentina_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/sa/195_argentina";
import { argentina_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/sa/195_argentina";
const argentina_geopolitik = {
    "un_vote": 190,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 23,
      "kekuatan_keras": 22,
      "prestise_diplomatik": 57
    }
  } as const;

export const argentina: CountryData = {
  ...argentina_profile,
  "sektor_listrik": argentina_listrik,
  "hunian": argentina_hunian,
  "infrastruktur": argentina_infrastruktur,
  "sektor_ekstraksi": argentina_ekstraksi,
  "sektor_manufaktur": argentina_manufaktur,
  "sektor_peternakan": argentina_peternakan,
  "sektor_agrikultur": argentina_agrikultur,
  "sektor_perikanan": argentina_perikanan,
  "sektor_olahan_pangan": argentina_olahan_pangan,
  "sektor_farmasi": argentina_farmasi,
  "sektor_pertahanan": argentina_pertahanan,
  "armada_militer": argentina_armada,
  "militer_strategis": argentina_strategis,
  "armada_kepolisian": argentina_kepolisian,
  "pabrik_militer": argentina_pabrik,
  "intelijen": argentina_intelijen,
    "pendidikan": argentina_pendidikan,
  "kesehatan": argentina_kesehatan,
  "hukum": argentina_hukum,
  "sektor_olahraga": argentina_olahraga,
  "sektor_komersial": argentina_komersial,
  "sektor_hiburan": argentina_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 37
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 159
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 528
    },
    "bea_cukai": {
      "tarif": 39,
      "kepuasan": 86,
      "pendapatan": 444
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 221
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 32 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 94 },
    "lainnya": {
      "tarif": 15,
      "kepuasan": 93,
      "pendapatan": 253
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 15.55,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": argentina_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 33,
    "pendidikan": 35,
    "keamanan": 24,
    "keuangan": 36,
    "lingkungan": 60
  }
};


