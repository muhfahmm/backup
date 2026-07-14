// @ts-nocheck
export const hasKayuBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['kayu'] || 0) > 0;
};
