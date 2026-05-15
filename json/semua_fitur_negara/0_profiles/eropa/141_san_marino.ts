export const san_marino_profile = {
  "name_en": "San Marino",
  "capital": "City of San Marino",
  "name_id": "San marino",
  "lon": 12.41666666,
  "lat": 43.76666666,
  "flag": "🇸🇲",
  "jumlah_penduduk": 34156,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { san_marino_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/141_san_marino";
import { san_marino_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/141_san_marino";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { san_marino_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/141_san_marino";

import { san_marino_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/141_san_marino";
import { san_marino_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/141_san_marino";
import { san_marino_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/141_san_marino";
import { san_marino_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/141_san_marino";
import { san_marino_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/141_san_marino";
import { san_marino_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/141_san_marino";
import { san_marino_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/141_san_marino";
import { san_marino_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/141_san_marino";
import { san_marino_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/141_san_marino";
import { san_marino_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/141_san_marino";
import { san_marino_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/141_san_marino";
import { san_marino_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/141_san_marino";
import { san_marino_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/141_san_marino";
import { san_marino_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/141_san_marino";
import { san_marino_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/141_san_marino";
import { san_marino_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/141_san_marino";
import { san_marino_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/141_san_marino";
import { san_marino_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/141_san_marino";
import { san_marino_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/141_san_marino";
const san_marino_geopolitik = {
    "un_vote": 31,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 6,
      "kekuatan_keras": 30,
      "prestise_diplomatik": 57
    }
  } as const;

export const san_marino: CountryData = {
  ...san_marino_profile,
  "sektor_listrik": san_marino_listrik,
  "hunian": san_marino_hunian,
  "infrastruktur": san_marino_infrastruktur,
  "sektor_ekstraksi": san_marino_ekstraksi,
  "sektor_manufaktur": san_marino_manufaktur,
  "sektor_peternakan": san_marino_peternakan,
  "sektor_agrikultur": san_marino_agrikultur,
  "sektor_perikanan": san_marino_perikanan,
  "sektor_olahan_pangan": san_marino_olahan_pangan,
  "sektor_farmasi": san_marino_farmasi,
  "sektor_pertahanan": san_marino_pertahanan,
  "armada_militer": san_marino_armada,
  "militer_strategis": san_marino_strategis,
  "armada_kepolisian": san_marino_kepolisian,
  "pabrik_militer": san_marino_pabrik,
  "intelijen": san_marino_intelijen,
    "pendidikan": san_marino_pendidikan,
  "kesehatan": san_marino_kesehatan,
  "hukum": san_marino_hukum,
  "sektor_olahraga": san_marino_olahraga,
  "sektor_komersial": san_marino_komersial,
  "sektor_hiburan": san_marino_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 8,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": san_marino_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 8,
    "pendidikan": 5,
    "keamanan": 34,
    "keuangan": 11,
    "lingkungan": 60
  }
};


