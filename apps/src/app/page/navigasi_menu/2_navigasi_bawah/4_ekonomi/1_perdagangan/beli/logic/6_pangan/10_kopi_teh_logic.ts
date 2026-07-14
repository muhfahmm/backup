// @ts-nocheck
export const hasKopiTehBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['kopi_teh'] || 0) > 0;
};