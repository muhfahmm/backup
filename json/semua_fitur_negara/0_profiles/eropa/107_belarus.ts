export const belarus_profile = {
  "name_en": "Belarus",
  "capital": "Minsk",
  "name_id": "Belarus",
  "lon": 28,
  "lat": 53,
  "flag": "🇧🇾",
  "jumlah_penduduk": 9056696,
  "anggaran": 681,
  "pendapatan_nasional": "1945",
  "religion": "Kristen Ortodoks",
  "ideology": "Nasionalisme"
} as const;

import { belarus_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/107_belarus";
import { belarus_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/107_belarus";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { belarus_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/107_belarus";

import { belarus_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/107_belarus";
import { belarus_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/107_belarus";
import { belarus_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/107_belarus";
import { belarus_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/107_belarus";
import { belarus_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/107_belarus";
import { belarus_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/107_belarus";
import { belarus_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/107_belarus";
import { belarus_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/107_belarus";
import { belarus_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/107_belarus";
import { belarus_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/107_belarus";
import { belarus_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/107_belarus";
import { belarus_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/107_belarus";
import { belarus_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/107_belarus";
import { belarus_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/107_belarus";
import { belarus_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/107_belarus";
import { belarus_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/107_belarus";
import { belarus_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/107_belarus";
import { belarus_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/107_belarus";
import { belarus_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/107_belarus";
const belarus_geopolitik = {
    "un_vote": 102,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
      "kekuatan_keras": 39,
      "prestise_diplomatik": 57
    }
  } as const;

export const belarus: CountryData = {
  ...belarus_profile,
  "sektor_listrik": belarus_listrik,
  "hunian": belarus_hunian,
  "infrastruktur": belarus_infrastruktur,
  "sektor_ekstraksi": belarus_ekstraksi,
  "sektor_manufaktur": belarus_manufaktur,
  "sektor_peternakan": belarus_peternakan,
  "sektor_agrikultur": belarus_agrikultur,
  "sektor_perikanan": belarus_perikanan,
  "sektor_olahan_pangan": belarus_olahan_pangan,
  "sektor_farmasi": belarus_farmasi,
  "sektor_pertahanan": belarus_pertahanan,
  "armada_militer": belarus_armada,
  "militer_strategis": belarus_strategis,
  "armada_kepolisian": belarus_kepolisian,
  "pabrik_militer": belarus_pabrik,
  "intelijen": belarus_intelijen,
    "pendidikan": belarus_pendidikan,
  "kesehatan": belarus_kesehatan,
  "hukum": belarus_hukum,
  "sektor_olahraga": belarus_olahraga,
  "sektor_komersial": belarus_komersial,
  "sektor_hiburan": belarus_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 18
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 48
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 64
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 7
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 53
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 208.2,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": belarus_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 21,
    "pendidikan": 1,
    "keamanan": 15,
    "keuangan": 39,
    "lingkungan": 60
  }
};


