// @ts-nocheck
export const hasKapasBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['kapas'] || 0) > 0;
};