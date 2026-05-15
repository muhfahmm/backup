export const malawi_profile = {
  "name_en": "Malawi",
  "capital": "Lilongwe",
  "name_id": "Malawi",
  "lon": 33.47,
  "lat": -13.59,
  "flag": "🇲🇼",
  "jumlah_penduduk": 20734262,
  "anggaran": 117,
  "pendapatan_nasional": "333",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { malawi_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/26_malawi";
import { malawi_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/26_malawi";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { malawi_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/26_malawi";

import { malawi_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/26_malawi";
import { malawi_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/26_malawi";
import { malawi_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/26_malawi";
import { malawi_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/26_malawi";
import { malawi_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/26_malawi";
import { malawi_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/26_malawi";
import { malawi_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/26_malawi";
import { malawi_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/26_malawi";
import { malawi_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/26_malawi";
import { malawi_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/26_malawi";
import { malawi_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/26_malawi";
import { malawi_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/26_malawi";
import { malawi_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/26_malawi";
import { malawi_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/26_malawi";
import { malawi_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/26_malawi";
import { malawi_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/26_malawi";
import { malawi_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/26_malawi";
import { malawi_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/26_malawi";
import { malawi_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/26_malawi";
const malawi_geopolitik = {
    "un_vote": 35,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 3,
      "kekuatan_keras": 20,
      "prestise_diplomatik": 57
  }
  } as const;

export const malawi: CountryData = {
  ...malawi_profile,
  "sektor_listrik": malawi_listrik,
  "hunian": malawi_hunian,
  "infrastruktur": malawi_infrastruktur,
  "sektor_ekstraksi": malawi_ekstraksi,
  "sektor_manufaktur": malawi_manufaktur,
  "sektor_peternakan": malawi_peternakan,
  "sektor_agrikultur": malawi_agrikultur,
  "sektor_perikanan": malawi_perikanan,
  "sektor_olahan_pangan": malawi_olahan_pangan,
  "sektor_farmasi": malawi_farmasi,
  "sektor_pertahanan": malawi_pertahanan,
  "armada_militer": malawi_armada,
  "militer_strategis": malawi_strategis,
  "armada_kepolisian": malawi_kepolisian,
  "pabrik_militer": malawi_pabrik,
  "intelijen": malawi_intelijen,
    "pendidikan": malawi_pendidikan,
  "kesehatan": malawi_kesehatan,
  "hukum": malawi_hukum,
  "sektor_olahraga": malawi_olahraga,
  "sektor_komersial": malawi_komersial,
  "sektor_hiburan": malawi_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 7
    },
    "penghasilan": {
      "tarif": 16,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 7
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 30,
      "kepuasan": 93,
      "pendapatan": 10
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 62.2,
    "harga_bbm": 5.35,
    "harga_listrik": 0.8,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": malawi_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 40,
    "pendidikan": 27,
    "keamanan": 5,
    "keuangan": 2,
    "lingkungan": 60
  }
};


