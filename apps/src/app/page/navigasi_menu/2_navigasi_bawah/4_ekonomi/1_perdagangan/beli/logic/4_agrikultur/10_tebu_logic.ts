// @ts-nocheck
export const hasTebuBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['tebu'] || 0) > 0;
};