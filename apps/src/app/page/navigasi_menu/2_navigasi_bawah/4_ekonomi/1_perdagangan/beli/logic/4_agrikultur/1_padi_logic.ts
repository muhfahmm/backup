// @ts-nocheck
export const hasPadiBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['padi'] || 0) > 0;
};
