// @ts-nocheck
export const hasKedelaiBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['kedelai'] || 0) > 0;
};
