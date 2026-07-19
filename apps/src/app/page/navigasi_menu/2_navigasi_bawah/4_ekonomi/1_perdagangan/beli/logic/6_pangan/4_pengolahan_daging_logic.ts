// @ts-nocheck
export const hasPengolahanDagingBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['pengolahan_daging'] || 0) > 0;
};
