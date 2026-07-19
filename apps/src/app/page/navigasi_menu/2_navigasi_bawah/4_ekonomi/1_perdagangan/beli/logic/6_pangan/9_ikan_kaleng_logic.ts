// @ts-nocheck
export const hasIkanKalengBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['ikan_kaleng'] || 0) > 0;
};
