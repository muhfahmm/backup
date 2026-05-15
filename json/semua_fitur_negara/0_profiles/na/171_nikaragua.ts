export const nikaragua_profile = {
  "name_en": "Nicaragua",
  "capital": "Managua",
  "name_id": "Nikaragua",
  "lon": -85,
  "lat": 13,
  "flag": "🇳🇮",
  "jumlah_penduduk": 6916140,
  "anggaran": 165,
  "pendapatan_nasional": "472",
  "religion": "Katolik",
  "ideology": "Sosialisme"
} as const;

import { nikaragua_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/171_nikaragua";
import { nikaragua_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/171_nikaragua";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { nikaragua_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/171_nikaragua";

import { nikaragua_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/171_nikaragua";
import { nikaragua_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/171_nikaragua";
import { nikaragua_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/171_nikaragua";
import { nikaragua_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/171_nikaragua";
import { nikaragua_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/171_nikaragua";
import { nikaragua_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/171_nikaragua";
import { nikaragua_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/171_nikaragua";
import { nikaragua_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/171_nikaragua";
import { nikaragua_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/171_nikaragua";
import { nikaragua_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/171_nikaragua";
import { nikaragua_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/171_nikaragua";
import { nikaragua_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/171_nikaragua";
import { nikaragua_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/171_nikaragua";
import { nikaragua_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/171_nikaragua";
import { nikaragua_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/171_nikaragua";
import { nikaragua_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/171_nikaragua";
import { nikaragua_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/171_nikaragua";
import { nikaragua_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/171_nikaragua";
import { nikaragua_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/171_nikaragua";
const nikaragua_geopolitik = {
    "un_vote": 162,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 38,
      "kekuatan_keras": 19,
      "prestise_diplomatik": 57
    }
  } as const;

export const nikaragua: CountryData = {
  ...nikaragua_profile,
  "sektor_listrik": nikaragua_listrik,
  "hunian": nikaragua_hunian,
  "infrastruktur": nikaragua_infrastruktur,
  "sektor_ekstraksi": nikaragua_ekstraksi,
  "sektor_manufaktur": nikaragua_manufaktur,
  "sektor_peternakan": nikaragua_peternakan,
  "sektor_agrikultur": nikaragua_agrikultur,
  "sektor_perikanan": nikaragua_perikanan,
  "sektor_olahan_pangan": nikaragua_olahan_pangan,
  "sektor_farmasi": nikaragua_farmasi,
  "sektor_pertahanan": nikaragua_pertahanan,
  "armada_militer": nikaragua_armada,
  "militer_strategis": nikaragua_strategis,
  "armada_kepolisian": nikaragua_kepolisian,
  "pabrik_militer": nikaragua_pabrik,
  "intelijen": nikaragua_intelijen,
    "pendidikan": nikaragua_pendidikan,
  "kesehatan": nikaragua_kesehatan,
  "hukum": nikaragua_hukum,
  "sektor_olahraga": nikaragua_olahraga,
  "sektor_komersial": nikaragua_komersial,
  "sektor_hiburan": nikaragua_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 20,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 14
    },
    "bea_cukai": {
      "tarif": 29,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 1
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
    "harga_gula": 11.52,
    "harga_telur": 31.1,
    "harga_bbm": 21.4,
    "harga_listrik": 1.6,
    "harga_air": 5.2,
    "harga_obat": 126.32,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": nikaragua_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 39,
    "pendidikan": 37,
    "keamanan": 9,
    "keuangan": 30,
    "lingkungan": 60
  }
};


