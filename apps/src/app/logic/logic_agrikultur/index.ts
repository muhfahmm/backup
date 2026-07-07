import { ProdResult } from '../index';
import { calculateDailyProduction } from '../dailyProductionCalculator';

export function computeAgrikultur(
  key: string,
  countryDetail: any,
  metadata: Record<string, any>,
  currentDate?: Date
): ProdResult {
  const per = Number(metadata[key]?.produksi) || 0;
  const count = Number(countryDetail?.[key]) || 0;
  const unit = metadata[key]?.satuan || '';
  
  // Jika ada currentDate, gunakan daily production calculation
  if (currentDate) {
    const state = calculateDailyProduction(key, per, count, currentDate, countryDetail);
    return { perBuilding: per, total: state.accumulatedTotal, unit };
  }
  
  // Fallback ke perhitungan sederhana (tanpa daily accumulation)
  return { perBuilding: per, total: per * count, unit };
}
