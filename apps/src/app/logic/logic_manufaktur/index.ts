import { ProdResult } from '../index';

export function computeManufaktur(key: string, countryDetail: any, metadata: Record<string, any>): ProdResult {
  const per = Number(metadata[key]?.produksi) || 0;
  const count = Number(countryDetail?.[key]) || 0;
  const unit = metadata[key]?.satuan || '';
  return { perBuilding: per, total: per * count, unit };
}
