export const uruguay_profile = {
  "name_en": "Uruguay",
  "capital": "Montevideo",
  "name_id": "Uruguay",
  "lon": -56,
  "lat": -33,
  "flag": "🇺🇾",
  "jumlah_penduduk": 3485931,
  "anggaran": 700,
  "pendapatan_nasional": "2000",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { uruguay_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/sa/206_uruguay";
import { uruguay_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/sa/206_uruguay";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { uruguay_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/sa/206_uruguay";

import { uruguay_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/sa/206_uruguay";
import { uruguay_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/sa/206_uruguay";
import { uruguay_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/sa/206_uruguay";
import { uruguay_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/sa/206_uruguay";
import { uruguay_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/sa/206_uruguay";
import { uruguay_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/sa/206_uruguay";
import { uruguay_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/sa/206_uruguay";
import { uruguay_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/sa/206_uruguay";
import { uruguay_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/sa/206_uruguay";
import { uruguay_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/sa/206_uruguay";
import { uruguay_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/sa/206_uruguay";
import { uruguay_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/sa/206_uruguay";
import { uruguay_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/sa/206_uruguay";
import { uruguay_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/sa/206_uruguay";
import { uruguay_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/sa/206_uruguay";
import { uruguay_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/sa/206_uruguay";
import { uruguay_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/sa/206_uruguay";
import { uruguay_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/sa/206_uruguay";
import { uruguay_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/sa/206_uruguay";
const uruguay_geopolitik = {
    "un_vote": 99,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 8,
      "kekuatan_keras": 29,
      "prestise_diplomatik": 57
    }
  } as const;

export const uruguay: CountryData = {
  ...uruguay_profile,
  "sektor_listrik": uruguay_listrik,
  "hunian": uruguay_hunian,
  "infrastruktur": uruguay_infrastruktur,
  "sektor_ekstraksi": uruguay_ekstraksi,
  "sektor_manufaktur": uruguay_manufaktur,
  "sektor_peternakan": uruguay_peternakan,
  "sektor_agrikultur": uruguay_agrikultur,
  "sektor_perikanan": uruguay_perikanan,
  "sektor_olahan_pangan": uruguay_olahan_pangan,
  "sektor_farmasi": uruguay_farmasi,
  "sektor_pertahanan": uruguay_pertahanan,
  "armada_militer": uruguay_armada,
  "militer_strategis": uruguay_strategis,
  "armada_kepolisian": uruguay_kepolisian,
  "pabrik_militer": uruguay_pabrik,
  "intelijen": uruguay_intelijen,
    "pendidikan": uruguay_pendidikan,
  "kesehatan": uruguay_kesehatan,
  "hukum": uruguay_hukum,
  "sektor_olahraga": uruguay_olahraga,
  "sektor_komersial": uruguay_komersial,
  "sektor_hiburan": uruguay_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 16
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 23,
      "kepuasan": 61,
      "pendapatan": 37
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 22
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 66
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 20
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 14.4,
    "harga_telur": 62.2,
    "harga_bbm": 21.4,
    "harga_listrik": 3.2,
    "harga_air": 4.16,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": uruguay_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 6,
    "pendidikan": 37,
    "keamanan": 1,
    "keuangan": 2,
    "lingkungan": 60
  }
};


