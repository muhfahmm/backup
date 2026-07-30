// Data konsumsi per 1.000 penduduk per hari.
// Nilai prodPerUnit TIDAK ada di sini — produksi diambil langsung dari metadata JSON bangunan.
export const FOOD_CONSUMPTION_PER_CAPITA: Record<string, number> = {
  // Peternakan
  ayam_unggas: 0.15,
  sapi_potong: 0.08,
  sapi_perah: 0.12,
  domba_kambing: 0.05,
  // Agrikultur
  padi: 0.35,
  gandum: 0.24,
  jagung: 0.18,
  sayur: 0.30,
  umbi: 0.20,
  kedelai: 0.15,
  kelapa_sawit: 0.10,
  kopi: 0.05,
  teh: 0.06,
  kakao: 0.04,
  tebu: 0.15,
  karet: 0.02,
  // Perikanan
  udang: 0.08,
  ikan: 0.25,
  mutiara: 0.01,
  // Olahan Pangan
  air_mineral: 0.35,
  gula: 0.20,
  roti: 0.18,
  pengolahan_daging: 0.10,
  mie_instan: 0.25,
  minyak_goreng: 0.10,
  susu: 0.15,
};