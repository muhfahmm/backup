export const guatemala_profile = {
  "name_en": "Guatemala",
  "capital": "Guatemala City",
  "name_id": "Guatemala",
  "lon": -90.25,
  "lat": 15.5,
  "flag": "🇬🇹",
  "jumlah_penduduk": 18312373,
  "anggaran": 924,
  "pendapatan_nasional": "2639",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { guatemala_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/164_guatemala";
import { guatemala_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/164_guatemala";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { guatemala_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/164_guatemala";

import { guatemala_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/164_guatemala";
import { guatemala_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/164_guatemala";
import { guatemala_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/164_guatemala";
import { guatemala_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/164_guatemala";
import { guatemala_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/164_guatemala";
import { guatemala_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/164_guatemala";
import { guatemala_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/164_guatemala";
import { guatemala_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/164_guatemala";
import { guatemala_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/164_guatemala";
import { guatemala_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/164_guatemala";
import { guatemala_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/164_guatemala";
import { guatemala_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/164_guatemala";
import { guatemala_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/164_guatemala";
import { guatemala_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/164_guatemala";
import { guatemala_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/164_guatemala";
import { guatemala_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/164_guatemala";
import { guatemala_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/164_guatemala";
import { guatemala_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/164_guatemala";
import { guatemala_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/164_guatemala";
const guatemala_geopolitik = {
    "un_vote": 142,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 31,
      "kekuatan_keras": 5,
      "prestise_diplomatik": 57
    }
  } as const;

export const guatemala: CountryData = {
  ...guatemala_profile,
  "sektor_listrik": guatemala_listrik,
  "hunian": guatemala_hunian,
  "infrastruktur": guatemala_infrastruktur,
  "sektor_ekstraksi": guatemala_ekstraksi,
  "sektor_manufaktur": guatemala_manufaktur,
  "sektor_peternakan": guatemala_peternakan,
  "sektor_agrikultur": guatemala_agrikultur,
  "sektor_perikanan": guatemala_perikanan,
  "sektor_olahan_pangan": guatemala_olahan_pangan,
  "sektor_farmasi": guatemala_farmasi,
  "sektor_pertahanan": guatemala_pertahanan,
  "armada_militer": guatemala_armada,
  "militer_strategis": guatemala_strategis,
  "armada_kepolisian": guatemala_kepolisian,
  "pabrik_militer": guatemala_pabrik,
  "intelijen": guatemala_intelijen,
    "pendidikan": guatemala_pendidikan,
  "kesehatan": guatemala_kesehatan,
  "hukum": guatemala_hukum,
  "sektor_olahraga": guatemala_olahraga,
  "sektor_komersial": guatemala_komersial,
  "sektor_hiburan": guatemala_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 31
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 61
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 26
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 39
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 14 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 61
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 0.8,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": guatemala_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 15,
    "pendidikan": 20,
    "keamanan": 37,
    "keuangan": 1,
    "lingkungan": 60
  }
};


