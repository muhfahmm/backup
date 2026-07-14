// @ts-nocheck
export const hasUmbiBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['umbi'] || 0) > 0;
};