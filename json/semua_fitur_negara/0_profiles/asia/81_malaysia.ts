export const malaysia_profile = {
  "name_en": "Malaysia",
  "capital": "Kuala Lumpur",
  "name_id": "Malaysia",
  "lon": 101.68,
  "lat": 3.13,
  "flag": "🇲🇾",
  "jumlah_penduduk": 32776194,
  "anggaran": 3889,
  "pendapatan_nasional": "11112",
  "religion": "Islam",
  "ideology": "Demokrasi"
} as const;

import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { malaysia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/81_malaysia";

import { malaysia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/81_malaysia";
import { malaysia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/81_malaysia";
import { malaysia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/81_malaysia";
import { malaysia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/81_malaysia";
import { malaysia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/81_malaysia";
import { malaysia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/81_malaysia";
import { malaysia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/81_malaysia";
import { malaysia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/81_malaysia";
import { malaysia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/81_malaysia";
import { malaysia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/81_malaysia";
import { malaysia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/81_malaysia";
import { malaysia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/81_malaysia";
import { malaysia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/81_malaysia";
import { malaysia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/81_malaysia";
import { malaysia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/81_malaysia";
import { malaysia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/81_malaysia";
import { malaysia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/81_malaysia";
import { malaysia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/81_malaysia";
import { malaysia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/81_malaysia";
import { malaysia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/81_malaysia";
import { malaysia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/81_malaysia";
const malaysia_geopolitik = {
    "un_vote": 141,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 6,
      "kekuatan_keras": 27,
      "prestise_diplomatik": 57
    }
  } as const;

export const malaysia: CountryData = {
  ...malaysia_profile,
  "sektor_listrik": malaysia_listrik,
  "infrastruktur": malaysia_infrastruktur,
  "sektor_ekstraksi": malaysia_ekstraksi,
  "sektor_manufaktur": malaysia_manufaktur,
  "sektor_peternakan": malaysia_peternakan,
  "sektor_agrikultur": malaysia_agrikultur,
  "sektor_perikanan": malaysia_perikanan,
  "sektor_olahan_pangan": malaysia_olahan_pangan,
  "sektor_farmasi": malaysia_farmasi,
  "sektor_pertahanan": malaysia_pertahanan,
  "armada_militer": malaysia_armada,
  "militer_strategis": malaysia_strategis,
  "armada_kepolisian": malaysia_kepolisian,
  "pabrik_militer": malaysia_pabrik,
  "intelijen": malaysia_intelijen,
    "pendidikan": malaysia_pendidikan,
  "kesehatan": malaysia_kesehatan,
  "hukum": malaysia_hukum,
  "sektor_olahraga": malaysia_olahraga,
  "sektor_komersial": malaysia_komersial,
  "sektor_hiburan": malaysia_hiburan,
  "hunian": malaysia_hunian,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 170
    },
    "korporasi": {
      "tarif": 26,
      "kepuasan": 52,
      "pendapatan": 139
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 259
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 82
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 80
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 20 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 59 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 167
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 14.4,
    "harga_telur": 15.55,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": malaysia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 2,
    "pendidikan": 39,
    "keamanan": 5,
    "keuangan": 39,
    "lingkungan": 60
  }
};


