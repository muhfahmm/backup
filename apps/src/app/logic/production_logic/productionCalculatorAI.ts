import { calculateProductionIncrement, formatDate } from './productionCalculatorUser';

/**
 * Production AI helper for partner production.
 *
 * Digunakan untuk menghitung "Produksi Mitra (Total)" pada modal pembelian.
 */
export function calculatePartnerProductionAI(
  resourceKey: string,
  partnerData: Record<string, any> | null,
  metadata: Record<string, any> | null,
  currentDate?: Date
): number {
  if (!partnerData || !metadata || !currentDate || !resourceKey) return 0;

  const buildingCount = Number(partnerData[resourceKey] || 0);
  if (buildingCount <= 0) return 0;

  const resourceMeta = findMetadata(resourceKey, metadata);
  if (!resourceMeta || !resourceMeta.produksi) return 0;

  const buildDateKey = `build_date_${resourceKey}`;
  const buildDateRaw = partnerData[buildDateKey] as string | undefined;
  const currentDateStr = formatDate(currentDate);
  let finalBuildDate: string;
  if (typeof buildDateRaw === 'string' && buildDateRaw) {
    finalBuildDate = buildDateRaw;
  } else {
    const yesterday = new Date(currentDate);
    yesterday.setDate(yesterday.getDate() - 1);
    finalBuildDate = formatDate(yesterday);
  }

  return calculateProductionIncrement(
    resourceMeta.produksi,
    buildingCount,
    finalBuildDate,
    currentDateStr
  );
}

export function normalizePartnerBuildDates(
  partnerData: Record<string, any> | null,
  resourceKeys: string[],
  currentDate: Date
): Record<string, any> | null {
  if (!partnerData) return null;

  const normalized = { ...partnerData };
  const currentDateStr = formatDate(currentDate);

  for (const resourceKey of resourceKeys) {
    const buildingCount = Number(normalized[resourceKey] || 0);
    const buildDateKey = `build_date_${resourceKey}`;

    if (buildingCount > 0 && !normalized[buildDateKey]) {
      normalized[buildDateKey] = currentDateStr;
    }
  }

  return normalized;
}

function findMetadata(key: string, metadata: Record<string, any>): any {
  if (!metadata) return undefined;
  if (metadata[key]) return metadata[key];

  for (const metaKey of Object.keys(metadata)) {
    const entry = metadata[metaKey];
    if (!entry) continue;
    if (entry.dataKey === key) return entry;
    if (metaKey.endsWith(`_${key}`) || metaKey === `1_${key}`) return entry;
  }

  return undefined;
}
