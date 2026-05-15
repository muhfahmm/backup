export const italia_profile = {
  "name_en": "Italy",
  "capital": "Rome",
  "name_id": "Italia",
  "lon": 12.49,
  "lat": 41.9,
  "flag": "🇮🇹",
  "jumlah_penduduk": 58931425,
  "anggaran": 22655,
  "pendapatan_nasional": "64727",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { italia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/120_italia";
import { italia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/120_italia";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { italia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/120_italia";

import { italia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/120_italia";
import { italia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/120_italia";
import { italia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/120_italia";
import { italia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/120_italia";
import { italia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/120_italia";
import { italia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/120_italia";
import { italia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/120_italia";
import { italia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/120_italia";
import { italia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/120_italia";
import { italia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/120_italia";
import { italia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/120_italia";
import { italia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/120_italia";
import { italia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/120_italia";
import { italia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/120_italia";
import { italia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/120_italia";
import { italia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/120_italia";
import { italia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/120_italia";
import { italia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/120_italia";
import { italia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/120_italia";
const italia_geopolitik = {
    "un_vote": 146,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 5,
      "kekuatan_keras": 22,
      "prestise_diplomatik": 57
    }
  } as const;

export const italia: CountryData = {
  ...italia_profile,
  "sektor_listrik": italia_listrik,
  "hunian": italia_hunian,
  "infrastruktur": italia_infrastruktur,
  "sektor_ekstraksi": italia_ekstraksi,
  "sektor_manufaktur": italia_manufaktur,
  "sektor_peternakan": italia_peternakan,
  "sektor_agrikultur": italia_agrikultur,
  "sektor_perikanan": italia_perikanan,
  "sektor_olahan_pangan": italia_olahan_pangan,
  "sektor_farmasi": italia_farmasi,
  "sektor_pertahanan": italia_pertahanan,
  "armada_militer": italia_armada,
  "militer_strategis": italia_strategis,
  "armada_kepolisian": italia_kepolisian,
  "pabrik_militer": italia_pabrik,
  "intelijen": italia_intelijen,
    "pendidikan": italia_pendidikan,
  "kesehatan": italia_kesehatan,
  "hukum": italia_hukum,
  "sektor_olahraga": italia_olahraga,
  "sektor_komersial": italia_komersial,
  "sektor_hiburan": italia_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 1599
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 1766
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 2288
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 1840
    },
    "lingkungan": {
      "tarif": 27,
      "kepuasan": 88,
      "pendapatan": 1486
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 114 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 340 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 469
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 28.8,
    "harga_telur": 24.88,
    "harga_bbm": 21.4,
    "harga_listrik": 0.8,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": italia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 36,
    "pendidikan": 28,
    "keamanan": 40,
    "keuangan": 18,
    "lingkungan": 60
  }
};


