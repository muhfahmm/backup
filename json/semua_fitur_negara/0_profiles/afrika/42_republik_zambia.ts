export const republik_zambia_profile = {
  "name_en": "Zambia",
  "capital": "Lusaka",
  "name_id": "Republik zambia",
  "lon": 30,
  "lat": -15,
  "flag": "🇿🇲",
  "jumlah_penduduk": 19693423,
  "anggaran": 272,
  "pendapatan_nasional": "778",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { republik_zambia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/42_republik_zambia";
import { republik_zambia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/42_republik_zambia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { republik_zambia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/42_republik_zambia";

import { republik_zambia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/42_republik_zambia";
import { republik_zambia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/42_republik_zambia";
import { republik_zambia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/42_republik_zambia";
import { republik_zambia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/42_republik_zambia";
import { republik_zambia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/42_republik_zambia";
import { republik_zambia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/42_republik_zambia";
import { republik_zambia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/42_republik_zambia";
import { republik_zambia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/42_republik_zambia";
import { republik_zambia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/42_republik_zambia";
import { republik_zambia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/42_republik_zambia";
import { republik_zambia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/42_republik_zambia";
import { republik_zambia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/42_republik_zambia";
import { republik_zambia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/42_republik_zambia";
import { republik_zambia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/42_republik_zambia";
import { republik_zambia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/42_republik_zambia";
import { republik_zambia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/42_republik_zambia";
import { republik_zambia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/42_republik_zambia";
import { republik_zambia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/42_republik_zambia";
import { republik_zambia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/42_republik_zambia";
const republik_zambia_geopolitik = {
    "un_vote": 25,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
      "kekuatan_keras": 13,
      "prestise_diplomatik": 57
  }
  } as const;

export const republik_zambia: CountryData = {
  ...republik_zambia_profile,
  "sektor_listrik": republik_zambia_listrik,
  "hunian": republik_zambia_hunian,
  "infrastruktur": republik_zambia_infrastruktur,
  "sektor_ekstraksi": republik_zambia_ekstraksi,
  "sektor_manufaktur": republik_zambia_manufaktur,
  "sektor_peternakan": republik_zambia_peternakan,
  "sektor_agrikultur": republik_zambia_agrikultur,
  "sektor_perikanan": republik_zambia_perikanan,
  "sektor_olahan_pangan": republik_zambia_olahan_pangan,
  "sektor_farmasi": republik_zambia_farmasi,
  "sektor_pertahanan": republik_zambia_pertahanan,
  "armada_militer": republik_zambia_armada,
  "militer_strategis": republik_zambia_strategis,
  "armada_kepolisian": republik_zambia_kepolisian,
  "pabrik_militer": republik_zambia_pabrik,
  "intelijen": republik_zambia_intelijen,
    "pendidikan": republik_zambia_pendidikan,
  "kesehatan": republik_zambia_kesehatan,
  "hukum": republik_zambia_hukum,
  "sektor_olahraga": republik_zambia_olahraga,
  "sektor_komersial": republik_zambia_komersial,
  "sektor_hiburan": republik_zambia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 15
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 24,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 28.8,
    "harga_telur": 24.88,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 157.9,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_zambia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 38,
    "pendidikan": 14,
    "keamanan": 32,
    "keuangan": 31,
    "lingkungan": 60
  }
};


