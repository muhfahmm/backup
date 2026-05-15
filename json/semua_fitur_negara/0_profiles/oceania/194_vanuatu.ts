export const vanuatu_profile = {
  "name_en": "Vanuatu",
  "capital": "Port Vila",
  "name_id": "Vanuatu",
  "lon": 167,
  "lat": -16,
  "flag": "🇻🇺",
  "jumlah_penduduk": 321409,
  "anggaran": 10,
  "pendapatan_nasional": "28",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { vanuatu_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/oceania/194_vanuatu";
import { vanuatu_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/oceania/194_vanuatu";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { vanuatu_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/oceania/194_vanuatu";

import { vanuatu_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/oceania/194_vanuatu";
import { vanuatu_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/oceania/194_vanuatu";
import { vanuatu_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/oceania/194_vanuatu";
import { vanuatu_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/oceania/194_vanuatu";
import { vanuatu_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/oceania/194_vanuatu";
import { vanuatu_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/oceania/194_vanuatu";
import { vanuatu_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/oceania/194_vanuatu";
import { vanuatu_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/oceania/194_vanuatu";
import { vanuatu_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/oceania/194_vanuatu";
import { vanuatu_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/oceania/194_vanuatu";
import { vanuatu_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/oceania/194_vanuatu";
import { vanuatu_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/oceania/194_vanuatu";
import { vanuatu_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/oceania/194_vanuatu";
import { vanuatu_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/oceania/194_vanuatu";
import { vanuatu_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/oceania/194_vanuatu";
import { vanuatu_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/oceania/194_vanuatu";
import { vanuatu_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/oceania/194_vanuatu";
import { vanuatu_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/oceania/194_vanuatu";
import { vanuatu_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/oceania/194_vanuatu";
const vanuatu_geopolitik = {
    "un_vote": 1,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 4,
      "kekuatan_keras": 10,
      "prestise_diplomatik": 57
    }
  } as const;

export const vanuatu: CountryData = {
  ...vanuatu_profile,
  "sektor_listrik": vanuatu_listrik,
  "hunian": vanuatu_hunian,
  "infrastruktur": vanuatu_infrastruktur,
  "sektor_ekstraksi": vanuatu_ekstraksi,
  "sektor_manufaktur": vanuatu_manufaktur,
  "sektor_peternakan": vanuatu_peternakan,
  "sektor_agrikultur": vanuatu_agrikultur,
  "sektor_perikanan": vanuatu_perikanan,
  "sektor_olahan_pangan": vanuatu_olahan_pangan,
  "sektor_farmasi": vanuatu_farmasi,
  "sektor_pertahanan": vanuatu_pertahanan,
  "armada_militer": vanuatu_armada,
  "militer_strategis": vanuatu_strategis,
  "armada_kepolisian": vanuatu_kepolisian,
  "pabrik_militer": vanuatu_pabrik,
  "intelijen": vanuatu_intelijen,
    "pendidikan": vanuatu_pendidikan,
  "kesehatan": vanuatu_kesehatan,
  "hukum": vanuatu_hukum,
  "sektor_olahraga": vanuatu_olahraga,
  "sektor_komersial": vanuatu_komersial,
  "sektor_hiburan": vanuatu_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 5.35,
    "harga_listrik": 3.2,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": vanuatu_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 1,
    "pendidikan": 10,
    "keamanan": 39,
    "keuangan": 34,
    "lingkungan": 60
  }
};


