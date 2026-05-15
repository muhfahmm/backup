export const siprus_profile = {
  "name_en": "Cyprus",
  "capital": "Nicosia",
  "name_id": "Siprus",
  "lon": 33,
  "lat": 35,
  "flag": "🇨🇾",
  "jumlah_penduduk": 983000,
  "anggaran": 292,
  "pendapatan_nasional": "833",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi"
} as const;

import { siprus_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/142_siprus";
import { siprus_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/142_siprus";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { siprus_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/142_siprus";

import { siprus_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/142_siprus";
import { siprus_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/142_siprus";
import { siprus_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/142_siprus";
import { siprus_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/142_siprus";
import { siprus_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/142_siprus";
import { siprus_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/142_siprus";
import { siprus_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/142_siprus";
import { siprus_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/142_siprus";
import { siprus_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/142_siprus";
import { siprus_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/142_siprus";
import { siprus_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/142_siprus";
import { siprus_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/142_siprus";
import { siprus_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/142_siprus";
import { siprus_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/142_siprus";
import { siprus_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/142_siprus";
import { siprus_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/142_siprus";
import { siprus_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/142_siprus";
import { siprus_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/142_siprus";
import { siprus_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/142_siprus";
const siprus_geopolitik = {
    "un_vote": 131,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 15,
      "prestise_diplomatik": 57
    }
  } as const;

export const siprus: CountryData = {
  ...siprus_profile,
  "sektor_listrik": siprus_listrik,
  "hunian": siprus_hunian,
  "infrastruktur": siprus_infrastruktur,
  "sektor_ekstraksi": siprus_ekstraksi,
  "sektor_manufaktur": siprus_manufaktur,
  "sektor_peternakan": siprus_peternakan,
  "sektor_agrikultur": siprus_agrikultur,
  "sektor_perikanan": siprus_perikanan,
  "sektor_olahan_pangan": siprus_olahan_pangan,
  "sektor_farmasi": siprus_farmasi,
  "sektor_pertahanan": siprus_pertahanan,
  "armada_militer": siprus_armada,
  "militer_strategis": siprus_strategis,
  "armada_kepolisian": siprus_kepolisian,
  "pabrik_militer": siprus_pabrik,
  "intelijen": siprus_intelijen,
    "pendidikan": siprus_pendidikan,
  "kesehatan": siprus_kesehatan,
  "hukum": siprus_hukum,
  "sektor_olahraga": siprus_olahraga,
  "sektor_komersial": siprus_komersial,
  "sektor_hiburan": siprus_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 28,
      "kepuasan": 67,
      "pendapatan": 21
    },
    "korporasi": {
      "tarif": 39,
      "kepuasan": 52,
      "pendapatan": 29
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 34,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 7.2,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": siprus_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 24,
    "pendidikan": 19,
    "keamanan": 4,
    "keuangan": 13,
    "lingkungan": 60
  }
};


