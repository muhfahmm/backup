/**
 * Population Logic - Otak Sistem Populasi Dinamis
 * Mirip dengan treasuryUpdater.ts, tapi untuk populasi dengan +/- daily change
 */

import { logger } from '../../../lib/logger';

// ==============================
// Interface Tipe Data
// ==============================
export interface CountryDetail {
  jumlah_penduduk: number;
  rata_rata_pajak?: number;
  living_cost_index?: number;
  indeks_ketahanan_pangan?: number;
  surplus_listrik?: number;
  tingkat_hunian_layak?: number;
  harapan_hidup?: number;
  tingkat_keamanan?: number;
  inisiatif_aktif?: { nama: string; boost: number }[];
  
  // Populasi tracking fields
  accumulated_births?: number;
  accumulated_deaths?: number;
  [key: string]: any;
}

export interface PopulationDailyMetrics {
  dailyBirths: number;
  dailyDeaths: number;
  netDailyChange: number;  // +/- per hari (seperti netBalance di treasury)
  homelessCount: number;
  kepuasanUmum: number;
  lifeExpectancy: number;
  securityLevel: number;
  livingCostIndex: number;
}

export interface PopulationSectoral {
  pajak: number;
  harga: number;
  pangan: number;
  listrik: number;
  hunian: number;
}

// ==============================
// 1. Hitung Kepuasan Sektoral (dari RingkasanPopulasiModal)
// ==============================
export const calculateSectoralSatisfaction = (detail: CountryDetail): PopulationSectoral => {
  const pajak = detail.rata_rata_pajak !== undefined
    ? Math.max(0, Math.min(100, 100 - detail.rata_rata_pajak))
    : 50;

  const harga = detail.living_cost_index !== undefined
    ? Math.max(0, Math.min(100, 100 - detail.living_cost_index))
    : 50;

  const pangan = detail.indeks_ketahanan_pangan ?? 50;

  let listrik = 50;
  if (detail.surplus_listrik !== undefined) {
    if (detail.surplus_listrik > 50) listrik = 80;
    else if (detail.surplus_listrik > 0) listrik = 70;
    else if (detail.surplus_listrik > -50) listrik = 40;
    else listrik = 20;
  }

  const hunian = detail.tingkat_hunian_layak ?? 50;

  return { pajak, harga, pangan, listrik, hunian };
};

// ==============================
// 2. Hitung Kepuasan Umum
// ==============================
export const calculateGeneralSatisfaction = (detail: CountryDetail): number => {
  const sektoral = calculateSectoralSatisfaction(detail);
  
  const averageSectoral = (sektoral.pajak + sektoral.harga + sektoral.pangan + sektoral.listrik + sektoral.hunian) / 5;
  const initiativeBoost = detail.inisiatif_aktif?.reduce((sum, ini) => sum + ini.boost, 0) ?? 0;
  const generalSatisfaction = Math.min(200, averageSectoral + initiativeBoost);

  return generalSatisfaction;
};

// ==============================
// 3. Hitung Life Expectancy & Security
// ==============================
export const calculateLifeExpectancy = (detail: CountryDetail, satisfaction: number): number => {
  const baseLife = detail.harapan_hidup ?? 73.2;
  // Kepuasan tinggi → harapan hidup membaik (±5 tahun dari base)
  return Math.max(30, baseLife + (satisfaction - 50) * 0.1);
};

export const calculateSecurityLevel = (detail: CountryDetail, satisfaction: number): number => {
  const baseSecurity = detail.tingkat_keamanan ?? 84.5;
  // Kepuasan mempengaruhi keamanan (±15% dari base)
  return Math.min(100, Math.max(10, baseSecurity + (satisfaction - 50) * 0.15));
};

// ==============================
// 4. Hitung Daily Births (Kelahiran Harian)
// ==============================
export const calculateDailyBirths = (
  populasi: number,
  satisfaction: number
): number => {
  const baseBirthRate = 0.000042;
  // Kepuasan tinggi → kelahiran naik (multiplier 0.8 – 1.2)
  const birthMultiplier = 0.8 + (satisfaction / 100) * 0.4;
  return Math.floor(populasi * baseBirthRate * birthMultiplier);
};

// ==============================
// 5. Hitung Daily Deaths (Kematian Harian)
// ==============================
export const calculateDailyDeaths = (
  populasi: number,
  lifeExpectancy: number,
  securityLevel: number
): number => {
  const baseDeathRate = 0.000018;
  const lifeFactor = 73.2 / lifeExpectancy;
  const securityFactor = 84.5 / securityLevel;
  return Math.floor(populasi * baseDeathRate * lifeFactor * securityFactor);
};

// ==============================
// 6. Hitung Homeless Count (Tunawisma)
// ==============================
export const calculateHomelessCount = (
  populasi: number,
  housingQuality: number
): number => {
  const baseHomelessRate = 0.007;
  const homelessMultiplier = (100 - housingQuality) / 50;
  return Math.floor(populasi * baseHomelessRate * homelessMultiplier);
};

// ==============================
// 7. MAIN: Hitung Daily Population Metrics (seperti calculateCountryNetBalance)
// ==============================
export const calculateDailyPopulationChange = (detail: CountryDetail): PopulationDailyMetrics => {
  if (!detail || typeof detail !== 'object') {
    return {
      dailyBirths: 0,
      dailyDeaths: 0,
      netDailyChange: 0,
      homelessCount: 0,
      kepuasanUmum: 50,
      lifeExpectancy: 73.2,
      securityLevel: 84.5,
      livingCostIndex: 62.4,
    };
  }

  const populasi = detail.jumlah_penduduk || 10_000_000;
  
  // Hitung kepuasan umum terlebih dahulu
  const kepuasanUmum = calculateGeneralSatisfaction(detail);
  
  // Hitung indikator demografi
  const lifeExpectancy = calculateLifeExpectancy(detail, kepuasanUmum);
  const securityLevel = calculateSecurityLevel(detail, kepuasanUmum);
  
  // Hitung daily metrics
  const dailyBirths = calculateDailyBirths(populasi, kepuasanUmum);
  const dailyDeaths = calculateDailyDeaths(populasi, lifeExpectancy, securityLevel);
  
  // Net daily change: +births -deaths (seperti +income -expense di treasury)
  const netDailyChange = dailyBirths - dailyDeaths;
  
  // Hitung homeless
  const sektoral = calculateSectoralSatisfaction(detail);
  const homelessCount = calculateHomelessCount(populasi, sektoral.hunian);
  
  const livingCostIndex = detail.living_cost_index ?? 62.4;

  return {
    dailyBirths,
    dailyDeaths,
    netDailyChange,
    homelessCount,
    kepuasanUmum,
    lifeExpectancy,
    securityLevel,
    livingCostIndex,
  };
};

// ==============================
// 8. Update Population Count (dipanggil setiap hari dari map-system)
// ==============================
export const updateDailyPopulation = (
  detail: CountryDetail,
  metrics?: PopulationDailyMetrics
): Partial<CountryDetail> => {
  if (!detail) return {};

  // Jika metrics tidak diberikan, hitung dulu
  const dailyMetrics = metrics || calculateDailyPopulationChange(detail);
  
  const currentPopulasi = Number(detail.jumlah_penduduk) || 10_000_000;
  const newPopulasi = Math.max(0, currentPopulasi + dailyMetrics.netDailyChange);

  // Track accumulated births/deaths (opsional, untuk statistik)
  const accumulatedBirths = (Number(detail.accumulated_births) || 0) + dailyMetrics.dailyBirths;
  const accumulatedDeaths = (Number(detail.accumulated_deaths) || 0) + dailyMetrics.dailyDeaths;

  return {
    jumlah_penduduk: newPopulasi,
    accumulated_births: accumulatedBirths,
    accumulated_deaths: accumulatedDeaths,
  };
};

// ==============================
// 9. Format Population dengan Net Change (untuk UI, seperti formatCurrencyEM)
// ==============================
export const formatPopulationWithNetChange = (
  populasi: number,
  netChange: number
): string => {
  const sign = netChange >= 0 ? '+' : '';
  return `${populasi.toLocaleString('id-ID')} (${sign}${netChange.toLocaleString('id-ID')}/hari)`;
};

// ==============================
// 10. Get Color untuk Net Population Change (untuk UI, seperti netBalanceColor)
// ==============================
export const getNetPopulationChangeColor = (netChange: number): string => {
  if (netChange >= 100) return 'text-emerald-700';      // Pertumbuhan bagus
  if (netChange >= 0) return 'text-emerald-600';        // Stabil/tumbuh
  if (netChange >= -100) return 'text-yellow-600';      // Turun sedikit
  return 'text-rose-700';                               // Turun drastis
};

// ==============================
// 11. Logger untuk debugging
// ==============================
export const logPopulationMetrics = (
  detail: CountryDetail,
  metrics: PopulationDailyMetrics,
  dateStr: string
): void => {
  logger.log('PopulationLogic', `[${dateStr}] Population Metrics:`, {
    population: detail.jumlah_penduduk,
    dailyBirths: metrics.dailyBirths,
    dailyDeaths: metrics.dailyDeaths,
    netChange: metrics.netDailyChange,
    satisfaction: metrics.kepuasanUmum.toFixed(1),
    lifeExpectancy: metrics.lifeExpectancy.toFixed(1),
    security: metrics.securityLevel.toFixed(1),
  });
};
