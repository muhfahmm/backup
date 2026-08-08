// 🔥 PANGKALAN LAUT LOGIC
// Pangkalan Laut capacity: 5.000 per unit
// Digunakan untuk: Kapal Induk, Kapal Induk Nuklir, Kapal Destroyer, Kapal Korvet, Kapal Selam Nuklir, Kapal Selam Reguler, Kapal Ranjau, Kapal Logistik

export const PANGKALAN_LAUT_CAPACITY = 50;

export function convertPangkalanLautToCapacity(pangkalanCount: number): number {
  return pangkalanCount * PANGKALAN_LAUT_CAPACITY;
}

export function isPangkalanLautCapacityFull(
  kapalIndukCount: number,
  kapalIndukNuklirCount: number,
  kapalDestroyerCount: number,
  kapalKorvetCount: number,
  kapalSelamNuklirCount: number,
  kapalSelamRegulerCount: number,
  kapalRanjauCount: number,
  kapalLogistikCount: number,
  pangkalanCount: number
): boolean {
  if (pangkalanCount <= 0) return false;
  const totalKapal = kapalIndukCount + kapalIndukNuklirCount + kapalDestroyerCount + kapalKorvetCount + 
                     kapalSelamNuklirCount + kapalSelamRegulerCount + kapalRanjauCount + kapalLogistikCount;
  const maxCapacity = pangkalanCount * PANGKALAN_LAUT_CAPACITY;
  return totalKapal >= maxCapacity;
}

export function getRemainingPangkalanLautCapacity(
  kapalIndukCount: number,
  kapalIndukNuklirCount: number,
  kapalDestroyerCount: number,
  kapalKorvetCount: number,
  kapalSelamNuklirCount: number,
  kapalSelamRegulerCount: number,
  kapalRanjauCount: number,
  kapalLogistikCount: number,
  pangkalanCount: number
): number {
  if (pangkalanCount <= 0) return 0;
  const totalKapal = kapalIndukCount + kapalIndukNuklirCount + kapalDestroyerCount + kapalKorvetCount + 
                     kapalSelamNuklirCount + kapalSelamRegulerCount + kapalRanjauCount + kapalLogistikCount;
  const maxCapacity = pangkalanCount * PANGKALAN_LAUT_CAPACITY;
  return Math.max(0, maxCapacity - totalKapal);
}
