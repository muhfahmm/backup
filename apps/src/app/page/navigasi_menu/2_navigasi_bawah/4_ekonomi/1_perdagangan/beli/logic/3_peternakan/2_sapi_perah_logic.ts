// @ts-nocheck
export const hasSapiPerahBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['sapi_perah'] || 0) > 0;
};