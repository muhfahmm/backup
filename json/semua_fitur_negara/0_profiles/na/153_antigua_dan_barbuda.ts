export const antigua_dan_barbuda_profile = {
  "name_en": "Antigua and Barbuda",
  "capital": "Saint John's",
  "name_id": "Antigua dan Barbuda",
  "lon": -61.84,
  "lat": 17.11,
  "flag": "🇦🇬",
  "jumlah_penduduk": 100772,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { antigua_dan_barbuda_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/153_antigua_dan_barbuda";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { antigua_dan_barbuda_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/153_antigua_dan_barbuda";

import { antigua_dan_barbuda_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/153_antigua_dan_barbuda";
const antigua_dan_barbuda_geopolitik = {
    "un_vote": 12,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 14,
      "kekuatan_keras": 3,
      "prestise_diplomatik": 57
    }
  } as const;

export const antigua_dan_barbuda: CountryData = {
  ...antigua_dan_barbuda_profile,
  "sektor_listrik": antigua_dan_barbuda_listrik,
  "hunian": antigua_dan_barbuda_hunian,
  "infrastruktur": antigua_dan_barbuda_infrastruktur,
  "sektor_ekstraksi": antigua_dan_barbuda_ekstraksi,
  "sektor_manufaktur": antigua_dan_barbuda_manufaktur,
  "sektor_peternakan": antigua_dan_barbuda_peternakan,
  "sektor_agrikultur": antigua_dan_barbuda_agrikultur,
  "sektor_perikanan": antigua_dan_barbuda_perikanan,
  "sektor_olahan_pangan": antigua_dan_barbuda_olahan_pangan,
  "sektor_farmasi": antigua_dan_barbuda_farmasi,
  "sektor_pertahanan": antigua_dan_barbuda_pertahanan,
  "armada_militer": antigua_dan_barbuda_armada,
  "militer_strategis": antigua_dan_barbuda_strategis,
  "armada_kepolisian": antigua_dan_barbuda_kepolisian,
  "pabrik_militer": antigua_dan_barbuda_pabrik,
  "intelijen": antigua_dan_barbuda_intelijen,
    "pendidikan": antigua_dan_barbuda_pendidikan,
  "kesehatan": antigua_dan_barbuda_kesehatan,
  "hukum": antigua_dan_barbuda_hukum,
  "sektor_olahraga": antigua_dan_barbuda_olahraga,
  "sektor_komersial": antigua_dan_barbuda_komersial,
  "sektor_hiburan": antigua_dan_barbuda_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16,
    "harga_daging_sapi": 83.28,
    "harga_ayam": 57.4,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 43.54,
    "harga_bbm": 21.4,
    "harga_listrik": 2.24,
    "harga_air": 4.16,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": antigua_dan_barbuda_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 30,
    "pendidikan": 7,
    "keamanan": 11,
    "keuangan": 27,
    "lingkungan": 60
  }
};


