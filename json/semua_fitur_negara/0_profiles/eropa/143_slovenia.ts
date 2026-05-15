export const slovenia_profile = {
  "name_en": "Slovenia",
  "capital": "Ljubljana",
  "name_id": "Slovenia",
  "lon": 14.81666666,
  "lat": 46.11666666,
  "flag": "🇸🇮",
  "jumlah_penduduk": 2123949,
  "anggaran": 632,
  "pendapatan_nasional": "1806",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { slovenia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/143_slovenia";
import { slovenia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/143_slovenia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { slovenia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/143_slovenia";

import { slovenia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/143_slovenia";
import { slovenia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/143_slovenia";
import { slovenia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/143_slovenia";
import { slovenia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/143_slovenia";
import { slovenia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/143_slovenia";
import { slovenia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/143_slovenia";
import { slovenia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/143_slovenia";
import { slovenia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/143_slovenia";
import { slovenia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/143_slovenia";
import { slovenia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/143_slovenia";
import { slovenia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/143_slovenia";
import { slovenia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/143_slovenia";
import { slovenia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/143_slovenia";
import { slovenia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/143_slovenia";
import { slovenia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/143_slovenia";
import { slovenia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/143_slovenia";
import { slovenia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/143_slovenia";
import { slovenia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/143_slovenia";
import { slovenia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/143_slovenia";
const slovenia_geopolitik = {
    "un_vote": 78,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 10,
      "kekuatan_keras": 31,
      "prestise_diplomatik": 57
    }
  } as const;

export const slovenia: CountryData = {
  ...slovenia_profile,
  "sektor_listrik": slovenia_listrik,
  "hunian": slovenia_hunian,
  "infrastruktur": slovenia_infrastruktur,
  "sektor_ekstraksi": slovenia_ekstraksi,
  "sektor_manufaktur": slovenia_manufaktur,
  "sektor_peternakan": slovenia_peternakan,
  "sektor_agrikultur": slovenia_agrikultur,
  "sektor_perikanan": slovenia_perikanan,
  "sektor_olahan_pangan": slovenia_olahan_pangan,
  "sektor_farmasi": slovenia_farmasi,
  "sektor_pertahanan": slovenia_pertahanan,
  "armada_militer": slovenia_armada,
  "militer_strategis": slovenia_strategis,
  "armada_kepolisian": slovenia_kepolisian,
  "pabrik_militer": slovenia_pabrik,
  "intelijen": slovenia_intelijen,
    "pendidikan": slovenia_pendidikan,
  "kesehatan": slovenia_kesehatan,
  "hukum": slovenia_hukum,
  "sektor_olahraga": slovenia_olahraga,
  "sektor_komersial": slovenia_komersial,
  "sektor_hiburan": slovenia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 61
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 60
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 32
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 52
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 11
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 10 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 15
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 0.8,
    "harga_air": 7.28,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": slovenia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 2,
    "pendidikan": 6,
    "keamanan": 19,
    "keuangan": 10,
    "lingkungan": 60
  }
};


