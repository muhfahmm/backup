export const austria_profile = {
  "name_en": "Austria",
  "capital": "Vienna",
  "name_id": "Austria",
  "lon": 16.37,
  "lat": 48.2,
  "flag": "🇦🇹",
  "jumlah_penduduk": 9159950,
  "anggaran": 4959,
  "pendapatan_nasional": "14168",
  "religion": "Katolik",
  "ideology": "Kapitalisme"
} as const;

import { austria_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/105_austria";
import { austria_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/105_austria";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { austria_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/105_austria";

import { austria_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/105_austria";
import { austria_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/105_austria";
import { austria_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/105_austria";
import { austria_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/105_austria";
import { austria_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/105_austria";
import { austria_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/105_austria";
import { austria_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/105_austria";
import { austria_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/105_austria";
import { austria_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/105_austria";
import { austria_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/105_austria";
import { austria_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/105_austria";
import { austria_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/105_austria";
import { austria_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/105_austria";
import { austria_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/105_austria";
import { austria_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/105_austria";
import { austria_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/105_austria";
import { austria_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/105_austria";
import { austria_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/105_austria";
import { austria_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/105_austria";
const austria_geopolitik = {
    "un_vote": 192,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 28,
      "kekuatan_keras": 34,
      "prestise_diplomatik": 57
    }
  } as const;

export const austria: CountryData = {
  ...austria_profile,
  "sektor_listrik": austria_listrik,
  "hunian": austria_hunian,
  "infrastruktur": austria_infrastruktur,
  "sektor_ekstraksi": austria_ekstraksi,
  "sektor_manufaktur": austria_manufaktur,
  "sektor_peternakan": austria_peternakan,
  "sektor_agrikultur": austria_agrikultur,
  "sektor_perikanan": austria_perikanan,
  "sektor_olahan_pangan": austria_olahan_pangan,
  "sektor_farmasi": austria_farmasi,
  "sektor_pertahanan": austria_pertahanan,
  "armada_militer": austria_armada,
  "militer_strategis": austria_strategis,
  "armada_kepolisian": austria_kepolisian,
  "pabrik_militer": austria_pabrik,
  "intelijen": austria_intelijen,
    "pendidikan": austria_pendidikan,
  "kesehatan": austria_kesehatan,
  "hukum": austria_hukum,
  "sektor_olahraga": austria_olahraga,
  "sektor_komersial": austria_komersial,
  "sektor_hiburan": austria_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 170
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 532
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 408
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 117
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 64
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 25 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 75 },
    "lainnya": {
      "tarif": 30,
      "kepuasan": 93,
      "pendapatan": 219
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 7.7,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": austria_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 18,
    "pendidikan": 12,
    "keamanan": 23,
    "keuangan": 37,
    "lingkungan": 60
  }
};


