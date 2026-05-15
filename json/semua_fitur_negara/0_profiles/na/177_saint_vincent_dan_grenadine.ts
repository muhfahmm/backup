export const saint_vincent_dan_grenadine_profile = {
  "name_en": "Saint Vincent and the Grenadines",
  "capital": "Kingstown",
  "name_id": "Saint vincent dan grenadine",
  "lon": -61.2,
  "lat": 13.25,
  "flag": "🇻🇨",
  "jumlah_penduduk": 100616,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { saint_vincent_dan_grenadine_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/177_saint_vincent_dan_grenadine";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { saint_vincent_dan_grenadine_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/177_saint_vincent_dan_grenadine";

import { saint_vincent_dan_grenadine_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/177_saint_vincent_dan_grenadine";
const saint_vincent_dan_grenadine_geopolitik = {
    "un_vote": 110,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 23,
      "kekuatan_keras": 39,
      "prestise_diplomatik": 57
    }
  } as const;

export const saint_vincent_dan_grenadine: CountryData = {
  ...saint_vincent_dan_grenadine_profile,
  "sektor_listrik": saint_vincent_dan_grenadine_listrik,
  "hunian": saint_vincent_dan_grenadine_hunian,
  "infrastruktur": saint_vincent_dan_grenadine_infrastruktur,
  "sektor_ekstraksi": saint_vincent_dan_grenadine_ekstraksi,
  "sektor_manufaktur": saint_vincent_dan_grenadine_manufaktur,
  "sektor_peternakan": saint_vincent_dan_grenadine_peternakan,
  "sektor_agrikultur": saint_vincent_dan_grenadine_agrikultur,
  "sektor_perikanan": saint_vincent_dan_grenadine_perikanan,
  "sektor_olahan_pangan": saint_vincent_dan_grenadine_olahan_pangan,
  "sektor_farmasi": saint_vincent_dan_grenadine_farmasi,
  "sektor_pertahanan": saint_vincent_dan_grenadine_pertahanan,
  "armada_militer": saint_vincent_dan_grenadine_armada,
  "militer_strategis": saint_vincent_dan_grenadine_strategis,
  "armada_kepolisian": saint_vincent_dan_grenadine_kepolisian,
  "pabrik_militer": saint_vincent_dan_grenadine_pabrik,
  "intelijen": saint_vincent_dan_grenadine_intelijen,
    "pendidikan": saint_vincent_dan_grenadine_pendidikan,
  "kesehatan": saint_vincent_dan_grenadine_kesehatan,
  "hukum": saint_vincent_dan_grenadine_hukum,
  "sektor_olahraga": saint_vincent_dan_grenadine_olahraga,
  "sektor_komersial": saint_vincent_dan_grenadine_komersial,
  "sektor_hiburan": saint_vincent_dan_grenadine_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 36,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 37,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 2,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 4,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 78.95,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": saint_vincent_dan_grenadine_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 22,
    "pendidikan": 23,
    "keamanan": 31,
    "keuangan": 3,
    "lingkungan": 60
  }
};


