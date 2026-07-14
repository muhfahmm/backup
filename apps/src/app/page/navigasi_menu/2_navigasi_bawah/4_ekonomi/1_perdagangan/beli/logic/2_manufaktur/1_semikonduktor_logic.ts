// @ts-nocheck
export const hasSemikonduktorBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['semikonduktor'] || 0) > 0;
};
