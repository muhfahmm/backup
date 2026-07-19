// @ts-nocheck
export const hasSusuBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['susu'] || 0) > 0;
};
