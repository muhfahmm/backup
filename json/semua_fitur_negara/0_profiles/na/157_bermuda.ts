export const bermuda_profile = {
  "name_en": "Bermuda",
  "capital": "Hamilton",
  "name_id": "Bermuda",
  "lon": -64.75,
  "lat": 32.33333333,
  "flag": "🇧🇲",
  "jumlah_penduduk": 64636,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Protestan",
  "ideology": "Demokrasi"
} as const;

import { bermuda_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/na/157_bermuda";
import { bermuda_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/na/157_bermuda";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { bermuda_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/157_bermuda";

import { bermuda_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/157_bermuda";
import { bermuda_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/157_bermuda";
import { bermuda_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/157_bermuda";
import { bermuda_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/157_bermuda";
import { bermuda_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/157_bermuda";
import { bermuda_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/157_bermuda";
import { bermuda_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/157_bermuda";
import { bermuda_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/157_bermuda";
import { bermuda_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/157_bermuda";
import { bermuda_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/157_bermuda";
import { bermuda_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/157_bermuda";
import { bermuda_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/157_bermuda";
import { bermuda_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/157_bermuda";
import { bermuda_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/157_bermuda";
import { bermuda_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/157_bermuda";
import { bermuda_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/157_bermuda";
import { bermuda_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/157_bermuda";
import { bermuda_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/157_bermuda";
import { bermuda_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/157_bermuda";
const bermuda_geopolitik = {
    "un_vote": 22,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 5,
      "kekuatan_keras": 22,
      "prestise_diplomatik": 57
    }
  } as const;

export const bermuda: CountryData = {
  ...bermuda_profile,
  "sektor_listrik": bermuda_listrik,
  "hunian": bermuda_hunian,
  "infrastruktur": bermuda_infrastruktur,
  "sektor_ekstraksi": bermuda_ekstraksi,
  "sektor_manufaktur": bermuda_manufaktur,
  "sektor_peternakan": bermuda_peternakan,
  "sektor_agrikultur": bermuda_agrikultur,
  "sektor_perikanan": bermuda_perikanan,
  "sektor_olahan_pangan": bermuda_olahan_pangan,
  "sektor_farmasi": bermuda_farmasi,
  "sektor_pertahanan": bermuda_pertahanan,
  "armada_militer": bermuda_armada,
  "militer_strategis": bermuda_strategis,
  "armada_kepolisian": bermuda_kepolisian,
  "pabrik_militer": bermuda_pabrik,
  "intelijen": bermuda_intelijen,
    "pendidikan": bermuda_pendidikan,
  "kesehatan": bermuda_kesehatan,
  "hukum": bermuda_hukum,
  "sektor_olahraga": bermuda_olahraga,
  "sektor_komersial": bermuda_komersial,
  "sektor_hiburan": bermuda_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 26,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 20,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8,
    "harga_daging_sapi": 52.05,
    "harga_ayam": 41,
    "harga_minyak_goreng": 12.32,
    "harga_gula": 20.16,
    "harga_telur": 31.1,
    "harga_bbm": 8.56,
    "harga_listrik": 3.2,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": bermuda_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 33,
    "pendidikan": 35,
    "keamanan": 27,
    "keuangan": 38,
    "lingkungan": 60
  }
};


