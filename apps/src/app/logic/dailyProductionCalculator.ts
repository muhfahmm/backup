/**
 * Daily Production Calculator
 * Menghitung produksi yang terakumulasi berdasarkan perubahan tanggal
 * 
 * Logika:
 * - Default: 0 pada hari pertama
 * - Setiap hari yang berlalu: produksi += (produksi_per_hari × jumlah_bangunan)
 * - Accumulation disimpan di countryDetail[`accumulated_${key}`]
 */

export type DailyProductionState = {
  accumulatedTotal: number;
  lastProductionDate: string;
  daysElapsed: number;
};

/**
 * Hitung jumlah hari antara dua tanggal
 */
export function calculateDaysBetween(startDate: Date, endDate: Date): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

/**
 * Format tanggal ke string untuk penyimpanan (YYYY-MM-DD)
 */
export function formatDateForStorage(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Parse tanggal dari string storage
 */
export function parseDateFromStorage(dateStr: string): Date {
  return new Date(dateStr + 'T00:00:00');
}

/**
 * Hitung produksi harian untuk suatu item
 * 
 * @param key - key bangunan (misal: 'padi', 'ayam_unggas')
 * @param productionPerDay - produksi per bangunan per hari
 * @param buildingCount - jumlah bangunan
 * @param currentDate - tanggal saat ini (dari time controller)
 * @param countryDetail - data negara yang tersimpan
 * @returns objek dengan accumulatedTotal, lastProductionDate, daysElapsed
 */
export function calculateDailyProduction(
  key: string,
  productionPerDay: number,
  buildingCount: number,
  currentDate: Date,
  countryDetail: any
): DailyProductionState {
  const accumulatedKey = `accumulated_${key}`;
  const lastDateKey = `last_prod_date_${key}`;
  
  // Ambil nilai yang sudah tersimpan
  let lastStoredDate = countryDetail?.[lastDateKey];
  let currentAccumulated = Number(countryDetail?.[accumulatedKey]) || 0;
  
  // Jika belum ada lastStoredDate, set ke hari sebelumnya
  if (!lastStoredDate) {
    const yesterday = new Date(currentDate);
    yesterday.setDate(yesterday.getDate() - 1);
    lastStoredDate = formatDateForStorage(yesterday);
  }
  
  // Parse tanggal yang tersimpan
  const lastDate = parseDateFromStorage(lastStoredDate);
  const currentDateFormatted = formatDateForStorage(currentDate);
  
  // Hitung jumlah hari yang berlalu
  const daysElapsed = calculateDaysBetween(lastDate, currentDate);
  
  // Hitung produksi baru
  if (daysElapsed > 0) {
    const productionPerDayTotal = productionPerDay * buildingCount;
    const newProduction = productionPerDayTotal * daysElapsed;
    currentAccumulated += newProduction;
  }
  
  return {
    accumulatedTotal: currentAccumulated,
    lastProductionDate: currentDateFormatted,
    daysElapsed
  };
}

/**
 * Update countryDetail dengan produksi harian baru
 */
export function updateCountryDetailWithProduction(
  countryDetail: any,
  key: string,
  state: DailyProductionState
): any {
  return {
    ...countryDetail,
    [key]: state.accumulatedTotal,
    [`accumulated_${key}`]: state.accumulatedTotal,
    [`last_prod_date_${key}`]: state.lastProductionDate
  };
}
