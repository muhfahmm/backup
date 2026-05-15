export const senegal_profile = {
  "name_en": "Senegal",
  "capital": "Dakar",
  "name_id": "Senegal",
  "lon": -14,
  "lat": 14,
  "flag": "🇸🇳",
  "jumlah_penduduk": 19075959,
  "anggaran": 272,
  "pendapatan_nasional": "778",
  "religion": "Islam",
  "ideology": "Demokrasi"
} as const;

import { senegal_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/46_senegal";
import { senegal_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/46_senegal";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { senegal_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/46_senegal";

import { senegal_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/46_senegal";
import { senegal_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/46_senegal";
import { senegal_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/46_senegal";
import { senegal_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/46_senegal";
import { senegal_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/46_senegal";
import { senegal_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/46_senegal";
import { senegal_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/46_senegal";
import { senegal_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/46_senegal";
import { senegal_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/46_senegal";
import { senegal_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/46_senegal";
import { senegal_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/46_senegal";
import { senegal_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/46_senegal";
import { senegal_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/46_senegal";
import { senegal_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/46_senegal";
import { senegal_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/46_senegal";
import { senegal_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/46_senegal";
import { senegal_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/46_senegal";
import { senegal_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/46_senegal";
import { senegal_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/46_senegal";
const senegal_geopolitik = {
    "un_vote": 119,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 34,
      "kekuatan_keras": 5,
      "prestise_diplomatik": 57
  }
  } as const;

export const senegal: CountryData = {
  ...senegal_profile,
  "sektor_listrik": senegal_listrik,
  "hunian": senegal_hunian,
  "infrastruktur": senegal_infrastruktur,
  "sektor_ekstraksi": senegal_ekstraksi,
  "sektor_manufaktur": senegal_manufaktur,
  "sektor_peternakan": senegal_peternakan,
  "sektor_agrikultur": senegal_agrikultur,
  "sektor_perikanan": senegal_perikanan,
  "sektor_olahan_pangan": senegal_olahan_pangan,
  "sektor_farmasi": senegal_farmasi,
  "sektor_pertahanan": senegal_pertahanan,
  "armada_militer": senegal_armada,
  "militer_strategis": senegal_strategis,
  "armada_kepolisian": senegal_kepolisian,
  "pabrik_militer": senegal_pabrik,
  "intelijen": senegal_intelijen,
    "pendidikan": senegal_pendidikan,
  "kesehatan": senegal_kesehatan,
  "hukum": senegal_hukum,
  "sektor_olahraga": senegal_olahraga,
  "sektor_komersial": senegal_komersial,
  "sektor_hiburan": senegal_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 11
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 10
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 4
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 9
    },
    "lingkungan": {
      "tarif": 17,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 27,
      "kepuasan": 93,
      "pendapatan": 10
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
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 14.98,
    "harga_listrik": 2.24,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": senegal_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 31,
    "pendidikan": 35,
    "keamanan": 4,
    "keuangan": 23,
    "lingkungan": 60
  }
};


