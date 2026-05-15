export const tuvalu_profile = {
  "name_en": "Tuvalu",
  "capital": "Funafuti",
  "name_id": "Tuvalu",
  "lon": 178,
  "lat": -8,
  "flag": "🇹🇻",
  "jumlah_penduduk": 10643,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { tuvalu_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/oceania/193_tuvalu";
import { tuvalu_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/oceania/193_tuvalu";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { tuvalu_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/oceania/193_tuvalu";

import { tuvalu_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/oceania/193_tuvalu";
import { tuvalu_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/oceania/193_tuvalu";
import { tuvalu_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/oceania/193_tuvalu";
import { tuvalu_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/oceania/193_tuvalu";
import { tuvalu_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/oceania/193_tuvalu";
import { tuvalu_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/oceania/193_tuvalu";
import { tuvalu_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/oceania/193_tuvalu";
import { tuvalu_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/oceania/193_tuvalu";
import { tuvalu_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/oceania/193_tuvalu";
import { tuvalu_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/oceania/193_tuvalu";
import { tuvalu_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/oceania/193_tuvalu";
import { tuvalu_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/oceania/193_tuvalu";
import { tuvalu_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/oceania/193_tuvalu";
import { tuvalu_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/oceania/193_tuvalu";
import { tuvalu_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/oceania/193_tuvalu";
import { tuvalu_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/oceania/193_tuvalu";
import { tuvalu_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/oceania/193_tuvalu";
import { tuvalu_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/oceania/193_tuvalu";
import { tuvalu_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/oceania/193_tuvalu";
const tuvalu_geopolitik = {
    "un_vote": 29,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 27,
      "kekuatan_keras": 27,
      "prestise_diplomatik": 57
    }
  } as const;

export const tuvalu: CountryData = {
  ...tuvalu_profile,
  "sektor_listrik": tuvalu_listrik,
  "hunian": tuvalu_hunian,
  "infrastruktur": tuvalu_infrastruktur,
  "sektor_ekstraksi": tuvalu_ekstraksi,
  "sektor_manufaktur": tuvalu_manufaktur,
  "sektor_peternakan": tuvalu_peternakan,
  "sektor_agrikultur": tuvalu_agrikultur,
  "sektor_perikanan": tuvalu_perikanan,
  "sektor_olahan_pangan": tuvalu_olahan_pangan,
  "sektor_farmasi": tuvalu_farmasi,
  "sektor_pertahanan": tuvalu_pertahanan,
  "armada_militer": tuvalu_armada,
  "militer_strategis": tuvalu_strategis,
  "armada_kepolisian": tuvalu_kepolisian,
  "pabrik_militer": tuvalu_pabrik,
  "intelijen": tuvalu_intelijen,
    "pendidikan": tuvalu_pendidikan,
  "kesehatan": tuvalu_kesehatan,
  "hukum": tuvalu_hukum,
  "sektor_olahraga": tuvalu_olahraga,
  "sektor_komersial": tuvalu_komersial,
  "sektor_hiburan": tuvalu_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 22,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 14,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 4,
      "kepuasan": 93,
      "pendapatan": 0
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
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 10.4,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": tuvalu_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 31,
    "pendidikan": 22,
    "keamanan": 16,
    "keuangan": 21,
    "lingkungan": 60
  }
};


