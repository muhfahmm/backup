export * from "./1_komando_pertahanan";
export * from "./2_intelijen";
export * from "./3_armada_militer";
export * from "./4_armada_polisi";
export * from "./5_manajemen_pertahanan";

export type { SektorMiliterStrategis } from "./1_komando_pertahanan";
export type { SektorArmadaMiliter } from "./3_armada_militer";
export type { SektorArmadaKepolisian } from "./4_armada_polisi";
export type { SektorPertahanan } from "./5_manajemen_pertahanan";

export const produksiMiliter = [
  // 1. Strategis & Intelijen (Intelijen)
  { key: "satellite", category: "Intelijen", label: "Sistem Satelit", deskripsi: "Orbit Intelijen", biaya_pembangunan: 262, waktu_pembangunan: 180 },
  { key: "radar", category: "Intelijen", label: "Jaringan Radar", deskripsi: "Deteksi Dini", biaya_pembangunan: 90, waktu_pembangunan: 90 },
  { key: "operasi_siber", category: "Intelijen", label: "Operasi Cyber", deskripsi: "Perang Digital", biaya_pembangunan: 135, waktu_pembangunan: 120 },

  // 2. Polisi & Keamanan (Polisi)
  { key: "pos_polisi", category: "Polisi", label: "Kantor Polisi", deskripsi: "Komando Wilayah", biaya_pembangunan: 18, waktu_pembangunan: 60 },
  { key: "mobil_patroli_interceptor", category: "Polisi", label: "Mobil Patroli Interceptor", deskripsi: "Patroli Lantas", biaya_pembangunan: 1, waktu_pembangunan: 7 },
  { key: "unit_interceptor_r2", category: "Polisi", label: "Unit Interceptor Roda Dua", deskripsi: "Patroli Cepat", biaya_pembangunan: 1, waktu_pembangunan: 5 },
  { key: "unit_k9", category: "Polisi", label: "Unit K-9", deskripsi: "Pelacakan", biaya_pembangunan: 1, waktu_pembangunan: 5 },
  { key: "swat", category: "Polisi", label: "Pasukan SWAT", deskripsi: "Taktis Khusus", biaya_pembangunan: 3, waktu_pembangunan: 30 },
  { key: "police_heli", category: "Polisi", label: "Heli Polisi", deskripsi: "Udara Polisi", biaya_pembangunan: 11, waktu_pembangunan: 60 },
  { key: "riot_control", category: "Polisi", label: "Anti-Huru Hara", deskripsi: "Ketertiban", biaya_pembangunan: 3, waktu_pembangunan: 20 },
  { key: "cctv_network", category: "Polisi", label: "Network CCTV", deskripsi: "Surveillance", biaya_pembangunan: 7, waktu_pembangunan: 30 },
  { key: "forensik", category: "Polisi", label: "Pusat Forensik", deskripsi: "Identifikasi", biaya_pembangunan: 22, waktu_pembangunan: 90 }
];
