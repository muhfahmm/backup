// @ts-nocheck
export const hasKakaoBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  return Number(partnerData['kakao'] || 0) > 0;
};
