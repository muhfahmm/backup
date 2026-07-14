/**
 * Stockpile Calculator
 * Menghitung stok komoditas yang dimulai dari 0 dan bertambah 
 * sesuai produksi per hari × jumlah bangunan
 */

import { calculateProductionIncrement, formatDate } from './productionCalculatorUser';

/**
 * Hitung total stok yang tersedia untuk ekspor
 * Dimulai dari 0 pada hari pertama, lalu bertambah sesuai produksi
 * 
 * @param resourceKey - Kunci resource (misal: "emas", "batu_bara")
 * @param countryDetail - Data negara yang berisi building count dan build date
 * @param metadata - Metadata bangunan yang berisi production rate
 * @param currentDate - Tanggal game saat ini
 * @returns Total stok yang tersedia (dimulai dari 0)
 */
export function calculateStockpile(
  resourceKey: string,
  countryDetail: any,
  metadata: any,
  currentDate?: Date
): number {
  // Validasi: jika tidak ada bangunan, stok = 0
  const buildingCount = Number(countryDetail?.[resourceKey]) || 0;
  if (buildingCount === 0) return 0;

  // Cari metadata untuk resource ini
  const bMeta = findMetadata(resourceKey, metadata);
  if (!bMeta || !bMeta.produksi) return 0;

  // Validasi: jika tidak ada tanggal game, kembalikan 0
  if (!currentDate) return 0;

  // Ambil build date - jika tidak ada, gunakan current date (artinya hari pertama = stok 0)
  const buildDateKey = `build_date_${resourceKey}`;
  const buildDate = countryDetail?.[buildDateKey];
  const currentDateStr = formatDate(currentDate);
  const finalBuildDate = buildDate || currentDateStr;

  // Hitung stok menggunakan formula yang sama:
  // Stok = produksi per hari × jumlah bangunan × hari yang berlalu
  // Dimulai dari 0, terus bertambah setiap hari
  return calculateProductionIncrement(
    bMeta.produksi,
    buildingCount,
    finalBuildDate,
    currentDateStr
  );
}

/**
 * Helper: Cari metadata dari resource key
 * Menggunakan logika yang sama seperti di ProduksiModal.tsx
 * @param key - Resource key
 * @param metadata - Object metadata
 * @returns Metadata object atau undefined
 */
function findMetadata(key: string, metadata: any): any {
  if (!metadata) {
    console.warn(`[findMetadata] Metadata kosong untuk key: ${key}`);
    return undefined;
  }
  
  // Cek langsung - metadata key matching (misal: "1_emas" atau key langsung)
  if (metadata[key]) return metadata[key];
  
  // Cek dengan pattern matching lebih komprehensif
  for (const k of Object.keys(metadata)) {
    const entry = metadata[k];
    if (!entry) continue;
    
    // Match by dataKey
    if (entry.dataKey === key) return entry;
    
    // Match by nested key pattern (misal: "1_emas", "2_emas")
    if (k.endsWith(`_${key}`) || k === `1_${key}` || k === `${key}`) return entry;
    
    // Match by checking if entry has key property
    if (entry.key && entry.key.includes(key)) return entry;
  }
  
  console.warn(`[findMetadata] Metadata tidak ditemukan untuk key: ${key}`);
  return undefined;
}

/**
 * Format stok untuk display dengan suffix unit
 * @param stok - Jumlah stok
 * @param unit - Unit satuan (misal: "KG", "TON", "BARREL")
 * @returns String terformat (misal: "240.000 KG")
 */
export function formatStockDisplay(stok: number, unit: string = ""): string {
  const formatted = stok.toLocaleString('id-ID');
  return unit ? `${formatted} ${unit}` : formatted;
}

/**
 * Check apakah stok cukup untuk ekspor
 * @param stok - Stok yang tersedia
 * @param batchSize - Ukuran batch yang ingin diekspor (default: 1000)
 * @returns true jika stok >= batchSize
 */
export function isStockSufficientForExport(stok: number, batchSize: number = 1000): boolean {
  return stok >= batchSize;
}
