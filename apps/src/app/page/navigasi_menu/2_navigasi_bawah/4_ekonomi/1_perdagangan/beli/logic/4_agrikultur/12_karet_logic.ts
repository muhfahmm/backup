// @ts-nocheck
export const hasKaretBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['karet'] || 0) > 0;
};