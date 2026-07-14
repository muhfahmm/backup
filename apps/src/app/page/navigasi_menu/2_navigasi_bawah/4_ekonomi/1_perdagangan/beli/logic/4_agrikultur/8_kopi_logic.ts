// @ts-nocheck
export const hasKopiBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['kopi'] || 0) > 0;
};