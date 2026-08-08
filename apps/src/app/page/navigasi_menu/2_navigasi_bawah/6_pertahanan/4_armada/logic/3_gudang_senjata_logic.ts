// 🔥 GUDANG SENJATA LOGIC
// Gudang Senjata capacity: 2.500 per unit
// Digunakan untuk: Artileri Berat, Sistem Peluncur Roket, Pertahanan Udara Mobile, Kendaraan Taktis

export const GUDANG_SENJATA_CAPACITY = 2500;

export function convertGudangSenjataToCapacity(gudangCount: number): number {
  return gudangCount * GUDANG_SENJATA_CAPACITY;
}

export function isGudangSenjataCapacityFull(
  currentArtileriCount: number,
  currentRoketCount: number,
  currentPertahanUdaraCount: number,
  currentKendaraanTaktisCount: number,
  gudangCount: number
): boolean {
  if (gudangCount <= 0) return false;
  const totalWeapons = currentArtileriCount + currentRoketCount + currentPertahanUdaraCount + currentKendaraanTaktisCount;
  const maxCapacity = gudangCount * GUDANG_SENJATA_CAPACITY;
  return totalWeapons >= maxCapacity;
}

export function getRemainingGudangCapacity(
  currentArtileriCount: number,
  currentRoketCount: number,
  currentPertahanUdaraCount: number,
  currentKendaraanTaktisCount: number,
  gudangCount: number
): number {
  if (gudangCount <= 0) return 0;
  const totalWeapons = currentArtileriCount + currentRoketCount + currentPertahanUdaraCount + currentKendaraanTaktisCount;
  const maxCapacity = gudangCount * GUDANG_SENJATA_CAPACITY;
  return Math.max(0, maxCapacity - totalWeapons);
}
