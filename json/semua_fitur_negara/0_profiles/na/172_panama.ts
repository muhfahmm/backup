export const panama_profile = {
  "name_en": "Panama",
  "capital": "Panama City",
  "name_id": "Panama",
  "lon": -80,
  "lat": 9,
  "flag": "🇵🇦",
  "jumlah_penduduk": 4064780,
  "anggaran": 739,
  "pendapatan_nasional": "2111",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { panama_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/172_panama";
import { panama_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/172_panama";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { panama_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/172_panama";

import { panama_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/172_panama";
import { panama_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/172_panama";
import { panama_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/172_panama";
import { panama_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/172_panama";
import { panama_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/172_panama";
import { panama_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/172_panama";
import { panama_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/172_panama";
import { panama_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/172_panama";
import { panama_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/172_panama";
import { panama_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/172_panama";
import { panama_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/172_panama";
import { panama_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/172_panama";
import { panama_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/172_panama";
import { panama_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/172_panama";
import { panama_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/172_panama";
import { panama_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/172_panama";
import { panama_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/172_panama";
import { panama_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/172_panama";
import { panama_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/172_panama";
const panama_geopolitik = {
    "un_vote": 120,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 30,
      "kekuatan_keras": 15,
      "prestise_diplomatik": 57
    }
  } as const;

export const panama: CountryData = {
  ...panama_profile,
  "sektor_listrik": panama_listrik,
  "hunian": panama_hunian,
  "infrastruktur": panama_infrastruktur,
  "sektor_ekstraksi": panama_ekstraksi,
  "sektor_manufaktur": panama_manufaktur,
  "sektor_peternakan": panama_peternakan,
  "sektor_agrikultur": panama_agrikultur,
  "sektor_perikanan": panama_perikanan,
  "sektor_olahan_pangan": panama_olahan_pangan,
  "sektor_farmasi": panama_farmasi,
  "sektor_pertahanan": panama_pertahanan,
  "armada_militer": panama_armada,
  "militer_strategis": panama_strategis,
  "armada_kepolisian": panama_kepolisian,
  "pabrik_militer": panama_pabrik,
  "intelijen": panama_intelijen,
    "pendidikan": panama_pendidikan,
  "kesehatan": panama_kesehatan,
  "hukum": panama_hukum,
  "sektor_olahraga": panama_olahraga,
  "sektor_komersial": panama_komersial,
  "sektor_hiburan": panama_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 41
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 10
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 14
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 54
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 17
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 85
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
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 7.28,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": panama_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 32,
    "pendidikan": 25,
    "keamanan": 15,
    "keuangan": 7,
    "lingkungan": 60
  }
};


