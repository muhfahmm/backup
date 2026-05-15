export const kenya_profile = {
  "name_en": "Kenya",
  "capital": "Nairobi",
  "name_id": "Kenya",
  "lon": 38,
  "lat": 1,
  "flag": "🇰🇪",
  "jumlah_penduduk": 53330978,
  "anggaran": 1070,
  "pendapatan_nasional": "3056",
  "religion": "Protestan",
  "ideology": "Kapitalisme"
} as const;

import { kenya_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/19_kenya";
import { kenya_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/19_kenya";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { kenya_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/19_kenya";

import { kenya_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/19_kenya";
import { kenya_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/19_kenya";
import { kenya_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/19_kenya";
import { kenya_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/19_kenya";
import { kenya_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/19_kenya";
import { kenya_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/19_kenya";
import { kenya_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/19_kenya";
import { kenya_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/19_kenya";
import { kenya_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/19_kenya";
import { kenya_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/19_kenya";
import { kenya_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/19_kenya";
import { kenya_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/19_kenya";
import { kenya_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/19_kenya";
import { kenya_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/19_kenya";
import { kenya_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/19_kenya";
import { kenya_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/19_kenya";
import { kenya_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/19_kenya";
import { kenya_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/19_kenya";
import { kenya_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/19_kenya";
const kenya_geopolitik = {
    "un_vote": 169,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 31,
      "kekuatan_keras": 18,
      "prestise_diplomatik": 57
  }
  } as const;

export const kenya: CountryData = {
  ...kenya_profile,
  "sektor_listrik": kenya_listrik,
  "hunian": kenya_hunian,
  "infrastruktur": kenya_infrastruktur,
  "sektor_ekstraksi": kenya_ekstraksi,
  "sektor_manufaktur": kenya_manufaktur,
  "sektor_peternakan": kenya_peternakan,
  "sektor_agrikultur": kenya_agrikultur,
  "sektor_perikanan": kenya_perikanan,
  "sektor_olahan_pangan": kenya_olahan_pangan,
  "sektor_farmasi": kenya_farmasi,
  "sektor_pertahanan": kenya_pertahanan,
  "armada_militer": kenya_armada,
  "militer_strategis": kenya_strategis,
  "armada_kepolisian": kenya_kepolisian,
  "pabrik_militer": kenya_pabrik,
  "intelijen": kenya_intelijen,
    "pendidikan": kenya_pendidikan,
  "kesehatan": kenya_kesehatan,
  "hukum": kenya_hukum,
  "sektor_olahraga": kenya_olahraga,
  "sektor_komersial": kenya_komersial,
  "sektor_hiburan": kenya_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 55
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 95
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 49
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 78
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 15
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 17 },
    "lainnya": {
      "tarif": 3,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 28.8,
    "harga_telur": 43.54,
    "harga_bbm": 14.98,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 221.06,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kenya_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 5,
    "keamanan": 40,
    "keuangan": 23,
    "lingkungan": 60
  }
};


