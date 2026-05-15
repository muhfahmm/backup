export const azerbaijan_profile = {
  "name_en": "Azerbaijan",
  "capital": "Baku",
  "name_id": "Azerbaijan",
  "lon": 47.5,
  "lat": 40.5,
  "flag": "🇦🇿",
  "jumlah_penduduk": 10259701,
  "anggaran": 535,
  "pendapatan_nasional": "1528",
  "religion": "Islam",
  "ideology": "Demokrasi"
} as const;

import { azerbaijan_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/57_azerbaijan";
import { azerbaijan_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/57_azerbaijan";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { azerbaijan_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/57_azerbaijan";

import { azerbaijan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/57_azerbaijan";
import { azerbaijan_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/57_azerbaijan";
import { azerbaijan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/57_azerbaijan";
import { azerbaijan_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/57_azerbaijan";
import { azerbaijan_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/57_azerbaijan";
import { azerbaijan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/57_azerbaijan";
import { azerbaijan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/57_azerbaijan";
import { azerbaijan_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/57_azerbaijan";
import { azerbaijan_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/57_azerbaijan";
import { azerbaijan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/57_azerbaijan";
import { azerbaijan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/57_azerbaijan";
import { azerbaijan_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/57_azerbaijan";
import { azerbaijan_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/57_azerbaijan";
import { azerbaijan_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/57_azerbaijan";
import { azerbaijan_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/57_azerbaijan";
import { azerbaijan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/57_azerbaijan";
import { azerbaijan_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/57_azerbaijan";
import { azerbaijan_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/57_azerbaijan";
import { azerbaijan_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/57_azerbaijan";
const azerbaijan_geopolitik = {
    "un_vote": 140,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 13,
      "kekuatan_keras": 40,
      "prestise_diplomatik": 57
    }
  } as const;

export const azerbaijan: CountryData = {
  ...azerbaijan_profile,
  "sektor_listrik": azerbaijan_listrik,
  "hunian": azerbaijan_hunian,
  "infrastruktur": azerbaijan_infrastruktur,
  "sektor_ekstraksi": azerbaijan_ekstraksi,
  "sektor_manufaktur": azerbaijan_manufaktur,
  "sektor_peternakan": azerbaijan_peternakan,
  "sektor_agrikultur": azerbaijan_agrikultur,
  "sektor_perikanan": azerbaijan_perikanan,
  "sektor_olahan_pangan": azerbaijan_olahan_pangan,
  "sektor_farmasi": azerbaijan_farmasi,
  "sektor_pertahanan": azerbaijan_pertahanan,
  "armada_militer": azerbaijan_armada,
  "militer_strategis": azerbaijan_strategis,
  "armada_kepolisian": azerbaijan_kepolisian,
  "pabrik_militer": azerbaijan_pabrik,
  "intelijen": azerbaijan_intelijen,
    "pendidikan": azerbaijan_pendidikan,
  "kesehatan": azerbaijan_kesehatan,
  "hukum": azerbaijan_hukum,
  "sektor_olahraga": azerbaijan_olahraga,
  "sektor_komersial": azerbaijan_komersial,
  "sektor_hiburan": azerbaijan_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 44
    },
    "korporasi": {
      "tarif": 2,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 28
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 11,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 9 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 19
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 20.16,
    "harga_telur": 15.55,
    "harga_bbm": 8.56,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": azerbaijan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 6,
    "pendidikan": 9,
    "keamanan": 28,
    "keuangan": 22,
    "lingkungan": 60
  }
};


