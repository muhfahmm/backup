// Sektor Imports & Exports
export * from "./1_sektor_listrik_nasional/1_db_listrik";
export * from "./1_sektor_listrik_nasional/listrik_logic";
export * from "./2_sektor_mineral_kritis/2_db_ekstraksi";
export * from "./3_manufaktur/3_db_manufaktur";
export * from "./4_sektor_peternakan/4_db_peternakan";
export * from "./5_sektor_agrikultur/5_db_agrikultur";
export * from "./6_sektor_perikanan/6_db_perikanan";
export * from "./7_sektor_olahan_pangan/7_db_olahan_pangan";
export * from "./8_sektor_farmasi/8_db_farmasi";


import { manufakturRate } from "./3_manufaktur/3_db_manufaktur";
import { peternakanRate } from "./4_sektor_peternakan/4_db_peternakan";
import { agrikulturRate } from "./5_sektor_agrikultur/5_db_agrikultur";
import { perikananRate } from "./6_sektor_perikanan/6_db_perikanan";
import { olahanPanganRate } from "./7_sektor_olahan_pangan/7_db_olahan_pangan";
import { farmasiRate } from "./8_sektor_farmasi/8_db_farmasi";

// Aggregators for legacy support or combined rates
export const produkIndustriRate = { 
  ...manufakturRate, 
  ...olahanPanganRate, 
  ...farmasiRate 
};

export const komoditasPanganRate = { 
  ...peternakanRate, 
  ...agrikulturRate, 
  ...perikananRate 
};
