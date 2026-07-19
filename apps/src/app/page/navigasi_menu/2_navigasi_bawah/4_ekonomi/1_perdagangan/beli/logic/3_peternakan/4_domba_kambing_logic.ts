// @ts-nocheck
export const hasDombaKambingBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['domba_kambing'] || 0) > 0;
};
