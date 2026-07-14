// @ts-nocheck
export const hasMieInstanBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['mie_instan'] || 0) > 0;
};