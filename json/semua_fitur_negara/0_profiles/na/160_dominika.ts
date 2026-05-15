export const dominika_profile = {
  "name_en": "Dominica",
  "capital": "Roseau",
  "name_id": "Dominika",
  "lon": -61.33333333,
  "lat": 15.41666666,
  "flag": "🇩🇲",
  "jumlah_penduduk": 72412,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { dominika_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/160_dominika";
import { dominika_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/160_dominika";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { dominika_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/160_dominika";

import { dominika_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/160_dominika";
import { dominika_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/160_dominika";
import { dominika_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/160_dominika";
import { dominika_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/160_dominika";
import { dominika_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/160_dominika";
import { dominika_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/160_dominika";
import { dominika_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/160_dominika";
import { dominika_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/160_dominika";
import { dominika_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/160_dominika";
import { dominika_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/160_dominika";
import { dominika_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/160_dominika";
import { dominika_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/160_dominika";
import { dominika_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/160_dominika";
import { dominika_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/160_dominika";
import { dominika_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/160_dominika";
import { dominika_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/160_dominika";
import { dominika_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/160_dominika";
import { dominika_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/160_dominika";
import { dominika_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/160_dominika";
const dominika_geopolitik = {
    "un_vote": 54,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 21,
      "kekuatan_keras": 18,
      "prestise_diplomatik": 57
    }
  } as const;

export const dominika: CountryData = {
  ...dominika_profile,
  "sektor_listrik": dominika_listrik,
  "hunian": dominika_hunian,
  "infrastruktur": dominika_infrastruktur,
  "sektor_ekstraksi": dominika_ekstraksi,
  "sektor_manufaktur": dominika_manufaktur,
  "sektor_peternakan": dominika_peternakan,
  "sektor_agrikultur": dominika_agrikultur,
  "sektor_perikanan": dominika_perikanan,
  "sektor_olahan_pangan": dominika_olahan_pangan,
  "sektor_farmasi": dominika_farmasi,
  "sektor_pertahanan": dominika_pertahanan,
  "armada_militer": dominika_armada,
  "militer_strategis": dominika_strategis,
  "armada_kepolisian": dominika_kepolisian,
  "pabrik_militer": dominika_pabrik,
  "intelijen": dominika_intelijen,
    "pendidikan": dominika_pendidikan,
  "kesehatan": dominika_kesehatan,
  "hukum": dominika_hukum,
  "sektor_olahraga": dominika_olahraga,
  "sektor_komersial": dominika_komersial,
  "sektor_hiburan": dominika_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 145.74,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 5.35,
    "harga_listrik": 1.6,
    "harga_air": 4.16,
    "harga_obat": 126.32,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": dominika_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 39,
    "keamanan": 8,
    "keuangan": 39,
    "lingkungan": 60
  }
};


