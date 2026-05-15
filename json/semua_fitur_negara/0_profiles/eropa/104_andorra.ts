export const andorra_profile = {
  "name_en": "Andorra",
  "capital": "Andorra la Vella",
  "name_id": "Andorra",
  "lon": 1.52,
  "lat": 42.5,
  "flag": "🇦🇩",
  "jumlah_penduduk": 85101,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi"
} as const;

import { andorra_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/104_andorra";
import { andorra_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/104_andorra";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { andorra_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/104_andorra";

import { andorra_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/104_andorra";
import { andorra_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/104_andorra";
import { andorra_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/104_andorra";
import { andorra_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/104_andorra";
import { andorra_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/104_andorra";
import { andorra_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/104_andorra";
import { andorra_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/104_andorra";
import { andorra_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/104_andorra";
import { andorra_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/104_andorra";
import { andorra_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/104_andorra";
import { andorra_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/104_andorra";
import { andorra_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/104_andorra";
import { andorra_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/104_andorra";
import { andorra_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/104_andorra";
import { andorra_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/104_andorra";
import { andorra_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/104_andorra";
import { andorra_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/104_andorra";
import { andorra_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/104_andorra";
import { andorra_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/104_andorra";
const andorra_geopolitik = {
    "un_vote": 11,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 4,
      "kekuatan_keras": 12,
      "prestise_diplomatik": 57
    }
  } as const;

export const andorra: CountryData = {
  ...andorra_profile,
  "sektor_listrik": andorra_listrik,
  "hunian": andorra_hunian,
  "infrastruktur": andorra_infrastruktur,
  "sektor_ekstraksi": andorra_ekstraksi,
  "sektor_manufaktur": andorra_manufaktur,
  "sektor_peternakan": andorra_peternakan,
  "sektor_agrikultur": andorra_agrikultur,
  "sektor_perikanan": andorra_perikanan,
  "sektor_olahan_pangan": andorra_olahan_pangan,
  "sektor_farmasi": andorra_farmasi,
  "sektor_pertahanan": andorra_pertahanan,
  "armada_militer": andorra_armada,
  "militer_strategis": andorra_strategis,
  "armada_kepolisian": andorra_kepolisian,
  "pabrik_militer": andorra_pabrik,
  "intelijen": andorra_intelijen,
    "pendidikan": andorra_pendidikan,
  "kesehatan": andorra_kesehatan,
  "hukum": andorra_hukum,
  "sektor_olahraga": andorra_olahraga,
  "sektor_komersial": andorra_komersial,
  "sektor_hiburan": andorra_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 10,
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
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 11.52,
    "harga_telur": 43.54,
    "harga_bbm": 14.98,
    "harga_listrik": 0.8,
    "harga_air": 5.2,
    "harga_obat": 157.9,
    "harga_pendidikan": 387.12
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": andorra_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 4,
    "pendidikan": 20,
    "keamanan": 33,
    "keuangan": 6,
    "lingkungan": 60
  }
};


