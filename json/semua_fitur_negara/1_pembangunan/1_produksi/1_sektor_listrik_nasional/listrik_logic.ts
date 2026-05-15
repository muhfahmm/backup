import { SektorPertahanan, SektorArmadaMiliter, SektorMiliterStrategis, SektorArmadaKepolisian, pertahananRate } from "../../../2_pertahanan";
import { SektorPabrikMiliter, pabrikMiliterRate } from "../../2_produksi_militer";
import { SektorInfrastruktur } from "../../3_tempat_umum/1_Layanan Publik/1_infrastruktur";
import { 
  SektorManufaktur, 
  SektorPeternakan, 
  SektorAgrikultur, 
  SektorOlahanPangan, 
  SektorFarmasi,
  SektorEkstraksi,
  SektorPerikanan,
  mineralKritisRate,
  manufakturRate,
  olahanPanganRate,
  farmasiRate
} from "../index";
import { PendidikanData, KesehatanData, HukumData, SektorKomersial, SektorHiburan, HunianData, hunianRate } from "../../3_tempat_umum";
import { OlahragaData } from "../../3_tempat_umum/1_Layanan Publik/5_olahraga";
import { SektorListrik, KAPASITAS_LISTRIK_METADATA } from "./1_db_listrik";
import { intelijenRate } from "../../../2_pertahanan/2_intelijen";
import { armadaMiliterRate } from "../../../2_pertahanan/3_armada_militer";
import { armadaPolisiRate } from "../../../2_pertahanan/4_armada_polisi";
import { religionStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/religionStorage";
import { TAOISME_ELECTRICITY_EFFICIENCY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/10_taoisme/1_plus/plus";

export const KAPASITAS_LISTRIK = Object.fromEntries(
  Object.entries(KAPASITAS_LISTRIK_METADATA).map(([key, val]) => [val.dataKey, val.produksi])
) as Record<string, number>;

export function hitungTotalKapasitas(electricity: SektorListrik) {
  return (
    (electricity.pembangkit_listrik_tenaga_nuklir ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_nuklir +
    (electricity.pembangkit_listrik_tenaga_air ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_air +
    (electricity.pembangkit_listrik_tenaga_surya ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_surya +
    (electricity.pembangkit_listrik_tenaga_uap ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_uap +
    (electricity.pembangkit_listrik_tenaga_gas ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_gas +
    (electricity.pembangkit_listrik_tenaga_angin ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_angin
  );
}

export function hitungOutputPLTN(electricity: SektorListrik) {
  return (electricity.pembangkit_listrik_tenaga_nuklir ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_nuklir;
}

// Helper to enforce minimum 1 MW per building, but allow 0 for disabled sectors
const withMin1MW = (rate: number) => rate <= 0 ? 0 : Math.max(rate, 1);

// Konsumsi Ekstraksi (Mining) - Dynamic based on mineralKritisRate
export const KONSUMSI_EKSTRAKSI = Object.fromEntries(
  Object.values(mineralKritisRate).map(val => [val.dataKey, val.konsumsi_listrik])
) as Record<string, number>;

export function hitungKonsumsiEkstraksi(extraction: SektorEkstraksi) {
  return (
    (extraction.aluminium ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.aluminium) +
    (extraction.emas ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.emas) +
    (extraction.bijih_besi ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.bijih_besi) +
    (extraction.batu_bara ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.batu_bara) +
    (extraction.gas_alam ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.gas_alam) +
    (extraction.garam ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.garam) +
    (extraction.litium ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.litium) +
    (extraction.minyak_bumi ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.minyak_bumi) +
    (extraction.nikel ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.nikel) +
    (extraction.logam_tanah_jarang ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.logam_tanah_jarang) +
    (extraction.tembaga ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.tembaga) +
    (extraction.uranium ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.uranium)
  );
}

// Konsumsi Produksi & Manufaktur - Sinkronisasi Otomatis dengan Database Rate
export const KONSUMSI_PRODUKSI = {
  // Manufaktur
  semikonduktor: manufakturRate["1_pabrik_elektronik"].konsumsi_listrik,
  mobil: manufakturRate["2_pabrik_mobil"].konsumsi_listrik,
  sepeda_motor: manufakturRate["3_pabrik_motor"].konsumsi_listrik,
  smelter: manufakturRate["4_smelter"].konsumsi_listrik,
  semen_beton: manufakturRate["5_pabrik_semen"].konsumsi_listrik,
  kayu: manufakturRate["6_penggergajian_kayu"].konsumsi_listrik,
  pupuk: manufakturRate["7_pabrik_pupuk"].konsumsi_listrik,

  // Olahan Pangan
  air_mineral: olahanPanganRate["1_pabrik_air_mineral"].konsumsi_listrik,
  gula: olahanPanganRate["2_pabrik_gula"].konsumsi_listrik,
  roti: olahanPanganRate["3_pabrik_roti"].konsumsi_listrik,
  pengolahan_daging: olahanPanganRate["4_pabrik_pengolahan_daging"].konsumsi_listrik,
  mie_instan: olahanPanganRate["5_pabrik_mie_instan"].konsumsi_listrik,
  minyak_goreng: olahanPanganRate["6_pabrik_minyak_goreng"].konsumsi_listrik,
  susu: olahanPanganRate["7_pabrik_pengolahan_susu"].konsumsi_listrik,
  pakan_ternak: olahanPanganRate["8_pabrik_pakan_ternak"].konsumsi_listrik,
  ikan_kaleng: olahanPanganRate["9_pabrik_pengalengan_ikan"].konsumsi_listrik,
  kopi_teh: olahanPanganRate["10_pabrik_pengolahan_kopi_teh"].konsumsi_listrik,

  // Farmasi
  farmasi: farmasiRate["1_pabrik_farmasi"].konsumsi_listrik
};

export function hitungKonsumsiProduksi(manufacturing: SektorManufaktur) {
  return (
    (manufacturing.semikonduktor ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.semikonduktor) +
    (manufacturing.mobil ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.mobil) +
    (manufacturing.sepeda_motor ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.sepeda_motor) +
    (manufacturing.smelter ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.smelter) +
    (manufacturing.semen_beton ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.semen_beton) +
    (manufacturing.kayu ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.kayu) +
    (manufacturing.pupuk ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.pupuk)
  );
}

export function hitungKonsumsiOlahanPangan(olahan: SektorOlahanPangan) {
  return (
    (olahan.air_mineral ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.air_mineral) +
    (olahan.gula ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.gula) +
    (olahan.roti ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.roti) +
    (olahan.pengolahan_daging ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.pengolahan_daging) +
    (olahan.mie_instan ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.mie_instan) +
    (olahan.minyak_goreng ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.minyak_goreng) +
    (olahan.susu ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.susu) +
    (olahan.pakan_ternak ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.pakan_ternak) +
    (olahan.ikan_kaleng ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.ikan_kaleng) +
    (olahan.kopi_teh ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.kopi_teh)
  );
}

export function hitungKonsumsiFarmasi(farmasi: SektorFarmasi) {
  return (farmasi.farmasi ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.farmasi);
}

// Konsumsi Pangan (Tani & Ternak)
export const KONSUMSI_PANGAN = {
  ayam_unggas: 0.05, sapi_perah: 0.5, sapi_potong: 0.2, domba_kambing: 0.1,
  udang: 0.65, ikan: 0.5, mutiara: 0.8,
  padi: 0.2, gandum: 0.3, jagung: 0.1,
  sayur: 0.15, umbi: 0.1, kedelai: 0.1, kelapa_sawit: 1, 
  teh: 0.2, kopi: 0.2, kakao: 0.2, tebu: 0.2, karet: 0.3, kapas: 0.15, tembakau: 0.25
};

export function hitungKonsumsiPeternakan(peternakan: SektorPeternakan) {
  if (!peternakan) return 0;
  return Object.keys(peternakan).reduce((sum, key) => {
    const consumptionRate = withMin1MW((KONSUMSI_PANGAN as any)[key] ?? 0);
    return sum + ((peternakan as any)[key] ?? 0) * consumptionRate;
  }, 0);
}

export function hitungKonsumsiAgrikultur(agrikultur: SektorAgrikultur) {
  if (!agrikultur) return 0;
  return Object.keys(agrikultur).reduce((sum, key) => {
    const consumptionRate = withMin1MW((KONSUMSI_PANGAN as any)[key] ?? 0);
    return sum + ((agrikultur as any)[key] ?? 0) * consumptionRate;
  }, 0);
}

export function hitungKonsumsiPerikanan(perikanan: SektorPerikanan) {
  if (!perikanan) return 0;
  return Object.keys(perikanan).reduce((sum, key) => {
    const consumptionRate = withMin1MW((KONSUMSI_PANGAN as any)[key] ?? 0);
    return sum + ((perikanan as any)[key] ?? 0) * consumptionRate;
  }, 0);
}

export function hitungKonsumsiPangan(peternakan: SektorPeternakan, agrikultur: SektorAgrikultur) {
  return hitungKonsumsiPeternakan(peternakan) + hitungKonsumsiAgrikultur(agrikultur);
}

// Konsumsi Pertahanan (Defense)
export const KONSUMSI_PERTAHANAN = {
  penjara: pertahananRate["1_penjara"].konsumsi_listrik,
  barak: armadaMiliterRate["1_barak"].konsumsi_listrik || 1,
  gudang_senjata: pertahananRate["2_gudang_senjata"].konsumsi_listrik,
  hangar_tank: pertahananRate["3_hangar_tank"].konsumsi_listrik
};

export const KONSUMSI_STRATEGIC = {
  pusat_komando: pertahananRate["5_pusat_komando"].konsumsi_listrik,
  pangkalan_udara: pertahananRate["6_pangkalan_udara"].konsumsi_listrik,
  pangkalan_laut: pertahananRate["7_pangkalan_laut"].konsumsi_listrik,
  arms_factory: 0, // Not explicitly defined in pertahananRate, using 0 for safety
  program_luar_angkasa: pertahananRate["8_program_luar_angkasa"].konsumsi_listrik,
  pertahanan_siber: pertahananRate["9_pertahanan_siber"].konsumsi_listrik
};

export const KONSUMSI_PABRIK_MILITER = {
  pabrik_amunisi: pabrikMiliterRate["2_pabrik_amunisi"].konsumsi_listrik
};

// 5. Konsumsi Unit Intelijen & Strategis ditangani secara dinamis dari intelijenRate

export function hitungKonsumsiPertahanan(
  management: SektorPertahanan,
  fleet: SektorArmadaMiliter,
  strategis: SektorMiliterStrategis,
  police: SektorArmadaKepolisian,
  pabrik: SektorPabrikMiliter
) {
  const base = (
    (management.penjara ?? 0) * withMin1MW(KONSUMSI_PERTAHANAN.penjara) +
    (management.gudang_senjata ?? 0) * withMin1MW(KONSUMSI_PERTAHANAN.gudang_senjata) +
    (management.hangar_tank ?? 0) * withMin1MW(KONSUMSI_PERTAHANAN.hangar_tank) +
    (management.pusat_komando ?? 0) * withMin1MW(KONSUMSI_STRATEGIC.pusat_komando) +
    (management.pangkalan_udara ?? 0) * withMin1MW(KONSUMSI_STRATEGIC.pangkalan_udara) +
    (management.pangkalan_laut ?? 0) * withMin1MW(KONSUMSI_STRATEGIC.pangkalan_laut)
  );

  const fleetCons = hitungKonsumsiArmadaDatabase(fleet);
  const securityCons = hitungKonsumsiIntelDatabase(strategis.intel_radar);

  const managementCons = (
    (management.pertahanan_siber ?? 0) * withMin1MW(0)
  );

  const policeCons = hitungKonsumsiPolisiDatabase(police.armada_polisi);

  const pabrikCons = (
    (pabrik.pabrik_amunisi ?? 0) * withMin1MW(KONSUMSI_PABRIK_MILITER.pabrik_amunisi)
  );

  return base + fleetCons + securityCons + managementCons + policeCons + pabrikCons;
}

export function hitungKonsumsiBangunanMiliter(
  management: SektorPertahanan,
  barak: number,
  status_nuklir: boolean
) {
  return (
    (management.penjara ?? 0) * withMin1MW(KONSUMSI_PERTAHANAN.penjara) +
    (management.gudang_senjata ?? 0) * withMin1MW(KONSUMSI_PERTAHANAN.gudang_senjata) +
    (management.hangar_tank ?? 0) * withMin1MW(KONSUMSI_PERTAHANAN.hangar_tank) +
    (management.pusat_komando ?? 0) * withMin1MW(KONSUMSI_STRATEGIC.pusat_komando) +
    (management.pangkalan_udara ?? 0) * withMin1MW(KONSUMSI_STRATEGIC.pangkalan_udara) +
    (management.pangkalan_laut ?? 0) * withMin1MW(KONSUMSI_STRATEGIC.pangkalan_laut) +
    (management.program_luar_angkasa ?? 0) * withMin1MW(KONSUMSI_STRATEGIC.program_luar_angkasa) +
    (management.pertahanan_siber ?? 0) * withMin1MW(KONSUMSI_STRATEGIC.pertahanan_siber) +
    (barak ?? 0) * withMin1MW(KONSUMSI_PERTAHANAN.barak) +
    (status_nuklir ? withMin1MW(0) : 0)
  );
}

export function hitungKonsumsiPabrikMiliter(pabrik: SektorPabrikMiliter) {
  return (
    (pabrik.pabrik_amunisi ?? 0) * withMin1MW(KONSUMSI_PABRIK_MILITER.pabrik_amunisi)
  );
}

export function hitungKonsumsiIntelDatabase(intel: any) {
  if (!intel) return 0;
  return Object.values(intelijenRate).reduce((total, item) => {
    const count = intel[item.key] ?? 0;
    const power = item.konsumsi_listrik ?? 0;
    return total + (count * power);
  }, 0);
}

export function hitungKonsumsiPolisiDatabase(police: any) {
  if (!police) return 0;
  return Object.values(armadaPolisiRate).reduce((total, item) => {
    const count = police[item.dataKey] ?? 0;
    const power = item.konsumsi_listrik ?? 0;
    return total + (count * power);
  }, 0);
}

// Konsumsi Sosial
export const KONSUMSI_SOSIAL = {
  pendidikan: {
    prasekolah: 1, dasar: 2, menengah: 5, lanjutan: 8,
    universitas: 25, lembaga_pendidikan: 15, laboratorium: 30, observatorium: 10,
    pusat_penelitian: 45, pusat_pengembangan: 20
  },
  kesehatan: { rumah_sakit_besar: 100, rumah_sakit_kecil: 25, pusat_diagnostik: 15 },
  olahraga: { kolam_renang: 10, sirkuit_balap: 80, stadion: 150, stadion_internasional: 150, gym: 15, golf: 40, esports: 120, gokart: 25 },
  hukum: { akademi_polisi: 10, pos_polisi: 3, armada_mobil_polisi: 0.1, kejaksaan: 20, pengadilan: 20, pusat_bantuan_hukum: 5 },
  komersial: { pusat_belanja: 50, hotel: 40, pusat_grosir_tekstil: 25 },
  hiburan: { bioskop: 15, teater: 12 }
};

export function hitungKonsumsiSosial(data: { pendidikan?: PendidikanData; kesehatan?: KesehatanData; hukum?: HukumData }) {
  const edu = data.pendidikan || {};
  const kesehatan = data.kesehatan || {};
  const hukum = data.hukum || {};

  const totalEdu = Object.keys(KONSUMSI_SOSIAL.pendidikan).reduce((total, key) =>
    total + ((edu as any)[key] ?? 0) * withMin1MW((KONSUMSI_SOSIAL.pendidikan as any)[key]), 0);

  const totalHealth = Object.keys(KONSUMSI_SOSIAL.kesehatan).reduce((total, key) =>
    total + ((kesehatan as any)[key] ?? 0) * withMin1MW((KONSUMSI_SOSIAL.kesehatan as any)[key]), 0);

  const totalLaw = Object.keys(KONSUMSI_SOSIAL.hukum).reduce((total, key) =>
    total + ((hukum as any)[key] ?? 0) * withMin1MW((KONSUMSI_SOSIAL.hukum as any)[key]), 0);

  return totalEdu + totalHealth + totalLaw;
}

export function hitungKonsumsiOlahraga(olahraga: OlahragaData) {
  if (!olahraga) return 0;
  return Object.keys(KONSUMSI_SOSIAL.olahraga).reduce((total, key) =>
    total + ((olahraga as any)[key] ?? 0) * withMin1MW((KONSUMSI_SOSIAL.olahraga as any)[key]), 0);
}

export function hitungKonsumsiKomersial(komersial?: SektorKomersial) {
  if (!komersial) return 0;
  return Object.keys(KONSUMSI_SOSIAL.komersial).reduce((total, key) =>
    total + ((komersial as any)[key] ?? 0) * withMin1MW((KONSUMSI_SOSIAL.komersial as any)[key]), 0);
}

export function hitungKonsumsiHiburan(hiburan?: SektorHiburan) {
  if (!hiburan) return 0;
  return Object.keys(KONSUMSI_SOSIAL.hiburan).reduce((total, key) =>
    total + ((hiburan as any)[key] ?? 0) * withMin1MW((KONSUMSI_SOSIAL.hiburan as any)[key]), 0);
}

// Konsumsi Hunian & Pemukiman - Sinkronisasi Otomatis dengan Database Rate
export const KONSUMSI_HUNIAN = {
  rumah_subsidi: hunianRate.rumah_subsidi.konsumsi_listrik, 
  apartemen: hunianRate.apartemen.konsumsi_listrik, 
  mansion: hunianRate.mansion.konsumsi_listrik
};

export function hitungKonsumsiHunian(hunian?: HunianData) {
  if (!hunian) return 0;
  return (
    (hunian.rumah_subsidi ?? 0) * withMin1MW(KONSUMSI_HUNIAN.rumah_subsidi) +
    (hunian.apartemen ?? 0) * withMin1MW(KONSUMSI_HUNIAN.apartemen) +
    (hunian.mansion ?? 0) * withMin1MW(KONSUMSI_HUNIAN.mansion)
  );
}

// Konsumsi Transportasi
export const KONSUMSI_TRANSPORTASI = {
  jalur_sepeda: 0, jalan_raya: 3, terminal_bus: 5, stasiun_kereta_api: 15,
  kereta_bawah_tanah: 20, pelabuhan: 25, bandara: 30, helipad: 2
};

export function hitungKonsumsiTransportasi(infra: SektorInfrastruktur) {
  if (!infra) return 0;
  return (
    (infra.jalur_sepeda ?? 0) * withMin1MW(KONSUMSI_TRANSPORTASI.jalur_sepeda) +
    (infra.kereta_bawah_tanah ?? 0) * withMin1MW(KONSUMSI_TRANSPORTASI.kereta_bawah_tanah) +
    (infra.stasiun_kereta_api ?? 0) * withMin1MW(KONSUMSI_TRANSPORTASI.stasiun_kereta_api) +
    (infra.jalan_raya ?? 0) * withMin1MW(KONSUMSI_TRANSPORTASI.jalan_raya) +
    (infra.pelabuhan ?? 0) * withMin1MW(KONSUMSI_TRANSPORTASI.pelabuhan) +
    (infra.bandara ?? 0) * withMin1MW(KONSUMSI_TRANSPORTASI.bandara) +
    (infra.terminal_bus ?? 0) * withMin1MW(KONSUMSI_TRANSPORTASI.terminal_bus) +
    (infra.helipad ?? 0) * withMin1MW(KONSUMSI_TRANSPORTASI.helipad)
  );
}

export function hitungKonsumsiArmadaDatabase(fleet: any) {
  if (!fleet) return 0;
  
  let total = 0;
  
  // Hanya Barak yang mengonsumsi listrik nasional (Penerangan, Fasilitas, dll)
  // Transportasi tempur (tank, kapal, pesawat) dianggap menggunakan bahan bakar sendiri/internal
  total += (fleet.barak || 0) * (armadaMiliterRate["1_barak"].konsumsi_listrik || 0);
  
  return total;
}

export function hitungTotalKonsumsiNasional(data: any) {
  let total = (
    hitungKonsumsiEkstraksi(data.sektor_ekstraksi) +
    hitungKonsumsiProduksi(data.sektor_manufaktur) +
    hitungKonsumsiOlahanPangan(data.sektor_olahan_pangan) +
    hitungKonsumsiFarmasi(data.sektor_farmasi) +
    hitungKonsumsiAgrikultur(data.sektor_agrikultur) +
    hitungKonsumsiPeternakan(data.sektor_peternakan) +
    hitungKonsumsiPerikanan(data.sektor_perikanan) +
    hitungKonsumsiPertahanan(data.sektor_pertahanan, data.armada_militer, data.militer_strategis, data.armada_kepolisian, data.pabrik_militer) +
    hitungKonsumsiSosial(data) +
    hitungKonsumsiOlahraga(data.sektor_olahraga) +
    hitungKonsumsiKomersial(data.sektor_komersial) +
    hitungKonsumsiHiburan(data.sektor_hiburan) +
    hitungKonsumsiHunian(data.hunian) +
    hitungKonsumsiTransportasi(data.infrastruktur)
  );

  // Taoisme Efficiency Bonus (Harmony with Nature)
  const currentReligion = religionStorage.getCurrentReligion(data.religion || "Islam");
  if (currentReligion === "Taoisme") {
    total *= TAOISME_ELECTRICITY_EFFICIENCY;
  }

  return total;
}
