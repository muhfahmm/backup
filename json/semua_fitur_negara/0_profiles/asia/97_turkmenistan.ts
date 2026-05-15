export const turkmenistan_profile = {
  "name_en": "Turkmenistan",
  "capital": "Ashgabat",
  "name_id": "Turkmenistan",
  "lon": 60,
  "lat": 40,
  "flag": "🇹🇲",
  "jumlah_penduduk": 6500000,
  "anggaran": 438,
  "pendapatan_nasional": "1250",
  "religion": "Islam",
  "ideology": "Nasionalisme"
} as const;

import { turkmenistan_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/97_turkmenistan";
import { turkmenistan_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/97_turkmenistan";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { turkmenistan_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/97_turkmenistan";

import { turkmenistan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/97_turkmenistan";
import { turkmenistan_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/97_turkmenistan";
import { turkmenistan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/97_turkmenistan";
import { turkmenistan_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/97_turkmenistan";
import { turkmenistan_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/97_turkmenistan";
import { turkmenistan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/97_turkmenistan";
import { turkmenistan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/97_turkmenistan";
import { turkmenistan_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/97_turkmenistan";
import { turkmenistan_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/97_turkmenistan";
import { turkmenistan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/97_turkmenistan";
import { turkmenistan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/97_turkmenistan";
import { turkmenistan_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/97_turkmenistan";
import { turkmenistan_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/97_turkmenistan";
import { turkmenistan_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/97_turkmenistan";
import { turkmenistan_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/97_turkmenistan";
import { turkmenistan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/97_turkmenistan";
import { turkmenistan_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/97_turkmenistan";
import { turkmenistan_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/97_turkmenistan";
import { turkmenistan_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/97_turkmenistan";
const turkmenistan_geopolitik = {
    "un_vote": 133,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 25,
      "kekuatan_keras": 22,
      "prestise_diplomatik": 57
    }
  } as const;

export const turkmenistan: CountryData = {
  ...turkmenistan_profile,
  "sektor_listrik": turkmenistan_listrik,
  "hunian": turkmenistan_hunian,
  "infrastruktur": turkmenistan_infrastruktur,
  "sektor_ekstraksi": turkmenistan_ekstraksi,
  "sektor_manufaktur": turkmenistan_manufaktur,
  "sektor_peternakan": turkmenistan_peternakan,
  "sektor_agrikultur": turkmenistan_agrikultur,
  "sektor_perikanan": turkmenistan_perikanan,
  "sektor_olahan_pangan": turkmenistan_olahan_pangan,
  "sektor_farmasi": turkmenistan_farmasi,
  "sektor_pertahanan": turkmenistan_pertahanan,
  "armada_militer": turkmenistan_armada,
  "militer_strategis": turkmenistan_strategis,
  "armada_kepolisian": turkmenistan_kepolisian,
  "pabrik_militer": turkmenistan_pabrik,
  "intelijen": turkmenistan_intelijen,
    "pendidikan": turkmenistan_pendidikan,
  "kesehatan": turkmenistan_kesehatan,
  "hukum": turkmenistan_hukum,
  "sektor_olahraga": turkmenistan_olahraga,
  "sektor_komersial": turkmenistan_komersial,
  "sektor_hiburan": turkmenistan_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 14
    },
    "korporasi": {
      "tarif": 34,
      "kepuasan": 52,
      "pendapatan": 25
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 38
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 14
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 35
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 30
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 0.8,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": turkmenistan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 26,
    "pendidikan": 17,
    "keamanan": 12,
    "keuangan": 24,
    "lingkungan": 60
  }
};


