export const jamaika_profile = {
  "name_en": "Jamaica",
  "capital": "Kingston",
  "name_id": "Jamaika",
  "lon": -77.5,
  "lat": 18.25,
  "flag": "🇯🇲",
  "jumlah_penduduk": 2774538,
  "anggaran": 175,
  "pendapatan_nasional": "500",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { jamaika_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/167_jamaika";
import { jamaika_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/167_jamaika";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { jamaika_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/167_jamaika";

import { jamaika_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/167_jamaika";
import { jamaika_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/167_jamaika";
import { jamaika_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/167_jamaika";
import { jamaika_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/167_jamaika";
import { jamaika_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/167_jamaika";
import { jamaika_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/167_jamaika";
import { jamaika_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/167_jamaika";
import { jamaika_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/167_jamaika";
import { jamaika_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/167_jamaika";
import { jamaika_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/167_jamaika";
import { jamaika_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/167_jamaika";
import { jamaika_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/167_jamaika";
import { jamaika_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/167_jamaika";
import { jamaika_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/167_jamaika";
import { jamaika_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/167_jamaika";
import { jamaika_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/167_jamaika";
import { jamaika_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/167_jamaika";
import { jamaika_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/167_jamaika";
import { jamaika_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/167_jamaika";
const jamaika_geopolitik = {
    "un_vote": 57,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 4,
      "kekuatan_keras": 27,
      "prestise_diplomatik": 57
    }
  } as const;

export const jamaika: CountryData = {
  ...jamaika_profile,
  "sektor_listrik": jamaika_listrik,
  "hunian": jamaika_hunian,
  "infrastruktur": jamaika_infrastruktur,
  "sektor_ekstraksi": jamaika_ekstraksi,
  "sektor_manufaktur": jamaika_manufaktur,
  "sektor_peternakan": jamaika_peternakan,
  "sektor_agrikultur": jamaika_agrikultur,
  "sektor_perikanan": jamaika_perikanan,
  "sektor_olahan_pangan": jamaika_olahan_pangan,
  "sektor_farmasi": jamaika_farmasi,
  "sektor_pertahanan": jamaika_pertahanan,
  "armada_militer": jamaika_armada,
  "militer_strategis": jamaika_strategis,
  "armada_kepolisian": jamaika_kepolisian,
  "pabrik_militer": jamaika_pabrik,
  "intelijen": jamaika_intelijen,
    "pendidikan": jamaika_pendidikan,
  "kesehatan": jamaika_kesehatan,
  "hukum": jamaika_hukum,
  "sektor_olahraga": jamaika_olahraga,
  "sektor_komersial": jamaika_komersial,
  "sektor_hiburan": jamaika_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 23,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 9,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 221.06,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": jamaika_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 34,
    "keamanan": 35,
    "keuangan": 14,
    "lingkungan": 60
  }
};


