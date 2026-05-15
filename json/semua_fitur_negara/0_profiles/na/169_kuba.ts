export const kuba_profile = {
  "name_en": "Cuba",
  "capital": "Havana",
  "name_id": "Kuba",
  "lon": -80,
  "lat": 21.5,
  "flag": "🇨🇺",
  "jumlah_penduduk": 9748007,
  "anggaran": 1021,
  "pendapatan_nasional": "2917",
  "religion": "Katolik",
  "ideology": "Komunisme"
} as const;

import { kuba_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/169_kuba";
import { kuba_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/169_kuba";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { kuba_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/169_kuba";

import { kuba_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/169_kuba";
import { kuba_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/169_kuba";
import { kuba_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/169_kuba";
import { kuba_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/169_kuba";
import { kuba_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/169_kuba";
import { kuba_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/169_kuba";
import { kuba_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/169_kuba";
import { kuba_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/169_kuba";
import { kuba_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/169_kuba";
import { kuba_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/169_kuba";
import { kuba_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/169_kuba";
import { kuba_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/169_kuba";
import { kuba_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/169_kuba";
import { kuba_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/169_kuba";
import { kuba_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/169_kuba";
import { kuba_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/169_kuba";
import { kuba_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/169_kuba";
import { kuba_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/169_kuba";
import { kuba_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/169_kuba";
const kuba_geopolitik = {
    "un_vote": 171,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 39,
      "kekuatan_keras": 9,
      "prestise_diplomatik": 57
    }
  } as const;

export const kuba: CountryData = {
  ...kuba_profile,
  "sektor_listrik": kuba_listrik,
  "hunian": kuba_hunian,
  "infrastruktur": kuba_infrastruktur,
  "sektor_ekstraksi": kuba_ekstraksi,
  "sektor_manufaktur": kuba_manufaktur,
  "sektor_peternakan": kuba_peternakan,
  "sektor_agrikultur": kuba_agrikultur,
  "sektor_perikanan": kuba_perikanan,
  "sektor_olahan_pangan": kuba_olahan_pangan,
  "sektor_farmasi": kuba_farmasi,
  "sektor_pertahanan": kuba_pertahanan,
  "armada_militer": kuba_armada,
  "militer_strategis": kuba_strategis,
  "armada_kepolisian": kuba_kepolisian,
  "pabrik_militer": kuba_pabrik,
  "intelijen": kuba_intelijen,
    "pendidikan": kuba_pendidikan,
  "kesehatan": kuba_kesehatan,
  "hukum": kuba_hukum,
  "sektor_olahraga": kuba_olahraga,
  "sektor_komersial": kuba_komersial,
  "sektor_hiburan": kuba_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 22,
      "kepuasan": 52,
      "pendapatan": 26
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 68
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 110
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 71
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 16 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 33
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 5.35,
    "harga_listrik": 1.28,
    "harga_air": 7.28,
    "harga_obat": 221.06,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kuba_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 8,
    "pendidikan": 1,
    "keamanan": 31,
    "keuangan": 22,
    "lingkungan": 60
  }
};


