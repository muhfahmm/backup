export const honduras_profile = {
  "name_en": "Honduras",
  "capital": "Tegucigalpa",
  "name_id": "Honduras",
  "lon": -86.5,
  "lat": 15,
  "flag": "🇭🇳",
  "jumlah_penduduk": 10825703,
  "anggaran": 311,
  "pendapatan_nasional": "889",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { honduras_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/166_honduras";
import { honduras_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/166_honduras";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { honduras_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/166_honduras";

import { honduras_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/166_honduras";
import { honduras_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/166_honduras";
import { honduras_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/166_honduras";
import { honduras_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/166_honduras";
import { honduras_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/166_honduras";
import { honduras_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/166_honduras";
import { honduras_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/166_honduras";
import { honduras_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/166_honduras";
import { honduras_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/166_honduras";
import { honduras_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/166_honduras";
import { honduras_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/166_honduras";
import { honduras_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/166_honduras";
import { honduras_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/166_honduras";
import { honduras_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/166_honduras";
import { honduras_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/166_honduras";
import { honduras_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/166_honduras";
import { honduras_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/166_honduras";
import { honduras_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/166_honduras";
import { honduras_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/166_honduras";
const honduras_geopolitik = {
    "un_vote": 137,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 35,
      "kekuatan_keras": 12,
      "prestise_diplomatik": 57
    }
  } as const;

export const honduras: CountryData = {
  ...honduras_profile,
  "sektor_listrik": honduras_listrik,
  "hunian": honduras_hunian,
  "infrastruktur": honduras_infrastruktur,
  "sektor_ekstraksi": honduras_ekstraksi,
  "sektor_manufaktur": honduras_manufaktur,
  "sektor_peternakan": honduras_peternakan,
  "sektor_agrikultur": honduras_agrikultur,
  "sektor_perikanan": honduras_perikanan,
  "sektor_olahan_pangan": honduras_olahan_pangan,
  "sektor_farmasi": honduras_farmasi,
  "sektor_pertahanan": honduras_pertahanan,
  "armada_militer": honduras_armada,
  "militer_strategis": honduras_strategis,
  "armada_kepolisian": honduras_kepolisian,
  "pabrik_militer": honduras_pabrik,
  "intelijen": honduras_intelijen,
    "pendidikan": honduras_pendidikan,
  "kesehatan": honduras_kesehatan,
  "hukum": honduras_hukum,
  "sektor_olahraga": honduras_olahraga,
  "sektor_komersial": honduras_komersial,
  "sektor_hiburan": honduras_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 17
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 18
    },
    "penghasilan": {
      "tarif": 16,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 16
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 7
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 16,
      "kepuasan": 93,
      "pendapatan": 13
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 14.98,
    "harga_listrik": 3.2,
    "harga_air": 5.2,
    "harga_obat": 221.06,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": honduras_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 21,
    "pendidikan": 4,
    "keamanan": 14,
    "keuangan": 21,
    "lingkungan": 60
  }
};


