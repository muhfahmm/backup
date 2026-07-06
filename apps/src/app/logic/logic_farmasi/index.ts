import { ProdResult } from '../index';

// Farmasi: production should start at 0 and grow per day. Placeholder returns 0.
export function computeFarmasi(key: string, countryDetail: any, metadata: Record<string, any>): ProdResult {
  const per = Number(metadata[key]?.produksi) || 0;
  const count = Number(countryDetail?.[key]) || 0;
  const unit = metadata[key]?.satuan || '';
  // TODO: implement day-based accumulation
  return { perBuilding: per, total: 0, unit };
}
