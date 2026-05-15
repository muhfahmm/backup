export const sao_tome_dan_principe_profile = {
  "name_en": "Sao Tome and Principe",
  "capital": "São Tomé",
  "name_id": "Sao tome dan principe",
  "lon": 7,
  "lat": 1,
  "flag": "🇸🇹",
  "jumlah_penduduk": 235536,
  "anggaran": 10,
  "pendapatan_nasional": "17",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { sao_tome_dan_principe_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/45_sao_tome_dan_principe";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { sao_tome_dan_principe_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/45_sao_tome_dan_principe";

import { sao_tome_dan_principe_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/45_sao_tome_dan_principe";
import { sao_tome_dan_principe_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/45_sao_tome_dan_principe";
const sao_tome_dan_principe_geopolitik = {
    "un_vote": 86,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 37,
      "kekuatan_keras": 38,
      "prestise_diplomatik": 57
  }
  } as const;

export const sao_tome_dan_principe: CountryData = {
  ...sao_tome_dan_principe_profile,
  "sektor_listrik": sao_tome_dan_principe_listrik,
  "hunian": sao_tome_dan_principe_hunian,
  "infrastruktur": sao_tome_dan_principe_infrastruktur,
  "sektor_ekstraksi": sao_tome_dan_principe_ekstraksi,
  "sektor_manufaktur": sao_tome_dan_principe_manufaktur,
  "sektor_peternakan": sao_tome_dan_principe_peternakan,
  "sektor_agrikultur": sao_tome_dan_principe_agrikultur,
  "sektor_perikanan": sao_tome_dan_principe_perikanan,
  "sektor_olahan_pangan": sao_tome_dan_principe_olahan_pangan,
  "sektor_farmasi": sao_tome_dan_principe_farmasi,
  "sektor_pertahanan": sao_tome_dan_principe_pertahanan,
  "armada_militer": sao_tome_dan_principe_armada,
  "militer_strategis": sao_tome_dan_principe_strategis,
  "armada_kepolisian": sao_tome_dan_principe_kepolisian,
  "pabrik_militer": sao_tome_dan_principe_pabrik,
  "intelijen": sao_tome_dan_principe_intelijen,
    "pendidikan": sao_tome_dan_principe_pendidikan,
  "kesehatan": sao_tome_dan_principe_kesehatan,
  "hukum": sao_tome_dan_principe_hukum,
  "sektor_olahraga": sao_tome_dan_principe_olahraga,
  "sektor_komersial": sao_tome_dan_principe_komersial,
  "sektor_hiburan": sao_tome_dan_principe_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 62.2,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": sao_tome_dan_principe_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 3,
    "pendidikan": 23,
    "keamanan": 22,
    "keuangan": 22,
    "lingkungan": 60
  }
};


