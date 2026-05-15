export const nauru_profile = {
  "name_en": "Nauru",
  "capital": "Yaren",
  "name_id": "Nauru",
  "lon": 166.91666666,
  "lat": -0.53333333,
  "flag": "🇳🇷",
  "jumlah_penduduk": 11680,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { nauru_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/oceania/185_nauru";
import { nauru_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/oceania/185_nauru";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { nauru_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/oceania/185_nauru";

import { nauru_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/oceania/185_nauru";
import { nauru_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/oceania/185_nauru";
import { nauru_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/oceania/185_nauru";
import { nauru_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/oceania/185_nauru";
import { nauru_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/oceania/185_nauru";
import { nauru_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/oceania/185_nauru";
import { nauru_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/oceania/185_nauru";
import { nauru_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/oceania/185_nauru";
import { nauru_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/oceania/185_nauru";
import { nauru_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/oceania/185_nauru";
import { nauru_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/oceania/185_nauru";
import { nauru_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/oceania/185_nauru";
import { nauru_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/oceania/185_nauru";
import { nauru_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/oceania/185_nauru";
import { nauru_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/oceania/185_nauru";
import { nauru_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/oceania/185_nauru";
import { nauru_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/oceania/185_nauru";
import { nauru_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/oceania/185_nauru";
import { nauru_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/oceania/185_nauru";
const nauru_geopolitik = {
    "un_vote": 52,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 23,
      "kekuatan_keras": 36,
      "prestise_diplomatik": 57
    }
  } as const;

export const nauru: CountryData = {
  ...nauru_profile,
  "sektor_listrik": nauru_listrik,
  "hunian": nauru_hunian,
  "infrastruktur": nauru_infrastruktur,
  "sektor_ekstraksi": nauru_ekstraksi,
  "sektor_manufaktur": nauru_manufaktur,
  "sektor_peternakan": nauru_peternakan,
  "sektor_agrikultur": nauru_agrikultur,
  "sektor_perikanan": nauru_perikanan,
  "sektor_olahan_pangan": nauru_olahan_pangan,
  "sektor_farmasi": nauru_farmasi,
  "sektor_pertahanan": nauru_pertahanan,
  "armada_militer": nauru_armada,
  "militer_strategis": nauru_strategis,
  "armada_kepolisian": nauru_kepolisian,
  "pabrik_militer": nauru_pabrik,
  "intelijen": nauru_intelijen,
    "pendidikan": nauru_pendidikan,
  "kesehatan": nauru_kesehatan,
  "hukum": nauru_hukum,
  "sektor_olahraga": nauru_olahraga,
  "sektor_komersial": nauru_komersial,
  "sektor_hiburan": nauru_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 34,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 32,
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
    "harga_ayam": 41,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 11.52,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": nauru_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 29,
    "keamanan": 5,
    "keuangan": 9,
    "lingkungan": 60
  }
};


