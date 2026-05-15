export const yunani_profile = {
  "name_en": "Greece",
  "capital": "Athens",
  "name_id": "Yunani",
  "lon": 22,
  "lat": 39,
  "flag": "🇬🇷",
  "jumlah_penduduk": 10372335,
  "anggaran": 2236,
  "pendapatan_nasional": "6389",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi"
} as const;

import { yunani_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/151_yunani";
import { yunani_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/151_yunani";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { yunani_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/151_yunani";

import { yunani_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/151_yunani";
import { yunani_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/151_yunani";
import { yunani_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/151_yunani";
import { yunani_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/151_yunani";
import { yunani_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/151_yunani";
import { yunani_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/151_yunani";
import { yunani_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/151_yunani";
import { yunani_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/151_yunani";
import { yunani_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/151_yunani";
import { yunani_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/151_yunani";
import { yunani_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/151_yunani";
import { yunani_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/151_yunani";
import { yunani_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/151_yunani";
import { yunani_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/151_yunani";
import { yunani_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/151_yunani";
import { yunani_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/151_yunani";
import { yunani_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/151_yunani";
import { yunani_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/151_yunani";
import { yunani_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/151_yunani";
const yunani_geopolitik = {
    "un_vote": 179,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 27,
      "kekuatan_keras": 28,
      "prestise_diplomatik": 57
    }
  } as const;

export const yunani: CountryData = {
  ...yunani_profile,
  "sektor_listrik": yunani_listrik,
  "hunian": yunani_hunian,
  "infrastruktur": yunani_infrastruktur,
  "sektor_ekstraksi": yunani_ekstraksi,
  "sektor_manufaktur": yunani_manufaktur,
  "sektor_peternakan": yunani_peternakan,
  "sektor_agrikultur": yunani_agrikultur,
  "sektor_perikanan": yunani_perikanan,
  "sektor_olahan_pangan": yunani_olahan_pangan,
  "sektor_farmasi": yunani_farmasi,
  "sektor_pertahanan": yunani_pertahanan,
  "armada_militer": yunani_armada,
  "militer_strategis": yunani_strategis,
  "armada_kepolisian": yunani_kepolisian,
  "pabrik_militer": yunani_pabrik,
  "intelijen": yunani_intelijen,
    "pendidikan": yunani_pendidikan,
  "kesehatan": yunani_kesehatan,
  "hukum": yunani_hukum,
  "sektor_olahraga": yunani_olahraga,
  "sektor_komersial": yunani_komersial,
  "sektor_hiburan": yunani_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 90
    },
    "korporasi": {
      "tarif": 15,
      "kepuasan": 52,
      "pendapatan": 85
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 48
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 202
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 125
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 12 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 34 },
    "lainnya": {
      "tarif": 38,
      "kepuasan": 93,
      "pendapatan": 127
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 5.35,
    "harga_listrik": 1.28,
    "harga_air": 4.16,
    "harga_obat": 315.8,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": yunani_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 29,
    "pendidikan": 18,
    "keamanan": 12,
    "keuangan": 25,
    "lingkungan": 60
  }
};


