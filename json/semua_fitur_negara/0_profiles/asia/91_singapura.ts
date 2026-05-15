export const singapura_profile = {
  "name_en": "Singapore",
  "capital": "Singapore",
  "name_id": "Singapura",
  "lon": 103.81,
  "lat": 1.35,
  "flag": "🇸🇬",
  "jumlah_penduduk": 6110200,
  "anggaran": 4862,
  "pendapatan_nasional": "13890",
  "religion": "Buddha",
  "ideology": "Kapitalisme"
} as const;

import { singapura_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/91_singapura";
import { singapura_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/91_singapura";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { singapura_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/91_singapura";

import { singapura_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/91_singapura";
import { singapura_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/91_singapura";
import { singapura_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/91_singapura";
import { singapura_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/91_singapura";
import { singapura_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/91_singapura";
import { singapura_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/91_singapura";
import { singapura_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/91_singapura";
import { singapura_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/91_singapura";
import { singapura_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/91_singapura";
import { singapura_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/91_singapura";
import { singapura_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/91_singapura";
import { singapura_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/91_singapura";
import { singapura_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/91_singapura";
import { singapura_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/91_singapura";
import { singapura_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/91_singapura";
import { singapura_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/91_singapura";
import { singapura_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/91_singapura";
import { singapura_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/91_singapura";
import { singapura_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/91_singapura";
const singapura_geopolitik = {
    "un_vote": 148,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 12,
      "kekuatan_keras": 26,
      "prestise_diplomatik": 57
    }
  } as const;

export const singapura: CountryData = {
  ...singapura_profile,
  "sektor_listrik": singapura_listrik,
  "hunian": singapura_hunian,
  "infrastruktur": singapura_infrastruktur,
  "sektor_ekstraksi": singapura_ekstraksi,
  "sektor_manufaktur": singapura_manufaktur,
  "sektor_peternakan": singapura_peternakan,
  "sektor_agrikultur": singapura_agrikultur,
  "sektor_perikanan": singapura_perikanan,
  "sektor_olahan_pangan": singapura_olahan_pangan,
  "sektor_farmasi": singapura_farmasi,
  "sektor_pertahanan": singapura_pertahanan,
  "armada_militer": singapura_armada,
  "militer_strategis": singapura_strategis,
  "armada_kepolisian": singapura_kepolisian,
  "pabrik_militer": singapura_pabrik,
  "intelijen": singapura_intelijen,
    "pendidikan": singapura_pendidikan,
  "kesehatan": singapura_kesehatan,
  "hukum": singapura_hukum,
  "sektor_olahraga": singapura_olahraga,
  "sektor_komersial": singapura_komersial,
  "sektor_hiburan": singapura_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 80
    },
    "korporasi": {
      "tarif": 36,
      "kepuasan": 52,
      "pendapatan": 478
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 132
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 231
    },
    "lingkungan": {
      "tarif": 39,
      "kepuasan": 88,
      "pendapatan": 379
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 25 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 73 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 147
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 0.8,
    "harga_air": 10.4,
    "harga_obat": 221.06,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": singapura_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 6,
    "pendidikan": 18,
    "keamanan": 31,
    "keuangan": 19,
    "lingkungan": 60
  }
};


