export const papua_nugini_profile = {
  "name_en": "Papua New Guinea",
  "capital": "Port Moresby",
  "name_id": "Papua nugini",
  "lon": 147,
  "lat": -6,
  "flag": "🇵🇬",
  "jumlah_penduduk": 10499000,
  "anggaran": 292,
  "pendapatan_nasional": "833",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { papua_nugini_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/oceania/187_papua_nugini";
import { papua_nugini_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/oceania/187_papua_nugini";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { papua_nugini_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/oceania/187_papua_nugini";

import { papua_nugini_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/oceania/187_papua_nugini";
import { papua_nugini_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/oceania/187_papua_nugini";
import { papua_nugini_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/oceania/187_papua_nugini";
import { papua_nugini_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/oceania/187_papua_nugini";
import { papua_nugini_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/oceania/187_papua_nugini";
import { papua_nugini_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/oceania/187_papua_nugini";
import { papua_nugini_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/oceania/187_papua_nugini";
import { papua_nugini_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/oceania/187_papua_nugini";
import { papua_nugini_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/oceania/187_papua_nugini";
import { papua_nugini_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/oceania/187_papua_nugini";
import { papua_nugini_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/oceania/187_papua_nugini";
import { papua_nugini_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/oceania/187_papua_nugini";
import { papua_nugini_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/oceania/187_papua_nugini";
import { papua_nugini_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/oceania/187_papua_nugini";
import { papua_nugini_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/oceania/187_papua_nugini";
import { papua_nugini_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/oceania/187_papua_nugini";
import { papua_nugini_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/oceania/187_papua_nugini";
import { papua_nugini_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/oceania/187_papua_nugini";
import { papua_nugini_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/oceania/187_papua_nugini";
const papua_nugini_geopolitik = {
    "un_vote": 130,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 6,
      "prestise_diplomatik": 57
    }
  } as const;

export const papua_nugini: CountryData = {
  ...papua_nugini_profile,
  "sektor_listrik": papua_nugini_listrik,
  "hunian": papua_nugini_hunian,
  "infrastruktur": papua_nugini_infrastruktur,
  "sektor_ekstraksi": papua_nugini_ekstraksi,
  "sektor_manufaktur": papua_nugini_manufaktur,
  "sektor_peternakan": papua_nugini_peternakan,
  "sektor_agrikultur": papua_nugini_agrikultur,
  "sektor_perikanan": papua_nugini_perikanan,
  "sektor_olahan_pangan": papua_nugini_olahan_pangan,
  "sektor_farmasi": papua_nugini_farmasi,
  "sektor_pertahanan": papua_nugini_pertahanan,
  "armada_militer": papua_nugini_armada,
  "militer_strategis": papua_nugini_strategis,
  "armada_kepolisian": papua_nugini_kepolisian,
  "pabrik_militer": papua_nugini_pabrik,
  "intelijen": papua_nugini_intelijen,
    "pendidikan": papua_nugini_pendidikan,
  "kesehatan": papua_nugini_kesehatan,
  "hukum": papua_nugini_hukum,
  "sektor_olahraga": papua_nugini_olahraga,
  "sektor_komersial": papua_nugini_komersial,
  "sektor_hiburan": papua_nugini_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 9
    },
    "bea_cukai": {
      "tarif": 3,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 13
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 31,
      "kepuasan": 93,
      "pendapatan": 23
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 43.54,
    "harga_bbm": 8.56,
    "harga_listrik": 1.28,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": papua_nugini_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 10,
    "pendidikan": 21,
    "keamanan": 37,
    "keuangan": 23,
    "lingkungan": 60
  }
};


