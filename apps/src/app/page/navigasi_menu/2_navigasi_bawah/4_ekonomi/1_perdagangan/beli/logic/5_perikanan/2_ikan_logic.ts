// @ts-nocheck
export const hasIkanBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['ikan'] || 0) > 0;
};