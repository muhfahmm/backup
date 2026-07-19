// @ts-nocheck
export const hasUdangBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['udang'] || 0) > 0;
};
