export const suriname_profile = {
  "name_en": "Suriname",
  "capital": "Paramaribo",
  "name_id": "Suriname",
  "lon": -56,
  "lat": 4,
  "flag": "🇸🇷",
  "jumlah_penduduk": 616500,
  "anggaran": 34,
  "pendapatan_nasional": "97",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { suriname_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/sa/205_suriname";
import { suriname_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/sa/205_suriname";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { suriname_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/sa/205_suriname";

import { suriname_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/sa/205_suriname";
import { suriname_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/sa/205_suriname";
import { suriname_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/sa/205_suriname";
import { suriname_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/sa/205_suriname";
import { suriname_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/sa/205_suriname";
import { suriname_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/sa/205_suriname";
import { suriname_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/sa/205_suriname";
import { suriname_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/sa/205_suriname";
import { suriname_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/sa/205_suriname";
import { suriname_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/sa/205_suriname";
import { suriname_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/sa/205_suriname";
import { suriname_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/sa/205_suriname";
import { suriname_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/sa/205_suriname";
import { suriname_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/sa/205_suriname";
import { suriname_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/sa/205_suriname";
import { suriname_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/sa/205_suriname";
import { suriname_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/sa/205_suriname";
import { suriname_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/sa/205_suriname";
import { suriname_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/sa/205_suriname";
const suriname_geopolitik = {
    "un_vote": 3,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
      "kekuatan_keras": 4,
      "prestise_diplomatik": 57
    }
  } as const;

export const suriname: CountryData = {
  ...suriname_profile,
  "sektor_listrik": suriname_listrik,
  "hunian": suriname_hunian,
  "infrastruktur": suriname_infrastruktur,
  "sektor_ekstraksi": suriname_ekstraksi,
  "sektor_manufaktur": suriname_manufaktur,
  "sektor_peternakan": suriname_peternakan,
  "sektor_agrikultur": suriname_agrikultur,
  "sektor_perikanan": suriname_perikanan,
  "sektor_olahan_pangan": suriname_olahan_pangan,
  "sektor_farmasi": suriname_farmasi,
  "sektor_pertahanan": suriname_pertahanan,
  "armada_militer": suriname_armada,
  "militer_strategis": suriname_strategis,
  "armada_kepolisian": suriname_kepolisian,
  "pabrik_militer": suriname_pabrik,
  "intelijen": suriname_intelijen,
    "pendidikan": suriname_pendidikan,
  "kesehatan": suriname_kesehatan,
  "hukum": suriname_hukum,
  "sektor_olahraga": suriname_olahraga,
  "sektor_komersial": suriname_komersial,
  "sektor_hiburan": suriname_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 20.5,
    "harga_minyak_goreng": 30.8,
    "harga_gula": 14.4,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 1.28,
    "harga_air": 7.28,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": suriname_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 4,
    "pendidikan": 21,
    "keamanan": 23,
    "keuangan": 27,
    "lingkungan": 60
  }
};


