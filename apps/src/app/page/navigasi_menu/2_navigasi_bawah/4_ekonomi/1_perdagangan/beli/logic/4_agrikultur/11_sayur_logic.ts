// @ts-nocheck
export const hasSayurBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['sayur'] || 0) > 0;
};
