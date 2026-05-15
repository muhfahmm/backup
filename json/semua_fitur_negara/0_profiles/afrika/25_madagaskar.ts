export const madagaskar_profile = {
  "name_en": "Madagascar",
  "capital": "Antananarivo",
  "name_id": "Madagaskar",
  "lon": 47.31,
  "lat": -18.55,
  "flag": "🇲🇬",
  "jumlah_penduduk": 28915653,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { madagaskar_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/25_madagaskar";
import { madagaskar_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/25_madagaskar";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { madagaskar_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/25_madagaskar";

import { madagaskar_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/25_madagaskar";
import { madagaskar_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/25_madagaskar";
import { madagaskar_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/25_madagaskar";
import { madagaskar_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/25_madagaskar";
import { madagaskar_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/25_madagaskar";
import { madagaskar_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/25_madagaskar";
import { madagaskar_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/25_madagaskar";
import { madagaskar_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/25_madagaskar";
import { madagaskar_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/25_madagaskar";
import { madagaskar_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/25_madagaskar";
import { madagaskar_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/25_madagaskar";
import { madagaskar_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/25_madagaskar";
import { madagaskar_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/25_madagaskar";
import { madagaskar_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/25_madagaskar";
import { madagaskar_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/25_madagaskar";
import { madagaskar_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/25_madagaskar";
import { madagaskar_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/25_madagaskar";
import { madagaskar_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/25_madagaskar";
import { madagaskar_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/25_madagaskar";
const madagaskar_geopolitik = {
    "un_vote": 87,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 29,
      "kekuatan_keras": 3,
      "prestise_diplomatik": 57
  }
  } as const;

export const madagaskar: CountryData = {
  ...madagaskar_profile,
  "sektor_listrik": madagaskar_listrik,
  "hunian": madagaskar_hunian,
  "infrastruktur": madagaskar_infrastruktur,
  "sektor_ekstraksi": madagaskar_ekstraksi,
  "sektor_manufaktur": madagaskar_manufaktur,
  "sektor_peternakan": madagaskar_peternakan,
  "sektor_agrikultur": madagaskar_agrikultur,
  "sektor_perikanan": madagaskar_perikanan,
  "sektor_olahan_pangan": madagaskar_olahan_pangan,
  "sektor_farmasi": madagaskar_farmasi,
  "sektor_pertahanan": madagaskar_pertahanan,
  "armada_militer": madagaskar_armada,
  "militer_strategis": madagaskar_strategis,
  "armada_kepolisian": madagaskar_kepolisian,
  "pabrik_militer": madagaskar_pabrik,
  "intelijen": madagaskar_intelijen,
    "pendidikan": madagaskar_pendidikan,
  "kesehatan": madagaskar_kesehatan,
  "hukum": madagaskar_hukum,
  "sektor_olahraga": madagaskar_olahraga,
  "sektor_komersial": madagaskar_komersial,
  "sektor_hiburan": madagaskar_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 7
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 0.8,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": madagaskar_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 18,
    "pendidikan": 23,
    "keamanan": 22,
    "keuangan": 30,
    "lingkungan": 60
  }
};


