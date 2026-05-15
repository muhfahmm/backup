export const meksiko_profile = {
  "name_en": "Mexico",
  "capital": "Mexico City",
  "name_id": "Meksiko",
  "lon": -102,
  "lat": 23,
  "flag": "🇲🇽",
  "jumlah_penduduk": 131001723,
  "anggaran": 17404,
  "pendapatan_nasional": "49726",
  "religion": "Katolik",
  "ideology": "Sosialisme"
} as const;

import { meksiko_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/170_meksiko";
import { meksiko_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/170_meksiko";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { meksiko_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/170_meksiko";

import { meksiko_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/170_meksiko";
import { meksiko_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/170_meksiko";
import { meksiko_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/170_meksiko";
import { meksiko_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/170_meksiko";
import { meksiko_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/170_meksiko";
import { meksiko_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/170_meksiko";
import { meksiko_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/170_meksiko";
import { meksiko_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/170_meksiko";
import { meksiko_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/170_meksiko";
import { meksiko_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/170_meksiko";
import { meksiko_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/170_meksiko";
import { meksiko_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/170_meksiko";
import { meksiko_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/170_meksiko";
import { meksiko_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/170_meksiko";
import { meksiko_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/170_meksiko";
import { meksiko_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/170_meksiko";
import { meksiko_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/170_meksiko";
import { meksiko_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/170_meksiko";
import { meksiko_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/170_meksiko";
const meksiko_geopolitik = {
    "un_vote": 186,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 21,
      "prestise_diplomatik": 57
    }
  } as const;

export const meksiko: CountryData = {
  ...meksiko_profile,
  "sektor_listrik": meksiko_listrik,
  "hunian": meksiko_hunian,
  "infrastruktur": meksiko_infrastruktur,
  "sektor_ekstraksi": meksiko_ekstraksi,
  "sektor_manufaktur": meksiko_manufaktur,
  "sektor_peternakan": meksiko_peternakan,
  "sektor_agrikultur": meksiko_agrikultur,
  "sektor_perikanan": meksiko_perikanan,
  "sektor_olahan_pangan": meksiko_olahan_pangan,
  "sektor_farmasi": meksiko_farmasi,
  "sektor_pertahanan": meksiko_pertahanan,
  "armada_militer": meksiko_armada,
  "militer_strategis": meksiko_strategis,
  "armada_kepolisian": meksiko_kepolisian,
  "pabrik_militer": meksiko_pabrik,
  "intelijen": meksiko_intelijen,
    "pendidikan": meksiko_pendidikan,
  "kesehatan": meksiko_kesehatan,
  "hukum": meksiko_hukum,
  "sektor_olahraga": meksiko_olahraga,
  "sektor_komersial": meksiko_komersial,
  "sektor_hiburan": meksiko_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 630
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 1548
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 1054
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 309
    },
    "lingkungan": {
      "tarif": 9,
      "kepuasan": 88,
      "pendapatan": 264
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 88 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 262 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 497
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 3.2,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": meksiko_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 4,
    "pendidikan": 23,
    "keamanan": 32,
    "keuangan": 9,
    "lingkungan": 60
  }
};


