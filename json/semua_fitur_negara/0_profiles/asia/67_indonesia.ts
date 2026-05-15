export const indonesia_profile = {
  "name_en": "Indonesia",
  "capital": "Jakarta",
  "name_id": "Indonesia",
  "lon": 106.84,
  "lat": -6.2,
  "flag": "🇮🇩",
  "jumlah_penduduk": 288315089,
  "anggaran": 13807,
  "pendapatan_nasional": "39448",
  "religion": "Islam",
  "ideology": "Demokrasi"
} as const;

import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { indonesia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/67_indonesia";

import { indonesia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/67_indonesia";
import { indonesia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/67_indonesia";
import { indonesia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/67_indonesia";
import { indonesia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/67_indonesia";
import { indonesia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/67_indonesia";
import { indonesia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/67_indonesia";
import { indonesia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/67_indonesia";
import { indonesia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/67_indonesia";
import { indonesia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/67_indonesia";
import { indonesia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/67_indonesia";
import { indonesia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/67_indonesia";
import { indonesia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/67_indonesia";
import { indonesia_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/asia/67_indonesia";
import { indonesia_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/asia/67_indonesia";
import { indonesia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/67_indonesia";
import { indonesia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/67_indonesia";
import { indonesia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/67_indonesia";
import { indonesia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/67_indonesia";
import { indonesia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/67_indonesia";
import { indonesia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/67_indonesia";
import { indonesia_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/67_indonesia";
import { 
  infrastruktur_options, pendidikan_options, sains_penelitian_options, kesehatan_options, olahraga_options, 
  kehakiman_options, pertahanan_options, luar_negeri_options, kebudayaan_options, pariwisata_options, 
  lingkungan_hidup_options, perumahan_options, pembangunan_options, perdagangan_options, keuangan_options 
} from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/7_kementrian/1_database_menteri/index";

const indonesia_geopolitik = {
    "un_vote": 128,
    "reputasi_diplomatik": "Unggul",
    "aliansi_aktif": ["Amerika Serikat", "Jepang", "Australia", "India"],
    "pengaruh_global": 78.2,
    "peringkat_diplomasi": 12,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 8,
      "kekuatan_keras": 7,
      "prestise_diplomatik": 57
    }
  } as const;

export const indonesia: CountryData = {
  ...indonesia_profile,
  "sektor_listrik": indonesia_listrik,
  "infrastruktur": indonesia_infrastruktur,
  "sektor_ekstraksi": indonesia_ekstraksi,
  "sektor_manufaktur": indonesia_manufaktur,
  "sektor_peternakan": indonesia_peternakan,
  "sektor_agrikultur": indonesia_agrikultur,
  "sektor_perikanan": indonesia_perikanan,
  "sektor_olahan_pangan": indonesia_olahan_pangan,
  "sektor_farmasi": indonesia_farmasi,
  "sektor_pertahanan": indonesia_pertahanan,
  "armada_militer": indonesia_armada,
  "militer_strategis": indonesia_strategis,
  "armada_kepolisian": indonesia_kepolisian,
  "pabrik_militer": indonesia_pabrik,
  "intelijen": indonesia_intelijen,
    "pendidikan": indonesia_pendidikan,
  "kesehatan": indonesia_kesehatan,
  "hukum": indonesia_hukum,
  "sektor_olahraga": indonesia_olahraga,
  "sektor_komersial": indonesia_komersial,
  "sektor_hiburan": indonesia_hiburan,
  "hunian": indonesia_hunian,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 27,
      "kepuasan": 67,
      "pendapatan": 532
    },
    "korporasi": {
      "tarif": 15,
      "kepuasan": 52,
      "pendapatan": 220
    },
    "penghasilan": {
      "tarif": 34,
      "kepuasan": 61,
      "pendapatan": 1159
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 1343
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 1060
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 70 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 208 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 724
    }
  },
  
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22.4,
    "harga_daging_sapi": 104.1,
    "harga_ayam": 41,
    "harga_minyak_goreng": 15.4,
    "harga_gula": 20.16,
    "harga_telur": 62.2,
    "harga_bbm": 10.7,
    "harga_listrik": 1.6,
    "harga_air": 2.6,
    "harga_obat": 157.9,
    "harga_pendidikan": 483.9
  },
  // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": indonesia_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kabinet": {
      1: { ...infrastruktur_options[0], status: "Terisi" },
      2: { ...pendidikan_options[0], status: "Terisi" },
      3: { ...sains_penelitian_options[0], status: "Terisi" },
      4: { ...kesehatan_options[0], status: "Terisi" },
      5: { ...olahraga_options[0], status: "Terisi" },
      6: { ...kehakiman_options[0], status: "Terisi" },
      7: { ...pertahanan_options[0], status: "Terisi" },
      8: { ...luar_negeri_options[0], status: "Terisi" },
      9: { ...kebudayaan_options[0], status: "Terisi" },
      10: { ...pariwisata_options[0], status: "Terisi" },
      11: { ...lingkungan_hidup_options[0], status: "Terisi" },
      12: { ...perumahan_options[0], status: "Terisi" },
      13: { ...pembangunan_options[0], status: "Terisi" },
      14: { ...perdagangan_options[0], status: "Terisi" },
      15: { ...keuangan_options[0], status: "Terisi" },
    },
    "candidates": {
      1: infrastruktur_options,
      2: pendidikan_options,
      3: sains_penelitian_options,
      4: kesehatan_options,
      5: olahraga_options,
      6: kehakiman_options,
      7: pertahanan_options,
      8: luar_negeri_options,
      9: kebudayaan_options,
      10: pariwisata_options,
      11: lingkungan_hidup_options,
      12: perumahan_options,
      13: pembangunan_options,
      14: perdagangan_options,
      15: keuangan_options,
    }
  }
};


