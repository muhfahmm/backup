// @ts-nocheck
export const hasFarmasiBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['farmasi'] || 0) > 0;
};
