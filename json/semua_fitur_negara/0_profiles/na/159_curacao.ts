export const curacao_profile = {
  "name_en": "Curaçao",
  "capital": "Willemstad",
  "name_id": "Curacao",
  "lon": -68.933333,
  "lat": 12.116667,
  "flag": "🇨🇼",
  "jumlah_penduduk": 185482,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { curacao_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/159_curacao";
import { curacao_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/159_curacao";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { curacao_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/159_curacao";

import { curacao_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/159_curacao";
import { curacao_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/159_curacao";
import { curacao_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/159_curacao";
import { curacao_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/159_curacao";
import { curacao_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/159_curacao";
import { curacao_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/159_curacao";
import { curacao_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/159_curacao";
import { curacao_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/159_curacao";
import { curacao_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/159_curacao";
import { curacao_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/159_curacao";
import { curacao_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/159_curacao";
import { curacao_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/159_curacao";
import { curacao_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/159_curacao";
import { curacao_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/159_curacao";
import { curacao_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/159_curacao";
import { curacao_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/159_curacao";
import { curacao_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/159_curacao";
import { curacao_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/159_curacao";
import { curacao_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/159_curacao";
const curacao_geopolitik = {
    "un_vote": 16,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 27,
      "kekuatan_keras": 6,
      "prestise_diplomatik": 57
    }
  } as const;

export const curacao: CountryData = {
  ...curacao_profile,
  "sektor_listrik": curacao_listrik,
  "hunian": curacao_hunian,
  "infrastruktur": curacao_infrastruktur,
  "sektor_ekstraksi": curacao_ekstraksi,
  "sektor_manufaktur": curacao_manufaktur,
  "sektor_peternakan": curacao_peternakan,
  "sektor_agrikultur": curacao_agrikultur,
  "sektor_perikanan": curacao_perikanan,
  "sektor_olahan_pangan": curacao_olahan_pangan,
  "sektor_farmasi": curacao_farmasi,
  "sektor_pertahanan": curacao_pertahanan,
  "armada_militer": curacao_armada,
  "militer_strategis": curacao_strategis,
  "armada_kepolisian": curacao_kepolisian,
  "pabrik_militer": curacao_pabrik,
  "intelijen": curacao_intelijen,
    "pendidikan": curacao_pendidikan,
  "kesehatan": curacao_kesehatan,
  "hukum": curacao_hukum,
  "sektor_olahraga": curacao_olahraga,
  "sektor_komersial": curacao_komersial,
  "sektor_hiburan": curacao_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 23,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 39,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 2,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 40,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 15.55,
    "harga_bbm": 14.98,
    "harga_listrik": 3.2,
    "harga_air": 4.16,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": curacao_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 17,
    "keamanan": 32,
    "keuangan": 31,
    "lingkungan": 60
  }
};


