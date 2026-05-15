export const palau_profile = {
  "name_en": "Palau",
  "capital": "Ngerulmud",
  "name_id": "Palau",
  "lon": 134.5,
  "lat": 7.5,
  "flag": "🇵🇼",
  "jumlah_penduduk": 16733,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { palau_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/oceania/186_palau";
import { palau_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/oceania/186_palau";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { palau_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/oceania/186_palau";

import { palau_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/oceania/186_palau";
import { palau_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/oceania/186_palau";
import { palau_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/oceania/186_palau";
import { palau_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/oceania/186_palau";
import { palau_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/oceania/186_palau";
import { palau_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/oceania/186_palau";
import { palau_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/oceania/186_palau";
import { palau_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/oceania/186_palau";
import { palau_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/oceania/186_palau";
import { palau_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/oceania/186_palau";
import { palau_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/oceania/186_palau";
import { palau_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/oceania/186_palau";
import { palau_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/oceania/186_palau";
import { palau_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/oceania/186_palau";
import { palau_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/oceania/186_palau";
import { palau_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/oceania/186_palau";
import { palau_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/oceania/186_palau";
import { palau_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/oceania/186_palau";
import { palau_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/oceania/186_palau";
const palau_geopolitik = {
    "un_vote": 44,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 34,
      "kekuatan_keras": 21,
      "prestise_diplomatik": 57
    }
  } as const;

export const palau: CountryData = {
  ...palau_profile,
  "sektor_listrik": palau_listrik,
  "hunian": palau_hunian,
  "infrastruktur": palau_infrastruktur,
  "sektor_ekstraksi": palau_ekstraksi,
  "sektor_manufaktur": palau_manufaktur,
  "sektor_peternakan": palau_peternakan,
  "sektor_agrikultur": palau_agrikultur,
  "sektor_perikanan": palau_perikanan,
  "sektor_olahan_pangan": palau_olahan_pangan,
  "sektor_farmasi": palau_farmasi,
  "sektor_pertahanan": palau_pertahanan,
  "armada_militer": palau_armada,
  "militer_strategis": palau_strategis,
  "armada_kepolisian": palau_kepolisian,
  "pabrik_militer": palau_pabrik,
  "intelijen": palau_intelijen,
    "pendidikan": palau_pendidikan,
  "kesehatan": palau_kesehatan,
  "hukum": palau_hukum,
  "sektor_olahraga": palau_olahraga,
  "sektor_komersial": palau_komersial,
  "sektor_hiburan": palau_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 33,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 5.2,
    "harga_obat": 315.8,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": palau_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 27,
    "keamanan": 34,
    "keuangan": 8,
    "lingkungan": 60
  }
};


