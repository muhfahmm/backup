export const botswana_profile = {
  "name_en": "Botswana",
  "capital": "Gaborone",
  "name_id": "Botswana",
  "lon": 24,
  "lat": -22,
  "flag": "🇧🇼",
  "jumlah_penduduk": 2675063,
  "anggaran": 194,
  "pendapatan_nasional": "556",
  "religion": "Protestan",
  "ideology": "Kapitalisme"
} as const;

import { botswana_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/5_botswana";
import { botswana_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/5_botswana";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { botswana_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/5_botswana";

import { botswana_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/5_botswana";
import { botswana_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/5_botswana";
import { botswana_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/5_botswana";
import { botswana_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/5_botswana";
import { botswana_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/5_botswana";
import { botswana_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/5_botswana";
import { botswana_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/5_botswana";
import { botswana_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/5_botswana";
import { botswana_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/5_botswana";
import { botswana_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/5_botswana";
import { botswana_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/5_botswana";
import { botswana_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/5_botswana";
import { botswana_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/5_botswana";
import { botswana_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/5_botswana";
import { botswana_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/5_botswana";
import { botswana_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/5_botswana";
import { botswana_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/5_botswana";
import { botswana_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/5_botswana";
import { botswana_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/5_botswana";
const botswana_geopolitik = {
    "un_vote": 48,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 13,
      "kekuatan_keras": 15,
      "prestise_diplomatik": 57
  }
  } as const;

export const botswana: CountryData = {
  ...botswana_profile,
  "sektor_listrik": botswana_listrik,
  "hunian": botswana_hunian,
  "infrastruktur": botswana_infrastruktur,
  "sektor_ekstraksi": botswana_ekstraksi,
  "sektor_manufaktur": botswana_manufaktur,
  "sektor_peternakan": botswana_peternakan,
  "sektor_agrikultur": botswana_agrikultur,
  "sektor_perikanan": botswana_perikanan,
  "sektor_olahan_pangan": botswana_olahan_pangan,
  "sektor_farmasi": botswana_farmasi,
  "sektor_pertahanan": botswana_pertahanan,
  "armada_militer": botswana_armada,
  "militer_strategis": botswana_strategis,
  "armada_kepolisian": botswana_kepolisian,
  "pabrik_militer": botswana_pabrik,
  "intelijen": botswana_intelijen,
    "pendidikan": botswana_pendidikan,
  "kesehatan": botswana_kesehatan,
  "hukum": botswana_hukum,
  "sektor_olahraga": botswana_olahraga,
  "sektor_komersial": botswana_komersial,
  "sektor_hiburan": botswana_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 23,
      "kepuasan": 86,
      "pendapatan": 9
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 24.88,
    "harga_bbm": 21.4,
    "harga_listrik": 1.28,
    "harga_air": 7.28,
    "harga_obat": 221.06,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": botswana_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 16,
    "keamanan": 9,
    "keuangan": 18,
    "lingkungan": 60
  }
};


