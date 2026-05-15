export const brazil_profile = {
  "name_en": "Brazil",
  "capital": "Brasília",
  "name_id": "Brazil",
  "lon": -47.88,
  "lat": -15.79,
  "flag": "🇧🇷",
  "jumlah_penduduk": 213421037,
  "anggaran": 22655,
  "pendapatan_nasional": "64727",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { brazil_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/sa/197_brazil";
import { brazil_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/sa/197_brazil";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { brazil_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/sa/197_brazil";

import { brazil_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/sa/197_brazil";
import { brazil_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/sa/197_brazil";
import { brazil_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/sa/197_brazil";
import { brazil_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/sa/197_brazil";
import { brazil_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/sa/197_brazil";
import { brazil_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/sa/197_brazil";
import { brazil_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/sa/197_brazil";
import { brazil_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/sa/197_brazil";
import { brazil_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/sa/197_brazil";
import { brazil_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/sa/197_brazil";
import { brazil_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/sa/197_brazil";
import { brazil_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/sa/197_brazil";
import { brazil_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/sa/197_brazil";
import { brazil_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/sa/197_brazil";
import { brazil_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/sa/197_brazil";
import { brazil_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/sa/197_brazil";
import { brazil_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/sa/197_brazil";
import { brazil_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/sa/197_brazil";
import { brazil_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/sa/197_brazil";
const brazil_geopolitik = {
    "un_vote": 206,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 33,
      "kekuatan_keras": 28,
      "prestise_diplomatik": 57
    }
  } as const;

export const brazil: CountryData = {
  ...brazil_profile,
  "sektor_listrik": brazil_listrik,
  "hunian": brazil_hunian,
  "infrastruktur": brazil_infrastruktur,
  "sektor_ekstraksi": brazil_ekstraksi,
  "sektor_manufaktur": brazil_manufaktur,
  "sektor_peternakan": brazil_peternakan,
  "sektor_agrikultur": brazil_agrikultur,
  "sektor_perikanan": brazil_perikanan,
  "sektor_olahan_pangan": brazil_olahan_pangan,
  "sektor_farmasi": brazil_farmasi,
  "sektor_pertahanan": brazil_pertahanan,
  "armada_militer": brazil_armada,
  "militer_strategis": brazil_strategis,
  "armada_kepolisian": brazil_kepolisian,
  "pabrik_militer": brazil_pabrik,
  "intelijen": brazil_intelijen,
    "pendidikan": brazil_pendidikan,
  "kesehatan": brazil_kesehatan,
  "hukum": brazil_hukum,
  "sektor_olahraga": brazil_olahraga,
  "sektor_komersial": brazil_komersial,
  "sektor_hiburan": brazil_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 594
    },
    "korporasi": {
      "tarif": 4,
      "kepuasan": 52,
      "pendapatan": 159
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 213
    },
    "bea_cukai": {
      "tarif": 20,
      "kepuasan": 86,
      "pendapatan": 1246
    },
    "lingkungan": {
      "tarif": 24,
      "kepuasan": 88,
      "pendapatan": 1341
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 114 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 340 },
    "lainnya": {
      "tarif": 3,
      "kepuasan": 93,
      "pendapatan": 95
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 126.32,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": brazil_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 10,
    "pendidikan": 31,
    "keamanan": 39,
    "keuangan": 36,
    "lingkungan": 60
  }
};


