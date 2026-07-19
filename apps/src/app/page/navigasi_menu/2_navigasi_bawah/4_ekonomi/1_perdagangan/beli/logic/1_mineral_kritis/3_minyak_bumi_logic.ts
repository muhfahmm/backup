// beli/logic/3_minyak_bumi_logic.ts

/**
 * Memeriksa apakah negara mitra memiliki bangunan minyak bumi.
 * @param partnerData - Data negara mitra (berisi field "minyak_bumi")
 * @returns true jika jumlah bangunan minyak bumi > 0, false jika 0 atau tidak ada.
 */
export const hasMinyakBumiBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  const jumlah = Number(partnerData['minyak_bumi'] || 0);
  return jumlah > 0;
};
