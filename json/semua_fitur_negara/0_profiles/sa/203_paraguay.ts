export const paraguay_profile = {
  "name_en": "Paraguay",
  "capital": "Asunción",
  "name_id": "Paraguay",
  "lon": -58,
  "lat": -23,
  "flag": "🇵🇾",
  "jumlah_penduduk": 6142180,
  "anggaran": 428,
  "pendapatan_nasional": "1222",
  "religion": "Katolik",
  "ideology": "Konservatisme"
} as const;

import { paraguay_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/sa/203_paraguay";
import { paraguay_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/sa/203_paraguay";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { paraguay_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/sa/203_paraguay";

import { paraguay_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/sa/203_paraguay";
import { paraguay_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/sa/203_paraguay";
import { paraguay_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/sa/203_paraguay";
import { paraguay_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/sa/203_paraguay";
import { paraguay_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/sa/203_paraguay";
import { paraguay_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/sa/203_paraguay";
import { paraguay_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/sa/203_paraguay";
import { paraguay_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/sa/203_paraguay";
import { paraguay_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/sa/203_paraguay";
import { paraguay_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/sa/203_paraguay";
import { paraguay_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/sa/203_paraguay";
import { paraguay_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/sa/203_paraguay";
import { paraguay_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/sa/203_paraguay";
import { paraguay_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/sa/203_paraguay";
import { paraguay_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/sa/203_paraguay";
import { paraguay_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/sa/203_paraguay";
import { paraguay_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/sa/203_paraguay";
import { paraguay_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/sa/203_paraguay";
import { paraguay_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/sa/203_paraguay";
const paraguay_geopolitik = {
    "un_vote": 71,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 6,
      "prestise_diplomatik": 57
    }
  } as const;

export const paraguay: CountryData = {
  ...paraguay_profile,
  "sektor_listrik": paraguay_listrik,
  "hunian": paraguay_hunian,
  "infrastruktur": paraguay_infrastruktur,
  "sektor_ekstraksi": paraguay_ekstraksi,
  "sektor_manufaktur": paraguay_manufaktur,
  "sektor_peternakan": paraguay_peternakan,
  "sektor_agrikultur": paraguay_agrikultur,
  "sektor_perikanan": paraguay_perikanan,
  "sektor_olahan_pangan": paraguay_olahan_pangan,
  "sektor_farmasi": paraguay_farmasi,
  "sektor_pertahanan": paraguay_pertahanan,
  "armada_militer": paraguay_armada,
  "militer_strategis": paraguay_strategis,
  "armada_kepolisian": paraguay_kepolisian,
  "pabrik_militer": paraguay_pabrik,
  "intelijen": paraguay_intelijen,
    "pendidikan": paraguay_pendidikan,
  "kesehatan": paraguay_kesehatan,
  "hukum": paraguay_hukum,
  "sektor_olahraga": paraguay_olahraga,
  "sektor_komersial": paraguay_komersial,
  "sektor_hiburan": paraguay_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 20,
      "kepuasan": 52,
      "pendapatan": 12
    },
    "penghasilan": {
      "tarif": 37,
      "kepuasan": 61,
      "pendapatan": 30
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 14
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 29
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 82,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 11.52,
    "harga_telur": 43.54,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 4.16,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": paraguay_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 40,
    "pendidikan": 7,
    "keamanan": 27,
    "keuangan": 4,
    "lingkungan": 60
  }
};


