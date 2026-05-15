export const republik_sudan_profile = {
  "name_en": "Sudan",
  "capital": "Khartoum",
  "name_id": "Republik sudan",
  "lon": 30,
  "lat": 15,
  "flag": "🇸🇩",
  "jumlah_penduduk": 51662000,
  "anggaran": 243,
  "pendapatan_nasional": "694",
  "religion": "Islam",
  "ideology": "Nasionalisme"
} as const;

import { republik_sudan_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/39_republik_sudan";
import { republik_sudan_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/39_republik_sudan";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { republik_sudan_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/39_republik_sudan";

import { republik_sudan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/39_republik_sudan";
import { republik_sudan_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/39_republik_sudan";
import { republik_sudan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/39_republik_sudan";
import { republik_sudan_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/39_republik_sudan";
import { republik_sudan_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/39_republik_sudan";
import { republik_sudan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/39_republik_sudan";
import { republik_sudan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/39_republik_sudan";
import { republik_sudan_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/39_republik_sudan";
import { republik_sudan_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/39_republik_sudan";
import { republik_sudan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/39_republik_sudan";
import { republik_sudan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/39_republik_sudan";
import { republik_sudan_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/39_republik_sudan";
import { republik_sudan_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/39_republik_sudan";
import { republik_sudan_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/39_republik_sudan";
import { republik_sudan_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/39_republik_sudan";
import { republik_sudan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/39_republik_sudan";
import { republik_sudan_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/39_republik_sudan";
import { republik_sudan_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/39_republik_sudan";
import { republik_sudan_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/39_republik_sudan";
const republik_sudan_geopolitik = {
    "un_vote": 95,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 7,
      "kekuatan_keras": 34,
      "prestise_diplomatik": 57
  }
  } as const;

export const republik_sudan: CountryData = {
  ...republik_sudan_profile,
  "sektor_listrik": republik_sudan_listrik,
  "hunian": republik_sudan_hunian,
  "infrastruktur": republik_sudan_infrastruktur,
  "sektor_ekstraksi": republik_sudan_ekstraksi,
  "sektor_manufaktur": republik_sudan_manufaktur,
  "sektor_peternakan": republik_sudan_peternakan,
  "sektor_agrikultur": republik_sudan_agrikultur,
  "sektor_perikanan": republik_sudan_perikanan,
  "sektor_olahan_pangan": republik_sudan_olahan_pangan,
  "sektor_farmasi": republik_sudan_farmasi,
  "sektor_pertahanan": republik_sudan_pertahanan,
  "armada_militer": republik_sudan_armada,
  "militer_strategis": republik_sudan_strategis,
  "armada_kepolisian": republik_sudan_kepolisian,
  "pabrik_militer": republik_sudan_pabrik,
  "intelijen": republik_sudan_intelijen,
    "pendidikan": republik_sudan_pendidikan,
  "kesehatan": republik_sudan_kesehatan,
  "hukum": republik_sudan_hukum,
  "sektor_olahraga": republik_sudan_olahraga,
  "sektor_komersial": republik_sudan_komersial,
  "sektor_hiburan": republik_sudan_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 5,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 22
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 29,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_sudan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 30,
    "pendidikan": 4,
    "keamanan": 9,
    "keuangan": 20,
    "lingkungan": 60
  }
};


