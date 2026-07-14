// @ts-nocheck
export const hasSmelterBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['smelter'] || 0) > 0;
};
