import { Religion } from "../religions";
import { Ideology } from "../ideologies";
import { Ministry } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/7_kementrian/1_database_menteri/types";

// Import Sektor
import { SektorListrik } from "./1_pembangunan/1_produksi/1_sektor_listrik_nasional/1_db_listrik";
import { SektorInfrastruktur } from "./1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur";
import { SektorManufaktur, SektorPeternakan, SektorAgrikultur, SektorPerikanan, SektorOlahanPangan, SektorFarmasi, SektorEkstraksi } from "./1_pembangunan/1_produksi";
import { SektorPertahanan, SektorArmadaMiliter, SektorMiliterStrategis, SektorArmadaKepolisian } from "./2_pertahanan";
import { SektorPabrikMiliter } from "./1_pembangunan/2_produksi_militer";
import { PendidikanData, KesehatanData, HukumData, SektorKomersial, SektorHiburan, HunianData } from "./1_pembangunan/3_tempat_umum";
import { SektorGeopolitik } from "./5_geopolitik";
import { OlahragaData } from "./1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga";

export interface PajakData {
  ppn: { tarif: number; kepuasan: number; pendapatan: number };
  korporasi: { tarif: number; kepuasan: number; pendapatan: number };
  penghasilan: { tarif: number; kepuasan: number; pendapatan: number };
  bea_cukai: { tarif: number; kepuasan: number; pendapatan: number };
  lingkungan: { tarif: number; kepuasan: number; pendapatan: number };
  transit_sekutu: { tarif: number; kepuasan: number; pendapatan: number };
  transit_non_sekutu: { tarif: number; kepuasan: number; pendapatan: number };
  lainnya: { tarif: number; kepuasan: number; pendapatan: number };
}


export interface HargaData {
  harga_beras: number;
  harga_daging_sapi: number;
  harga_ayam: number;
  harga_minyak_goreng: number;
  harga_gula: number;
  harga_telur: number;
  harga_bbm: number;
  harga_listrik: number;
  harga_air: number;
  harga_obat: number;
  harga_pendidikan: number;
}

export interface EkonomiData {
  pajak: PajakData;
  harga: HargaData;
}

export interface CountryData extends EkonomiData {
  name_en: string;
  name_id: string;
  capital: string;
  lon: number;
  lat: number;
  flag: string;
  jumlah_penduduk: string | number;
  anggaran: string | number;
  religion: Religion;
  ideology: Ideology;
  region?: string;
  
  // Sektor
  sektor_listrik: SektorListrik;
  infrastruktur: SektorInfrastruktur;
  sektor_ekstraksi: SektorEkstraksi;
  sektor_manufaktur: SektorManufaktur;
  sektor_peternakan: SektorPeternakan;
  sektor_agrikultur: SektorAgrikultur;
  sektor_perikanan: SektorPerikanan;
  sektor_olahan_pangan: SektorOlahanPangan;
  sektor_farmasi: SektorFarmasi;
  sektor_pertahanan: SektorPertahanan;
  armada_militer: SektorArmadaMiliter;
  militer_strategis: SektorMiliterStrategis;
  armada_kepolisian: SektorArmadaKepolisian;
  pabrik_militer: SektorPabrikMiliter;
  intelijen: any;
  
  // Sektor Sosial (Flattened)
  pendidikan: PendidikanData;
  kesehatan: KesehatanData;
  hukum: HukumData;

  sektor_olahraga: OlahragaData;
  sektor_komersial?: SektorKomersial;
  sektor_hiburan?: SektorHiburan;
  hunian?: HunianData;
  geopolitik: SektorGeopolitik;
  
  // Global & Politik
  pendapatan_nasional: string;
  kementerian: {
    kesehatan?: number;
    pendidikan?: number;
    keamanan?: number;
    keuangan?: number;
    lingkungan?: number;
    kabinet?: Record<number, Ministry>;
    candidates?: Record<number, any[]>;
  };
}

// Re-export nested types for convenience
export * from "./1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur";
export * from "./1_pembangunan/1_produksi";
export * from "./2_pertahanan";
export * from "./1_pembangunan/2_produksi_militer";
export * from "./1_pembangunan/3_tempat_umum";
export * from "./5_geopolitik";
export * from "./1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga";

// Modular Rates for Infrastructure & Social
export { 
  infrastrukturRate, 
  sosialRate 
} from "./1_pembangunan/3_tempat_umum";

export {
  intelijenRate
} from "./2_pertahanan/2_intelijen";
