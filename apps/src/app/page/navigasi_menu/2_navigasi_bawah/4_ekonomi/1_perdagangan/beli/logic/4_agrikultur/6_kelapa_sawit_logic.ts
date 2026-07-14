// @ts-nocheck
export const hasKelapaSawitBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['kelapa_sawit'] || 0) > 0;
};