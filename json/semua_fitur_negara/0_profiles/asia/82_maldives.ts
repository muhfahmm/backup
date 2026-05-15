export const maldives_profile = {
  "name_en": "Maldives",
  "capital": "Malé",
  "name_id": "Maldives",
  "lon": 73.3,
  "lat": 4.1,
  "flag": "🇲🇻",
  "jumlah_penduduk": 527799,
  "anggaran": 63,
  "pendapatan_nasional": "181",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { maldives_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/82_maldives";
import { maldives_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/82_maldives";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { maldives_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/82_maldives";

import { maldives_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/82_maldives";
import { maldives_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/82_maldives";
import { maldives_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/82_maldives";
import { maldives_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/82_maldives";
import { maldives_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/82_maldives";
import { maldives_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/82_maldives";
import { maldives_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/82_maldives";
import { maldives_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/82_maldives";
import { maldives_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/82_maldives";
import { maldives_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/82_maldives";
import { maldives_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/82_maldives";
import { maldives_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/82_maldives";
import { maldives_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/82_maldives";
import { maldives_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/82_maldives";
import { maldives_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/82_maldives";
import { maldives_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/82_maldives";
import { maldives_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/82_maldives";
import { maldives_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/82_maldives";
import { maldives_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/82_maldives";
const maldives_geopolitik = {
    "un_vote": 145,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 27,
      "prestise_diplomatik": 57
    }
  } as const;

export const maldives: CountryData = {
  ...maldives_profile,
  "sektor_listrik": maldives_listrik,
  "hunian": maldives_hunian,
  "infrastruktur": maldives_infrastruktur,
  "sektor_ekstraksi": maldives_ekstraksi,
  "sektor_manufaktur": maldives_manufaktur,
  "sektor_peternakan": maldives_peternakan,
  "sektor_agrikultur": maldives_agrikultur,
  "sektor_perikanan": maldives_perikanan,
  "sektor_olahan_pangan": maldives_olahan_pangan,
  "sektor_farmasi": maldives_farmasi,
  "sektor_pertahanan": maldives_pertahanan,
  "armada_militer": maldives_armada,
  "militer_strategis": maldives_strategis,
  "armada_kepolisian": maldives_kepolisian,
  "pabrik_militer": maldives_pabrik,
  "intelijen": maldives_intelijen,
    "pendidikan": maldives_pendidikan,
  "kesehatan": maldives_kesehatan,
  "hukum": maldives_hukum,
  "sektor_olahraga": maldives_olahraga,
  "sektor_komersial": maldives_komersial,
  "sektor_hiburan": maldives_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 2,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 3.2,
    "harga_air": 2.6,
    "harga_obat": 78.95,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": maldives_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 4,
    "keamanan": 34,
    "keuangan": 14,
    "lingkungan": 60
  }
};


