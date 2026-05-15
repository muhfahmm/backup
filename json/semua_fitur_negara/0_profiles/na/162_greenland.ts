export const greenland_profile = {
  "name_en": "Greenland",
  "capital": "Nuuk",
  "name_id": "Greenland",
  "lon": -40,
  "lat": 72,
  "flag": "🇬🇱",
  "jumlah_penduduk": 55840,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { greenland_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/162_greenland";
import { greenland_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/162_greenland";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { greenland_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/162_greenland";

import { greenland_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/162_greenland";
import { greenland_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/162_greenland";
import { greenland_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/162_greenland";
import { greenland_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/162_greenland";
import { greenland_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/162_greenland";
import { greenland_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/162_greenland";
import { greenland_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/162_greenland";
import { greenland_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/162_greenland";
import { greenland_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/162_greenland";
import { greenland_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/162_greenland";
import { greenland_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/162_greenland";
import { greenland_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/162_greenland";
import { greenland_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/162_greenland";
import { greenland_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/162_greenland";
import { greenland_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/162_greenland";
import { greenland_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/162_greenland";
import { greenland_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/162_greenland";
import { greenland_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/162_greenland";
import { greenland_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/162_greenland";
const greenland_geopolitik = {
    "un_vote": 43,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 6,
      "kekuatan_keras": 33,
      "prestise_diplomatik": 57
    }
  } as const;

export const greenland: CountryData = {
  ...greenland_profile,
  "sektor_listrik": greenland_listrik,
  "hunian": greenland_hunian,
  "infrastruktur": greenland_infrastruktur,
  "sektor_ekstraksi": greenland_ekstraksi,
  "sektor_manufaktur": greenland_manufaktur,
  "sektor_peternakan": greenland_peternakan,
  "sektor_agrikultur": greenland_agrikultur,
  "sektor_perikanan": greenland_perikanan,
  "sektor_olahan_pangan": greenland_olahan_pangan,
  "sektor_farmasi": greenland_farmasi,
  "sektor_pertahanan": greenland_pertahanan,
  "armada_militer": greenland_armada,
  "militer_strategis": greenland_strategis,
  "armada_kepolisian": greenland_kepolisian,
  "pabrik_militer": greenland_pabrik,
  "intelijen": greenland_intelijen,
    "pendidikan": greenland_pendidikan,
  "kesehatan": greenland_kesehatan,
  "hukum": greenland_hukum,
  "sektor_olahraga": greenland_olahraga,
  "sektor_komersial": greenland_komersial,
  "sektor_hiburan": greenland_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 23,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 35,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 14.98,
    "harga_listrik": 2.24,
    "harga_air": 4.16,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": greenland_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 40,
    "pendidikan": 18,
    "keamanan": 38,
    "keuangan": 32,
    "lingkungan": 60
  }
};


