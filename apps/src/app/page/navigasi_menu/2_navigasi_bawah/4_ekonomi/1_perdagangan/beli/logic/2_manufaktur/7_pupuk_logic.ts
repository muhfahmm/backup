// @ts-nocheck
export const hasPupukBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['pupuk'] || 0) > 0;
};
