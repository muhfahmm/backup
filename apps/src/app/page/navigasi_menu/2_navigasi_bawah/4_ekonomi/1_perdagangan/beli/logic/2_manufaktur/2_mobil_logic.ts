// @ts-nocheck
export const hasMobilBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['mobil'] || 0) > 0;
};
