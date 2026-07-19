// @ts-nocheck
export const hasRotiBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['roti'] || 0) > 0;
};
