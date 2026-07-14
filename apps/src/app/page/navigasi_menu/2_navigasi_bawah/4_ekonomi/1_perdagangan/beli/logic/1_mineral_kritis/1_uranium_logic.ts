// beli/logic/uranium_logic.ts

/**
 * Memeriksa apakah negara mitra memiliki bangunan uranium.
 * @param partnerData - Data negara mitra (biasanya berisi field "uranium" atau "bangunan_uranium")
 * @returns true jika jumlah bangunan uranium > 0, false jika 0 atau tidak ada.
 */
export const hasUraniumBuilding = (partnerData: Record<string, any> | null): boolean => {
  if (!partnerData) return false;
  // Asumsikan fieldnya adalah "uranium" (jumlah bangunan). Sesuaikan jika nama field berbeda.
  const jumlah = Number(partnerData['uranium'] || 0);
  return jumlah > 0;
};