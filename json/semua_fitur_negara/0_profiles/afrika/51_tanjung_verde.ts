export const tanjung_verde_profile = {
  "name_en": "Cape Verde",
  "capital": "Praia",
  "name_id": "Tanjung verde",
  "lon": -24,
  "lat": 16,
  "flag": "🇨🇻",
  "jumlah_penduduk": "10M",
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Liberalisme"
} as const;

import { tanjung_verde_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/afrika/51_tanjung_verde";
import { tanjung_verde_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/afrika/51_tanjung_verde";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { tanjung_verde_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/51_tanjung_verde";

import { tanjung_verde_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/51_tanjung_verde";
import { tanjung_verde_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/51_tanjung_verde";
import { tanjung_verde_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/51_tanjung_verde";
import { tanjung_verde_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/51_tanjung_verde";
import { tanjung_verde_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/51_tanjung_verde";
import { tanjung_verde_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/51_tanjung_verde";
import { tanjung_verde_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/51_tanjung_verde";
import { tanjung_verde_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/51_tanjung_verde";
import { tanjung_verde_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/51_tanjung_verde";
import { tanjung_verde_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/51_tanjung_verde";
import { tanjung_verde_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/51_tanjung_verde";
import { tanjung_verde_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/51_tanjung_verde";
import { tanjung_verde_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/51_tanjung_verde";
import { tanjung_verde_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/51_tanjung_verde";
import { tanjung_verde_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/51_tanjung_verde";
import { tanjung_verde_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/51_tanjung_verde";
import { tanjung_verde_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/51_tanjung_verde";
import { tanjung_verde_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/51_tanjung_verde";
import { tanjung_verde_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/51_tanjung_verde";
const tanjung_verde_geopolitik = {
    "un_vote": 97,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 38,
      "kekuatan_keras": 30,
      "prestise_diplomatik": 57
  }
  } as const;

export const tanjung_verde: CountryData = {
  ...tanjung_verde_profile,
  "sektor_listrik": tanjung_verde_listrik,
  "hunian": tanjung_verde_hunian,
  "infrastruktur": tanjung_verde_infrastruktur,
  "sektor_ekstraksi": tanjung_verde_ekstraksi,
  "sektor_manufaktur": tanjung_verde_manufaktur,
  "sektor_peternakan": tanjung_verde_peternakan,
  "sektor_agrikultur": tanjung_verde_agrikultur,
  "sektor_perikanan": tanjung_verde_perikanan,
  "sektor_olahan_pangan": tanjung_verde_olahan_pangan,
  "sektor_farmasi": tanjung_verde_farmasi,
  "sektor_pertahanan": tanjung_verde_pertahanan,
  "armada_militer": tanjung_verde_armada,
  "militer_strategis": tanjung_verde_strategis,
  "armada_kepolisian": tanjung_verde_kepolisian,
  "pabrik_militer": tanjung_verde_pabrik,
  "intelijen": tanjung_verde_intelijen,
    "pendidikan": tanjung_verde_pendidikan,
  "kesehatan": tanjung_verde_kesehatan,
  "hukum": tanjung_verde_hukum,
  "sektor_olahraga": tanjung_verde_olahraga,
  "sektor_komersial": tanjung_verde_komersial,
  "sektor_hiburan": tanjung_verde_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 31,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12.8,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 32.8,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 14.4,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 3.2,
    "harga_air": 4.16,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": tanjung_verde_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 17,
    "pendidikan": 4,
    "keamanan": 39,
    "keuangan": 13,
    "lingkungan": 60
  }
};


