export const komoro_profile = {
  "name_en": "Comoros",
  "capital": "Moroni",
  "name_id": "Komoro",
  "lon": 44.25,
  "lat": -12.16666666,
  "flag": "🇰🇲",
  "jumlah_penduduk": 866628,
  "anggaran": 13,
  "pendapatan_nasional": "36",
  "religion": "Islam",
  "ideology": "Demokrasi"
} as const;

import { komoro_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/20_komoro";
import { komoro_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/20_komoro";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { komoro_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/20_komoro";

import { komoro_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/20_komoro";
import { komoro_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/20_komoro";
import { komoro_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/20_komoro";
import { komoro_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/20_komoro";
import { komoro_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/20_komoro";
import { komoro_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/20_komoro";
import { komoro_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/20_komoro";
import { komoro_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/20_komoro";
import { komoro_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/20_komoro";
import { komoro_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/20_komoro";
import { komoro_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/20_komoro";
import { komoro_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/20_komoro";
import { komoro_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/20_komoro";
import { komoro_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/20_komoro";
import { komoro_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/20_komoro";
import { komoro_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/20_komoro";
import { komoro_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/20_komoro";
import { komoro_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/20_komoro";
import { komoro_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/20_komoro";
const komoro_geopolitik = {
    "un_vote": 61,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 24,
      "kekuatan_keras": 27,
      "prestise_diplomatik": 57
  }
  } as const;

export const komoro: CountryData = {
  ...komoro_profile,
  "sektor_listrik": komoro_listrik,
  "hunian": komoro_hunian,
  "infrastruktur": komoro_infrastruktur,
  "sektor_ekstraksi": komoro_ekstraksi,
  "sektor_manufaktur": komoro_manufaktur,
  "sektor_peternakan": komoro_peternakan,
  "sektor_agrikultur": komoro_agrikultur,
  "sektor_perikanan": komoro_perikanan,
  "sektor_olahan_pangan": komoro_olahan_pangan,
  "sektor_farmasi": komoro_farmasi,
  "sektor_pertahanan": komoro_pertahanan,
  "armada_militer": komoro_armada,
  "militer_strategis": komoro_strategis,
  "armada_kepolisian": komoro_kepolisian,
  "pabrik_militer": komoro_pabrik,
  "intelijen": komoro_intelijen,
    "pendidikan": komoro_pendidikan,
  "kesehatan": komoro_kesehatan,
  "hukum": komoro_hukum,
  "sektor_olahraga": komoro_olahraga,
  "sektor_komersial": komoro_komersial,
  "sektor_hiburan": komoro_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 6,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 7.2,
    "harga_telur": 31.1,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 967.8
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": komoro_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 7,
    "pendidikan": 6,
    "keamanan": 31,
    "keuangan": 37,
    "lingkungan": 60
  }
};


