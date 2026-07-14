export const hasLogamTanahJarangBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['logam_tanah_jarang'] || 0) > 0;
};
