export const tahiti_profile = {
  "name_en": "French Polynesia",
  "capital": "Papeetē",
  "name_id": "Tahiti",
  "lon": -140,
  "lat": -15,
  "flag": "🇵🇫",
  "jumlah_penduduk": 308872,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { tahiti_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/oceania/191_tahiti";
import { tahiti_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/oceania/191_tahiti";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { tahiti_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/oceania/191_tahiti";

import { tahiti_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/oceania/191_tahiti";
import { tahiti_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/oceania/191_tahiti";
import { tahiti_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/oceania/191_tahiti";
import { tahiti_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/oceania/191_tahiti";
import { tahiti_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/oceania/191_tahiti";
import { tahiti_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/oceania/191_tahiti";
import { tahiti_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/oceania/191_tahiti";
import { tahiti_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/oceania/191_tahiti";
import { tahiti_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/oceania/191_tahiti";
import { tahiti_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/oceania/191_tahiti";
import { tahiti_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/oceania/191_tahiti";
import { tahiti_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/oceania/191_tahiti";
import { tahiti_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/oceania/191_tahiti";
import { tahiti_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/oceania/191_tahiti";
import { tahiti_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/oceania/191_tahiti";
import { tahiti_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/oceania/191_tahiti";
import { tahiti_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/oceania/191_tahiti";
import { tahiti_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/oceania/191_tahiti";
import { tahiti_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/oceania/191_tahiti";
const tahiti_geopolitik = {
    "un_vote": 81,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 14,
      "kekuatan_keras": 37,
      "prestise_diplomatik": 57
    }
  } as const;

export const tahiti: CountryData = {
  ...tahiti_profile,
  "sektor_listrik": tahiti_listrik,
  "hunian": tahiti_hunian,
  "infrastruktur": tahiti_infrastruktur,
  "sektor_ekstraksi": tahiti_ekstraksi,
  "sektor_manufaktur": tahiti_manufaktur,
  "sektor_peternakan": tahiti_peternakan,
  "sektor_agrikultur": tahiti_agrikultur,
  "sektor_perikanan": tahiti_perikanan,
  "sektor_olahan_pangan": tahiti_olahan_pangan,
  "sektor_farmasi": tahiti_farmasi,
  "sektor_pertahanan": tahiti_pertahanan,
  "armada_militer": tahiti_armada,
  "militer_strategis": tahiti_strategis,
  "armada_kepolisian": tahiti_kepolisian,
  "pabrik_militer": tahiti_pabrik,
  "intelijen": tahiti_intelijen,
    "pendidikan": tahiti_pendidikan,
  "kesehatan": tahiti_kesehatan,
  "hukum": tahiti_hukum,
  "sektor_olahraga": tahiti_olahraga,
  "sektor_komersial": tahiti_komersial,
  "sektor_hiburan": tahiti_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 4
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 677.46
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": tahiti_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 38,
    "pendidikan": 10,
    "keamanan": 18,
    "keuangan": 37,
    "lingkungan": 60
  }
};


