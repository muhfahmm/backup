// @ts-nocheck
export const hasPakanTernakBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['pakan_ternak'] || 0) > 0;
};
