export const spanyol_profile = {
  "name_en": "Spain",
  "capital": "Madrid",
  "name_id": "Spanyol",
  "lon": -3.7,
  "lat": 40.41,
  "flag": "🇪🇸",
  "jumlah_penduduk": 49570725,
  "anggaran": 15362,
  "pendapatan_nasional": "43892",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { spanyol_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/145_spanyol";
import { spanyol_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/145_spanyol";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { spanyol_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/145_spanyol";

import { spanyol_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/145_spanyol";
import { spanyol_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/145_spanyol";
import { spanyol_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/145_spanyol";
import { spanyol_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/145_spanyol";
import { spanyol_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/145_spanyol";
import { spanyol_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/145_spanyol";
import { spanyol_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/145_spanyol";
import { spanyol_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/145_spanyol";
import { spanyol_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/145_spanyol";
import { spanyol_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/145_spanyol";
import { spanyol_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/145_spanyol";
import { spanyol_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/145_spanyol";
import { spanyol_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/145_spanyol";
import { spanyol_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/145_spanyol";
import { spanyol_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/145_spanyol";
import { spanyol_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/145_spanyol";
import { spanyol_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/145_spanyol";
import { spanyol_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/145_spanyol";
import { spanyol_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/145_spanyol";
const spanyol_geopolitik = {
    "un_vote": 135,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 8,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    }
  } as const;

export const spanyol: CountryData = {
  ...spanyol_profile,
  "sektor_listrik": spanyol_listrik,
  "hunian": spanyol_hunian,
  "infrastruktur": spanyol_infrastruktur,
  "sektor_ekstraksi": spanyol_ekstraksi,
  "sektor_manufaktur": spanyol_manufaktur,
  "sektor_peternakan": spanyol_peternakan,
  "sektor_agrikultur": spanyol_agrikultur,
  "sektor_perikanan": spanyol_perikanan,
  "sektor_olahan_pangan": spanyol_olahan_pangan,
  "sektor_farmasi": spanyol_farmasi,
  "sektor_pertahanan": spanyol_pertahanan,
  "armada_militer": spanyol_armada,
  "militer_strategis": spanyol_strategis,
  "armada_kepolisian": spanyol_kepolisian,
  "pabrik_militer": spanyol_pabrik,
  "intelijen": spanyol_intelijen,
    "pendidikan": spanyol_pendidikan,
  "kesehatan": spanyol_kesehatan,
  "hukum": spanyol_hukum,
  "sektor_olahraga": spanyol_olahraga,
  "sektor_komersial": spanyol_komersial,
  "sektor_hiburan": spanyol_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 1365
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 370
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 1029
    },
    "bea_cukai": {
      "tarif": 26,
      "kepuasan": 86,
      "pendapatan": 950
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 445
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 77 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 231 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 742
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": spanyol_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 19,
    "pendidikan": 24,
    "keamanan": 7,
    "keuangan": 27,
    "lingkungan": 60
  }
};


