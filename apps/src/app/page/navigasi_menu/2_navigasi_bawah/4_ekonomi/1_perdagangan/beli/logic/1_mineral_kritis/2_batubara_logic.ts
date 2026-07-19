// beli/logic/2_batubara_logic.ts

/**
 * Memeriksa apakah negara mitra memiliki bangunan batu bara.
 * @param partnerData - Data negara mitra (berisi field "batu_bara")
 * @returns true jika jumlah bangunan batu bara > 0, false jika 0 atau tidak ada.
 */
export const hasBatubaraBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  const jumlah = Number(partnerData['batu_bara'] || 0);
  return jumlah > 0;
};
