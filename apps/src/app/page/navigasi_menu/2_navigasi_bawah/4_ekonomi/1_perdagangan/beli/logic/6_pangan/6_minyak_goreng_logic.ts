// @ts-nocheck
export const hasMinyakGorengBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['minyak_goreng'] || 0) > 0;
};
