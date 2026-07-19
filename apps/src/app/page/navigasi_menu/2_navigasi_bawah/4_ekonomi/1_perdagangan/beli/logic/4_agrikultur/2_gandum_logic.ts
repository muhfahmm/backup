// @ts-nocheck
export const hasGandumBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['gandum'] || 0) > 0;
};
