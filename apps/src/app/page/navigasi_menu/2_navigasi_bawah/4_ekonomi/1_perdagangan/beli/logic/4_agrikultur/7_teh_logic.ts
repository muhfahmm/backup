// @ts-nocheck
export const hasTehBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['teh'] || 0) > 0;
};
