export const korea_utara_profile = {
  "name_en": "North Korea",
  "capital": "Pyongyang",
  "name_id": "Korea Utara",
  "lon": 125.75,
  "lat": 39.03,
  "flag": "🇰🇵",
  "jumlah_penduduk": "10M",
  "anggaran": 175,
  "pendapatan_nasional": "500",
  "religion": "Ateisme",
  "ideology": "Komunisme"
} as const;

import { korea_utara_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/76_korea_utara";
import { korea_utara_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/76_korea_utara";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { korea_utara_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/76_korea_utara";

import { korea_utara_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/76_korea_utara";
import { korea_utara_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/76_korea_utara";
import { korea_utara_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/76_korea_utara";
import { korea_utara_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/76_korea_utara";
import { korea_utara_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/76_korea_utara";
import { korea_utara_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/76_korea_utara";
import { korea_utara_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/76_korea_utara";
import { korea_utara_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/76_korea_utara";
import { korea_utara_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/76_korea_utara";
import { korea_utara_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/76_korea_utara";
import { korea_utara_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/76_korea_utara";
import { korea_utara_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/76_korea_utara";
import { korea_utara_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/76_korea_utara";
import { korea_utara_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/76_korea_utara";
import { korea_utara_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/76_korea_utara";
import { korea_utara_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/76_korea_utara";
import { korea_utara_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/76_korea_utara";
import { korea_utara_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/76_korea_utara";
import { korea_utara_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/76_korea_utara";
const korea_utara_geopolitik = {
    "un_vote": 56,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 7,
      "kekuatan_keras": 37,
      "prestise_diplomatik": 57
    }
  } as const;

export const korea_utara: CountryData = {
  ...korea_utara_profile,
  "sektor_listrik": korea_utara_listrik,
  "hunian": korea_utara_hunian,
  "infrastruktur": korea_utara_infrastruktur,
  "sektor_ekstraksi": korea_utara_ekstraksi,
  "sektor_manufaktur": korea_utara_manufaktur,
  "sektor_peternakan": korea_utara_peternakan,
  "sektor_agrikultur": korea_utara_agrikultur,
  "sektor_perikanan": korea_utara_perikanan,
  "sektor_olahan_pangan": korea_utara_olahan_pangan,
  "sektor_farmasi": korea_utara_farmasi,
  "sektor_pertahanan": korea_utara_pertahanan,
  "armada_militer": korea_utara_armada,
  "militer_strategis": korea_utara_strategis,
  "armada_kepolisian": korea_utara_kepolisian,
  "pabrik_militer": korea_utara_pabrik,
  "intelijen": korea_utara_intelijen,
    "pendidikan": korea_utara_pendidikan,
  "kesehatan": korea_utara_kesehatan,
  "hukum": korea_utara_hukum,
  "sektor_olahraga": korea_utara_olahraga,
  "sektor_komersial": korea_utara_komersial,
  "sektor_hiburan": korea_utara_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 16,
      "kepuasan": 93,
      "pendapatan": 6
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
    "harga_gula": 11.52,
    "harga_telur": 15.55,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 157.9,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": korea_utara_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 3,
    "pendidikan": 1,
    "keamanan": 29,
    "keuangan": 3,
    "lingkungan": 60
  }
};


