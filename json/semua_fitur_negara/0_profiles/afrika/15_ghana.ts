export const ghana_profile = {
  "name_en": "Ghana",
  "capital": "Accra",
  "name_id": "Ghana",
  "lon": -2,
  "lat": 8,
  "flag": "🇬🇭",
  "jumlah_penduduk": 30832019,
  "anggaran": 739,
  "pendapatan_nasional": "2111",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { ghana_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/15_ghana";
import { ghana_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/15_ghana";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { ghana_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/15_ghana";

import { ghana_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/15_ghana";
import { ghana_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/15_ghana";
import { ghana_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/15_ghana";
import { ghana_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/15_ghana";
import { ghana_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/15_ghana";
import { ghana_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/15_ghana";
import { ghana_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/15_ghana";
import { ghana_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/15_ghana";
import { ghana_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/15_ghana";
import { ghana_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/15_ghana";
import { ghana_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/15_ghana";
import { ghana_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/15_ghana";
import { ghana_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/15_ghana";
import { ghana_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/15_ghana";
import { ghana_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/15_ghana";
import { ghana_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/15_ghana";
import { ghana_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/15_ghana";
import { ghana_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/15_ghana";
import { ghana_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/15_ghana";
const ghana_geopolitik = {
    "un_vote": 125,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 21,
      "prestise_diplomatik": 57
  }
  } as const;

export const ghana: CountryData = {
  ...ghana_profile,
  "sektor_listrik": ghana_listrik,
  "hunian": ghana_hunian,
  "infrastruktur": ghana_infrastruktur,
  "sektor_ekstraksi": ghana_ekstraksi,
  "sektor_manufaktur": ghana_manufaktur,
  "sektor_peternakan": ghana_peternakan,
  "sektor_agrikultur": ghana_agrikultur,
  "sektor_perikanan": ghana_perikanan,
  "sektor_olahan_pangan": ghana_olahan_pangan,
  "sektor_farmasi": ghana_farmasi,
  "sektor_pertahanan": ghana_pertahanan,
  "armada_militer": ghana_armada,
  "militer_strategis": ghana_strategis,
  "armada_kepolisian": ghana_kepolisian,
  "pabrik_militer": ghana_pabrik,
  "intelijen": ghana_intelijen,
    "pendidikan": ghana_pendidikan,
  "kesehatan": ghana_kesehatan,
  "hukum": ghana_hukum,
  "sektor_olahraga": ghana_olahraga,
  "sektor_komersial": ghana_komersial,
  "sektor_hiburan": ghana_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 55
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 45
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 42
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 29
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 24
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 315.8,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": ghana_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 6,
    "keamanan": 22,
    "keuangan": 17,
    "lingkungan": 60
  }
};


