export const kanada_profile = {
  "name_en": "Canada",
  "capital": "Ottawa",
  "name_id": "Kanada",
  "lon": -75.69,
  "lat": 45.42,
  "flag": "🇨🇦",
  "jumlah_penduduk": 41472081,
  "anggaran": 21780,
  "pendapatan_nasional": "62227",
  "religion": "Protestan",
  "ideology": "Liberalisme"
} as const;

import { kanada_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/168_kanada";
import { kanada_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/168_kanada";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { kanada_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/168_kanada";

import { kanada_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/168_kanada";
import { kanada_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/168_kanada";
import { kanada_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/168_kanada";
import { kanada_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/168_kanada";
import { kanada_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/168_kanada";
import { kanada_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/168_kanada";
import { kanada_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/168_kanada";
import { kanada_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/168_kanada";
import { kanada_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/168_kanada";
import { kanada_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/168_kanada";
import { kanada_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/168_kanada";
import { kanada_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/168_kanada";
import { kanada_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/168_kanada";
import { kanada_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/168_kanada";
import { kanada_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/168_kanada";
import { kanada_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/168_kanada";
import { kanada_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/168_kanada";
import { kanada_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/168_kanada";
import { kanada_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/168_kanada";
const kanada_geopolitik = {
    "un_vote": 160,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
      "kekuatan_keras": 18,
      "prestise_diplomatik": 57
    }
  } as const;

export const kanada: CountryData = {
  ...kanada_profile,
  "sektor_listrik": kanada_listrik,
  "hunian": kanada_hunian,
  "infrastruktur": kanada_infrastruktur,
  "sektor_ekstraksi": kanada_ekstraksi,
  "sektor_manufaktur": kanada_manufaktur,
  "sektor_peternakan": kanada_peternakan,
  "sektor_agrikultur": kanada_agrikultur,
  "sektor_perikanan": kanada_perikanan,
  "sektor_olahan_pangan": kanada_olahan_pangan,
  "sektor_farmasi": kanada_farmasi,
  "sektor_pertahanan": kanada_pertahanan,
  "armada_militer": kanada_armada,
  "militer_strategis": kanada_strategis,
  "armada_kepolisian": kanada_kepolisian,
  "pabrik_militer": kanada_pabrik,
  "intelijen": kanada_intelijen,
    "pendidikan": kanada_pendidikan,
  "kesehatan": kanada_kesehatan,
  "hukum": kanada_hukum,
  "sektor_olahraga": kanada_olahraga,
  "sektor_komersial": kanada_komersial,
  "sektor_hiburan": kanada_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 586
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 749
    },
    "penghasilan": {
      "tarif": 9,
      "kepuasan": 61,
      "pendapatan": 273
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 304
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 1479
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 109 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 327 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 193
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 82,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 20.16,
    "harga_telur": 24.88,
    "harga_bbm": 8.56,
    "harga_listrik": 1.28,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kanada_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 5,
    "pendidikan": 5,
    "keamanan": 9,
    "keuangan": 18,
    "lingkungan": 60
  }
};


