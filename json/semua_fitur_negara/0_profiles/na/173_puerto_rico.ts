export const puerto_rico_profile = {
  "name_en": "Puerto Rico",
  "capital": "San Juan",
  "name_id": "Puerto rico",
  "lon": -66.5,
  "lat": 18.25,
  "flag": "🇵🇷",
  "jumlah_penduduk": 3184195,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { puerto_rico_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/173_puerto_rico";
import { puerto_rico_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/173_puerto_rico";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { puerto_rico_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/173_puerto_rico";

import { puerto_rico_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/173_puerto_rico";
import { puerto_rico_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/173_puerto_rico";
import { puerto_rico_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/173_puerto_rico";
import { puerto_rico_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/173_puerto_rico";
import { puerto_rico_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/173_puerto_rico";
import { puerto_rico_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/173_puerto_rico";
import { puerto_rico_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/173_puerto_rico";
import { puerto_rico_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/173_puerto_rico";
import { puerto_rico_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/173_puerto_rico";
import { puerto_rico_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/173_puerto_rico";
import { puerto_rico_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/173_puerto_rico";
import { puerto_rico_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/173_puerto_rico";
import { puerto_rico_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/173_puerto_rico";
import { puerto_rico_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/173_puerto_rico";
import { puerto_rico_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/173_puerto_rico";
import { puerto_rico_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/173_puerto_rico";
import { puerto_rico_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/173_puerto_rico";
import { puerto_rico_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/173_puerto_rico";
import { puerto_rico_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/173_puerto_rico";
const puerto_rico_geopolitik = {
    "un_vote": 117,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 15,
      "prestise_diplomatik": 57
    }
  } as const;

export const puerto_rico: CountryData = {
  ...puerto_rico_profile,
  "sektor_listrik": puerto_rico_listrik,
  "hunian": puerto_rico_hunian,
  "infrastruktur": puerto_rico_infrastruktur,
  "sektor_ekstraksi": puerto_rico_ekstraksi,
  "sektor_manufaktur": puerto_rico_manufaktur,
  "sektor_peternakan": puerto_rico_peternakan,
  "sektor_agrikultur": puerto_rico_agrikultur,
  "sektor_perikanan": puerto_rico_perikanan,
  "sektor_olahan_pangan": puerto_rico_olahan_pangan,
  "sektor_farmasi": puerto_rico_farmasi,
  "sektor_pertahanan": puerto_rico_pertahanan,
  "armada_militer": puerto_rico_armada,
  "militer_strategis": puerto_rico_strategis,
  "armada_kepolisian": puerto_rico_kepolisian,
  "pabrik_militer": puerto_rico_pabrik,
  "intelijen": puerto_rico_intelijen,
    "pendidikan": puerto_rico_pendidikan,
  "kesehatan": puerto_rico_kesehatan,
  "hukum": puerto_rico_hukum,
  "sektor_olahraga": puerto_rico_olahraga,
  "sektor_komersial": puerto_rico_komersial,
  "sektor_hiburan": puerto_rico_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 38,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 4,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 82,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 24.88,
    "harga_bbm": 10.7,
    "harga_listrik": 2.24,
    "harga_air": 2.6,
    "harga_obat": 221.06,
    "harga_pendidikan": 241.95
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": puerto_rico_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 6,
    "pendidikan": 13,
    "keamanan": 28,
    "keuangan": 20,
    "lingkungan": 60
  }
};


