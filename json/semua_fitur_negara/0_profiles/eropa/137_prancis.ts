export const prancis_profile = {
  "name_en": "France",
  "capital": "Paris",
  "name_id": "Prancis",
  "lon": 2,
  "lat": 46,
  "flag": "🇫🇷",
  "jumlah_penduduk": 69081996,
  "anggaran": 30433,
  "pendapatan_nasional": "86951",
  "religion": "Katolik",
  "ideology": "Sosialisme"
} as const;

import { prancis_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/137_prancis";
import { prancis_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/137_prancis";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { prancis_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/137_prancis";

import { prancis_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/137_prancis";
import { prancis_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/137_prancis";
import { prancis_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/137_prancis";
import { prancis_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/137_prancis";
import { prancis_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/137_prancis";
import { prancis_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/137_prancis";
import { prancis_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/137_prancis";
import { prancis_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/137_prancis";
import { prancis_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/137_prancis";
import { prancis_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/137_prancis";
import { prancis_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/137_prancis";
import { prancis_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/137_prancis";
import { prancis_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/137_prancis";
import { prancis_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/137_prancis";
import { prancis_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/137_prancis";
import { prancis_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/137_prancis";
import { prancis_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/137_prancis";
import { prancis_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/137_prancis";
import { prancis_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/137_prancis";
const prancis_geopolitik = {
    "un_vote": 202,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 14,
      "kekuatan_keras": 37,
      "prestise_diplomatik": 57
    }
  } as const;

export const prancis: CountryData = {
  ...prancis_profile,
  "sektor_listrik": prancis_listrik,
  "hunian": prancis_hunian,
  "infrastruktur": prancis_infrastruktur,
  "sektor_ekstraksi": prancis_ekstraksi,
  "sektor_manufaktur": prancis_manufaktur,
  "sektor_peternakan": prancis_peternakan,
  "sektor_agrikultur": prancis_agrikultur,
  "sektor_perikanan": prancis_perikanan,
  "sektor_olahan_pangan": prancis_olahan_pangan,
  "sektor_farmasi": prancis_farmasi,
  "sektor_pertahanan": prancis_pertahanan,
  "armada_militer": prancis_armada,
  "militer_strategis": prancis_strategis,
  "armada_kepolisian": prancis_kepolisian,
  "pabrik_militer": prancis_pabrik,
  "intelijen": prancis_intelijen,
    "pendidikan": prancis_pendidikan,
  "kesehatan": prancis_kesehatan,
  "hukum": prancis_hukum,
  "sektor_olahraga": prancis_olahraga,
  "sektor_komersial": prancis_komersial,
  "sektor_hiburan": prancis_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 1497
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 1939
    },
    "penghasilan": {
      "tarif": 2,
      "kepuasan": 61,
      "pendapatan": 142
    },
    "bea_cukai": {
      "tarif": 19,
      "kepuasan": 86,
      "pendapatan": 1458
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 157
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 153 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 457 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 520
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 5.35,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 221.06,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": prancis_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 10,
    "pendidikan": 4,
    "keamanan": 18,
    "keuangan": 25,
    "lingkungan": 60
  }
};


