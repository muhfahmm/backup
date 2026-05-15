export const kepulauan_faroe_profile = {
  "name_en": "Faroe Islands",
  "capital": "Tórshavn",
  "name_id": "Kepulauan faroe",
  "lon": -7,
  "lat": 62,
  "flag": "🇫🇴",
  "jumlah_penduduk": 53429,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { kepulauan_faroe_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/122_kepulauan_faroe";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { kepulauan_faroe_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/122_kepulauan_faroe";

import { kepulauan_faroe_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/122_kepulauan_faroe";
const kepulauan_faroe_geopolitik = {
    "un_vote": 18,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 9,
      "kekuatan_keras": 16,
      "prestise_diplomatik": 57
    }
  } as const;

export const kepulauan_faroe: CountryData = {
  ...kepulauan_faroe_profile,
  "sektor_listrik": kepulauan_faroe_listrik,
  "hunian": kepulauan_faroe_hunian,
  "infrastruktur": kepulauan_faroe_infrastruktur,
  "sektor_ekstraksi": kepulauan_faroe_ekstraksi,
  "sektor_manufaktur": kepulauan_faroe_manufaktur,
  "sektor_peternakan": kepulauan_faroe_peternakan,
  "sektor_agrikultur": kepulauan_faroe_agrikultur,
  "sektor_perikanan": kepulauan_faroe_perikanan,
  "sektor_olahan_pangan": kepulauan_faroe_olahan_pangan,
  "sektor_farmasi": kepulauan_faroe_farmasi,
  "sektor_pertahanan": kepulauan_faroe_pertahanan,
  "armada_militer": kepulauan_faroe_armada,
  "militer_strategis": kepulauan_faroe_strategis,
  "armada_kepolisian": kepulauan_faroe_kepolisian,
  "pabrik_militer": kepulauan_faroe_pabrik,
  "intelijen": kepulauan_faroe_intelijen,
    "pendidikan": kepulauan_faroe_pendidikan,
  "kesehatan": kepulauan_faroe_kesehatan,
  "hukum": kepulauan_faroe_hukum,
  "sektor_olahraga": kepulauan_faroe_olahraga,
  "sektor_komersial": kepulauan_faroe_komersial,
  "sektor_hiburan": kepulauan_faroe_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 34,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 28.8,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kepulauan_faroe_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 30,
    "pendidikan": 32,
    "keamanan": 9,
    "keuangan": 17,
    "lingkungan": 60
  }
};


