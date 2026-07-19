// @ts-nocheck
export const hasAyamUnggasBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['ayam_unggas'] || 0) > 0;
};
