// @ts-nocheck
export const hasGulaBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['gula'] || 0) > 0;
};