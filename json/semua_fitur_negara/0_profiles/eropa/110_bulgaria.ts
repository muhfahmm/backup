export const bulgaria_profile = {
  "name_en": "Bulgaria",
  "capital": "Sofia",
  "name_id": "Bulgaria",
  "lon": 25,
  "lat": 43,
  "flag": "🇧🇬",
  "jumlah_penduduk": 6687717,
  "anggaran": 1021,
  "pendapatan_nasional": "2917",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi"
} as const;

import { bulgaria_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/110_bulgaria";
import { bulgaria_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/110_bulgaria";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { bulgaria_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/110_bulgaria";

import { bulgaria_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/110_bulgaria";
import { bulgaria_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/110_bulgaria";
import { bulgaria_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/110_bulgaria";
import { bulgaria_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/110_bulgaria";
import { bulgaria_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/110_bulgaria";
import { bulgaria_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/110_bulgaria";
import { bulgaria_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/110_bulgaria";
import { bulgaria_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/110_bulgaria";
import { bulgaria_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/110_bulgaria";
import { bulgaria_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/110_bulgaria";
import { bulgaria_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/110_bulgaria";
import { bulgaria_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/110_bulgaria";
import { bulgaria_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/110_bulgaria";
import { bulgaria_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/110_bulgaria";
import { bulgaria_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/110_bulgaria";
import { bulgaria_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/110_bulgaria";
import { bulgaria_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/110_bulgaria";
import { bulgaria_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/110_bulgaria";
import { bulgaria_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/110_bulgaria";
const bulgaria_geopolitik = {
    "un_vote": 42,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 11,
      "prestise_diplomatik": 57
    }
  } as const;

export const bulgaria: CountryData = {
  ...bulgaria_profile,
  "sektor_listrik": bulgaria_listrik,
  "hunian": bulgaria_hunian,
  "infrastruktur": bulgaria_infrastruktur,
  "sektor_ekstraksi": bulgaria_ekstraksi,
  "sektor_manufaktur": bulgaria_manufaktur,
  "sektor_peternakan": bulgaria_peternakan,
  "sektor_agrikultur": bulgaria_agrikultur,
  "sektor_perikanan": bulgaria_perikanan,
  "sektor_olahan_pangan": bulgaria_olahan_pangan,
  "sektor_farmasi": bulgaria_farmasi,
  "sektor_pertahanan": bulgaria_pertahanan,
  "armada_militer": bulgaria_armada,
  "militer_strategis": bulgaria_strategis,
  "armada_kepolisian": bulgaria_kepolisian,
  "pabrik_militer": bulgaria_pabrik,
  "intelijen": bulgaria_intelijen,
    "pendidikan": bulgaria_pendidikan,
  "kesehatan": bulgaria_kesehatan,
  "hukum": bulgaria_hukum,
  "sektor_olahraga": bulgaria_olahraga,
  "sektor_komersial": bulgaria_komersial,
  "sektor_hiburan": bulgaria_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 4,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 77
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 99
    },
    "bea_cukai": {
      "tarif": 23,
      "kepuasan": 86,
      "pendapatan": 47
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 67
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 16 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 53
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 11.52,
    "harga_telur": 62.2,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": bulgaria_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 1,
    "pendidikan": 1,
    "keamanan": 31,
    "keuangan": 23,
    "lingkungan": 60
  }
};


