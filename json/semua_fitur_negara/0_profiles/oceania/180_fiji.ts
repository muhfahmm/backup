export const fiji_profile = {
  "name_en": "Fiji",
  "capital": "Suva",
  "name_id": "Fiji",
  "lon": 175,
  "lat": -18,
  "flag": "🇫🇯",
  "jumlah_penduduk": 902623,
  "anggaran": 49,
  "pendapatan_nasional": "139",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { fiji_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/oceania/180_fiji";
import { fiji_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/oceania/180_fiji";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { fiji_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/oceania/180_fiji";

import { fiji_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/oceania/180_fiji";
import { fiji_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/oceania/180_fiji";
import { fiji_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/oceania/180_fiji";
import { fiji_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/oceania/180_fiji";
import { fiji_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/oceania/180_fiji";
import { fiji_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/oceania/180_fiji";
import { fiji_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/oceania/180_fiji";
import { fiji_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/oceania/180_fiji";
import { fiji_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/oceania/180_fiji";
import { fiji_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/oceania/180_fiji";
import { fiji_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/oceania/180_fiji";
import { fiji_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/oceania/180_fiji";
import { fiji_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/oceania/180_fiji";
import { fiji_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/oceania/180_fiji";
import { fiji_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/oceania/180_fiji";
import { fiji_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/oceania/180_fiji";
import { fiji_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/oceania/180_fiji";
import { fiji_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/oceania/180_fiji";
import { fiji_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/oceania/180_fiji";
const fiji_geopolitik = {
    "un_vote": 113,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 37,
      "kekuatan_keras": 16,
      "prestise_diplomatik": 57
    }
  } as const;

export const fiji: CountryData = {
  ...fiji_profile,
  "sektor_listrik": fiji_listrik,
  "hunian": fiji_hunian,
  "infrastruktur": fiji_infrastruktur,
  "sektor_ekstraksi": fiji_ekstraksi,
  "sektor_manufaktur": fiji_manufaktur,
  "sektor_peternakan": fiji_peternakan,
  "sektor_agrikultur": fiji_agrikultur,
  "sektor_perikanan": fiji_perikanan,
  "sektor_olahan_pangan": fiji_olahan_pangan,
  "sektor_farmasi": fiji_farmasi,
  "sektor_pertahanan": fiji_pertahanan,
  "armada_militer": fiji_armada,
  "militer_strategis": fiji_strategis,
  "armada_kepolisian": fiji_kepolisian,
  "pabrik_militer": fiji_pabrik,
  "intelijen": fiji_intelijen,
    "pendidikan": fiji_pendidikan,
  "kesehatan": fiji_kesehatan,
  "hukum": fiji_hukum,
  "sektor_olahraga": fiji_olahraga,
  "sektor_komersial": fiji_komersial,
  "sektor_hiburan": fiji_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 4,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 20,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 4,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 82,
    "harga_minyak_goreng": 21.56,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 2.24,
    "harga_air": 7.28,
    "harga_obat": 157.9,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": fiji_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 8,
    "pendidikan": 4,
    "keamanan": 17,
    "keuangan": 18,
    "lingkungan": 60
  }
};


