export const marshall_profile = {
  "name_en": "Marshall Islands",
  "capital": "Majuro",
  "name_id": "Marshall",
  "lon": 168,
  "lat": 9,
  "flag": "🇲🇭",
  "jumlah_penduduk": 41996,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { marshall_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/oceania/183_marshall";
import { marshall_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/oceania/183_marshall";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { marshall_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/oceania/183_marshall";

import { marshall_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/oceania/183_marshall";
import { marshall_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/oceania/183_marshall";
import { marshall_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/oceania/183_marshall";
import { marshall_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/oceania/183_marshall";
import { marshall_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/oceania/183_marshall";
import { marshall_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/oceania/183_marshall";
import { marshall_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/oceania/183_marshall";
import { marshall_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/oceania/183_marshall";
import { marshall_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/oceania/183_marshall";
import { marshall_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/oceania/183_marshall";
import { marshall_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/oceania/183_marshall";
import { marshall_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/oceania/183_marshall";
import { marshall_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/oceania/183_marshall";
import { marshall_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/oceania/183_marshall";
import { marshall_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/oceania/183_marshall";
import { marshall_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/oceania/183_marshall";
import { marshall_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/oceania/183_marshall";
import { marshall_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/oceania/183_marshall";
import { marshall_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/oceania/183_marshall";
const marshall_geopolitik = {
    "un_vote": 4,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 22,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  } as const;

export const marshall: CountryData = {
  ...marshall_profile,
  "sektor_listrik": marshall_listrik,
  "hunian": marshall_hunian,
  "infrastruktur": marshall_infrastruktur,
  "sektor_ekstraksi": marshall_ekstraksi,
  "sektor_manufaktur": marshall_manufaktur,
  "sektor_peternakan": marshall_peternakan,
  "sektor_agrikultur": marshall_agrikultur,
  "sektor_perikanan": marshall_perikanan,
  "sektor_olahan_pangan": marshall_olahan_pangan,
  "sektor_farmasi": marshall_farmasi,
  "sektor_pertahanan": marshall_pertahanan,
  "armada_militer": marshall_armada,
  "militer_strategis": marshall_strategis,
  "armada_kepolisian": marshall_kepolisian,
  "pabrik_militer": marshall_pabrik,
  "intelijen": marshall_intelijen,
    "pendidikan": marshall_pendidikan,
  "kesehatan": marshall_kesehatan,
  "hukum": marshall_hukum,
  "sektor_olahraga": marshall_olahraga,
  "sektor_komersial": marshall_komersial,
  "sektor_hiburan": marshall_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 27,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 24,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 34,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 30,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 28.8,
    "harga_telur": 62.2,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 2.6,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": marshall_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 22,
    "pendidikan": 30,
    "keamanan": 30,
    "keuangan": 18,
    "lingkungan": 60
  }
};


