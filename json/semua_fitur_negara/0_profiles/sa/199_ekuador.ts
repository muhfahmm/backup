export const ekuador_profile = {
  "name_en": "Ecuador",
  "capital": "Quito",
  "name_id": "Ekuador",
  "lon": -77.5,
  "lat": -2,
  "flag": "🇪🇨",
  "jumlah_penduduk": 18103660,
  "anggaran": 1118,
  "pendapatan_nasional": "3195",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { ekuador_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/sa/199_ekuador";
import { ekuador_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/sa/199_ekuador";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { ekuador_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/sa/199_ekuador";

import { ekuador_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/sa/199_ekuador";
import { ekuador_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/sa/199_ekuador";
import { ekuador_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/sa/199_ekuador";
import { ekuador_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/sa/199_ekuador";
import { ekuador_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/sa/199_ekuador";
import { ekuador_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/sa/199_ekuador";
import { ekuador_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/sa/199_ekuador";
import { ekuador_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/sa/199_ekuador";
import { ekuador_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/sa/199_ekuador";
import { ekuador_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/sa/199_ekuador";
import { ekuador_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/sa/199_ekuador";
import { ekuador_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/sa/199_ekuador";
import { ekuador_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/sa/199_ekuador";
import { ekuador_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/sa/199_ekuador";
import { ekuador_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/sa/199_ekuador";
import { ekuador_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/sa/199_ekuador";
import { ekuador_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/sa/199_ekuador";
import { ekuador_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/sa/199_ekuador";
import { ekuador_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/sa/199_ekuador";
const ekuador_geopolitik = {
    "un_vote": 32,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 3,
      "kekuatan_keras": 4,
      "prestise_diplomatik": 57
    }
  } as const;

export const ekuador: CountryData = {
  ...ekuador_profile,
  "sektor_listrik": ekuador_listrik,
  "hunian": ekuador_hunian,
  "infrastruktur": ekuador_infrastruktur,
  "sektor_ekstraksi": ekuador_ekstraksi,
  "sektor_manufaktur": ekuador_manufaktur,
  "sektor_peternakan": ekuador_peternakan,
  "sektor_agrikultur": ekuador_agrikultur,
  "sektor_perikanan": ekuador_perikanan,
  "sektor_olahan_pangan": ekuador_olahan_pangan,
  "sektor_farmasi": ekuador_farmasi,
  "sektor_pertahanan": ekuador_pertahanan,
  "armada_militer": ekuador_armada,
  "militer_strategis": ekuador_strategis,
  "armada_kepolisian": ekuador_kepolisian,
  "pabrik_militer": ekuador_pabrik,
  "intelijen": ekuador_intelijen,
    "pendidikan": ekuador_pendidikan,
  "kesehatan": ekuador_kesehatan,
  "hukum": ekuador_hukum,
  "sektor_olahraga": ekuador_olahraga,
  "sektor_komersial": ekuador_komersial,
  "sektor_hiburan": ekuador_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 28
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 56
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 61
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 91
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 34
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 17 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 83
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 7.2,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": ekuador_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 17,
    "pendidikan": 40,
    "keamanan": 3,
    "keuangan": 22,
    "lingkungan": 60
  }
};


