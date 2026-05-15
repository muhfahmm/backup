export const barbados_profile = {
  "name_en": "Barbados",
  "capital": "Bridgetown",
  "name_id": "Barbados",
  "lon": -59.53333333,
  "lat": 13.16666666,
  "flag": "🇧🇧",
  "jumlah_penduduk": 267800,
  "anggaran": 53,
  "pendapatan_nasional": "153",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { barbados_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/155_barbados";
import { barbados_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/155_barbados";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { barbados_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/155_barbados";

import { barbados_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/155_barbados";
import { barbados_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/155_barbados";
import { barbados_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/155_barbados";
import { barbados_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/155_barbados";
import { barbados_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/155_barbados";
import { barbados_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/155_barbados";
import { barbados_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/155_barbados";
import { barbados_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/155_barbados";
import { barbados_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/155_barbados";
import { barbados_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/155_barbados";
import { barbados_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/155_barbados";
import { barbados_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/155_barbados";
import { barbados_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/155_barbados";
import { barbados_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/155_barbados";
import { barbados_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/155_barbados";
import { barbados_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/155_barbados";
import { barbados_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/155_barbados";
import { barbados_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/155_barbados";
import { barbados_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/155_barbados";
const barbados_geopolitik = {
    "un_vote": 10,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 4,
      "kekuatan_keras": 9,
      "prestise_diplomatik": 57
    }
  } as const;

export const barbados: CountryData = {
  ...barbados_profile,
  "sektor_listrik": barbados_listrik,
  "hunian": barbados_hunian,
  "infrastruktur": barbados_infrastruktur,
  "sektor_ekstraksi": barbados_ekstraksi,
  "sektor_manufaktur": barbados_manufaktur,
  "sektor_peternakan": barbados_peternakan,
  "sektor_agrikultur": barbados_agrikultur,
  "sektor_perikanan": barbados_perikanan,
  "sektor_olahan_pangan": barbados_olahan_pangan,
  "sektor_farmasi": barbados_farmasi,
  "sektor_pertahanan": barbados_pertahanan,
  "armada_militer": barbados_armada,
  "militer_strategis": barbados_strategis,
  "armada_kepolisian": barbados_kepolisian,
  "pabrik_militer": barbados_pabrik,
  "intelijen": barbados_intelijen,
    "pendidikan": barbados_pendidikan,
  "kesehatan": barbados_kesehatan,
  "hukum": barbados_hukum,
  "sektor_olahraga": barbados_olahraga,
  "sektor_komersial": barbados_komersial,
  "sektor_hiburan": barbados_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 9,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 28.8,
    "harga_telur": 31.1,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 78.95,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": barbados_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 4,
    "keamanan": 12,
    "keuangan": 26,
    "lingkungan": 60
  }
};


